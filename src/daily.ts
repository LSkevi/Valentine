// ══════════════════════════════════════════════════════════
// DAILY LOGIN & OFFLINE PROGRESS
// Extracted from game.js for modular use
// ══════════════════════════════════════════════════════════

import type { FlowerDef } from './types';

const G = (window as any).__G;
const FLOWERS: Record<string, FlowerDef> = (window as any).__FLOWERS ?? {};
const saveG = (window as any).__saveG ?? (() => {});
const playSound = (window as any).__playSound ?? (() => {});
const updateHUD = (window as any).__updateHUD ?? (() => {});
const haptic = (window as any).__haptic ?? ((_ms: number) => {});
const toast = (window as any).__toast ?? ((_msg: string, _ms?: number) => {});
const renderDrops = (window as any).__renderDrops ?? (() => {});
const renderNPCs = (window as any).__renderNPCs ?? (() => {});
const renderTray = (window as any).__renderTray ?? (() => {});

// ══════════════════════════════════════════════════════════
// DAILY LOGIN GIFT
// ══════════════════════════════════════════════════════════
export function checkDailyLogin(): void {
  const today = new Date().toISOString().slice(0, 10);
  if (G.lastLoginDate === today) return; // already claimed today

  // Calculate streak
  if (!G.lastLoginDate) {
    G.loginStreak = 0;
  } else {
    const lastDate = new Date(G.lastLoginDate);
    const todayDate = new Date(today);
    const diffDays = Math.round((todayDate.getTime() - lastDate.getTime()) / 86400000);
    if (diffDays !== 1) {
      G.loginStreak = 0; // streak broken
    }
  }

  G.loginStreak = (G.loginStreak || 0) + 1;
  if (G.loginStreak > 7) G.loginStreak = 1; // reset after day 7

  // Determine reward
  const isDay7 = G.loginStreak === 7;
  const rewardPkt = isDay7 ? "rare" : "common";
  const rewardCoins = isDay7 ? 25 : 5 * G.loginStreak;

  // Show login modal
  showLoginGiftModal(G.loginStreak, rewardPkt, rewardCoins, today);
}

export function showLoginGiftModal(streak: number, pktType: string, coins: number, today: string): void {
  // Create a standalone overlay (don't reuse tutorial overlay)
  const overlay = document.createElement("div");
  overlay.className = "overlay tutorial-overlay on";
  overlay.style.zIndex = "99998";
  document.body.appendChild(overlay);

  const content = document.createElement("div");
  content.className = "login-gift-card";

  const title = document.createElement("div");
  title.className = "tutorial-title";
  title.textContent = "\uD83C\uDF1F Daily Gift!";
  content.appendChild(title);

  // Streak dots
  const dotsWrap = document.createElement("div");
  dotsWrap.className = "login-streak";
  for (let i = 1; i <= 7; i++) {
    const dot = document.createElement("div");
    dot.className = "streak-dot" + (i < streak ? " filled" : "") + (i === streak ? " today" : "");
    dot.textContent = i === 7 ? "\u2605" : String(i);
    dotsWrap.appendChild(dot);
  }
  content.appendChild(dotsWrap);

  const reward = document.createElement("div");
  reward.className = "login-reward";
  reward.textContent = (streak === 7 ? "\uD83D\uDC8E Rare" : "\uD83D\uDCE6 Common") + " Packet + " + coins + " coins!";
  content.appendChild(reward);

  const btn = document.createElement("button");
  btn.className = "btn-login-claim";
  btn.textContent = "Claim!";
  btn.onclick = () => {
    G.pkt[pktType]++;
    G.coins += coins;
    G.totalCoins += coins;
    G.lastLoginDate = today;
    updateHUD();
    saveG();
    overlay.remove();
    playSound("achieve");
    haptic(50);
    toast("Day " + streak + " gift claimed! " + (streak === 7 ? "\uD83D\uDC8E" : "\uD83D\uDCE6"), 2000);
  };
  content.appendChild(btn);

  overlay.appendChild(content);
}

// ══════════════════════════════════════════════════════════
// BUGFIX COMPENSATION GIFT
// ══════════════════════════════════════════════════════════
export function applyBugfixGift(): void {
  // v2 flag: ensures ALL players see the visible gift (v1 fired silently behind title screen)
  if (G._bugfix_pkt_v3) return;
  const uncommonKeys = Object.keys(FLOWERS).filter((k: string) => {
    return FLOWERS[k].rarity === "uncommon" && FLOWERS[k].w > 0;
  });
  if (!uncommonKeys.length) return;
  for (let ci = 0; ci < 10; ci++) {
    const compKey = uncommonKeys[Math.floor(Math.random() * uncommonKeys.length)];
    G.seeds.push({ id: G.seedId++, key: compKey });
    if (!G.discovered.includes(compKey)) G.discovered.push(compKey);
  }
  G._bugfix_pkt_v3 = true;
  renderTray();
  updateHUD();
  saveG();
  playSound("achieve");
  haptic(60);
  // Show as a modal card so the player definitely sees it
  const overlay = document.createElement("div");
  overlay.className = "overlay tutorial-overlay on";
  overlay.style.zIndex = "99999";
  document.body.appendChild(overlay);
  const card = document.createElement("div");
  card.className = "login-gift-card";
  const icon = document.createElement("div");
  icon.style.cssText = "font-size:2.5em;text-align:center;margin-bottom:8px;";
  icon.textContent = "\uD83C\uDF81";
  card.appendChild(icon);
  const titleEl = document.createElement("div");
  titleEl.className = "tutorial-title";
  titleEl.textContent = "Bug Fix Gift!";
  card.appendChild(titleEl);
  const msg = document.createElement("div");
  msg.className = "login-reward";
  msg.style.cssText = "font-size:.85em;line-height:1.5;margin:8px 0 16px;";
  msg.textContent = "We fixed a bug that caused lost seeds when opening packets. As compensation, here are 10 uncommon seeds!";
  card.appendChild(msg);
  const btn = document.createElement("button");
  btn.className = "btn-login-claim";
  btn.textContent = "Thank you! \uD83C\uDF3A";
  btn.onclick = () => {
    overlay.remove();
    playSound("click");
  };
  card.appendChild(btn);
  overlay.appendChild(card);
}

// ══════════════════════════════════════════════════════════
// OFFLINE PROGRESS — grant passive water + expire NPCs
// ══════════════════════════════════════════════════════════
export function applyOfflineProgress(): void {
  if (!G._lastTickTime) { G._lastTickTime = Date.now(); saveG(); return; }
  const elapsed = Date.now() - G._lastTickTime;
  if (elapsed < 60000) { G._lastTickTime = Date.now(); return; } // less than 1 min away
  const minutes = Math.floor(elapsed / 60000);
  const rewards: string[] = [];
  // Passive water accumulation (1 per 45s, capped at max)
  const waterGained = Math.min(G.maxWater - G.water, Math.floor(elapsed / 45000));
  if (waterGained > 0) {
    G.water += waterGained;
    renderDrops();
    rewards.push("+" + waterGained + " water");
  }
  // Expire old NPCs
  let expiredCount = 0;
  G.npcs = G.npcs.filter((npc: any) => {
    if (Date.now() - npc.spawnedAt > npc.patience) { expiredCount++; return false; }
    return true;
  });
  if (expiredCount > 0) {
    G.npcStreak = 0;
    rewards.push(expiredCount + " customer" + (expiredCount > 1 ? "s" : "") + " left");
  }
  // Coin bonus for time away (1 coin per 10 min, max 30)
  const bonusCoins = Math.min(30, Math.floor(minutes / 10));
  if (bonusCoins > 0) {
    G.coins += bonusCoins;
    G.totalCoins += bonusCoins;
    rewards.push("+" + bonusCoins + " coins");
  }
  G._lastTickTime = Date.now();
  renderNPCs();
  updateHUD();
  saveG();
  if (rewards.length > 0) {
    const timeStr = minutes >= 60 ? Math.floor(minutes / 60) + "h " + (minutes % 60) + "m" : minutes + "m";
    toast("\uD83C\uDF1F Welcome back! (" + timeStr + " away) " + rewards.join(", "), 4500);
  }
}
