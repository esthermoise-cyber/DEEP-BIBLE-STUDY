/* Manuscripts & Translations — the actual physical witnesses behind every
   Bible, what they are, how they differ, and why differences exist. */

const DATA_MANUSCRIPTS = [
  {
    title: "The Masoretic Text — the Hebrew Bible's backbone",
    date: "tradition fixed c. 600–1000 AD; oldest complete copy 1008 AD",
    tier: "DOCUMENTED",
    tags: ["hebrew-witnesses"],
    body: "The Hebrew text behind almost every Old Testament translation. The Masoretes (families of scribes in Tiberias, c. 600–900 AD) added vowel points, accents, and thousands of marginal safeguards (counting words and letters per book to catch copying drift — documented obsessive quality-control). KEY MANUSCRIPTS: the Aleppo Codex (c. 930 — the most authoritative, partially lost in 1947 riots) and the Leningrad Codex (1008 — the oldest COMPLETE Hebrew Bible, basis of scholarly editions). HONEST FRAME: 'medieval copies' sounds late — but the Dead Sea Scrolls proved this tradition transmitted a text already stable a thousand years earlier (the Great Isaiah Scroll test). Precision of transmission: documented. Whether the text-form the Masoretes standardized was everywhere the best ancient form: genuinely assessed book by book (see the Jeremiah entry under Dead Sea Scrolls).",
    sources: ["Leningrad Codex (Russian National Library)", "Aleppo Codex (Israel Museum; aleppocodex.org)", "Biblia Hebraica Stuttgartensia (the scholarly edition)"]
  },
  {
    title: "The Dead Sea Scrolls as textual witnesses",
    date: "c. 250 BC – 70 AD",
    tier: "DOCUMENTED",
    tags: ["hebrew-witnesses"],
    body: "Beyond their fame (covered in Biblical History), here's their textual role: they push our Hebrew evidence back a millennium and show the text existed in a few identifiable forms. WHAT THEY SHOW: most scrolls closely match the later Masoretic tradition (proto-Masoretic); some match the Hebrew behind the Septuagint (e.g. 4QJer-b, a SHORT edition of Jeremiah ~one-eighth shorter, proving the LXX's translators weren't paraphrasing — they had a different Hebrew edition); a few align with the Samaritan Pentateuch's text-form. THE HONEST CONCLUSION scholars draw: transmission was highly faithful WITHIN each stream, and more than one ancient edition of certain books circulated side by side — both facts documented by the same caves. Neither 'hopelessly corrupted' nor 'photocopied perfection': precisely what the physical evidence shows, which this app reports as found.",
    sources: ["Great Isaiah Scroll (1QIsa-a)", "4QJer-b/d (short Jeremiah)", "Emanuel Tov, 'Textual Criticism of the Hebrew Bible'"]
  },
  {
    title: "The Septuagint (LXX) — the Greek Old Testament",
    date: "Torah c. 250 BC; rest by c. 100 BC",
    tier: "DOCUMENTED",
    tags: ["versions"],
    body: "The first great Bible translation (context in Languages section); as a WITNESS it is indispensable: translated from Hebrew manuscripts a thousand years older than the Masoretic codices, so where it differs it may preserve older readings — case by case, not automatically. GREAT MANUSCRIPTS: Codex Vaticanus and Codex Sinaiticus (both c. 350 AD), Codex Alexandrinus (c. 450). DOCUMENTED SIGNIFICANCE: it's the Bible most NT authors quote (their quotations often match LXX wording against the Hebrew — verifiable in any critical edition); it included the deuterocanonical books, which is how those entered Christian usage; and famous NT readings (Isaiah 7:14's 'parthenos') rest on its choices. It remains the official Old Testament of Greek Orthodoxy today — meaning the 'original Bible' of a large share of Christian history was this Greek text, a documented fact worth sitting with whatever one's tradition.",
    sources: ["Codex Vaticanus (Vatican Library, digitized)", "Codex Sinaiticus (codexsinaiticus.org)", "Rahlfs–Hanhart critical edition", "NT citation studies"]
  },
  {
    title: "The Samaritan Pentateuch",
    date: "text-form from Second Temple era",
    tier: "DOCUMENTED",
    tags: ["hebrew-witnesses"],
    body: "The Torah as preserved — in a descendant of the paleo-Hebrew script — by the Samaritan community (see Origins section), copied independently of Jewish transmission for over two thousand years: a priceless independent check. DIFFERENCES from the Masoretic Text: roughly 6,000, the great majority spelling and grammar; a minority significant — most famously a Tenth-Commandment expansion locating the altar on Mount Gerizim (the Samaritan holy site — a documented sectarian edit, and an honest example of what deliberate theological alteration actually looks like, so rare cases can calibrate the claim). WHERE IT AGREES with the LXX against the MT, some Qumran scrolls show the same text-form — proving these variants are ancient, not late Samaritan invention. HONEST SUMMARY: overwhelming agreement across independent lines; the disagreements identifiable, datable, and openly cataloged.",
    sources: ["Abisha Scroll (Samaritan community, Nablus)", "Qumran 'pre-Samaritan' manuscripts (4QpaleoExod-m)", "Critical editions (Tal–Florentin)"]
  },
  {
    title: "New Testament manuscripts — papyri to the great codices",
    date: "c. 125 AD onward",
    tier: "DOCUMENTED",
    tags: ["greek-witnesses"],
    body: "The NT is the best-attested ancient text by manuscript count: ~5,800 Greek manuscripts, plus early translations and citations. EARLIEST: P52, a credit-card-sized John fragment usually dated c. 125–175 — within living memory of composition; substantial papyri (P66, P75, c. 200) contain whole gospels. COMPLETE BIBLES: Sinaiticus and Vaticanus (c. 350). WHAT ABUNDANCE MEANS, honestly: more copies = more visible variants (hundreds of thousands, the vast majority spelling/word order) — abundance is why we can MAP the variants, and the notable ones (Mark 16:9–20, John 7:53–8:11, the Comma — see Truth Analyzer) are printed in every modern Bible's footnotes. No other ancient book lets you check its transmission this thoroughly; the checking is public, ongoing, and anyone with a critical edition can join it.",
    sources: ["P52 (John Rylands Library, Manchester)", "P66, P75 (Bodmer/Vatican)", "Nestle-Aland 28th edition (the variant map)", "INTF manuscript database (open online)"]
  },
  {
    title: "The Latin Vulgate",
    date: "Jerome, c. 382–405 AD",
    tier: "DOCUMENTED",
    tags: ["versions"],
    body: "Jerome's Latin translation — made, importantly, from the HEBREW for the OT (a controversial choice then; Augustine worried about abandoning the LXX — their letters survive). It became the West's Bible for a thousand years, declared authentic at Trent (1546). DOCUMENTED CONSEQUENCES traced elsewhere in this app: 'Lucifer' as a name (Isaiah 14 rendering), 'do penance' (poenitentiam agite) for 'repent' — a translation with doctrinal weight the Reformers contested, and the standing example of how one version's choices can shape centuries. As a witness it preserves readings from Hebrew and Greek manuscripts older than most that survive, so critics of 'church Latin' and defenders alike meet in the same place: it must be weighed like every other witness, no more, no less.",
    sources: ["Codex Amiatinus (oldest complete Vulgate, c. 700)", "Jerome–Augustine correspondence (Letters 71, 75)", "Stuttgart Vulgate critical edition"]
  },
  {
    title: "The Syriac Peshitta and the Eastern witnesses",
    date: "OT c. 2nd c. AD; NT standard by 5th c.",
    tier: "DOCUMENTED",
    tags: ["versions"],
    body: "Syriac is a dialect of Aramaic — the language family Jesus spoke — and the Peshitta ('simple/common') is the Bible of the Aramaic-speaking churches of the East (Assyrian, Syriac Orthodox, and the ancient churches of India), still in liturgical use. WITNESS VALUE: an early, independent translation stream (OT from Hebrew, c. 2nd century; NT standardized by the 5th). CLAIM-CHECK, stated carefully: some teach 'Peshitta primacy' — that the NT was originally Aramaic. The documented evidence (Greek wordplay in the NT text, quotation patterns, the Peshitta's own translation features, and its late inclusion of books like 2 Peter) leads virtually all specialists, including Aramaic scholars, to Greek originals with an early Syriac translation. Jesus SPEAKING Aramaic [CONSENSUS] and the NT being WRITTEN in Greek [CONSENSUS] are different questions — merging them is the error to avoid.",
    sources: ["Peshitta manuscripts (e.g. Codex Ambrosianus)", "Syriac churches' continuous liturgical tradition", "Sebastian Brock's Syriac scholarship"]
  },
  {
    title: "The Ethiopian (Ge'ez) tradition",
    date: "translation c. 4th–6th century AD",
    tier: "DOCUMENTED",
    tags: ["versions"],
    body: "Christianity reached the Aksumite kingdom by the 4th century (documented: king Ezana's coins switch from crescent to cross — datable, physical evidence of a national conversion); the Bible was translated into Ge'ez from Greek in the following centuries. WHY IT MATTERS ENORMOUSLY here: the Ethiopian Orthodox Tewahedo canon is the largest (~81 books), uniquely preserving 1 Enoch and Jubilees complete when every other tradition lost them — without Ethiopia, we would not have the book Jude quotes. An African church, never governed by Rome or Constantinople, maintaining an unbroken ancient tradition — documented, and a needed correction to tellings of Christian history that forget Africa was in it from the start (Acts 8's Ethiopian official being the tradition's own starting claim, with the Aksum evidence carrying the documented weight).",
    sources: ["Ezana's coins and inscriptions (4th c.)", "Ge'ez manuscript corpus (EMML microfilm project)", "Ethiopian canon lists"]
  },
  {
    title: "Why manuscripts differ — the documented causes",
    date: "method",
    tier: "DOCUMENTED",
    tags: ["method"],
    body: "Before crying 'corruption!' or 'nothing to see!', know the documented causes of variants, roughly in order of frequency: (1) spelling and synonym slips; (2) eye-skips between similar line-endings (homoioteleuton — scribes were human); (3) harmonization (making Mark match Matthew — usually unconscious); (4) marginal notes absorbed into the text by the next copyist (the likely path of the Comma Johanneum); (5) translation choices when crossing languages; (6) regional text-families drifting apart; (7) RARE documented deliberate change — sectarian edits (Gerizim in the Samaritan Torah) or smoothing an awkward reading; (8) unknown. THE METHOD (textual criticism): prefer readings that explain the others, weigh older and independent witnesses, prefer the harder reading (scribes smooth, they don't roughen). It's detective work with public evidence — the footnotes in a modern study Bible are its running results, free to anyone.",
    sources: ["Metzger & Ehrman, 'The Text of the New Testament'", "Tov, 'Textual Criticism of the Hebrew Bible'", "Any NA28/BHS apparatus (the evidence, printed)"]
  }
];
