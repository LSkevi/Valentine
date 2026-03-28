import type { GameState } from './types';

export const SAVE_KEY = 'yurieGarden_v1';

export let G: GameState = {
  coins: 5,
  pkt: { common: 2, uncommon: 0, rare: 0, legendary: 0 },
  seeds: [],
  seedId: 0,
  plots: Array(2)
    .fill(0)
    .map((_, i) => ({
      id: i,
      state: 'empty' as const,
      key: null,
      stage: 0,
      waters: 0,
      rewarded: false,
    })),
  water: 6,
  maxWater: 6,
  inventory: [],
  bloomPlot: null,
  openedKey: null,
  plantPlot: null,
  pendingPktType: 'common',
  discovered: [],
  opening: false,
  tutorialDone: false,
  // NPC system
  npcs: [],
  npcTimer: 0,
  npcIdCounter: 0,
  // Weather
  weather: 'sunny',
  weatherTimer: 0,
  // Achievements
  achievements: [],
  // Stats
  totalSold: 0,
  totalCoins: 0,
  totalWaters: 0,
  totalBlooms: 0,
  npcSales: 0,
  npcStreak: 0,
  npcBestStreak: 0,
  hybridCount: 0,
  daysPlayed: [],
  // Cosmetics
  potStyle: 'terracotta',
  bgStyle: 'default',
  lastLoginDate: null,
  loginStreak: 0,
  gardenDecor: [],
  soundEnabled: true,
  musicEnabled: true,
  musicVolume: 0.045,
  sfxVolume: 1.0,
  breedDiscovered: [],
  mutations: [],
  contextTips: {},
};
