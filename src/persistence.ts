import type { FlowerDef } from './types';
import { G, SAVE_KEY } from './state';

// TODO: import FLOWERS from './flowers'
const FLOWERS: Record<string, FlowerDef> = (window as any).__FLOWERS ?? {};

// TODO: import getOrCreateDynamicHybrid from './flowers'
const getOrCreateDynamicHybrid: (p1: string, p2: string, flowers: Record<string, FlowerDef>) => string =
  (window as any).__getOrCreateDynamicHybrid ?? (() => '');

/** Callback invoked when a save or load error occurs. Wire up from main.ts. */
export let onSaveError: ((msg: string) => void) | null = null;

/**
 * Serialize game state to localStorage.
 * Includes dynamic hybrid flower definitions and a save version marker.
 */
export function saveG(): void {
  // Collect dynamic flower definitions (dyn_ hybrids and mut_ mutations)
  const dynamicFlowers: Record<string, FlowerDef> = {};
  for (const key of Object.keys(FLOWERS)) {
    if (key.startsWith('dyn_') || key.startsWith('mut_')) {
      dynamicFlowers[key] = FLOWERS[key];
    }
  }

  const s: Record<string, unknown> = {
    _saveVersion: 2,
    coins: G.coins,
    pkt: G.pkt,
    seeds: G.seeds,
    seedId: G.seedId,
    plots: G.plots,
    water: G.water,
    maxWater: G.maxWater,
    inventory: G.inventory,
    discovered: G.discovered,
    npcs: G.npcs,
    npcTimer: G.npcTimer,
    npcIdCounter: G.npcIdCounter,
    weather: G.weather,
    weatherTimer: G.weatherTimer,
    achievements: G.achievements,
    totalSold: G.totalSold,
    totalCoins: G.totalCoins,
    totalWaters: G.totalWaters,
    totalBlooms: G.totalBlooms,
    npcSales: G.npcSales,
    npcStreak: G.npcStreak,
    npcBestStreak: G.npcBestStreak,
    hybridCount: G.hybridCount,
    daysPlayed: G.daysPlayed,
    potStyle: G.potStyle,
    bgStyle: G.bgStyle,
    tutorialDone: G.tutorialDone,
    lastLoginDate: G.lastLoginDate,
    loginStreak: G.loginStreak,
    gardenDecor: G.gardenDecor,
    soundEnabled: G.soundEnabled,
    musicEnabled: G.musicEnabled,
    musicVolume: G.musicVolume,
    sfxVolume: G.sfxVolume,
    breedDiscovered: G.breedDiscovered,
    mutations: G.mutations,
    contextTips: G.contextTips,
    _bugfix_pkt_v1: G._bugfix_pkt_v1,
    _bugfix_pkt_v3: G._bugfix_pkt_v3,
    _lastTickTime: Date.now(),
    dynamicFlowers,
  };

  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(s));
  } catch (e) {
    const msg = `[Garden] Save failed: ${e}`;
    console.warn(msg);
    if (onSaveError) {
      onSaveError(msg);
    }
  }
}

/**
 * Deserialize game state from localStorage.
 * Returns true if a save was found and loaded, false otherwise.
 */
export function loadG(): boolean {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return false;
    const s = JSON.parse(raw);

    // Version check — missing _saveVersion means version 1 (legacy)
    const version: number = s._saveVersion ?? 1;

    // Restore dynamic flower definitions (dyn_ and mut_ keys) before processing
    if (s.dynamicFlowers && typeof s.dynamicFlowers === 'object') {
      for (const [key, def] of Object.entries(s.dynamicFlowers)) {
        if (!(key in FLOWERS)) {
          FLOWERS[key] = def as FlowerDef;
        }
      }
    }
    // Legacy compatibility: also check old dynamicHybrids field
    if (s.dynamicHybrids && typeof s.dynamicHybrids === 'object') {
      for (const [key, def] of Object.entries(s.dynamicHybrids)) {
        if (!(key in FLOWERS)) {
          FLOWERS[key] = def as FlowerDef;
        }
      }
    }

    Object.assign(G, {
      coins: s.coins ?? G.coins,
      pkt: s.pkt ?? G.pkt,
      seeds: s.seeds ?? [],
      seedId: s.seedId ?? 0,
      plots: s.plots ?? G.plots,
      water: s.water ?? G.water,
      maxWater: s.maxWater ?? G.maxWater,
      inventory: s.inventory ?? [],
      discovered: s.discovered ?? [],
      npcs: s.npcs ?? [],
      npcTimer: s.npcTimer ?? 0,
      npcIdCounter: s.npcIdCounter ?? 0,
      weather: s.weather ?? 'sunny',
      weatherTimer: s.weatherTimer ?? 0,
      achievements: s.achievements ?? [],
      totalSold: s.totalSold ?? 0,
      totalCoins: s.totalCoins ?? 0,
      totalWaters: s.totalWaters ?? 0,
      totalBlooms: s.totalBlooms ?? 0,
      npcSales: s.npcSales ?? 0,
      npcStreak: s.npcStreak ?? 0,
      npcBestStreak: s.npcBestStreak ?? 0,
      hybridCount: s.hybridCount ?? 0,
      daysPlayed: s.daysPlayed ?? [],
      potStyle: s.potStyle ?? 'terracotta',
      bgStyle: s.bgStyle ?? 'default',
      tutorialDone: s.tutorialDone ?? false,
      lastLoginDate: s.lastLoginDate ?? null,
      loginStreak: s.loginStreak ?? 0,
      gardenDecor: s.gardenDecor ?? [],
      soundEnabled: s.soundEnabled !== false,
      musicEnabled: s.musicEnabled === true,
      musicVolume: s.musicVolume ?? 0.045,
      sfxVolume: s.sfxVolume ?? 1.0,
      breedDiscovered: s.breedDiscovered ?? [],
      mutations: s.mutations ?? [],
      contextTips: s.contextTips ?? {},
      _bugfix_pkt_v1: s._bugfix_pkt_v1 ?? false,
      _bugfix_pkt_v3: s._bugfix_pkt_v3 ?? false,
      _lastTickTime: s._lastTickTime ?? 0,
      _saveVersion: version,
    });

    // Version 1 backward compatibility — set defaults for fields added in v2
    if (version < 2) {
      // Future: add defaults for any new fields introduced in version 2+
    }

    // Rebuild dynamic hybrid FLOWERS entries from save data
    // Check seeds, inventory, plots, discovered for dyn_ keys
    const allKeys: string[] = ([] as string[]).concat(
      G.seeds.map((s) => s.key),
      G.inventory.map((i) => i.key),
      G.plots
        .filter((p) => p.key)
        .map((p) => p.key as string),
      G.discovered,
    );

    for (const k of allKeys) {
      if (k && k.startsWith('dyn_') && !(k in FLOWERS)) {
        // Parse parent keys from dyn_key1_key2
        const parts = k.slice(4).split('_');
        // Find the split point — keys can contain underscores so try all splits
        for (let si = 1; si < parts.length; si++) {
          const p1 = parts.slice(0, si).join('_');
          const p2 = parts.slice(si).join('_');
          if ((p1 in FLOWERS) && (p2 in FLOWERS)) {
            getOrCreateDynamicHybrid(p1, p2, FLOWERS);
            break;
          }
        }
      }
    }

    return true;
  } catch (e) {
    const msg = `[Garden] Load failed — save data may be corrupted: ${e}`;
    console.error(msg, e);
    if (onSaveError) {
      onSaveError(msg);
    }
    return false;
  }
}
