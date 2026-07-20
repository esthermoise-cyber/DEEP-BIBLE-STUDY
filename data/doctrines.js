/* Doctrine Investigator — teachings examined by a fixed structure:
   THE CLAIM → KEY TEXTS → EARLIEST EVIDENCE → DEVELOPMENT → ESTABLISHED /
   DEBATED / CANNOT BE PROVEN. History and texts are graded; whether to
   believe remains the reader's — critique targets ideas, never people. */

const DATA_DOCTRINES = [
  {
    title: "The Sabbath — seventh day, Sunday, or neither?",
    date: "development documented 1st–4th century",
    tier: "DOCUMENTED",
    tags: ["practice-doctrines"],
    body: "THE CLAIM(S): God's rest day is Saturday and stands / was moved to Sunday / doesn't bind believers. KEY TEXTS: Genesis 2:2–3; Exodus 20:8–11; Acts 20:7; Colossians 2:16; Hebrews 4. EARLIEST EVIDENCE: seventh-day Sabbath practiced by Jesus and the apostles; first-day gatherings appear in the NT ambiguously, clearly in the Didache (c. 100) and Justin Martyr (155); Constantine's civil law 321; Laodicea (c. 363) discourages Sabbath-keeping. DEVELOPMENT: gradual 2nd-century shift among Gentile churches, later locked by law. ESTABLISHED: the sequence and dates above. DEBATED: whether any NT text authorizes a change; how Colossians 2:16 applies. CANNOT BE PROVEN: that apostles commanded Sunday, or that first-century Gentile congregations uniformly kept either day.",
    sources: ["Justin Martyr, First Apology 67", "Codex Justinianus 3.12.2 (321)", "Council of Laodicea canon 29", "Didache 14"]
  },
  {
    title: "Hell — eternal torment, destruction, or restoration?",
    date: "positions all attested by 3rd century",
    tier: "DEBATED",
    tags: ["afterlife"],
    body: "THE CLAIM(S): the lost suffer forever / are destroyed (annihilationism) / are ultimately restored (universalism). KEY TEXTS: the four words English flattened into 'hell' (see Languages): Sheol, Hades, Gehenna, Tartarus; Matthew 25:46; Revelation 20; Malachi 4:1–3; 1 Corinthians 15:22–28. EARLIEST EVIDENCE: all three positions existed among early Christians — eternal torment (Tertullian), annihilation (Arnobius; arguably Ignatius' 'cease to exist' language), restoration (Origen; Gregory of Nyssa, a canonized saint). DEVELOPMENT: eternal torment became dominant in the Latin West especially via Augustine (5th c.); Origen's universalism was condemned in 553. ESTABLISHED: the translation history and the early diversity. DEBATED: which position the texts teach — 'aionios' (age-lasting? eternal?) is a genuine lexical dispute. CANNOT BE PROVEN: any position, by historical method — this is finally theology, and honest study says so.",
    sources: ["Tertullian, De Spectaculis 30", "Origen, De Principiis 1.6", "Gregory of Nyssa, Catechetical Oration 26", "Constantinople II anathemas (553)"]
  },
  {
    title: "The immortal soul",
    date: "synthesis documented 2nd–5th century",
    tier: "DEBATED",
    tags: ["afterlife"],
    body: "THE CLAIM: humans possess an inherently immortal soul that survives death. KEY TEXTS: Genesis 2:7 — man 'became a living nephesh' (nephesh = living being/life/creature; animals are also nephesh in Gen 1:20–24, a fact translations obscure); Ecclesiastes 9:5; Ezekiel 18:4 ('the nephesh that sins shall die'); 1 Timothy 6:16 (God 'alone has immortality'); Luke 23:43. EARLIEST EVIDENCE: Hebrew scripture speaks of the dead in Sheol awaiting resurrection, not naturally immortal souls; inherent immortality is Plato's doctrine (Phaedo, 4th c. BC), and church fathers educated in Greek philosophy (Athenagoras, Tertullian, Augustine) documentedly merged it with Christian teaching. DEVELOPMENT: the merger became mainstream; resurrection remained creedal but popular piety shifted to 'soul goes to heaven at death'. ESTABLISHED: nephesh's semantic range; the Platonic doctrine's separate origin; the documented synthesis. DEBATED: whether NT texts assume an intermediate conscious state. CANNOT BE PROVEN: what happens at death — no historical method reaches it.",
    sources: ["Hebrew lexicons on nephesh (BDB, HALOT)", "Plato, Phaedo", "Oscar Cullmann, 'Immortality of the Soul or Resurrection of the Dead?'", "Genesis 2:7 vs 1:20–24 (compare translations)"]
  },
  {
    title: "The Trinity — the doctrine's documented development",
    date: "term c. 200; formulas 325–381",
    tier: "DOCUMENTED",
    tags: ["nature-of-God"],
    body: "THE CLAIM: one God in three co-equal, co-eternal persons. KEY TEXTS: Deuteronomy 6:4; Matthew 28:19; John 1:1, 10:30, 14:28; Philippians 2:5–11; 1 Corinthians 8:6. EARLIEST EVIDENCE: NT texts assert the Father's godhood, ascribe divine functions to the Son and Spirit, and also contain subordination language ('the Father is greater than I') — the tension that drove the controversy. The WORD trinitas first appears in Tertullian (c. 200); before Nicaea, documented views varied widely (subordinationism was common among the apologists). DEVELOPMENT: Arian crisis → Nicaea 325 (Son 'homoousios' with the Father) → decades of imperial back-and-forth (Arian emperors, exiled bishops — documented) → Constantinople 381 finalizing the Spirit's status. ESTABLISHED: this entire timeline. DEBATED: whether the development unfolded what the NT implies, or added to it — the core Christian/Unitarian/Jewish/Islamic dispute. CANNOT BE PROVEN: the metaphysics either way; history can only date the formulations.",
    sources: ["Tertullian, Adversus Praxean", "Nicene Creed (325) and Niceno-Constantinopolitan Creed (381)", "Documented Arian controversy history (Socrates Scholasticus)", "R.P.C. Hanson, 'The Search for the Christian Doctrine of God'"]
  },
  {
    title: "Tithing — from grain and livestock to the church offering",
    date: "obligatory church tithe: 585 AD onward",
    tier: "DOCUMENTED",
    tags: ["practice-doctrines"],
    body: "THE CLAIM: believers owe 10% of income to the church. KEY TEXTS: Genesis 14:20; Leviticus 27:30–33; Numbers 18; Deuteronomy 14:22–29 (note: a tithe eaten by the tither in celebration, and a third-year tithe for the poor); Malachi 3:8–10; Matthew 23:23; 2 Corinthians 9:7. EARLIEST EVIDENCE: the Torah tithes are agricultural produce and herds supporting Levites (who held no land) and the poor — money is not tithed, and there are arguably three overlapping tithes. The earliest churches practiced voluntary giving (2 Cor 8–9; Didache mentions firstfruits); no church tithe-law exists in the first centuries. DEVELOPMENT: preachers urged tithing as a model (Cyprian, 3rd c.); the Council of Mâcon (585) made it obligatory under penalty; Charlemagne (779) made it imperial law — a documented state tax phase most sermons omit. ESTABLISHED: all of the above. DEBATED: whether the tithe principle carries into the new covenant voluntarily. CANNOT BE PROVEN: that apostolic congregations collected a compulsory 10%.",
    sources: ["Deuteronomy 14:22–29 (read it whole)", "Didache 13", "Council of Mâcon canon 5 (585)", "Charlemagne's capitulary of 779"]
  },
  {
    title: "Baptism — mode, meaning, and infants",
    date: "infant practice attested from c. 200",
    tier: "DOCUMENTED",
    tags: ["practice-doctrines"],
    body: "THE CLAIM(S): immersion of believers / valid for infants / sprinkling suffices. KEY TEXTS: Matthew 28:19; Acts 2:38, 8:36–38; Romans 6:3–4; Colossians 2:12; household baptisms (Acts 16). EARLIEST EVIDENCE: baptizō means immerse (see Languages); Jewish ritual immersion (mikveh — hundreds excavated, including by the Temple steps) is the documented background; the Didache (c. 100) prefers 'living water' immersion but explicitly ALLOWS pouring when water is scarce — the earliest documented flexibility. Infant baptism: first explicit discussions c. 200 — Tertullian argues for DELAY (proving the practice existed to argue against), Hippolytus and Cyprian (253 council) support it, Origen calls it apostolic tradition. DEVELOPMENT: infant baptism became standard as original-sin doctrine developed (Augustine); immersion remained the Eastern norm while the West moved to affusion. ESTABLISHED: the word's meaning, the mikveh background, the Didache's allowance, the c. 200 debates. DEBATED: whether 'household' baptisms included infants. CANNOT BE PROVEN: first-century infant baptism, either way — the record is silent, and honesty says silent.",
    sources: ["Didache 7", "Tertullian, De Baptismo 18", "Cyprian, Epistle 64 (253)", "Excavated mikva'ot (Jerusalem, Qumran, Masada)"]
  },
  {
    title: "Heaven, resurrection, and where the dead hope to go",
    date: "shift documented across centuries",
    tier: "CONSENSUS",
    tags: ["afterlife"],
    body: "THE CLAIM examined: 'the goal is going to heaven when you die.' KEY TEXTS: Daniel 12:2; Isaiah 26:19; 1 Corinthians 15 (the longest NT treatment); 1 Thessalonians 4:16; Revelation 21 (heaven descends to a renewed earth); John 5:28–29. EARLIEST EVIDENCE: the documented hope of the Hebrew Bible, Second Temple Judaism (Pharisees vs Sadducees — Josephus documents resurrection as THE dividing doctrine), and the early creeds ('resurrection of the body') is bodily resurrection to renewed creation — not disembodied heaven. DEVELOPMENT: as the immortal-soul synthesis spread (see that entry), popular piety migrated from 'resurrection at the end' to 'heaven at death', while formal creeds retained resurrection — a documented gap between creed and pew. ESTABLISHED: resurrection's centrality in the earliest sources; the later shift in emphasis. DEBATED: how intermediate-state texts (Philippians 1:23, Luke 23:43) fit. CANNOT BE PROVEN: the afterlife itself — history documents beliefs, not their objects.",
    sources: ["1 Corinthians 15", "Josephus, Antiquities 18.1 (party beliefs)", "Apostles' & Nicene creeds ('resurrection of the dead')", "N.T. Wright, 'The Resurrection of the Son of God' (survey of the sources)"]
  },
  {
    title: "Dietary laws — did clean and unclean end?",
    date: "dispute documented from the 1st century",
    tier: "DEBATED",
    tags: ["practice-doctrines"],
    body: "THE CLAIM(S): the food laws stand / ended for all / never applied to Gentiles. KEY TEXTS: Leviticus 11; Deuteronomy 14; Mark 7:19; Acts 10 (Peter's vision — which Peter himself interprets in v. 28 as about PEOPLE, not menu); Acts 15 (the council asks four abstentions of Gentiles, including blood); Romans 14; 1 Timothy 4:4. EARLIEST EVIDENCE: Jesus and the apostles kept the food laws; the first documented dispute is Gentile obligation (Acts 15, c. 49); Mark 7:19's 'declaring all foods clean' is a narrator's comment whose translation and scope are genuinely disputed. Archaeology note: the pig-bone absence marking Israelite sites (see Biblical History) shows how ancient and identity-defining the practice was. DEVELOPMENT: as the church became Gentile, non-observance became the norm; Acts 15's blood-abstention faded in the West (the East kept it longer — documented). ESTABLISHED: the texts, the sequence, Peter's own interpretation of his vision. DEBATED: nearly everything else, among serious scholars and traditions alike. CANNOT BE PROVEN: a single NT command that Jewish believers stop keeping the law — the documented dispute was always about Gentiles.",
    sources: ["Acts 10:28; Acts 15:19–21, 29", "Mark 7:19 translation notes (compare versions)", "Council in Trullo canon 67 (blood, 692 — Eastern persistence)", "Iron-age pig-bone studies"]
  },
  {
    title: "Church hierarchy — from elders to bishops to popes",
    date: "stages documented 1st–5th century",
    tier: "DOCUMENTED",
    tags: ["authority"],
    body: "THE CLAIM examined: church office as we know it (single bishop → regional archbishops → pope) is the original apostolic structure. KEY TEXTS: Philippians 1:1 (plural 'overseers' in one city); Acts 20:17,28 — elders (presbyteroi) and overseers (episkopoi) are the SAME people in the earliest texts; Matthew 16:18; 1 Peter 5:1–3. EARLIEST EVIDENCE: NT churches show plural local leadership; the single-bishop model (mono-episcopacy) is first urged — insistently, which shows it wasn't yet universal — by Ignatius of Antioch (c. 110); Rome itself appears governed by a college of presbyters into the 2nd century (documented in 1 Clement and Hermas). DEVELOPMENT: bishop → metropolitan → the five patriarchates; Roman primacy claims grow (documented steps: Victor c. 190, Stephen c. 255, Leo I 440–461, Gregory VII 1075), contested by the East throughout — a root of 1054. ESTABLISHED: this development sequence, from the sources of each stage. DEBATED: whether development equals corruption, fulfillment, or neither — that judgment exceeds history. CANNOT BE PROVEN: that the apostles instituted the later pyramid; the earliest documents don't show it.",
    sources: ["Philippians 1:1; Acts 20:17,28", "Ignatius, Letters (c. 110)", "1 Clement 44; Shepherd of Hermas (Roman plurality)", "Leo I, Sermons on Peter's chair"]
  }
];
