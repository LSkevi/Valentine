// ══════════════════════════════════════════════════════════
// TUTORIAL & HELP GUIDE SYSTEM
// Extracted from game.js for modular use
// ══════════════════════════════════════════════════════════

const G = (window as any).__G;
const playSound = (window as any).__playSound ?? (() => {});
const saveG = (window as any).__saveG ?? (() => {});

// Forward-declared; wired at runtime from game-legacy
const openModal = (window as any).__openModal ?? ((id: string) => {
  const el = document.getElementById(id);
  if (el) el.classList.add("on");
});
const toast = (window as any).__toast ?? ((_msg: string, _ms?: number) => {});

// ── Short intro tutorial (3 pages) ──────────────────────────
export const TUTORIAL_STEPS = [
  { icon: "\uD83C\uDF3A", title: "Welcome!", desc: "Grow flowers, sell to customers, and build your dream garden. Open packets for seeds, plant in pots, water to bloom!" },
  { icon: "\uD83D\uDCB0", title: "Earn Coins", desc: "Customers are your main income! Store bloomed flowers in the Garden House, then tap a customer to sell. Tap the ? button (top-right) anytime for a full guide." },
  { icon: "\uD83D\uDCF1", title: "Install as App", desc: "Play full-screen without the browser bar! On iPhone: tap Share \u2192 'Add to Home Screen'. On Android: tap the Install popup or menu \u2192 'Install app'." },
];

// ── Contextual tips — shown ONCE when player first encounters each feature ──
export const CONTEXT_TIPS: Record<string, string> = {
  firstBloom:    "Your first bloom! Tap it to store, fuse, or leave. Customers pay well for flowers!",
  firstCustomer: "A customer! Store bloomed flowers in the Garden House, then tap a customer to sell.",
  firstWeather:  "Weather changed! Each type affects growth differently. Tap ? for details.",
  firstFusion:   "Two bloomed flowers next to each other! Tap one to fuse \u2014 check the Fusion Guide in the Journal.",
  firstVip:      "VIP customer (purple glow)! They pay 8x. Save your best flowers for them!",
  firstMystery:  "Mystery customer (?) \u2014 they want an undiscovered flower. Discover more to fill their order!",
  firstWildcard: "Wildcard customer \u2014 accepts ANY flower of that rarity!",
  firstShop:     "The shop! Buy packets for seeds, new pots to expand, and water upgrades.",
  firstMusic:    "Music is on! Tap \uD83C\uDFB5 to adjust volume or switch between 10 songs.",
};

let _tutStep = 0;
let _helpPage = 0;

export function showContextTip(key: string): void {
  if (!G.contextTips) G.contextTips = {};
  if (G.contextTips[key]) return;
  const msg = CONTEXT_TIPS[key];
  if (!msg) return;
  G.contextTips[key] = true;
  saveG();
  toast("\uD83D\uDCA1 " + msg, 5000);
}

export function showTutorial(): void {
  if (G.tutorialDone) return;
  _tutStep = 0;
  renderTutorialStep();
  const overlay = document.getElementById("tutorialOverlay");
  if (overlay) overlay.classList.add("on");
  const skipBtn = document.getElementById("tutorialSkip");
  if (skipBtn) skipBtn.onclick = closeTutorial;
  const nextBtn = document.getElementById("tutorialNext");
  if (nextBtn) nextBtn.onclick = nextTutorialStep;
}

export function renderTutorialStep(): void {
  const s = TUTORIAL_STEPS[_tutStep];
  const stepEl = document.getElementById("tutorialStep");
  if (stepEl) stepEl.textContent = (_tutStep + 1) + "/" + TUTORIAL_STEPS.length;
  const iconEl = document.getElementById("tutorialIcon");
  if (iconEl) iconEl.textContent = s.icon;
  const titleEl = document.getElementById("tutorialTitle");
  if (titleEl) titleEl.textContent = s.title;
  const descEl = document.getElementById("tutorialDesc");
  if (descEl) descEl.textContent = s.desc;
  const btn = document.getElementById("tutorialNext");
  if (btn) btn.textContent = _tutStep === TUTORIAL_STEPS.length - 1 ? "Let's Go!" : "Next";
}

export function nextTutorialStep(): void {
  _tutStep++;
  if (_tutStep >= TUTORIAL_STEPS.length) {
    closeTutorial();
    return;
  }
  renderTutorialStep();
}

export function closeTutorial(): void {
  const overlay = document.getElementById("tutorialOverlay");
  if (overlay) overlay.classList.remove("on");
  G.tutorialDone = true;
  saveG();
  // Show daily login after tutorial
  const checkDailyLogin = (window as any).__checkDailyLogin ?? (() => {});
  setTimeout(() => { checkDailyLogin(); }, 300);
}

// ══════════════════════════════════════════════════════════
// HELP GUIDE — detailed game manual
// ══════════════════════════════════════════════════════════

// SECURITY NOTE: All html content in HELP_PAGES is hardcoded string literals,
// never user input. The original game.js code uses the same approach with
// a comment confirming this: "Safe: html content is hardcoded string literals, not user input"
export const HELP_PAGES = [
  {
    title: "Getting Started",
    html: '<h3>Your Flower Shop</h3>'
      + '<p>You run a flower shop! Your goal is to grow flowers, sell them to customers, and expand your garden.</p>'
      + '<p>You start with <b>2 pots</b>, <b>2 seed packets</b>, and <b>5 coins</b>. Open packets to get seeds, plant them in pots, water them to bloom, then sell to customers for profit.</p>'
      + '<div class="help-tip">Customers are your main source of income. Always keep bloomed flowers in your Garden House ready to sell!</div>'
  },
  {
    title: "Water & Growing",
    html: '<h3>How Watering Works</h3>'
      + '<p><b>Water trickles in</b> automatically every 45 seconds. You can also tap the bucket to swipe-fill it faster, or tap drifting clouds for +2 bonus water.</p>'
      + '<p>Each flower needs <b>3 waters per growth stage</b> (Seed \u2192 Sprout \u2192 Growing \u2192 Bloomed). That\'s 9 waters total to bloom.</p>'
      + '<h3>Weather Effects on Growth</h3>'
      + '<p><b>Sunny:</b> Only 2 waters per stage (faster growth!)</p>'
      + '<p><b>Rainy:</b> Free water on change + auto-water every 60s</p>'
      + '<p><b>Drought:</b> 5 waters per stage (slower!)</p>'
      + '<p><b>Snowy:</b> Normal watering, but frost can nip growing flowers and remove 1 water</p>'
  },
  {
    title: "Making Money",
    html: '<h3>Selling to Customers</h3>'
      + '<p>Customers visit every 35\u201390 seconds (up to 3 at a time). Three types:</p>'
      + '<p><b>Regular (70%)</b> \u2014 Ask for a flower you\'ve already discovered. No spoilers!</p>'
      + '<p><b>Mystery (20%)</b> \u2014 Show a "?" silhouette. They want an undiscovered flower \u2014 discover more to find out what!</p>'
      + '<p><b>Wildcard (10%)</b> \u2014 Accept ANY flower of a specific rarity. Great for clearing inventory!</p>'
      + '<h3>Reward Multipliers</h3>'
      + '<p>Common: <b>2.5x</b> | Uncommon: <b>3x</b> | Rare: <b>4x</b> | Legendary: <b>5x</b></p>'
      + '<p><b>VIP customers</b> (8% chance, purple glow) pay <b>8x</b>!</p>'
      + '<div class="help-tip">Keep 3-4 flowers in Garden House at all times. Wildcard customers pay slightly less but accept anything of that rarity!</div>'
  },
  {
    title: "Packets & Seeds",
    html: '<h3>Seed Packets</h3>'
      + '<p>Buy packets from the Shop to get random seeds:</p>'
      + '<p><b>Common</b> (12 coins) \u2014 Tulips, daisies, violets. Low sell value but easy to grow.</p>'
      + '<p><b>Uncommon</b> (35 coins) \u2014 Roses, poppies, cherry blossoms. Better customer prices.</p>'
      + '<p><b>Rare</b> (80 coins) \u2014 Orchids, golden iris. Customers pay top coin.</p>'
      + '<p><b>Legendary</b> (160 coins) \u2014 Blue Rose, Golden Rose. Extremely valuable to VIP customers.</p>'
      + '<div class="help-tip">Invest in better packets early \u2014 one rare flower sold to a customer pays for the packet and more.</div>'
  },
  {
    title: "Flower Fusion",
    html: '<h3>Creating New Flowers</h3>'
      + '<p>When two <b>bloomed flowers sit in adjacent pots</b> (side by side or above/below), you can fuse them!</p>'
      + '<p>Tap a bloomed flower \u2192 Choose "Fuse" \u2192 Pick a neighbor. Both flowers are consumed and you get a new seed.</p>'
      + '<h3>Breeding Recipes</h3>'
      + '<p>There are <b>20 pre-defined recipe combos</b> (e.g., Rose + Tulip = Sunset Rose). Open the <b>Fusion Guide</b> from the Journal to see hints!</p>'
      + '<h3>Mutations</h3>'
      + '<p>Every fusion has a <b>5% mutation chance</b> \u2014 you get a unique color variant with a special name like "Vivid Sunset Rose". Collect them all!</p>'
      + '<div class="help-tip">Hybrids can\'t drop from packets \u2014 they\'re exclusive to breeding. Great for completing your Journal!</div>'
  },
  {
    title: "Weather System",
    html: '<h3>Four Weather Types</h3>'
      + '<p>Weather changes every 2\u20135 minutes and affects your whole garden:</p>'
      + '<p><b>Sunny</b> \u2600\uFE0F \u2014 Faster growth (2 waters/stage instead of 3). Flowers sway more.</p>'
      + '<p><b>Rainy</b> \uD83C\uDF27\uFE0F \u2014 Free water! +1 on change, +1 every 60s. Puddles appear under pots.</p>'
      + '<p><b>Drought</b> \uD83C\uDF35 \u2014 Needs 5 waters/stage. Conserve water carefully!</p>'
      + '<p><b>Snowy</b> \u2744\uFE0F \u2014 Frost can nip growing flowers, removing 1 water progress. Snowflakes fall and frost appears on pot rims.</p>'
      + '<div class="help-tip">Plan ahead: grow easy flowers during drought, save rare seeds for sunny weather!</div>'
  },
  {
    title: "Garden House & Journal",
    html: '<h3>Garden House</h3>'
      + '<p>When a flower blooms, tap it and choose "Store in Garden House". Stored flowers are ready to sell to customers.</p>'
      + '<p>Flowers in the Garden House <b>appreciate in value over time</b> \u2014 the longer they\'re stored, the more they\'re worth!</p>'
      + '<h3>Flower Journal</h3>'
      + '<p>The Journal tracks every flower species you\'ve discovered. There are <b>147+ flowers</b> across Common, Uncommon, Rare, Legendary, and Hybrid tiers.</p>'
      + '<p>Completing discovery milestones unlocks <b>pot styles, backgrounds, and garden decorations</b> in the Style menu.</p>'
  },
  {
    title: "Achievements & Daily",
    html: '<h3>40 Achievements</h3>'
      + '<p>Earn achievements for milestones like first bloom, 25 customer sales, discovering 50 flowers, etc. Each achievement rewards <b>bonus coins</b>.</p>'
      + '<h3>Daily Login Gifts</h3>'
      + '<p>Come back every day for streak rewards! Day 1\u20136: Common packet + coins. <b>Day 7: Rare packet + 25 coins!</b> Streak resets if you miss a day.</p>'
      + '<h3>Safety Net</h3>'
      + '<p>If you ever run completely out of coins, packets, seeds, and flowers, a kind neighbor will leave you a free packet and some coins to get back on your feet.</p>'
  },
  {
    title: "Music & Tips",
    html: '<h3>Music & Sound</h3>'
      + '<p>Tap <b>\uD83C\uDFB5</b> to open a music popup with ON/OFF toggle and volume slider. Tap <b>\uD83D\uDD0A</b> for the same with sound effects.</p>'
      + '<p>Two soundtracks: <b>Groovy Garden</b> (upbeat, plays on sunny days) and <b>Yurie\'s Garden</b> (cozy, plays during rain/snow/drought). Each has 3-5 mood variations that rotate every 5 minutes.</p>'
      + '<p>Rain drops are a <b>sound effect</b> (controlled by SFX volume), not music.</p>'
      + '<p>The <b>\uD83D\uDD0A button</b> toggles sound effects (water, bloom, sale, weather sounds).</p>'
      + '<h3>Pro Tips</h3>'
      + '<div class="help-tip">Keep 3\u20134 flowers in Garden House at all times \u2014 customers often request what you have!</div>'
      + '<div class="help-tip">Buy uncommon packets early. The customer reward multiplier (3x) pays for the packet in one sale.</div>'
      + '<div class="help-tip">VIP customers (purple glow) are rare but pay 8x. Always have a rare/legendary flower ready for them!</div>'
      + '<div class="help-tip">Fuse during sunny weather \u2014 you\'ll regrow consumed flowers faster.</div>'
  },
];

export function openHelpGuide(): void {
  _helpPage = 0;
  renderHelpPage();
  openModal("helpOverlay");
  playSound("click");
}

export function renderHelpPage(): void {
  const page = HELP_PAGES[_helpPage];
  const titleEl = document.getElementById("helpTitle");
  if (titleEl) titleEl.textContent = page.title;
  const content = document.getElementById("helpContent");
  if (!content) return;
  content.textContent = "";
  // Safe: html content is hardcoded string literals defined above, not user input.
  // Using DOM parsing to safely insert the trusted static markup.
  const temp = document.createElement("div");
  // SECURITY: page.html is a compile-time constant from HELP_PAGES above — never user input
  temp.innerHTML = page.html; // eslint-disable-line no-unsanitized/property
  while (temp.firstChild) content.appendChild(temp.firstChild);
  const pageNum = document.getElementById("helpPageNum");
  if (pageNum) pageNum.textContent = (_helpPage + 1) + "/" + HELP_PAGES.length;
  const prevBtn = document.getElementById("helpPrev") as HTMLButtonElement | null;
  if (prevBtn) prevBtn.disabled = _helpPage === 0;
  const nextBtn = document.getElementById("helpNext") as HTMLButtonElement | null;
  if (nextBtn) nextBtn.disabled = _helpPage === HELP_PAGES.length - 1;
  // Nav dots
  const nav = document.getElementById("helpNav");
  if (!nav) return;
  nav.textContent = "";
  for (let i = 0; i < HELP_PAGES.length; i++) {
    const dot = document.createElement("div");
    dot.className = "help-nav-dot" + (i === _helpPage ? " active" : "");
    dot.dataset.idx = String(i);
    dot.onclick = function (this: HTMLElement) {
      _helpPage = parseInt(this.dataset.idx!, 10);
      renderHelpPage();
    };
    nav.appendChild(dot);
  }
}

export function helpPage(dir: number): void {
  _helpPage = Math.max(0, Math.min(HELP_PAGES.length - 1, _helpPage + dir));
  renderHelpPage();
  playSound("click");
}
