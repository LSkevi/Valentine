// ══════════════════════════════════════════════════════════
// ACHIEVEMENTS & MILESTONES SYSTEM
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
const openModal = (window as any).__openModal ?? ((id: string) => {
  const el = document.getElementById(id);
  if (el) el.classList.add("on");
});
const applyBgStyle = (window as any).__applyBgStyle ?? (() => {});
const renderGarden = (window as any).__renderGarden ?? (() => {});

interface Achievement {
  id: string;
  name: string;
  desc: string;
  icon: string;
  reward: number;
  check: () => boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  // Growing (1-10)
  { id: "bloom1", name: "First Bloom", desc: "Bloom your first flower", icon: "\uD83C\uDF3C", reward: 10, check: () => G.totalBlooms >= 1 },
  { id: "bloom10", name: "Green Thumb", desc: "Bloom 10 flowers", icon: "\uD83C\uDF3F", reward: 25, check: () => G.totalBlooms >= 10 },
  { id: "bloom50", name: "Master Gardener", desc: "Bloom 50 flowers", icon: "\uD83C\uDF3B", reward: 50, check: () => G.totalBlooms >= 50 },
  { id: "bloom100", name: "Century Bloom", desc: "Bloom 100 flowers", icon: "\uD83C\uDFC6", reward: 100, check: () => G.totalBlooms >= 100 },
  { id: "fullgarden", name: "Full Garden", desc: "Fill every pot at once", icon: "\uD83C\uDF3A", reward: 30, check: () => G.plots.every((p: any) => p.state !== "empty") },
  { id: "speed", name: "Speed Bloom", desc: "Have 3+ bloomed at once", icon: "\u26A1", reward: 20, check: () => G.plots.filter((p: any) => p.state === "bloomed").length >= 3 },
  { id: "patience", name: "Patient Gardener", desc: "Have 6+ pots growing", icon: "\uD83C\uDF3E", reward: 25, check: () => G.plots.filter((p: any) => p.state === "growing").length >= 6 },
  { id: "water100", name: "Water Wizard", desc: "Use 100 total waters", icon: "\uD83D\uDCA7", reward: 20, check: () => G.totalWaters >= 100 },
  { id: "droughtbloom", name: "Drought Survivor", desc: "Bloom during drought", icon: "\uD83C\uDF35", reward: 30, check: () => G.weather === "drought" && G.plots.some((p: any) => p.state === "bloomed") },
  { id: "rainbloom5", name: "Rain Dancer", desc: "Bloom 5+ flowers in rain", icon: "\uD83C\uDF27\uFE0F", reward: 25, check: () => false }, // tracked via flag
  // Collection (11-20)
  { id: "disc10", name: "Curious", desc: "Discover 10 unique flowers", icon: "\uD83D\uDD0D", reward: 15, check: () => G.discovered.length >= 10 },
  { id: "disc25", name: "Botanist", desc: "Discover 25 unique flowers", icon: "\uD83C\uDF3F", reward: 30, check: () => G.discovered.length >= 25 },
  { id: "disc50", name: "Encyclopedist", desc: "Discover 50 flowers", icon: "\uD83D\uDCDA", reward: 50, check: () => G.discovered.length >= 50 },
  { id: "alllegendary", name: "Living Legend", desc: "Discover all legendary flowers", icon: "\uD83C\uDF1F", reward: 100, check: () => {
    const ls = Object.keys(FLOWERS).filter((k: string) => FLOWERS[k].rarity === "legendary");
    return ls.every((k: string) => G.discovered.includes(k));
  }},
  { id: "unique", name: "One of a Kind", desc: "Discover the unique flower", icon: "\uD83D\uDC8E", reward: 75, check: () => {
    return Object.keys(FLOWERS).filter((k: string) => FLOWERS[k].rarity === "unique").some((k: string) => G.discovered.includes(k));
  }},
  { id: "rainbow", name: "Rainbow Garden", desc: "Own 5+ different species in inventory", icon: "\uD83C\uDF08", reward: 20, check: () => {
    const kinds = new Set(G.inventory.map((i: any) => FLOWERS[i.key]?.kind));
    return kinds.size >= 5;
  }},
  { id: "specialist", name: "Species Specialist", desc: "Discover all colors of one species", icon: "\uD83D\uDD2C", reward: 30, check: () => {
    const byKind: Record<string, string[]> = {};
    Object.entries(FLOWERS).forEach(([k, v]: [string, any]) => {
      byKind[v.kind] = byKind[v.kind] || [];
      byKind[v.kind].push(k);
    });
    return Object.values(byKind).some((keys: string[]) => keys.length >= 3 && keys.every((k: string) => G.discovered.includes(k)));
  }},
  { id: "rare5", name: "Rare Hunter", desc: "Discover 5 rare flowers", icon: "\u2B50", reward: 25, check: () => G.discovered.filter((k: string) => FLOWERS[k] && FLOWERS[k].rarity === "rare").length >= 5 },
  { id: "allcommon", name: "Common Collector", desc: "Discover all common flowers", icon: "\uD83C\uDFE1", reward: 40, check: () => {
    const cs = Object.keys(FLOWERS).filter((k: string) => FLOWERS[k].rarity === "common");
    return cs.every((k: string) => G.discovered.includes(k));
  }},
  { id: "fulljournal", name: "Full Journal", desc: "Discover every flower (100%)", icon: "\uD83D\uDCD6", reward: 200, check: () => G.discovered.length >= Object.keys(FLOWERS).length },
  // Commerce (21-30)
  { id: "sell1", name: "First Sale", desc: "Sell a flower to a customer", icon: "\uD83D\uDCB0", reward: 10, check: () => G.npcSales >= 1 },
  { id: "sell25", name: "Merchant", desc: "Complete 25 customer sales", icon: "\uD83D\uDCB5", reward: 30, check: () => G.npcSales >= 25 },
  { id: "coins1000", name: "Tycoon", desc: "Earn 1,000 total coins", icon: "\uD83D\uDCB0", reward: 50, check: () => G.totalCoins >= 1000 },
  { id: "coins5000", name: "Mogul", desc: "Earn 5,000 total coins", icon: "\uD83D\uDC51", reward: 100, check: () => G.totalCoins >= 5000 },
  { id: "streak10", name: "Perfect Service", desc: "10 customer sales in a row", icon: "\uD83C\uDF1F", reward: 40, check: () => G.npcBestStreak >= 10 },
  { id: "quicksell", name: "Quick Serve", desc: "You're a fast seller!", icon: "\u23F1\uFE0F", reward: 15, check: () => G.npcSales >= 5 },
  { id: "appreciate", name: "Big Tipper", desc: "Sell an appreciated flower", icon: "\uD83D\uDCC8", reward: 20, check: () => G.totalSold >= 10 },
  { id: "legsale", name: "Legendary Sale", desc: "Sell a legendary to a customer", icon: "\u2728", reward: 50, check: () => false }, // tracked via flag
  { id: "bulk5", name: "Bulk Dealer", desc: "Sell 5 flowers total", icon: "\uD83D\uDCE6", reward: 15, check: () => G.totalSold >= 5 },
  { id: "sell50", name: "Haggler", desc: "Sell 50 flowers total", icon: "\uD83E\uDD1D", reward: 40, check: () => G.totalSold >= 50 },
  // Garden (31-40)
  { id: "pot3", name: "Expansion I", desc: "Buy your 3rd pot", icon: "\uD83C\uDF31", reward: 15, check: () => G.plots.length >= 3 },
  { id: "pot6", name: "Expansion II", desc: "Buy your 6th pot", icon: "\uD83C\uDF31", reward: 30, check: () => G.plots.length >= 6 },
  { id: "pot12", name: "Expansion III", desc: "Unlock all 12 pots", icon: "\uD83C\uDF3E", reward: 75, check: () => G.plots.length >= 12 },
  { id: "decor1", name: "Decorator", desc: "Unlock a new pot style", icon: "\uD83C\uDFA8", reward: 20, check: () => G.potStyle !== "terracotta" },
  { id: "landscape1", name: "Landscape Artist", desc: "Unlock a new background", icon: "\uD83C\uDF05", reward: 20, check: () => G.bgStyle !== "default" },
  { id: "luckypkt", name: "Lucky Packet", desc: "Get legendary from common", icon: "\uD83C\uDF1F", reward: 50, check: () => false }, // tracked via flag
  { id: "hybrid1", name: "First Fusion", desc: "Create your first fusion flower", icon: "\uD83E\uDDEC", reward: 20, check: () => G.hybridCount >= 1 },
  { id: "hybrid10", name: "Mad Scientist", desc: "Create 10 fusion flowers", icon: "\uD83D\uDD2C", reward: 50, check: () => G.hybridCount >= 10 },
  { id: "allweather", name: "Weather Watcher", desc: "Experience all 3 weather types", icon: "\uD83C\uDF24\uFE0F", reward: 15, check: () => false }, // tracked via flag
  { id: "streak7", name: "Dedicated", desc: "Play 7 different days", icon: "\uD83D\uDCC5", reward: 30, check: () => G.daysPlayed.length >= 7 },
];

export function checkAchievements(): void {
  const newUnlocks: Achievement[] = [];
  ACHIEVEMENTS.forEach((a: Achievement) => {
    if (G.achievements.includes(a.id)) return;
    if (a.check()) {
      G.achievements.push(a.id);
      G.coins += a.reward;
      G.totalCoins += a.reward;
      newUnlocks.push(a);
    }
  });
  if (newUnlocks.length) {
    updateHUD();
    saveG();
    playSound("achieve");
    haptic(60);
    newUnlocks.forEach((a: Achievement) => {
      toast("\uD83C\uDFC6 " + a.name + "! +" + a.reward + " coins", 3000);
    });
  }
  checkMilestones();
}

export function openAchievementsModal(): void {
  const prog = document.getElementById("achieveProg");
  if (prog) prog.textContent = G.achievements.length + " / " + ACHIEVEMENTS.length + " unlocked";
  const grid = document.getElementById("achieveGrid");
  if (!grid) return;
  grid.textContent = "";
  ACHIEVEMENTS.forEach((a: Achievement) => {
    const unlocked = G.achievements.includes(a.id);
    const row = document.createElement("div");
    row.className = "achieve-row " + (unlocked ? "unlocked" : "locked");
    const iconEl = document.createElement("div");
    iconEl.className = "achieve-icon";
    iconEl.textContent = a.icon;
    row.appendChild(iconEl);
    const info = document.createElement("div");
    info.className = "achieve-info";
    const name = document.createElement("div");
    name.className = "achieve-name";
    name.textContent = unlocked ? a.name : "???";
    info.appendChild(name);
    const desc = document.createElement("div");
    desc.className = "achieve-desc";
    desc.textContent = a.desc;
    info.appendChild(desc);
    row.appendChild(info);
    const rew = document.createElement("div");
    rew.className = "achieve-reward";
    rew.textContent = unlocked ? "\u2705" : "+" + a.reward + "c";
    row.appendChild(rew);
    grid.appendChild(row);
  });
  openModal("achieveOverlay");
}

// ══════════════════════════════════════════════════════════
// COLLECTION MILESTONES
// ══════════════════════════════════════════════════════════
interface Milestone {
  pct: number;
  potStyle: string | null;
  bgStyle: string | null;
  label: string;
}

export const MILESTONES: Milestone[] = [
  { pct: 25, potStyle: "ceramic", bgStyle: null, label: "25% \u2192 Ceramic Pot Style" },
  { pct: 50, potStyle: null, bgStyle: "garden", label: "50% \u2192 Garden Background" },
  { pct: 75, potStyle: "golden", bgStyle: null, label: "75% \u2192 Golden Pot Style" },
  { pct: 100, potStyle: null, bgStyle: "enchanted", label: "100% \u2192 Enchanted Background" },
];

export function getJournalPercent(): number {
  return Math.round((G.discovered.length / Object.keys(FLOWERS).length) * 100);
}

export function checkMilestones(): void {
  const pct = getJournalPercent();
  MILESTONES.forEach((m: Milestone) => {
    if (pct >= m.pct) {
      if (m.potStyle && G.potStyle === "terracotta") {
        // Don't auto-switch, just unlock
      }
      if (m.bgStyle && G.bgStyle === "default") {
        // Don't auto-switch, just unlock
      }
    }
  });
}

export function isMilestoneUnlocked(m: Milestone): boolean {
  return getJournalPercent() >= m.pct;
}

export function renderMilestoneSection(): void {
  const section = document.getElementById("milestoneSection");
  if (!section) return;
  const pct = getJournalPercent();
  const wrap = document.createElement("div");
  wrap.className = "milestone-wrap";
  const title = document.createElement("div");
  title.className = "milestone-title";
  title.textContent = "\uD83C\uDFC6 Collection: " + pct + "% \u2014 Milestones";
  wrap.appendChild(title);
  MILESTONES.forEach((m: Milestone) => {
    const unlocked = pct >= m.pct;
    const row = document.createElement("div");
    row.className = "milestone-row" + (unlocked ? " achieved" : "");
    const label = document.createElement("span");
    label.className = "milestone-label";
    label.textContent = m.label;
    row.appendChild(label);
    const status = document.createElement("span");
    status.className = "milestone-status " + (unlocked ? "done" : "locked");
    status.textContent = unlocked ? "\u2705 Unlocked" : "\uD83D\uDD12 " + m.pct + "%";
    row.appendChild(status);
    if (unlocked && (m.potStyle || m.bgStyle)) {
      const btn = document.createElement("button");
      btn.className = "btn-compost"; // reuse compost button style
      btn.style.cssText = "margin-left:8px;font-size:.6em;padding:3px 8px;";
      if (m.potStyle) {
        btn.textContent = G.potStyle === m.potStyle ? "\u2713 Active" : "Use Pot";
        btn.disabled = G.potStyle === m.potStyle;
        btn.onclick = () => {
          G.potStyle = m.potStyle;
          saveG();
          renderGarden();
          const openInventoryModal = (window as any).__openInventoryModal ?? (() => {});
          openInventoryModal();
          toast("Pot style changed!", 1500);
        };
      } else if (m.bgStyle) {
        btn.textContent = G.bgStyle === m.bgStyle ? "\u2713 Active" : "Use BG";
        btn.disabled = G.bgStyle === m.bgStyle;
        btn.onclick = () => {
          G.bgStyle = m.bgStyle;
          applyBgStyle();
          saveG();
          const openInventoryModal = (window as any).__openInventoryModal ?? (() => {});
          openInventoryModal();
          toast("Background changed!", 1500);
        };
      }
      row.appendChild(btn);
    }
    wrap.appendChild(row);
  });
  section.textContent = "";
  section.appendChild(wrap);
}
