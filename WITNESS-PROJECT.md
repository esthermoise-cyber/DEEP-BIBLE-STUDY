# The Witness Project — Design Document (companion app)

**Status: concept / design. This is a separate app from Deep Bible Study, on purpose.**

## The problem

Every day, elders die carrying unrecorded firsthand memory — of family lines,
villages, migrations, customs, languages, recipes, songs, proverbs, and events
they personally lived through. For Haitians and other descendants of the slave
trade, this is doubly urgent: the written record was deliberately thinned by
the system itself, so **living memory is a primary source, often the only one.**
Once an elder passes, that archive burns.

## The core idea

An app for systematically recording testimony from living witnesses —
especially elders — and then **weighing it the way investigators weigh
testimony**: independent accounts that converge raise confidence; contradicting
accounts get flagged, not erased; a single uncorroborated account stays
preserved but labeled as such. Same philosophy as Deep Bible Study's evidence
tiers, applied to living memory.

## Why it must be a separate app

1. **Different data.** Deep Bible Study is settled/public history; the Witness
   Project is personal data from living people — consent, privacy, and family
   control matter in ways a public reference site never touches.
2. **Different users.** One is for readers/students; the other is for
   families, interviewers, and communities actively collecting.
3. **Different growth.** The witness archive should be shareable with *every*
   people and community, not tied to one study tool. It deserves its own name
   and mission.

They connect at one point: recovered, corroborated community history can
eventually feed back into reference sections like Roots & Recovery — with the
same evidence-tier grading.

## How it works — the pipeline

### 1. Capture (make it effortless for the elder)
- **Audio/video recording on any phone** — no typing required of the elder.
  Even WhatsApp voice notes should be ingestible, because that is what
  families actually use.
- **Guided interview decks** — structured question sets so no key area is
  missed: full name & nicknames, birthplace & lakou, parents' and
  grandparents' names, who married whom, land, church/temple, migrations,
  historical events lived through ("Where were you when…"), customs, recipes,
  remedies, songs, proverbs, words in the old way of speaking.
- **In the elder's language.** Kreyòl-first for Haitian use; the interface
  targets the *recorder* (often a grandchild), not the elder.
- **Session metadata captured automatically**: date, place, who recorded,
  who is speaking.

### 2. Provenance (what makes testimony evidence)
Every recording is tagged with:
- **Witness identity**: name, birth year, birthplace.
- **Relationship to the event**: firsthand ("I saw"), secondhand ("my mother
  told me"), tradition ("it was always said"). This single field is the most
  important one in the system — it is the difference between testimony and hearsay.
- **Chain of custody**: who recorded, when, edited or raw.

### 3. Transcription & claims extraction
- Speech-to-text (with human correction) → searchable transcript, translated
  as needed (Kreyòl ↔ French ↔ English).
- Each testimony is broken into **discrete claims**: "The family came from
  Jacmel", "Grandfather's father was called Ti Pierre", "The land at X
  belonged to the family until the occupation." Claims are what get
  corroborated; stories stay whole and untouched as the source record.

### 4. Corroboration engine (the investigative heart)
This is the "one group says one thing, another says another, the majority
converging is where truth is found" mechanism — refined the way investigators
actually do it:
- **Cluster matching claims** from different witnesses (same event, place,
  family, custom).
- **Independence check** — the crucial subtlety: ten people repeating what one
  matriarch told them all is ONE source, not ten. Witnesses are grouped by
  where their knowledge came from; only independent lines of testimony count
  separately. (This is the same rule ancient historians apply to manuscripts:
  copies of a copy are one witness.)
- **Convergence scoring**, mapped to familiar tiers:
  - **Corroborated** — multiple independent firsthand accounts agree.
  - **Supported** — independent accounts agree but secondhand, or firsthand but few.
  - **Attested once** — preserved, single source, labeled as such.
  - **Disputed** — independent accounts genuinely conflict; ALL versions are
    kept and shown side by side. Disagreement is data, never deleted.
  - **Anchored** — testimony matched to a document (a baptism record, a land
    deed, a ship manifest, a dated photo) — the strongest state.
- **Weighting rules**: firsthand > secondhand > tradition; detail-rich and
  incidental details count more than rehearsed narrative; contemporary
  documents trump memory for dates (memory is honest but dates drift).

### 5. Preservation & access
- Originals kept forever, immutable (nobody can edit a testimony — corrections
  are added as new linked testimony, like a court record).
- Family-controlled privacy: private / family-only / community / public per item.
- Durable export (open formats, multiple copies) — an archive that dies with a
  startup is a second erasure.

### 6. Community layer
- Others can add "I heard this too" — as their OWN recorded testimony, never
  by editing someone else's.
- Diaspora-wide search: two families in Miami and Cap-Haïtien discover their
  grandmothers name the same lakou — the system surfaces the match.

## Precedents to learn from (proof the model works)
- **StoryCorps** (US): 600,000+ ordinary-people interviews archived in the
  Library of Congress — proves mass voluntary capture works.
- **USC Shoah Foundation**: 55,000+ Holocaust survivor video testimonies with
  rigorous indexing — proves testimony-as-evidence methodology at scale.
- **Griot tradition** (West Africa): centuries of lineage kept orally by
  specialists and cross-checked between them — proof that oral transmission,
  done with method, is a real archive. This app is a digital griot system.

## Minimum viable version (start this small)
1. A phone-friendly web app: record audio → answer the guided question deck →
   upload with witness metadata.
2. Transcripts + search.
3. Manual claim tagging and a simple corroboration view (who else said this?).
4. One family or one church community as the pilot.

Everything else — auto-transcription, translation, matching, scoring — layers
on after real recordings exist. **The recordings are the irreplaceable part;
every day of delay loses testimony that no future feature can recover.**
