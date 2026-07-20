/* Sayings & Expressions — where everyday phrases actually came from, when they
   entered society, and which popular origin-stories are themselves myths. */

const DATA_SAYINGS = [
  {
    title: "\"Scapegoat\"",
    date: "coined 1530",
    tier: "DOCUMENTED",
    tags: ["biblical-phrases"],
    body: "Coined by William Tyndale in his 1530 translation of Leviticus 16, for the goat that symbolically carried Israel's sins into the wilderness on the Day of Atonement ('escape goat' for Hebrew 'azazel' — whose exact meaning is itself debated: 'the goat that departs' vs. a proper name). From that translation choice, English gained its universal word for a person unfairly blamed for others' faults. Entered common secular usage by the 19th century. One man's translation decision in 1530 is in your mouth today.",
    sources: ["Tyndale's Pentateuch (1530), Leviticus 16", "Oxford English Dictionary, 'scapegoat'", "Azazel debate: standard Hebrew lexicons"]
  },
  {
    title: "\"The writing on the wall\"",
    date: "story c. 539 BC; English idiom from 1611 era",
    tier: "DOCUMENTED",
    tags: ["biblical-phrases"],
    body: "From Daniel 5: during Belshazzar's feast, a hand writes 'MENE MENE TEKEL UPARSIN' on the palace wall, announcing Babylon's fall to the Persians — which is documented history (539 BC, Cyrus; and note: critics long claimed 'Belshazzar' was fictional until cuneiform records confirmed him as crown prince and co-regent under Nabonidus, a detail Daniel gets right that later Greek historians didn't know). The phrase entered everyday English after the KJV spread the story, and now means any clear omen of coming doom that people refuse to see.",
    sources: ["Daniel 5", "Nabonidus Cylinder (names Belshazzar)", "Nabonidus Chronicle (fall of Babylon, 539 BC)"]
  },
  {
    title: "\"By the skin of my teeth\", \"a drop in the bucket\", \"eat, drink and be merry\"",
    date: "texts c. 6th–3rd century BC; English via 1611",
    tier: "DOCUMENTED",
    tags: ["biblical-phrases"],
    body: "Three of dozens of everyday phrases that are direct Bible quotations most speakers no longer recognize: 'skin of my teeth' is Job 19:20 (a bare-escape image from the Bible's oldest poetry); 'a drop in the bucket' is Isaiah 40:15 (the nations, next to God); 'eat, drink and be merry' merges Ecclesiastes 8:15 with Jesus' parable of the rich fool (Luke 12:19 — where the phrase is the FOLLY, a context modern usage inverted). Others in daily use: 'go the extra mile' (Matthew 5:41 — referring to the documented Roman law letting soldiers impress civilians to carry loads one mile), 'salt of the earth' (Matthew 5:13), 'the powers that be' (Romans 13:1, Tyndale's phrasing), 'a labor of love' (1 Thessalonians 1:3), 'the blind leading the blind' (Matthew 15:14). English speakers quote this book daily without knowing it.",
    sources: ["Job 19:20; Isaiah 40:15; Ecclesiastes 8:15; Luke 12:19", "Matthew 5:41 and Roman angareia (impressment) law", "David Crystal, 'Begat: The King James Bible and the English Language' (257 idioms traced)"]
  },
  {
    title: "\"Rule of thumb\" — and its fake origin story",
    date: "phrase from 1600s; myth from 1970s",
    tier: "UNSUPPORTED",
    tags: ["myth-check"],
    body: "The viral claim: 'rule of thumb' comes from an old English law allowing a man to beat his wife with a stick no thicker than his thumb. Graded by evidence: NO such law ever existed in English or American statute books — legal historians have searched. The trail: an English judge (Buller, 1782) was ridiculed in cartoons for allegedly voicing such an opinion (no ruling records it), and the phrase-to-law connection was asserted in the 1970s and spread. The documented real origin is mundane: craftsmen using the thumb as a rough measure — 'rule' as in ruler — attested from the 1600s. Lesson: a story being repeated in classrooms and articles for 50 years does not make it history.",
    sources: ["OED first citations (17th c., measurement sense)", "Legal-historical reviews finding no such statute (e.g. Kelly, 'Rule of Thumb and the Folklaw of the Husband's Stick', J. Legal Educ. 1994)"]
  },
  {
    title: "\"OK\" — the world's most-spoken word",
    date: "documented birth: March 23, 1839",
    tier: "DOCUMENTED",
    tags: ["customs"],
    body: "One of the few words whose exact birthday is documented. Boston newspapers in 1838–39 had a fad for jokey abbreviations of deliberate misspellings; on 23 March 1839 the Boston Morning Post printed 'o.k.' for 'oll korrect' ('all correct'). It survived where the other fad words died because the 1840 presidential campaign of Martin Van Buren — 'Old Kinderhook' — used 'OK Clubs', fusing the joke to politics. This etymology was established by Allen Walker Read's exhaustive newspaper research. Competing claims (Choctaw 'okeh', Wolof 'waw-kay', Greek 'ola kala') lack the documentary trail — though the Choctaw and West African theories are at least serious proposals; the evidence simply favors Boston 1839.",
    sources: ["Boston Morning Post, 23 March 1839", "Allen Walker Read, American Speech (1963–64) papers", "Allan Metcalf, 'OK: The Improbable Story of America's Greatest Word'"]
  },
  {
    title: "\"God bless you\" after a sneeze",
    date: "custom ancient; Christian form attributed to 590 AD",
    tier: "TRADITION",
    tags: ["customs"],
    body: "Responding to sneezes with a blessing is documented as ALREADY ancient in Roman times — Pliny the Elder (1st century AD) asks why we salute sneezes, and notes the emperor Tiberius demanded it; ancient Greek sources treat sneezes as omens. The specific Christian story — Pope Gregory I ordering 'God bless you' during the 590 AD plague of Rome — is attributed by later tradition, not contemporary record. So: the custom itself is documented and pre-Christian; the famous plague origin-story is tradition. Most cultures have an equivalent (German 'Gesundheit' = health; Hebrew 'labriut' = to your health; Arabic responses bless the sneezer) — a near-universal human custom whose deep origin (sneeze as omen? soul? health fear?) is genuinely unknown.",
    sources: ["Pliny the Elder, Natural History 28.5 (custom already old, 1st c. AD)", "Aristotle, Problemata (sneeze as omen)", "Gregory I attribution: later medieval tradition, no contemporary source"]
  },
  {
    title: "\"Honeymoon\"",
    date: "attested 1546",
    tier: "DOCUMENTED",
    tags: ["customs", "myth-check"],
    body: "First attested in English in 1546 ('hony moone'), and 16th-century writers themselves explain it: married affection, sweet at first, wanes like the moon — a wry metaphor, not a ritual. The widely repeated claim that it comes from an ancient Babylonian custom of drinking honey-mead for a month after the wedding has no ancient source behind it — no Babylonian text records any such custom; it's a modern just-so story. The wedding-trip meaning ('bridal tour') developed in the 19th century.",
    sources: ["OED, 'honeymoon' (1546 first citation)", "John Heywood's Proverbs (1546); Richard Huloet (1552, explains the waning-moon sense)", "Absence of any Babylonian mead-month source"]
  },
  {
    title: "The white wedding dress",
    date: "popularized 1840",
    tier: "DOCUMENTED",
    tags: ["customs"],
    body: "Not ancient: before the 19th century, Western brides simply wore their best dress, in any color (blue, red, black were all common; blue actually carried the purity association via the Virgin Mary's iconography). The white wedding dress swept the world after Queen Victoria wore white lace to marry Prince Albert in 1840 — a fashion choice, massively publicized, then locked in by the growing wedding industry; the 'white = virginity' symbolism was largely attached AFTERWARD. A perfect documented example of how a custom under 200 years old can feel eternal within three generations.",
    sources: ["Victoria & Albert wedding records and press (1840)", "Fashion-history surveys of pre-1840 bridal wear", "Godey's Lady's Book (1849) already retro-projecting the 'ancient' symbolism"]
  },
  {
    title: "\"Deadline\"",
    date: "documented 1864",
    tier: "DOCUMENTED",
    tags: ["customs"],
    body: "Grimly literal origin: in Civil War prison camps — most infamously Andersonville (1864) — the 'dead line' was a boundary line inside the stockade; prisoners crossing it were shot. The word appears in the camp's own records and the postwar trial of its commandant. It migrated into printing-shop jargon and then, in the 1920s, into the newspaper sense of a time limit — the only sense most people know. From a line you die for crossing, to a date your homework is due: documented semantic drift in under 60 years.",
    sources: ["Andersonville prison records and Wirz trial testimony (1865)", "OED sense development, 'deadline'"]
  },
  {
    title: "\"Knock on wood\" / \"touch wood\"",
    date: "attested 19th century; origin unknown",
    tier: "DEBATED",
    tags: ["customs", "myth-check"],
    body: "An honesty benchmark: this one is simply UNKNOWN, and confident explanations outrun the evidence. 'Touch wood' is attested in Britain from the early 19th century (possibly from children's chasing games where touching wood made you safe); 'knock on wood' is American, attested from the early 1900s. The popular explanations — pagans touching trees to summon spirits, or Christians touching relics of the cross — are speculation with no documentary trail connecting them to the modern custom. Folklorists' verdict: origin genuinely uncertain. When someone tells you its 'real' ancient meaning, you now know more than they do.",
    sources: ["OED and folklore-archive first attestations", "Opie & Tatem, 'A Dictionary of Superstitions' (evidence review)", "Steve Roud, 'The Penguin Guide to the Superstitions of Britain and Ireland'"]
  },
  {
    title: "\"Basket case\", \"raining cats and dogs\", and the 'Life in the 1500s' email",
    date: "myth chain-letter from 1999",
    tier: "UNSUPPORTED",
    tags: ["myth-check"],
    body: "A single anonymous chain email ('Life in the 1500s', circulating since ~1999) planted fake origins that millions now repeat as fact: that 'raining cats and dogs' comes from animals falling through thatched roofs (false — the phrase is first attested in the 1650s with no roof connection; real origin uncertain, possibly gutter-flood imagery washing debris and dead animals down streets); that 'dirt poor', 'threshold', 'bring home the bacon', 'chew the fat', and 'wake' all have the colorful origins it lists (each contradicted or unsupported by the OED's dated citations). 'Basket case' is separately documented: World War I military slang, denied-then-spread by a 1919 official denial about quadruple amputees. The general lesson is the whole point of this section: cute origin stories spread precisely because they're cute — the documented citations in a historical dictionary are the test.",
    sources: ["OED dated citations for each phrase", "Snopes/linguists' dissections of the 'Life in the 1500s' email", "US Army Surgeon General denial (1919, 'basket case')"]
  },
  {
    title: "\"Long time no see\", \"chop chop\", and pidgin-born phrases",
    date: "documented 19th century",
    tier: "DOCUMENTED",
    tags: ["customs"],
    body: "Some everyday phrases entered English through contact languages — the same process that built Haitian Creole. 'Long time no see' and 'chop chop' (hurry) are documented from 19th-century Chinese Pidgin English trade contact (with a parallel Native American pidgin trail for 'long time no see' in US sources); 'savvy' comes via Portuguese/Spanish-based pidgin 'sabir/saber' (to know); 'pickaninny' (from Portuguese 'pequenino', little one) traveled through Atlantic creoles — a reminder that contact languages, born in trade and in slavery, left fingerprints on standard English itself. Languages meet, people improvise, and the improvisations outlive the encounters by centuries.",
    sources: ["OED citations (19th-c. pidgin sources)", "Studies of Chinese Pidgin English", "Atlantic creole lexical histories"]
  },
  {
    title: "\"An eye for an eye\" — the most misread ancient law",
    date: "c. 1754 BC (Hammurabi) / Torah",
    tier: "CONSENSUS",
    tags: ["biblical-phrases"],
    body: "Popularly quoted as a license for revenge; historically it was the opposite — a LIMIT on revenge. In the ancient Near East, retaliation naturally escalated (a wound answered with a killing, a killing with a massacre — see Lamech's boast in Genesis 4:23-24). 'Eye for an eye' (Exodus 21:24; paralleled in Hammurabi's code) capped compensation at proportionality: no MORE than an eye for an eye. Jewish legal tradition (documented in the Mishnah) understood it as monetary compensation, not literal maiming, from early on. And Jesus' 'you have heard it said… but I tell you' (Matthew 5:38) pushes past even proportional retaliation toward non-retaliation. So the phrase's journey runs: escalating vengeance → proportional limit → monetary damages → turning the cheek — quoting it as 'the Bible endorses revenge' reverses its documented direction of travel.",
    sources: ["Exodus 21:23–25; Genesis 4:23–24 (the escalation problem)", "Code of Hammurabi §§196–201", "Mishnah Bava Kamma 8:1 (monetary interpretation)", "Matthew 5:38–39"]
  }
];
