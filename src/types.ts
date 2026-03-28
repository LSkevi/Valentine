// Valentine Garden Game — TypeScript type definitions
// Types only, no runtime code.

// ── Enums / Unions ──────────────────────────────────────────

export type Rarity =
  | "common"
  | "uncommon"
  | "rare"
  | "legendary"
  | "unique"
  | "hybrid";

export type PlotState = "empty" | "growing" | "bloomed";

export type PacketType = "common" | "uncommon" | "rare" | "legendary";

export type WeatherType = "sunny" | "rainy" | "drought" | "snowy";

export type PotStyleId = "terracotta" | "ceramic" | "golden";

// ── Flower Definition ───────────────────────────────────────

export interface FlowerDef {
  name: string;
  kind: string;
  appearance: string;
  rarity: Rarity;
  w: number;
  petal: string;
  stem: string;
  sell: number;
  /** Parent kinds for static hybrid flowers */
  parents?: string[];
  /** True for dynamically-generated fusion flowers */
  dynamic?: boolean;
  /** Parent flower key 1 (dynamic hybrids) */
  parent1?: string;
  /** Parent flower key 2 (dynamic hybrids) */
  parent2?: string;
  /** True for mutation variants */
  mutation?: boolean;
}

// ── Plot ────────────────────────────────────────────────────

export interface Plot {
  id: number;
  state: PlotState;
  key: string | null;
  stage: number;
  waters: number;
  rewarded: boolean;
}

// ── Seed ────────────────────────────────────────────────────

export interface Seed {
  id: number;
  key: string;
}

// ── Inventory Item ──────────────────────────────────────────

export interface InventoryItem {
  key: string;
  uid: number;
  storedAt: number;
}

// ── NPC ─────────────────────────────────────────────────────

export interface NPC {
  id: number;
  name: string;
  avatar: string;
  requestKey: string;
  requestRarity?: Rarity;
  reward: number;
  wildcard: boolean;
  mystery?: boolean;
  isVip?: boolean;
  spawnedAt: number;
  patience: number;
  dialogue?: string;
}

// ── NPC Friend ──────────────────────────────────────────────

export interface NpcFriend {
  name: string;
  avatar: string;
}

// ── Packet Counts ───────────────────────────────────────────

export type PacketCounts = Record<PacketType, number>;

// ── Game State ──────────────────────────────────────────────

export interface GameState {
  coins: number;
  pkt: PacketCounts;
  seeds: Seed[];
  seedId: number;
  plots: Plot[];
  water: number;
  maxWater: number;
  inventory: InventoryItem[];
  discovered: string[];

  // Modal / transient UI state
  bloomPlot: number | null;
  openedKey: string | null;
  plantPlot: number | null;
  pendingPktType: PacketType;
  pendingPktQty?: number;
  opening: boolean;
  tutorialDone: boolean;

  // NPC system
  npcs: NPC[];
  npcTimer: number;
  npcIdCounter: number;

  // Weather
  weather: WeatherType;
  weatherTimer: number;

  // Achievements
  achievements: string[];

  // Stats
  totalSold: number;
  totalCoins: number;
  totalWaters: number;
  totalBlooms: number;
  npcSales: number;
  npcStreak: number;
  npcBestStreak: number;
  hybridCount: number;
  daysPlayed: string[];

  // Cosmetics
  potStyle: PotStyleId;
  bgStyle: string;
  lastLoginDate: string | null;
  loginStreak: number;
  gardenDecor: string[];

  // Audio
  soundEnabled: boolean;
  musicEnabled: boolean;
  musicVolume: number;
  sfxVolume: number;

  // Breeding / mutations
  breedDiscovered: string[];
  mutations: string[];

  // Context tips
  contextTips: Record<string, boolean>;

  // Internal flags / migration markers
  _bugfix_pkt_v1?: boolean;
  _bugfix_pkt_v3?: boolean;
  _lastTickTime?: number;
  _saveVersion?: number;

  // Dynamic hybrid storage
  dynamicHybrids?: Record<string, FlowerDef>;

  // Music preference
  _userPickedSong?: boolean;
}

// ── Shape Params (parametric SVG flower renderers) ──────────

export interface ShapeParamsRadial {
  fn: "radial";
  n: number;
  rx: number;
  ry: number;
  cy: number;
  cR: number;
  cFill: string;
  c2R?: number;
  c2Fill?: string;
  leaves: boolean;
}

export interface ShapeParamsCup {
  fn: "cup";
  open: number;
}

export interface ShapeParamsSpike {
  fn: "spike";
  cols: number;
  rows: number;
}

export interface ShapeParamsStar {
  fn: "star";
  n: number;
  rx: number;
  ry: number;
  cy: number;
  cR: number;
  cFill: string;
}

export interface ShapeParamsBell {
  fn: "bell";
  bells: number;
  bw: number;
  bh: number;
}

export interface ShapeParamsRosette {
  fn: "rosette";
  cy: number;
  r0: number;
  tight: number;
  yellowCenter?: boolean;
}

export interface ShapeParamsNotched {
  fn: "notched";
  n: number;
  cy: number;
  cR: number;
  cFill: string;
}

export interface ShapeParamsAsymmetric {
  fn: "asymmetric";
  cy: number;
  cR: number;
  cFill: string;
}

export interface ShapeParamsStandards {
  fn: "standards";
  cy: number;
  cR: number;
  cFill: string;
}

export interface ShapeParamsLabellum {
  fn: "labellum";
  cy: number;
  cR: number;
  cFill: string;
  lipColor: string;
}

export type ShapeParams =
  | ShapeParamsRadial
  | ShapeParamsCup
  | ShapeParamsSpike
  | ShapeParamsStar
  | ShapeParamsBell
  | ShapeParamsRosette
  | ShapeParamsNotched
  | ShapeParamsAsymmetric
  | ShapeParamsStandards
  | ShapeParamsLabellum;

// ── Pot Colors ──────────────────────────────────────────────

export interface PotColors {
  rH: string;
  rM: string;
  rD: string;
  bM: string;
  bS: string;
  deco: string;
}

// ── Breed Outcome ───────────────────────────────────────────

export interface BreedOutcome {
  key: string;
  w: number;
}

// ── Song (music system) ─────────────────────────────────────

export interface SongChord {
  pad: number[];
  bass: number;
}

export interface SongSeqEvent {
  t: string;
  f: number | number[];
}

export interface Song {
  id: number;
  name: string;
  weather: string;
  beatMs: number;
  padWave: OscillatorType;
  melWave: OscillatorType;
  bassWave: OscillatorType;
  melOctave: number;
  restPct: number;
  padAttack: number;
  melLen: number;
  filterHz: number;
  chords: SongChord[];
  progs: number[][];
  melodies: number[][];
  /** Sequencer-based song flag */
  sequencer?: boolean;
  /** Step sequence data (array of event arrays per step) */
  seq?: SongSeqEvent[][];
  /** Total number of sequencer steps */
  seqSteps?: number;
}

// ── Achievement ─────────────────────────────────────────────

export interface Achievement {
  id: string;
  title: string;
  desc: string;
  icon: string;
  reward: number;
  check: (g: GameState) => boolean;
}
