// ══════════════════════════════════��═══════════════════════
// PACKETS — open seed packets, weighted random, collect seeds
// Extracted from game.js for modular use
// ═════════════���════════════════════════════════════════════

import type { GameState, FlowerDef, PacketType } from './types';
import { openModal, closeModal, toast } from './modals';
import {
  PKT_LABEL,
  PKT_ICON,
  RARITY_LABEL,
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
const spawnSparkle: (x: number, y: number, emoji: string) => void =
  (window as any).__spawnSparkle ?? (() => {});
const multiSparkle: () => void = (window as any).__multiSparkle ?? (() => {});
const confettiBurst: () => void = (window as any).__confettiBurst ?? (() => {});

// ── Packet pools (weighted arrays by packet type) ─────────
const PKT_POOLS: Record<string, Record<string, number>> =
  (window as any).__PKT_POOLS ?? {};

// ── Safe flower lookup with null check (Bug fix #4) ───────
export function getFlower(key: string): FlowerDef | null {
  return FLOWERS[key] || null;
}

// ── Reveal message for a discovered flower ────────────────
export function getRevealMsg(f: FlowerDef): string {
  const msgs: Record<string, string> = {
    common: 'A lovely flower for your garden!',
    uncommon: 'A beautiful find \u2014 how wonderful!',
    rare: '\u2728 A rare ' + f.name + '! Stunning!',
    legendary: '\uD83C\uDF1F A legendary ' + f.name + '! One of a kind!',
    unique: '\uD83D\uDC8E The UNIQUE flower! Unbelievable!',
    hybrid: '\uD83E\uDDEC A hybrid ' + f.name + '!',
  };
  return msgs[f.rarity] || 'A beautiful flower!';
}

// ── Restore the single-packet result template if it was
//    destroyed by multi-pack rendering ─────────────────────
export function _ensurePktResultTemplate(): void {
  const el = document.getElementById('pktResult');
  if (!el) return;
  if (!document.getElementById('resFlower')) {
    // Trusted static markup — no user input
    el.textContent = '';
    const frag = document.createDocumentFragment();

    const resFlower = document.createElement('div');
    resFlower.className = 'res-flower';
    resFlower.id = 'resFlower';
    frag.appendChild(resFlower);

    const resName = document.createElement('div');
    resName.className = 'res-name';
    resName.id = 'resName';
    frag.appendChild(resName);

    const resRarity = document.createElement('div');
    resRarity.className = 'res-rarity';
    resRarity.id = 'resRarity';
    frag.appendChild(resRarity);

    const resMsg = document.createElement('div');
    resMsg.className = 'res-msg';
    resMsg.id = 'resMsg';
    frag.appendChild(resMsg);

    const collectBtn = document.createElement('button');
    collectBtn.className = 'btn-collect';
    collectBtn.textContent = 'Add to Seeds \uD83C\uDF31';
    collectBtn.onclick = () => collectSeed();
    frag.appendChild(collectBtn);

    el.appendChild(frag);
    el.classList.remove('show');
  }
}

// ── Open the packet selection modal ───────────────────────
export function openPktModal(): void {
  const total = Object.values(G.pkt).reduce((a, b) => a + b, 0);
  if (!total) {
    toast('No packets! Buy some in the shop \uD83D\uDED2', 2000);
    return;
  }
  G.openedKey = null;
  G.opening = false;
  _ensurePktResultTemplate();

  // Render selector cards (trusted data — packet types are game constants)
  const types: PacketType[] = ['common', 'uncommon', 'rare', 'legendary'];
  const selector = document.getElementById('pktSelector');
  if (!selector) return;

  selector.textContent = '';
  types.forEach((t) => {
    const cnt = G.pkt[t] || 0;
    const card = document.createElement('div');
    card.className = 'pkt-sel-card pkt-' + t + (cnt ? '' : ' empty');

    const icon = document.createElement('span');
    icon.className = 'pkt-sel-icon';
    icon.textContent = PKT_ICON[t];
    card.appendChild(icon);

    const name = document.createElement('span');
    name.className = 'pkt-sel-name';
    name.textContent = PKT_LABEL[t];
    card.appendChild(name);

    const cntEl = document.createElement('span');
    cntEl.className = 'pkt-sel-cnt' + (cnt ? '' : ' none');
    cntEl.textContent = '\u00d7' + cnt;
    card.appendChild(cntEl);

    if (cnt) {
      const qtyRow = document.createElement('div');
      qtyRow.className = 'pkt-qty-row';
      [1, 3, 5].forEach((n) => {
        const btn = document.createElement('button');
        btn.className = 'pkt-qty-btn' + (cnt >= n ? '' : ' disabled');
        btn.textContent = 'Open ' + n;
        if (cnt >= n) {
          btn.onclick = () => selectPktType(t, n);
        } else {
          btn.disabled = true;
        }
        qtyRow.appendChild(btn);
      });
      card.appendChild(qtyRow);
    }

    selector.appendChild(card);
  });

  selector.style.display = '';
  const openWrap = document.getElementById('pktOpenWrap');
  if (openWrap) openWrap.style.display = 'none';
  const result = document.getElementById('pktResult');
  if (result) result.classList.remove('show');
  const title = document.getElementById('pktTitle');
  if (title) title.textContent = '\uD83C\uDF81 Open a Packet';
  openModal('pktOverlay');
}

// ── Select a packet type and quantity, begin reveal ───────
export function selectPktType(type: PacketType, qty: number): void {
  qty = qty || 1;
  if (G.pkt[type] < qty || G.opening) return;
  G.pendingPktType = type;
  G.pendingPktQty = qty;
  G.opening = true;
  G.pkt[type] -= qty;
  updateHUD();
  playSound('packet_tear');

  const selector = document.getElementById('pktSelector');
  if (selector) selector.style.display = 'none';
  const pktTitle = document.getElementById('pktTitle');
  if (pktTitle) {
    pktTitle.textContent =
      PKT_ICON[type] +
      ' Opening ' + qty + ' ' + PKT_LABEL[type] +
      (qty > 1 ? ' Packets' : ' Packet');
  }

  if (qty === 1) {
    // Single packet — show animation
    const card = document.getElementById('pktCardEl') as HTMLElement | null;
    if (card) {
      card.className = 'pkt-card t-' + type;
      const pktIcon = card.querySelector('.pkt-icon');
      if (pktIcon) pktIcon.textContent = PKT_ICON[type];
    }
    const openWrap = document.getElementById('pktOpenWrap');
    if (openWrap) openWrap.style.display = '';
    const hint = document.getElementById('pktHint');
    if (hint) hint.style.display = '';
    playSound('packet_' + type);

    setTimeout(() => {
      if (!G.opening) return; // modal was dismissed
      if (card) card.classList.add('shaking');
      setTimeout(() => {
        try {
          if (!G.opening) return; // modal was dismissed
          G.openedKey = weightedRandom(type);
          saveG();
          const f = getFlower(G.openedKey!);
          if (!f) return;
          playSound('reveal_' + f.rarity);
          haptic(f.rarity === 'legendary' || f.rarity === 'unique' ? 100 : 40);
          if (openWrap) openWrap.style.display = 'none';

          const resFlowerEl = document.getElementById('resFlower');
          if (resFlowerEl) {
            const svgContent = flowerSVG(G.openedKey!, MAX_STAGE);
            const wrapper = document.createElement('div');
            wrapper.style.cssText = 'width:100%;height:100%';
            // Trusted SVG from game renderer
            wrapper.insertAdjacentHTML('beforeend', svgContent);
            resFlowerEl.textContent = '';
            resFlowerEl.appendChild(wrapper);
          }
          const resName = document.getElementById('resName');
          if (resName) resName.textContent = f.name;
          const rl = document.getElementById('resRarity');
          if (rl) {
            rl.textContent = RARITY_LABEL[f.rarity];
            rl.className = 'res-rarity ' + f.rarity;
          }
          const resMsg = document.getElementById('resMsg');
          if (resMsg) resMsg.textContent = getRevealMsg(f);

          const pktResult = document.getElementById('pktResult');
          if (pktResult) pktResult.classList.add('show');
          G.opening = false;

          if (f.rarity === 'legendary' || f.rarity === 'unique') multiSparkle();
          if (f.rarity === 'unique') confettiBurst();
          else spawnSparkle(window.innerWidth / 2, window.innerHeight * 0.4, '\u2728');
        } catch (err) {
          console.error('[Garden] Packet reveal error:', err);
          // Ensure seed is still collected even if rendering fails
          if (G.openedKey) {
            if (!G.discovered.includes(G.openedKey)) G.discovered.push(G.openedKey);
            G.seeds.push({ id: G.seedId++, key: G.openedKey });
            G.openedKey = null;
            G.opening = false;
            renderTray();
            saveG();
            closeModal('pktOverlay');
            toast('Seed collected! (display error) \uD83C\uDF31', 2000);
          }
        }
      }, 540);
    }, 100);
  } else {
    // Multi-packet — open all at once, show results list
    const openWrap = document.getElementById('pktOpenWrap');
    if (openWrap) openWrap.style.display = 'none';
    const hint = document.getElementById('pktHint');
    if (hint) hint.style.display = 'none';

    const results: string[] = [];
    for (let i = 0; i < qty; i++) {
      const key = weightedRandom(type, results);
      results.push(key);
      if (!G.discovered.includes(key)) G.discovered.push(key);
      G.seeds.push({ id: G.seedId++, key });
    }
    saveG();

    // Find best rarity for sound
    const rarityOrder = ['unique', 'legendary', 'rare', 'uncommon', 'common'];
    let bestRarity = 'common';
    results.forEach((k) => {
      const flower = getFlower(k);
      if (!flower) return;
      const r = flower.rarity;
      if (rarityOrder.indexOf(r) < rarityOrder.indexOf(bestRarity)) bestRarity = r;
    });
    playSound('reveal_' + bestRarity);
    haptic(bestRarity === 'legendary' || bestRarity === 'unique' ? 100 : 40);

    // Build result list via DOM (no innerHTML with user data)
    const resultEl = document.getElementById('pktResult');
    if (resultEl) {
      resultEl.textContent = '';
      results.forEach((key, idx) => {
        const f = getFlower(key);
        if (!f) return;
        const row = document.createElement('div');
        row.className = 'pkt-multi-result';
        row.style.animationDelay = (idx * 0.1) + 's';
        // Flower SVG is trusted game-rendered content
        row.insertAdjacentHTML('beforeend',
          '<div class="pkt-multi-flower">' + flowerSVG(key, MAX_STAGE) + '</div>' +
          '<div class="pkt-multi-info">' +
            '<div class="pkt-multi-name">' + f.name + '</div>' +
            '<div class="res-rarity ' + f.rarity + '" style="font-size:.7em;padding:3px 10px;">' + RARITY_LABEL[f.rarity] + '</div>' +
          '</div>',
        );
        resultEl.appendChild(row);
      });
      const allBtn = document.createElement('button');
      allBtn.className = 'btn-collect';
      allBtn.textContent = 'All ' + qty + ' seeds added! \u2714';
      allBtn.onclick = () => closeModal('pktOverlay');
      allBtn.style.animationDelay = (qty * 0.1 + 0.2) + 's';
      resultEl.appendChild(allBtn);
      resultEl.classList.add('show');
    }

    G.openedKey = null; // already auto-collected
    G.opening = false;
    renderTray();
    if (bestRarity === 'unique') confettiBurst();
    else if (bestRarity === 'legendary' || bestRarity === 'rare') multiSparkle();
  }
}

// ── Collect the revealed single seed ───────���──────────────
export function collectSeed(): void {
  if (!G.openedKey) return;
  if (!G.discovered.includes(G.openedKey)) G.discovered.push(G.openedKey);
  G.seeds.push({ id: G.seedId++, key: G.openedKey });
  G.openedKey = null;
  closeModal('pktOverlay');
  renderTray();
  saveG();
  toast('Seed added to your tray! \uD83C\uDF31', 1600);
}

// ��─ Smart weighted random: duplicate protection + undiscovered boost ──
export function weightedRandom(type: string, exclude?: string[]): string {
  type = type || 'common';
  const excludeArr = exclude || [];
  const pool = PKT_POOLS[type] || PKT_POOLS.common || {};
  const keys = Object.keys(pool);

  // Count how many of each flower the player currently owns (seeds + inventory + plots)
  const ownedCount: Record<string, number> = {};
  G.seeds.forEach((s) => {
    ownedCount[s.key] = (ownedCount[s.key] || 0) + 1;
  });
  G.inventory.forEach((item) => {
    ownedCount[item.key] = (ownedCount[item.key] || 0) + 1;
  });
  G.plots.forEach((p) => {
    if (p.key) ownedCount[p.key] = (ownedCount[p.key] || 0) + 1;
  });
  // Also count batch exclusions
  excludeArr.forEach((k) => {
    ownedCount[k] = (ownedCount[k] || 0) + 1;
  });

  // Build adjusted weights
  const adjusted: Record<string, number> = {};
  let total = 0;
  keys.forEach((k) => {
    let w = pool[k];
    const owned = ownedCount[k] || 0;
    // Reduce weight for duplicates
    if (owned >= 3) w *= 0.1;
    else if (owned >= 2) w *= 0.25;
    else if (owned >= 1) w *= 0.5;
    // Boost undiscovered flowers (especially for legendary)
    if (!G.discovered.includes(k)) {
      w *= type === 'legendary' ? 2.0 : 1.5;
    }
    adjusted[k] = w;
    total += w;
  });

  // Roll
  let r = Math.random() * total;
  for (let i = 0; i < keys.length; i++) {
    r -= adjusted[keys[i]];
    if (r <= 0) return keys[i];
  }
  return keys[keys.length - 1];
}
