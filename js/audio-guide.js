/* Renders the narrated walkthrough player at the top of the How to Use tab.
   One track plays at a time; a Play-all button chains them in order. */

document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.getElementById("audio-tracks");
  if (!wrap || typeof AUDIO_TRACKS === "undefined") return;

  wrap.innerHTML = AUDIO_TRACKS.map(tr => `
    <div class="track" data-n="${tr.n}">
      <span class="track-num">${tr.n}</span>
      <div class="track-mid">
        <strong>${tr.t}</strong>
        <span class="track-len">${tr.s}</span>
      </div>
      <audio preload="none" controls src="${AUDIO_BASE}${tr.f}"></audio>
    </div>`).join("");

  const players = [...wrap.querySelectorAll("audio")];

  /* only one at a time */
  players.forEach(a => a.addEventListener("play", () => {
    players.forEach(o => { if (o !== a) o.pause(); });
    if (window.tts && tts.supported) tts.stop();
  }));

  /* play all, in order */
  let chained = false;
  const chain = (on) => players.forEach((a, i) => {
    a.onended = on && i < players.length - 1 ? () => players[i + 1].play() : null;
  });

  document.getElementById("play-all-btn").addEventListener("click", (ev) => {
    chained = !chained;
    chain(chained);
    ev.target.textContent = chained ? "⏹ Stop the tour" : "▶ Play the whole tour (13 min)";
    if (chained) players[0].play(); else players.forEach(a => a.pause());
  });
});
