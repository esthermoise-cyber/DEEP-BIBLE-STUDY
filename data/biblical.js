/* Biblical history & the ancient Israelites — chronological.
   Tags: timeline, archaeology, kingdom, exile, second-temple */

const DATA_BIBLICAL = [
  {
    title: "The Patriarchs (Abraham, Isaac, Jacob)",
    date: "traditionally c. 2000–1700 BC",
    tier: "DEBATED",
    tags: ["timeline"],
    body: "No direct archaeological or inscriptional evidence for the patriarchs has been found, and none should necessarily be expected for a family group of herders. The narratives contain authentic ancient Near Eastern customs (name types, marriage and inheritance customs paralleled in second-millennium texts like Nuzi and Mari), which some scholars take as signs of genuine early memory; others date the composition much later and read the parallels as also fitting the first millennium. Honest bottom line: the accounts can be neither proven nor disproven by current evidence.",
    sources: ["Mari and Nuzi tablet parallels (interpretation disputed)", "Kenneth Kitchen, 'On the Reliability of the Old Testament' (maximalist case)", "Thomas Thompson / John Van Seters (minimalist case)"]
  },
  {
    title: "Israel in Egypt and the Exodus",
    date: "traditionally 15th–13th century BC",
    tier: "DEBATED",
    tags: ["timeline"],
    body: "No Egyptian record mentions Israel in Egypt, the plagues, or a mass departure — but Egyptian records rarely record defeats, and Semitic peoples living in and leaving the eastern Delta ARE documented (e.g. the Hyksos period; Papyrus Anastasi VI records Edomite herders admitted through border forts). Positions among qualified scholars range from a large historical exodus, to a smaller group whose story became national memory, to a mostly literary origin. What is NOT honest is either claiming archaeology has proven the Exodus, or claiming archaeology has disproven any departure of any size. The evidence simply does not settle it.",
    sources: ["Papyrus Anastasi VI (border crossing records)", "Absence of Exodus events from Egyptian records (argument from silence — weigh accordingly)", "Merneptah Stele proves 'Israel' existed in Canaan by c. 1208 BC"]
  },
  {
    title: "Merneptah Stele — oldest mention of 'Israel'",
    date: "c. 1208 BC",
    tier: "DOCUMENTED",
    tags: ["archaeology"],
    body: "Victory inscription of Pharaoh Merneptah, discovered at Thebes in 1896, includes the line 'Israel is laid waste; its seed is no more.' The word carries the hieroglyphic marker for a people (not a city-state), showing a people called Israel existed in Canaan by about 1208 BC. This is the earliest undisputed extra-biblical mention of Israel, and it sets a hard floor: Israel was not invented late — it existed as a recognizable people over 3,200 years ago.",
    sources: ["Merneptah Stele, Egyptian Museum, Cairo (JE 31408)", "Discovered by Flinders Petrie, 1896"]
  },
  {
    title: "Israelite settlement of the hill country",
    date: "c. 1200–1000 BC",
    tier: "CONSENSUS",
    tags: ["timeline", "archaeology"],
    body: "Archaeological surveys show hundreds of new small villages appearing in the central hill country of Canaan around 1200–1000 BC — simple four-room houses, terraced farming, and a striking near-total absence of pig bones (unlike neighboring Philistine sites, which are full of them). Most scholars see these as the early Israelites. Whether they arrived from outside (conquest/exodus model), emerged from Canaanite society, or both, is debated — but the settlement wave itself is solid archaeology, and the pig-bone pattern matches the biblical food laws remarkably early.",
    sources: ["Israel Finkelstein's hill-country surveys", "Faunal (pig bone) analyses at Iron I sites", "Avraham Faust, 'Israel's Ethnogenesis'"]
  },
  {
    title: "King David and the united monarchy",
    date: "c. 1010–930 BC",
    tier: "DEBATED",
    tags: ["kingdom", "timeline"],
    body: "That David existed and founded a dynasty is now well supported: the Tel Dan Stele (c. 840 BC, an enemy Aramean king's own inscription) refers to the 'House of David', and the Mesha Stele likely does too. What remains genuinely debated is the SCALE of David's and Solomon's kingdom — a great regional empire as described, or a smaller chiefdom that later tradition magnified. Excavations at Khirbet Qeiyafa and Jerusalem's 'Large Stone Structure' are argued both ways. Honest summary: David is history; the size of his kingdom is an open question.",
    sources: ["Tel Dan Stele (Israel Museum) — 'House of David'", "Mesha Stele line 31 (reading debated)", "Khirbet Qeiyafa excavations (Yosef Garfinkel)"]
  },
  {
    title: "Tel Dan Stele — 'House of David'",
    date: "c. 840 BC (found 1993)",
    tier: "DOCUMENTED",
    tags: ["archaeology"],
    body: "Fragment of an Aramaic victory inscription found at Tel Dan in northern Israel, in which an Aramean king (probably Hazael of Damascus) boasts of defeating the 'king of Israel' and the king of the 'House of David' (bytdwd). Because it is an enemy's inscription — with no reason to invent Israel's founding dynasty — it is powerful independent evidence that a Davidic royal house ruled Judah. Before 1993, skeptics could claim David was pure legend; this stone ended that claim.",
    sources: ["Tel Dan Stele, Israel Museum, Jerusalem", "Biran & Naveh, Israel Exploration Journal 43 (1993), 45 (1995)"]
  },
  {
    title: "The divided kingdom: Israel and Judah",
    date: "c. 930–722 BC",
    tier: "DOCUMENTED",
    tags: ["kingdom", "timeline"],
    body: "After Solomon, the nation split into a northern kingdom (Israel, capital Samaria) and southern kingdom (Judah, capital Jerusalem). From the 9th century on, both kingdoms appear repeatedly in outside records: the Mesha Stele (Moab) names Omri king of Israel; the Black Obelisk of Shalmaneser III depicts Jehu of Israel paying tribute to Assyria (the only known contemporary image of an Israelite king); Assyrian annals name many kings of both kingdoms — Ahab, Menahem, Pekah, Hoshea, Hezekiah, Manasseh — matching the biblical king lists closely. From here forward, the Bible's political history runs on well-documented rails.",
    sources: ["Mesha Stele (Louvre)", "Black Obelisk of Shalmaneser III (British Museum)", "Assyrian royal annals (Kurkh Monolith, Nimrud tablets)"]
  },
  {
    title: "What ordinary Israelites actually worshiped",
    date: "9th–7th century BC",
    tier: "DOCUMENTED",
    tags: ["archaeology"],
    body: "Inscriptions from Kuntillet Ajrud and Khirbet el-Qom (8th century BC) invoke 'YHWH and his Asherah', and hundreds of female pillar figurines have been found in Judahite homes. This confirms what the biblical prophets themselves constantly complained about: many ordinary Israelites mixed worship of YHWH with other deities and cult objects. The Bible does not hide this — the books of Kings and the prophets describe rampant idolatry, which is exactly what archaeology finds. Exclusive monotheism became dominant especially through the reforms of Hezekiah and Josiah and, decisively, after the Babylonian exile. (Note the criterion of embarrassment: scripture recording its own people's persistent unfaithfulness is a mark of honest reporting, not a contradiction of it.)",
    sources: ["Kuntillet Ajrud inscriptions", "Khirbet el-Qom tomb inscription", "Judean pillar figurines (hundreds excavated)", "2 Kings 17, 21–23; Jeremiah 7, 44 (internal testimony)"]
  },
  {
    title: "Assyria destroys the northern kingdom",
    date: "722 BC",
    tier: "DOCUMENTED",
    tags: ["timeline", "exile"],
    body: "Assyria conquered Samaria and deported much of the northern kingdom's population — the origin of the 'lost tribes'. Documented in the annals of Sargon II, which claim 27,290 deportees from Samaria, matching 2 Kings 17. Assyrian policy was to shuffle conquered populations to break national resistance; the deportees were resettled in Mesopotamia and Media and largely assimilated. Peoples resettled INTO Samaria mixed with remaining Israelites — one root of the later Samaritans. Claims to know exactly where the 'lost tribes' went today (Britain, the Americas, etc.) have no documentary or genetic support.",
    sources: ["Annals of Sargon II (Khorsabad)", "2 Kings 17 (parallel account)", "Nimrud Prism"]
  },
  {
    title: "Sennacherib besieges Jerusalem",
    date: "701 BC",
    tier: "DOCUMENTED",
    tags: ["timeline", "archaeology"],
    body: "One of the best cross-documented events in the Hebrew Bible. Assyrian king Sennacherib invaded Judah, destroyed Lachish (shown in detail on his palace reliefs, now in the British Museum; the siege ramp is still visible at the site), and besieged Jerusalem under King Hezekiah. Sennacherib's own prism boasts he shut Hezekiah up 'like a bird in a cage' — but conspicuously never claims to have taken Jerusalem, an extraordinary omission for Assyrian propaganda and consistent with the biblical account that the siege failed. Hezekiah's water tunnel (with its builders' inscription, the Siloam inscription) and his 'broad wall' in Jerusalem survive and can be visited today.",
    sources: ["Taylor/Sennacherib Prism (British Museum, Oriental Institute)", "Lachish reliefs (British Museum)", "Siloam Tunnel inscription (Istanbul Archaeology Museum)", "2 Kings 18–19; Isaiah 36–37"]
  },
  {
    title: "Babylon destroys Jerusalem; the exile",
    date: "586 BC",
    tier: "DOCUMENTED",
    tags: ["timeline", "exile"],
    body: "Nebuchadnezzar II of Babylon destroyed Jerusalem and the First Temple and deported Judah's elite. Documented from every direction: the Babylonian Chronicle records the 597 BC capture of Jerusalem; the Lachish Letters (ostraca written by Judahite soldiers as the invasion closed in) were found in the destruction ash; Jerusalem's burn layer has been excavated; and Babylonian ration tablets list provisions for 'Jehoiachin, king of Judah' — the exiled king named in 2 Kings — living in Babylon. The exile is the pivot of Israelite history: it is where exclusive monotheism, the synagogue pattern, and serious collection of the scriptures took decisive shape.",
    sources: ["Babylonian Chronicle ABC 5 (British Museum)", "Lachish Letters", "Jehoiachin ration tablets (Berlin, Vorderasiatisches Museum)", "Jerusalem destruction layer (City of David excavations)"]
  },
  {
    title: "Cyrus of Persia and the return",
    date: "539–516 BC",
    tier: "DOCUMENTED",
    tags: ["timeline", "second-temple"],
    body: "Persia under Cyrus the Great took Babylon in 539 BC. The Cyrus Cylinder documents his general policy of returning displaced peoples and their gods and rebuilding their temples — exactly the policy the Bible describes him applying to Judah (the cylinder itself mentions Mesopotamian examples, not Judah specifically; the decree for Judah is recorded in Ezra). Returning exiles rebuilt the Temple by 516 BC (the 'Second Temple'). Judah became the small Persian province of Yehud — confirmed by 'Yehud' seal impressions and coins. Nehemiah's rebuilt wall and Elephantine papyri (letters from a Jewish garrison in Egypt corresponding with Jerusalem's governor) give further contemporary documentation of this period.",
    sources: ["Cyrus Cylinder (British Museum)", "Yehud seals and coins", "Elephantine papyri", "Ezra 1, 6; Nehemiah"]
  },
  {
    title: "The Hellenistic era and the Maccabean revolt",
    date: "332–160 BC",
    tier: "DOCUMENTED",
    tags: ["timeline", "second-temple"],
    body: "Alexander the Great took the region in 332 BC, beginning centuries of Greek cultural pressure. In 167 BC the Seleucid king Antiochus IV desecrated the Temple and outlawed Torah observance — triggering the Maccabean revolt, which won Jewish independence under the Hasmonean dynasty (the origin of Hanukkah). Documented in 1–2 Maccabees, Josephus, Greek historians, and Hasmonean coinage. This era created the parties known from the New Testament (Pharisees, Sadducees, Essenes) and forced the great question that shaped the next centuries: assimilate to the dominant culture, or hold the covenant at any cost.",
    sources: ["1–2 Maccabees", "Josephus, 'Antiquities'", "Hasmonean coins", "Dead Sea Scrolls community (Essene, majority view)"]
  },
  {
    title: "The Dead Sea Scrolls",
    date: "c. 250 BC – 70 AD (found 1947–1956)",
    tier: "DOCUMENTED",
    tags: ["archaeology", "second-temple"],
    body: "About 950 manuscripts found in caves near Qumran, including copies of every Hebrew Bible book except Esther — a thousand years older than the previously oldest complete Hebrew manuscripts (the medieval Masoretic codices). Result: for most books, the text was copied over that millennium with remarkable fidelity (the Great Isaiah Scroll is word-for-word close to the medieval text), while some books (Jeremiah, Samuel) circulated in genuinely different editions. So the honest, evidence-based statement is: the claim 'the Bible was rewritten over the centuries beyond recognition' is false, and the claim 'not a single letter ever changed' is also false. The scrolls let us see exactly what kind and scale of variation occurred.",
    sources: ["Great Isaiah Scroll (1QIsaᵃ), Shrine of the Book, Jerusalem", "Emanuel Tov, 'Textual Criticism of the Hebrew Bible'", "4QJerᵇ (short edition of Jeremiah)"]
  },
  {
    title: "Jesus of Nazareth — the historical record",
    date: "c. 4 BC – c. 30/33 AD",
    tier: "CONSENSUS",
    tags: ["timeline", "second-temple"],
    body: "That Jesus existed, taught in Galilee, and was crucified under Pontius Pilate is accepted by essentially all qualified historians, religious or not. Non-Christian evidence: Tacitus (Annals 15.44, c. 116 AD) records his execution under Pilate; Josephus mentions him twice (the shorter James passage, Antiquities 20.9.1, is broadly accepted as authentic; the longer 'Testimonium', 18.3.3, is authentic in core but shows Christian editing). Paul's letters, written within about 20–25 years of the crucifixion by a man who knew Jesus' brother James (Galatians 1:19), are very early testimony. The 'Jesus never existed' thesis is rejected by virtually all specialists, including non-Christian ones like Bart Ehrman. What history can establish: existence, teaching, crucifixion. Miracles and resurrection are claims historical method cannot adjudicate either way — they are matters of the earliest testimony and of faith, and honest analysis labels them as such.",
    sources: ["Tacitus, Annals 15.44", "Josephus, Antiquities 20.9.1; 18.3.3 (partially edited)", "Paul's undisputed letters (c. 50–57 AD)", "Pilate Stone, Caesarea (Pilate's existence confirmed 1961)"]
  },
  {
    title: "Destruction of the Second Temple",
    date: "70 AD",
    tier: "DOCUMENTED",
    tags: ["timeline", "second-temple"],
    body: "Rome crushed the Jewish revolt and destroyed Jerusalem and the Temple under Titus. Documented by the eyewitness historian Josephus, by the Arch of Titus in Rome (which still shows the Temple menorah carried in triumph), by 'Judaea Capta' coins minted across the empire, and by excavated destruction debris — including the massive stones Roman soldiers toppled from the Temple Mount, still lying on the Herodian street below where they fell. This catastrophe transformed both Judaism (from temple-and-sacrifice to rabbinic, synagogue-and-Torah Judaism) and Christianity (accelerating its separation from Jerusalem).",
    sources: ["Josephus, 'The Jewish War' (eyewitness)", "Arch of Titus, Rome", "Judaea Capta coinage", "Robinson's Arch street excavations, Jerusalem"]
  },
  {
    title: "Bar Kokhba revolt; Judea renamed 'Palaestina'",
    date: "132–135 AD",
    tier: "DOCUMENTED",
    tags: ["timeline"],
    body: "A second great revolt under Simon bar Kokhba was crushed by Hadrian with enormous casualties. Documented by Roman historian Cassius Dio, by Bar Kokhba's own letters (found in Judean desert caves, some signed by him), and by revolt coinage dated 'Year One of the Redemption of Israel'. Afterward Hadrian barred Jews from Jerusalem, rebuilt it as the pagan city Aelia Capitolina, and merged Judea into a province he named 'Syria Palaestina' — reviving the name of Israel's old enemies, the Philistines, widely understood as a deliberate erasure. This is the documented origin of the name 'Palestine' as applied to the whole land.",
    sources: ["Cassius Dio, Roman History 69", "Bar Kokhba letters (Cave of Letters, Naḥal Ḥever)", "Bar Kokhba revolt coinage", "Aelia Capitolina inscriptions"]
  }
];
