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
| **Migrations & Diaspora** | Where the Israelites started, every documented deportation/diaspora, and every descent claim graded by evidence |
| **World History & Politics** | Empires and the repeating political patterns: debased money, propaganda, bread and circuses, republic-to-strongman |
| **Languages & True Definitions** | Hebrew, Aramaic, Greek, Kreyòl; the original meanings behind "hell", "church", "Lucifer", "virgin", and KJV words that drifted |
| **Roots & Recovery** | Haitian heritage: the documented African kingdoms, the machinery of erasure, what survived, and how to recover your family line |
| **Truth Analyzer** | A library of popular claims judged against evidence for/against, plus an optional AI assistant bound by truth-first rules |

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

## Companion project

`WITNESS-PROJECT.md` contains the full design for a separate app: recording
testimony from living elders before it is lost, with investigative-style
corroboration (independent witnesses converging = higher confidence). Read it
— the recordings are the part no future technology can recover once the
witnesses are gone.

## Roadmap ideas

- "How we were meant to live" section: documented daily life, law, calendar,
  food, and economy of ancient Israel — what the texts actually prescribe vs.
  later custom
- Interactive migration map
- Kreyòl translation of the interface and entries
- Build the Witness Project MVP

## Contributing / correcting

If any entry overstates its evidence tier, that is a bug. Open an issue with
the source that shows it — the standard is the truth, the whole truth, and
nothing but the truth.
