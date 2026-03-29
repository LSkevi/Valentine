// ══════════════════════════════════════════════════════════
// NPC CUSTOMER SYSTEM
// Extracted from game.js for modular use
// ══════════════════════════════════════════════════════════

import type { FlowerDef } from './types';
import { RARITY_LABEL, MAX_STAGE } from './constants';

const G = (window as any).__G;
const FLOWERS: Record<string, FlowerDef> = (window as any).__FLOWERS ?? {};
const saveG = (window as any).__saveG ?? (() => {});
const playSound = (window as any).__playSound ?? (() => {});
const updateHUD = (window as any).__updateHUD ?? (() => {});
const haptic = (window as any).__haptic ?? ((_ms: number) => {});
const toast = (window as any).__toast ?? ((_msg: string, _ms?: number) => {});
const openModal = (window as any).__openModal ?? ((id: string) => {
  const el = document.getElementById(id);
  if (el) el.classList.add("on");
});
const closeModal = (window as any).__closeModal ?? ((id: string) => {
  const el = document.getElementById(id);
  if (el) el.classList.remove("on");
});
const flowerSVG = (window as any).__flowerSVG ?? ((_key: string, _stage: number) => "");
const spawnSparkle = (window as any).__spawnSparkle ?? ((_x: number, _y: number, _e?: string) => {});
const showContextTip = (window as any).__showContextTip ?? ((_key: string) => {});
const checkAchievements = (window as any).__checkAchievements ?? (() => {});

// NPC spawn/patience constants (also in constants.ts)
const NPC_SPAWN_MIN = 35000;  // 35s minimum between spawns
const NPC_SPAWN_MAX = 90000;  // 90s max
const NPC_PATIENCE_MIN = 120000; // 2 min
const NPC_PATIENCE_MAX = 300000; // 5 min

// ══════════════════════════════════════════════════════════
// NPC FRIENDS
// ══════════════════════════════════════════════════════════
interface NpcFriend {
  name: string;
  avatar: string;
}

export const NPC_FRIENDS: NpcFriend[] = [
  { name: "Yurie",     avatar: "\uD83D\uDC69" },
  { name: "Ana",       avatar: "\uD83D\uDC69" },
  { name: "Kinano",    avatar: "\uD83D\uDC69" },
  { name: "Tutu",      avatar: "\uD83D\uDC69" },
  { name: "Vitor",     avatar: "\uD83D\uDC68\uD83C\uDFFF" },
  { name: "Ian",       avatar: "\uD83D\uDC68" },
  { name: "Guilherme", avatar: "\uD83D\uDC71" },
  { name: "Klebio",    avatar: "\uD83D\uDC71" },
  { name: "Brasil",    avatar: "\uD83D\uDC71" },
];

// ══════════════════════════════════════════════════════════
// NPC DIALOGUE VARIETY
// ══════════════════════════════════════════════════════════
export const NPC_DIALOGUES: string[] = [
  "I'd love a {flower}!",
  "My garden needs a {flower}\u2026",
  "Do you have a {flower}? I'll pay well!",
  "A {flower} would make my day!",
  "I'm looking for a beautiful {flower}",
  "My partner asked for a {flower} \u2014 help!",
  "Wedding flowers! Need a {flower}!",
  "Can I buy a {flower}? Pretty please!",
  "I've been searching everywhere for a {flower}!",
  "A little {flower} for my windowsill?",
];

export const VIP_DIALOGUES: string[] = [
  "I'm a collector \u2014 TOP coin for a {flower}!",
  "Money is no object. I need a {flower}!",
  "Special order: one {flower}, price is yours!",
];

export function getNPCDialogue(flowerName: string, isVip: boolean): string {
  const pool = isVip ? VIP_DIALOGUES : NPC_DIALOGUES;
  const template = pool[Math.floor(Math.random() * pool.length)];
  return template.replace("{flower}", flowerName);
}

// ══════════════════════════════════════════════════════════
// NPC SYSTEM
// ══════════════════════════════════════════════════════════
export function getNpcMax(): number {
  if (G.plots.length >= 9) return 5;
  if (G.plots.length >= 6) return 4;
  return 3;
}

export function createNPC(): void {
  if (G.npcs.length >= getNpcMax()) return;
  let requestKey: string | null = null;
  let requestRarity: string | null = null;
  let isMystery = false;
  let isWildcard = false;
  const isVip = Math.random() < 0.08;

  // Smart customer system: no spoilers
  // 70% — ask for a discovered flower from journal
  // 20% — mystery: ask for an undiscovered flower by rarity silhouette
  // 10% — wildcard: "any [rarity] flower!"
  const roll = Math.random();
  const invKeys = G.inventory.map((item: any) => item.key);
  const uniqueInvKeys = invKeys.filter((k: string, i: number) => invKeys.indexOf(k) === i);

  if (roll < 0.70) {
    // Ask for a discovered flower (prefer from inventory if available)
    if (uniqueInvKeys.length > 0 && Math.random() < 0.7) {
      requestKey = uniqueInvKeys[Math.floor(Math.random() * uniqueInvKeys.length)];
    } else {
      // From discovered flowers only
      const discovered = G.discovered.filter((k: string) => FLOWERS[k] && FLOWERS[k].rarity !== "hybrid");
      if (discovered.length > 0) {
        requestKey = discovered[Math.floor(Math.random() * discovered.length)];
      } else {
        // Fallback for very early game: pick from packet pool flowers
        const fallback = Object.keys(FLOWERS).filter((k: string) => FLOWERS[k].rarity === "common" && FLOWERS[k].w > 0);
        requestKey = fallback[Math.floor(Math.random() * fallback.length)];
      }
    }
  } else if (roll < 0.90) {
    // Mystery customer — wants an undiscovered flower, show silhouette
    const undiscovered = Object.keys(FLOWERS).filter((k: string) => {
      return FLOWERS[k].w > 0 && FLOWERS[k].rarity !== "hybrid" && !G.discovered.includes(k);
    });
    if (undiscovered.length > 0) {
      requestKey = undiscovered[Math.floor(Math.random() * undiscovered.length)];
      isMystery = true;
    } else {
      // All discovered — fall back to discovered
      const disc = G.discovered.filter((k: string) => FLOWERS[k] && FLOWERS[k].rarity !== "hybrid");
      requestKey = disc.length > 0 ? disc[Math.floor(Math.random() * disc.length)] : "pinkTulip";
    }
  } else {
    // Wildcard customer — "any [rarity] flower!"
    isWildcard = true;
    const rarities: string[] = ["common", "uncommon"];
    if (G.discovered.some((k: string) => FLOWERS[k] && FLOWERS[k].rarity === "rare")) rarities.push("rare");
    if (G.discovered.some((k: string) => FLOWERS[k] && FLOWERS[k].rarity === "legendary")) rarities.push("legendary");
    requestRarity = rarities[Math.floor(Math.random() * rarities.length)];
    // Pick a placeholder key for reward calculation
    const pool = Object.keys(FLOWERS).filter((k: string) => FLOWERS[k].rarity === requestRarity && FLOWERS[k].w > 0);
    requestKey = pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : "pinkTulip";
  }

  let f = FLOWERS[requestKey!];
  if (!f) { requestKey = "pinkTulip"; f = FLOWERS[requestKey]; }
  const rarityMult: Record<string, number> = { common: 2.5, uncommon: 3, rare: 4, legendary: 5, unique: 6 };
  let reward = Math.round(f.sell * (rarityMult[f.rarity] || 2.5) * (0.9 + Math.random() * 0.4));
  if (isVip) reward = Math.round(f.sell * 8 * (0.9 + Math.random() * 0.3));
  if (isWildcard) reward = Math.round(reward * 0.8); // slightly less for flexibility

  const npcFriend = NPC_FRIENDS[Math.floor(Math.random() * NPC_FRIENDS.length)];
  let dialogue: string;
  if (isWildcard) {
    const rLabel = (RARITY_LABEL as any)[requestRarity!] || requestRarity;
    dialogue = isVip
      ? "I'll pay top coin for ANY " + rLabel + " flower!"
      : "I'd love any " + rLabel + " flower you have!";
  } else if (isMystery) {
    dialogue = isVip
      ? "I'm looking for something... mysterious. Surprise me!"
      : "I heard you might have a rare flower I've never seen\u2026";
  } else {
    dialogue = getNPCDialogue(f.name, isVip);
  }

  const npc = {
    id: G.npcIdCounter++,
    name: npcFriend.name,
    avatar: npcFriend.avatar,
    requestKey: requestKey,
    requestRarity: requestRarity,
    reward: reward,
    vip: isVip,
    mystery: isMystery,
    wildcard: isWildcard,
    dialogue: dialogue,
    spawnedAt: Date.now(),
    patience: NPC_PATIENCE_MIN + Math.random() * (NPC_PATIENCE_MAX - NPC_PATIENCE_MIN),
  };
  if (isVip) { playSound("vip"); haptic(80); }
  G.npcs.push(npc);
  saveG();
  renderNPCs();
  // Contextual tips for customer types
  showContextTip("firstCustomer");
  if (isVip) showContextTip("firstVip");
  if (isMystery) showContextTip("firstMystery");
  if (isWildcard) showContextTip("firstWildcard");
}

export function renderNPCs(): void {
  const section = document.getElementById("npcSection");
  if (!section) return;
  section.textContent = "";
  if (!G.npcs.length) {
    const empty = document.createElement("div");
    empty.className = "npc-empty";
    empty.textContent = "No customers yet\u2026 they visit every 30\u201390 seconds!";
    section.appendChild(empty);
    return;
  }
  G.npcs.forEach((npc: any) => {
    const f = FLOWERS[npc.requestKey];
    if (!f) return;
    const card = document.createElement("div");
    card.className = "npc-card" + (npc.vip ? " vip" : "");
    card.onclick = () => { openNPCSellModal(npc.id); };

    const elapsed = Date.now() - npc.spawnedAt;
    const pct = Math.max(0, 100 - (elapsed / npc.patience) * 100);
    const urgent = pct < 25;

    const avatar = document.createElement("div");
    avatar.className = "npc-avatar";
    avatar.textContent = npc.avatar;
    card.appendChild(avatar);

    const info = document.createElement("div");
    info.className = "npc-info";
    const name = document.createElement("div");
    name.className = "npc-name";
    name.textContent = npc.name;
    if (npc.vip) {
      const badge = document.createElement("span");
      badge.className = "npc-vip-badge";
      badge.textContent = "VIP";
      name.appendChild(badge);
    }
    info.appendChild(name);
    const req = document.createElement("div");
    req.className = "npc-request";
    req.textContent = "\u201C" + (npc.dialogue || ("I'd love a " + f.name + "!")) + "\u201D";
    info.appendChild(req);
    const timer = document.createElement("div");
    timer.className = "npc-timer";
    const fill = document.createElement("div");
    fill.className = "npc-timer-fill" + (urgent ? " urgent" : "");
    fill.style.width = pct.toFixed(1) + "%";
    timer.appendChild(fill);
    info.appendChild(timer);
    card.appendChild(info);

    // Show the flower they want (or mystery/wildcard)
    const flowerPreview = document.createElement("div");
    flowerPreview.style.cssText = "width:36px;height:44px;flex-shrink:0;display:flex;align-items:center;justify-content:center;";
    if (npc.mystery) {
      // Silhouette — dark shape with question mark
      flowerPreview.style.cssText += "font-size:1.5em;color:var(--text-light,#b5aea5);opacity:0.6;";
      flowerPreview.textContent = "?";
    } else if (npc.wildcard) {
      // Rarity icon
      const rarityIcons: Record<string, string> = { common: "\uD83C\uDF3C", uncommon: "\uD83C\uDF39", rare: "\uD83D\uDC8E", legendary: "\u2728" };
      flowerPreview.style.cssText += "font-size:1.3em;";
      flowerPreview.textContent = rarityIcons[npc.requestRarity] || "\uD83C\uDF3A";
    } else {
      const svgHtml = flowerSVG(npc.requestKey, MAX_STAGE);
      const temp = document.createElement("div");
      temp.style.cssText = "width:36px;height:44px;";
      temp.insertAdjacentHTML("beforeend", svgHtml);
      flowerPreview.appendChild(temp);
    }
    card.appendChild(flowerPreview);

    const rew = document.createElement("div");
    rew.className = "npc-reward";
    const ic = document.createElement("span");
    ic.className = "ic";
    ic.textContent = "C";
    rew.appendChild(ic);
    rew.appendChild(document.createTextNode(String(npc.reward)));
    card.appendChild(rew);

    section.appendChild(card);
  });
}

export function openNPCSellModal(npcId: number): void {
  const npc = G.npcs.find((n: any) => n.id === npcId);
  if (!npc) return;
  const f = FLOWERS[npc.requestKey];
  if (!f) return;
  const titleEl = document.getElementById("npcSellTitle");
  if (titleEl) {
    if (npc.wildcard) {
      titleEl.textContent = npc.name + " wants: Any " + ((RARITY_LABEL as any)[npc.requestRarity] || npc.requestRarity) + " flower";
    } else if (npc.mystery) {
      titleEl.textContent = npc.name + " wants: " + f.name;
    } else {
      titleEl.textContent = npc.name + " wants: " + f.name;
    }
  }
  const list = document.getElementById("npcSellList");
  if (!list) return;
  list.textContent = "";
  // Find matching flowers in inventory
  let matches: any[];
  if (npc.wildcard) {
    // Accept any flower of that rarity
    matches = G.inventory.filter((item: any) => FLOWERS[item.key] && FLOWERS[item.key].rarity === npc.requestRarity);
  } else {
    matches = G.inventory.filter((item: any) => item.key === npc.requestKey);
  }
  if (!matches.length) {
    const noMatch = document.createElement("div");
    noMatch.className = "tray-empty";
    if (npc.wildcard) {
      noMatch.textContent = "No " + ((RARITY_LABEL as any)[npc.requestRarity] || "") + " flowers in your Garden House. Grow and store some!";
    } else {
      noMatch.textContent = "No " + f.name + " in your Garden House. Grow one, let it bloom, tap it and choose Store!";
    }
    list.appendChild(noMatch);
  } else {
    matches.forEach((item: any) => {
      const itemF = FLOWERS[item.key] || f;
      const row = document.createElement("button");
      row.className = "plant-row " + itemF.rarity;
      const svg = document.createElement("div");
      svg.className = "pr-svg";
      const svgHtml = flowerSVG(item.key, MAX_STAGE);
      const svgTemp = document.createElement("div");
      svgTemp.insertAdjacentHTML("beforeend", svgHtml);
      svg.appendChild(svgTemp.firstChild || svgTemp);
      row.appendChild(svg);
      const infoEl = document.createElement("div");
      infoEl.className = "pr-info";
      const nm = document.createElement("div");
      nm.className = "pr-name";
      nm.textContent = itemF.name;
      infoEl.appendChild(nm);
      const sub = document.createElement("div");
      sub.className = "pr-sub";
      sub.textContent = "Sell for " + npc.reward + " coins";
      infoEl.appendChild(sub);
      row.appendChild(infoEl);
      const badge = document.createElement("span");
      badge.className = "pr-badge " + itemF.rarity;
      badge.textContent = (RARITY_LABEL as any)[itemF.rarity];
      row.appendChild(badge);
      row.onclick = () => { fulfillNPC(npcId, item.uid); };
      list.appendChild(row);
    });
  }
  openModal("npcSellOverlay");
}

export function fulfillNPC(npcId: number, uid: number): void {
  const npcIdx = G.npcs.findIndex((n: any) => n.id === npcId);
  if (npcIdx === -1) return;
  const npc = G.npcs[npcIdx];
  const invIdx = G.inventory.findIndex((x: any) => x.uid === uid);
  if (invIdx === -1) return;
  const f = FLOWERS[G.inventory[invIdx].key];
  if (!f) return;
  G.inventory.splice(invIdx, 1);
  G.coins += npc.reward;
  G.totalCoins += npc.reward;
  G.totalSold++;
  G.npcSales++;
  G.npcStreak++;
  if (G.npcStreak > G.npcBestStreak) G.npcBestStreak = G.npcStreak;
  G.npcs.splice(npcIdx, 1);
  updateHUD();
  saveG();
  closeModal("npcSellOverlay");
  playSound("sale");
  haptic(50);
  toast(npc.name + " loved the " + f.name + "! +" + npc.reward + " coins \uD83D\uDCB0", 2500);
  renderNPCs();
  spawnSparkle(window.innerWidth / 2, window.innerHeight * 0.3, "\u2728");
  checkAchievements();
}

export function tickNPCs(): void {
  const now = Date.now();
  let changed = false;
  // Remove expired NPCs
  G.npcs = G.npcs.filter((npc: any) => {
    if (now - npc.spawnedAt > npc.patience) {
      G.npcStreak = 0; // streak broken
      changed = true;
      return false;
    }
    return true;
  });
  // Spawn new NPC if timer elapsed
  if (G.npcs.length < getNpcMax() && now - G.npcTimer > NPC_SPAWN_MIN + Math.random() * (NPC_SPAWN_MAX - NPC_SPAWN_MIN)) {
    G.npcTimer = now;
    createNPC();
    changed = true;
  }
  if (changed) {
    saveG();
    renderNPCs();
  } else {
    renderNPCs(); // update timer bars
  }
}
