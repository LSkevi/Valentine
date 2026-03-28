// ══════════════════════════════════════════════════════════
// COSMETICS — pot styles, backgrounds, decor, night mode
// Extracted from game.js for modular use
// ══════════════════════════════════════════════════════════

import type { GameState, PotStyleId } from './types';
import { openModal, toast } from './modals';

const G = (window as any).__G as GameState;
const playSound: (id: string) => void = (window as any).__playSound ?? (() => {});

// Forward-declared helpers that live in other modules (still in game.js)
const saveG = (): void => (window as any).__saveG?.();
const renderGarden = (): void => (window as any).__renderGarden?.();
const renderWeather = (): void => (window as any).__renderWeather?.();
const refreshPetals = (): void => (window as any).__refreshPetals?.();
const getJournalPercent = (): number => (window as any).__getJournalPercent?.() ?? 0;

// ── Data ───────────────────────────────────────────────────

export interface PotStyle {
  id: PotStyleId;
  name: string;
  icon: string;
  unlock: string;
}

export interface BgStyle {
  id: string;
  name: string;
  icon: string;
  unlock: string;
}

export interface GardenDecor {
  id: string;
  name: string;
  icon: string;
  type: 'fence' | 'item';
  pos?: Record<string, string>;
}

export const POT_STYLES: readonly PotStyle[] = [
  { id: 'terracotta', name: 'Terracotta', icon: '\u{1F3FA}', unlock: 'default' },
  { id: 'ceramic', name: 'Ceramic', icon: '\u{1F963}', unlock: '25% Journal' },
  { id: 'golden', name: 'Golden', icon: '\u{1F3C6}', unlock: '75% Journal' },
];

export const BG_STYLES: readonly BgStyle[] = [
  { id: 'default', name: 'Parchment', icon: '\u{1F4DC}', unlock: 'default' },
  { id: 'garden', name: 'Garden', icon: '\u{1F33F}', unlock: '50% Journal' },
  { id: 'enchanted', name: 'Enchanted', icon: '\u2728', unlock: '100% Journal' },
  { id: 'sunset', name: 'Sunset', icon: '\u{1F305}', unlock: '10 sales' },
  { id: 'ocean', name: 'Ocean Breeze', icon: '\u{1F30A}', unlock: '25 blooms' },
  { id: 'autumn', name: 'Autumn', icon: '\u{1F342}', unlock: '15 fusions' },
  { id: 'night', name: 'Starry Night', icon: '\u2B50', unlock: '5 days played' },
];

export const GARDEN_DECORS: readonly GardenDecor[] = [
  { id: 'fence', name: 'Wooden Fence', icon: '\u{1F33E}', type: 'fence' },
  { id: 'birdbath', name: 'Bird Bath', icon: '\u{1F426}', type: 'item', pos: { top: '-20px', right: '12px' } },
  { id: 'gnome', name: 'Garden Gnome', icon: '\u{1F344}', type: 'item', pos: { bottom: '8px', left: '12px' } },
  { id: 'butterfly_jar', name: 'Butterfly Jar', icon: '\u{1F98B}', type: 'item', pos: { top: '-20px', left: '12px' } },
  { id: 'windchime', name: 'Wind Chime', icon: '\u{1F3B5}', type: 'item', pos: { top: '-24px', left: '48%' } },
];

// ── Unlock checks ──────────────────────────────────────────

export function isPotUnlocked(id: PotStyleId): boolean {
  if (id === 'terracotta') return true;
  const pct = getJournalPercent();
  if (id === 'ceramic') return pct >= 25;
  if (id === 'golden') return pct >= 75;
  return false;
}

export function isBgUnlocked(id: string): boolean {
  if (id === 'default') return true;
  const pct = getJournalPercent();
  if (id === 'garden') return pct >= 50;
  if (id === 'enchanted') return pct >= 100;
  if (id === 'sunset') return G.npcSales >= 10;
  if (id === 'ocean') return G.totalBlooms >= 25;
  if (id === 'autumn') return G.hybridCount >= 15;
  if (id === 'night') return G.daysPlayed && G.daysPlayed.length >= 5;
  return false;
}

// ── Background gradient application ────────────────────────

export function applyBgStyle(): void {
  const canvas = document.querySelector<HTMLElement>('.bg-canvas');
  if (!canvas) return;
  document.body.classList.remove('bg-night');

  const isNight = document.body.classList.contains('night-mode');
  // BG_GRADIENTS lives in game.js — access via window bridge
  const BG_GRADIENTS = (window as any).__BG_GRADIENTS as Record<string, { day: string; night: string }> | undefined;
  const gradients = BG_GRADIENTS?.[G.bgStyle] ?? BG_GRADIENTS?.['default'] ?? { day: '', night: '' };
  const useDark = isNight || G.bgStyle === 'night';

  canvas.style.background = useDark ? gradients.night : gradients.day;
  if (useDark) document.body.classList.add('bg-night');

  // Refresh floating art to match theme
  refreshPetals();
}

// ── Garden decorations ─────────────────────────────────────

export function applyGardenDecor(): void {
  // Remove old decor item elements only (not the wrapper or grid)
  document.querySelectorAll('.garden-decor-item').forEach((el) => el.remove());
  const grid = document.getElementById('gardenGrid');
  const wrapper = document.getElementById('gardenWrap');
  if (!grid) return;
  grid.classList.remove('garden-fence');

  if (!G.gardenDecor || !G.gardenDecor.length) return;

  G.gardenDecor.forEach((id) => {
    const decor = GARDEN_DECORS.find((d) => d.id === id);
    if (!decor) return;
    if (decor.type === 'fence') {
      grid.classList.add('garden-fence');
    } else if (decor.type === 'item' && decor.pos && wrapper) {
      const el = document.createElement('div');
      el.className = 'garden-decor-item';
      el.textContent = decor.icon;
      Object.assign(el.style, decor.pos);
      wrapper.appendChild(el);
    }
  });
}

// ── Night mode ─────────────────────────────────────────────

export function checkNightMode(): boolean {
  const hour = new Date().getHours();
  const isNight = hour >= 20 || hour < 6;
  const wasNight = document.body.classList.contains('night-mode');
  document.body.classList.toggle('night-mode', isNight);

  // Override weather bar to show Moonlight at night
  const bar = document.getElementById('weatherBar');
  if (bar) {
    if (isNight) {
      bar.textContent = '\u{1F319} Moonlight';
      bar.className = 'weather-bar weather-moonlight';
    } else if (wasNight) {
      // Transitioning from night to day — restore weather
      renderWeather();
    }
  }

  // Re-apply background gradient for day/night transition
  if (isNight !== wasNight) applyBgStyle();
  return isNight;
}

// ── Customize modal ────────────────────────────────────────

export function openCustomizeModal(): void {
  const content = document.getElementById('customContent');
  if (!content) return;
  content.textContent = '';

  // Pot styles section
  const potSec = document.createElement('div');
  potSec.className = 'custom-section';
  const potTitle = document.createElement('div');
  potTitle.className = 'custom-section-title';
  potTitle.textContent = 'Pot Style';
  potSec.appendChild(potTitle);

  const potGrid = document.createElement('div');
  potGrid.className = 'custom-grid';
  POT_STYLES.forEach((ps) => {
    const unlocked = isPotUnlocked(ps.id);
    const active = G.potStyle === ps.id;
    const card = document.createElement('div');
    card.className = 'custom-card' + (active ? ' active' : '') + (unlocked ? '' : ' locked');

    const icon = document.createElement('div');
    icon.className = 'custom-card-icon';
    icon.textContent = ps.icon;
    card.appendChild(icon);

    const name = document.createElement('div');
    name.className = 'custom-card-name';
    name.textContent = ps.name;
    card.appendChild(name);

    const status = document.createElement('div');
    status.className = 'custom-card-status';
    status.textContent = active ? '\u2713 Equipped' : unlocked ? 'Tap to equip' : '\u{1F512} ' + ps.unlock;
    card.appendChild(status);

    if (unlocked && !active) {
      card.onclick = () => {
        G.potStyle = ps.id;
        saveG();
        renderGarden();
        openCustomizeModal();
        toast('Pot style: ' + ps.name + '!', 1500);
      };
    }
    potGrid.appendChild(card);
  });
  potSec.appendChild(potGrid);
  content.appendChild(potSec);

  // Background section
  const bgSec = document.createElement('div');
  bgSec.className = 'custom-section';
  const bgTitle = document.createElement('div');
  bgTitle.className = 'custom-section-title';
  bgTitle.textContent = 'Background';
  bgSec.appendChild(bgTitle);

  const bgGrid = document.createElement('div');
  bgGrid.className = 'custom-grid';
  BG_STYLES.forEach((bs) => {
    const unlocked = isBgUnlocked(bs.id);
    const active = G.bgStyle === bs.id;
    const card = document.createElement('div');
    card.className = 'custom-card' + (active ? ' active' : '') + (unlocked ? '' : ' locked');

    const icon = document.createElement('div');
    icon.className = 'custom-card-icon';
    icon.textContent = bs.icon;
    card.appendChild(icon);

    const name = document.createElement('div');
    name.className = 'custom-card-name';
    name.textContent = bs.name;
    card.appendChild(name);

    const status = document.createElement('div');
    status.className = 'custom-card-status';
    status.textContent = active ? '\u2713 Equipped' : unlocked ? 'Tap to equip' : '\u{1F512} ' + bs.unlock;
    card.appendChild(status);

    if (unlocked && !active) {
      card.onclick = () => {
        G.bgStyle = bs.id;
        applyBgStyle();
        saveG();
        openCustomizeModal();
        toast('Background: ' + bs.name + '!', 1500);
      };
    }
    bgGrid.appendChild(card);
  });
  bgSec.appendChild(bgGrid);
  content.appendChild(bgSec);

  // Garden decorations section
  const decorSec = document.createElement('div');
  decorSec.className = 'custom-section';
  const decorTitle = document.createElement('div');
  decorTitle.className = 'custom-section-title';
  decorTitle.textContent = 'Garden Decorations';
  decorSec.appendChild(decorTitle);

  const decorGrid = document.createElement('div');
  decorGrid.className = 'custom-grid';
  GARDEN_DECORS.forEach((d) => {
    const equipped = G.gardenDecor && G.gardenDecor.includes(d.id);
    // Unlock: fence at 3 pots, others at various achievement counts
    let unlocked = G.achievements && G.achievements.length >= (GARDEN_DECORS.indexOf(d) * 5 + 3);
    if (d.id === 'fence') unlocked = G.plots.length >= 3;

    const card = document.createElement('div');
    card.className = 'custom-card' + (equipped ? ' active' : '') + (unlocked ? '' : ' locked');

    const icon = document.createElement('div');
    icon.className = 'custom-card-icon';
    icon.textContent = d.icon;
    card.appendChild(icon);

    const nm = document.createElement('div');
    nm.className = 'custom-card-name';
    nm.textContent = d.name;
    card.appendChild(nm);

    const st = document.createElement('div');
    st.className = 'custom-card-status';
    st.textContent = equipped ? '\u2713 Equipped' : unlocked ? 'Tap to equip' : '\u{1F512} Locked';
    card.appendChild(st);

    if (unlocked) {
      card.onclick = () => {
        if (!G.gardenDecor) G.gardenDecor = [];
        if (equipped) {
          G.gardenDecor = G.gardenDecor.filter((x) => x !== d.id);
          if (d.type === 'fence') document.getElementById('gardenGrid')?.classList.remove('garden-fence');
        } else {
          G.gardenDecor.push(d.id);
        }
        saveG();
        applyGardenDecor();
        openCustomizeModal();
        playSound('click');
        toast(equipped ? d.name + ' removed' : d.name + ' equipped!', 1200);
      };
    }
    decorGrid.appendChild(card);
  });
  decorSec.appendChild(decorGrid);
  content.appendChild(decorSec);

  openModal('customOverlay');
}
