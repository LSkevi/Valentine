// ══════════════════════════════════════════════════════════
// SHOP — buy packets, pots, water upgrades
// Extracted from game.js for modular use
// ══════════════════════════════════════════════════════════

import type { GameState, FlowerDef, PacketType } from './types';
import { openModal, closeModal, toast } from './modals';
import {
  PKT_COST,
  PKT_LABEL,
  PKT_ICON,
  POT_PRICES,
  MAX_PLOTS,
  WATER_CAP_UPGRADES,
} from './constants';

// ── Bridges to game.js globals ────────────────────────────
const G = (window as any).__G as GameState;
const saveG: () => void = (window as any).__saveG ?? (() => {});
const playSound: (id: string) => void = (window as any).__playSound ?? (() => {});
const haptic: (ms: number) => void = (window as any).__haptic ?? (() => {});
const updateHUD: () => void = (window as any).__updateHUD ?? (() => {});
const renderDrops: () => void = (window as any).__renderDrops ?? (() => {});
const renderGarden: () => void = (window as any).__renderGarden ?? (() => {});
const showContextTip: (key: string) => void =
  (window as any).__showContextTip ?? (() => {});

// ── Open shop modal ───────────────────────────────────────
export function openShopModal(): void {
  updateShopWater();
  updateShopPot();
  showContextTip('firstShop');
  openModal('shopOverlay');
}

// ── Buy a seed packet ─────────────────────────────────────
export function buyPacket(type: PacketType): void {
  const cost = PKT_COST[type];
  if (G.coins < cost) {
    toast(`Need ${cost} coins for a ${PKT_LABEL[type]} Packet! \uD83D\uDCB0`, 2000);
    return;
  }
  G.coins -= cost;
  G.pkt[type]++;
  updateHUD();
  closeModal('shopOverlay');
  playSound('buy');
  saveG();
  toast(`${PKT_ICON[type]} ${PKT_LABEL[type]} Packet bought!`, 1600);
}

// ── Buy an extra pot ──────────────────────────────────────
export function buyPot(): void {
  const n = G.plots.length;
  if (n >= MAX_PLOTS) return;
  const cost = POT_PRICES[n] || 600;
  if (G.coins < cost) {
    toast(`Need ${cost} coins for a new pot! \uD83D\uDCB0`, 2000);
    return;
  }
  G.coins -= cost;
  G.plots.push({
    id: n,
    state: 'empty',
    key: null,
    stage: 0,
    waters: 0,
    rewarded: false,
  });
  updateHUD();
  renderGarden();
  updateShopPot();
  playSound('buy');
  haptic(50);
  saveG();
  toast('New pot added! You now have ' + G.plots.length + ' pots \uD83C\uDF3F', 2000);
}

// ── Buy water-capacity upgrade ────────────────────────────
export function buyWaterUpgrade(): void {
  const upgrade = WATER_CAP_UPGRADES.find((u) => G.maxWater < u.cap);
  if (!upgrade) return;
  if (G.coins < upgrade.cost) {
    toast('Need ' + upgrade.cost + ' coins for water upgrade!', 2000);
    return;
  }
  G.coins -= upgrade.cost;
  G.maxWater = upgrade.cap;
  updateHUD();
  renderDrops();
  updateShopWater();
  playSound('buy');
  saveG();
  toast('Water capacity upgraded to ' + G.maxWater + '! \uD83D\uDCA7', 2000);
}

// ── Refresh water-upgrade display in shop ─────────────────
export function updateShopWater(): void {
  const item = document.getElementById('shopWaterItem');
  const nameEl = document.getElementById('shopWaterName');
  const detailEl = document.getElementById('shopWaterDetail');
  const priceEl = document.getElementById('waterUpPrice');
  if (!item) return;
  const upgrade = WATER_CAP_UPGRADES.find((u) => G.maxWater < u.cap);
  if (!upgrade) {
    item.classList.add('sold-out');
    if (nameEl) nameEl.textContent = 'Max Capacity!';
    if (detailEl) detailEl.textContent = 'Water can fully upgraded (' + G.maxWater + ')';
    if (priceEl) priceEl.textContent = '\u2014';
  } else {
    item.classList.remove('sold-out');
    if (nameEl) nameEl.textContent = upgrade.label;
    if (detailEl) detailEl.textContent = 'Current: ' + G.maxWater + ' \u2192 ' + upgrade.cap;
    if (priceEl) priceEl.textContent = String(upgrade.cost);
  }
}

// ── Refresh pot-purchase display in shop ──────────────────
export function updateShopPot(): void {
  const n = G.plots.length;
  const item = document.getElementById('shopPotItem');
  const nameEl = document.getElementById('shopPotName');
  const detailEl = document.getElementById('shopPotDetail');
  const priceEl = document.getElementById('potPrice');
  if (!item) return;
  if (n >= MAX_PLOTS) {
    item.classList.add('sold-out');
    if (nameEl) nameEl.textContent = 'Garden Full!';
    if (detailEl) detailEl.textContent = 'All ' + MAX_PLOTS + ' pots unlocked';
    if (priceEl) priceEl.textContent = '\u2014';
  } else {
    item.classList.remove('sold-out');
    const cost = POT_PRICES[n] || 600;
    if (nameEl) nameEl.textContent = 'Pot #' + (n + 1);
    if (detailEl) detailEl.textContent = 'Expand to ' + (n + 1) + ' pots (' + n + ' now)';
    if (priceEl) priceEl.textContent = String(cost);
  }
}
