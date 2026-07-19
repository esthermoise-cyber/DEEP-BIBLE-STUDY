/* Migrations of the Israelites — where they started, where they were taken,
   where they ended up. Documented movements first, then every major claim of
   Israelite descent, each graded strictly by evidence. */

const DATA_MIGRATIONS = [
  {
    title: "Starting point: where the Israelites began",
    date: "before c. 1200 BC",
    tier: "CONSENSUS",
    tags: ["origins"],
    body: "Two answers, at two levels. TRADITION/TEXT: the Bible traces the family from Ur of the Chaldees (Mesopotamia) → Haran → Canaan (Abraham), then Egypt and back (the Exodus). ARCHAEOLOGY: the earliest thing excavation can actually see is a people called Israel living in the hill country of Canaan by c. 1200 BC (Merneptah Stele; the wave of new highland villages with no pig bones). Whether that population had recently arrived from Egypt, emerged from within Canaan, or both, is genuinely debated. So the honest statement: the Israelites are first VISIBLE in the central hill country of Canaan — the land itself is the documented starting point of everything that follows.",
    sources: ["Merneptah Stele (c. 1208 BC)", "Iron I hill-country settlement surveys", "Genesis 11–12 (textual tradition)"]
  },
  {
    title: "First forced migration: Assyria deports the northern tribes",
    date: "734–722 BC",
    tier: "DOCUMENTED",
    tags: ["deportation"],
    body: "Assyria deported Israelites in stages (Tiglath-Pileser III took Galilee and Gilead c. 734–732 BC; Sargon II took Samaria 722 BC, claiming 27,290 deportees). WHERE THEY WERE TAKEN is recorded in both Assyrian and biblical sources, and they agree: Halah, the Habor river region (Gozan), and the cities of the Medes — northern Mesopotamia and northwest Iran (2 Kings 17:6; Assyrian resettlement records). Assyrian policy deliberately scattered captives among other populations to dissolve national identity. What can be traced afterward: Israelite names appear in Assyrian administrative documents from these regions for a few generations, then fade — the documented trail ends in assimilation, not in a secret intact nation.",
    sources: ["Annals of Sargon II", "2 Kings 17:6", "Assyrian administrative texts with Yahwistic names (e.g. from Gozan/Tell Halaf)"]
  },
  {
    title: "The overlooked migration: north → south into Judah",
    date: "c. 720–700 BC",
    tier: "CONSENSUS",
    tags: ["deportation"],
    body: "Not all northerners were deported or assimilated. Archaeology shows Jerusalem exploded in size — roughly three to four times over — in the decades after the northern kingdom fell, and new suburbs (protected by Hezekiah's still-visible Broad Wall) appeared suddenly. The most widely accepted explanation: refugees from the northern tribes fled south into Judah. This matters enormously for the 'lost tribes' question — a substantial part of the northern tribes was never lost at all; they merged into Judah, and their descendants are among the Jewish people. (2 Chronicles 30 also records northerners joining Hezekiah's Passover.)",
    sources: ["Jerusalem expansion archaeology (Broad Wall, Western Hill settlement)", "Magen Broshi's population studies", "2 Chronicles 30 (internal testimony)"]
  },
  {
    title: "Second forced migration: Babylon",
    date: "597–586 BC",
    tier: "DOCUMENTED",
    tags: ["deportation"],
    body: "Judah's elite and much of its population were deported to Babylonia in waves (597, 586, and c. 582 BC). Unlike the Assyrian deportees, the Judahites in Babylon KEPT their identity — settling in communities like Tel-Abib on the Chebar canal (Ezekiel 1:3), documented outside the Bible by the 'Al-Yahudu' tablets ('Judah-town'), a Babylonian archive recording exiled Judean families farming, trading, and keeping Hebrew names for generations. When Persia allowed return (538 BC), only a minority went back. The rest became the Babylonian Jewish community — which lasted 2,500 years continuously, produced the Babylonian Talmud, and only ended with the mass departure to Israel in 1950–1952. This is the best-documented ancient migration chain in the whole story.",
    sources: ["Al-Yahudu tablets (published 2014)", "Babylonian Chronicle ABC 5", "Jehoiachin ration tablets", "Operation Ezra & Nehemiah (1950–52, modern records)"]
  },
  {
    title: "Voluntary spread: Egypt and the Mediterranean diaspora",
    date: "6th century BC – 1st century AD",
    tier: "DOCUMENTED",
    tags: ["diaspora"],
    body: "Not all migration was forced. A Jewish military colony with its own temple existed at Elephantine in southern Egypt by the 5th century BC (its papyri survive — contracts, letters, even correspondence with Jerusalem's governor). After Alexander (332 BC), Jews settled across the Greek world; Alexandria held one of antiquity's largest Jewish communities and produced the Septuagint translation. By the 1st century AD, Philo, Josephus, and Acts 2 all describe Jewish communities from Rome to Persia. Rough scholarly estimates put Roman-era Jews at several million, most already living OUTSIDE the land — the diaspora predates the Temple's destruction.",
    sources: ["Elephantine papyri (5th c. BC)", "Philo, 'Embassy to Gaius'", "Acts 2:9–11 (nation list)", "Josephus, Antiquities 14"]
  },
  {
    title: "Third forced dispersion: Rome",
    date: "70 AD and 135 AD",
    tier: "DOCUMENTED",
    tags: ["deportation", "diaspora"],
    body: "After the two revolts, Rome killed or enslaved hundreds of thousands (Josephus gives 97,000 enslaved in 70 AD; slave markets reportedly glutted after 135 AD), barred Jews from Jerusalem, and renamed the province Palaestina. Jewish life continued IN the land (especially Galilee, where the Mishnah was compiled c. 200 AD) — the population was decimated and dispersed, not entirely removed. From this point the major diaspora branches slowly form: Mizrahi (Middle East/Babylonia), Sephardi (Iberia, documented from Roman times, flourishing under Islam, expelled 1492), Ashkenazi (Rhineland by the 10th century, later Eastern Europe), plus older communities in Yemen, North Africa, Ethiopia, India, and Persia.",
    sources: ["Josephus, Jewish War 6", "Cassius Dio 69 (Bar Kokhba aftermath)", "Cairo Geniza documents (medieval diaspora life)", "1492 Alhambra Decree (expulsion from Spain)"]
  },
  {
    title: "What genetics can and cannot say",
    date: "modern studies",
    tier: "CONSENSUS",
    tags: ["claims", "origins"],
    body: "Genome studies consistently find that the major Jewish diaspora groups (Ashkenazi, Sephardi, Mizrahi) share identifiable Middle Eastern/Levantine ancestry plus local admixture from their host regions — supporting a real common ancient origin rather than mass conversion alone. LIMITS, honestly stated: genetics identifies broad regional ancestry and relatedness between communities; it cannot read 'tribe of Judah' or 'tribe of Ephraim' out of anyone's DNA, and no test can certify descent from a specific biblical tribe. Anyone selling that is overstating the science.",
    sources: ["Behar et al., Nature 2010", "Atzmon et al., AJHG 2010", "Ostrer, 'Legacy: A Genetic History of the Jewish People'"]
  },
  {
    title: "Claim check: the Lemba of southern Africa",
    date: "studied 1990s–2000s",
    tier: "STRONG",
    tags: ["claims"],
    body: "The Lemba (Zimbabwe/South Africa) have long claimed descent from Jews/Israelites who migrated down Africa via Yemen ('Sena'). Y-chromosome studies found genuinely elevated Middle Eastern male-line ancestry, and the priestly Buba clan carries the 'Cohen Modal Haplotype' at striking frequency. This is real, peer-reviewed support for a partial ancient Middle Eastern (plausibly Jewish/Israelite) male ancestry — one of the very few descent claims with hard genetic backing. It shows such claims CAN be tested — and can pass.",
    sources: ["Thomas et al., American Journal of Human Genetics 66 (2000)", "Tudor Parfitt's Lemba fieldwork"]
  },
  {
    title: "Claim check: Beta Israel (Ethiopian Jews)",
    date: "documented from the Middle Ages",
    tier: "DEBATED",
    tags: ["claims"],
    body: "Ethiopia's Beta Israel practiced a Torah-based Judaism for many centuries (documented from medieval sources) and hold traditions of descent from the tribe of Dan or from Solomon and the Queen of Sheba. Genetic studies place them closest to other Ethiopian populations, suggesting large-scale local conversion in antiquity rather than mass migration — while their religious tradition is ancient and genuine, preserving practices (like animal sacrifice) lost elsewhere. Israel's rabbinate recognized them and airlifted the community to Israel (Operations Moses 1984, Solomon 1991 — 14,325 people in 36 hours, documented). Verdict: the community and its ancient Judaism are documented; the specific tribal-descent tradition cannot be verified.",
    sources: ["Medieval Ethiopian sources on the Beta Israel", "Genetic studies (e.g. Behar 2010 supplement)", "Operation Solomon records (1991)"]
  },
  {
    title: "Claim check: Bnei Menashe, Igbo, Pashtun traditions",
    date: "traditions recorded 19th–20th centuries",
    tier: "TRADITION",
    tags: ["claims"],
    body: "Several peoples hold traditions of descent from the lost tribes: the Bnei Menashe of northeast India (from Manasseh), some Igbo of Nigeria, and Pashtun clans of Afghanistan/Pakistan (the 'Bani Israel' tradition). These traditions are sincerely held and some communities practice forms of Judaism today; but in each case the tradition is first RECORDED only in recent centuries, and genetic studies so far have not confirmed Middle Eastern ancestry signals like the Lemba's. Graded honestly: tradition only — possible, unproven, and testable in principle as genetics improves.",
    sources: ["Shalva Weil's Bnei Menashe research", "Genetic surveys of claimed descent groups (mixed/negative results to date)"]
  },
  {
    title: "Claim check: British Israelism / Anglo-Israelism",
    date: "19th century movement",
    tier: "UNSUPPORTED",
    tags: ["claims"],
    body: "The claim that the lost tribes migrated to Britain/northwest Europe, making the British or Americans the 'true Israel'. Every testable pillar fails: the linguistic arguments (e.g. 'British' from Hebrew 'brit-ish', 'covenant man') are folk etymology rejected by all linguists; the documented Assyrian deportation locations point to Mesopotamia/Media, not Europe; and genetics shows no Levantine signal in the British population beyond normal European background. Historically important because it fed later racial doctrines, but as history it is unsupported at every point.",
    sources: ["Assyrian deportation records (actual destinations)", "Linguistic consensus on Hebrew/English non-relation", "Population genetics of the British Isles"]
  },
  {
    title: "Claim check: are the descendants of the trans-Atlantic slave trade Israelites?",
    date: "movement documented from 1890s",
    tier: "UNSUPPORTED",
    tags: ["claims"],
    body: "Hebrew Israelite movements (documented from the 1890s: William Saunders Crowdy, Frank Cherry, and successors) teach that Black Americans, Haitians, and other descendants of the slave trade are the literal Israelites, often citing Deuteronomy 28:68 ('ships'). Graded by evidence, not by feeling: the documented origins of the people carried to the Americas are specific, named West and Central African peoples — Kongo, Fon, Ewe, Yoruba, Igbo, Akan, Wolof, and others — recorded in shipping manifests, colonial documents, and confirmed by language (Haitian Creole's African grammar comes from Gbe/Fon, not Hebrew) and genetics (West/Central African lineages, no Levantine signal). No document, inscription, language trace, or genetic study connects these populations to ancient Israel; and Deuteronomy 28 in context addresses covenant Israel with Egypt named explicitly, so applying it to the Atlantic trade is interpretation, not evidence. Two truths said plainly: (1) the claim of literal Israelite descent is unsupported at every testable point; (2) the REAL documented ancestry — the kingdoms of Kongo, Dahomey, Oyo, the Mali and Songhai empires — is itself a profound heritage that was stolen from memory, and recovering THAT truth is exactly what the Roots & Recovery section is for. The truth-first rule cuts here like everywhere else: an identity built on an unsupported claim costs you the documented one that is actually yours.",
    sources: ["Trans-Atlantic Slave Trade Database (~36,000 documented voyages)", "Linguistics of Haitian Creole (Lefebvre, DeGraff)", "African diaspora population genetics", "Origins of the movement: Crowdy (1896), Cherry (1886)"]
  },
  {
    title: "So where did the ten tribes actually end up?",
    date: "summary of all evidence",
    tier: "CONSENSUS",
    tags: ["claims", "deportation"],
    body: "Following only the evidence: (1) a large share assimilated into the populations of Mesopotamia and Media within a few generations — the documented trail simply ends there; (2) a large share fled south and merged into Judah before and after 722 BC — meaning today's Jews descend from more than just Judah, Benjamin, and Levi; (3) some remained in the northern land and are among the ancestors of the Samaritans, who still exist; (4) a few outside groups (Lemba) show real partial descent signals; most other claims are tradition or myth. The romantic idea of ten intact tribes hidden somewhere waiting to be found has no evidence behind it — and never did.",
    sources: ["All entries above", "Samaritan continuity (Mount Gerizim, genetics)", "Al-Yahudu tablets (Judahite continuity)"]
  }
];
