# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

```
npm install        # first time only
npx vite           # dev server on localhost:8000
npm run build      # TypeScript check + Vite build → dist/
```

**Deploy**: `git push` → Vercel auto-deploys (`npm run build` → `dist/`).
Vite hashes JS/CSS assets; `vercel.json` sets immutable cache on `/assets/*` and `no-cache` on `index.html`.

## File Structure

| File | Purpose |
|------|---------|
| `index.html` | HTML shell + all modal markup |
| `style.css` | All styles |
| `src/main.ts` | Entry point — imports game-legacy bridge |
| `src/game-legacy.ts` | Monolithic game logic (migration bridge) |
| `src/*.ts` (28 modules) | Typed modules extracted during migration |
| `public/` | Static assets copied to dist (sw.js, manifest.json, images) |

## game-legacy.ts Architecture

`src/game-legacy.ts` is the monolithic bridge file. Typed modules in `src/` are imported
for TS verification but not yet wired at runtime — `game-legacy` still runs everything.

**Data section (lines 7–1505):** `const FLOWERS = {...}` — every flower definition with fields: `name`, `kind`, `appearance`, `rarity`, `w` (weight for random drops), `petal` (hex color), `stem` (hex color), `sell` (coin value). Currently 4 rarities: common, uncommon, rare, legendary.

**Constants (lines 1507–1770):**
- `RARITY_LABEL` — display strings for each rarity tier
- `STAGE_NAMES` / `STAGE_WATERS` / `MAX_STAGE` — growth stages (0=seed → 3=bloomed, needs 3 waters per stage)
- `PKT_COST` / `PKT_LABEL` / `PKT_ICON` — packet shop config

**Game state (line 1806):** `let G = {...}` — single mutable object holding coins, packets, seeds, plots (6), water, inventory, discovered flowers, and transient modal state.

**Persistence (lines 1865–1960):**
- `SAVE_KEY = 'yurieGarden_v1'` — **never change this** or existing saves break
- `saveG()` / `loadG()` — serialize/deserialize `G` to localStorage

**Parametric SVG flower engine (lines 2152–3041):**
Six renderer functions (`renderRadial`, `renderCup`, `renderSpike`, `renderStar`, `renderBell`, `renderRosette`) dispatch via `FLOWER_RENDERERS` (line 2613). Each flower appearance is configured in `SHAPE_PARAMS` (line 2630). Entry point: `flowerSVG(key, stage)` (line 3041).

**Pot rendering:** `potCardSVG(p)` (line 3356) — terracotta pot as inline SVG, `viewBox="0 0 80 106"`. Uses `filter:drop-shadow` (not `box-shadow`) for glow — it clips to SVG shape. `.plot` needs `aspect-ratio:80/106`.

**Packet pools:** `PKT_POOLS` (line 4431) — weighted arrays by packet type used by `weightedRandom(type)` (line 4623).

## Mobile (iPhone 12 Safari)

- All touch buttons wired via `touchstart` with `stopPropagation()` (prevents event bubbling to overlay backdrop listeners)
- Safe area insets: `env(safe-area-inset-bottom)` on `.seed-tray` and `#gameScreen` padding; `env(safe-area-inset-top)` on `.top-bar`
- `-webkit-backdrop-filter` alongside `backdrop-filter`
- `.sheet` uses `max-height:92dvh` with `-webkit-overflow-scrolling:touch`
- Top bar intentionally wraps to 2 rows at 375px

## Adding New Flowers

1. Add entry to `FLOWERS` in `src/game-legacy.ts` with `kind`, `appearance`, `rarity`, `w`, `petal`, `stem`, `sell`
2. If using an existing `appearance` (e.g. `"tulip"`), no renderer changes needed
3. If new appearance, add entry to `SHAPE_PARAMS` and implement a renderer or reuse one
4. Add to `PKT_POOLS` at appropriate rarity weight
5. Rarity weights: lower `w` = rarer. Legendary flowers typically `w:1–3`
