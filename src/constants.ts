// ── Rarity Labels ──────────────────────────────────────────
export const RARITY_LABEL = {
  common: "Common",
  uncommon: "Uncommon",
  rare: "\u2605 Rare",
  legendary: "\u2726 Legendary",
  unique: "\u2726\u2726 Unique \u2726\u2726",
  hybrid: "\uD83E\uDDEC Fusion",
} as const;

// ── Growth Stages ──────────────────────────────────────────
export const STAGE_NAMES = [
  "\uD83C\uDF30 Seed",
  "\uD83C\uDF31 Sprout",
  "\uD83C\uDF3F Growing",
  "\uD83C\uDF38 Bloomed!",
] as const;

export const STAGE_WATERS = 3;
export const MAX_STAGE = 3;

// ── Packet Shop ────────────────────────────────────────────
export const PKT_COST = {
  common: 12,
  uncommon: 35,
  rare: 80,
  legendary: 160,
} as const;

export const PKT_LABEL = {
  common: "Common",
  uncommon: "Uncommon",
  rare: "Rare",
  legendary: "\u2726 Legendary",
} as const;

export const PKT_ICON = {
  common: "\uD83D\uDCE6",
  uncommon: "\uD83C\uDF39",
  rare: "\uD83D\uDC8E",
  legendary: "\u2728",
} as const;

// ── Plots & Pots ───────────────────────────────────────────
export const POT_PRICES = [0, 0, 25, 60, 120, 250, 450, 750, 1200, 1800, 3000, 5000] as const;
export const MAX_PLOTS = 12;

// ── Water Upgrades ─────────────────────────────────────────
export const WATER_CAP_UPGRADES = [
  { cap: 10, cost: 100, label: "Water Can +4 (10 max)" },
  { cap: 14, cost: 300, label: "Water Can +4 (14 max)" },
  { cap: 18, cost: 600, label: "Water Can +4 (18 max)" },
] as const;

// ── Weather System ─────────────────────────────────────────
export const WEATHER_TYPES = ["sunny", "rainy", "drought", "snowy"] as const;

export const WEATHER_LABELS = {
  sunny: "\u2600\uFE0F Sunny",
  rainy: "\uD83C\uDF27\uFE0F Rainy",
  drought: "\uD83C\uDF35 Drought",
  snowy: "\u2744\uFE0F Snowy",
} as const;

export const WEATHER_CLASSES = {
  sunny: "weather-sunny",
  rainy: "weather-rainy",
  drought: "weather-drought",
  snowy: "weather-snowy",
} as const;

export const WEATHER_INTERVAL_MIN = 120000; // 2 min
export const WEATHER_INTERVAL_MAX = 300000; // 5 min

// ── Pot Colors (SVG deco strings) ──────────────────────────
export const POT_COLORS = {
  terracotta: {
    rH: "#e8724e",
    rM: "#c9522a",
    rD: "#a83e18",
    bM: "#c24e26",
    bS: "#7a3010",
    deco: "",
  },
  ceramic: {
    rH: "#5b9bd5",
    rM: "#2e75b6",
    rD: "#1f5c99",
    bM: "#f5f2ed",
    bS: "#ddd8d0",
    deco:
      '<line x1="20" y1="78" x2="60" y2="78" stroke="#5b9bd5" stroke-width="1.5" opacity=".6"/>' +
      '<line x1="20" y1="82" x2="60" y2="82" stroke="#5b9bd5" stroke-width="1" opacity=".4"/>' +
      '<circle cx="30" cy="80" r="1.5" fill="#5b9bd5" opacity=".5"/>' +
      '<circle cx="40" cy="80" r="1.5" fill="#5b9bd5" opacity=".5"/>' +
      '<circle cx="50" cy="80" r="1.5" fill="#5b9bd5" opacity=".5"/>',
  },
  golden: {
    rH: "#fdd835",
    rM: "#f9a825",
    rD: "#f57f17",
    bM: "#e8b800",
    bS: "#b48a00",
    deco:
      '<line x1="18" y1="78" x2="62" y2="78" stroke="#fff" stroke-width="1" opacity=".5"/>' +
      '<line x1="18" y1="86" x2="62" y2="86" stroke="#fff" stroke-width="1" opacity=".5"/>',
  },
} as const;

// ── Kind Display Mapping ───────────────────────────────────
export const KIND_DISPLAY: Record<string, string> = {
  tulip: "Tulip",
  rose: "Rose",
  daisy: "Daisy",
  sunflower: "Sunflower",
  poppy: "Poppy",
  cherry: "Cherry Blossom",
  violet: "Violet",
  lily: "Lily",
  iris: "Iris",
  daffodil: "Daffodil",
  peony: "Peony",
  orchid: "Orchid",
  lavender: "Lavender",
  carnation: "Carnation",
  chrysanthemum: "Mum",
  hyacinth: "Hyacinth",
  bluebell: "Bluebell",
  cosmos: "Cosmos",
} as const;

// ── Mutation Prefixes ──────────────────────────────────────
export const MUTATION_PREFIXES = [
  "Vivid", "Pale", "Deep", "Bright", "Dusky", "Frosty", "Warm", "Wild",
  "Radiant", "Twilight", "Misty", "Ember", "Silken", "Starlit", "Ancient", "Neon",
] as const;

// ── Hybrid Fusion Costs ───────────────────────────────
export const HYBRID_COST_BASE: Record<string, number> = {
  common: 30,
  uncommon: 50,
  rare: 70,
  legendary: 90,
  unique: 120,
} as const;

// ── NPC System ─────────────────────────────────────────────
export const NPC_SPAWN_MIN = 35000;  // 35s minimum between spawns
export const NPC_SPAWN_MAX = 90000;  // 90s max
export const NPC_PATIENCE_MIN = 120000; // 2 min
export const NPC_PATIENCE_MAX = 300000; // 5 min
