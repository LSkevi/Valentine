// ══════════════════════════════════════════════════════════
// GARDEN GRID — rendering, plot interaction, watering
// Extracted from game.js for modular use
// ══════════════════════════════════════════════════════════

import type { GameState, Plot, FlowerDef } from './types';
import { toast } from './modals';
import {
  STAGE_NAMES,
  STAGE_WATERS,
  MAX_STAGE,
  RARITY_LABEL,
  POT_COLORS,
} from './constants';

// ── Bridges to game.js globals ────────────────────────────
const G = (window as any).__G as GameState;
const FLOWERS: Record<string, FlowerDef> = (window as any).__FLOWERS ?? {};
const saveG: () => void = (window as any).__saveG ?? (() => {});
const playSound: (id: string) => void = (window as any).__playSound ?? (() => {});
const haptic: (ms: number) => void = (window as any).__haptic ?? (() => {});
const flowerSVG: (key: string, stage: number) => string =
  (window as any).__flowerSVG ?? (() => '');
const spawnSplash: (x: number, y: number) => void =
  (window as any).__spawnSplash ?? (() => {});
const confettiBurst: () => void = (window as any).__confettiBurst ?? (() => {});
const spawnBloomParticles: (el: Element | null, color: string) => void =
  (window as any).__spawnBloomParticles ?? (() => {});
const checkAchievements: () => void =
  (window as any).__checkAchievements ?? (() => {});
const showContextTip: (key: string) => void =
  (window as any).__showContextTip ?? (() => {});
const renderDrops: () => void = (window as any).__renderDrops ?? (() => {});
const openPlantModal: (idx: number) => void =
  (window as any).__openPlantModal ?? (() => {});
const openBloomModal: (idx: number) => void =
  (window as any).__openBloomModal ?? (() => {});

// ── Water requirement (weather-dependent) ─────────────────
export function watersNeeded(): number {
  if (G.weather === 'drought') return Math.ceil(STAGE_WATERS * 1.5);
  if (G.weather === 'sunny') return Math.max(2, STAGE_WATERS - 1);
  return STAGE_WATERS;
}

// ── Adjacent bloomed plots (grid is 3 columns) ───────────
export function getAdjacentBloomed(plotIdx: number): number[] {
  const col = plotIdx % 3;
  const row = Math.floor(plotIdx / 3);
  const adj: number[] = [];
  if (col > 0) adj.push(plotIdx - 1);
  if (col < 2) adj.push(plotIdx + 1);
  if (row > 0) adj.push(plotIdx - 3);
  if (plotIdx + 3 < G.plots.length) adj.push(plotIdx + 3);
  return adj.filter((i) => G.plots[i] && G.plots[i].state === 'bloomed');
}

// ── Can this plot hybridize with a neighbor? ──────────────
export function canHybridize(plotIdx: number): boolean {
  if (!G.plots[plotIdx] || G.plots[plotIdx].state !== 'bloomed') return false;
  return getAdjacentBloomed(plotIdx).length > 0;
}

// ── Pot SVG (terracotta / ceramic / golden) ───────────────
// NOTE: This returns trusted SVG markup built from game constants — no user input.
export function potCardSVG(p: Plot): string {
  const colors = POT_COLORS[G.potStyle] || POT_COLORS.terracotta;
  const { rH, rM, rD, bM, bS } = colors;
  const sl = '#4e342e';
  const sm = '#3e2723';
  const sd = '#2a1810';

  // Flower nested into upper 64px of the 103-tall viewBox
  let flPart = '';
  if (p.state !== 'empty') {
    const stage = p.state === 'bloomed' ? MAX_STAGE : p.stage;
    const fsvg = flowerSVG(p.key!, stage);
    flPart = fsvg.replace(/^<svg /, '<svg x="7" y="0" width="66" height="64" ');
  } else {
    flPart =
      `<text x="40" y="42" text-anchor="middle" font-size="19"
      fill="rgba(175,100,55,.42)" font-weight="bold">+</text>
      <text x="40" y="54" text-anchor="middle" font-size="6.5"
      fill="rgba(175,100,55,.38)" font-weight="bold">tap to plant</text>`;
  }

  // Progress bar (growing/bloomed states)
  let barEl = '';
  if (p.state !== 'empty') {
    const totalSteps = MAX_STAGE * STAGE_WATERS;
    const doneSteps = p.stage * STAGE_WATERS + p.waters;
    const barPct =
      p.state === 'bloomed' ? 100 : Math.round((doneSteps / totalSteps) * 100);
    const barW = Math.round((barPct * 50) / 100);
    barEl =
      `<rect x="15" y="93.5" width="50" height="3" rx="1.5" fill="rgba(0,0,0,.2)"/>
      <rect x="15" y="93.5" width="${barW}" height="3" rx="1.5" fill="#81c784"/>`;
  }

  // Pips (watering progress dots)
  let pipEls = '';
  if (p.state === 'growing') {
    for (let w = 0; w < STAGE_WATERS; w++) {
      const cx = 52 + w * 8;
      const on = w < p.waters;
      pipEls += `<circle cx="${cx}" cy="9" r="4"
        fill="${on ? '#64b5f6' : 'rgba(255,255,255,.3)'}"
        filter="drop-shadow(0 1px 2px rgba(0,0,0,.4))"/>`;
    }
  }

  // Rare/legendary crown badge
  const _rar = p.state !== 'empty' ? FLOWERS[p.key!].rarity : '';
  const crownEl =
    _rar === 'unique'
      ? `<rect x="4" y="3" width="22" height="13" rx="3" fill="rgba(233,30,99,.92)"/>
      <text x="15" y="12.5" text-anchor="middle" font-size="6.5"
        fill="#fff" font-weight="bold">\u25c6 U</text>`
      : _rar === 'legendary'
        ? `<rect x="4" y="3" width="22" height="13" rx="3" fill="rgba(230,81,0,.88)"/>
      <text x="15" y="12.5" text-anchor="middle" font-size="6.5"
        fill="#fff" font-weight="bold">\u2726 L</text>`
        : _rar === 'rare'
          ? `<rect x="4" y="3" width="22" height="13" rx="3" fill="rgba(25,118,210,.86)"/>
      <text x="15" y="12.5" text-anchor="middle" font-size="6.5"
        fill="#fff" font-weight="bold">\u2605 R</text>`
          : '';

  return `<svg class="pot-svg" viewBox="0 0 80 106"
    fill="none" xmlns="http://www.w3.org/2000/svg">
    ${flPart}
    ${pipEls}
    ${crownEl}
    <!-- Rim top highlight -->
    <rect x="8" y="59" width="64" height="4" rx="2.5" fill="${rH}"/>
    <!-- Rim main body -->
    <rect x="8" y="61" width="64" height="9" rx="3.5" fill="${rM}"/>
    <!-- Rim underside shadow -->
    <rect x="9" y="67" width="62" height="3" rx="2" fill="${rD}" opacity=".5"/>
    <!-- Pot body (trapezoid) -->
    <path d="M13 70 L11 90 Q11 97 19 97 L61 97 Q69 97 69 90 L67 70 Z" fill="${bM}"/>
    <!-- Left shine stripe -->
    <path d="M17 70 L15 87 Q15 92 17.5 93.5"
      stroke="rgba(255,210,170,.28)" stroke-width="3.5"
      fill="none" stroke-linecap="round"/>
    <!-- Right shade stripe -->
    <path d="M63 70 L65 87 Q65 92 62.5 93.5"
      stroke="rgba(0,0,0,.14)" stroke-width="2.5"
      fill="none" stroke-linecap="round"/>
    <!-- Center shine dot -->
    <ellipse cx="24" cy="76" rx="3.5" ry="6" fill="rgba(255,210,170,.16)" transform="rotate(-6,24,76)"/>
    <!-- Dark base band -->
    <path d="M11 89 L11 90 Q11 97 19 97 L61 97 Q69 97 69 90 L69 89 Z" fill="${bS}"/>
    <!-- Pot foot / base ridge -->
    <rect x="14" y="95" width="52" height="4" rx="2" fill="${bS}" opacity=".7"/>
    <!-- Ground shadow ellipse -->
    <ellipse cx="40" cy="103" rx="24" ry="3.5" fill="rgba(0,0,0,.18)"/>
    ${colors.deco || ''}
    <!-- Soil surface layers -->
    <ellipse cx="40" cy="66" rx="28" ry="7.5" fill="${sl}"/>
    <ellipse cx="40" cy="64" rx="25" ry="6"   fill="${sm}"/>
    <ellipse cx="40" cy="63" rx="20" ry="4.5" fill="${sd}"/>
    <!-- Soil texture dots -->
    <circle cx="35" cy="63" r="1.5" fill="${sl}" opacity=".6"/>
    <circle cx="44" cy="62" r="1.2" fill="${sl}" opacity=".5"/>
    <circle cx="30" cy="64" r="1"   fill="${sl}" opacity=".4"/>
    ${barEl}
  </svg>`;
}

// ── Build a single plot tile element ──────────────────────
export function buildPlotCard(p: Plot, i: number): HTMLDivElement {
  const div = document.createElement('div');
  div.className =
    'plot' +
    (p.state === 'bloomed'
      ? ' bloomed'
      : p.state === 'growing'
        ? ' has-plant'
        : '');
  div.onclick = () => clickPlot(i);
  const lbl =
    p.state === 'empty'
      ? ''
      : p.state === 'bloomed'
        ? '\u2728 ' + FLOWERS[p.key!].name
        : STAGE_NAMES[p.stage];
  const canFuse = p.state === 'bloomed' && canHybridize(i);
  const hybBadge = canFuse
    ? '<div class="hybridize-badge">\uD83E\uDDEC Fuse!</div>'
    : '';
  if (canFuse) showContextTip('firstFusion');
  // All markup here is built from trusted game data, not user input
  div.insertAdjacentHTML(
    'beforeend',
    potCardSVG(p) +
      (lbl ? '<div class="pot-lbl">' + lbl + '</div>' : '') +
      hybBadge,
  );
  return div;
}

// ── Click handler for a plot tile ─────────────────────────
export function clickPlot(i: number): void {
  const p = G.plots[i];
  if (p.state === 'empty') {
    if (!G.seeds.length) {
      toast('No seeds! Open a packet first \uD83D\uDCE6', 2000);
      return;
    }
    openPlantModal(i);
  } else if (p.state === 'bloomed') {
    openBloomModal(i);
  } else {
    waterPlot(i);
  }
}

// ── Water a growing plot ──────────────────────────────────
export function waterPlot(i: number): void {
  if (G.water <= 0) {
    toast('No water! Pump more at the well \uD83D\uDEB0', 2000);
    return;
  }
  G.water--;
  G.plots[i].waters++;
  G.totalWaters++;
  renderDrops();
  playSound('water');
  haptic(30);

  // Capture splash position and trigger animation before any DOM replacement
  const grid = document.getElementById('gardenGrid')!;
  const oldTile = grid.children[i] as HTMLElement | undefined;
  if (oldTile) {
    const r = oldTile.getBoundingClientRect();
    spawnSplash(r.left + r.width / 2, r.top + r.height / 3);
  }

  if (G.plots[i].waters >= watersNeeded()) {
    G.plots[i].waters = 0;
    G.plots[i].stage++;
    if (G.plots[i].stage >= MAX_STAGE) {
      G.plots[i].stage = MAX_STAGE;
      G.plots[i].state = 'bloomed';
      G.totalBlooms++;
      G.plots[i].rewarded = true;
      saveG();
      checkAchievements();
      // Animate old tile while bloom delay plays out
      if (oldTile) {
        oldTile.classList.add('watered');
        setTimeout(() => oldTile.classList.remove('watered'), 380);
      }
      setTimeout(() => {
        updatePlotCard(i);
        confettiBurst();
        // Spawn petal-colored bloom particles
        const grid2 = document.getElementById('gardenGrid');
        const plotEl = grid2 ? grid2.children[i] : null;
        const bKey = G.plots[i].key!;
        spawnBloomParticles(
          plotEl as Element | null,
          FLOWERS[bKey] ? FLOWERS[bKey].petal : '#f48fb1',
        );
        playSound('bloom');
        haptic(80);
        toast(FLOWERS[G.plots[i].key!].name + ' bloomed! Tap it! \uD83C\uDF38', 2500);
        setTimeout(() => showContextTip('firstBloom'), 3000);
      }, 350);
    } else {
      updatePlotCard(i);
      saveG();
      toast(`${STAGE_NAMES[G.plots[i].stage]} \u2014 keep watering! \uD83C\uDF3F`, 1500);
      // Apply stage-up growth animation to the new tile
      if (grid.children[i]) {
        (grid.children[i] as HTMLElement).classList.add('stage-up');
        setTimeout(() => {
          if (grid.children[i])
            (grid.children[i] as HTMLElement).classList.remove('stage-up');
        }, 600);
      }
    }
  } else {
    updatePlotCard(i);
    saveG();
    // Apply watered animation to the new tile
    if (grid.children[i]) {
      (grid.children[i] as HTMLElement).classList.add('watered');
      setTimeout(() => {
        if (grid.children[i])
          (grid.children[i] as HTMLElement).classList.remove('watered');
      }, 380);
    }
  }
}

// ── Clear a plot back to empty ────────────────────────────
export function clearPlot(i: number): void {
  G.plots[i] = {
    id: i,
    state: 'empty',
    key: null,
    stage: 0,
    waters: 0,
    rewarded: false,
  };
  updatePlotCard(i);
}

// ── Update a single plot tile (and adjacent for fuse badges) ─
export function updatePlotCard(i: number): void {
  const grid = document.getElementById('gardenGrid');
  if (!grid) return;
  if (grid.children[i]) {
    grid.replaceChild(buildPlotCard(G.plots[i], i), grid.children[i]);
  }
  // Refresh adjacent pots so hybridize badges update
  [i - 1, i + 1, i - 3, i + 3].forEach((n) => {
    if (n >= 0 && n < G.plots.length && grid.children[n]) {
      grid.replaceChild(buildPlotCard(G.plots[n], n), grid.children[n]);
    }
  });
}

// ── Render entire garden grid ─────────────────────────────
export function renderGarden(): void {
  const grid = document.getElementById('gardenGrid');
  if (!grid) return;
  grid.textContent = '';
  G.plots.forEach((p, i) => grid.appendChild(buildPlotCard(p, i)));
}
