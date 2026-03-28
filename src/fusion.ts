// ══════════════════════════════════════════════════════════
// FUSION — hybridize flowers, fusion animation, breed guide
// Extracted from game.js for modular use
// ══════════════════════════════════════════════════════════

import type { GameState, FlowerDef, BreedOutcome } from './types';
import { openModal, closeModal, toast } from './modals';
import {
  findBreedRecipe,
  generateHybridKey,
  getOrCreateDynamicHybrid,
  BREED_RECIPES,
} from './hybrid';
import {
  HYBRID_COST_BASE,
  KIND_DISPLAY,
  MAX_STAGE,
} from './constants';

// ── Bridges to game.js globals ────────────────────────────
const G = (window as any).__G as GameState;
const FLOWERS: Record<string, FlowerDef> = (window as any).__FLOWERS ?? {};
const saveG: () => void = (window as any).__saveG ?? (() => {});
const playSound: (id: string) => void = (window as any).__playSound ?? (() => {});
const haptic: (ms: number) => void = (window as any).__haptic ?? (() => {});
const flowerSVG: (key: string, stage: number) => string =
  (window as any).__flowerSVG ?? (() => '');
const updateHUD: () => void = (window as any).__updateHUD ?? (() => {});
const renderTray: () => void = (window as any).__renderTray ?? (() => {});
const renderGarden: () => void = (window as any).__renderGarden ?? (() => {});
const clearPlot: (i: number) => void = (window as any).__clearPlot ?? (() => {});
const checkAchievements: () => void =
  (window as any).__checkAchievements ?? (() => {});
const shiftHue: (hex: string, degrees: number) => string =
  (window as any).__shiftHue ?? ((h: string) => h);
const colorNameForMutation: (hex: string) => string =
  (window as any).__colorNameForMutation ?? (() => 'Vivid');
const getAdjacentBloomed: (idx: number) => number[] =
  (window as any).__getAdjacentBloomed ?? (() => []);

// ── Result info structure for fusion animation ────────────
interface FusionResult {
  key: string | null;
  name: string;
  badge: string;
  badgeClass: string;
  sound: string;
}

// ── Find a sample flower key by kind (for breed guide SVGs) ──
export function findSampleFlowerByKind(kind: string): string | null {
  const keys = Object.keys(FLOWERS);
  for (let i = 0; i < keys.length; i++) {
    if (FLOWERS[keys[i]].kind === kind && FLOWERS[keys[i]].w > 0) return keys[i];
  }
  // fallback: any flower of that kind
  for (let j = 0; j < keys.length; j++) {
    if (FLOWERS[keys[j]].kind === kind) return keys[j];
  }
  return null;
}

// ── Open hybrid selection modal ───────────────────────────
export function openHybridModal(plotIdx: number): void {
  const content = document.getElementById('hybridContent');
  if (!content) return;
  content.textContent = '';

  const p = G.plots[plotIdx];
  const f1 = FLOWERS[p.key!];
  if (!f1) return;
  const adj = getAdjacentBloomed(plotIdx);

  const desc = document.createElement('p');
  desc.style.cssText =
    'font-size:.78em;color:var(--text-secondary);text-align:center;margin-bottom:12px;';
  const hybCost = Math.max(
    HYBRID_COST_BASE[f1.rarity] || 30,
    HYBRID_COST_BASE[FLOWERS[G.plots[adj[0]].key!]?.rarity] || 30,
  );
  desc.textContent =
    'Fuse ' + f1.name + ' with a neighbor. Costs ' + hybCost +
    ' coins. Both flowers are consumed.';
  content.appendChild(desc);

  adj.forEach((ai) => {
    const f2 = FLOWERS[G.plots[ai].key!];
    if (!f2) return;
    const row = document.createElement('button');
    row.className = 'plant-row ' + f2.rarity;

    const svg = document.createElement('div');
    svg.className = 'pr-svg';
    // Trusted SVG from game renderer
    svg.insertAdjacentHTML('beforeend', flowerSVG(G.plots[ai].key!, MAX_STAGE));
    row.appendChild(svg);

    const info = document.createElement('div');
    info.className = 'pr-info';
    const nm = document.createElement('div');
    nm.className = 'pr-name';
    nm.textContent = f1.name + ' \u00d7 ' + f2.name;
    info.appendChild(nm);

    const sub = document.createElement('div');
    sub.className = 'pr-sub';
    const hasRecipe = !!findBreedRecipe(f1.kind, f2.kind);
    sub.textContent = hasRecipe
      ? '\u2728 Recipe match! \u00b7 5% mutation chance \u00b7 10% fail'
      : 'New fusion \u00b7 5% mutation chance \u00b7 10% fail';
    info.appendChild(sub);
    row.appendChild(info);
    row.onclick = () => doHybridize(plotIdx, ai);
    content.appendChild(row);
  });

  // Fusion Guide button
  const guideWrap = document.createElement('div');
  guideWrap.className = 'breed-btn-wrap';
  const guideBtn = document.createElement('button');
  guideBtn.className = 'tbtn tbtn-journal';
  guideBtn.style.cssText = 'margin-top:12px;font-size:.78em;padding:8px 16px;';
  guideBtn.textContent = '\uD83E\uDDEC Fusion Guide';
  guideBtn.onclick = () => {
    closeModal('hybridOverlay');
    setTimeout(() => openBreedGuide(), 200);
  };
  guideWrap.appendChild(guideBtn);
  content.appendChild(guideWrap);

  openModal('hybridOverlay');
}

// ── Fusion animation overlay ──────────────────────────────
export function showFusionAnimation(
  key1: string,
  key2: string,
  resultInfo: FusionResult,
  onDone?: () => void,
): void {
  let doneCallback = onDone;
  const overlay = document.createElement('div');
  overlay.className = 'fusion-overlay';

  // Left flower
  const left = document.createElement('div');
  left.className = 'fusion-flower left';
  // Trusted SVG from game renderer
  left.insertAdjacentHTML('beforeend', flowerSVG(key1, MAX_STAGE));
  overlay.appendChild(left);

  // Right flower
  const right = document.createElement('div');
  right.className = 'fusion-flower right';
  right.insertAdjacentHTML('beforeend', flowerSVG(key2, MAX_STAGE));
  overlay.appendChild(right);

  // Burst effect
  const burst = document.createElement('div');
  burst.className = 'fusion-burst';
  overlay.appendChild(burst);

  // Result (shown after merge animation)
  const result = document.createElement('div');
  result.className = 'fusion-result';
  if (resultInfo.key && FLOWERS[resultInfo.key]) {
    result.insertAdjacentHTML('beforeend',
      '<div class="fusion-result-svg">' + flowerSVG(resultInfo.key, MAX_STAGE) + '</div>' +
      '<div class="fusion-result-name">' + resultInfo.name + '</div>' +
      '<div class="fusion-result-badge ' + (resultInfo.badgeClass || '') + '">' + resultInfo.badge + '</div>',
    );
  } else {
    const nameDiv = document.createElement('div');
    nameDiv.className = 'fusion-result-name';
    nameDiv.textContent = resultInfo.name;
    result.appendChild(nameDiv);
    const badgeDiv = document.createElement('div');
    badgeDiv.className = 'fusion-result-badge ' + (resultInfo.badgeClass || '');
    badgeDiv.textContent = resultInfo.badge;
    result.appendChild(badgeDiv);
  }
  overlay.appendChild(result);

  // Sparkles
  const sparkles = ['\u2728', '\u2b50', '\u2728', '\uD83C\uDF1F'];
  for (let i = 0; i < sparkles.length; i++) {
    const sp = document.createElement('div');
    sp.className = 'fusion-sparkle';
    sp.textContent = sparkles[i];
    const angle = (i / sparkles.length) * Math.PI * 2;
    sp.style.cssText =
      'transform-origin:center;left:calc(50% + ' +
      Math.round(Math.cos(angle) * 50) + 'px);top:calc(50% + ' +
      Math.round(Math.sin(angle) * 50) + 'px);animation-delay:' +
      (0.7 + i * 0.1) + 's;';
    overlay.appendChild(sp);
  }

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('on'));

  // Play sound after merge
  setTimeout(() => {
    if (resultInfo.sound) playSound(resultInfo.sound);
    haptic(60);
  }, 700);

  // Dismiss on tap after result shown
  setTimeout(() => {
    overlay.onclick = () => {
      overlay.classList.remove('on');
      setTimeout(() => overlay.remove(), 300);
      if (doneCallback) doneCallback();
    };
  }, 1200);

  // Auto-dismiss after 3.5s
  setTimeout(() => {
    if (overlay.parentNode) {
      overlay.classList.remove('on');
      setTimeout(() => {
        if (overlay.parentNode) overlay.remove();
      }, 300);
      if (doneCallback) doneCallback();
      doneCallback = undefined; // prevent double call
    }
  }, 3500);
}

// ── Perform hybridization between two plots ───────────────
export function doHybridize(idx1: number, idx2: number): void {
  const key1 = G.plots[idx1].key!;
  const key2 = G.plots[idx2].key!;
  const f1 = FLOWERS[key1];
  const f2 = FLOWERS[key2];
  if (!f1 || !f2) return;

  const cost = Math.max(
    HYBRID_COST_BASE[f1.rarity] || 30,
    HYBRID_COST_BASE[f2.rarity] || 30,
  );
  if (G.coins < cost) {
    closeModal('hybridOverlay');
    toast('Not enough coins! Need ' + cost + ' to fuse \uD83D\uDCB0', 2500);
    playSound('click');
    return;
  }
  G.coins -= cost;

  // Clear both plots
  clearPlot(idx1);
  clearPlot(idx2);
  closeModal('hybridOverlay');

  const kind1 = f1.kind;
  const kind2 = f2.kind;

  // Check breed recipes first
  const recipe = findBreedRecipe(kind1, kind2);
  // Also check for pre-defined "golden" hybrid match
  const goldenMatch = Object.keys(FLOWERS).filter((k) => {
    const h = FLOWERS[k];
    if (!h.parents) return false;
    return h.parents.includes(kind1) && h.parents.includes(kind2);
  });

  const roll = Math.random();

  // Mutation chance: base 12%, +15% if this exact pair was already discovered, +5% per rare parent
  let mutChance = 0.12;
  const dynTestKey = generateHybridKey(key1, key2);
  if (G.discovered.includes(dynTestKey)) mutChance += 0.15; // repeat pair bonus
  const rarityMutBonus: Record<string, number> = { rare: 0.05, legendary: 0.08, unique: 0.10 };
  mutChance += (rarityMutBonus[f1.rarity] || 0) + (rarityMutBonus[f2.rarity] || 0);
  mutChance = Math.min(mutChance, 0.50); // cap at 50%
  const isMutation = Math.random() < mutChance;

  // Rarity affects recipe chance: rarer parents = slightly lower recipe chance
  let recipeChance = 0.40;
  if (f1.rarity === 'rare' || f2.rarity === 'rare') recipeChance = 0.30;
  if (f1.rarity === 'legendary' || f2.rarity === 'legendary') recipeChance = 0.25;

  // Compute result first, then show animation
  let resultInfo: FusionResult = {
    key: null, name: '', badge: '', badgeClass: '', sound: 'hybrid',
  };

  if (recipe && roll < recipeChance) {
    let totalW = 0;
    recipe.forEach((r) => { totalW += r.w; });
    let rr = Math.random() * totalW;
    let racc = 0;
    let resultKey = recipe[0].key;
    for (let ri = 0; ri < recipe.length; ri++) {
      racc += recipe[ri].w;
      if (rr < racc) { resultKey = recipe[ri].key; break; }
    }
    const recipeKey = [kind1, kind2].sort().join('+');
    if (!G.breedDiscovered.includes(recipeKey)) G.breedDiscovered.push(recipeKey);

    if (isMutation && FLOWERS[resultKey]) {
      const baseF = FLOWERS[resultKey];
      let hueShift = 20 + Math.random() * 40;
      if (Math.random() < 0.5) hueShift = -hueShift;
      const mutPetal = shiftHue(baseF.petal, hueShift);
      const mutColorName = colorNameForMutation(mutPetal);
      const speciesName =
        KIND_DISPLAY[baseF.kind] ||
        baseF.kind.charAt(0).toUpperCase() + baseF.kind.slice(1);
      const mutName = mutColorName + ' ' + speciesName;
      const mutKey = 'mut_' + resultKey + '_' + Date.now();
      FLOWERS[mutKey] = {
        name: mutName, kind: baseF.kind, appearance: baseF.appearance,
        rarity: 'hybrid', w: 0, petal: mutPetal, stem: baseF.stem,
        sell: Math.round(baseF.sell * 1.2), dynamic: true, mutation: true,
        parent1: key1, parent2: key2,
      };
      G.seeds.push({ id: G.seedId++, key: mutKey });
      G.hybridCount++;
      G.mutations.push(mutKey);
      if (!G.discovered.includes(mutKey)) G.discovered.push(mutKey);
      resultInfo = {
        key: mutKey, name: mutName,
        badge: '\u2728 Mutation!', badgeClass: 'mutation', sound: 'mutation',
      };
    } else {
      G.seeds.push({ id: G.seedId++, key: resultKey });
      G.hybridCount++;
      if (!G.discovered.includes(resultKey)) G.discovered.push(resultKey);
      resultInfo = {
        key: resultKey, name: FLOWERS[resultKey].name,
        badge: '\u2728 Recipe Hybrid!', badgeClass: '', sound: 'reveal_legendary',
      };
    }
  } else if (goldenMatch.length > 0 && roll < recipeChance + 0.15) {
    const hk = goldenMatch[Math.floor(Math.random() * goldenMatch.length)];
    G.seeds.push({ id: G.seedId++, key: hk });
    G.hybridCount++;
    if (!G.discovered.includes(hk)) G.discovered.push(hk);
    resultInfo = {
      key: hk, name: FLOWERS[hk].name,
      badge: '\u2728 Rare Hybrid!', badgeClass: '', sound: 'reveal_legendary',
    };
  } else if (roll < 0.90) {
    const dynKey = getOrCreateDynamicHybrid(key1, key2, FLOWERS);

    if (isMutation && FLOWERS[dynKey]) {
      const dBase = FLOWERS[dynKey];
      let dShift = 20 + Math.random() * 40;
      if (Math.random() < 0.5) dShift = -dShift;
      const dPetal = shiftHue(dBase.petal, dShift);
      const dMutColor = colorNameForMutation(dPetal);
      const dSpecies =
        KIND_DISPLAY[dBase.kind] ||
        dBase.kind.charAt(0).toUpperCase() + dBase.kind.slice(1);
      const dMutKey = 'mut_' + dynKey + '_' + Date.now();
      FLOWERS[dMutKey] = {
        name: dMutColor + ' ' + dSpecies, kind: dBase.kind, appearance: dBase.appearance,
        rarity: 'hybrid', w: 0, petal: dPetal, stem: dBase.stem,
        sell: Math.round(dBase.sell * 1.2), dynamic: true, mutation: true,
        parent1: key1, parent2: key2,
      };
      G.seeds.push({ id: G.seedId++, key: dMutKey });
      G.hybridCount++;
      G.mutations.push(dMutKey);
      if (!G.discovered.includes(dMutKey)) G.discovered.push(dMutKey);
      resultInfo = {
        key: dMutKey, name: FLOWERS[dMutKey].name,
        badge: '\u2728 Mutation!', badgeClass: 'mutation', sound: 'mutation',
      };
    } else {
      G.seeds.push({ id: G.seedId++, key: dynKey });
      G.hybridCount++;
      if (!G.discovered.includes(dynKey)) G.discovered.push(dynKey);
      resultInfo = {
        key: dynKey, name: FLOWERS[dynKey].name,
        badge: '\uD83E\uDDEC New Species!', badgeClass: '', sound: 'reveal_hybrid',
      };
    }
  } else if (roll < 0.96) {
    const parentKey = Math.random() < 0.5 ? key1 : key2;
    G.seeds.push({ id: G.seedId++, key: parentKey });
    G.hybridCount++;
    resultInfo = {
      key: parentKey, name: FLOWERS[parentKey].name,
      badge: '\uD83E\uDDEC Parent Seed', badgeClass: '', sound: 'hybrid',
    };
  } else {
    // Fail — refund coins
    G.coins += cost;
    resultInfo = {
      key: null, name: 'Fusion Failed',
      badge: 'Coins refunded \uD83D\uDE1E', badgeClass: 'fail', sound: 'click',
    };
  }

  updateHUD();
  renderTray();
  renderGarden();
  saveG();

  // Show the fusion animation
  showFusionAnimation(key1, key2, resultInfo, () => {
    checkAchievements();
  });
}

// ── Breed guide modal ─────────────────────────────────────
export function openBreedGuide(): void {
  const grid = document.getElementById('breedGrid');
  const prog = document.getElementById('breedProg');
  if (!grid) return;

  while (grid.firstChild) grid.removeChild(grid.firstChild);

  const recipeKeys = Object.keys(BREED_RECIPES);
  const discovered = G.breedDiscovered || [];
  let discCount = 0;

  recipeKeys.forEach((rk) => {
    const kinds = rk.split('+');
    const isDiscovered = discovered.includes(rk);
    if (isDiscovered) discCount++;

    const card = document.createElement('div');
    card.className = 'breed-card' + (isDiscovered ? ' discovered' : '');

    // Parent display
    const parents = document.createElement('div');
    parents.className = 'breed-parents';

    // Find a sample flower of each kind for SVG preview
    const sample1 = findSampleFlowerByKind(kinds[0]);
    const sample2 = findSampleFlowerByKind(kinds[1]);

    const svg1 = document.createElement('div');
    svg1.style.cssText = 'width:32px;height:40px;flex-shrink:0;';
    if (sample1) {
      // Trusted SVG from game renderer
      svg1.insertAdjacentHTML('beforeend', flowerSVG(sample1, MAX_STAGE));
    } else {
      svg1.textContent = '\uD83C\uDF3A';
    }
    parents.appendChild(svg1);

    const plus = document.createElement('span');
    plus.className = 'breed-plus';
    plus.textContent = '+';
    parents.appendChild(plus);

    const svg2 = document.createElement('div');
    svg2.style.cssText = 'width:32px;height:40px;flex-shrink:0;';
    if (sample2) {
      svg2.insertAdjacentHTML('beforeend', flowerSVG(sample2, MAX_STAGE));
    } else {
      svg2.textContent = '\uD83C\uDF3A';
    }
    parents.appendChild(svg2);
    card.appendChild(parents);

    // Arrow
    const arrow = document.createElement('span');
    arrow.className = 'breed-arrow';
    arrow.textContent = '\u2192';
    card.appendChild(arrow);

    // Result
    const resultDiv = document.createElement('div');
    resultDiv.className = 'breed-result';
    if (isDiscovered) {
      const outcomes = BREED_RECIPES[rk];
      outcomes.forEach((o) => {
        const nm = document.createElement('div');
        nm.className = 'breed-result-name';
        nm.textContent = FLOWERS[o.key] ? FLOWERS[o.key].name : o.key;
        resultDiv.appendChild(nm);
      });
    } else {
      const hint = document.createElement('div');
      hint.className = 'breed-result-unknown';
      hint.textContent = '???';
      resultDiv.appendChild(hint);
      const hintText = document.createElement('div');
      hintText.className = 'breed-result-hint';
      const kd = KIND_DISPLAY || {};
      hintText.textContent =
        'Try ' + (kd[kinds[0]] || kinds[0]) + ' \u00d7 ' + (kd[kinds[1]] || kinds[1]);
      resultDiv.appendChild(hintText);
    }
    card.appendChild(resultDiv);
    grid.appendChild(card);
  });

  if (prog) {
    prog.textContent = discCount + ' / ' + recipeKeys.length + ' recipes discovered';
    if (G.mutations && G.mutations.length > 0) {
      prog.textContent +=
        ' \u00b7 ' + G.mutations.length + ' mutation' +
        (G.mutations.length === 1 ? '' : 's');
    }
  }
  openModal('breedOverlay');
}
