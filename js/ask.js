/* Floating Ask agent — available on every page.
   - Without an API key: answers from the app's own research (ranked retrieval
     across all ~130 entries), rendered as full entry cards and spoken aloud.
   - With an API key: full AI answer GROUNDED in the app's matching entries
     (they're passed as context), clearly saying when it goes beyond them.
   - Mic input and read-aloud output throughout. */

document.addEventListener("DOMContentLoaded", () => {
  /* inject markup */
  const fab = document.createElement("button");
  fab.id = "ask-fab";
  fab.innerHTML = "🎙<span>Ask</span>";
  fab.title = "Ask a question — by voice or text";
  document.body.appendChild(fab);

  const panel = document.createElement("div");
  panel.id = "ask-panel";
  panel.hidden = true;
  panel.innerHTML = `
    <div class="ask-head">
      <strong>Ask — and the research answers</strong>
      <button id="ask-close" class="icon-btn" title="Close">✕</button>
    </div>
    <p class="ask-note">Speak or type any question. The app searches its own researched entries and reads you the answer.
      <span id="ask-mode"></span></p>
    <textarea id="ask-input" rows="2" placeholder="e.g. 'Where did tithing come from?' — or tap the mic and just ask"></textarea>
    <div class="ai-actions">
      <button id="ask-mic" class="btn">🎤 Speak</button>
      <button id="ask-go" class="btn btn-primary">Ask</button>
      <label class="auto-read-label"><input type="checkbox" id="ask-autoread" checked> 🔊 Speak answers</label>
      <span id="ask-status" class="ai-status"></span>
    </div>
    <div id="ask-results"></div>`;
  document.body.appendChild(panel);

  const input = document.getElementById("ask-input");
  const status = document.getElementById("ask-status");
  const results = document.getElementById("ask-results");
  const autoread = document.getElementById("ask-autoread");
  const micBtn = document.getElementById("ask-mic");
  const modeEl = document.getElementById("ask-mode");

  function refreshMode() {
    modeEl.innerHTML = (typeof getKey === "function" && getKey())
      ? "<strong>AI mode is ON</strong> — answers combine the app's research with the AI's broader knowledge."
      : "Add an API key in the Truth Analyzer tab to upgrade this into a full AI conversation.";
  }

  fab.addEventListener("click", () => {
    panel.hidden = !panel.hidden;
    if (!panel.hidden) { refreshMode(); input.focus(); }
    else tts.stop();
  });
  document.getElementById("ask-close").addEventListener("click", () => { panel.hidden = true; tts.stop(); });

  /* mic */
  let base = "";
  const rec = (typeof makeRecognizer === "function") ? makeRecognizer(
    (finalText, interim) => { input.value = (base + finalText + interim).trimStart(); },
    (state) => {
      if (state === "listening") { micBtn.classList.add("mic-live"); micBtn.textContent = "🎙 Listening…"; }
      else {
        micBtn.classList.remove("mic-live"); micBtn.textContent = "🎤 Speak";
        if (state === "denied") status.textContent = "⚠ Microphone permission denied — allow it in browser settings.";
      }
    }) : null;
  if (!rec) { micBtn.disabled = true; micBtn.title = "Voice input not supported in this browser"; }
  else micBtn.addEventListener("click", () => {
    if (micBtn.classList.contains("mic-live")) { rec.stop(); return; }
    tts.stop();
    base = input.value ? input.value + " " : "";
    try { rec.start(); } catch (_) {}
  });

  function speakIfOn(text) {
    if (autoread.checked && typeof tts !== "undefined" && tts.supported) {
      tts.speak(text.replace(/[֐-׿]+/g, " (Hebrew) "));
    }
  }

  async function aiAnswer(question, matches) {
    const context = matches.slice(0, 3).map((m, i) =>
      `[APP ENTRY ${i + 1} — ${m.section} — graded ${m.entry.tier || m.entry.verdict}] ${m.entry.title}\n${m.entry.body}\n${(m.entry.deep || "").slice(0, 1200)}`
    ).join("\n\n");
    const prompt = (context
      ? `THE APP'S OWN RESEARCHED ENTRIES ON THIS TOPIC (ground your answer in these first; where you go beyond them, say so):\n\n${context}\n\nQUESTION: ${question}`
      : question);
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": getKey(),
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true"
      },
      body: JSON.stringify({
        model: "claude-opus-4-8",
        max_tokens: 3000,
        thinking: { type: "adaptive" },
        system: ANALYZER_SYSTEM_PROMPT,
        messages: [{ role: "user", content: prompt }]
      })
    });
    if (!res.ok) {
      let d = ""; try { d = (await res.json()).error?.message || ""; } catch (_) {}
      throw new Error(`AI error ${res.status}. ${d}`);
    }
    const data = await res.json();
    if (data.stop_reason === "refusal") throw new Error("The model declined this request — try rephrasing.");
    return (data.content || []).filter(b => b.type === "text").map(b => b.text).join("\n").trim();
  }

  async function ask() {
    const q = input.value.trim();
    if (!q) { status.textContent = "Speak or type a question first."; return; }
    tts.stop();
    status.textContent = "Searching the research…";
    results.innerHTML = "";

    const matches = searchEntriesRanked(q, 4);
    const hasKey = typeof getKey === "function" && !!getKey();

    /* always show the app's own matching research */
    if (matches.length) {
      results.innerHTML = `<p class="ask-found">Found in this app's research:</p>` +
        matches.map(m =>
          `<div><p class="sources" style="border:none;padding:0;margin:0 0 -0.5rem"><span>${escapeHtml(m.section)}</span></p>${entryCard(m.entry)}</div>`
        ).join("");
    }

    if (hasKey) {
      status.textContent = "The AI is analyzing… (can take a minute)";
      try {
        const answer = await aiAnswer(q, matches);
        const div = document.createElement("div");
        div.className = "chat-bubble chat-ai";
        div.innerHTML = `<div class="chat-label">AI answer — grounded in the app's research</div>`;
        const body = document.createElement("div");
        body.className = "chat-text";
        body.textContent = answer;
        div.appendChild(body);
        if (typeof tts !== "undefined" && tts.supported) {
          const lb = document.createElement("button");
          lb.className = "btn btn-ghost btn-small";
          lb.textContent = "🔊 Listen";
          lb.addEventListener("click", () => { if (tts.speakingBtn === lb) tts.stop(); else tts.speak(answer, lb); });
          div.appendChild(lb);
        }
        if (typeof notebookAdd === "function") {
          const nb = document.createElement("button");
          nb.className = "btn btn-ghost btn-small";
          nb.style.marginLeft = "0.4rem";
          nb.textContent = "📓 Save";
          nb.addEventListener("click", () => { notebookAdd("Ask — " + q.slice(0, 80), answer); nb.textContent = "📓 Saved ✓"; });
          div.appendChild(nb);
        }
        results.prepend(div);
        status.textContent = "";
        speakIfOn(answer);
      } catch (err) {
        status.textContent = "⚠ " + err.message;
        if (matches.length) speakIfOn("The AI had an error, but here is what the app's research says. " + matches[0].entry.title + ". " + matches[0].entry.body);
      }
    } else if (matches.length) {
      status.textContent = "";
      speakIfOn("Here is what the app's research says. " + matches[0].entry.title + ". " + matches[0].entry.body);
    } else {
      status.textContent = "Nothing in the app matches that yet.";
      results.innerHTML = `<p class="empty-msg">No matching entries. Try different words — or add an API key in the Truth Analyzer tab and the AI will research it with you.</p>`;
      speakIfOn("I could not find that in the app's research yet. Try different words, or turn on the A I in the Truth Analyzer tab.");
    }
  }

  document.getElementById("ask-go").addEventListener("click", ask);
  input.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter" && !ev.shiftKey) { ev.preventDefault(); ask(); }
  });
});
