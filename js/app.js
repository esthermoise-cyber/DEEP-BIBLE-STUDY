/* App shell: navigation, rendering, tag filters, global search. */

const SECTIONS = {
  biblical:   { data: () => DATA_BIBLICAL,   list: "list-biblical",   label: "Biblical History" },
  origins:    { data: () => DATA_ORIGINS,    list: "list-origins",    label: "Origins of Religions" },
  practices:  { data: () => DATA_PRACTICES,  list: "list-practices",  label: "Origins of Practices" },
  world:      { data: () => DATA_WORLD,      list: "list-world",      label: "World History & Politics" },
  language:   { data: () => DATA_LANGUAGE,   list: "list-language",   label: "Languages & Definitions" },
  migrations: { data: () => DATA_MIGRATIONS, list: "list-migrations", label: "Migrations & Diaspora" },
  heritage:   { data: () => DATA_HERITAGE,   list: "list-heritage",   label: "Roots & Recovery" },
  claims:     { data: () => DATA_CLAIMS,     list: "list-claims",     label: "Truth Analyzer" }
};

const activeFilters = {}; // sectionKey -> tag or null

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
    <article class="entry-card">
      <div class="entry-top">
        <h3>${hl(entry.title)}</h3>
        ${entry.date ? `<span class="entry-date">${escapeHtml(entry.date)}</span>` : ""}
      </div>
      ${badge}
      ${evidenceHtml}
      <p class="body">${hl(entry.body)}</p>
      ${sources}
    </article>`;
}

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

/* ---------- navigation ---------- */

function showView(name) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const view = document.getElementById("view-" + name);
  if (view) view.classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.view === name));
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
    : `<p class="empty-msg">Nothing found. Try a shorter word — e.g. “tree”, “Sheol”, “Rome”, “Kongo”.</p>`;

  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById("view-search").classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
}

/* ---------- init ---------- */

document.addEventListener("DOMContentLoaded", () => {
  buildTierLegend();
  buildFilterBars();
  Object.keys(SECTIONS).forEach(renderSection);

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
