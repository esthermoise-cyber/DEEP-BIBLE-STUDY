/* Lost, Excluded & Disputed Books — a research library.
   For each text: date, language, manuscripts, canonical status across
   traditions, why it was accepted/disputed/excluded, and claim-checks.
   Rule from the spec: never say a book was "removed to hide truth" unless
   evidence shows intentional suppression — and show what the evidence shows. */

const DATA_BOOKS = [
  {
    title: "Start here: there is no single 'the canon'",
    date: "canons fixed at different times per tradition",
    tier: "DOCUMENTED",
    tags: ["overview"],
    body: "Documented fact that reframes every 'removed books' claim: different communities settled DIFFERENT canons. The Jewish Tanakh: 24 books (= Protestant OT's 39, counted differently); Protestant Bibles: 66; Catholic: 73 (adding the deuterocanonicals at Trent, 1546, confirming long usage); Eastern Orthodox: ~76; the Ethiopian Orthodox canon: ~81, including 1 Enoch and Jubilees. And the myth-check that matters most: the 1611 King James Version INCLUDED the Apocrypha (between the testaments) — as had the Septuagint tradition, the Vulgate, and Luther's Bible (who moved them to an appendix, doubting them but still printing them). British and foreign Bible societies dropped them from printings starting 1826, chiefly over cost and Protestant conviction — a documented, public decision, not a secret one. So 'they removed books from the Bible' is really 'traditions drew different lines, in public, with reasons on record' — each line examinable below.",
    sources: ["Council of Trent, Session 4 (1546)", "1611 KJV first printing (Apocrypha included)", "British & Foreign Bible Society resolution (1826)", "Ethiopian Orthodox canon lists"]
  },
  {
    title: "1 Enoch",
    date: "sections from 3rd c. BC – 1st c. AD",
    tier: "DOCUMENTED",
    tags: ["pseudepigrapha"],
    body: "Composite apocalyptic work attributed to Enoch (Genesis 5) — actual authorship centuries later is the universal scholarly assessment (attributing books to ancient heroes was a recognized genre, not unique deception). ORIGINAL LANGUAGE: Aramaic — 11 manuscripts among the Dead Sea Scrolls prove its age and popularity. SURVIVES COMPLETE only in Ge'ez (Ethiopic), because the Ethiopian Orthodox church canonized it; Greek portions also survive. STATUS: never in the Jewish or mainstream Christian canons — but Jude 14–15 QUOTES 1 Enoch 1:9 directly (documented), and its 'Watchers' expansion of Genesis 6 influenced many early writers (Tertullian defended it). WHY EXCLUDED: rabbinic Judaism and most churches judged it late and non-scriptural; no council record shows suppression-to-hide — its content was openly discussed by the fathers. HONEST SUMMARY: enormously important for understanding the world of Jesus' era; canonical for millions of Ethiopians; quoted by scripture itself; its exclusion elsewhere is documented judgment, not conspiracy.",
    sources: ["Qumran Aramaic fragments (4Q201–212)", "Jude 14–15 quoting 1 Enoch 1:9", "Tertullian, De Cultu Feminarum 1.3", "Ethiopic manuscript tradition"]
  },
  {
    title: "Jubilees",
    date: "c. 160–140 BC",
    tier: "DOCUMENTED",
    tags: ["pseudepigrapha"],
    body: "A retelling of Genesis–Exodus organized by 49-year 'jubilee' periods, presenting itself as revelation to Moses on Sinai. ORIGINAL LANGUAGE: Hebrew — about 15 Dead Sea Scrolls copies make it one of Qumran's most-copied books, showing real authority in at least that community. SURVIVES COMPLETE in Ge'ez; canonical in the Ethiopian Orthodox church. NOTABLE CONTENT: a strict 364-day solar calendar (a documented live controversy in Second Temple Judaism — calendar disputes are behind more ancient religious conflict than most people imagine), expanded patriarch stories, and named details tradition drew on. STATUS: excluded from Jewish and most Christian canons as post-Mosaic composition. HONEST SUMMARY: a window into the debates of the two centuries before Jesus — read it as documented Second Temple thought, not as suppressed Mosaic writing, because the dating evidence (language, calendar polemic, historical allusions) places it there.",
    sources: ["Qumran copies (4Q216 etc.)", "Ge'ez manuscript tradition", "VanderKam, 'The Book of Jubilees' (critical edition)"]
  },
  {
    title: "1 & 2 Maccabees",
    date: "late 2nd – 1st century BC",
    tier: "DOCUMENTED",
    tags: ["deuterocanonical"],
    body: "HISTORY, not legend: 1 Maccabees (Hebrew original, surviving in Greek) is the primary source for the revolt against Antiochus IV (167 BC), the Temple rededication (origin of Hanukkah — a festival Jesus attended, John 10:22), and the Hasmonean dynasty; historians of every persuasion rely on it. 2 Maccabees (Greek) covers part of the same period with more theology — including prayer for the dead (12:44–45), a documented reason Reformers disputed it and Catholics valued it: the canon dispute here is openly doctrinal on both sides, and honest study says so. STATUS: canonical for Catholics and Orthodox (deuterocanonical), in the KJV Apocrypha of 1611, not in the Jewish canon (compiled after these events, and the rabbis had cooled toward the Hasmoneans). HONEST SUMMARY: among the most historically valuable 'excluded' books — whatever one's canon, the events are real and independently corroborated (Josephus, coins, Greek sources).",
    sources: ["1–2 Maccabees texts", "John 10:22 (Hanukkah in the NT)", "Josephus, Antiquities 12–13 (parallel account)", "Hasmonean coinage"]
  },
  {
    title: "Sirach (Ecclesiasticus) & Wisdom of Solomon",
    date: "c. 180 BC / c. 50 BC – 50 AD",
    tier: "DOCUMENTED",
    tags: ["deuterocanonical"],
    body: "The two great wisdom books outside the Jewish canon. SIRACH: written in Hebrew c. 180 BC by Yeshua ben Sira (the rare ancient book with a named, dated author and a grandson's preface describing his Greek translation — a documented window into how translation worked); Hebrew manuscripts recovered from the Cairo Geniza and Masada confirmed the Greek's source. Quoted with respect even in the Talmud, though excluded from the Tanakh. WISDOM OF SOLOMON: composed in GREEK (hence attributed-not-written by Solomon) in Alexandria; philosophically rich; its ch. 2 portrait of the persecuted righteous one was heavily read by early Christians. STATUS: both canonical for Catholics/Orthodox, in the 1611 KJV Apocrypha, not in Jewish or Protestant canons — with the documented Protestant reason being Hebrew-canon-only, stated openly at the Reformation. HONEST SUMMARY: whatever their status, these are primary evidence for Jewish thought between the testaments.",
    sources: ["Ben Sira's grandson's prologue", "Masada Hebrew Sirach scroll", "Cairo Geniza fragments", "Talmudic citations of Ben Sira (e.g. Sanhedrin 100b)"]
  },
  {
    title: "Tobit & Judith",
    date: "c. 3rd–2nd century BC",
    tier: "DOCUMENTED",
    tags: ["deuterocanonical"],
    body: "Two narrative books best classified — by their own internal signals — as edifying stories rather than chronicle: Judith opens with 'Nebuchadnezzar who reigned over the Assyrians in Nineveh' (he was king of BABYLON — an error so large many scholars read it as a deliberate signal of parable, like opening 'once upon a time'); Tobit is a family tale with an angel in disguise, and Aramaic and Hebrew copies at Qumran document its popularity. STATUS: canonical for Catholics/Orthodox, KJV Apocrypha 1611, outside Jewish and Protestant canons. HONEST SUMMARY: valuable evidence of Second Temple piety, ethics, and storytelling; the honest categories are 'religious novella' and 'moral tale' — and noting that is describing the genre, not attacking the books. The lesson generalizes: ancient literature includes history, poetry, parable, and apocalypse, and reading each by its genre is basic honesty.",
    sources: ["Qumran Tobit fragments (4Q196–200)", "Judith 1:1 (the opening signal)", "Deuterocanonical scholarship (e.g. Moore's Anchor commentaries)"]
  },
  {
    title: "The Didache — the church manual that almost made it",
    date: "c. 50–120 AD",
    tier: "DOCUMENTED",
    tags: ["early-christian"],
    body: "'The Teaching of the Twelve Apostles' — a short, extraordinarily early church manual: the 'Two Ways' ethics, baptism instructions (immersion preferred, pouring allowed), fasting days, Eucharist prayers, how to test traveling prophets ('if he asks for money, he is a false prophet' — their words), and first-day assembly. LOST for centuries and rediscovered in 1873 in an 11th-century Greek manuscript in Constantinople — a documented case of a text LOST OVER TIME, not suppressed. STATUS: cited by early fathers; Athanasius (367) lists it as useful reading but not canon; some early lists had it closer. HONEST SUMMARY: possibly the oldest Christian document outside the NT, and the single best snapshot of ordinary church practice c. 100 — indispensable for checking later claims about 'what the early church did', which is exactly how this app uses it.",
    sources: ["Codex Hierosolymitanus (found 1873)", "Athanasius, Festal Letter 39", "Didache text (esp. chs. 7–15)"]
  },
  {
    title: "Shepherd of Hermas & Epistle of Barnabas — inside a Bible, then out",
    date: "c. 90–150 AD / c. 70–132 AD",
    tier: "DOCUMENTED",
    tags: ["early-christian"],
    body: "The two clearest documented cases of books that were nearly canonical: BOTH are bound INSIDE Codex Sinaiticus (c. 350 AD), one of the two oldest complete Bibles on earth — you can view the pages online today. HERMAS: a Roman visionary work on repentance, hugely popular for two centuries; the Muratorian fragment (c. 170–200) says it may be READ but not counted among the prophets or apostles because it was written 'quite recently, in our times, by Hermas, brother of bishop Pius' — the earliest surviving statement of a canon REASON (too late, known author, not apostolic). BARNABAS: an allegorical epistle arguing the law was never meant literally; respected, then set aside. HONEST SUMMARY: the boundary of the canon was drawn in public, with stated reasons, over centuries — these two books ARE the documented evidence of how, which makes the 'secret council votes' narrative unnecessary as well as unevidenced.",
    sources: ["Codex Sinaiticus (digitized, codexsinaiticus.org)", "Muratorian fragment (the Hermas verdict)", "Eusebius, Church History 3.25 (his 'disputed' category)"]
  },
  {
    title: "Gospel of Thomas",
    date: "core disputed; final form c. 140–180 AD",
    tier: "DEBATED",
    tags: ["gnostic"],
    body: "114 sayings attributed to Jesus, no narrative, no crucifixion or resurrection. FOUND: complete Coptic text at Nag Hammadi, Egypt (1945), plus earlier Greek fragments (Oxyrhynchus). DATE: genuinely debated — many sayings parallel the canonical gospels; a minority of scholars argue an early independent core; the majority date the collection to the mid-2nd century, noting its esoteric frame ('whoever finds the interpretation of these sayings will not taste death') and sayings like 114 reflecting later currents. STATUS: never in any church's canon; condemned by fathers who knew it (documented — so its existence was no secret). CLAIM-CHECK: 'Thomas is the suppressed truth about Jesus' — what's documented is that churches rejected it openly as late and gnostic-leaning, and that judgment call is at least as old as the book's circulation; whether any individual saying preserves something authentic is a live, honest scholarly question, weighed saying by saying. HONEST SUMMARY: a major primary source for 2nd-century alternative Christianity; not a hidden first-century eyewitness record on current evidence.",
    sources: ["Nag Hammadi Codex II (1945)", "P.Oxy 1, 654, 655 (Greek fragments)", "Hippolytus and Origen's documented references", "Scholarly dating debate (e.g. Gathercole vs. DeConick)"]
  },
  {
    title: "2 Esdras (4 Ezra) & the Prayer of Manasseh",
    date: "c. 100 AD / c. 2nd–1st century BC",
    tier: "DOCUMENTED",
    tags: ["pseudepigrapha", "deuterocanonical"],
    body: "2 ESDRAS: a Jewish apocalypse written in the raw aftermath of the Temple's destruction (c. 100 AD), wrestling with why God allowed it — one of the most emotionally powerful ancient Jewish texts, with Christian chapters added later (documented by manuscript evidence: the core Jewish apocalypse is chs. 3–14). In the KJV Apocrypha 1611; canonical in some Orthodox traditions; its famous 'lost books' passage (14:44–46, ninety-four books, seventy withheld) is itself the ancient seed of many modern 'hidden books' claims — a claim IN a book, not evidence OF a library. PRAYER OF MANASSEH: a short, beautiful penitential prayer composed to fill the gap noted in 2 Chronicles 33:18–19; in the KJV Apocrypha and Orthodox usage. HONEST SUMMARY: both illustrate the library's rule — read each text as evidence of its own time and community, and grade the claims made about it separately from the claims made in it.",
    sources: ["2 Esdras 14 (the seventy books passage — read in context)", "Latin and Syriac manuscript traditions", "2 Chronicles 33:18–19 (the gap Manasseh's prayer fills)"]
  }
];
