/* Ancient (Biblical) Hebrew — built-in bite-size course.
   Each lesson: goal, content, optional letter table, and a short self-check quiz.
   Truth-first note: pictographic letter origins are scholarly reconstructions
   from proto-Sinaitic evidence — labeled as such, not sold as certainties. */

const HEBREW_LESSONS = [
  {
    id: "heb1",
    title: "Lesson 1 — What 'Ancient Hebrew' actually is",
    minutes: 10,
    goal: "Know what you're learning and why the letters in a Torah scroll aren't the oldest ones.",
    content: "Biblical (Classical) Hebrew is the language of almost the entire Hebrew Bible, written roughly 1000–165 BC. Three facts to anchor everything:\n\n1. TWO SCRIPTS. The oldest Hebrew inscriptions (Siloam tunnel, Lachish letters) use the paleo-Hebrew script. After the Babylonian exile, Jews adopted the Aramaic 'square' script — the letters used in every Hebrew Bible and Torah scroll today, and the ones you'll learn in this course. Same language, two outfits. (The Samaritans still use a descendant of the old script.)\n\n2. CONSONANTS ONLY. Ancient Hebrew wrote no vowels. Readers supplied them from knowing the language — like reading 'BLSSD S TH MN' as 'Blessed is the man'. The vowel dots (niqqud) were added by the Masoretes around 600–900 AD to preserve the traditional pronunciation.\n\n3. IT READS RIGHT TO LEFT. Every line, every word.\n\nWhy learn it: every translation is a chain of thousands of judgment calls. Even a little Hebrew lets you check the calls that matter — you've already seen in the Languages section what happened with 'hell', 'virgin', and 'Lucifer'.",
    quiz: [
      { q: "The square letters in today's Torah scrolls are…", options: ["The original letters Moses used", "A script adopted from Aramaic after the exile", "Invented by the Masoretes"], a: 1 },
      { q: "Ancient Hebrew originally wrote…", options: ["Consonants and vowels", "Only vowels", "Only consonants — vowel marks came ~600–900 AD"], a: 2 }
    ]
  },
  {
    id: "heb2",
    title: "Lesson 2 — The Aleph-Bet, letters 1–11",
    minutes: 15,
    goal: "Recognize and sound out the first half of the alphabet.",
    content: "Hebrew has 22 letters, all consonants. Each has a name, a sound, and a numeric value (letters doubled as numbers). The 'origin' column gives the widely held scholarly reconstruction of each letter's pictographic ancestor in the proto-Sinaitic script (c. 1800 BC) — treat these as well-supported reconstructions, not certainties.\n\nStudy the table, then say each letter's name and sound out loud, right to left: Aleph, Bet, Gimel, Dalet, He, Vav, Zayin, Chet, Tet, Yod, Kaf.",
    table: [
      ["א", "", "Aleph", "silent (glottal stop)", "1", "ox / strength"],
      ["ב", "", "Bet", "b (or v)", "2", "house"],
      ["ג", "", "Gimel", "g (as in 'go')", "3", "camel or throwing stick (uncertain)"],
      ["ד", "", "Dalet", "d", "4", "door"],
      ["ה", "", "He", "h", "5", "figure with raised arms — 'behold!'"],
      ["ו", "", "Vav", "v (anciently w)", "6", "tent peg / hook"],
      ["ז", "", "Zayin", "z", "7", "weapon / mattock (uncertain)"],
      ["ח", "", "Chet", "kh (throat-clearing sound)", "8", "wall / fence"],
      ["ט", "", "Tet", "t (emphatic)", "9", "basket or wheel (uncertain)"],
      ["י", "", "Yod", "y", "10", "arm / hand"],
      ["כ", "ך", "Kaf", "k (or kh)", "20", "palm of the hand"]
    ],
    quiz: [
      { q: "Which letter began as a picture of a house?", options: ["Aleph", "Bet", "Dalet"], a: 1 },
      { q: "Hebrew letters also served as…", options: ["Musical notes", "Numbers", "Punctuation"], a: 1 },
      { q: "Aleph sounds like…", options: ["'a' as in apple", "A silent glottal stop", "'ah' always"], a: 1 }
    ]
  },
  {
    id: "heb3",
    title: "Lesson 3 — The Aleph-Bet, letters 12–22 and final forms",
    minutes: 15,
    goal: "Finish the alphabet and learn the five letters that change shape at the end of a word.",
    content: "Second half of the alphabet: Lamed, Mem, Nun, Samekh, Ayin, Pe, Tsadi, Qof, Resh, Shin, Tav.\n\nFIVE letters wear a different form when they END a word (called 'final' or sofit forms): Kaf ך, Mem ם, Nun ן, Pe ף, Tsadi ץ. Example: 'shalom' שלום ends with final Mem ם.\n\nOne famous detail: Shin ש carries two sounds — 'sh' or 's' — later distinguished by a dot (שׁ = sh, שׂ = s). Judges 12:5–6 records the Gileadites using this very sound as a password ('Shibboleth') because Ephraimites pronounced it 'Sibboleth' — dialect differences inside ancient Israel, documented in the text itself.",
    table: [
      ["ל", "", "Lamed", "l", "30", "shepherd's staff / goad"],
      ["מ", "ם", "Mem", "m", "40", "water (waves)"],
      ["נ", "ן", "Nun", "n", "50", "fish or snake (uncertain)"],
      ["ס", "", "Samekh", "s", "60", "pillar / support (uncertain)"],
      ["ע", "", "Ayin", "silent guttural (deep throat)", "70", "eye"],
      ["פ", "ף", "Pe", "p (or f)", "80", "mouth"],
      ["צ", "ץ", "Tsadi", "ts (as in 'cats')", "90", "uncertain (plant? fish-hook?)"],
      ["ק", "", "Qof", "q (deep k)", "100", "uncertain (back of head? eye of needle?)"],
      ["ר", "", "Resh", "r", "200", "head"],
      ["ש", "", "Shin", "sh or s", "300", "tooth"],
      ["ת", "", "Tav", "t", "400", "mark / sign (X-shaped in old script)"]
    ],
    quiz: [
      { q: "How many letters change shape at the end of a word?", options: ["Three", "Five", "Seven"], a: 1 },
      { q: "The letter that began as a picture of an eye is…", options: ["Ayin", "Pe", "Resh"], a: 0 },
      { q: "The 'Shibboleth' story in Judges 12 shows…", options: ["Hebrew had no S sound", "Dialect differences existed inside ancient Israel", "Ephraimites couldn't speak"], a: 1 }
    ]
  },
  {
    id: "heb4",
    title: "Lesson 4 — Vowels: reading with and without the dots",
    minutes: 12,
    goal: "Understand niqqud (the vowel points) and read your first pointed word.",
    content: "The Masoretes (600–900 AD) invented small dots and dashes placed under, inside, or above consonants to record the traditional vowels. The main ones, shown here under the letter Bet:\n\nבַ = 'ba' (patach — flat line under)\nבָ = 'ba/bo' (qamats — small T shape)\nבֵ = 'be' as in 'they' (tsere — two dots)\nבִ = 'bi' as in 'machine' (chiriq — one dot under)\nבֹ = 'bo' (cholam — dot on top)\nבוּ = 'bu' (shuruq — dot inside a Vav)\nבְ = quick half-vowel or silence (sheva — two vertical dots)\n\nAlso: a dot inside Bet (בּ) makes it 'b'; without it (ב) it's 'v'. Same for Kaf (k/kh) and Pe (p/f).\n\nNow read: שָׁלוֹם — Shin with qamats (sha), Lamed with cholam-vav (lo), final Mem (m): 'shalom' — peace, wholeness, well-being. You just read Hebrew.",
    quiz: [
      { q: "The vowel points (niqqud) were…", options: ["Part of the original text", "Added ~600–900 AD to preserve traditional pronunciation", "Invented by King David"], a: 1 },
      { q: "בּ with a dot inside sounds like…", options: ["v", "b", "p"], a: 1 },
      { q: "שָׁלוֹם reads as…", options: ["shalom", "shelem", "salaam"], a: 0 }
    ]
  },
  {
    id: "heb5",
    title: "Lesson 5 — First words: a starter vocabulary",
    minutes: 12,
    goal: "Learn 12 foundation words you'll meet constantly in the Bible.",
    content: "Read right to left. Sound each one out using your alphabet:\n\nאֵל (El) — God/mighty one · אֱלֹהִים (Elohim) — God (the common word in Genesis 1)\nאָב (av) — father · אֵם (em) — mother · בֵּן (ben) — son · בַּת (bat) — daughter\nאָדָם (adam) — man/humanity (related to adamah, ground)\nאֶרֶץ (erets) — earth/land · שָׁמַיִם (shamayim) — heavens/sky\nמֶלֶךְ (melekh) — king · דָּבָר (davar) — word/thing/matter\nתּוֹרָה (torah) — instruction/teaching (from the root 'to point/direct' — 'law' is a narrower translation than the word itself)\n\nNotice how translation choices already matter: torah = 'instruction' colors the whole Bible differently than 'law'. Davar meaning both 'word' AND 'thing' tells you something about how Hebrew thought connects speech and reality (Genesis 1: God speaks, things exist).",
    quiz: [
      { q: "'Torah' most literally means…", options: ["Law code", "Instruction / teaching", "Scroll"], a: 1 },
      { q: "'Adam' (man/humanity) is related to the word for…", options: ["Ground/earth (adamah)", "Blood only", "Sky"], a: 0 },
      { q: "'Davar' means…", options: ["Only 'word'", "Only 'thing'", "Both 'word' and 'thing/matter'"], a: 2 }
    ]
  },
  {
    id: "heb6",
    title: "Lesson 6 — The Name: reading יהוה",
    minutes: 10,
    goal: "Read the Tetragrammaton and understand — from the Hebrew side — everything you learned about it in the Languages section.",
    content: "Read the four letters right to left: י (Yod) ה (He) ו (Vav) ה (He) — YHWH. It appears about 6,800 times.\n\nNow you can SEE what the Languages section told you: with no vowel points, the pronunciation depends on tradition — and that tradition was deliberately set aside out of reverence (readers said 'Adonai', my Lord, instead). When the Masoretes pointed the text, they attached Adonai's vowel-reminders to YHWH's consonants — a signal meaning 'say Adonai here'. Read literally as one word by later Europeans, that hybrid produced 'Jehovah'. The scholarly reconstruction 'Yahweh' rests on early Greek transcriptions and Hebrew grammar.\n\nRelated forms you can now decode: הַלְלוּ־יָהּ (hallelu-Yah) = 'praise Yah' — the short form of the Name is inside the word 'hallelujah', which you already say.",
    quiz: [
      { q: "The four letters of the Name are…", options: ["Yod-He-Vav-He", "Yod-Het-Vav-Het", "Vav-He-Yod-He"], a: 0 },
      { q: "'Jehovah' arose from…", options: ["The original pronunciation", "YHWH's consonants combined with Adonai's vowel-signals, read as one word", "A Greek translation"], a: 1 },
      { q: "'Hallelujah' contains…", options: ["The word for temple", "The short form of the divine name (Yah)", "The word for prayer"], a: 1 }
    ]
  },
  {
    id: "heb7",
    title: "Lesson 7 — The root system: how Hebrew words are built",
    minutes: 12,
    goal: "Grasp the three-letter root (shoresh) — the single most powerful idea for understanding Hebrew.",
    content: "Almost every Hebrew word grows from a three-consonant ROOT carrying a core idea. Vowels and added letters shape that idea into words. Take the root כ־ת־ב (K-T-V), 'write':\n\nkatav — he wrote · kotev — writing/writer · katuv — written · ketav — script · mikhtav — a letter (the mi- prefix often marks 'place/instrument of')\n\nOr מ־ל־ך (M-L-K), 'rule': melekh — king · malkah — queen · mamlakhah — kingdom · malakh — he reigned.\n\nWhy this matters for truth-seeking: dictionaries of biblical Hebrew organize by root, and translators constantly choose between senses of one root. When you look up a disputed word, find its root and its whole family — you'll see the range of meaning the translator chose FROM, which is exactly where interpretive judgment (and sometimes bias) lives.",
    quiz: [
      { q: "Most Hebrew words are built from…", options: ["Two-letter roots", "Three-consonant roots", "Vowel patterns alone"], a: 1 },
      { q: "Melekh (king), malkah (queen), and mamlakhah (kingdom) share…", options: ["The root M-L-K", "The root K-T-V", "No connection"], a: 0 },
      { q: "Knowing a word's root family helps you…", options: ["Skip learning vocabulary", "See the range of meanings a translator chose from", "Pronounce vowels"], a: 1 }
    ]
  },
  {
    id: "heb8",
    title: "Lesson 8 — Read your first verse: Genesis 1:1",
    minutes: 15,
    goal: "Read and understand the Bible's first sentence in the original.",
    content: "בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ\n\nWord by word, right to left:\n\nבְּרֵאשִׁית (be-reshit) — 'in (the) beginning' — be = in, reshit = beginning (root R-A-SH, 'head' — you learned Resh = head!)\nבָּרָא (bara) — 'created' — a verb the Bible uses only with God as subject\nאֱלֹהִים (Elohim) — 'God' — grammatically plural in FORM, but it takes a singular verb here (bara, not bar'u), so the grammar treats it as singular; the plural form is often understood as intensity/majesty — a real feature people argue about honestly and dishonestly, and now you can see the actual grammar\nאֵת (et) — untranslatable marker pointing to the direct object\nהַשָּׁמַיִם (ha-shamayim) — 'the heavens' — ha = the\nוְאֵת (ve-et) — 'and' + object marker — ve = and\nהָאָרֶץ (ha-arets) — 'the earth'\n\n'In-beginning created God [the] heavens and [the] earth.' You have now read the opening of the Hebrew Bible in Hebrew. From here: keep going with a reader's edition (Hebrew text with helps), the free resources at sefaria.org, or ask the Course Builder below to build you a personalized next course.",
    quiz: [
      { q: "'Bereshit' means…", options: ["God", "In the beginning", "Created"], a: 1 },
      { q: "The verb 'bara' with Elohim in Genesis 1:1 is…", options: ["Plural, matching the plural form", "Singular — the grammar treats Elohim as singular", "Missing"], a: 1 },
      { q: "The word 'et' is…", options: ["The word for 'earth'", "An untranslatable object marker", "The word for 'and'"], a: 1 }
    ]
  }
];
