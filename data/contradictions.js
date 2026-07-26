/* Contradictions & Context — the passages people argue over, from Old to New
   Testament. House rules for this section:
   1. Show the FULL context — linguistic, cultural, historical, literary —
      because ancient texts were written for eyes that saw a world we don't.
   2. Grade every proposed resolution honestly: some tensions dissolve under
      context, some have plausible-but-unproven harmonizations, and some
      remain genuinely hard. We say which is which.
   3. No double standard: the same rules of reading apply whether the result
      is comfortable or not. Then YOU draw your conclusion. */

const DATA_CONTRADICTIONS = [
  {
    title: "First: the 'it's just a metaphor' problem — rules that don't bend to preference",
    date: "method",
    tier: "CONSENSUS",
    tags: ["method"],
    body: "You named the disease exactly: people read a verse literally when they agree with it and call it metaphor when they don't. The cure is deciding the reading rules BEFORE you know whether you'll like the result. The rules serious readers of every persuasion use: (1) GENRE FIRST — the Bible contains law, narrative, poetry, proverb, prophecy, apocalyptic, parable, and letters, and each genre signaled its own reading to the original audience. Psalms saying God 'has wings' is poetry; Leviticus giving penalties is law; Revelation's beasts are apocalyptic symbol — a genre that TELLS you it works in symbols (Rev 1:1, 'signified'). (2) PROVERBIAL AND PHENOMENAL LANGUAGE — 'the smallest of all seeds' (Matt 13:32) is proverbial speech about the smallest seed farmers sowed, in a culture that used the mustard seed as its idiom for tininess; reading it as botany misreads the genre, in either direction. (3) HOW DID OTHER SCRIPTURE TAKE IT? When later biblical authors cite a passage, note whether THEY read it literally or figuratively. (4) HOW DID THE FIRST AUDIENCE TAKE IT? Documented ancient readings (Qumran, rabbis, early fathers) show the live options. (5) CONSISTENCY TEST — whatever rule you apply to a verse you dislike, apply to the verses you like. If your method only ever produces conclusions you already held, it isn't a method; it's a mirror. Every entry below applies these five rules in the open, so you can check the work.",
    sources: ["Genre studies (e.g. Fee & Stuart, 'How to Read the Bible for All Its Worth')", "Revelation 1:1 (esēmanen, 'signified/symbolized')", "Comparative ancient Near Eastern literary conventions"]
  },
  {
    title: "Genesis 1 vs Genesis 2 — two creation accounts, different order",
    date: "texts as received, c. 1st millennium BC",
    tier: "DEBATED",
    tags: ["old-testament"],
    body: "THE TENSION: Genesis 1 orders creation plants → animals → humans (male and female together); Genesis 2, read straightforwardly, has the man formed first, THEN plants (2:5–9), THEN animals (2:19), then the woman. LINGUISTIC CONTEXT: Hebrew narrative verbs don't mark tense like English; 2:19's 'formed' CAN be read as pluperfect — 'had formed' (so several translations render it) — which removes the animal-order clash; this is a real grammatical possibility, not invented for rescue, but it is a CHOICE among readings, and honesty says so. LITERARY CONTEXT: ancient Near Eastern texts often gave a cosmic overview followed by a zoomed-in retelling (documented convention); Genesis 2 opens with the 'toledot' formula the book uses for zoom-ins. HISTORICAL-CRITICAL VIEW: the accounts come from different sources (P and J) with different styles and divine names, preserved side by side by editors who saw no need to merge them — which itself tells you ancient readers didn't read them as competing police reports. STATUS: contradiction if read as two sequential newspaper accounts; complementary if read by ancient conventions; which reading rule applies is the genuine debate. Both options are on the table with their evidence — decide with rules you'd accept elsewhere.",
    sources: ["Genesis 1:1–2:3 vs 2:4–25 (read both)", "Translation comparison at Gen 2:19 (NIV 'had formed' vs KJV 'formed')", "Documentary hypothesis literature; literary-unity responses (e.g. Cassuto)"]
  },
  {
    title: "Who moved David to count Israel — God or Satan?",
    date: "Samuel c. 6th c. BC; Chronicles c. 4th c. BC",
    tier: "DOCUMENTED",
    tags: ["old-testament"],
    body: "THE TENSION: 2 Samuel 24:1 — 'the anger of YHWH... incited David' to take the census; 1 Chronicles 21:1, telling the SAME event — 'satan stood up against Israel and incited David.' CONTEXTS THAT CHANGE THE PICTURE: (1) LINGUISTIC — Hebrew 'satan' is a common noun, 'adversary/accuser' (used of human enemies in 1 Kings 11:14 and even of the angel of YHWH in Numbers 22:22); in Chronicles it appears WITHOUT the definite article, so 'an adversary' is a defensible translation. (2) HISTORICAL — Chronicles retells Samuel–Kings centuries later, after the exile, and its documented editorial pattern is softening statements that attribute harm directly to God. (3) THEOLOGICAL CONVENTION — in Hebrew thought, God's sovereignty meant even permitted evil could be ascribed to him (compare Job 1–2, where the accuser acts only within God's permission — both descriptions of one event). STATUS: this is the clearest documented example of an inspired-text-era author deliberately REWRITING an earlier scripture's wording — you can lay the two verses side by side today. Whether that's contradiction, interpretation, or progressive revelation is the honest fork in the road; what it certainly shows is how the texts were composed and transmitted, which no serious study can skip.",
    sources: ["2 Samuel 24:1; 1 Chronicles 21:1 (side by side)", "Numbers 22:22; 1 Kings 11:14 (satan as common noun)", "Japhet, 'The Ideology of the Book of Chronicles' (the editorial pattern, documented)"]
  },
  {
    title: "The two genealogies of Jesus (Matthew 1 vs Luke 3)",
    date: "gospels, 1st century AD",
    tier: "DEBATED",
    tags: ["new-testament"],
    body: "THE TENSION: from David to Joseph the lists differ almost entirely — including Joseph's own father (Jacob in Matthew 1:16; Heli in Luke 3:23). CULTURAL CONTEXT that must be on the table: ancient genealogies were legal-theological documents, not birth certificates — Matthew openly arranges his into 3×14 (the numeric value of 'David' in Hebrew letters, דוד = 14 — a documented literary device called gematria) and SKIPS generations to do it (compare 1 Chronicles 3 — three kings omitted), which by ancient convention was arrangement, not error. PROPOSED RESOLUTIONS, graded: (a) Luke gives Mary's line, Matthew Joseph's — TRADITION from the early centuries; possible; no ancient text states it; (b) levirate marriage gave Joseph two 'fathers' (legal and biological) — proposed as early as Africanus (c. 220 AD), citing claimed family tradition; plausible; unverifiable; (c) the lists contradict because neither author expected them to be cross-checked — the straightforward skeptical reading; also unprovable. STATUS: genuinely unresolved. What context rules OUT is judging ancient genealogy by modern registry standards — both lists follow documented ancient conventions; what context cannot do is tell you which harmonization, if any, is true. That verdict is yours.",
    sources: ["Matthew 1:1–17; Luke 3:23–38", "1 Chronicles 3:11–12 vs Matthew 1:8 (the skipped kings)", "Julius Africanus, Letter to Aristides (c. 220, the levirate proposal)"]
  },
  {
    title: "How did Judas die?",
    date: "gospels/Acts, 1st century AD",
    tier: "DEBATED",
    tags: ["new-testament"],
    body: "THE TENSION: Matthew 27:5 — Judas hanged himself, and the PRIESTS bought the field with the returned silver; Acts 1:18 — Judas 'acquired' the field and 'falling headlong, burst open.' PROPOSED RESOLUTIONS, graded: (a) the classic harmonization — he hanged himself and the body later fell and burst; physically possible; stated in no ancient source; a construction; (b) 'acquired' in Acts as idiom — the field was bought with HIS money, so credited to him — a real usage possibility in Greek; (c) the accounts preserve two independent traditions about a hated figure's bad end — a documented ancient pattern (compare the multiple hostile traditions about the death of Antiochus IV). CULTURAL CONTEXT: ancient authors regularly shaped death-scenes of villains to echo scriptural patterns — Matthew evokes Ahithophel (David's betrayer who hanged himself, 2 Sam 17:23), Acts evokes the wicked man's fall; original audiences heard those echoes as meaning, not as court testimony. STATUS: harmonizable with effort, but the effort is visible; two-traditions is the simpler historical reading. Both options honestly on the table — and note what both accounts agree on: betrayal, blood money, a field, an ugly end.",
    sources: ["Matthew 27:3–10; Acts 1:18–19", "2 Samuel 17:23 (the Ahithophel echo)", "Papias fragment 3 (a THIRD early Judas-death tradition — showing such traditions multiplied)"]
  },
  {
    title: "The census of Quirinius — Luke 2 vs the known timeline",
    date: "external records: Herod d. 4 BC; Quirinius census 6 AD",
    tier: "DEBATED",
    tags: ["new-testament", "history"],
    body: "THE TENSION: Luke 2:2 dates Jesus' birth by 'the first census when Quirinius governed Syria'; Josephus documents Quirinius's census in 6 AD — but Matthew (and Luke 1:5) place the birth under Herod, who died in 4 BC. A ten-year gap, resting on documented external evidence — this is the hardest chronology problem in the gospels and honest scholarship of every persuasion says so. PROPOSED RESOLUTIONS, graded: (a) translate Luke's Greek as 'the census BEFORE Quirinius governed' — grammatically possible (prōtē + genitive can work that way), argued by real scholars, and also disputed by real scholars; (b) Quirinius held an earlier commission in Syria under Herod — no inscription or text documents one, though his eastern career is partially attested (the Lapis Tiburtinus inscription is fragmentary and its subject debated); (c) Luke, writing decades later, simply misdated by anchoring to the famous 6 AD census (the one that sparked the revolt he himself mentions in Acts 5:37). STATUS: unresolved. The available evidence does not allow a reliable conclusion at this time — and any resource that tells you this one is 'easily answered', in either direction, is selling certainty it doesn't have.",
    sources: ["Luke 2:1–2; Josephus, Antiquities 18.1", "Herod's death date (Josephus, Antiquities 17; eclipse data)", "Lapis Tiburtinus (fragmentary, attribution debated)", "Acts 5:37 (Luke knows the 6 AD census)"]
  },
  {
    title: "The law 'forever' vs the New Testament — the biggest OT/NT argument",
    date: "the core texts span both testaments",
    tier: "DEBATED",
    tags: ["old-testament", "new-testament", "law"],
    body: "THE TENSION: Torah calls Sabbath, feasts, and covenant statutes 'olam' — rendered 'forever/perpetual' (Exodus 31:16–17; Leviticus 16:34; 23:14,21,41) — while NT texts speak of the first covenant as 'becoming obsolete' (Hebrews 8:13), of food and days as matters of conscience (Romans 14; Colossians 2:16), yet also 'I did not come to abolish the Law... not one yod will pass away' (Matthew 5:17–19). LINGUISTIC CONTEXT you must have: 'olam' (see Dictionary) means long/indefinite duration — it's used of a slave serving 'olam' (Exodus 21:6, his lifetime) and of the Aaronic priesthood (which Hebrews argues was superseded) — so 'olam' marks open-ended duration, not a philosophical 'eternity'; that's a lexical fact both sides must absorb, and it doesn't by itself settle the question either way. COVENANT CONTEXT: the statutes are covenant terms; the whole argument is really about what happens to covenant terms when the parties' relationship is renewed — precisely what Jeremiah 31:31–34 (quoted at length in Hebrews 8) already raised INSIDE the Old Testament. THE DOCUMENTED POSITIONS: Jewish (the covenant stands; Sinai binds Israel), classic Christian (fulfilled/transformed in Messiah), Torah-observant Messianic (the Law stands for Israel including believers), dispensational (different administrations) — each with real texts in hand, each with texts it must work harder on. STATUS: the deepest genuinely-debated question between the testaments. This app's job is done when you can state the OTHER side's best texts as fairly as your own; the conclusion is yours.",
    sources: ["Exodus 31:16–17; Leviticus 23; Exodus 21:6 (olam of a lifetime)", "Matthew 5:17–19; Acts 15; Romans 14; Hebrews 8", "Jeremiah 31:31–34 (the tension is already internal to the Tanakh)"]
  },
  {
    title: "Does God change his mind? (Even within one chapter)",
    date: "texts throughout the Tanakh",
    tier: "DEBATED",
    tags: ["old-testament", "nature-of-God"],
    body: "THE TENSION at its sharpest, inside a single chapter: 1 Samuel 15:11 — 'I regret (nacham) that I made Saul king'; 1 Samuel 15:29 — 'the Glory of Israel does not lie or change his mind (nacham), for he is not a man.' Also: Exodus 32:14 (God relents at Moses' plea), Jonah 3:10, versus Numbers 23:19 and Malachi 3:6 ('I do not change'). LINGUISTIC CONTEXT: nacham spans 'regret / relent / be moved to compassion / be comforted' — one root, wide range, so translation choice already tilts the scales. LITERARY CONTEXT: Hebrew scripture speaks of God in deliberate human terms (hands, nostrils, walking — anthropomorphism is its documented idiom), and ancient readers held both registers at once: unchanging in character and covenant, responsive in relationship. Verse 29 sitting eighteen verses after verse 11 shows the AUTHOR saw no collision — which is data about how the language works, not carelessness. THE HONEST FORK: theology of a genuinely responsive God (open/relational readings), classical immutability (relenting language as accommodation to human perspective), or contradiction left standing. STATUS: the linguistic and literary contexts are documented; which theology follows is precisely the judgment this app leaves with you.",
    sources: ["1 Samuel 15:11 and 15:29 (same chapter, same verb)", "Exodus 32:14; Jonah 3:10; Numbers 23:19; Malachi 3:6", "Hebrew lexicon entries for nacham (BDB/HALOT)"]
  },
  {
    title: "Can God be seen? Exodus vs Exodus (and John)",
    date: "texts span both testaments",
    tier: "DEBATED",
    tags: ["old-testament", "new-testament", "nature-of-God"],
    body: "THE TENSION: Exodus 33:20 — 'you cannot see my face, for man shall not see me and live'; yet Exodus 24:9–11 — Moses and seventy elders 'saw the God of Israel... they beheld God, and ate and drank'; Jacob: 'I have seen God face to face, and my life is delivered' (Genesis 32:30); then John 1:18 — 'no one has ever seen God.' CONTEXTS: (1) LINGUISTIC — 'face' (panim) in Hebrew idiom means unmediated presence/full self, not a body part; 'seeing the face' of a king was audience-language across the ancient Near East (documented court idiom). (2) LITERARY — the theophany passages themselves signal mediation: 'the angel/messenger of YHWH' who speaks AS God (Genesis 16, Exodus 3), visions, 'the likeness as it were of...' hedging (Ezekiel 1:26–28 piles up qualifiers three deep). (3) The editors kept ALL these texts side by side — ancient readers evidently distinguished degrees and modes of encounter where flat modern reading sees collision. LATER READINGS, labeled: rabbinic (visions of the divine Glory/kavod), Christian (the visible YHWH-appearances as the pre-incarnate Son — an interpretation documented from Justin Martyr, 2nd c.), critical (different sources with different theologies of divine presence). STATUS: the tension is real and ancient; three documented interpretive frameworks resolve it three ways; pick with your eyes open.",
    sources: ["Exodus 33:20 vs 24:9–11; Genesis 32:30; John 1:18", "Ezekiel 1:26–28 (the qualifier-stacking)", "Justin Martyr, Dialogue with Trypho 56–60 (earliest documented Christian reading)"]
  },
  {
    title: "Paul vs James — justified by faith, or by works?",
    date: "letters, 1st century AD",
    tier: "DEBATED",
    tags: ["new-testament"],
    body: "THE TENSION, at maximum sharpness: Romans 3:28 — 'a person is justified by faith apart from works'; James 2:24 — 'a person is justified by works and not by faith alone.' Both even argue from the SAME verse (Genesis 15:6, Abraham). Luther documentedly called James 'an epistle of straw' in his 1522 preface (softened in later editions — the whole episode is on the record). CONTEXTS: (1) LINGUISTIC — Paul's phrase is 'works OF THE LAW' (erga nomou — Torah boundary-markers like circumcision are in view through Romans and Galatians; the Qumran text 4QMMT documents 'works of the law' as a live Second Temple category), while James' 'works' are deeds of mercy toward the poor (James 2:14–17 — feeding and clothing); (2) AUDIENCE — Paul fights those requiring Torah-entry for Gentiles; James fights a dead 'faith' that ignores the needy; (3) both may be using 'justified' differently (declared right vs shown right — Abraham's Genesis 15 faith 'fulfilled' in his Genesis 22 act, James 2:23). STATUS: with contexts loaded, most scholars — including many with no stake in harmony — judge them addressing different errors with different vocabularies rather than answering each other; a minority reads real disagreement between a Pauline and a Jerusalem stream (and Acts 15 + Galatians 2 document that real tension existed between those circles). Read all four chapters whole and judge — this one rewards it more than any summary can.",
    sources: ["Romans 3–4; Galatians 2–3; James 2 (whole chapters)", "4QMMT ('works of the law' at Qumran)", "Luther's 1522 NT preface (documented, later revised)"]
  },
  {
    title: "Two of every animal — or seven pairs?",
    date: "Genesis 6–7",
    tier: "DOCUMENTED",
    tags: ["old-testament", "method"],
    body: "Included as the model of a 'contradiction' that context actually dissolves — so you can calibrate the others against it. THE TENSION: Genesis 6:19–20, two of every kind; Genesis 7:2–3, seven pairs of every CLEAN animal and one pair of unclean. RESOLUTION, from inside the text: the second instruction is a specification of the first (general command, then detail — a documented Hebrew narrative pattern), and the narrative itself explains WHY the extra clean animals exist: Noah sacrifices clean animals after the flood (Genesis 8:20) — with only one pair each, sacrifice would extinguish species. The critical reading (two sources with differing numbers spliced together) remains on the table and is argued from the doublets throughout the flood story; but even source critics agree the FINAL editor saw no contradiction, keeping both with the sacrifice explanation in place. STATUS: whichever composition theory you hold, this one resolves coherently — which is exactly the point: some alleged contradictions survive context and some don't, and the honest reader lets each case land where its own evidence puts it, instead of forcing all cases to match a prior verdict.",
    sources: ["Genesis 6:19–20; 7:2–3; 8:20 (the internal explanation)", "Hebrew narrative general-then-specific pattern (documented in narrative grammar studies)"]
  }
];
