# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

**Local dev server** (use this — `npx serve` fails on Windows with spaces in path):
```
python -m http.server 8000
```
Open `http://localhost:8000` in browser.

**Deploy**: `git push` → Vercel auto-deploys. `index.html` is served with `no-cache`; `style.css` and `game.js` get 1-hour cache.

No build step, no npm, no bundler. Pure HTML/CSS/JS.

## File Structure

Three source files only:

| File | Lines | Purpose |
|------|-------|---------|
| `index.html` | 207 | HTML shell + all modal markup |
| `style.css` | 1265 | All styles |
| `game.js` | ~3500 | All game data, logic, and SVG rendering |

## game.js Architecture

**Data section (lines 1–1487):** `const FLOWERS = {...}` — every flower definition with fields: `name`, `kind`, `appearance`, `rarity`, `w` (weight for random drops), `petal` (hex color), `stem` (hex color), `sell` (coin value). Currently 4 rarities: common, uncommon, rare, legendary.

**Constants (lines 1489–1507):**
- `RARITY_LABEL` — display strings for each rarity tier
- `STAGE_NAMES` / `STAGE_WATERS` / `MAX_STAGE` — growth stages (0=seed → 3=bloomed, needs 3 waters per stage)
- `PKT_COST` / `PKT_LABEL` / `PKT_ICON` — packet shop config

**Game state (line 1509):** `let G = {...}` — single mutable object holding coins, packets, seeds, plots (6), water, inventory, discovered flowers, and transient modal state.

**Persistence (lines 1535–1573):**
- `SAVE_KEY = 'yurieGarden_v1'` — **never change this** or existing saves break
- `saveG()` / `loadG()` — serialize/deserialize `G` to localStorage

**Parametric SVG flower engine (lines 1587–2325):**
Six renderer functions (`renderRadial`, `renderCup`, `renderSpike`, `renderStar`, `renderBell`, `renderRosette`) dispatch via `FLOWER_RENDERERS`. Each flower appearance is configured in `SHAPE_PARAMS` (line 1902). Entry point: `flowerSVG(key, stage)` (line 2326).

**Pot rendering:** `potCardSVG(p)` (line 2395) — terracotta pot as inline SVG, `viewBox="0 0 80 106"`. Uses `filter:drop-shadow` (not `box-shadow`) for glow — it clips to SVG shape. `.plot` needs `aspect-ratio:80/106`.

**Packet pools:** `PKT_POOLS` (line 3065) — weighted arrays by packet type used by `weightedRandom(type)` (line 3263).

**Valve wheel:** (line 3275) — spin-to-earn-water mechanic with touch/mouse handling.

## Mobile (iPhone 12 Safari)

- All touch buttons wired via `touchstart` (more reliable than `click` on iOS)
- Safe area insets: `env(safe-area-inset-bottom)` on `.seed-tray` and `#gameScreen` padding; `env(safe-area-inset-top)` on `.top-bar`
- `-webkit-backdrop-filter` alongside `backdrop-filter`
- `.sheet` uses `max-height:92dvh` with `-webkit-overflow-scrolling:touch`
- Top bar intentionally wraps to 2 rows at 375px

## Adding New Flowers

1. Add entry to `FLOWERS` in `game.js` with `kind`, `appearance`, `rarity`, `w`, `petal`, `stem`, `sell`
2. If using an existing `appearance` (e.g. `"tulip"`), no renderer changes needed
3. If new appearance, add entry to `SHAPE_PARAMS` and implement a renderer or reuse one
4. Add to `PKT_POOLS` at appropriate rarity weight
5. Rarity weights: lower `w` = rarer. Legendary flowers typically `w:1–3`
