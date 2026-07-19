/* World history & politics — the empires that shaped the ancient world,
   and the political patterns that repeat from then to now. */

const DATA_WORLD = [
  {
    title: "The empire chain that runs through the Bible",
    date: "c. 900 BC – 476 AD",
    tier: "DOCUMENTED",
    tags: ["empires"],
    body: "The Bible's political history is world history: every empire that dominated the Near East took its turn ruling Israel, and each is independently documented. Assyria (destroyed the northern kingdom, 722 BC) → Babylon (destroyed Jerusalem, 586 BC) → Persia (allowed the return, 539 BC) → Alexander and the Greek kingdoms (332 BC; the pressure behind the Maccabean revolt) → Rome (from 63 BC; the world of the New Testament; destroyed the Temple in 70 AD). Reading the biblical books against each empire's own records (Assyrian annals, Babylonian chronicles, the Cyrus Cylinder, Greek historians, Roman historians) is precisely how the events in the Biblical History section earn their 'Documented' tags. History and scripture are not two sealed worlds — they describe the same one.",
    sources: ["Assyrian royal annals", "Babylonian Chronicles", "Cyrus Cylinder", "Josephus; Tacitus; Cassius Dio"]
  },
  {
    title: "Law codes: Hammurabi, Moses, and modern law",
    date: "c. 1754 BC onward",
    tier: "DOCUMENTED",
    tags: ["patterns"],
    body: "The Code of Hammurabi (c. 1754 BC, on a stone stele now in the Louvre) predates Mosaic law and shares forms with it ('if a man does X…', lex talionis 'eye for eye'), showing Israel's law spoke the legal language of its world. The documented DIFFERENCES are as instructive as the parallels: Hammurabi's penalties vary by social class (a noble's eye is worth more than a commoner's) and property offenses can carry death; Mosaic law applies one law to citizen and foreigner (Lev 24:22), never executes for property crimes, and uniquely surrounds law with obligations to the poor, the laborer, and the stranger. Modern Western law descends through Roman law and English common law, but the principle that the ruler is himself under the law — not its source — enters the Western tradition substantially through the biblical stream (prophets rebuking kings; Deut 17's limits on the king).",
    sources: ["Code of Hammurabi stele (Louvre)", "Covenant Code comparisons (Exodus 21–23)", "Deuteronomy 17:14–20"]
  },
  {
    title: "Pattern: debasing the money",
    date: "Rome, 64–274 AD; and now",
    tier: "DOCUMENTED",
    tags: ["patterns", "economy"],
    body: "Rome's silver denarius was ~98% silver under Augustus. Emperors short of money quietly reduced the silver: ~93% under Nero (64 AD), ~50% by 250 AD, under 5% by the 270s — measured directly from surviving coins, so this is as documented as history gets. Result: the 3rd-century price explosion, Diocletian's failed price-control edict (301 AD — the text survives, and it punished 'greedy merchants' rather than the debasement), and eventually a partial return to barter and payment-in-kind. The pattern — government spends beyond revenue → quietly dilutes the currency → prices rise → the diluters blame sellers → controls fail — has repeated from Rome to 1920s Germany to the present day's fiat inflation debates. Even the vocabulary of trust in money is ancient: honest weights and measures are a repeated biblical command (Lev 19:36; Prov 11:1 — 'a false balance is an abomination').",
    sources: ["Metallurgical analyses of Roman coinage (documented decline curve)", "Diocletian's Edict on Maximum Prices (301, text survives)", "Leviticus 19:36; Proverbs 11:1"]
  },
  {
    title: "Pattern: bread and circuses",
    date: "Rome, 2nd c. BC – and now",
    tier: "DOCUMENTED",
    tags: ["patterns"],
    body: "The Roman grain dole (from 123 BC, free by 58 BC) fed hundreds of thousands of citizens, and the state staged ever-larger games — both fully documented in Roman administrative records and both politically essential: emperors feared grain-supply failures more than most wars. The poet Juvenal named the mechanism forever (c. 100 AD): the people 'that once bestowed commands… now longs eagerly for just two things — bread and circuses' — his point being that a citizenry can be traded out of civic power for subsidized comfort and entertainment. Whether any modern policy is 'bread and circuses' is a judgment call; that rulers from Rome onward have knowingly used comfort and spectacle to manage restive populations is documented from their own records.",
    sources: ["Juvenal, Satire 10.77–81", "Roman grain dole (annona) administrative records", "Res Gestae of Augustus (boasts of games and distributions)"]
  },
  {
    title: "Pattern: propaganda — the ruler's version of events",
    date: "from c. 1274 BC",
    tier: "DOCUMENTED",
    tags: ["patterns"],
    body: "State propaganda is as old as states, and antiquity lets us catch it in the act because both sides' records sometimes survive. Ramesses II covered Egypt's temples with his 'victory' at Kadesh (1274 BC) — the surviving Hittite treaty and records show the battle was at best a draw and Egypt ceded ground afterward. Assyrian kings never record defeats; Sennacherib's prism spins his failure to take Jerusalem as a triumph of tribute. The Behistun inscription of Darius rewrites his seizure of power as legitimate restoration. Augustus' Res Gestae presents the end of the republic as its rescue. The method never changed, only the media: control the record, repeat the message, omit the defeat. This is why the historical method (see Start Here) insists on multiple INDEPENDENT sources — and why a source admitting its own side's failures (as the biblical histories repeatedly do) earns credibility.",
    sources: ["Kadesh inscriptions vs. Egyptian–Hittite treaty (both survive)", "Sennacherib Prism vs. 2 Kings 19 (compare endings)", "Behistun inscription", "Res Gestae Divi Augusti"]
  },
  {
    title: "Pattern: republic to strongman",
    date: "Rome, 133–27 BC",
    tier: "DOCUMENTED",
    tags: ["patterns"],
    body: "Rome's republic did not fall in a day; it eroded over a century, and every step is documented by Roman authors who lived it. The sequence: extreme inequality after foreign conquests → land-reform champions (the Gracchi) murdered by the elite rather than accommodated (133, 121 BC) → politics turns violent and norms fall one by one → generals' armies become loyal to the general, not the state (Marius' reforms) → rival strongmen march on Rome itself (Sulla 88 BC, then civil wars) → an exhausted public accepts one-man rule packaged in republican language: Augustus 'restored the republic' (27 BC) while permanently holding its real powers. The republic's FORMS — senate, consuls, elections — continued for centuries, hollow. Students of politics in every later era, including America's founders (who wrote about it explicitly in the Federalist Papers), have treated this sequence as the standing warning: institutions die by hollowing before they die by name.",
    sources: ["Plutarch, Lives of the Gracchi, Marius, Sulla, Caesar", "Appian, Civil Wars", "Res Gestae (Augustus' own framing)", "Federalist Papers nos. 6, 10 (founders citing the precedent)"]
  },
  {
    title: "Pattern: divide, resettle, and rule",
    date: "Assyria onward",
    tier: "DOCUMENTED",
    tags: ["patterns", "empires"],
    body: "Assyria industrialized a technique every later empire refined: mass deportation and population-mixing to dissolve conquered identities (documented in its own records — and the direct cause of the 'lost tribes'). Babylon deported elites specifically, leaving leaderless populations. Persia inverted the tool — sponsoring restorations (Cyrus Cylinder) to win loyal border provinces — proving that generosity can also be an imperial control strategy. Rome perfected client kingship: local rulers like Herod held power at Rome's pleasure, absorbing their people's resentment while Rome held the army. Empires also renamed places to erase memory — Jerusalem became Aelia Capitolina, Judea became Palaestina (135 AD). Recognizing these tools in ancient, fully documented form is the best training for recognizing their modern descendants: partition, population transfer, puppet governments, and renaming as erasure.",
    sources: ["Assyrian deportation records", "Cyrus Cylinder", "Josephus on Herod (Antiquities 15–17)", "Hadrian's renaming decrees (Cassius Dio 69)"]
  },
  {
    title: "Pattern: the census, taxation, and registration",
    date: "documented from Egypt and Rome",
    tier: "DOCUMENTED",
    tags: ["patterns", "economy"],
    body: "Counting people has always been about taxing and conscripting them, and antiquity documents both the practice and the resistance to it. Egypt and Mesopotamia ran censuses millennia ago; Rome's census (the context of Luke 2) registered persons and property for tax; actual census returns survive on papyrus from Roman Egypt, household by household. Tax revolt is equally ancient: the northern tribes seceded from Rehoboam over taxation and forced labor (1 Kings 12 — 'your father made our yoke heavy'); Judea's tax censuses under Rome triggered the revolt of Judas the Galilean (6 AD, recorded by Josephus and Acts 5:37). The permanent tension — states need revenue and information; concentrated fiscal power invites abuse; the abused eventually resist — is one of the oldest documented dynamics in politics.",
    sources: ["Roman Egypt census papyri (surviving returns)", "1 Kings 12", "Josephus, Antiquities 18.1 (the 6 AD census revolt)"]
  },
  {
    title: "Why empires fall: what the evidence actually supports",
    date: "comparative analysis",
    tier: "CONSENSUS",
    tags: ["empires", "patterns"],
    body: "Single-cause stories ('Rome fell because of X') are popular and unsupportable; the documented record shows converging strains, and the honest label here is scholarly-consensus-with-debate. For Rome's west (fell 476 AD): fiscal exhaustion and debased money, plague waves (Antonine, Cyprianic — documented), over-extended frontiers, civil wars consuming the army, elite competition turning zero-sum, and dependence on imported force (foederati) that eventually took over. The Bronze Age collapse (c. 1177 BC) shows a similar convergence (drought cores, destroyed cities, the Sea Peoples records). What the evidence does NOT support: moral-panic single causes fitted to whatever the teller dislikes today. What it does support: complex systems fail through compounding stresses, usually visible for generations, usually denied by those benefiting from the system until late. That pattern is well-enough attested across cases to state as consensus.",
    sources: ["Bryan Ward-Perkins, 'The Fall of Rome' (material evidence)", "Eric Cline, '1177 BC' (Bronze Age collapse evidence)", "Kyle Harper, 'The Fate of Rome' (climate & plague data)"]
  }
];
