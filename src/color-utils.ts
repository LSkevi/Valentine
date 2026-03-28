// Color utility functions — pure, no game state or DOM dependencies.
// Extracted from game.js for reuse and type safety.

/**
 * Lighten a hex color by adding `amt` to each RGB channel.
 * Returns an `rgb(...)` string.
 */
export function lighter(hex: string, amt: number = 52): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${Math.min(255, r + amt)},${Math.min(255, g + amt)},${Math.min(255, b + amt)})`;
}

/**
 * Darken a hex color by subtracting `amt` from each RGB channel.
 * Returns an `rgb(...)` string.
 */
export function darker(hex: string, amt: number = 44): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${Math.max(0, r - amt)},${Math.max(0, g - amt)},${Math.max(0, b - amt)})`;
}

/**
 * Returns true if the hex color is perceptually light (ITU-R BT.709 luminance > 200).
 */
export function isLightColor(hex: string): boolean {
  if (!hex || hex.length < 7) return false;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) > 200;
}

/**
 * Average two hex colors, returning a new hex color string.
 */
export function mixColors(hex1: string, hex2: string): string {
  const r1 = parseInt(hex1.slice(1, 3), 16);
  const g1 = parseInt(hex1.slice(3, 5), 16);
  const b1 = parseInt(hex1.slice(5, 7), 16);
  const r2 = parseInt(hex2.slice(1, 3), 16);
  const g2 = parseInt(hex2.slice(3, 5), 16);
  const b2 = parseInt(hex2.slice(5, 7), 16);
  const r = Math.round((r1 + r2) / 2);
  const g = Math.round((g1 + g2) / 2);
  const b = Math.round((b1 + b2) / 2);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/**
 * Shift the hue of a hex color by the given number of degrees (HSV model).
 * Returns a hex color string.
 */
export function shiftHue(hex: string, degrees: number): string {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  const s = max === 0 ? 0 : d / max;
  const v = max;
  if (d > 0) {
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }
  h = ((h * 360 + degrees) % 360) / 360;
  if (h < 0) h += 1;
  const hi = Math.floor(h * 6);
  const f = h * 6 - hi;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  let ro: number, go: number, bo: number;
  switch (hi % 6) {
    case 0: ro = v; go = t; bo = p; break;
    case 1: ro = q; go = v; bo = p; break;
    case 2: ro = p; go = v; bo = t; break;
    case 3: ro = p; go = q; bo = v; break;
    case 4: ro = t; go = p; bo = v; break;
    case 5: ro = v; go = p; bo = q; break;
    default: ro = 0; go = 0; bo = 0;
  }
  return "#" + [ro, go, bo].map((c) => Math.round(c * 255).toString(16).padStart(2, "0")).join("");
}

/**
 * Approximate a human-readable color name from a hex string.
 * Covers reds, oranges, yellows, greens, blues, purples, and achromatics.
 */
export function colorNameFromHex(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const sat = max - min;
  const brightness = (r + g + b) / 3;

  // Achromatic
  if (brightness > 230) return "Snow";
  if (brightness > 200 && sat < 30) return "Ivory";
  if (brightness < 35) return "Midnight";
  if (brightness < 60 && sat < 40) return "Shadow";
  if (sat < 25) return brightness > 160 ? "Silver" : brightness > 100 ? "Ash" : "Dusk";

  // Compute hue (0-360)
  let h = 0;
  if (sat > 0) {
    if (max === r) h = ((g - b) / sat + (g < b ? 6 : 0)) * 60;
    else if (max === g) h = ((b - r) / sat + 2) * 60;
    else h = ((r - g) / sat + 4) * 60;
  }

  // Reds (0-15, 345-360)
  if (h >= 345 || h < 15) {
    if (brightness > 190) return "Blush";
    if (brightness > 140) return "Rose";
    if (brightness > 100) return "Scarlet";
    return "Crimson";
  }
  // Red-Orange (15-30)
  if (h >= 15 && h < 30) {
    if (brightness > 160) return "Peach";
    return "Rust";
  }
  // Orange (30-45)
  if (h >= 30 && h < 45) {
    if (brightness > 170) return "Apricot";
    return "Amber";
  }
  // Gold-Yellow (45-65)
  if (h >= 45 && h < 65) {
    if (brightness > 180) return "Golden";
    return "Honey";
  }
  // Yellow-Green (65-90)
  if (h >= 65 && h < 90) {
    if (brightness > 160) return "Lemon";
    return "Olive";
  }
  // Green (90-150)
  if (h >= 90 && h < 150) {
    if (brightness > 160) return "Spring";
    if (brightness > 100) return "Fern";
    return "Forest";
  }
  // Cyan-Teal (150-190)
  if (h >= 150 && h < 190) {
    if (brightness > 150) return "Seafoam";
    return "Pine";
  }
  // Blue (190-250)
  if (h >= 190 && h < 250) {
    if (brightness > 170) return "Sky";
    if (brightness > 120) return "Sapphire";
    return "Cobalt";
  }
  // Blue-Purple (250-280)
  if (h >= 250 && h < 280) {
    if (brightness > 150) return "Lavender";
    if (brightness > 100) return "Violet";
    return "Indigo";
  }
  // Purple-Magenta (280-320)
  if (h >= 280 && h < 320) {
    if (brightness > 160) return "Orchid";
    if (brightness > 100) return "Plum";
    return "Royal";
  }
  // Magenta-Pink (320-345)
  if (h >= 320 && h < 345) {
    if (brightness > 170) return "Coral";
    if (brightness > 120) return "Magenta";
    return "Berry";
  }
  return "Mystic";
}

/**
 * Return an exotic mutation-only color name from a hex string.
 * These names (Jade, Teal, Azure, etc.) are rarer than colorNameFromHex names.
 */
export function colorNameForMutation(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const max = Math.max(r, g, b);
  const sat = max - Math.min(r, g, b);
  const brightness = (r + g + b) / 3;
  if (sat < 20) return brightness > 150 ? "Ghostly" : "Obsidian";

  let h = 0;
  if (sat > 0) {
    if (max === r) h = ((g - b) / sat + (g < b ? 6 : 0)) * 60;
    else if (max === g) h = ((b - r) / sat + 2) * 60;
    else h = ((r - g) / sat + 4) * 60;
  }

  if (h >= 90 && h < 160) return brightness > 140 ? "Jade" : "Emerald";
  if (h >= 160 && h < 200) return brightness > 140 ? "Teal" : "Abyssal";
  if (h >= 200 && h < 260) return brightness > 150 ? "Azure" : "Celestial";
  if (h >= 260 && h < 310) return "Ethereal";
  if (h >= 310 || h < 20) return brightness > 160 ? "Flamingo" : "Garnet";
  if (h >= 20 && h < 50) return "Solar";
  if (h >= 50 && h < 90) return "Aurora";
  return "Phantom";
}
