/* Academy — built-in Ancient Hebrew course + AI Course Builder agent.
   Reuses globals from analyzer.js: getKey(), tts, makeRecognizer, appendBubble.
   Voice everywhere: lessons can be read aloud; the tutor accepts speech and speaks back. */

const HEBREW_PROGRESS_KEY = "dbs_hebrew_done";
const COURSE_PLAN_KEY = "dbs_course_plan";
const COURSE_ASSESS_KEY = "dbs_course_assessment";
const TUTOR_AUTOREAD_KEY = "dbs_tutor_autoread";

/* ---------- shared: speech-safe text (Hebrew chars garble most TTS voices) ---------- */
function speechSafe(text) {
  return text.replace(/[֐-׿‏‎]+/g, " (Hebrew) ");
}

/* ================= Built-in Ancient Hebrew course ================= */

function getHebrewDone() {
  try { return new Set(JSON.parse(localStorage.getItem(HEBREW_PROGRESS_KEY) || "[]")); }
  catch (_) { return new Set(); }
}
function saveHebrewDone(set) {
  localStorage.setItem(HEBREW_PROGRESS_KEY, JSON.stringify([...set]));
}

function renderHebrewProgress() {
  const done = getHebrewDone();
  const el = document.getElementById("hebrew-progress");
  const pct = Math.round((done.size / HEBREW_LESSONS.length) * 100);
  el.innerHTML = `
    <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
    <span class="progress-text">${done.size} of ${HEBREW_LESSONS.length} lessons complete${done.size === HEBREW_LESSONS.length ? " — course finished! 🎉" : ""}</span>`;
}

function renderHebrewCourse() {
  const wrap = document.getElementById("hebrew-lessons");
  const done = getHebrewDone();

  wrap.innerHTML = HEBREW_LESSONS.map(lesson => {
    const isDone = done.has(lesson.id);
    const tableHtml = lesson.table ? `
      <div class="table-scroll"><table class="hebrew-table">
        <thead><tr><th>Letter</th><th>Final</th><th>Name</th><th>Sound</th><th>Number</th><th>Pictographic origin (reconstruction)</th></tr></thead>
        <tbody>${lesson.table.map(r =>
          `<tr><td class="heb-glyph">${r[0]}</td><td class="heb-glyph">${r[1] || "—"}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td></tr>`
        ).join("")}</tbody>
      </table></div>` : "";

    const quizHtml = lesson.quiz ? `
      <div class="quiz" data-lesson="${lesson.id}">
        <h5>Self-check (answer all correctly to complete the lesson)</h5>
        ${lesson.quiz.map((item, qi) => `
          <div class="quiz-q">
            <p>${qi + 1}. ${item.q}</p>
            ${item.options.map((opt, oi) =>
              `<label class="quiz-opt"><input type="radio" name="${lesson.id}-q${qi}" value="${oi}"> ${opt}</label>`
            ).join("")}
          </div>`).join("")}
        <button class="btn btn-primary quiz-check" data-lesson="${lesson.id}">Check answers</button>
        <span class="quiz-result" id="result-${lesson.id}"></span>
      </div>` : "";

    return `
      <details class="lesson-card ${isDone ? "lesson-done" : ""}" id="card-${lesson.id}">
        <summary>
          <span class="lesson-status">${isDone ? "✅" : "⬜"}</span>
          <span class="lesson-title">${lesson.title}</span>
          <span class="lesson-mins">~${lesson.minutes} min</span>
        </summary>
        <div class="lesson-body">
          <p class="lesson-goal"><strong>Goal:</strong> ${lesson.goal}</p>
          <button class="btn btn-ghost btn-small lesson-listen" data-lesson="${lesson.id}">🔊 Listen to this lesson</button>
          <div class="lesson-content">${lesson.content.split("\n\n").map(p => `<p>${p.replace(/\n/g, "<br>")}</p>`).join("")}</div>
          ${tableHtml}
          ${quizHtml}
        </div>
      </details>`;
  }).join("");

  /* listen buttons */
  wrap.querySelectorAll(".lesson-listen").forEach(btn => {
    btn.addEventListener("click", () => {
      const lesson = HEBREW_LESSONS.find(l => l.id === btn.dataset.lesson);
      if (!lesson) return;
      if (tts.speakingBtn === btn) { tts.stop(); return; }
      const spoken = lesson.title + ". Goal: " + lesson.goal + ". " + speechSafe(lesson.content);
      tts.speak(spoken, btn);
      btn.textContent = "⏹ Stop";
    });
  });

  /* quiz grading */
  wrap.querySelectorAll(".quiz-check").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.lesson;
      const lesson = HEBREW_LESSONS.find(l => l.id === id);
      const resultEl = document.getElementById("result-" + id);
      let correct = 0, answered = 0;
      lesson.quiz.forEach((item, qi) => {
        const chosen = document.querySelector(`input[name="${id}-q${qi}"]:checked`);
        if (chosen) { answered++; if (Number(chosen.value) === item.a) correct++; }
      });
      if (answered < lesson.quiz.length) {
        resultEl.textContent = "Answer every question first.";
        resultEl.className = "quiz-result quiz-bad";
        return;
      }
      if (correct === lesson.quiz.length) {
        const done = getHebrewDone();
        done.add(id);
        saveHebrewDone(done);
        resultEl.textContent = `All ${correct} correct — lesson complete! ✅`;
        resultEl.className = "quiz-result quiz-good";
        document.getElementById("card-" + id).classList.add("lesson-done");
        document.querySelector(`#card-${id} .lesson-status`).textContent = "✅";
        renderHebrewProgress();
      } else {
        resultEl.textContent = `${correct} of ${lesson.quiz.length} correct — review and try again.`;
        resultEl.className = "quiz-result quiz-bad";
      }
    });
  });
}

/* ================= AI Course Builder agent ================= */

const COURSE_BUILDER_SYSTEM = `You are the Course Builder, a personal tutor agent inside "Deep Bible Study — The Truth Project". You create and teach customized, bite-size courses on topics the site covers: biblical history, ancient Israel, origins of religions and practices, world history and politics, ancient and modern languages (including Biblical Hebrew, Aramaic, Greek, and Haitian Kreyòl), Israelite migrations, and African-diaspora / Haitian heritage.

Truth rules (absolute, same as the whole site): never present a claim as more certain than the evidence allows. Grade key claims inline with [DOCUMENTED], [STRONG], [CONSENSUS], [DEBATED], [TRADITION], [UNSUPPORTED], or [UNKNOWN]. Name real sources. Say "we don't know" when that is the truth. Correct myths in both directions. Where a question is one of conscience rather than history, lay out the evidence and leave the judgment to the student.

Teaching rules:
1. Fit each lesson to the student's stated minutes-per-session — genuinely bite-size, one idea at a time.
2. Match their stated goal, level, and learning style from the assessment.
3. Teach ONE lesson per turn, then give a 2-3 question quiz and STOP. Wait for their answers. Grade them warmly and honestly, re-explain anything missed, then offer the next lesson.
4. Keep a running sense of what they've mastered; briefly recall prior lessons when it helps.
5. Your words may be read aloud by text-to-speech: write flowing sentences, no markdown symbols, no tables, no bullet characters. Spell out foreign-script words phonetically in parentheses (for Hebrew, give the transliteration and describe the letters rather than relying on the script alone).
6. If the student changes direction, adapt the course plan and say what you changed.`;

function getAssessment() {
  return {
    goal: document.getElementById("cb-goal").value.trim(),
    topic: document.getElementById("cb-topic").value.trim(),
    level: document.getElementById("cb-level").value,
    minutes: document.getElementById("cb-minutes").value,
    style: document.getElementById("cb-style").value
  };
}

function assessmentText(a) {
  return `STUDENT ASSESSMENT
What they want to accomplish: ${a.goal}
Topic requested: ${a.topic}
Current level: ${a.level}
Minutes per session: ${a.minutes}
Preferred learning style: ${a.style}`;
}

async function callCourseAPI(messages, system) {
  const apiKey = getKey();
  if (!apiKey) throw new Error("No API key saved. Save your Anthropic API key in the Truth Analyzer tab first (it is shared across the app).");
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
      system,
      messages
    })
  });
  if (!res.ok) {
    let detail = "";
    try { detail = (await res.json()).error?.message || ""; } catch (_) {}
    if (res.status === 401) throw new Error("Invalid API key (401). Re-save it in the Truth Analyzer tab.");
    if (res.status === 429) throw new Error("Rate limited (429). Wait a moment and try again.");
    throw new Error(`API error ${res.status}. ${detail}`);
  }
  const data = await res.json();
  if (data.stop_reason === "refusal") throw new Error("The model declined this request. Try rephrasing.");
  return (data.content || []).filter(b => b.type === "text").map(b => b.text).join("\n").trim();
}

let tutorConversation = [];
let tutorSystem = COURSE_BUILDER_SYSTEM;

function showTutor(planText, assessment) {
  tutorSystem = COURSE_BUILDER_SYSTEM + "\n\n" + assessmentText(assessment) + "\n\nTHE AGREED COURSE PLAN:\n" + planText;
  document.getElementById("cb-plan").textContent = planText;
  document.getElementById("cb-plan-wrap").hidden = false;
  document.getElementById("tutor-wrap").hidden = false;
}

document.addEventListener("DOMContentLoaded", () => {
  /* built-in Hebrew course */
  renderHebrewProgress();
  renderHebrewCourse();

  const status = document.getElementById("cb-status");
  const tutorThread = document.getElementById("tutor-thread");
  const tutorInput = document.getElementById("tutor-input");
  const tutorStatus = document.getElementById("tutor-status");
  const tutorMic = document.getElementById("tutor-mic");
  const tutorAutoread = document.getElementById("tutor-autoread");
  const nextLessonBtn = document.getElementById("tutor-next-lesson");

  /* restore a previously created course */
  const savedPlan = localStorage.getItem(COURSE_PLAN_KEY);
  const savedAssess = localStorage.getItem(COURSE_ASSESS_KEY);
  if (savedPlan && savedAssess) {
    try {
      const a = JSON.parse(savedAssess);
      document.getElementById("cb-goal").value = a.goal || "";
      document.getElementById("cb-topic").value = a.topic || "";
      document.getElementById("cb-level").value = a.level || "beginner";
      document.getElementById("cb-minutes").value = a.minutes || "10";
      document.getElementById("cb-style").value = a.style || "mixed";
      showTutor(savedPlan, a);
      status.textContent = "Your saved course was restored. Continue below, or create a new one.";
    } catch (_) {}
  }

  /* create course */
  document.getElementById("cb-create-btn").addEventListener("click", async () => {
    const a = getAssessment();
    if (!a.goal || !a.topic) { status.textContent = "Fill in your goal and topic first — the assessment is what makes the course yours."; return; }
    const btn = document.getElementById("cb-create-btn");
    btn.disabled = true;
    status.textContent = "The Course Builder is designing your course… (about a minute)";
    try {
      const prompt = assessmentText(a) + `\n\nCreate a numbered, bite-size course plan for this student. Each lesson must fit in ${a.minutes} minutes. For each lesson give the number, a title, and one plain sentence on what it covers. Aim for 6–12 lessons. After the list, add two sentences on how you'll verify their goal is met by the end. Do not start teaching yet.`;
      const plan = await callCourseAPI([{ role: "user", content: prompt }], COURSE_BUILDER_SYSTEM);
      localStorage.setItem(COURSE_PLAN_KEY, plan);
      localStorage.setItem(COURSE_ASSESS_KEY, JSON.stringify(a));
      tutorConversation = [];
      tutorThread.innerHTML = "";
      tutorThread.hidden = true;
      showTutor(plan, a);
      status.textContent = "Course created — start Lesson 1 below.";
    } catch (err) {
      status.textContent = "⚠ " + err.message;
    } finally {
      btn.disabled = false;
    }
  });

  /* tutor conversation */
  async function sendToTutor(text) {
    tts.stop();
    document.getElementById("tutor-send").disabled = true;
    nextLessonBtn.disabled = true;
    tutorStatus.textContent = "The tutor is preparing… (this can take a minute)";
    appendBubble(tutorThread, "user", text);
    try {
      const messages = [...tutorConversation, { role: "user", content: text }];
      const reply = await callCourseAPI(messages, tutorSystem);
      tutorConversation.push({ role: "user", content: text });
      tutorConversation.push({ role: "assistant", content: reply });
      const bubble = appendBubble(tutorThread, "ai", reply);
      tutorStatus.textContent = "";
      if (tutorAutoread.checked && tts.supported) {
        tts.speak(speechSafe(reply), bubble.querySelector("button"));
      }
    } catch (err) {
      tutorStatus.textContent = "⚠ " + err.message;
    } finally {
      document.getElementById("tutor-send").disabled = false;
      nextLessonBtn.disabled = false;
    }
  }

  document.getElementById("tutor-send").addEventListener("click", () => {
    const t = tutorInput.value.trim();
    if (!t) { tutorStatus.textContent = "Type or speak first."; return; }
    tutorInput.value = "";
    sendToTutor(t);
  });
  tutorInput.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter" && !ev.shiftKey) { ev.preventDefault(); document.getElementById("tutor-send").click(); }
  });
  nextLessonBtn.addEventListener("click", () => {
    sendToTutor(tutorConversation.length === 0
      ? "I'm ready — please teach me Lesson 1."
      : "Please continue: teach me the next lesson.");
  });

  /* tutor voice in */
  tutorAutoread.checked = localStorage.getItem(TUTOR_AUTOREAD_KEY) === "1";
  if (!tts.supported) tutorAutoread.disabled = true;
  tutorAutoread.addEventListener("change", () => {
    localStorage.setItem(TUTOR_AUTOREAD_KEY, tutorAutoread.checked ? "1" : "0");
    if (!tutorAutoread.checked) tts.stop();
  });

  let tutorBase = "";
  const tutorRec = makeRecognizer(
    (finalText, interim) => { tutorInput.value = (tutorBase + finalText + interim).trimStart(); },
    (state) => {
      if (state === "listening") {
        tutorMic.classList.add("mic-live");
        tutorMic.textContent = "🎙 Listening… (tap to stop)";
      } else {
        tutorMic.classList.remove("mic-live");
        tutorMic.textContent = "🎤 Speak";
        if (state === "denied") tutorStatus.textContent = "⚠ Microphone permission was denied. Allow it in your browser settings.";
      }
    }
  );
  if (!tutorRec) {
    tutorMic.disabled = true;
    tutorMic.textContent = "🎤 (not supported here)";
    tutorMic.title = "Voice input not supported in this browser (try Chrome, Edge, or Safari)";
  } else {
    tutorMic.addEventListener("click", () => {
      if (tutorMic.classList.contains("mic-live")) { tutorRec.stop(); return; }
      tts.stop();
      tutorBase = tutorInput.value ? tutorInput.value + " " : "";
      try { tutorRec.start(); } catch (_) {}
    });
  }
});
