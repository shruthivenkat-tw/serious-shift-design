export type WorldKey = "society" | "organisations" | "economy" | "consumers";

export interface Thinker {
  name: string;
  role: string;
  org: string;
  stance: string;
  stanceColor: string;
  description: string;
}

export interface World {
  key: WorldKey;
  scenario: string;        // e.g. "SCENARIO 1"
  label: string;           // e.g. "SOCIETY"
  title: string;
  tag: string;             // e.g. "ACCELERATING NOW"
  quote: string;
  dateRange: string;       // e.g. "2027-2032"
  thinkerCount: string;    // e.g. "21 THINKERS"
  accentColorHex: string;
  bgFrom: string;
  bgVia: string;
  bgTo: string;
  chipColor: string;       // active chip fill colour
  left: Thinker;
  right: Thinker;
}

export const worlds: World[] = [
  {
    key: "society",
    scenario: "SCENARIO 1",
    label: "SOCIETY",
    title: "Governance Void,\nPower Rush",
    tag: "ACCELERATING NOW",
    quote: '"Who fills the void when no one is governing AI?"',
    dateRange: "2027-2032",
    thinkerCount: "21 THINKERS",
    accentColorHex: "#3b82f6",
    bgFrom: "#0a1628",
    bgVia: "#1e3a6e",
    bgTo: "#0c0e1d",
    chipColor: "#2563eb",
    left: {
      name: "Reid Kurzwell",
      role: "Futurist",
      org: "Singular Institute",
      stance: "ACCELERATE",
      stanceColor: "#ef4444",
      description:
        "Distributed AI leadership — governance becomes a ground, and then new forms of authority emerge from the building.",
    },
    right: {
      name: "Jian Tao",
      role: "Professor of Political Economy",
      org: "LSE",
      stance: "SKEPTIC",
      stanceColor: "#60a5fa",
      description:
        "A vacuum in formal control doesn't mean freedom — it means the fastest, best-funded AI fills the gap, usually to the public's loss.",
    },
  },
  {
    key: "organisations",
    scenario: "SCENARIO 2",
    label: "ORGANISATIONS",
    title: "The Liquid\nFirm",
    tag: "DISSOLVING STRUCTURE",
    quote: '"What happens when the company is no longer the unit of work?"',
    dateRange: "2026-2031",
    thinkerCount: "18 THINKERS",
    accentColorHex: "#34d399",
    bgFrom: "#061a1a",
    bgVia: "#0f3c38",
    bgTo: "#134e4a",
    chipColor: "#059669",
    left: {
      name: "Alex Proenza",
      role: "Org Designer",
      org: "Fluid Systems",
      stance: "ACCELERATE",
      stanceColor: "#10b981",
      description:
        "Distributed firm structures — hierarchy becomes a liability, and then new forms of collective intelligence emerge from fluidity.",
    },
    right: {
      name: "Nadia Voos",
      role: "Labour Economist",
      org: "New Work Institute",
      stance: "SKEPTIC",
      stanceColor: "#34d399",
      description:
        "Liquid organisations don't self-organise well — they require invisible governance structures that entrench power differently.",
    },
  },
  {
    key: "economy",
    scenario: "SCENARIO 3",
    label: "ECONOMY",
    title: "Post-Capital\nLabour",
    tag: "INDUSTRY SHIFT",
    quote: '"The government decides what labour has long given up"',
    dateRange: "2027-2035",
    thinkerCount: "24 THINKERS",
    accentColorHex: "#e879f9",
    bgFrom: "#0f0a1e",
    bgVia: "#2e1065",
    bgTo: "#1e1b4b",
    chipColor: "#9333ea",
    left: {
      name: "Henrick Lund",
      role: "CEO",
      org: "Nordic Ventures",
      stance: "POST-CAPIT",
      stanceColor: "#a855f7",
      description:
        "Distributed labour structures — capital becomes a liability, and new forms of compensation emerge from the margins.",
    },
    right: {
      name: "Mir Tanaka",
      role: "Tech Anthropologist",
      org: "Kyoto Digital Lab",
      stance: "DOOMER",
      stanceColor: "#e879f9",
      description:
        "A vacuum in formal employment doesn't create opportunity — it means the most exploitative capital structure fills the gap.",
    },
  },
  {
    key: "consumers",
    scenario: "SCENARIO 4",
    label: "CONSUMERS",
    title: "Agentic\nEveryday",
    tag: "BEHAVIOUR CHANGE",
    quote: '"How do you hold reality when its powers claim your existence?"',
    dateRange: "2025-2030",
    thinkerCount: "19 THINKERS",
    accentColorHex: "#fb7185",
    bgFrom: "#0f0a14",
    bgVia: "#4c0519",
    bgTo: "#7f1d1d",
    chipColor: "#e11d48",
    left: {
      name: "Owen Park",
      role: "Climate Strategist",
      org: "Green Futures",
      stance: "BRAND FURST",
      stanceColor: "#f43f5e",
      description:
        "Distributed agency structures — autonomy becomes the ground, and new forms of human identity emerge from the friction.",
    },
    right: {
      name: "Jian Tao",
      role: "Professor of Political Economy",
      org: "LSE",
      stance: "PRAGMATIST",
      stanceColor: "#fb7185",
      description:
        "Agentic systems don't create equality — they amplify existing power structures and climate inequity at scale.",
    },
  },
];

export const thinkers = [
  { name: "Reid Kurzwell",  count: 5,   label: "ACCELERATE",  labelColor: "#ef4444" },
  { name: "Nadia Voos",    count: 207,  label: "SKEPTIC",     labelColor: "#a855f7" },
  { name: "Henrick Lund",  count: 32,   label: "POST-CAPIT",  labelColor: "#6366f1" },
  { name: "Mir Tanaka",    count: 10,   label: "DOOMER",      labelColor: "#f59e0b" },
  { name: "Owen Park",     count: 43,   label: "BRAND FURST", labelColor: "#ec4899" },
  { name: "Alex Proenza",  count: 61,   label: "PRAGMATIST",  labelColor: "#14b8a6" },
];
