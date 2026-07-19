/* Truth Analyzer AI — optional Claude API integration.
   The user's API key is stored only in their own browser (localStorage) and
   sent only to api.anthropic.com. The system prompt binds the model to the
   same truth-first, evidence-tiered rules used across the site. */

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

Be direct, plain-spoken, and concise. Lead with the answer, then the evidence.`;

const KEY_STORAGE = "dbs_anthropic_key";

function getKey() { return localStorage.getItem(KEY_STORAGE) || ""; }

function updateKeyStatus() {
  const status = document.getElementById("key-status");
  status.textContent = getKey() ? "✓ Key saved in this browser" : "No key saved — AI disabled";
}

async function askAnalyzer(question) {
  const apiKey = getKey();
  if (!apiKey) throw new Error("No API key saved. Paste your Anthropic API key above and click Save.");

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
      messages: [{ role: "user", content: question }]
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
  return (data.content || [])
    .filter(b => b.type === "text")
    .map(b => b.text)
    .join("\n")
    .trim() || "(empty response)";
}

document.addEventListener("DOMContentLoaded", () => {
  const keyInput = document.getElementById("api-key-input");
  const askBtn = document.getElementById("ask-btn");
  const status = document.getElementById("ai-status");
  const answerEl = document.getElementById("ai-answer");

  updateKeyStatus();

  document.getElementById("save-key-btn").addEventListener("click", () => {
    const v = keyInput.value.trim();
    if (v) {
      localStorage.setItem(KEY_STORAGE, v);
      keyInput.value = "";
    }
    updateKeyStatus();
  });

  document.getElementById("clear-key-btn").addEventListener("click", () => {
    localStorage.removeItem(KEY_STORAGE);
    updateKeyStatus();
  });

  askBtn.addEventListener("click", async () => {
    const q = document.getElementById("ai-question").value.trim();
    if (!q) { status.textContent = "Type a question first."; return; }
    askBtn.disabled = true;
    status.textContent = "Analyzing… (deep questions can take a minute)";
    answerEl.hidden = true;
    try {
      const answer = await askAnalyzer(q);
      answerEl.textContent = answer;
      answerEl.hidden = false;
      status.textContent = "";
    } catch (err) {
      status.textContent = "⚠ " + err.message;
    } finally {
      askBtn.disabled = false;
    }
  });
});
