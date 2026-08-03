/* Evidence tiers — the backbone of the whole site.
   Every entry in every section carries exactly one tier.
   The rule: never label a claim higher than its evidence supports. */

const TIERS = {
  DOCUMENTED: {
    label: "Documented",
    short: "Physical or contemporary evidence",
    desc: "Backed by archaeology, inscriptions, coins, or written records from at or near the time. As close to proven as ancient history gets.",
    color: "#22a04a"
  },
  STRONG: {
    label: "Strong evidence",
    short: "Multiple independent sources",
    desc: "Attested by multiple independent ancient sources, though not by direct physical evidence. Very probably true.",
    color: "#79b32e"
  },
  CONSENSUS: {
    label: "Scholarly consensus",
    short: "Most experts agree, by inference",
    desc: "The conclusion most historians draw from the total evidence. Not directly provable, but the best-supported reading. Could change with new discoveries.",
    color: "#00a8e8"
  },
  DEBATED: {
    label: "Genuinely debated",
    short: "Qualified experts disagree",
    desc: "Serious scholars disagree, each side with real evidence. Anyone who tells you this one is settled is not telling you the whole truth.",
    color: "#ff8a1f"
  },
  TRADITION: {
    label: "Tradition only",
    short: "Later tradition, no early evidence",
    desc: "Believed and passed down, but the earliest evidence appears long after the supposed events. May be true, may not — there is no way to verify it.",
    color: "#b44ae0"
  },
  UNSUPPORTED: {
    label: "Myth / unsupported",
    short: "Popular claim, evidence contradicts or is absent",
    desc: "A widely repeated claim that the actual evidence contradicts or fails to support. Popular does not mean true.",
    color: "#e5484d"
  }
};

/* Verdicts used by the Truth Analyzer claim library */
const VERDICTS = {
  TRUE:     { label: "TRUE",     color: "#22a04a" },
  MOSTLY_TRUE: { label: "MOSTLY TRUE", color: "#79b32e" },
  FALSE:    { label: "FALSE",    color: "#e5484d" },
  MOSTLY_FALSE: { label: "MOSTLY FALSE", color: "#d84315" },
  DEBATED:  { label: "GENUINELY DEBATED", color: "#ff8a1f" },
  UNPROVEN: { label: "UNPROVEN / UNKNOWN", color: "#9b7a68" },
  NUANCED_SEE_BODY: { label: "NUANCED — READ THE EVIDENCE", color: "#00a8e8" }
};
