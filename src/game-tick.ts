// ══════════════════════════════════════════════════════════
// GAME TICK — main 1-second game loop
// Extracted from game.js for modular use
// ══════════════════════════════════════════════════════════

import type { FlowerDef } from './types';
import { PKT_COST } from './constants';
import { tickWeather, rainAutoWater } from './weather';

// ── Bridges to legacy globals ─────────────────────────────
const G = (window as any).__G;
const FLOWERS: Record<string, FlowerDef> = (window as any).__FLOWERS ?? {};
const saveG = (window as any).__saveG ?? (() => {});
const playSound = (window as any).__playSound ?? (() => {});
const toast = (window as any).__toast ?? ((_msg: string, _ms?: number) => {});
const updateHUD = (window as any).__updateHUD ?? (() => {});
const updatePlotCard = (window as any).__updatePlotCard ?? ((_i: number) => {});
const tickNPCs = (window as any).__tickNPCs ?? (() => {});
const checkNightMode = (window as any).__checkNightMode ?? (() => {});
const updateParticleVisibility = (window as any).__updateParticleVisibility ?? (() => {});
const checkAchievements = (window as any).__checkAchievements ?? (() => {});
const applyBgStyle = (window as any).__applyBgStyle ?? (() => {});

// ── Save throttling (Bug fix #5) ─────────────────────────
let _saveDirty = false;
let _saveFlushCounter = 0;
const SAVE_FLUSH_INTERVAL = 5; // flush every 5 seconds

export function markDirty(): void {
  _saveDirty = true;
}

function flushSave(): void {
  if (_saveDirty) {
    _saveDirty = false;
    saveG();
  }
}

// ── Internal counters ─────────────────────────────────────
let _rainWaterCounter = 0;
let _tickCounter = 0;

// ── Main game tick — runs every 1 second ──────────────────
export function gameTick(): void {
  _tickCounter++;

  // Persist last tick time via throttled save
  if (_tickCounter % 30 === 0) {
    G._lastTickTime = Date.now();
    markDirty();
  }

  tickNPCs();
  tickWeather();

  // Rain auto-water every 60 ticks (60s)
  _rainWaterCounter++;
  if (_rainWaterCounter >= 60) {
    _rainWaterCounter = 0;
    rainAutoWater();
  }

  // Snow frost nip: ~0.3% chance per tick to nip a growing flower (lose 1 water)
  if (G.weather === "snowy" && Math.random() < 0.003) {
    const growingPlots: number[] = G.plots
      .map((p: any, idx: number) => (p.state === "growing" ? idx : -1))
      .filter((x: number) => x >= 0);
    if (growingPlots.length > 0) {
      const frostIdx = growingPlots[Math.floor(Math.random() * growingPlots.length)];
      if (G.plots[frostIdx].waters > 0) {
        G.plots[frostIdx].waters--;
        playSound("frost_nip");
        toast(
          "\u2744\uFE0F Frost nipped " + FLOWERS[G.plots[frostIdx].key].name + "! Lost 1 water",
          2000,
        );
        updatePlotCard(frostIdx);
        markDirty();
      }
    }
  }

  // Softlock safety net: if player is totally broke, gift a packet
  const totalPkt = Object.values(G.pkt).reduce(
    (a: number, b: number) => a + b,
    0,
  ) as number;
  const hasAnyFlower = G.plots.some((p: any) => p.state !== "empty");
  if (
    G.coins < PKT_COST.common &&
    totalPkt === 0 &&
    G.seeds.length === 0 &&
    G.inventory.length === 0 &&
    !hasAnyFlower
  ) {
    G.pkt.common++;
    G.coins += 5;
    updateHUD();
    markDirty();
    toast("\uD83C\uDF3A A kind neighbor left you a packet and some coins!", 3500);
    playSound("achieve");
  }

  // Track daily play
  const today = new Date().toISOString().slice(0, 10);
  if (!G.daysPlayed.includes(today)) {
    G.daysPlayed.push(today);
    markDirty();
    checkAchievements();
  }

  // Throttled save flush every 5 seconds
  _saveFlushCounter++;
  if (_saveFlushCounter >= SAVE_FLUSH_INTERVAL) {
    _saveFlushCounter = 0;
    flushSave();
  }
}

// ── Start all game loops ──────────────────────────────────
export function startGameLoop(): void {
  // Main game tick — every 1 second
  setInterval(gameTick, 1000);

  // Night mode check — every 60 seconds
  setInterval(() => {
    checkNightMode();
    updateParticleVisibility();
  }, 60000);
}
