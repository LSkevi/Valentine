// Main entry point for Yurie's Flower Shop
// Currently loads via game-legacy bridge.
// Typed modules are imported for TypeScript verification.
// Full wiring (replacing game-legacy) is the next migration step.

// Runtime: legacy bridge (keeps game working during migration)
import './game-legacy';

// Typed modules — imported for TS verification and future wiring
// These will replace game-legacy.ts once fully wired
export * from './types';
export { FLOWERS, PKT_POOLS } from './flowers';
export { G, SAVE_KEY } from './state';
export { saveG, loadG } from './persistence';
export { RARITY_LABEL, STAGE_NAMES, STAGE_WATERS, MAX_STAGE } from './constants';
export { lighter, darker, mixColors, shiftHue, colorNameFromHex } from './color-utils';
export { generateHybridKey, generateHybridName, getOrCreateDynamicHybrid, findBreedRecipe, BREED_RECIPES } from './hybrid';
export { flowerSVG, SHAPE_PARAMS } from './flower-svg';
export { FLOWER_RENDERERS } from './renderers';
export { openModal, closeModal, toast } from './modals';
export { playSound, haptic, getAudioCtx } from './audio';
export { SONGS, startAmbientMusic, stopAmbientMusic, updateMusicForWeather } from './music';
