/* Origins of practices & customs — documented origins, myths corrected in
   BOTH directions. Whether a practice should be kept is the reader's judgment;
   this file's job is only the true history. */

const DATA_PRACTICES = [
  {
    title: "Christmas on December 25",
    date: "first evidence 336 AD",
    tier: "DEBATED",
    tags: ["holidays"],
    body: "Facts first: the Bible gives no birth date for Jesus and no command to celebrate it; the earliest evidence of a December 25 feast is the Philocalian calendar (Rome, 336 AD). WHY December 25 is genuinely debated between two scholarly hypotheses: (1) the 'pagan substitution' view — the church placed it on/near existing Roman winter festivals (Saturnalia ran Dec 17–23; a feast of Sol Invictus on Dec 25 is attested in the same 336 calendar) to supersede them; (2) the 'calculation' view — Christians had already computed March 25 as the date of Jesus' conception/death, and Dec 25 is simply nine months later, independent of paganism (this reasoning appears in Christian writers before Constantine). Serious scholars hold each view. So the popular claim 'Christmas is just a renamed pagan festival' states as fact what is actually one of two live hypotheses — and the counter-claim that paganism had nothing to do with it is equally overstated.",
    sources: ["Philocalian Calendar / Chronograph of 354 (336 data)", "Hijmans, 'Sol Invictus and Christmas' (against the pagan-origin certainty)", "Talley, 'The Origins of the Liturgical Year' (calculation hypothesis)"]
  },
  {
    title: "The Christmas tree, mistletoe, and yule log",
    date: "tree: 16th century",
    tier: "DOCUMENTED",
    tags: ["holidays"],
    body: "The decorated Christmas tree is documented from 16th-century German-speaking lands (guild and town records; Strasbourg 1605 description), spreading worldwide in the 1800s via British royalty and German emigrants — it is an early-modern German custom, not an ancient pagan rite, and claims tracing it to Babylon (popularized by Alexander Hislop's 1853 'The Two Babylons', a book whose scholarship has been comprehensively discredited) are unsupported. Jeremiah 10:2–5, sometimes quoted against Christmas trees, describes carving and gilding an idol for worship — whether it applies to a decorated tree is interpretation, but as history it is about idol-manufacture. Yule (the name and log) IS a genuine borrowing from Germanic midwinter tradition, documented in Norse sources; mistletoe customs likewise carry pre-Christian Germanic/Celtic associations (Pliny records Druidic mistletoe reverence). So: some Christmas trimmings genuinely have pagan-era roots, the tree itself does not, and the date is disputed — each piece graded on its own evidence.",
    sources: ["Strasbourg 1605 account; Bremen guild record 1570", "Pliny the Elder, Natural History 16.95 (Druids and mistletoe)", "Norse jól references (e.g. Heimskringla)", "Scholarly reviews debunking Hislop"]
  },
  {
    title: "Easter: the name, the date, the eggs, the rabbit",
    date: "festival: 2nd century; name: recorded 725 AD",
    tier: "DEBATED",
    tags: ["holidays", "myth-check"],
    body: "The festival itself is simply Pascha — Passover — kept for Jesus' death and resurrection from the 2nd century on (documented in the Quartodeciman controversy about WHICH day, not whether). In almost every language it is still called Pascha/Pâques/Pascua. Only English and German use 'Easter/Ostern': the monk Bede (725 AD) says the name comes from Ēostre, a goddess whose month April was named for — he is the ONLY ancient source for this goddess, so scholars debate whether she was real or Bede's guess. The viral claim 'Easter = Ishtar' is flatly false: the words are unrelated (Ishtar is Akkadian, Easter is Germanic), and no historical link exists — a sound-alike, nothing more. Eggs: documented from medieval Lent practice (eggs forbidden in the fast accumulated and were blessed/eaten at Pascha) plus older resurrection symbolism; the egg-bringing hare is first recorded in Germany in 1682. Claims that eggs and rabbits are ancient fertility-cult survivals are widely repeated but rest on assumption, not documents.",
    sources: ["Bede, 'De temporum ratione' ch. 15 (sole Ēostre source)", "Quartodeciman controversy (Eusebius, Church History 5.23–25)", "Georg Franck von Franckenau (1682, first Easter hare reference)"]
  },
  {
    title: "Sunday worship replacing the Sabbath",
    date: "documented stages, 1st–4th century",
    tier: "DOCUMENTED",
    tags: ["worship"],
    body: "The seventh-day Sabbath (Friday sunset–Saturday sunset) is the biblical command; Jesus and the apostles kept it. The documented shift: first-day gatherings appear in the NT itself (Acts 20:7; 1 Cor 16:2 — brief, interpretation debated); the Didache (c. 100) and Ignatius (c. 110) show first-day observance among Gentile Christians; Justin Martyr (c. 155) plainly describes Christians assembling 'on the day called Sunday', linking it to creation's first day and the resurrection. Constantine's law of 321 AD made 'the venerable day of the Sun' a civil rest day — consolidating, not inventing, the practice; the Council of Laodicea (c. 363) then discouraged Christians from resting on the Jewish Sabbath. So the honest sequence: the change began within early Gentile Christianity (2nd century, well before Constantine), was motivated by resurrection commemoration and increasing separation from Judaism, was cemented by imperial law, and has no explicit biblical command behind it — all sides of today's Sabbath/Sunday debate can be checked against these same documents.",
    sources: ["Justin Martyr, First Apology 67 (c. 155)", "Didache 14; Ignatius to the Magnesians 9", "Constantine's Sunday law, Codex Justinianus 3.12.2 (321)", "Council of Laodicea canon 29"]
  },
  {
    title: "Halloween",
    date: "All Saints' eve fixed by 9th century",
    tier: "DEBATED",
    tags: ["holidays"],
    body: "Documented layer: Halloween is the eve of All Saints/All Hallows (Nov 1), a church feast moved to that date in the 8th–9th centuries (Gregory III, then Gregory IV extending it empire-wide); 'Halloween' = All Hallows' Even. Debated layer: whether Nov 1 was chosen to absorb the Celtic festival Samhain, and how much of modern custom (costumes, souling/trick-or-treat, jack-o'-lanterns) descends from pagan practice versus medieval Christian folk custom (souling for soul-cakes is documented from the Middle Ages) versus modern invention — folklorists genuinely disagree, and the confident versions in both directions ('purely pagan devil-festival' / 'purely Christian, no pagan link') overstate the evidence. American Halloween as practiced is largely a 19th–20th century commercial-folk construction built on Irish and Scottish immigrant customs.",
    sources: ["Gregory IV / Louis the Pious Nov 1 extension (835)", "Ronald Hutton, 'Stations of the Sun' (evidence review)", "Medieval souling records"]
  },
  {
    title: "Birthday celebrations",
    date: "modern custom: 19th century spread",
    tier: "DOCUMENTED",
    tags: ["customs"],
    body: "In the Bible, only pagan rulers' birthdays are recorded (Pharaoh, Genesis 40:20; Herod, Mark 6:21 — both occasions of executions), and early Christians did not keep birthdays: Origen (3rd century) explicitly argued the righteous do not celebrate them, and early writers associated the custom with pagan practice. Birthday celebration entered Jewish and Christian cultures gradually; the familiar children's birthday with cake and candles is documented as spreading from German 'Kinderfest' custom in the 18th–19th centuries, and 'Happy Birthday to You' dates to a 1893 melody. So: the universal modern birthday is a recent custom with no biblical basis and an early-Christian record of disapproval — presented as documented history; what to do with that is the reader's call.",
    sources: ["Origen, Homily on Leviticus 8", "Genesis 40:20; Mark 6:21 (only biblical birthdays)", "Kinderfest documentation; Hill sisters' 1893 'Good Morning to All'"]
  },
  {
    title: "Wedding rings and 'ring finger'",
    date: "documented from ancient Egypt and Rome",
    tier: "DOCUMENTED",
    tags: ["customs"],
    body: "Betrothal/wedding rings are documented in ancient Egypt and especially Rome (the anulus pronubus; Pliny mentions the iron betrothal ring). The 'vena amoris' — a vein running from the fourth finger to the heart, the stated reason for the ring finger — was ancient belief repeated by Roman and later writers; anatomically false, historically real as the documented rationale. Rings entered Christian marriage rites by the early medieval period. No biblical command institutes them; no credible evidence makes them sinister either — a documented Greco-Roman-Egyptian custom absorbed into later practice.",
    sources: ["Pliny the Elder, Natural History 33.4", "Aulus Gellius, Attic Nights 10.10 (vena amoris)", "Early medieval marriage liturgies"]
  },
  {
    title: "Haloes, saint veneration, and images",
    date: "halo adopted 4th century",
    tier: "DOCUMENTED",
    tags: ["worship"],
    body: "The halo/nimbus in art is documented BEFORE Christian use around the heads of Greco-Roman sun deities (Helios/Sol) and deified emperors; Christian art adopted it for Christ in the 4th century and for saints thereafter — a documented borrowing of pagan visual vocabulary, whatever one concludes from that. Veneration of saints grew from documented 2nd–3rd century honoring of martyrs' remains and anniversaries (Martyrdom of Polycarp, c. 156, is the first clear account); prayers ADDRESSED to departed saints are documented from the 3rd–4th centuries, expanding greatly after Christianity's legalization. The 2nd Council of Nicaea (787) defended image veneration against the iconoclasts, distinguishing veneration (douleia) from worship (latreia) — whether that distinction holds is theology; the historical sequence is as documented here, and none of it appears as commanded practice in the New Testament record itself.",
    sources: ["Sol/Helios nimbus iconography (pre-Christian, documented)", "Martyrdom of Polycarp 17–18 (c. 156)", "2nd Council of Nicaea decrees (787)"]
  },
  {
    title: "Valentine's Day",
    date: "romantic link first documented 1382",
    tier: "DOCUMENTED",
    tags: ["holidays", "myth-check"],
    body: "Named for martyred saint(s) Valentine (3rd century, historically obscure — even the 494 AD feast establishment says little was known). The ROMANTIC Valentine's Day is first documented in Chaucer's 'Parliament of Fowls' (c. 1382), linking the day to birds choosing mates — before that, no romantic association is documented anywhere. The oft-repeated claim that it Christianized the Roman fertility festival Lupercalia (Feb 15) is a modern back-formation: no ancient or medieval source connects them, and scholars of Lupercalia reject the link. A good example of a fake 'pagan origin' story attached to a genuinely medieval invention.",
    sources: ["Chaucer, 'Parliament of Fowls' (c. 1382)", "Gelasius and the (non-)suppression of Lupercalia — Green, 'Roman Religion'", "Jack Oruch, 'St. Valentine, Chaucer, and Spring' (Speculum, 1981)"]
  },
  {
    title: "New Year on January 1",
    date: "Roman, formalized 46 BC",
    tier: "DOCUMENTED",
    tags: ["holidays"],
    body: "January 1 as year-start is Roman: consuls took office that day from 153 BC, and Julius Caesar's calendar reform (46 BC) fixed it; the month is named for Janus, the two-faced Roman god of doorways and beginnings, and Romans marked the day with omens, gifts (strenae), and revelry — all documented. Medieval Christian Europe often moved New Year to March 25 or Christmas; January 1 returned with the Gregorian calendar (1582 onward; Britain and its colonies only in 1752). The biblical calendar starts the year in spring (Exodus 12:2, month of Aviv/Nisan). So today's New Year is a documented Roman civil institution bearing a Roman god's name — history anyone can weigh for themselves.",
    sources: ["Roman consular calendar records", "Julian reform (46 BC), Ovid's Fasti book 1 (Janus customs)", "British Calendar Act 1751", "Exodus 12:2"]
  },
  {
    title: "'God-fearing' customs test: how to check any practice yourself",
    date: "method",
    tier: "CONSENSUS",
    tags: ["customs", "method"],
    body: "A repeatable method used throughout this section, usable on any custom you encounter: (1) Find the EARLIEST dated evidence of the practice — not claims about it, the practice itself. (2) Trace each documented stage forward; beware gaps of centuries bridged by assertion. (3) Treat sound-alike word arguments (Easter/Ishtar) as worthless without documented linguistic descent. (4) Distrust both genres of easy story: 'everything Christian is secretly pagan' (the Hislop fallacy — one discredited 1853 book is behind an amazing share of these claims) and 'nothing came from anywhere, it was always thus'. (5) Distinguish three separate questions people constantly blur: Where did it come from? (history — answerable), Is it commanded/forbidden in scripture? (textual — checkable), Should I do it? (conscience — yours). This site answers the first two kinds of question; the third belongs to you.",
    sources: ["Method distilled from the documented cases above", "On Hislop's influence: Lester Grabbe and other scholarly reviews"]
  }
];
