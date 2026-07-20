/* Hebrew Dictionary — searchable word list with real pronunciation.
   Pronunciation strategy (honest about device limits):
   1. If the device has a Hebrew text-to-speech voice, speak the actual Hebrew.
   2. Otherwise, speak the transliteration with an English voice — approximate
      but genuinely useful for learning.
   A status line tells the user which mode their device is using. */

function getHebrewVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = speechSynthesis.getVoices();
  return voices.find(v => v.lang && v.lang.toLowerCase().startsWith("he")) || null;
}

function speakHebrew(hebText, translit) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const voice = getHebrewVoice();
  const u = new SpeechSynthesisUtterance(voice ? hebText : translit);
  if (voice) { u.voice = voice; u.lang = voice.lang; }
  u.rate = 0.75; // slow, for learners
  speechSynthesis.speak(u);
}

function renderDictionary(filter) {
  const listEl = document.getElementById("dict-list");
  if (!listEl) return;
  const q = (filter || "").trim().toLowerCase();
  const rows = DATA_DICTIONARY.filter(w =>
    !q ||
    w.heb.includes(filter.trim()) ||
    w.translit.toLowerCase().includes(q) ||
    w.meaning.toLowerCase().includes(q) ||
    (w.note || "").toLowerCase().includes(q)
  );
  listEl.innerHTML = rows.length
    ? rows.map((w, i) => `
        <article class="dict-card" data-i="${DATA_DICTIONARY.indexOf(w)}">
          <div class="dict-row">
            <span class="dict-heb">${w.heb}</span>
            <div class="dict-mid">
              <strong>${w.translit}</strong>
              <span class="dict-say">🗣 ${w.say}</span>
              <span class="dict-meaning">${w.meaning}</span>
            </div>
            <button class="btn dict-speak" title="Hear this word">🔊 Hear</button>
          </div>
          ${w.note ? `<p class="dict-note">${w.note}</p>` : ""}
        </article>`).join("")
    : `<p class="empty-msg">No words match. Try the transliteration ("shalom"), the meaning ("peace"), or the Hebrew itself.</p>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderDictionary("");

  /* voice availability notice (voices can load async) */
  const notice = document.getElementById("dict-voice-status");
  function updateNotice() {
    if (!("speechSynthesis" in window)) {
      notice.textContent = "⚠ This browser has no text-to-speech — pronunciation buttons are disabled. The 🗣 guides still show you how each word sounds.";
      return;
    }
    notice.textContent = getHebrewVoice()
      ? "✓ Your device has a Hebrew voice — the 🔊 buttons speak real Hebrew."
      : "Your device has no Hebrew voice installed, so 🔊 speaks the transliteration instead (approximate but useful). Tip: phones often gain a Hebrew voice by adding Hebrew in the device's language/text-to-speech settings.";
  }
  updateNotice();
  if ("speechSynthesis" in window) speechSynthesis.onvoiceschanged = updateNotice;

  document.getElementById("dict-search").addEventListener("input", (ev) => {
    renderDictionary(ev.target.value);
  });

  document.getElementById("dict-list").addEventListener("click", (ev) => {
    const btn = ev.target.closest(".dict-speak");
    if (!btn) return;
    const card = ev.target.closest(".dict-card");
    const w = DATA_DICTIONARY[Number(card.dataset.i)];
    if (w) speakHebrew(w.heb, w.translit);
  });
});
