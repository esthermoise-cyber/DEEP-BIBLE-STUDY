/* Truth Analyzer AI — conversational Claude API integration with voice.
   - The user's API key lives only in their browser (localStorage), sent only to Anthropic.
   - Conversation memory: follow-up questions keep context until "New conversation".
   - Voice IN: browser SpeechRecognition (mic button — speak instead of typing).
   - Voice OUT: browser speechSynthesis (answers read aloud; auto-read toggle). */

const ANALYZER_SYSTEM_PROMPT = `You are the Truth Analyzer for "Deep Bible Study — The Truth Project", a research tool about biblical history, the ancient Israelites, origins of religions and customs, world history and politics, languages and etymology, Israelite migrations, and African-diaspora / Haitian heritage recovery.

Your one absolute rule: never present a claim as more certain than the evidence allows. That rule overrides pleasing the user, defending any religion, or attacking any religion.

For every answer:
1. Grade every substantive claim with one of these tiers, inline in brackets:
   [DOCUMENTED] physical/contemporary evidence · [STRONG] multiple independent ancient sources · [CONSENSUS] most scholars agree by inference · [DEBATED] qualified scholars genuinely disagree · [TRADITION] later tradition only, unverifiable · [UNSUPPORTED] popular claim contradicted by or lacking evidence · [UNKNOWN] the evidence simply runs out.
2. Name your actual sources (inscriptions, manuscripts, excavations, named ancient authors, peer-reviewed studies) — not vague appeals like "historians say".
3. When evidence is missing, reason openly from patterns and say "most likely, because…" — clearly labeled as inference, never dressed up as fact.
4. Correct popular myths in BOTH directions: false church traditions AND false internet claims against religion. Truth is not a team sport.
5. Distinguish three question types the user may blur: What happened? (history — answer it). What does the text say in the original language? (textual — answer it). What should someone believe or do? (conscience — lay out the evidence and explicitly leave the judgment to them).
6. If the honest answer is "we don't know", say exactly that, then explain what evidence WOULD settle it.
7. Never invent sources, quotes, dates, or artifacts. If unsure of a detail, say so rather than guessing.

Your answers may be read aloud by text-to-speech, so write in clear flowing sentences — no markdown tables, no headers, no bullet symbols. Be direct, plain-spoken, and concise. Lead with the answer, then the evidence.`;

const KEY_STORAGE = "dbs_anthropic_key";
const AUTOREAD_STORAGE = "dbs_autoread";

let conversation = []; // {role, content} pairs sent to the API

/* ---------------- API ---------------- */

function getKey() { return localStorage.getItem(KEY_STORAGE) || ""; }

async function askAnalyzer(question) {
  const apiKey = getKey();
  if (!apiKey) throw new Error("No API key saved. Paste your Anthropic API key above and click Save.");

  const messages = [...conversation, { role: "user", content: question }];

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true"
    },
    body: JSON.stringify({
      model: "claude-opus-4-8",
      max_tokens: 4096,
      thinking: { type: "adaptive" },
      system: ANALYZER_SYSTEM_PROMPT,
      messages
    })
  });

  if (!res.ok) {
    let detail = "";
    try { detail = (await res.json()).error?.message || ""; } catch (_) {}
    if (res.status === 401) throw new Error("Invalid API key (401). Check the key and save it again.");
    if (res.status === 429) throw new Error("Rate limited (429). Wait a moment and try again.");
    throw new Error(`API error ${res.status}. ${detail}`);
  }

  const data = await res.json();
  if (data.stop_reason === "refusal") {
    throw new Error("The model declined this request for safety reasons. Try rephrasing the question.");
  }
  const text = (data.content || [])
    .filter(b => b.type === "text")
    .map(b => b.text)
    .join("\n")
    .trim() || "(empty response)";

  // remember the exchange so follow-up questions have context
  conversation.push({ role: "user", content: question });
  conversation.push({ role: "assistant", content: text });
  return text;
}

/* ---------------- Voice OUT (text-to-speech) ---------------- */

const tts = {
  supported: "speechSynthesis" in window,
  speakingBtn: null,

  cleanForSpeech(text) {
    return text
      .replace(/\[(DOCUMENTED|STRONG|CONSENSUS|DEBATED|TRADITION|UNSUPPORTED|UNKNOWN)\]/gi, "($1)")
      .replace(/[*_#`>|]/g, " ")
      .replace(/\s{2,}/g, " ");
  },

  speak(text, btn) {
    if (!this.supported) return;
    this.stop();
    const u = new SpeechSynthesisUtterance(this.cleanForSpeech(text));
    u.rate = 1;
    u.onend = () => this.markStopped();
    u.onerror = () => this.markStopped();
    this.speakingBtn = btn || null;
    if (btn) btn.textContent = "⏹ Stop";
    speechSynthesis.speak(u);
  },

  stop() {
    if (this.supported) speechSynthesis.cancel();
    this.markStopped();
  },

  markStopped() {
    if (this.speakingBtn) this.speakingBtn.textContent = "🔊 Listen";
    this.speakingBtn = null;
  }
};

/* ---------------- Voice IN (speech-to-text) ---------------- */

function makeRecognizer(onResult, onState) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return null;
  const rec = new SR();
  rec.continuous = false;
  rec.interimResults = true;
  rec.lang = navigator.language || "en-US";
  let finalText = "";
  rec.onresult = (ev) => {
    let interim = "";
    for (let i = ev.resultIndex; i < ev.results.length; i++) {
      if (ev.results[i].isFinal) finalText += ev.results[i][0].transcript;
      else interim += ev.results[i][0].transcript;
    }
    onResult(finalText, interim);
  };
  rec.onstart = () => onState("listening");
  rec.onend = () => onState("idle");
  rec.onerror = (ev) => onState(ev.error === "not-allowed" ? "denied" : "idle");
  return rec;
}

/* ---------------- UI ---------------- */

function updateKeyStatus() {
  const status = document.getElementById("key-status");
  status.textContent = getKey() ? "✓ Key saved in this browser" : "No key saved — AI disabled";
}

function appendBubble(threadEl, role, text) {
  const div = document.createElement("div");
  div.className = "chat-bubble " + (role === "user" ? "chat-user" : "chat-ai");
  const label = document.createElement("div");
  label.className = "chat-label";
  label.textContent = role === "user" ? "You" : "Truth Analyzer";
  const body = document.createElement("div");
  body.className = "chat-text";
  body.textContent = text;
  div.appendChild(label);
  div.appendChild(body);

  if (role === "ai" || role === "assistant") {
    if (tts.supported) {
      const listenBtn = document.createElement("button");
      listenBtn.className = "btn btn-ghost btn-small";
      listenBtn.textContent = "🔊 Listen";
      listenBtn.addEventListener("click", () => {
        if (tts.speakingBtn === listenBtn) tts.stop();
        else tts.speak(text, listenBtn);
      });
      div.appendChild(listenBtn);
    }
  }
  threadEl.appendChild(div);
  threadEl.hidden = false;
  div.scrollIntoView({ behavior: "smooth", block: "nearest" });
  return div;
}

document.addEventListener("DOMContentLoaded", () => {
  const keyInput = document.getElementById("api-key-input");
  const askBtn = document.getElementById("ask-btn");
  const micBtn = document.getElementById("mic-btn");
  const newConvBtn = document.getElementById("new-conv-btn");
  const autoReadToggle = document.getElementById("auto-read-toggle");
  const status = document.getElementById("ai-status");
  const thread = document.getElementById("ai-thread");
  const questionEl = document.getElementById("ai-question");

  updateKeyStatus();

  /* key management */
  document.getElementById("save-key-btn").addEventListener("click", () => {
    const v = keyInput.value.trim();
    if (v) { localStorage.setItem(KEY_STORAGE, v); keyInput.value = ""; }
    updateKeyStatus();
  });
  document.getElementById("clear-key-btn").addEventListener("click", () => {
    localStorage.removeItem(KEY_STORAGE);
    updateKeyStatus();
  });

  /* auto-read preference */
  autoReadToggle.checked = localStorage.getItem(AUTOREAD_STORAGE) === "1";
  if (!tts.supported) {
    autoReadToggle.disabled = true;
    autoReadToggle.parentElement.title = "Voice output not supported in this browser";
  }
  autoReadToggle.addEventListener("change", () => {
    localStorage.setItem(AUTOREAD_STORAGE, autoReadToggle.checked ? "1" : "0");
    if (!autoReadToggle.checked) tts.stop();
  });

  /* microphone — speak your question */
  let recognizer = null;
  let baseText = "";
  if (micBtn) {
    const rec = makeRecognizer(
      (finalText, interim) => {
        questionEl.value = (baseText + finalText + interim).trimStart();
      },
      (state) => {
        if (state === "listening") {
          micBtn.classList.add("mic-live");
          micBtn.textContent = "🎙 Listening… (tap to stop)";
        } else {
          micBtn.classList.remove("mic-live");
          micBtn.textContent = "🎤 Speak";
          if (state === "denied") status.textContent = "⚠ Microphone permission was denied. Allow it in your browser settings.";
        }
      }
    );
    recognizer = rec;
    if (!rec) {
      micBtn.disabled = true;
      micBtn.title = "Voice input not supported in this browser (try Chrome, Edge, or Safari)";
      micBtn.textContent = "🎤 (not supported here)";
    } else {
      micBtn.addEventListener("click", () => {
        if (micBtn.classList.contains("mic-live")) { rec.stop(); return; }
        tts.stop();
        baseText = questionEl.value ? questionEl.value + " " : "";
        try { rec.start(); } catch (_) {}
      });
    }
  }

  /* new conversation */
  newConvBtn.addEventListener("click", () => {
    conversation = [];
    thread.innerHTML = "";
    thread.hidden = true;
    tts.stop();
    status.textContent = "New conversation started — context cleared.";
  });

  /* ask */
  async function submitQuestion() {
    const q = questionEl.value.trim();
    if (!q) { status.textContent = "Type or speak a question first."; return; }
    if (recognizer) { try { recognizer.stop(); } catch (_) {} }
    tts.stop();
    askBtn.disabled = true;
    status.textContent = "Analyzing… (deep questions can take a minute)";
    appendBubble(thread, "user", q);
    questionEl.value = "";
    try {
      const answer = await askAnalyzer(q);
      const bubble = appendBubble(thread, "ai", answer);
      status.textContent = "";
      if (autoReadToggle.checked && tts.supported) {
        const listenBtn = bubble.querySelector("button");
        tts.speak(answer, listenBtn);
      }
    } catch (err) {
      status.textContent = "⚠ " + err.message;
    } finally {
      askBtn.disabled = false;
    }
  }

  askBtn.addEventListener("click", submitQuestion);
  questionEl.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter" && !ev.shiftKey) { ev.preventDefault(); submitQuestion(); }
  });
});
