// ══════════════════════════════════════════════════════════
// PLANTING / BLOOM / INVENTORY — seed tray, planting,
// bloom inspection, Garden House storage & selling
// Extracted from game.js for modular use
// ════════════════════════════════════��═════════════════════

import type { GameState, FlowerDef, InventoryItem } from './types';
import { openModal, closeModal, toast } from './modals';
import { RARITY_LABEL, MAX_STAGE } from './constants';

// ── Bridges to game.js globals ────────────────────────────
const G = (window as any).__G as GameState;
const FLOWERS: Record<string, FlowerDef> = (window as any).__FLOWERS ?? {};
const saveG: () => void = (window as any).__saveG ?? (() => {});
const playSound: (id: string) => void = (window as any).__playSound ?? (() => {});
const haptic: (ms: number) => void = (window as any).__haptic ?? (() => {});
const flowerSVG: (key: string, stage: number) => string =
  (window as any).__flowerSVG ?? (() => '');
const updateHUD: () => void = (window as any).__updateHUD ?? (() => {});
const renderGarden: () => void = (window as any).__renderGarden ?? (() => {});
const clearPlot: (i: number) => void = (window as any).__clearPlot ?? (() => {});
const canHybridize: (i: number) => boolean =
  (window as any).__canHybridize ?? (() => false);
const checkAchievements: () => void =
  (window as any).__checkAchievements ?? (() => {});
const renderNPCs: () => void = (window as any).__renderNPCs ?? (() => {});
const renderMilestoneSection: () => void =
  (window as any).__renderMilestoneSection ?? (() => {});
const spawnSparkle: (x: number, y: number, emoji: string) => void =
  (window as any).__spawnSparkle ?? (() => {});
const openHybridModal: (i: number) => void =
  (window as any).__openHybridModal ?? (() => {});

// ── Flower appreciation value (time-based) ────────────────
export function getAppreciatedValue(item: InventoryItem): number {
  const f = FLOWERS[item.key];
  if (!f) return 0;
  const base = f.sell;
  const storedAt = item.storedAt || Date.now();
  const hours = (Date.now() - storedAt) / 3600000;
  const mult = Math.min(2, 1 + hours * 0.1); // 10% per hour, cap 2x
  return Math.round(base * mult);
}

// ── Render the seed tray ──────────────────────────────────
export function renderTray(): void {
  const tray = document.getElementById('trayItems');
  if (!tray) return;

  if (!G.seeds.length) {
    tray.textContent = '';
    const empty = document.createElement('div');
    empty.className = 'tray-empty';
    empty.textContent = 'No seeds! Open a packet from the Packets button above.';
    tray.appendChild(empty);
    return;
  }

  tray.textContent = '';
  const groups: Record<string, number> = {};
  G.seeds.forEach((s) => {
    groups[s.key] = (groups[s.key] || 0) + 1;
  });

  Object.entries(groups).forEach(([key, cnt]) => {
    const f = FLOWERS[key];
    if (!f) return;
    const chip = document.createElement('div');
    chip.className = `seed-chip ${f.rarity}`;
    // Trusted game-rendered SVG content
    chip.insertAdjacentHTML('beforeend',
      `<div class="chip-svg">${flowerSVG(key, 1)}</div>
      <span class="chip-name">${f.name}</span>
      ${cnt > 1 ? `<span class="chip-cnt">x${cnt}</span>` : ''}`,
    );
    tray.appendChild(chip);
  });
}

// ── Open the plant-seed modal for a plot ──────────────────
export function openPlantModal(plotIdx: number): void {
  G.plantPlot = plotIdx;
  const list = document.getElementById('plantList');
  if (!list) return;
  list.textContent = '';

  const groups: Record<string, number> = {};
  G.seeds.forEach((s) => {
    groups[s.key] = (groups[s.key] || 0) + 1;
  });

  Object.entries(groups).forEach(([key, cnt]) => {
    const f = FLOWERS[key];
    if (!f) return;
    const btn = document.createElement('button');
    btn.className = `plant-row ${f.rarity}`;
    // Trusted game data rendered into HTML
    btn.insertAdjacentHTML('beforeend',
      `<div class="pr-svg">${flowerSVG(key, 2)}</div>
      <div class="pr-info">
        <div class="pr-name">${f.name}</div>
        <div class="pr-sub">${RARITY_LABEL[f.rarity]} \u00b7 sells for <span class="ic">C</span>${f.sell}</div>
        <div class="pr-cnt">x${cnt} in your tray</div>
      </div>
      <span class="pr-badge ${f.rarity}">${RARITY_LABEL[f.rarity]}</span>`,
    );
    btn.onclick = () => plantSeed(key, plotIdx);
    list.appendChild(btn);
  });

  openModal('plantOverlay');
}

// ── Plant a seed in a plot ────────────────────────────────
export function plantSeed(key: string, plotIdx: number): void {
  const idx = G.seeds.findIndex((s) => s.key === key);
  if (idx === -1) return;
  if (plotIdx < 0 || plotIdx >= G.plots.length) return;
  if (!G.discovered.includes(key)) G.discovered.push(key);
  G.seeds.splice(idx, 1);
  G.plots[plotIdx] = {
    id: plotIdx,
    state: 'growing',
    key,
    stage: 0,
    waters: 0,
    rewarded: false,
  };
  closeModal('plantOverlay');
  playSound('plant');
  haptic(40);
  renderGarden();
  renderTray();
  saveG();
  toast(`${FLOWERS[key].name} planted! \uD83D\uDCA7 Water it to grow!`, 2000);
}

// ── Open the bloom inspection modal ───────────────────────
export function openBloomModal(i: number): void {
  G.bloomPlot = i;
  const f = FLOWERS[G.plots[i].key!];
  if (!f) return;

  const bloomFlEl = document.getElementById('bloomFlEl');
  if (bloomFlEl) {
    bloomFlEl.textContent = '';
    // Trusted SVG from game renderer
    bloomFlEl.insertAdjacentHTML('beforeend', flowerSVG(G.plots[i].key!, MAX_STAGE));
  }

  const bloomTitle = document.getElementById('bloomTitle');
  if (bloomTitle) bloomTitle.textContent = `${f.name} is fully bloomed! \uD83C\uDF89`;

  // Rarity badge
  const badge = document.getElementById('bloomBadge');
  if (badge) {
    badge.textContent = RARITY_LABEL[f.rarity];
    badge.className = `bloom-badge ${f.rarity}`;
  }

  // Atmospheric glow color keyed to rarity
  const glowColors: Record<string, string> = {
    common: '#9a9488', uncommon: '#9575cd', rare: '#5c7fbf',
    legendary: '#d4a03a', unique: '#b03068', hybrid: '#66bb6a',
  };
  const bloomGlow = document.getElementById('bloomGlow');
  if (bloomGlow) bloomGlow.style.background = glowColors[f.rarity] || '#9a9488';

  // Rarity-correct sub message
  const bloomSub = document.getElementById('bloomSub');
  if (bloomSub) {
    bloomSub.textContent =
      f.rarity === 'unique'
        ? `\uD83D\uDC8E A unique ${f.name} \u2014 the only one of its kind in the entire world! \uD83C\uDF1F\uD83D\uDC8E`
        : f.rarity === 'legendary'
          ? `\u2726 A legendary ${f.name} \u2014 one of the rarest blooms! Truly extraordinary! \uD83C\uDF1F`
          : f.rarity === 'rare'
            ? `\u2605 A rare ${f.name} \u2014 gorgeous and hard to find! \uD83D\uDC99`
            : f.rarity === 'uncommon'
              ? `Your ${f.name.toLowerCase()} is absolutely stunning! \uD83D\uDC95`
              : `Beautiful! Your ${f.name.toLowerCase()} is glowing! \uD83C\uDF38`;
  }

  const sellBtn = document.getElementById('btnSell') as HTMLButtonElement | null;
  const canHyb = canHybridize(i);
  if (sellBtn) {
    if (canHyb) {
      sellBtn.textContent = '\uD83E\uDDEC Fuse with neighbor';
      sellBtn.onclick = () => {
        closeModal('bloomOverlay');
        openHybridModal(i);
      };
      sellBtn.style.display = '';
    } else {
      sellBtn.style.display = 'none';
    }
  }

  const storeBtn = document.getElementById('btnStore');
  if (storeBtn) storeBtn.onclick = () => storeFlower();
  const leaveBtn = document.getElementById('btnLeave');
  if (leaveBtn) {
    leaveBtn.onclick = () => {
      closeModal('bloomOverlay');
      toast('Left in pot \u2014 fuse when a neighbor blooms! \uD83C\uDF38', 2000);
    };
  }

  // Direct sell: find a matching NPC wanting this flower
  const existingDirectBtn = document.getElementById('btnDirectSell');
  if (existingDirectBtn) existingDirectBtn.remove();

  const flowerKey = G.plots[i].key!;
  const matchingNpc = G.npcs.find((npc) => {
    if (npc.wildcard) return FLOWERS[flowerKey] && FLOWERS[flowerKey].rarity === npc.requestRarity;
    return npc.requestKey === flowerKey;
  });

  if (matchingNpc) {
    const directBtn = document.createElement('button');
    directBtn.id = 'btnDirectSell';
    directBtn.className = 'btn-store';
    directBtn.style.cssText =
      'background:linear-gradient(135deg,#f9a825,#ff8f00);color:#fff;font-weight:700;border:none;';
    directBtn.textContent = '\uD83D\uDCB0 Sell to ' + matchingNpc.name + ' for ' + matchingNpc.reward + ' coins!';
    directBtn.onclick = () => {
      if (G.bloomPlot === null) return;
      const key = G.plots[G.bloomPlot].key!;
      const fSold = FLOWERS[key];
      if (!fSold) return;
      if (!G.discovered.includes(key)) G.discovered.push(key);
      // Remove NPC
      const npcIdx = G.npcs.findIndex((n) => n.id === matchingNpc.id);
      if (npcIdx !== -1) {
        G.coins += matchingNpc.reward;
        G.totalCoins += matchingNpc.reward;
        G.totalSold++;
        G.npcSales++;
        G.npcStreak++;
        if (G.npcStreak > G.npcBestStreak) G.npcBestStreak = G.npcStreak;
        G.npcs.splice(npcIdx, 1);
      }
      clearPlot(G.bloomPlot);
      G.bloomPlot = null;
      closeModal('bloomOverlay');
      updateHUD();
      renderNPCs();
      saveG();
      playSound('sale');
      haptic(50);
      toast(matchingNpc.name + ' loved the ' + fSold.name + '! +' + matchingNpc.reward + ' coins \uD83D\uDCB0', 2500);
      spawnSparkle(window.innerWidth / 2, window.innerHeight * 0.3, '\u2728');
      checkAchievements();
    };
    const actions = document.querySelector('.bloom-actions');
    if (actions) actions.insertBefore(directBtn, actions.firstChild);
  }

  openModal('bloomOverlay');

  // Delay action buttons to prevent accidental taps from spam-tapping the pot
  const actions = document.querySelector('.bloom-actions');
  if (actions) {
    actions.classList.remove('active');
    setTimeout(() => actions.classList.add('active'), 1500);
  }
}

// ── Store a bloomed flower into Garden House ──────────────
export function storeFlower(): void {
  if (G.bloomPlot === null) return;
  const key = G.plots[G.bloomPlot].key!;
  const f = FLOWERS[key];
  if (!f) return;
  if (!G.discovered.includes(key)) G.discovered.push(key);
  G.seedId++;
  G.inventory.push({ key, uid: G.seedId, storedAt: Date.now() });
  clearPlot(G.bloomPlot);
  G.bloomPlot = null;
  closeModal('bloomOverlay');
  updateHUD();
  saveG();
  checkAchievements();
  toast(`${f.name} stored in Garden House! \uD83C\uDFE1`, 2000);
}

// ── Open inventory (Garden House) modal ───────────────────
export function openInventoryModal(): void {
  renderMilestoneSection();
  const grid = document.getElementById('invGrid');
  const hdr = document.getElementById('invHeader');
  if (!grid) return;

  if (hdr) {
    hdr.textContent = G.inventory.length
      ? `${G.inventory.length} flower${G.inventory.length !== 1 ? 's' : ''} in Garden House`
      : 'Garden House is empty';
  }

  grid.textContent = '';
  if (!G.inventory.length) {
    const empty = document.createElement('div');
    empty.className = 'tray-empty';
    empty.textContent = 'Garden House is empty. Tap a bloomed flower and choose Store to keep it here for selling to NPCs!';
    grid.appendChild(empty);
    openModal('invOverlay');
    return;
  }

  G.inventory.forEach((item) => {
    const f = FLOWERS[item.key];
    if (!f) return;
    const card = document.createElement('div');
    card.className = 'inv-card ' + f.rarity;
    const rarLabel =
      f.rarity === 'legendary'
        ? '\u2726 Legendary'
        : f.rarity === 'unique'
          ? '\u25c6 Unique'
          : f.rarity.charAt(0).toUpperCase() + f.rarity.slice(1);
    const appVal = getAppreciatedValue(item);
    const appreciated = appVal > f.sell;
    // Trusted game data rendered via insertAdjacentHTML
    card.insertAdjacentHTML('beforeend',
      `<div class="inv-fl">${flowerSVG(item.key, MAX_STAGE)}</div>` +
      `<div class="inv-name">${f.name}</div>` +
      `<div class="inv-badge ${f.rarity}">${rarLabel}</div>` +
      `<div class="inv-sell-val"><span class="ic">C</span>${appVal}` +
      (appreciated ? ` <span class="inv-appreciate">\u2191</span>` : '') +
      `</div>`,
    );
    grid.appendChild(card);
  });

  openModal('invOverlay');
}

// ── Sell a flower from inventory ──────────────────────────
export function sellFromInventory(uid: number): void {
  const idx = G.inventory.findIndex((x) => x.uid === uid);
  if (idx === -1) return;
  const f = FLOWERS[G.inventory[idx].key];
  if (!f) return;
  G.coins += f.sell;
  G.inventory.splice(idx, 1);
  updateHUD();
  saveG();
  toast(`Sold ${f.name} for ${f.sell} coins! \uD83D\uDCB0`, 2000);
  openInventoryModal();
}
