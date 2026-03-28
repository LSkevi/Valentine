// ══════════════════════════════════════════════════════════
// HUD — coin / packet / inventory / water drop display
// Extracted from game.js for modular use
// ══════════════════════════════════════════════════════════

import type { GameState } from './types';

const G = (window as any).__G as GameState;

/**
 * Update the top-bar HUD counters: coins, total packets, inventory size.
 */
export function updateHUD(): void {
  const coinEl = document.getElementById('coinDisp');
  if (coinEl) coinEl.textContent = String(G.coins);

  const total = Object.values(G.pkt).reduce((a, b) => a + b, 0);
  const pktEl = document.getElementById('pktDisp');
  if (pktEl) pktEl.textContent = String(total);

  const invEl = document.getElementById('invDisp');
  if (invEl) invEl.textContent = String(G.inventory.length);
}

/**
 * Render the water-drop indicators in the drop row.
 * Each drop is either 'full' or 'empty' based on current water vs maxWater.
 */
export function renderDrops(): void {
  const row = document.getElementById('dropRow');
  if (!row) return;

  // Clear existing children safely
  while (row.firstChild) {
    row.removeChild(row.firstChild);
  }

  for (let i = 0; i < G.maxWater; i++) {
    const d = document.createElement('div');
    d.className = 'wdrop ' + (i < G.water ? 'full' : 'empty');
    row.appendChild(d);
  }
}
