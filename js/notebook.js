/* Research Notebook — personal notes, saved AI answers, open questions.
   Stored in this browser (localStorage); exportable as a Markdown file. */

const NOTEBOOK_KEY = "dbs_notebook";

function getNotes() {
  try { return JSON.parse(localStorage.getItem(NOTEBOOK_KEY) || "[]"); }
  catch (_) { return []; }
}
function saveNotes(notes) {
  localStorage.setItem(NOTEBOOK_KEY, JSON.stringify(notes));
}

/* global: used by the 📓 buttons on AI answers */
function notebookAdd(title, text) {
  const notes = getNotes();
  notes.unshift({
    id: "n" + Date.now() + Math.random().toString(36).slice(2, 6),
    title: (title || "Note").slice(0, 120),
    text: text || "",
    created: new Date().toISOString()
  });
  saveNotes(notes);
  renderNotebook();
  updateNotebookNavCount();
}

function updateNotebookNavCount() {
  const btn = document.querySelector('.nav-btn[data-view="notebook"]');
  if (btn) btn.textContent = `📓 Notebook (${getNotes().length})`;
}

function renderNotebook() {
  const listEl = document.getElementById("notebook-list");
  if (!listEl) return;
  const notes = getNotes();
  listEl.innerHTML = notes.length
    ? notes.map(n => `
        <article class="entry-card note-card" data-note="${n.id}">
          <div class="entry-top">
            <h3>${escapeHtml(n.title)}</h3>
            <span class="entry-meta">
              <span class="entry-date">${new Date(n.created).toLocaleDateString()}</span>
              <button class="icon-btn note-del" title="Delete this note">🗑</button>
            </span>
          </div>
          <textarea class="note-text" rows="4">${escapeHtml(n.text)}</textarea>
        </article>`).join("")
    : `<p class="empty-msg">No notes yet. Write one below, or tap 📓 on any AI answer to save it here.</p>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderNotebook();
  updateNotebookNavCount();

  document.getElementById("note-add-btn").addEventListener("click", () => {
    const titleEl = document.getElementById("note-new-title");
    const textEl = document.getElementById("note-new-text");
    if (!titleEl.value.trim() && !textEl.value.trim()) return;
    notebookAdd(titleEl.value.trim() || "Untitled note", textEl.value.trim());
    titleEl.value = "";
    textEl.value = "";
  });

  /* delete + inline edit (delegated) */
  document.getElementById("notebook-list").addEventListener("click", (ev) => {
    const del = ev.target.closest(".note-del");
    if (!del) return;
    const id = ev.target.closest(".note-card").dataset.note;
    saveNotes(getNotes().filter(n => n.id !== id));
    renderNotebook();
    updateNotebookNavCount();
  });
  document.getElementById("notebook-list").addEventListener("input", (ev) => {
    const ta = ev.target.closest(".note-text");
    if (!ta) return;
    const id = ev.target.closest(".note-card").dataset.note;
    const notes = getNotes();
    const note = notes.find(n => n.id === id);
    if (note) { note.text = ta.value; saveNotes(notes); }
  });

  /* export as Markdown */
  document.getElementById("note-export-btn").addEventListener("click", () => {
    const notes = getNotes();
    if (!notes.length) return;
    const md = "# Deep Bible Study — Research Notebook\n\nExported " + new Date().toLocaleString() + "\n\n" +
      notes.map(n => `## ${n.title}\n*${new Date(n.created).toLocaleString()}*\n\n${n.text}\n`).join("\n---\n\n");
    const blob = new Blob([md], { type: "text/markdown" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "deep-bible-study-notebook.md";
    a.click();
    URL.revokeObjectURL(a.href);
  });
});
