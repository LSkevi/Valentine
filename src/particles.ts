// ══════════════════════════════════════════════════════════
// PARTICLES & VISUAL EFFECTS — pure DOM animation functions
// Extracted from game.js for modular use
// ══════════════════════════════════════════════════════════

/**
 * Create falling petal emoji elements across the screen.
 * Used on initial load for decorative background petals.
 */
export function initPetals(): void {
  const pool = ['\u{1F338}', '\u{1F337}', '\u2723', '\u2740', '\u{1F42E}', '\u{1F33A}'];
  for (let i = 0; i < 14; i++) {
    const el = document.createElement('div');
    el.className = 'petal';
    el.textContent = pool[Math.floor(Math.random() * pool.length)];
    const left = 5 + Math.random() * 90;
    const dur = 13 + Math.random() * 18;
    const delay = Math.random() * 20;
    el.style.cssText =
      `left:${left}%;font-size:${0.7 + Math.random() * 0.8}em;` +
      `animation-duration:${dur}s;animation-delay:-${delay}s;`;
    document.body.appendChild(el);
  }
}

/**
 * Create day-time ambient particles (butterflies, pollen, clovers).
 */
export function initParticles(): void {
  const dayPool = ['\u{1F98B}', '\u2727', '\u{1F33E}', '\u{1F340}'];
  for (let i = 0; i < 6; i++) {
    const el = document.createElement('div');
    el.className = 'garden-particle';
    el.textContent = dayPool[Math.floor(Math.random() * dayPool.length)];
    const left = 10 + Math.random() * 80;
    const top = 30 + Math.random() * 50;
    const dur = 6 + Math.random() * 8;
    const delay = Math.random() * 10;
    const size = 0.6 + Math.random() * 0.5;
    el.style.cssText =
      `left:${left}%;top:${top}%;font-size:${size}em;` +
      `animation-duration:${dur}s;animation-delay:-${delay}s;`;
    el.dataset.dayParticle = '1';
    document.body.appendChild(el);
  }
}

/**
 * Create night-time firefly elements.
 */
export function initFireflies(): void {
  for (let i = 0; i < 8; i++) {
    const el = document.createElement('div');
    el.className = 'firefly';
    const left = 5 + Math.random() * 90;
    const dur = 8 + Math.random() * 12;
    const delay = Math.random() * 15;
    el.style.cssText =
      `left:${left}%;bottom:10%;` +
      `animation-duration:${dur}s;animation-delay:-${delay}s;`;
    el.dataset.firefly = '1';
    document.body.appendChild(el);
  }
}

/**
 * Toggle visibility of day particles vs night fireflies
 * based on the current night-mode class on body.
 */
export function updateParticleVisibility(): void {
  const isNight = document.body.classList.contains('night-mode');
  document.querySelectorAll<HTMLElement>('[data-day-particle]').forEach((el) => {
    el.style.display = isNight ? 'none' : '';
  });
  document.querySelectorAll<HTMLElement>('[data-firefly]').forEach((el) => {
    el.style.display = isNight ? '' : 'none';
  });
}

/**
 * Spawn a single sparkle emoji at absolute (x, y) position.
 * Auto-removes after 950ms.
 */
export function spawnSparkle(x: number, y: number, emoji = '\u2728'): void {
  const el = document.createElement('div');
  el.className = 'sparkle';
  el.textContent = emoji;
  el.style.cssText = `left:${x}px;top:${y}px`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 950);
}

/**
 * Spawn a water-drop splash at absolute (x, y) position.
 * Auto-removes after 680ms.
 */
export function spawnSplash(x: number, y: number): void {
  const el = document.createElement('div');
  el.className = 'splash';
  el.textContent = '\u{1F4A7}';
  el.style.cssText = `left:${x}px;top:${y}px`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 680);
}

/**
 * Burst 16 random sparkle emojis across the viewport in a staggered sequence.
 */
export function multiSparkle(): void {
  const pool = ['\u2728', '\u{1F499}', '\u2B50', '\u{1F4AB}', '\u{1F31F}', '\u{1F48E}', '\u{1F52E}', '\u{1FAE7}'];
  for (let i = 0; i < 16; i++) {
    setTimeout(() => {
      spawnSparkle(
        window.innerWidth * (0.08 + Math.random() * 0.84),
        window.innerHeight * (0.1 + Math.random() * 0.7),
        pool[Math.floor(Math.random() * pool.length)],
      );
    }, i * 90);
  }
}

/**
 * Petal-colored burst when a flower blooms.
 * Spawns 8 circular petal particles + 4 text sparkles around the plot element.
 */
export function spawnBloomParticles(plotEl: HTMLElement | null, petalColor: string): void {
  if (!plotEl) return;
  const rect = plotEl.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height * 0.3;

  // 8 petal particles
  for (let i = 0; i < 8; i++) {
    const el = document.createElement('div');
    el.className = 'bloom-particle';
    const sz = 5 + Math.random() * 6;
    const angle = (Math.PI * 2 * i) / 8 + (Math.random() - 0.5) * 0.5;
    const dist = 25 + Math.random() * 35;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist - 20; // bias upward
    const dur = 1.2 + Math.random() * 0.8;
    el.style.cssText =
      `left:${cx}px;top:${cy}px;width:${sz}px;height:${sz}px;` +
      `background:${petalColor};position:fixed;` +
      `--bp-dx:${dx}px;--bp-dy:${dy}px;--bp-dur:${dur}s;` +
      `animation-delay:${Math.random() * 0.15}s;`;
    document.body.appendChild(el);
    el.addEventListener('animationend', function (this: HTMLElement) {
      this.remove();
    });
  }

  // 4 sparkle characters
  const sparkleChars = ['\u2726', '\u2727', '\u00B7', '\u2605'];
  for (let j = 0; j < 4; j++) {
    const sp = document.createElement('div');
    sp.className = 'bloom-sparkle';
    const angle2 = (Math.PI * 2 * j) / 4 + (Math.random() - 0.5) * 0.8;
    const dist2 = 15 + Math.random() * 25;
    const dx2 = Math.cos(angle2) * dist2;
    const dy2 = Math.sin(angle2) * dist2 - 15;
    const dur2 = 1 + Math.random() * 0.6;
    sp.textContent = sparkleChars[j % 4];
    sp.style.cssText =
      `left:${cx}px;top:${cy}px;color:${petalColor};position:fixed;` +
      `--bp-dx:${dx2}px;--bp-dy:${dy2}px;--bp-dur:${dur2}s;` +
      `animation-delay:${0.1 + Math.random() * 0.2}s;`;
    document.body.appendChild(sp);
    sp.addEventListener('animationend', function (this: HTMLElement) {
      this.remove();
    });
  }
}

/**
 * Confetti celebration burst — 30 colored squares across the viewport.
 */
export function confettiBurst(): void {
  const colors = [
    '#f48fb1', '#ce93d8', '#90caf9', '#a5d6a7',
    '#ffe082', '#e91e63', '#f9a825',
  ];
  for (let i = 0; i < 30; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-bit';
    const x = window.innerWidth * (0.1 + Math.random() * 0.8);
    const y = window.innerHeight * (0.15 + Math.random() * 0.35);
    const sz = 6 + Math.random() * 9;
    const dur = 1.2 + Math.random() * 1.5;
    el.style.cssText =
      `left:${x}px;top:${y}px;width:${sz}px;height:${sz + 2}px;` +
      `background:${colors[Math.floor(Math.random() * colors.length)]};` +
      `animation-duration:${dur}s;`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), dur * 1000 + 100);
  }
}
