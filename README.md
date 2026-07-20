# Deep Bible Study — The Truth Project

A research web app built on one absolute rule: **never present a claim as more
certain than the evidence allows.** Every entry is graded with an evidence tier
— Documented, Strong, Consensus, Debated, Tradition-only, or Unsupported — so
tradition is never dressed up as proof, and popular myths get corrected in
*both* directions (false church traditions AND false internet claims against
religion).

## Sections

| Section | What it covers |
|---|---|
| **Start Here** | The evidence-tier system and the historical method behind every entry |
| **Biblical History** | Timeline of ancient Israel: what archaeology confirms, disputes, and can't settle |
| **Origins of Religions** | Where today's religions and denominations actually came from, with dates and documents |
| **Origins of Practices** | Christmas, Easter, Sunday, Halloween, birthdays, rings… real documented origins |
| **Sayings & Expressions** | Where everyday phrases came from and when they entered society — "OK", "scapegoat", "deadline" — including famous fake origin stories, debunked |
| **Migrations & Diaspora** | Where the Israelites started, every documented deportation/diaspora, and every descent claim graded by evidence |
| **World History & Politics** | Empires and the repeating political patterns: debased money, propaganda, bread and circuses, republic-to-strongman |
| **Languages & True Definitions** | Hebrew, Aramaic, Greek, Kreyòl; the original meanings behind "hell", "church", "Lucifer", "virgin", and KJV words that drifted |
| **Roots & Recovery** | Haitian heritage: the documented African kingdoms, the machinery of erasure, what survived, and how to recover your family line |
| **Doctrine Investigator** | Sabbath, hell, the soul, Trinity, tithing, baptism, resurrection, dietary laws, church hierarchy — each by one structure: claim → earliest evidence → development → established / debated / unprovable |
| **Lost & Excluded Books** | 1 Enoch, Jubilees, Maccabees, Sirach, Wisdom, Tobit, Judith, the Didache, Hermas, Barnabas, Gospel of Thomas, 2 Esdras — dates, languages, manuscripts, canonical status per tradition, and honest reasons for exclusion |
| **Manuscripts & Translations** | Masoretic, Dead Sea Scrolls, Septuagint, Samaritan Pentateuch, NT papyri & codices, Vulgate, Peshitta, Ethiopian Ge'ez — plus the documented causes of textual variants |
| **Academy** | Built-in Ancient Hebrew course (8 bite-size lessons ending at reading Genesis 1:1), plus an AI Course Builder tutor that assesses your goal and creates customized bite-size courses on any topic here — with voice in/out |
| **📓 Research Notebook** | Personal notes, open questions, saved AI answers — editable in place, exportable as Markdown |
| **Truth Analyzer** | A library of popular claims judged against evidence for/against, plus a conversational AI assistant bound by truth-first rules — speak to it (🎤) and hear it answer (🔊) |

## Running it

It's a fully static site — no build step, no server required.

- **Locally:** open `index.html` in any browser, or run `python3 -m http.server` in the repo folder and visit `http://localhost:8000`.
- **Online:** enable GitHub Pages on this repository (Settings → Pages → deploy from branch) and it's live.

## The AI Analyzer (optional)

The Truth Analyzer tab can connect to the Claude API using **your own**
Anthropic API key (from [platform.claude.com](https://platform.claude.com)).
The key is stored only in your browser's localStorage and sent only to
Anthropic. The AI runs under a system prompt that forces it to grade its
claims with the site's evidence tiers, name real sources, admit "unknown",
and never take a side beyond the evidence.

## Everyday features

- **📅 Today's truth** — a featured entry rotates daily on the home page
- **⭐ Saved** — star any entry to build a personal study collection (kept in your browser)
- **⤴ Share** — one tap copies a clean, sourced summary of any entry (or opens your phone's share sheet)

## Monetization (owner setup)

The **❤ Support** tab shows donation/membership/product buttons for whatever
links you add in `data/support-config.js` — Ko-fi, Buy Me a Coffee, PayPal,
Cash App, Patreon, Gumroad, Payhip. Sign up for the ones you want (all free to
join), paste your links into that one file, push, and the buttons appear.
Everything works on this free static site; no server needed. (True paywalls or
subscriptions would require moving to a hosted backend — a later phase, if ever.)

## Companion project

`WITNESS-PROJECT.md` contains the full design for a separate app: recording
testimony from living elders before it is lost, with investigative-style
corroboration (independent witnesses converging = higher confidence). Read it
— the recordings are the part no future technology can recover once the
witnesses are gone.

## The AI's constitution

Both AI features (Truth Analyzer and Course Builder) run under a strict shared
rulebook: evidence tiers on every claim, source *types* named (primary text /
manuscript / archaeology / later tradition / interpretation), a bias-and-
assumptions note on substantial answers, interpretive lenses labeled with
their assumptions (Rabbinic, Karaite, Catholic, Orthodox, Ethiopian,
Protestant, Messianic, Hebrew Roots, Islamic, secular academic…), identity and
ancestry rules (no ancestry from skin color, sound-alike names, geography, or
single DNA markers; all sides' evidence shown), no invented Hebrew
definitions or citations, no secret-knowledge claims, critique of ideas but
never of people, and the required sentence when evidence runs out: *"The
available evidence does not allow a reliable conclusion at this time."*

## Roadmap ideas

- "How we were meant to live" section: documented daily life, law, calendar,
  food, and economy of ancient Israel — what the texts actually prescribe vs.
  later custom
- Full Bible reader with side-by-side translation comparison (needs bundled
  public-domain texts — a sizable data phase)
- Interactive migration map and ancient-world maps
- Community discussion with moderation, user accounts, admin dashboard
  (require a hosted backend — a later platform phase)
- Kreyòl translation of the interface and entries
- Build the Witness Project MVP

## Contributing / correcting

If any entry overstates its evidence tier, that is a bug. Open an issue with
the source that shows it — the standard is the truth, the whole truth, and
nothing but the truth.
