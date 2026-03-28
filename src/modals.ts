// ══════════════════════════════════════════════════════════
// MODAL MANAGEMENT — open / close overlays + toast
// Extracted from game.js for modular use
// ══════════════════════════════════════════════════════════

import type { GameState } from './types';

const G = (window as any).__G as GameState;

let toastTimer: ReturnType<typeof setTimeout> | undefined;
let _modalOpenTime = 0;

// Forward-declared helpers that live in other modules (still in game.js)
const updateHUD = (): void => (window as any).__updateHUD?.();
const saveG = (): void => (window as any).__saveG?.();
const renderTray = (): void => (window as any).__renderTray?.();

export function openModal(id: string): void {
  document.querySelectorAll<HTMLElement>('.overlay.on').forEach((o) => {
    if (o.id !== id) {
      if (o.id === 'pktOverlay' && G.opening && !G.openedKey) {
        G.pkt[G.pendingPktType] += G.pendingPktQty ?? 1;
        G.opening = false;
        updateHUD();
        saveG();
      }
      o.classList.remove('on');
    }
  });
  document.getElementById(id)?.classList.add('on');
  _modalOpenTime = Date.now();
  if (id !== 'pktOverlay') G.opening = false;
}

export function closeModal(id: string): void {
  // Refund packet if closed mid-animation before seed was revealed
  if (id === 'pktOverlay' && G.opening && !G.openedKey) {
    G.pkt[G.pendingPktType] += G.pendingPktQty ?? 1;
    G.opening = false;
    updateHUD();
    saveG();
  }
  // Auto-collect seed if packet result is showing but user tapped away
  if (id === 'pktOverlay' && G.openedKey) {
    if (!G.discovered.includes(G.openedKey)) G.discovered.push(G.openedKey);
    G.seeds.push({ id: G.seedId++, key: G.openedKey });
    G.openedKey = null;
    G.opening = false;
    renderTray();
    saveG();
    toast('Seed auto-collected! \u{1F331}', 1200);
  }
  document.getElementById(id)?.classList.remove('on');
}

export function getModalOpenTime(): number {
  return _modalOpenTime;
}

export function toast(msg: string, ms = 2000): void {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), ms);
}
