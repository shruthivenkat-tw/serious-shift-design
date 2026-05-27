export type WorldKey = "society" | "economy" | "climate" | "organisations";

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
  label: string;
  title: string;
  quote: string;
  tags: string[];
  accentColor: string;
  accentColorHex: string;
  gradientClass: string;
  bgFrom: string;
  bgVia: string;
  bgTo: string;
  vsColor: string;
  left: Thinker;
  right: Thinker;
}

export const worlds: World[] = [
  {
    key: "society",
    label: "SOCIETY",
    title: "Governance Void,\nPower Rush",
    quote: '“What little the void allows is now governing AI”',
    tags: ["ACCELERATING AI", "SOCIETY"],
    accentColor: "text-cyan-400",
    accentColorHex: "#22d3ee",
    gradientClass: "bg-governance-gradient",
    bgFrom: "#0a1628",
    bgVia: "#0d2447",
    bgTo: "#0c0e1d",
    vsColor: "#22d3ee",
    left: {
      name: "Reid Kurzweil",
      role: "Futurist",
      org: "Singular Institute",
      stance: "ACCELERATE",
      stanceColor: "#ef4444",
      description:
        "Distributed AI leadership — governance becomes a ground, and then new forms of authority emerge from the building.",
    },
    right: {
      name: "Jon Tan",
      role: "Policy Director",
      org: "Future of Work Lab",
      stance: "SKEPTIC",
      stanceColor: "#22d3ee",
      description:
        "A vacuum in formal control doesn't mean freedom — it means the fastest, best-funded AI fills the gap, usually to the public's loss.",
    },
  },
  {
    key: "economy",
    label: "ECONOMY",
    title: "Post-Capital\nLabour",
    quote: '“The government decides what labour has long given up”',
    tags: ["INDUSTRY", "ECONOMY"],
    accentColor: "text-fuchsia-400",
    accentColorHex: "#e879f9",
    gradientClass: "bg-postcapital-gradient",
    bgFrom: "#0f0a1e",
    bgVia: "#1e1b4b",
    bgTo: "#2d1b4e",
    vsColor: "#e879f9",
    left: {
      name: "Nadia Voos",
      role: "Labour Economist",
      org: "New Work Institute",
      stance: "POST-CAPIT",
      stanceColor: "#a855f7",
      description:
        "Distributed labour structures — capital becomes a liability, and then new forms of compensation emerge from the margins.",
    },
    right: {
      name: "Henrick Lund",
      role: "CEO",
      org: "Nordic Ventures",
      stance: "DOOMER",
      stanceColor: "#e879f9",
      description:
        "A vacuum in formal employment doesn't create opportunity — it means the most exploitative capital structure fills the gap.",
    },
  },
  {
    key: "climate",
    label: "CLIMATE",
    title: "Agentic\nEveryday",
    quote: '“How do you hold reality when its powers claim your existence”',
    tags: ["ECONOMY", "CLIMATE"],
    accentColor: "text-rose-400",
    accentColorHex: "#fb7185",
    gradientClass: "bg-agentic-gradient",
    bgFrom: "#0f0a14",
    bgVia: "#3b0764",
    bgTo: "#7f1d1d",
    vsColor: "#fb7185",
    left: {
      name: "Mir Tanaka",
      role: "Tech Anthropologist",
      org: "Kyoto Digital Lab",
      stance: "BRAND FURST",
      stanceColor: "#f43f5e",
      description:
        "Distributed agency structures — autonomy becomes the ground, and then new forms of human identity emerge from the friction.",
    },
    right: {
      name: "Owen Park",
      role: "Climate Strategist",
      org: "Green Futures",
      stance: "PRAGMATIST",
      stanceColor: "#fb7185",
      description:
        "Agentic systems don't create equality — they amplify existing power structures and climate inequity at scale.",
    },
  },
  {
    key: "organisations",
    label: "ORGANISATIONS",
    title: "The Liquid\nFirm",
    quote: '“Find last, definitely where it is to lead and make future Economy”',
    tags: ["CONNECT", "ORGANISATIONS"],
    accentColor: "text-emerald-400",
    accentColorHex: "#34d399",
    gradientClass: "bg-liquidfirm-gradient",
    bgFrom: "#061a1a",
    bgVia: "#0f3c38",
    bgTo: "#134e4a",
    vsColor: "#34d399",
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
      name: "Jon Tan",
      role: "Policy Director",
      org: "Future of Work Lab",
      stance: "PRAGMATIST",
      stanceColor: "#34d399",
      description:
        "Liquid organisations don't self-organise well — they require invisible governance structures that entrench power differently.",
    },
  },
];

export const thinkers = [
  { name: "Reid Kurzweil", count: 5,   label: "ACCELERATE", labelColor: "#ef4444", world: "Governance Void" },
  { name: "Nadia Voos",    count: 207, label: "SKEPTIC",     labelColor: "#a855f7", world: "Post-Capital" },
  { name: "Henrick Lund",  count: 32,  label: "POST-CAPIT",  labelColor: "#6366f1", world: "Agentic" },
  { name: "Mir Tanaka",    count: 10,  label: "DOOMER",      labelColor: "#f59e0b", world: "Liquid Firm" },
  { name: "Owen Park",     count: 43,  label: "BRAND FURST", labelColor: "#ec4899", world: "Governance Void" },
  { name: "Alex Proenza",  count: 61,  label: "PRAGMATIST",  labelColor: "#14b8a6", world: "Liquid Firm" },
];
