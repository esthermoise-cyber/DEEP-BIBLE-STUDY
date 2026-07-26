/* Evidence tiers — the backbone of the whole site.
   Every entry in every section carries exactly one tier.
   The rule: never label a claim higher than its evidence supports. */

const TIERS = {
  DOCUMENTED: {
    label: "Documented",
    short: "Physical or contemporary evidence",
    desc: "Backed by archaeology, inscriptions, coins, or written records from at or near the time. As close to proven as ancient history gets.",
    color: "#2e7d32"
  },
  STRONG: {
    label: "Strong evidence",
    short: "Multiple independent sources",
    desc: "Attested by multiple independent ancient sources, though not by direct physical evidence. Very probably true.",
    color: "#558b2f"
  },
  CONSENSUS: {
    label: "Scholarly consensus",
    short: "Most experts agree, by inference",
    desc: "The conclusion most historians draw from the total evidence. Not directly provable, but the best-supported reading. Could change with new discoveries.",
    color: "#0277bd"
  },
  DEBATED: {
    label: "Genuinely debated",
    short: "Qualified experts disagree",
    desc: "Serious scholars disagree, each side with real evidence. Anyone who tells you this one is settled is not telling you the whole truth.",
    color: "#ef6c00"
  },
  TRADITION: {
    label: "Tradition only",
    short: "Later tradition, no early evidence",
    desc: "Believed and passed down, but the earliest evidence appears long after the supposed events. May be true, may not — there is no way to verify it.",
    color: "#8e24aa"
  },
  UNSUPPORTED: {
    label: "Myth / unsupported",
    short: "Popular claim, evidence contradicts or is absent",
    desc: "A widely repeated claim that the actual evidence contradicts or fails to support. Popular does not mean true.",
    color: "#c62828"
  }
};

/* Verdicts used by the Truth Analyzer claim library */
const VERDICTS = {
  TRUE:     { label: "TRUE",     color: "#2e7d32" },
  MOSTLY_TRUE: { label: "MOSTLY TRUE", color: "#558b2f" },
  FALSE:    { label: "FALSE",    color: "#c62828" },
  MOSTLY_FALSE: { label: "MOSTLY FALSE", color: "#d84315" },
  DEBATED:  { label: "GENUINELY DEBATED", color: "#ef6c00" },
  UNPROVEN: { label: "UNPROVEN / UNKNOWN", color: "#6d4c41" },
  NUANCED_SEE_BODY: { label: "NUANCED — READ THE EVIDENCE", color: "#0277bd" }
};
