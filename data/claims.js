/* Truth Analyzer claim library — popular claims examined against evidence.
   Structure: claim, verdict, evidence FOR, evidence AGAINST, bottom line. */

const DATA_CLAIMS = [
  {
    title: "\"The Council of Nicaea decided which books are in the Bible\"",
    verdict: "FALSE",
    tags: ["christianity"],
    forEvidence: "None. No surviving record of Nicaea (325 AD) — canons, letters, or contemporary accounts — mentions the biblical canon at all. The claim traces to much later legend (a 9th-century anecdote) and was popularized by modern fiction.",
    againstEvidence: "Nicaea's documented agenda: the Arian controversy, the Easter date, 20 church-order canons. The canon's actual development is separately documented: core books functioning as scripture by the 2nd century (Muratorian fragment c. 170–200), first exact 27-book NT list in Athanasius' letter of 367 AD, ratified by regional councils in the 390s.",
    body: "Bottom line: the Bible's table of contents formed gradually over centuries of usage and was never voted on at Nicaea. This is one of the most repeated historical falsehoods on the internet — repeated by critics and defenders of Christianity alike.",
    sources: ["Canons of Nicaea (text survives — no canon list)", "Muratorian fragment", "Athanasius, Festal Letter 39 (367)"]
  },
  {
    title: "\"Easter is really the pagan festival of Ishtar\"",
    verdict: "FALSE",
    tags: ["holidays"],
    forEvidence: "Only the sound-alike between the English word 'Easter' and 'Ishtar'. That is the entire case.",
    againstEvidence: "The festival is Passover-derived Pascha in nearly every language (Pâques, Pascua, Pasqua…); its 2nd-century observance is documented with no Mesopotamian connection. 'Easter' is a Germanic word confined to English/German; Bede (725) attributes it to a month-name/goddess Ēostre — Germanic, not Babylonian. Akkadian 'Ishtar' and Old English 'Ēastre' have no linguistic relationship; sound-alikes across unrelated languages prove nothing (linguistics 101).",
    body: "Bottom line: a viral folk etymology. The honest open question is much smaller: whether the English NAME comes from a goddess Bede alone mentions (debated). The festival itself is documented Passover-Christianity from the 2nd century.",
    sources: ["Eusebius, Church History 5.23–25 (2nd-c. Pascha)", "Bede, De temporum ratione 15", "Comparative linguistics of Germanic vs. Akkadian"]
  },
  {
    title: "\"Jesus never existed\"",
    verdict: "FALSE",
    tags: ["christianity"],
    forEvidence: "No contemporary Roman administrative record of Jesus survives (true, but such records survive for almost no provincial individuals); the gospel accounts are faith documents with theological aims (true, and historians weigh that).",
    againstEvidence: "Tacitus — a hostile Roman source — records Christ's execution under Pilate (Annals 15.44). Josephus mentions Jesus twice; the James passage (Ant. 20.9.1) is accepted as authentic by nearly all specialists. Paul's letters, written ~20–25 years after the crucifixion, come from a man who personally knew Jesus' brother (Gal 1:19) — extraordinarily close testimony by ancient standards. The 'mythicist' position is rejected by effectively the entire field, including prominent non-Christian scholars.",
    body: "Bottom line: existence, teaching in Galilee, and crucifixion under Pilate are as well-established as almost anything about a non-elite figure of that era. Miracles and resurrection are separate questions historical method cannot settle either way — that distinction is where honesty lives on this topic.",
    sources: ["Tacitus, Annals 15.44", "Josephus, Antiquities 20.9.1", "Galatians 1:18–19", "Ehrman, 'Did Jesus Exist?' (agnostic scholar's assessment)"]
  },
  {
    title: "\"The Bible has been copied and changed so much that the original is lost\"",
    verdict: "MOSTLY_FALSE",
    tags: ["text"],
    forEvidence: "Real textual variants exist — most trivial (spelling, word order), a few significant and documented: Mark 16:9–20 and John 7:53–8:11 are absent from the earliest manuscripts; 1 John 5:7's 'three heavenly witnesses' entered late via Latin. Some OT books (Jeremiah, Samuel) circulated in different ancient editions.",
    againstEvidence: "The Dead Sea Scrolls let us compare a 1,000-year copying gap directly: the Great Isaiah Scroll (c. 125 BC) matches the medieval Hebrew text with striking fidelity. The NT has vastly more early manuscript evidence than any other ancient text (thousands of Greek manuscripts, some within a century of composition), which is precisely WHY variants are visible and mappable — abundance of evidence, not corruption. Modern critical editions footnote every meaningful variant; nothing is hidden.",
    body: "Bottom line: 'changed beyond recovery' is false; 'transmitted letter-perfect' is also false. The truthful statement: the text was transmitted with high fidelity, its variations are known, cataloged, and openly published, and no core historical claim rests on a disputed passage. Read a modern edition with footnotes and you are looking at the whole evidence.",
    sources: ["Great Isaiah Scroll vs. Masoretic text", "Critical apparatus of NA28 / BHS (all variants published)", "Comma Johanneum history (documented insertion)"]
  },
  {
    title: "\"Constantine invented Sunday worship\"",
    verdict: "MOSTLY_FALSE",
    tags: ["worship"],
    forEvidence: "Constantine's 321 AD law did make 'the day of the Sun' an official rest day, and imperial favor undoubtedly cemented Sunday's dominance; Laodicea (c. 363) then actively discouraged Sabbath-keeping. The state's role in ENTRENCHING Sunday is real and documented.",
    againstEvidence: "First-day worship is documented long before Constantine: Didache (c. 100), Ignatius (c. 110), and above all Justin Martyr (c. 155) describing Sunday assembly in detail. Constantine could not have invented what Justin described 166 years earlier.",
    body: "Bottom line: the shift from Sabbath to Sunday happened gradually within early Gentile Christianity (2nd century), for internal reasons (resurrection commemoration, separation from Judaism) — and was later locked in by imperial power. Neither 'Constantine did it' nor 'it was apostolic command' matches the documents; there is no explicit NT command changing the day.",
    sources: ["Justin Martyr, First Apology 67 (c. 155)", "Codex Justinianus 3.12.2 (321)", "Council of Laodicea canon 29"]
  },
  {
    title: "\"The word 'Trinity' isn't in the Bible\"",
    verdict: "TRUE",
    tags: ["christianity", "text"],
    forEvidence: "Correct as stated: the word appears nowhere in scripture. The Latin term 'trinitas' is first documented in Tertullian (c. 200 AD); the developed doctrine was formulated at Nicaea (325) and Constantinople (381). The one explicit 'proof text' (1 John 5:7 KJV) is a documented late addition absent from early Greek manuscripts.",
    againstEvidence: "Absence of the WORD does not settle whether the CONCEPT is present — triadic passages exist in the earliest documents (Matt 28:19; 2 Cor 13:14), and Jesus' divinity is asserted in NT texts. Whether these add up to the later doctrine is a theological judgment, not a historical measurement.",
    body: "Bottom line: as a claim about vocabulary and doctrinal history — true and documented: the term and formal doctrine are post-biblical developments. As an argument that the concept is therefore false — that is theology, outside what evidence can decide. This entry models the split: history answers what happened when; it cannot answer what God is.",
    sources: ["Tertullian, Adversus Praxean (c. 200)", "Nicene (325) and Niceno-Constantinopolitan (381) creeds", "Comma Johanneum manuscript history"]
  },
  {
    title: "\"Ancient Israelites were always strict monotheists\"",
    verdict: "FALSE",
    tags: ["biblical"],
    forEvidence: "The biblical IDEAL is exclusive worship of YHWH from the start (the first commandment), and biblical writers present monotheism as the original covenant standard.",
    againstEvidence: "Both archaeology and the Bible itself document the actual practice: Kuntillet Ajrud and Khirbet el-Qom inscriptions ('YHWH and his Asherah'), hundreds of household goddess figurines in Judah, and the prophets' unrelenting complaints about idolatry (Jeremiah 44's exchange with Judahites defending their worship of the 'queen of heaven' is explicit). Exclusive monotheism became general practice especially after the exile.",
    body: "Bottom line: the claim confuses the standard with the practice. The Bible commands exclusive worship AND records that the people persistently failed it — archaeology confirms the failure. Note carefully: this is a case where the excavated evidence and the biblical text AGREE, because the text is honest about its own people. No side of this claim needs to be embarrassed by the evidence except the one that denies it.",
    sources: ["Kuntillet Ajrud inscriptions", "Judean pillar figurines", "Jeremiah 44; 2 Kings 17, 21–23"]
  },
  {
    title: "\"The lost tribes are hiding intact somewhere, waiting to be found\"",
    verdict: "UNPROVEN",
    tags: ["migrations"],
    forEvidence: "The deportations are real and documented; a few claimed-descent groups have partial supporting evidence (the Lemba's genetic signal); ancient sources themselves speculated about the tribes' location (Josephus placed them 'beyond the Euphrates'; 2 Esdras spins a legend).",
    againstEvidence: "The documented trail: deportees appear in Assyrian records in Mesopotamia/Media for a few generations, then assimilate. A large share of northerners demonstrably fled INTO Judah (Jerusalem's sudden fourfold expansion c. 700 BC). The Samaritans continue part of the northern population in place. No archaeology, records, or genetics locate any intact tribal nation anywhere.",
    body: "Bottom line: the tribes are not 'lost' the way legend wants — they are documented as absorbed: into the nations of Mesopotamia, into Judah (whose descendants are today's Jews), and into the Samaritans. Individual descent-claims deserve individual grading (see Migrations section) — most are tradition; one (Lemba) has real partial evidence; none reveals a hidden nation.",
    sources: ["Assyrian resettlement records", "Jerusalem expansion archaeology", "Josephus, Antiquities 11.133", "Migrations section entries"]
  },
  {
    title: "\"Christmas trees are the pagan practice condemned in Jeremiah 10\"",
    verdict: "MOSTLY_FALSE",
    tags: ["holidays"],
    forEvidence: "Jeremiah 10:3–4 does describe cutting a tree, shaping it with tools, and decorating it with silver and gold — the surface resemblance is why the claim spreads.",
    againstEvidence: "Context: Jeremiah 10 describes manufacturing an IDOL — a carved image, fastened so it cannot topple, addressed as a god (v.5: 'they cannot speak… cannot walk'). The decorated evergreen is documented only from 16th-century Germany, ~2,100 years after Jeremiah, with no continuous line to any idol practice; no one addresses prayers to it.",
    body: "Bottom line: as EXEGESIS the claim fails — Jeremiah condemns idol-manufacture, and the Christmas tree's real origin is early-modern German custom. The legitimate remaining question is one of principle, not history: whether adopting customs of non-biblical origin is acceptable — a question the reader must judge (see the practices-testing method entry). History's only job here is the dates and the context, and both refute the direct identification.",
    sources: ["Jeremiah 10:1–16 (full context)", "16th-century German tree documentation", "Absence of any intermediate evidence across 2,100 years"]
  },
  {
    title: "\"Haiti is poor because of a curse\"",
    verdict: "UNPROVEN",
    tags: ["heritage"],
    forEvidence: "The claim (popularized after the 2010 earthquake, citing the Bwa Kayiman ceremony of 1791) is a theological assertion; theological claims are not testable by historical method, so history cannot strictly disprove what it cannot test.",
    againstEvidence: "What IS documented explains the poverty without remainder: the 1825 French indemnity — 150 million francs demanded at gunboat-point as compensation TO the former enslavers, paid with its associated loans until 1947, draining Haiti's treasury for over a century; trade embargoes and diplomatic isolation of the world's only free Black republic (the US did not recognize Haiti until 1862); repeated foreign interventions and occupations (US occupation 1915–1934, with documented financial control until 1947); and extractive domestic rule. Nations with these documented burdens do not need supernatural explanations for poverty.",
    body: "Bottom line: the 'curse' narrative substitutes an untestable claim for a fully documented ledger of extraction — and functions, historically, to blame the victims of that ledger. Graded honestly: the theological claim is unprovable either way; the documented causes are sufficient, specific, and sit in archives anyone can read. Truth-first method says: explain with what is documented before reaching for what is not.",
    sources: ["1825 ordinance of Charles X and payment records", "NYT 'The Ransom' (2022) archival reconstruction", "US recognition (1862) and occupation (1915–34) records"]
  },
  {
    title: "\"The Exodus has been disproven by archaeology\"",
    verdict: "DEBATED",
    tags: ["biblical"],
    forEvidence: "No direct Egyptian record of Israel in Egypt or a departure; no confirmed archaeological trace of 40 years in Sinai; the earliest securely dated 'Israel' evidence is already in Canaan (Merneptah, 1208 BC). Many scholars accordingly treat the account as later national tradition.",
    againstEvidence: "Egyptian records rarely admit reversals, and Semitic populations in the Delta ARE documented (Hyksos era; Semitic slaves in Egyptian texts; border-crossing records like Papyrus Anastasi VI). A smaller-scale departure would leave little or no trace — absence of evidence for nomads in Sinai is expected, not probative. Egyptian elements in the story (authentic names like Moses/Ramses-type name forms, brick quotas paralleled in Egyptian documents) suggest real Egyptian memory. Several respected scholars defend a historical core.",
    body: "Bottom line: 'disproven' overstates the evidence exactly as much as 'proven' does. The spectrum of qualified opinion runs from full historicity to a small historical kernel to literary construction — this is a genuinely open question, and this app's rule is to say so rather than pick the answer you or anyone else prefers.",
    sources: ["Merneptah Stele", "Papyrus Anastasi VI; Hyksos-period evidence", "Hoffmeier, 'Israel in Egypt' (defense); Finkelstein & Silberman, 'The Bible Unearthed' (skeptical case)"]
  },
  {
    title: "\"Enslaved Africans arrived with no history worth recovering\"",
    verdict: "FALSE",
    tags: ["heritage"],
    forEvidence: "None. The claim survives only as an unexamined assumption left behind by the slave system's own propaganda, which needed its victims to be 'people without history'.",
    againstEvidence: "The documented record: the kingdom of Kongo exchanged ambassadors and letters with Portugal and the Vatican from the 1480s (the correspondence survives); Mali's ruler Mansa Musa's 1324 pilgrimage is documented across Arab sources as legendary wealth; Timbuktu's manuscript libraries (hundreds of thousands of manuscripts, many now digitized) prove centuries of West African scholarship; Dahomey, Oyo, Benin, and Asante were sophisticated documented states (Benin's bronzes stunned Europe when looted in 1897). Shipping records tie Haitian and African-American ancestry to precisely these regions.",
    body: "Bottom line: the ancestors of the African diaspora came from documented kingdoms with courts, archives, universities, diplomacy, and art. The heritage wasn't absent — it was severed, deliberately. The difference matters totally: absent things cannot be recovered; severed things can. That recovery — through records, linguistics, genetics, and elder testimony — is the entire mission of the Roots & Recovery section and the Witness Project.",
    sources: ["Kongo–Portugal correspondence (Afonso I's letters, 1500s)", "Timbuktu manuscripts (Ahmed Baba Institute)", "Benin bronzes documentation", "slavevoyages.org regional data"]
  }
];
