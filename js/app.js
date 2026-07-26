/* App shell: navigation, rendering, tag filters, global search,
   bookmarks (saved entries), share buttons, daily featured truth, support page. */

const SECTIONS = {
  biblical:   { data: () => DATA_BIBLICAL,   list: "list-biblical",   label: "Biblical History" },
  origins:    { data: () => DATA_ORIGINS,    list: "list-origins",    label: "Origins of Religions" },
  practices:  { data: () => DATA_PRACTICES,  list: "list-practices",  label: "Origins of Practices" },
  sayings:    { data: () => DATA_SAYINGS,    list: "list-sayings",    label: "Sayings & Expressions" },
  world:      { data: () => DATA_WORLD,      list: "list-world",      label: "World History & Politics" },
  language:   { data: () => DATA_LANGUAGE,   list: "list-language",   label: "Languages & Definitions" },
  migrations: { data: () => DATA_MIGRATIONS, list: "list-migrations", label: "Migrations & Diaspora" },
  heritage:   { data: () => DATA_HERITAGE,   list: "list-heritage",   label: "Roots & Recovery" },
  doctrines:  { data: () => DATA_DOCTRINES,  list: "list-doctrines",  label: "Doctrine Investigator" },
  books:      { data: () => DATA_BOOKS,      list: "list-books",      label: "Lost & Excluded Books" },
  manuscripts:{ data: () => DATA_MANUSCRIPTS,list: "list-manuscripts",label: "Manuscripts & Translations" },
  contradictions: { data: () => DATA_CONTRADICTIONS, list: "list-contradictions", label: "Contradictions & Context" },
  claims:     { data: () => DATA_CLAIMS,     list: "list-claims",     label: "Truth Analyzer" }
};

const SAVED_KEY = "dbs_saved_titles";
const activeFilters = {}; // sectionKey -> tag or null

/* ---------- saved entries (bookmarks) ---------- */

function getSaved() {
  try { return new Set(JSON.parse(localStorage.getItem(SAVED_KEY) || "[]")); }
  catch (_) { return new Set(); }
}
function toggleSaved(title) {
  const s = getSaved();
  if (s.has(title)) s.delete(title); else s.add(title);
  localStorage.setItem(SAVED_KEY, JSON.stringify([...s]));
  return s.has(title);
}
function updateSavedNavCount() {
  const btn = document.querySelector('.nav-btn[data-view="saved"]');
  if (btn) btn.textContent = `⭐ Saved (${getSaved().size})`;
}

/* ---------- rendering ---------- */

function tierBadge(tierKey) {
  const t = TIERS[tierKey];
  if (!t) return "";
  return `<span class="badge" style="background:${t.color}" title="${escapeHtml(t.desc)}">${t.label}</span>`;
}

function verdictBadge(vKey) {
  const v = VERDICTS[vKey];
  if (!v) return "";
  return `<span class="badge" style="background:${v.color}">${v.label}</span>`;
}

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function entryCard(entry, highlight) {
  const isClaim = !!entry.verdict;
  const badge = isClaim ? verdictBadge(entry.verdict) : tierBadge(entry.tier);
  const saved = getSaved().has(entry.title);
  const hl = (text) => {
    let out = escapeHtml(text);
    if (highlight) {
      const re = new RegExp("(" + highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
      out = out.replace(re, "<mark>$1</mark>");
    }
    return out;
  };

  let evidenceHtml = "";
  if (isClaim) {
    evidenceHtml = `
      <div class="evidence-cols">
        <div class="evidence-col for"><h5>Evidence for the claim</h5><p>${hl(entry.forEvidence)}</p></div>
        <div class="evidence-col against"><h5>Evidence against / context</h5><p>${hl(entry.againstEvidence)}</p></div>
      </div>`;
  }

  const sources = entry.sources && entry.sources.length
    ? `<div class="sources"><span>Sources:</span> ${entry.sources.map(escapeHtml).join(" · ")}</div>`
    : "";

  return `
    <article class="entry-card" data-title="${escapeHtml(entry.title)}">
      <div class="entry-top">
        <h3>${hl(entry.title)}</h3>
        <span class="entry-meta">
          ${entry.date ? `<span class="entry-date">${escapeHtml(entry.date)}</span>` : ""}
          <button class="icon-btn save-btn ${saved ? "saved" : ""}" title="${saved ? "Remove from saved" : "Save this entry"}">${saved ? "⭐" : "☆"}</button>
          <button class="icon-btn share-btn" title="Copy this entry to share">⤴</button>
        </span>
      </div>
      ${badge}
      ${evidenceHtml}
      <p class="body">${hl(entry.body)}</p>
      ${sources}
    </article>`;
}

function findEntryByTitle(title) {
  for (const key of Object.keys(SECTIONS)) {
    const found = SECTIONS[key].data().find(e => e.title === title);
    if (found) return { entry: found, sectionLabel: SECTIONS[key].label };
  }
  return null;
}

/* one delegated handler for save/share on every list */
document.addEventListener("click", async (ev) => {
  const saveBtn = ev.target.closest(".save-btn");
  const shareBtn = ev.target.closest(".share-btn");
  if (!saveBtn && !shareBtn) return;
  const card = ev.target.closest(".entry-card");
  if (!card) return;
  const title = card.dataset.title;

  if (saveBtn) {
    const nowSaved = toggleSaved(title);
    saveBtn.textContent = nowSaved ? "⭐" : "☆";
    saveBtn.classList.toggle("saved", nowSaved);
    saveBtn.title = nowSaved ? "Remove from saved" : "Save this entry";
    updateSavedNavCount();
    const savedView = document.getElementById("view-saved");
    if (savedView && savedView.classList.contains("active")) renderSavedView();
  }

  if (shareBtn) {
    const found = findEntryByTitle(title);
    if (!found) return;
    const e = found.entry;
    const grade = e.verdict ? (VERDICTS[e.verdict]?.label || e.verdict) : (TIERS[e.tier]?.label || e.tier);
    const text = `${e.title}${e.date ? " (" + e.date + ")" : ""}\nEvidence grade: ${grade}\n\n${e.body}\n\nSources: ${(e.sources || []).join("; ")}\n\n— Deep Bible Study: The Truth Project\n${location.origin}${location.pathname}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: e.title, text });
      } else {
        await navigator.clipboard.writeText(text);
        shareBtn.textContent = "✓";
        setTimeout(() => { shareBtn.textContent = "⤴"; }, 1500);
      }
    } catch (_) { /* user canceled */ }
  }
});

function renderSection(key) {
  const section = SECTIONS[key];
  const listEl = document.getElementById(section.list);
  if (!listEl) return;
  const filter = activeFilters[key];
  const entries = section.data().filter(e => !filter || (e.tags || []).includes(filter));
  listEl.innerHTML = entries.length
    ? entries.map(e => entryCard(e)).join("")
    : `<p class="empty-msg">No entries match this filter.</p>`;
}

function renderSavedView() {
  const listEl = document.getElementById("list-saved");
  const titles = [...getSaved()];
  const found = titles.map(findEntryByTitle).filter(Boolean);
  listEl.innerHTML = found.length
    ? found.map(r =>
        `<div><p class="sources" style="border:none;padding:0;margin:0 0 -0.5rem"><span>${escapeHtml(r.sectionLabel)}</span></p>${entryCard(r.entry)}</div>`
      ).join("")
    : `<p class="empty-msg">Nothing saved yet. Tap the ☆ star on any entry to keep it here for quick study.</p>`;
}

function buildFilterBars() {
  document.querySelectorAll(".filter-bar").forEach(bar => {
    const key = bar.dataset.section;
    const section = SECTIONS[key];
    if (!section) return;
    const tags = [...new Set(section.data().flatMap(e => e.tags || []))].sort();
    if (tags.length < 2) return;
    bar.innerHTML =
      `<button class="filter-chip active" data-tag="">All</button>` +
      tags.map(t => `<button class="filter-chip" data-tag="${t}">${t}</button>`).join("");
    bar.addEventListener("click", (ev) => {
      const chip = ev.target.closest(".filter-chip");
      if (!chip) return;
      bar.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeFilters[key] = chip.dataset.tag || null;
      renderSection(key);
    });
  });
}

function buildTierLegend() {
  const el = document.getElementById("tier-legend");
  if (!el) return;
  el.innerHTML = Object.keys(TIERS).map(k => {
    const t = TIERS[k];
    return `<div class="tier-card">
      <span class="badge" style="background:${t.color}">${t.label}</span>
      <p><strong>${escapeHtml(t.short)}.</strong> ${escapeHtml(t.desc)}</p>
    </div>`;
  }).join("");
}

/* ---------- daily featured truth ---------- */

function renderDaily() {
  const slot = document.getElementById("daily-slot");
  if (!slot) return;
  const all = [];
  Object.keys(SECTIONS).forEach(key =>
    SECTIONS[key].data().forEach(e => all.push({ e, label: SECTIONS[key].label })));
  const now = new Date();
  const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
  const pick = all[(dayOfYear * 31 + now.getFullYear()) % all.length];
  slot.innerHTML = `
    <h3 class="section-title">📅 Today's truth — from ${escapeHtml(pick.label)}</h3>
    ${entryCard(pick.e)}`;
}

/* ---------- support page ---------- */

function renderSupport() {
  const el = document.getElementById("support-links");
  if (!el) return;
  const defs = [
    ["kofi", "☕ Ko-fi", "One-time tips"],
    ["buymeacoffee", "☕ Buy Me a Coffee", "One-time tips"],
    ["paypal", "💛 PayPal", "One-time donation"],
    ["cashapp", "💵 Cash App", "One-time donation"],
    ["patreon", "🤝 Patreon", "Monthly membership"],
    ["gumroad", "📚 Study guides & courses", "Digital products"],
    ["payhip", "📚 Digital products", "Digital products"]
  ];
  const active = defs.filter(d => (SUPPORT_LINKS[d[0]] || "").trim());
  if (active.length) {
    el.innerHTML = active.map(d =>
      `<a class="support-btn" href="${escapeHtml(SUPPORT_LINKS[d[0]])}" target="_blank" rel="noopener">
         <strong>${d[1]}</strong><span>${d[2]}</span></a>`).join("");
    const msg = document.getElementById("support-message");
    if (msg && typeof SUPPORT_MESSAGE === "string" && SUPPORT_MESSAGE.trim()) {
      msg.textContent = SUPPORT_MESSAGE;
      msg.hidden = false;
    }
  } else {
    el.innerHTML = `<p class="empty-msg">The owner hasn't connected support links yet. (Owner: open <code>data/support-config.js</code>, paste your Ko-fi / PayPal / Patreon / Gumroad links, and the buttons appear here automatically.)</p>`;
  }
}

/* ---------- navigation ---------- */

function showView(name) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const view = document.getElementById("view-" + name);
  if (view) view.classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.view === name));
  if (name === "saved") renderSavedView();
  if (name !== "search") {
    const search = document.getElementById("global-search");
    if (search.value) search.value = "";
  }
  window.scrollTo({ top: 0 });
}

/* ---------- global search ---------- */

function runSearch(q) {
  const query = q.trim().toLowerCase();
  if (!query) { showView("home"); return; }

  const results = [];
  Object.keys(SECTIONS).forEach(key => {
    SECTIONS[key].data().forEach(entry => {
      const haystack = [
        entry.title, entry.body, entry.date,
        entry.forEvidence, entry.againstEvidence,
        (entry.tags || []).join(" "),
        (entry.sources || []).join(" ")
      ].filter(Boolean).join(" ").toLowerCase();
      if (haystack.includes(query)) results.push({ entry, section: SECTIONS[key].label });
    });
  });

  document.getElementById("search-summary").textContent =
    `${results.length} result${results.length === 1 ? "" : "s"} for “${q.trim()}”`;
  document.getElementById("list-search").innerHTML = results.length
    ? results.map(r =>
        `<div><p class="sources" style="border:none;padding:0;margin:0 0 -0.5rem"><span>${escapeHtml(r.section)}</span></p>${entryCard(r.entry, q.trim())}</div>`
      ).join("")
    : `<p class="empty-msg">Nothing found. Try a shorter word — e.g. “tree”, “Sheol”, “Rome”, “Kongo”, “OK”.</p>`;

  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById("view-search").classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
}

/* ---------- init ---------- */

document.addEventListener("DOMContentLoaded", () => {
  buildTierLegend();
  buildFilterBars();
  Object.keys(SECTIONS).forEach(renderSection);
  renderDaily();
  renderSupport();
  updateSavedNavCount();

  document.getElementById("main-nav").addEventListener("click", (ev) => {
    const btn = ev.target.closest(".nav-btn");
    if (btn) showView(btn.dataset.view);
  });

  let searchTimer;
  document.getElementById("global-search").addEventListener("input", (ev) => {
    clearTimeout(searchTimer);
    const value = ev.target.value;
    searchTimer = setTimeout(() => runSearch(value), 250);
  });
});
