// Hybrid/fusion-related functions — breeding, dynamic hybrid creation, recipes.
// Pure logic, no game state or DOM dependencies.

import { mixColors, shiftHue, colorNameFromHex, colorNameForMutation } from "./color-utils";
import { KIND_DISPLAY, MUTATION_PREFIXES } from "./constants";
import type { FlowerDef, BreedOutcome, Rarity } from "./types";

// ── Single-word name → prefix mapping for hybrid name generation ──
const SINGLE_PREFIXES: Record<string, string> = {
  Sunflower: "Solar",
  Lavender: "Misty",
  Snapdragon: "Dragon",
};

/**
 * Generate a display name for a hybrid from two parent flower names.
 * Multi-word names use the first word as prefix; single-word names
 * use a lookup table or trim the last two characters.
 */
export function generateHybridName(name1: string, name2: string): string {
  const words1 = name1.split(" ");
  const words2 = name2.split(" ");
  let prefix: string;
  let species: string;

  if (words1.length >= 2) {
    prefix = words1[0];
  } else {
    prefix = SINGLE_PREFIXES[name1] || name1.slice(0, -2);
  }

  if (words2.length >= 2) {
    species = words2[words2.length - 1];
  } else {
    species = name2;
  }

  // Same species? Mix the color adjectives instead
  if (
    words1[words1.length - 1] === words2[words2.length - 1] &&
    words1.length >= 2 &&
    words2.length >= 2
  ) {
    prefix = words1[0] + "-" + words2[0];
    species = words1[words1.length - 1];
  }

  return prefix + " " + species;
}

/**
 * Generate a deterministic key for a dynamic hybrid pair.
 * Keys are sorted so that order doesn't matter (rose+tulip === tulip+rose).
 */
export function generateHybridKey(key1: string, key2: string): string {
  const sorted = [key1, key2].sort();
  return "dyn_" + sorted[0] + "_" + sorted[1];
}

/** Rarity bonus multipliers for hybrid sell-price calculation. */
const RARITY_BONUS: Record<string, number> = {
  common: 1,
  uncommon: 1.2,
  rare: 1.5,
  legendary: 2,
  unique: 2.5,
  hybrid: 1.3,
};

/**
 * Look up or dynamically create a hybrid flower definition from two parent keys.
 * Mutates the `flowers` record by inserting the new hybrid if it doesn't exist.
 * Returns the hybrid key string.
 */
export function getOrCreateDynamicHybrid(
  key1: string,
  key2: string,
  flowers: Record<string, FlowerDef>,
): string {
  const hybKey = generateHybridKey(key1, key2);

  // Already exists?
  if (flowers[hybKey]) return hybKey;

  const f1 = flowers[key1];
  const f2 = flowers[key2];
  if (!f1 || !f2) return key1; // fallback

  // Use parent1's appearance (shape) with mixed colors + random jitter
  const mixedPetal = shiftHue(
    mixColors(f1.petal, f2.petal),
    (Math.random() - 0.5) * 20, // +/-10 degrees jitter
  );
  const mixedStem = mixColors(f1.stem, f2.stem);

  // Randomly pick which parent's shape to use (not always parent1)
  const shapeParent = Math.random() < 0.5 ? f1 : f2;

  // Name = color adjective from mixed petal + species from the shape
  const colorAdj = colorNameFromHex(mixedPetal);
  const speciesName =
    KIND_DISPLAY[shapeParent.kind] ||
    shapeParent.kind.charAt(0).toUpperCase() + shapeParent.kind.slice(1);
  const hybridName = colorAdj + " " + speciesName;

  // Sell value: average scaled by parent rarity
  const bonus = Math.max(
    RARITY_BONUS[f1.rarity] || 1,
    RARITY_BONUS[f2.rarity] || 1,
  );
  const avgSell = Math.round((f1.sell + f2.sell) * 0.8 * bonus);

  flowers[hybKey] = {
    name: hybridName,
    kind: shapeParent.kind,
    appearance: shapeParent.appearance,
    rarity: "hybrid" as Rarity,
    w: 0,
    petal: mixedPetal,
    stem: mixedStem,
    sell: Math.max(avgSell, 20),
    dynamic: true,
    parent1: key1,
    parent2: key2,
  };

  return hybKey;
}

/**
 * Look up a breed recipe for two flower kinds.
 * Returns the weighted outcome array, or null if no recipe exists.
 */
export function findBreedRecipe(
  kind1: string,
  kind2: string,
): BreedOutcome[] | null {
  const sorted = [kind1, kind2].sort();
  const key = sorted[0] + "+" + sorted[1];
  return BREED_RECIPES[key] || null;
}

// ── Breeding Recipes (kind1+kind2 → possible offspring) ─────
// Each recipe maps a sorted kind pair to weighted outcomes.
export const BREED_RECIPES: Record<string, BreedOutcome[]> = {
  "rose+tulip": [{ key: "sunsetRose", w: 60 }, { key: "emeraldTulip", w: 25 }],
  "lily+violet": [{ key: "moonlightLily", w: 55 }, { key: "crystalViolet", w: 30 }],
  "orchid+rose": [{ key: "crimsonOrchid", w: 60 }],
  "daisy+sunflower": [{ key: "goldenDaisy", w: 65 }],
  "cherry+lily": [{ key: "frostedCherry", w: 55 }],
  "iris+tulip": [{ key: "shadowIris", w: 45 }, { key: "emeraldTulip", w: 40 }],
  "peony+poppy": [{ key: "coralPeony", w: 60 }],
  "lavender+violet": [{ key: "stardustLavender", w: 55 }],
  "rose+sunflower": [{ key: "phoenixSunflower", w: 60 }],
  "daisy+violet": [{ key: "crystalViolet", w: 55 }],
  "iris+poppy": [{ key: "midnightPoppy", w: 60 }],
  // Additional cross-kind recipes for broader coverage
  "cherry+rose": [{ key: "crimsonOrchid", w: 30 }, { key: "sunsetRose", w: 40 }],
  "daffodil+lily": [{ key: "moonlightLily", w: 40 }, { key: "goldenDaisy", w: 30 }],
  "lavender+peony": [{ key: "coralPeony", w: 35 }, { key: "stardustLavender", w: 40 }],
  "orchid+violet": [{ key: "crystalViolet", w: 40 }, { key: "crimsonOrchid", w: 30 }],
  "poppy+sunflower": [{ key: "phoenixSunflower", w: 45 }, { key: "midnightPoppy", w: 30 }],
  "daisy+tulip": [{ key: "goldenDaisy", w: 45 }, { key: "emeraldTulip", w: 30 }],
  "peony+rose": [{ key: "coralPeony", w: 40 }, { key: "sunsetRose", w: 35 }],
  "iris+lily": [{ key: "shadowIris", w: 40 }, { key: "moonlightLily", w: 35 }],
};
