// SVG helper functions for flower rendering — pure string builders, no DOM or game state.
// Extracted from game.js for reuse and type safety.

import { lighter, darker } from "./color-utils";
import type { FlowerDef } from "./types";

// ── Shadow / ground constants ──────────────────────────────────

/** Ground shadow ellipse (y=99, larger). */
export const _sh = `<ellipse cx="30" cy="99" rx="13" ry="4" fill="#6d4c41" opacity=".28"/>`;

/** Ground shadow ellipse (y=97, slightly smaller — used for stage-1 buds). */
export const _sh1 = `<ellipse cx="30" cy="97" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/>`;

// ── SVG wrapper ────────────────────────────────────────────────

/** Wraps inner SVG content in a 60x100 viewBox SVG element. */
export function _svg(body: string): string {
  return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
}

// ── Stem ───────────────────────────────────────────────────────

/** Stem SVG — thin line for full height + thick trunk rect visible below the leaf shapes. */
export function _stem(S: string, sw: number, y2: number): string {
  return (
    `<line x1="30" y1="92" x2="30" y2="${y2}" stroke="${S}" stroke-width="${sw}" stroke-linecap="round"/>` +
    `<rect x="26.5" y="75" width="7" height="17" rx="3.5" fill="${S}"/>`
  );
}

// ── Leaf ───────────────────────────────────────────────────────

/** Pair of symmetrical leaves on each side of the stem. */
export function _leaf(S: string): string {
  return `<path d="M30 76 Q12 64 10 50 Q23 57 30 70" fill="${S}"/><path d="M30 76 Q48 64 50 50 Q37 57 30 70" fill="${S}"/>`;
}

// ── Flower color extraction ────────────────────────────────────

export interface FlowerColors {
  p: string;
  pl: string;
  pll: string;
  pd: string;
  S: string;
  SD: string;
  rare: boolean;
}

/** Extracts computed flower colors from a FlowerDef. */
export function _fc(f: FlowerDef): FlowerColors {
  const p = f.petal,
    S = f.stem;
  return {
    p,
    S,
    pl: lighter(p),
    pll: lighter(p, 85),
    pd: darker(p),
    SD: darker(S, 25),
    rare: f.rarity === "rare" || f.rarity === "unique",
  };
}

// ── Glow aura (rare/unique flowers) ────────────────────────────

/** Decorative aura ring rendered behind rare/unique flowers. Returns empty string for non-rare. */
export function _aura(cy: number, r: number, pll: string, rare: boolean): string {
  if (!rare) return "";
  return (
    `<circle cx="30" cy="${cy}" r="${r}" fill="${pll}" opacity=".4"/>` +
    `<circle cx="30" cy="${cy}" r="${r}" fill="none" stroke="#7986cb" stroke-width="2" stroke-dasharray="4 3" opacity=".65"/>` +
    `<text x="30" y="${cy - r + 7}" text-anchor="middle" font-size="7" fill="#5c6bc0" opacity=".9">✦ ✦ ✦</text>`
  );
}

// ── Petal ring ─────────────────────────────────────────────────

/** Renders `n` ellipse petals evenly rotated around (30, cy). */
export function _ring(n: number, rx: number, ry: number, cy: number, fill: string, sc?: number): string {
  sc = sc || 1;
  const parts: string[] = [];
  for (let i = 0; i < n; i++) {
    const a = ((360 / n) * i).toFixed(1);
    parts.push(`<ellipse cx="30" cy="${(cy - ry * sc).toFixed(1)}" rx="${(rx * sc).toFixed(1)}" ry="${(ry * sc).toFixed(1)}" fill="${fill}" transform="rotate(${a},30,${cy})"/>`);
  }
  return parts.join("");
}
