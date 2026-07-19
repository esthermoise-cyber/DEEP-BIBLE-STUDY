/* Origins of today's religions and denominations — with dates and documents. */

const DATA_ORIGINS = [
  {
    title: "Israelite religion → Judaism",
    date: "before 586 BC → after 70 AD",
    tier: "CONSENSUS",
    tags: ["judaism"],
    body: "The religion of ancient Israel centered on the Temple, priesthood, and sacrifice. Two catastrophes reshaped it: the Babylonian exile (586 BC), after which exclusive monotheism and serious scripture-collection became dominant, and Rome's destruction of the Second Temple (70 AD), which ended sacrifice entirely. Out of that second catastrophe the Pharisaic movement built RABBINIC Judaism — Torah study, synagogue, and legal tradition in place of Temple and sacrifice — codified in the Mishnah (c. 200 AD) and the Talmud (Babylonian Talmud completed c. 500–600 AD). So today's Judaism is not identical to the religion of David's time; it is its surviving continuation, rebuilt twice by necessity. Modern branches: Orthodox, Reform (early 1800s Germany), Conservative (19th c.), and others.",
    sources: ["Mishnah (c. 200 AD)", "Babylonian Talmud (c. 500–600 AD)", "Josephus on the first-century parties (Pharisees, Sadducees, Essenes)"]
  },
  {
    title: "The Samaritans",
    date: "split final by c. 2nd century BC",
    tier: "DOCUMENTED",
    tags: ["judaism"],
    body: "A small community (still existing today, a few hundred people) claiming descent from the northern tribes, keeping only the Torah (in their own script and text-version) and worshiping on Mount Gerizim rather than Jerusalem. Their temple on Gerizim is archaeologically confirmed (built by the 5th–4th century BC, destroyed by the Hasmonean ruler John Hyrcanus c. 110 BC — a documented event that sealed the mutual hostility familiar from the New Testament). Genetic studies support ancient Israelite ancestry. They are a living window into how the Torah existed before the Jewish–Samaritan split.",
    sources: ["Mount Gerizim excavations (Yitzhak Magen)", "Josephus, Antiquities 13", "Samaritan Pentateuch (independent text tradition)"]
  },
  {
    title: "Christianity: from Jewish sect to separate religion",
    date: "c. 30 – 4th century AD",
    tier: "DOCUMENTED",
    tags: ["christianity"],
    body: "Christianity began entirely inside Judaism: Jesus and all his first followers were Torah-observant Jews. The earliest documents are Paul's letters (c. 50–57 AD). The decision not to require Gentile converts to keep the full Torah (Acts 15, c. 49 AD) opened the movement to the Roman world. Separation from Judaism was gradual — driven by the influx of Gentiles, the destruction of the Temple (70 AD), and the Bar Kokhba revolt (135 AD). Rome persecuted Christians intermittently until Constantine's Edict of Milan legalized the faith (313 AD); Theodosius made Nicene Christianity the state religion (380 AD). That last step — church wedded to imperial power — is the origin of much that later generations would dispute: state enforcement of doctrine, wealth, and the merging of church office with political power. All of this is documented, not speculation.",
    sources: ["Paul's letters (c. 50–57 AD)", "Pliny the Younger, Letters 10.96 (c. 112 AD, describes early worship)", "Edict of Milan (313)", "Edict of Thessalonica (380)"]
  },
  {
    title: "What the Council of Nicaea actually did (and didn't do)",
    date: "325 AD",
    tier: "DOCUMENTED",
    tags: ["christianity", "myth-check"],
    body: "The council, called by Constantine, addressed the Arian controversy (is the Son fully God or a created being?), producing the first version of the Nicene Creed, and standardized the dating of Easter, plus 20 church-order canons. What it did NOT do — despite one of the most repeated myths on the internet — is decide which books belong in the Bible. Canon is not on Nicaea's agenda in any surviving record. The canon formed gradually: the four gospels and Paul's letters were already functioning as scripture by the 2nd century (Muratorian fragment, c. 170–200); the first surviving list matching the modern 27-book New Testament is Athanasius' Easter letter of 367 AD; local councils (Hippo 393, Carthage 397) then ratified existing widespread usage. Nothing was voted into or out of the Bible at Nicaea.",
    sources: ["Canons of Nicaea (canon lists absent)", "Muratorian fragment (c. 170–200)", "Athanasius, 39th Festal Letter (367)", "Councils of Hippo (393) and Carthage (397)"]
  },
  {
    title: "Islam",
    date: "610–632 AD and after",
    tier: "DOCUMENTED",
    tags: ["islam"],
    body: "Founded on the preaching of Muhammad in Mecca and Medina (revelations dated by tradition from 610; died 632 AD). Islam presents itself as the restoration of the pure monotheism of Abraham, honoring Moses and Jesus as prophets while denying Jesus' divinity and crucifixion. Within a century of Muhammad's death, Arab-Islamic armies ruled from Spain to Persia — one of the fastest imperial expansions in history, documented by both Islamic and non-Islamic contemporary sources (e.g. the Dome of the Rock inscriptions, 691–692 AD, already quoting Quranic anti-trinitarian polemic). The Sunni–Shia split traces to the succession dispute after Muhammad's death (Ali's line vs. elected caliphs), fixed permanently by the killing of Husayn at Karbala (680 AD). Academic study of early Islamic sources (most detailed biographies were written 150+ years after Muhammad) is a real scholarly field, but the broad outline above is solidly documented.",
    sources: ["Quran (core text established early; Birmingham manuscript radiocarbon-dated to ±645 AD range)", "Dome of the Rock inscriptions (691–692)", "Non-Islamic 7th-century notices (Doctrina Jacobi, Sebeos)"]
  },
  {
    title: "The Great Schism: Catholic and Orthodox",
    date: "1054 AD (culmination of centuries)",
    tier: "DOCUMENTED",
    tags: ["christianity"],
    body: "The Greek-speaking East and Latin-speaking West drifted apart for centuries over language, papal authority (the East accepted the bishop of Rome as first in honor, not supreme in jurisdiction), and the West's addition of the 'filioque' clause to the shared creed without an ecumenical council. Mutual excommunications in 1054 marked the formal break; the Crusader sack of Constantinople in 1204 — Christians slaughtering and looting fellow Christians — made it permanent in the Eastern memory. Result: Roman Catholicism (pope as supreme head) and Eastern Orthodoxy (communion of self-governing churches), each claiming to be the original church. The dates, documents, and disputes are all a matter of record.",
    sources: ["Mutual excommunications of 1054 (texts survive)", "Photian controversy documents (9th c.)", "Accounts of the 1204 sack (Niketas Choniates, eyewitness)"]
  },
  {
    title: "The Protestant Reformation",
    date: "1517 onward",
    tier: "DOCUMENTED",
    tags: ["christianity"],
    body: "Sparked by Martin Luther's 95 Theses (1517), protesting above all the sale of indulgences (documents literally sold to reduce punishment for sin — the fundraising campaign for St. Peter's Basilica is fully documented). Core Protestant claims: scripture over church tradition as final authority, salvation by faith rather than purchased or earned merit, and scripture in the people's own language. The printing press (c. 1450) made suppression impossible. Major branches formed fast: Lutheran (Luther), Reformed/Presbyterian (Calvin, Zwingli), Anglican (England, 1534 — begun over Henry VIII's annulment politics, doctrinally reformed after), Anabaptist (believer's baptism; ancestors of Mennonites and Amish). Rome answered with the Counter-Reformation (Council of Trent, 1545–1563). Every step is documented in the participants' own writings.",
    sources: ["Luther's 95 Theses (1517)", "Johann Tetzel's indulgence campaign records", "Council of Trent decrees", "Calvin, 'Institutes' (1536)"]
  },
  {
    title: "Where today's denominations came from",
    date: "17th–20th centuries",
    tier: "DOCUMENTED",
    tags: ["christianity"],
    body: "Baptists: early 1600s English Separatists (John Smyth, c. 1609) — believer's baptism by immersion. Methodists: John Wesley's revival movement within the Church of England, separate after 1784. Adventists: from the Millerite movement — William Miller predicted Christ's return in 1844; the 'Great Disappointment' when the date failed is documented history, and Seventh-day Adventism (formalized 1863, Ellen White) grew from its aftermath, restoring the seventh-day Sabbath. Jehovah's Witnesses: from Charles Taze Russell's Bible Students (1870s); the movement made multiple documented failed date-predictions (1914 as the end, then 1925, then expectations around 1975). Mormonism (LDS): Joseph Smith, 1830, on new claimed scripture — its historical claims about ancient America are unsupported by archaeology, linguistics, or genetics (a statement of evidence, not hostility). Pentecostalism: Azusa Street revival, Los Angeles, 1906 — now the fastest-growing Christian movement worldwide. Non-denominational evangelicalism: largely a 20th-century American development. Every one of these origins is recent enough to be fully documented — none of them, and none of the older branches either, can trace an unbroken organizational line to the first century without passing through the documented history above.",
    sources: ["Denominational founding documents (each movement's own records)", "1844 Great Disappointment (contemporary Millerite papers)", "Watch Tower publications 1879–1975 (date predictions in print)", "Azusa Street eyewitness accounts (1906)"]
  }
];
