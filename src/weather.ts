// ══════════════════════════════════════════════════════════
// WEATHER SYSTEM
// Extracted from game.js for modular use
// ══════════════════════════════════════════════════════════

import type { FlowerDef } from './types';
import {
  WEATHER_TYPES,
  WEATHER_LABELS,
  WEATHER_CLASSES,
  WEATHER_INTERVAL_MIN,
  WEATHER_INTERVAL_MAX,
} from './constants';

// ── Bridges to legacy globals ─────────────────────────────
const G = (window as any).__G;
const FLOWERS: Record<string, FlowerDef> = (window as any).__FLOWERS ?? {};
const saveG = (window as any).__saveG ?? (() => {});
const renderDrops = (window as any).__renderDrops ?? (() => {});
const toast = (window as any).__toast ?? ((_msg: string, _ms?: number) => {});
const playSound = (window as any).__playSound ?? (() => {});
const showContextTip = (window as any).__showContextTip ?? ((_key: string) => {});
const checkAchievements = (window as any).__checkAchievements ?? (() => {});
const updateMusicForWeather = (window as any).__updateMusicForWeather ?? (() => {});
const updateRainSfx = (window as any).__updateRainSfx ?? (() => {});

// ── Weather tick — called every second from gameTick ──────
export function tickWeather(): void {
  const now = Date.now();
  if (!G.weatherTimer) {
    G.weatherTimer = now + WEATHER_INTERVAL_MIN +
      Math.random() * (WEATHER_INTERVAL_MAX - WEATHER_INTERVAL_MIN);
  }
  if (now >= G.weatherTimer) {
    const oldWeather = G.weather;
    // Weighted selection: sunny 40%, rainy 30%, drought 15%, snowy 15%
    const weights: Record<string, number> = { sunny: 40, rainy: 30, drought: 15, snowy: 15 };
    weights[oldWeather] = 0; // never repeat same weather
    let total = 0;
    WEATHER_TYPES.forEach((w) => { total += weights[w]; });
    const r = Math.random() * total;
    let acc = 0;
    G.weather = "sunny"; // fallback
    for (let wi = 0; wi < WEATHER_TYPES.length; wi++) {
      acc += weights[WEATHER_TYPES[wi]];
      if (r < acc) { G.weather = WEATHER_TYPES[wi]; break; }
    }
    G.weatherTimer = now + WEATHER_INTERVAL_MIN +
      Math.random() * (WEATHER_INTERVAL_MAX - WEATHER_INTERVAL_MIN);
    saveG();
    if (G.weather === "rainy" && G.water < G.maxWater) {
      G.water = Math.min(G.maxWater, G.water + 1);
      renderDrops();
      saveG();
    }
    playSound("weather");
    if (G.weather === "snowy") {
      toast("\u2744\uFE0F Snow! Your growing flowers may get frosty!", 3000);
    } else {
      toast("Weather changed: " + WEATHER_LABELS[G.weather as keyof typeof WEATHER_LABELS], 2000);
    }
    setTimeout(() => { showContextTip("firstWeather"); }, 2500);
    checkAchievements();
  }
  renderWeather();
}

// ── Render weather bar and grid class ─────────────────────
export function renderWeather(): void {
  const bar = document.getElementById("weatherBar");
  if (!bar) return;
  const weatherKey = (G.weather || "sunny") as keyof typeof WEATHER_LABELS;
  bar.textContent = WEATHER_LABELS[weatherKey] || WEATHER_LABELS.sunny;
  bar.className = "weather-bar " + (WEATHER_CLASSES[weatherKey] || WEATHER_CLASSES.sunny);
  // Weather-responsive sway intensity
  const swayMap: Record<string, number> = { sunny: 1.5, rainy: 2.5, drought: 0.5, snowy: 1.8 };
  document.documentElement.style.setProperty("--sway-intensity", String(swayMap[G.weather] || 1.5));
  // Apply weather class to garden grid for pot-level effects
  const grid = document.getElementById("gardenGrid");
  if (grid) {
    WEATHER_TYPES.forEach((wt) => { grid.classList.remove("weather-" + wt); });
    grid.classList.add("weather-" + (G.weather || "sunny"));
  }
  // Visual weather effects
  renderWeatherFx();
  // Update ambient music for weather
  updateMusicForWeather();
  // Rain ambient is SFX, not music
  updateRainSfx();
}

// ── Visual Weather FX ─────────────────────────────────────
let _currentWeatherFx = "";

export function renderWeatherFx(): void {
  const fx = document.getElementById("weatherFx");
  if (!fx) return;
  const w = G.weather as string;
  if (w === _currentWeatherFx) return; // already showing
  // Fade out old
  fx.classList.add("weather-fx-fade");
  fx.style.opacity = "0";
  setTimeout(() => {
    while (fx.firstChild) fx.removeChild(fx.firstChild);
    // Remove sun flare if weather changed from sunny
    const oldFlare = document.querySelector(".sun-lens-flare");
    if (oldFlare && w !== "sunny") oldFlare.remove();
    _currentWeatherFx = w;
    if (w === "rainy") {
      for (let i = 0; i < 35; i++) {
        const drop = document.createElement("div");
        drop.className = "rain-drop";
        const left = Math.random() * 100;
        const h = 15 + Math.random() * 15;
        const dur = 0.8 + Math.random() * 0.6;
        const delay = Math.random() * 2;
        drop.style.cssText =
          "left:" + left + "%;height:" + h + "px;animation-duration:" + dur +
          "s;animation-delay:-" + delay + "s;";
        fx.appendChild(drop);
      }
    } else if (w === "sunny") {
      // Diagonal sun rays + lens flare
      const rayAngles = [-30, -15, 0, 12, 25, 38, 50];
      rayAngles.forEach((angle, idx) => {
        const ray = document.createElement("div");
        ray.className = "sun-ray";
        const left = 5 + idx * 13 + (Math.random() * 6);
        const width = 3 + Math.random() * 3;
        const delay = idx * 0.5 + Math.random() * 0.8;
        ray.style.cssText =
          "left:" + left + "%;width:" + width + "px;transform:rotate(" + angle +
          "deg);animation-delay:" + delay + "s;";
        fx.appendChild(ray);
      });
      // Lens flare on top of everything
      if (!document.querySelector(".sun-lens-flare")) {
        const flare = document.createElement("div");
        flare.className = "sun-lens-flare";
        document.body.appendChild(flare);
      }
    } else if (w === "snowy") {
      for (let si = 0; si < 20; si++) {
        const flake = document.createElement("div");
        flake.className = "snowflake";
        const sl = Math.random() * 100;
        const ssz = 4 + Math.random() * 5;
        const sdur = 4 + Math.random() * 4;
        const sdelay = Math.random() * 6;
        const drift = (Math.random() - 0.5) * 40;
        flake.style.cssText =
          "left:" + sl + "%;width:" + ssz + "px;height:" + ssz +
          "px;animation-duration:" + sdur + "s;animation-delay:-" + sdelay +
          "s;--snow-drift:" + drift + "px;";
        fx.appendChild(flake);
      }
    }
    fx.style.opacity = "1";
  }, 300);
}

// ── Rain auto-water: called periodically from game tick ───
export function rainAutoWater(): void {
  if (G.weather !== "rainy") return;
  if (G.water < G.maxWater) {
    G.water++;
    renderDrops();
    saveG();
  }
}

// ── Reset FX state (useful when forcing weather externally) ─
export function resetWeatherFx(): void {
  _currentWeatherFx = "";
}
