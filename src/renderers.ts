// Parametric SVG flower renderers — 10 renderer functions + dispatch map.
// Extracted from game.js for reuse and type safety.

import { _fc, _svg, _stem, _leaf, _sh, _sh1, _aura, _ring } from "./svg-helpers";
import type { FlowerDef, ShapeParams, ShapeParamsRadial, ShapeParamsCup, ShapeParamsSpike, ShapeParamsStar, ShapeParamsBell, ShapeParamsRosette, ShapeParamsNotched, ShapeParamsAsymmetric, ShapeParamsStandards, ShapeParamsLabellum } from "./types";

// ── 1. RADIAL — n ellipse petals evenly rotating from center (daisy, sunflower, cosmos…) ──

export function renderRadial(f: FlowerDef, stage: number, P: ShapeParamsRadial): string {
  const { p, pll, pd, S, rare } = _fc(f);
  const { n, rx, ry, cy, cR, cFill, c2R, c2Fill, leaves } = P;
  if (stage === 1)
    return _svg(
      _sh1 +
        _stem(S, 2.5, 65) +
        `<path d="M30 82 Q19 75 17 66 Q25 70 30 78" fill="${S}"/>` +
        `<ellipse cx="30" cy="60" rx="${(rx * 0.6).toFixed(1)}" ry="${(ry * 0.45).toFixed(1)}" fill="${pd}" opacity=".7"/>`,
    );
  const lv = leaves ? _leaf(S) : "";
  if (stage === 2)
    return _svg(
      _sh +
        _stem(S, 2.5, 52) +
        `<path d="M30 78 Q16 70 14 60 Q24 65 30 72" fill="${S}"/>` +
        _ring(n, rx, ry, cy, p, 0.7) +
        `<circle cx="30" cy="${cy}" r="${(cR * 0.75).toFixed(1)}" fill="${cFill}"/>`,
    );
  return _svg(
    _sh +
      _stem(S, 3.5, 50) +
      lv +
      _aura(cy, cR + 9, pll, rare) +
      _ring(n, rx, ry, cy, p, 1) +
      `<circle cx="30" cy="${cy}" r="${cR}" fill="${cFill}"/>` +
      (c2R ? `<circle cx="30" cy="${cy}" r="${c2R}" fill="${c2Fill}"/>` : ""),
  );
}

// ── 2. CUP — goblet shape (open:0=tight tulip → open:1=wide poppy) ──

export function renderCup(f: FlowerDef, stage: number, P: ShapeParamsCup): string {
  const { p, pl, pll, pd, S, rare } = _fc(f);
  const o = P.open;
  const cy = Math.round(36 + o * 4);
  if (stage === 1)
    return _svg(
      _sh1 +
        _stem(S, 3, 62) +
        `<path d="M30 80 Q18 72 16 62 Q24 67 30 77" fill="${S}"/>` +
        `<path d="M${25 - o * 3} 65 Q${23 - o * 2} ${51 + o * 6} 30 ${47 + o * 7} Q${37 + o * 2} ${51 + o * 6} ${35 + o * 3} 65 Q32 68 30 69 Q28 68 ${25 - o * 3} 65Z" fill="${p}" opacity=".82"/>`,
    );
  if (stage === 2)
    return _svg(
      _sh +
        _stem(S, 3, 52) +
        `<path d="M30 78 Q14 67 12 54 Q23 61 30 73" fill="${S}"/>` +
        `<path d="M30 78 Q46 67 48 54 Q37 61 30 73" fill="${S}"/>` +
        `<path d="M${22 - o * 3} 55 Q${20 - o * 3} ${38 + o * 6} 30 ${33 + o * 7} Q${40 + o * 3} ${38 + o * 6} ${38 + o * 3} 55 Q35 60 30 61 Q25 60 ${22 - o * 3} 55Z" fill="${p}"/>` +
        `<path d="M${26 - o * 2} 55 Q${24 - o * 2} ${41 + o * 5} 30 ${36 + o * 6}" fill="${pl}" opacity=".3"/>`,
    );
  return _svg(
    _sh +
      _stem(S, 3.5, 48) +
      `<path d="M30 75 Q12 62 10 47 Q22 55 30 68" fill="${S}"/>` +
      `<path d="M30 75 Q48 62 50 47 Q38 55 30 68" fill="${S}"/>` +
      _aura(cy, 22 + o * 3, pll, rare) +
      `<path d="M${18 - o * 5} 49 Q${16 - o * 4} ${29 + o * 9} 30 ${22 + o * 11} Q${44 + o * 4} ${29 + o * 9} ${42 + o * 5} 49 Q${38 + o * 2} 55 30 ${57 + o * 5} Q${22 - o * 2} 55 ${18 - o * 5} 49Z" fill="${p}"/>` +
      `<path d="M${23 - o * 3} 49 Q${22 - o * 2} ${32 + o * 8} 30 ${25 + o * 9}" fill="${pl}" opacity=".28"/>` +
      `<path d="M24 31 Q27 24 30 23" stroke="rgba(255,255,255,.5)" stroke-width="1.5" stroke-linecap="round"/>` +
      `<ellipse cx="30" cy="${50 + o * 4}" rx="${(5 + o * 2).toFixed(1)}" ry="${(4 + o).toFixed(1)}" fill="${pd}" opacity=".35"/>`,
  );
}

// ── 3. SPIKE — vertical column of tiny oval blobs (lavender, hyacinth, foxglove…) ──

export function renderSpike(f: FlowerDef, stage: number, P: ShapeParamsSpike): string {
  const { p, pd, pll, S, rare } = _fc(f);
  const { cols, rows } = P;
  if (stage === 1)
    return _svg(
      _sh1 +
        _stem(S, 2, 62) +
        `<path d="M30 82 Q20 76 18 68 Q25 72 30 79" fill="${S}"/>` +
        `<ellipse cx="28" cy="60" rx="2.5" ry="3.5" fill="${p}" opacity=".65"/>` +
        `<ellipse cx="32" cy="57" rx="2.5" ry="3.5" fill="${p}" opacity=".65"/>`,
    );
  const topY = stage === 2 ? 52 : 55;
  const bR = stage === 2 ? Math.ceil(rows * 0.65) : rows;
  const blobParts: string[] = [];
  for (let r = 0; r < bR; r++) {
    const y = topY - r * 4.5;
    const xs = cols === 2 ? (r % 2 === 0 ? [27, 33] : [30]) : [30];
    const fill = r === bR - 1 ? pd : p;
    const op = Math.min(0.93, 0.65 + r * 0.03).toFixed(2);
    xs.forEach((x) => {
      blobParts.push(`<ellipse cx="${x}" cy="${y.toFixed(1)}" rx="3" ry="4" fill="${fill}" opacity="${op}"/>`);
    });
  }
  const blobs = blobParts.join("");
  if (stage === 2)
    return _svg(
      _sh +
        _stem(S, 2.5, 52) +
        `<path d="M30 80 Q17 73 15 63 Q24 67 30 75" fill="${S}"/>` +
        `<path d="M30 80 Q43 73 45 63 Q36 67 30 75" fill="${S}"/>` +
        blobs,
    );
  const tipY = topY - (bR - 1) * 4.5;
  return _svg(
    _sh +
      _stem(S, 3, 55) +
      `<path d="M30 78 Q15 70 13 58 Q23 64 30 72" fill="${S}"/>` +
      `<path d="M30 78 Q45 70 47 58 Q37 64 30 72" fill="${S}"/>` +
      _aura(tipY, 14, pll, rare) +
      blobs,
  );
}

// ── 4. STAR — wide flat petals at alternating tilts (lily, iris, orchid, daffodil…) ──

export function renderStar(f: FlowerDef, stage: number, P: ShapeParamsStar): string {
  const { p, pl, pll, pd, S, rare } = _fc(f);
  const { n, rx, ry, cy, cR, cFill } = P;
  if (stage === 1)
    return _svg(
      _sh1 +
        _stem(S, 3, 60) +
        `<path d="M30 80 Q19 73 17 63 Q25 68 30 77" fill="${S}"/>` +
        `<path d="M25 62 Q24 52 30 47 Q36 52 35 62 Q32 65 30 66 Q28 65 25 62Z" fill="${p}" opacity=".85"/>`,
    );
  const petals = (sc: number): string => {
    const parts: string[] = [];
    for (let i = 0; i < n; i++) {
      const a = ((360 / n) * i).toFixed(1);
      parts.push(`<ellipse cx="30" cy="${(cy - ry * sc).toFixed(1)}" rx="${(rx * sc).toFixed(1)}" ry="${(ry * sc).toFixed(1)}" fill="${i % 2 ? pl : p}" transform="rotate(${a},30,${cy})"/>`);
    }
    return parts.join("");
  };
  if (stage === 2)
    return _svg(
      _sh +
        _stem(S, 3, 54) +
        `<path d="M30 78 Q15 68 13 55 Q23 62 30 72" fill="${S}"/>` +
        petals(0.75) +
        (cR
          ? `<circle cx="30" cy="${cy}" r="${(cR * 0.75).toFixed(1)}" fill="${cFill}"/>`
          : ""),
    );
  return _svg(
    _sh +
      _stem(S, 3.5, 52) +
      `<path d="M30 76 Q12 64 10 50 Q22 57 30 70" fill="${S}"/>` +
      `<path d="M30 76 Q48 64 50 50 Q37 57 30 70" fill="${S}"/>` +
      _aura(cy, (cR || 12) + 8, pll, rare) +
      petals(1) +
      (cR
        ? `<circle cx="30" cy="${cy}" r="${cR}" fill="${cFill}"/><circle cx="30" cy="${cy}" r="${(cR * 0.55).toFixed(1)}" fill="${pll}"/>`
        : ""),
  );
}

// ── 5. BELL — drooping bell/pendant shapes (bluebell, wisteria, fuchsia…) ──

export function renderBell(f: FlowerDef, stage: number, P: ShapeParamsBell): string {
  const { p, pl, pll, pd, S, rare } = _fc(f);
  const { bells, bw, bh } = P;
  if (stage === 1)
    return _svg(
      _sh1 +
        _stem(S, 2.5, 62) +
        `<path d="M30 82 Q20 76 18 68 Q25 72 30 79" fill="${S}"/>` +
        `<ellipse cx="30" cy="60" rx="${(bw * 0.6).toFixed(1)}" ry="${(bh * 0.5).toFixed(1)}" fill="${p}" opacity=".7"/>`,
    );
  const pts: number[][] =
    bells <= 1
      ? [[30, 43]]
      : bells === 2
        ? [
            [23, 42],
            [37, 43],
          ]
        : bells === 3
          ? [
              [21, 40],
              [30, 43],
              [39, 41],
            ]
          : [
              [19, 39],
              [27, 42],
              [33, 42],
              [41, 40],
            ];
  const bellSVG = (x: number, y: number, sc: number): string =>
    `<path d="M${x - bw * sc} ${y - bh * sc * 0.3} Q${x - bw * sc * 1.1} ${y + bh * sc * 0.7} ${x} ${y + bh * sc} Q${x + bw * sc * 1.1} ${y + bh * sc * 0.7} ${x + bw * sc} ${y - bh * sc * 0.3} Q${x} ${y - bh * sc * 0.6} ${x - bw * sc} ${y - bh * sc * 0.3}Z" fill="${p}"/>` +
    `<path d="M${x - bw * sc * 0.45} ${y - bh * sc * 0.2} Q${x} ${y + bh * sc * 0.35} ${x + bw * sc * 0.45} ${y - bh * sc * 0.2}" fill="${pl}" opacity=".4"/>` +
    `<circle cx="${x}" cy="${y + bh * sc * 0.9}" r="1.5" fill="${pd}" opacity=".6"/>`;
  const branches = pts
    .map(
      ([x, y]) =>
        `<line x1="30" y1="55" x2="${x}" y2="${y}" stroke="${S}" stroke-width="1.2"/>`,
    )
    .join("");
  if (stage === 2)
    return _svg(
      _sh +
        _stem(S, 2.5, 55) +
        `<path d="M30 78 Q16 70 14 60 Q24 65 30 72" fill="${S}"/>` +
        branches +
        pts.map(([x, y]) => bellSVG(x, y, 0.8)).join(""),
    );
  return _svg(
    _sh +
      _stem(S, 3, 55) +
      `<path d="M30 78 Q14 68 12 55 Q23 61 30 72" fill="${S}"/>` +
      `<path d="M30 78 Q46 68 48 55 Q37 61 30 72" fill="${S}"/>` +
      _aura(43, 17, pll, rare) +
      branches +
      pts.map(([x, y]) => bellSVG(x, y, 1)).join(""),
  );
}

// ── 6. ROSETTE — layered overlapping circles (rose, peony, carnation, dahlia…) ──

export function renderRosette(f: FlowerDef, stage: number, P: ShapeParamsRosette): string {
  const { p, pl, pll, pd, S, rare } = _fc(f);
  const { cy, r0, tight, yellowCenter } = P;
  const d = r0 * (1 - (tight || 0.5));
  if (stage === 1)
    return _svg(
      _sh1 +
        _stem(S, 3, 62) +
        `<path d="M30 80 Q19 73 17 63 Q25 68 30 77" fill="${S}"/>` +
        `<circle cx="30" cy="55" r="${(r0 * 0.5).toFixed(1)}" fill="${p}" opacity=".88"/>` +
        `<circle cx="30" cy="53" r="${(r0 * 0.32).toFixed(1)}" fill="${pl}" opacity=".65"/>` +
        `<circle cx="30" cy="51" r="${(r0 * 0.18).toFixed(1)}" fill="${pll}" opacity=".5"/>`,
    );
  if (stage === 2)
    return _svg(
      _sh +
        _stem(S, 3, 54) +
        `<path d="M30 78 Q15 68 13 55 Q23 62 30 72" fill="${S}"/>` +
        `<path d="M30 78 Q45 68 47 55 Q37 62 30 72" fill="${S}"/>` +
        `<circle cx="30" cy="${cy}" r="${(r0 * 0.85).toFixed(1)}" fill="${p}" opacity=".9"/>` +
        `<circle cx="${(30 - d).toFixed(1)}" cy="${(cy - d * 0.7).toFixed(1)}" r="${(r0 * 0.68).toFixed(1)}" fill="${pl}"/>` +
        `<circle cx="${(30 + d).toFixed(1)}" cy="${(cy - d * 0.7).toFixed(1)}" r="${(r0 * 0.68).toFixed(1)}" fill="${pl}"/>` +
        `<circle cx="30" cy="${(cy - d * 1.2).toFixed(1)}" r="${(r0 * 0.63).toFixed(1)}" fill="${p}"/>` +
        `<circle cx="30" cy="${(cy + d * 0.4).toFixed(1)}" r="${(r0 * 0.5).toFixed(1)}" fill="${pd}"/>` +
        `<circle cx="30" cy="${(cy - d * 0.3).toFixed(1)}" r="${(r0 * 0.37).toFixed(1)}" fill="${pl}"/>` +
        `<circle cx="30" cy="${(cy - d * 0.6).toFixed(1)}" r="${(r0 * 0.22).toFixed(1)}" fill="${pll}" opacity=".8"/>`,
    );
  return _svg(
    _sh +
      _stem(S, 3.5, 50) +
      `<path d="M30 76 Q12 64 10 50 Q22 57 30 70" fill="${S}"/>` +
      `<path d="M30 76 Q48 64 50 50 Q37 57 30 70" fill="${S}"/>` +
      _aura(cy, r0 + 7, pll, rare) +
      `<circle cx="30" cy="${cy}" r="${r0}" fill="${p}"/>` +
      `<circle cx="${(30 - d * 1.2).toFixed(1)}" cy="${(cy - d).toFixed(1)}" r="${(r0 * 0.75).toFixed(1)}" fill="${pl}"/>` +
      `<circle cx="${(30 + d * 1.2).toFixed(1)}" cy="${(cy - d).toFixed(1)}" r="${(r0 * 0.75).toFixed(1)}" fill="${pl}"/>` +
      `<circle cx="30" cy="${(cy - d * 1.5).toFixed(1)}" r="${(r0 * 0.72).toFixed(1)}" fill="${p}"/>` +
      `<circle cx="${(30 - d).toFixed(1)}" cy="${(cy + d * 0.7).toFixed(1)}" r="${(r0 * 0.62).toFixed(1)}" fill="${pd}"/>` +
      `<circle cx="${(30 + d).toFixed(1)}" cy="${(cy + d * 0.7).toFixed(1)}" r="${(r0 * 0.62).toFixed(1)}" fill="${pd}"/>` +
      `<circle cx="30" cy="${(cy + d * 0.4).toFixed(1)}" r="${(r0 * 0.6).toFixed(1)}" fill="${p}"/>` +
      `<circle cx="30" cy="${(cy - d * 0.5).toFixed(1)}" r="${(r0 * 0.46).toFixed(1)}" fill="${pl}"/>` +
      `<circle cx="30" cy="${(cy - d).toFixed(1)}" r="${(r0 * 0.3).toFixed(1)}" fill="${pll}"/>` +
      (yellowCenter
        ? `<circle cx="${(30 - d * 0.35).toFixed(1)}" cy="${(cy - d * 0.5).toFixed(1)}" r="1.5" fill="#fdd835" opacity=".9"/><circle cx="${(30 + d * 0.35).toFixed(1)}" cy="${(cy - d * 0.5).toFixed(1)}" r="1.5" fill="#fdd835" opacity=".9"/><circle cx="30" cy="${(cy - d * 0.8).toFixed(1)}" r="1.5" fill="#fdd835" opacity=".9"/>`
        : ""),
  );
}

// ── 7. NOTCHED — heart-shaped petals with notched tips (cherry blossom) ──

export function renderNotched(f: FlowerDef, stage: number, P: ShapeParamsNotched): string {
  const { p, pl, pll, pd, S, rare } = _fc(f);
  const { n, cy, cR, cFill } = P;
  const petalPath = (cx: number, ccy: number, r: number, angle: number): string => {
    const a = (angle * Math.PI) / 180;
    const cos = Math.cos(a), sin = Math.sin(a);
    const dx = r * 0.6, dy = r;
    const notch = r * 0.18;
    // heart-shaped petal: two arcs meeting at a notched tip
    const pts: number[][] = [
      [0, 0],
      [-dx * 0.7, -dy * 0.4],
      [-dx * 0.3, -dy * 0.95],
      [0, -dy + notch], // notch dip
      [dx * 0.3, -dy * 0.95],
      [dx * 0.7, -dy * 0.4],
      [0, 0],
    ];
    const rotated = pts.map(([x, y]) => [
      cx + x * cos - y * sin,
      ccy + x * sin + y * cos,
    ]);
    return `M${rotated[0].map(v => v.toFixed(1)).join(",")} C${rotated[1].map(v => v.toFixed(1)).join(",")} ${rotated[2].map(v => v.toFixed(1)).join(",")} ${rotated[3].map(v => v.toFixed(1)).join(",")} C${rotated[4].map(v => v.toFixed(1)).join(",")} ${rotated[5].map(v => v.toFixed(1)).join(",")} ${rotated[6].map(v => v.toFixed(1)).join(",")}Z`;
  };
  if (stage === 1)
    return _svg(
      _sh1 +
        _stem(S, 2.5, 65) +
        `<path d="M30 82 Q19 75 17 66 Q25 70 30 78" fill="${S}"/>` +
        `<path d="${petalPath(30, 58, 8, 0)}" fill="${p}" opacity=".75"/>`,
    );
  const petals = (sc: number): string => {
    const parts: string[] = [];
    for (let i = 0; i < n; i++) {
      const a = (360 / n) * i;
      parts.push(`<path d="${petalPath(30, cy, 12 * sc, a)}" fill="${i % 2 ? pl : p}"/>`);
    }
    return parts.join("");
  };
  if (stage === 2)
    return _svg(
      _sh +
        _stem(S, 2.5, 52) +
        `<path d="M30 78 Q16 70 14 60 Q24 65 30 72" fill="${S}"/>` +
        petals(0.7) +
        `<circle cx="30" cy="${cy}" r="${(cR * 0.75).toFixed(1)}" fill="${cFill}"/>`,
    );
  return _svg(
    _sh +
      _stem(S, 3.5, 50) +
      _leaf(S) +
      _aura(cy, cR + 10, pll, rare) +
      petals(1) +
      `<circle cx="30" cy="${cy}" r="${cR}" fill="${cFill}"/>`,
  );
}

// ── 8. ASYMMETRIC — larger bottom petal, fan shape (violet) ──

export function renderAsymmetric(f: FlowerDef, stage: number, P: ShapeParamsAsymmetric): string {
  const { p, pl, pll, pd, S, rare } = _fc(f);
  const { cy, cR, cFill } = P;
  if (stage === 1)
    return _svg(
      _sh1 +
        _stem(S, 2.5, 65) +
        `<path d="M30 82 Q19 75 17 66 Q25 70 30 78" fill="${S}"/>` +
        `<ellipse cx="30" cy="58" rx="6" ry="8" fill="${p}" opacity=".75"/>`,
    );
  const violetPetals = (sc: number): string => {
    // 2 upper petals, 2 side petals, 1 larger bottom petal
    const rx = 7 * sc, ry = 8 * sc;
    const brx = 9 * sc, bry = 11 * sc; // bigger bottom
    return (
      // upper pair
      `<ellipse cx="${(30 - 5 * sc).toFixed(1)}" cy="${(cy - 8 * sc).toFixed(1)}" rx="${(rx * 0.85).toFixed(1)}" ry="${(ry * 0.9).toFixed(1)}" fill="${p}" transform="rotate(-15,30,${cy})"/>` +
      `<ellipse cx="${(30 + 5 * sc).toFixed(1)}" cy="${(cy - 8 * sc).toFixed(1)}" rx="${(rx * 0.85).toFixed(1)}" ry="${(ry * 0.9).toFixed(1)}" fill="${p}" transform="rotate(15,30,${cy})"/>` +
      // side pair
      `<ellipse cx="${(30 - 9 * sc).toFixed(1)}" cy="${(cy - 2 * sc).toFixed(1)}" rx="${(rx * 0.9).toFixed(1)}" ry="${(ry * 0.8).toFixed(1)}" fill="${pl}" transform="rotate(-35,30,${cy})"/>` +
      `<ellipse cx="${(30 + 9 * sc).toFixed(1)}" cy="${(cy - 2 * sc).toFixed(1)}" rx="${(rx * 0.9).toFixed(1)}" ry="${(ry * 0.8).toFixed(1)}" fill="${pl}" transform="rotate(35,30,${cy})"/>` +
      // large bottom petal with dark veins
      `<ellipse cx="30" cy="${(cy + 4 * sc).toFixed(1)}" rx="${brx.toFixed(1)}" ry="${bry.toFixed(1)}" fill="${p}"/>` +
      `<line x1="30" y1="${(cy + 1 * sc).toFixed(1)}" x2="30" y2="${(cy + 12 * sc).toFixed(1)}" stroke="${pd}" stroke-width="0.7" opacity=".4"/>` +
      `<line x1="30" y1="${(cy + 3 * sc).toFixed(1)}" x2="${(30 - 3 * sc).toFixed(1)}" y2="${(cy + 10 * sc).toFixed(1)}" stroke="${pd}" stroke-width="0.5" opacity=".3"/>`
    );
  };
  if (stage === 2)
    return _svg(
      _sh +
        _stem(S, 2.5, 52) +
        `<path d="M30 78 Q16 70 14 60 Q24 65 30 72" fill="${S}"/>` +
        violetPetals(0.75) +
        `<circle cx="30" cy="${cy}" r="${(cR * 0.7).toFixed(1)}" fill="${cFill}"/>`,
    );
  return _svg(
    _sh +
      _stem(S, 3, 50) +
      _leaf(S) +
      _aura(cy, 18, pll, rare) +
      violetPetals(1) +
      `<circle cx="30" cy="${cy}" r="${cR}" fill="${cFill}"/>`,
  );
}

// ── 9. STANDARDS — 3 upright + 3 drooping petals (iris) ──

export function renderStandards(f: FlowerDef, stage: number, P: ShapeParamsStandards): string {
  const { p, pl, pll, pd, S, rare } = _fc(f);
  const { cy, cR, cFill } = P;
  if (stage === 1)
    return _svg(
      _sh1 +
        _stem(S, 3, 60) +
        `<path d="M30 80 Q19 73 17 63 Q25 68 30 77" fill="${S}"/>` +
        `<path d="M25 62 Q24 52 30 47 Q36 52 35 62 Q32 65 30 66 Q28 65 25 62Z" fill="${p}" opacity=".85"/>`,
    );
  const irisPetals = (sc: number): string => {
    // 3 upright "standards" — narrow tall petals pointing up
    const standards = [0, 120, 240].map(a => {
      const rad = (a * Math.PI) / 180;
      const x = 30 + Math.sin(rad) * 4 * sc;
      const uy = cy - 14 * sc;
      return `<ellipse cx="${x.toFixed(1)}" cy="${uy.toFixed(1)}" rx="${(3.5 * sc).toFixed(1)}" ry="${(10 * sc).toFixed(1)}" fill="${pl}" transform="rotate(${(a * 0.15).toFixed(1)},${x.toFixed(1)},${uy.toFixed(1)})"/>`;
    }).join("");
    // 3 drooping "falls" — wider petals curving downward
    const falls = [60, 180, 300].map(a => {
      const rad = (a * Math.PI) / 180;
      const x = 30 + Math.sin(rad) * 10 * sc;
      const fy = cy + 4 * sc;
      return (
        `<ellipse cx="${x.toFixed(1)}" cy="${fy.toFixed(1)}" rx="${(5 * sc).toFixed(1)}" ry="${(8 * sc).toFixed(1)}" fill="${p}" transform="rotate(${(a * 0.12 - 10).toFixed(1)},${x.toFixed(1)},${fy.toFixed(1)})"/>` +
        `<ellipse cx="${x.toFixed(1)}" cy="${(fy + 2 * sc).toFixed(1)}" rx="${(3 * sc).toFixed(1)}" ry="${(2 * sc).toFixed(1)}" fill="${pd}" opacity=".5"/>`
      );
    }).join("");
    return falls + standards;
  };
  if (stage === 2)
    return _svg(
      _sh +
        _stem(S, 3, 54) +
        `<path d="M30 78 Q15 68 13 55 Q23 62 30 72" fill="${S}"/>` +
        irisPetals(0.75) +
        (cR ? `<circle cx="30" cy="${cy}" r="${(cR * 0.75).toFixed(1)}" fill="${cFill}"/>` : ""),
    );
  return _svg(
    _sh +
      _stem(S, 3.5, 52) +
      `<path d="M30 76 Q12 64 10 50 Q22 57 30 70" fill="${S}"/>` +
      `<path d="M30 76 Q48 64 50 50 Q37 57 30 70" fill="${S}"/>` +
      _aura(cy, 20, pll, rare) +
      irisPetals(1) +
      (cR ? `<circle cx="30" cy="${cy}" r="${cR}" fill="${cFill}"/>` : ""),
  );
}

// ── 10. LABELLUM — orchid with large decorative lip petal ──

export function renderLabellum(f: FlowerDef, stage: number, P: ShapeParamsLabellum): string {
  const { p, pl, pll, pd, S, rare } = _fc(f);
  const { cy, cR, cFill, lipColor } = P;
  const lip = lipColor || pd;
  if (stage === 1)
    return _svg(
      _sh1 +
        _stem(S, 3, 60) +
        `<path d="M30 80 Q19 73 17 63 Q25 68 30 77" fill="${S}"/>` +
        `<ellipse cx="30" cy="55" rx="6" ry="9" fill="${p}" opacity=".8"/>`,
    );
  const orchidPetals = (sc: number): string => {
    // 3 outer sepals — narrow pointed
    const sepals = [0, 120, 240].map(a =>
      `<ellipse cx="30" cy="${(cy - 11 * sc).toFixed(1)}" rx="${(3 * sc).toFixed(1)}" ry="${(10 * sc).toFixed(1)}" fill="${p}" transform="rotate(${a},30,${cy})"/>`
    ).join("");
    // 2 lateral petals — slightly wider
    const laterals =
      `<ellipse cx="${(30 - 8 * sc).toFixed(1)}" cy="${(cy - 3 * sc).toFixed(1)}" rx="${(4 * sc).toFixed(1)}" ry="${(7 * sc).toFixed(1)}" fill="${pl}" transform="rotate(-25,30,${cy})"/>` +
      `<ellipse cx="${(30 + 8 * sc).toFixed(1)}" cy="${(cy - 3 * sc).toFixed(1)}" rx="${(4 * sc).toFixed(1)}" ry="${(7 * sc).toFixed(1)}" fill="${pl}" transform="rotate(25,30,${cy})"/>`;
    // labellum — large ornate lip
    const lipPetal =
      `<path d="M${(30 - 7 * sc).toFixed(1)} ${cy.toFixed(1)} Q${(30 - 9 * sc).toFixed(1)} ${(cy + 10 * sc).toFixed(1)} 30 ${(cy + 14 * sc).toFixed(1)} Q${(30 + 9 * sc).toFixed(1)} ${(cy + 10 * sc).toFixed(1)} ${(30 + 7 * sc).toFixed(1)} ${cy.toFixed(1)} Q30 ${(cy + 5 * sc).toFixed(1)} ${(30 - 7 * sc).toFixed(1)} ${cy.toFixed(1)}Z" fill="${lip}"/>` +
      `<circle cx="30" cy="${(cy + 6 * sc).toFixed(1)}" r="${(2.5 * sc).toFixed(1)}" fill="${pll}" opacity=".6"/>` +
      `<circle cx="${(30 - 2 * sc).toFixed(1)}" cy="${(cy + 4 * sc).toFixed(1)}" r="${(1 * sc).toFixed(1)}" fill="${pd}" opacity=".5"/>` +
      `<circle cx="${(30 + 2 * sc).toFixed(1)}" cy="${(cy + 4 * sc).toFixed(1)}" r="${(1 * sc).toFixed(1)}" fill="${pd}" opacity=".5"/>`;
    return sepals + laterals + lipPetal;
  };
  if (stage === 2)
    return _svg(
      _sh +
        _stem(S, 3, 54) +
        `<path d="M30 78 Q15 68 13 55 Q23 62 30 72" fill="${S}"/>` +
        orchidPetals(0.75) +
        (cR ? `<circle cx="30" cy="${cy}" r="${(cR * 0.6).toFixed(1)}" fill="${cFill}"/>` : ""),
    );
  return _svg(
    _sh +
      _stem(S, 3.5, 52) +
      `<path d="M30 76 Q12 64 10 50 Q22 57 30 70" fill="${S}"/>` +
      `<path d="M30 76 Q48 64 50 50 Q37 57 30 70" fill="${S}"/>` +
      _aura(cy, 20, pll, rare) +
      orchidPetals(1) +
      (cR ? `<circle cx="30" cy="${cy}" r="${cR}" fill="${cFill}"/>` : ""),
  );
}

// ── Dispatch map ───────────────────────────────────────────────

export type RendererFn = (f: FlowerDef, stage: number, P: ShapeParams) => string;

export const FLOWER_RENDERERS: Record<string, RendererFn> = {
  radial: renderRadial as RendererFn,
  cup: renderCup as RendererFn,
  spike: renderSpike as RendererFn,
  star: renderStar as RendererFn,
  bell: renderBell as RendererFn,
  rosette: renderRosette as RendererFn,
  notched: renderNotched as RendererFn,
  asymmetric: renderAsymmetric as RendererFn,
  standards: renderStandards as RendererFn,
  labellum: renderLabellum as RendererFn,
};
