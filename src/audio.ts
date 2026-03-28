// ══════════════════════════════════════════════════════════
// SOUND EFFECTS — Web Audio API synthesized SFX + haptics
// Extracted from game.js for modular use
// ══════════════════════════════════════════════════════════

let _audioCtx: AudioContext | null = null;
export let _soundEnabled: boolean = true;
export let _sfxGain: GainNode | null = null;

/** Set sound enabled/disabled from other modules */
export function setSoundEnabled(v: boolean): void {
  _soundEnabled = v;
}

/** Set the SFX gain node from other modules */
export function setSfxGain(g: GainNode | null): void {
  _sfxGain = g;
}

export function getAudioCtx(): AudioContext | null {
  if (!_audioCtx) {
    try {
      _audioCtx = new (
        (window as any).AudioContext || (window as any).webkitAudioContext
      )();
    } catch (e) {
      return null;
    }
  }
  if (_audioCtx!.state === "suspended") _audioCtx!.resume();
  // Create SFX master gain on first use
  if (!_sfxGain && _audioCtx) {
    const G = (window as any).__G; // TODO: replace with proper G import once modularized
    _sfxGain = _audioCtx.createGain();
    _sfxGain.gain.value = G?.sfxVolume ?? 1.0;
    _sfxGain.connect(_audioCtx.destination);
  }
  return _audioCtx;
}

/** SFX output node — all sounds route through this for volume control */
export function sfxOut(): AudioNode {
  return _sfxGain || getAudioCtx()!.destination;
}

export type SoundName =
  | "water"
  | "bloom"
  | "sale"
  | "achieve"
  | "click"
  | "vip"
  | "plant"
  | "packet_common"
  | "packet_uncommon"
  | "packet_rare"
  | "packet_legendary"
  | "cloud"
  | "whirlpool"
  | "hybrid"
  | "coins"
  | "weather"
  | "reveal_common"
  | "reveal_uncommon"
  | "reveal_rare"
  | "reveal_legendary"
  | "reveal_hybrid"
  | "reveal_unique"
  | "frost_nip"
  | "mutation"
  | "coin_clink"
  | "buy"
  | "packet_tear";

export function playSound(name: SoundName): void {
  if (!_soundEnabled) return;
  const ctx = getAudioCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  let osc: OscillatorNode;
  let gain: GainNode;

  switch (name) {
    case "water": {
      // realistic water drop — resonant plop with harmonic tail
      // Main drop: high-pitched sine with fast pitch decay (the "plink")
      osc = ctx.createOscillator();
      gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = 800;
      filter.Q.value = 3;
      osc.type = "sine";
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.06);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.2);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.04, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.connect(filter).connect(gain).connect(sfxOut());
      osc.start(now);
      osc.stop(now + 0.25);
      // Resonance bubble: lower sine for the "bloop" body
      const osc3 = ctx.createOscillator();
      const gain3 = ctx.createGain();
      osc3.type = "sine";
      osc3.frequency.setValueAtTime(280, now + 0.02);
      osc3.frequency.exponentialRampToValueAtTime(120, now + 0.18);
      gain3.gain.setValueAtTime(0.06, now + 0.02);
      gain3.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc3.connect(gain3).connect(sfxOut());
      osc3.start(now + 0.02);
      osc3.stop(now + 0.2);
      break;
    }

    case "bloom":
      [523, 659, 784].forEach(function (freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, now + i * 0.1);
        gain.gain.linearRampToValueAtTime(0.12, now + i * 0.1 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.3);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + 0.3);
      });
      break;

    case "sale":
      [400, 500, 600].forEach(function (freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.05, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.12);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.12);
      });
      break;

    case "achieve":
      [523, 659, 784, 1047].forEach(function (freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, now + i * 0.12);
        gain.gain.linearRampToValueAtTime(0.1, now + i * 0.12 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.35);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.12);
        osc.stop(now + i * 0.12 + 0.35);
      });
      break;

    case "click": // soft warm tap
      osc = ctx.createOscillator();
      gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 600;
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.connect(gain).connect(sfxOut());
      osc.start(now);
      osc.stop(now + 0.1);
      break;

    case "vip":
      [440, 554, 659, 880].forEach(function (freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, now + i * 0.15);
        gain.gain.linearRampToValueAtTime(0.1, now + i * 0.15 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.15 + 0.4);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.15);
        osc.stop(now + i * 0.15 + 0.4);
      });
      break;

    case "plant": // soft earthy thud
      osc = ctx.createOscillator();
      gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.15);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.connect(gain).connect(sfxOut());
      osc.start(now);
      osc.stop(now + 0.18);
      break;

    case "packet_common": // gentle pop
      osc = ctx.createOscillator();
      gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(520, now + 0.1);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.connect(gain).connect(sfxOut());
      osc.start(now);
      osc.stop(now + 0.15);
      break;

    case "packet_uncommon": // two-note chime
      [523, 659].forEach(function (freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.08, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.2);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + 0.2);
      });
      break;

    case "packet_rare": // shimmering three-note arpeggio
      [587, 740, 880].forEach(function (freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, now + i * 0.08);
        gain.gain.linearRampToValueAtTime(0.1, now + i * 0.08 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.25);
      });
      break;

    case "packet_legendary": // majestic rising four-note fanfare
      [440, 554, 659, 880].forEach(function (freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, now + i * 0.1);
        gain.gain.linearRampToValueAtTime(0.12, now + i * 0.1 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.35);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + 0.35);
      });
      break;

    case "cloud": // rain patter — randomized resonant drips
      for (let _ri = 0; _ri < 7; _ri++) {
        (function (delay: number) {
          const ro = ctx.createOscillator();
          const rg = ctx.createGain();
          const rf = ctx.createBiquadFilter();
          rf.type = "bandpass";
          rf.frequency.value = 600 + Math.random() * 800;
          rf.Q.value = 2 + Math.random() * 3;
          const sf = 1000 + Math.random() * 800;
          ro.type = "sine";
          ro.frequency.setValueAtTime(sf, now + delay);
          ro.frequency.exponentialRampToValueAtTime(sf * 0.2, now + delay + 0.08);
          rg.gain.setValueAtTime(0.04 + Math.random() * 0.04, now + delay);
          rg.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.12);
          ro.connect(rf).connect(rg).connect(sfxOut());
          ro.start(now + delay);
          ro.stop(now + delay + 0.12);
        })(_ri * 0.04 + Math.random() * 0.03);
      }
      break;

    case "whirlpool": // water pouring — bubbling cascade with splash finale
      for (let _wi = 0; _wi < 8; _wi++) {
        (function (idx: number) {
          const wo = ctx.createOscillator();
          const wg = ctx.createGain();
          const wf = ctx.createBiquadFilter();
          wf.type = "lowpass";
          wf.frequency.value = 400 + idx * 80;
          wf.Q.value = 5;
          wo.type = "sine";
          const bf = 200 + Math.random() * 150;
          wo.frequency.setValueAtTime(bf + 100, now + idx * 0.06);
          wo.frequency.exponentialRampToValueAtTime(
            bf * 0.5,
            now + idx * 0.06 + 0.12,
          );
          wg.gain.setValueAtTime(0, now + idx * 0.06);
          wg.gain.linearRampToValueAtTime(0.05, now + idx * 0.06 + 0.02);
          wg.gain.exponentialRampToValueAtTime(
            0.001,
            now + idx * 0.06 + 0.15,
          );
          wo.connect(wf).connect(wg).connect(sfxOut());
          wo.start(now + idx * 0.06);
          wo.stop(now + idx * 0.06 + 0.15);
        })(_wi);
      }
      // Final splash
      {
        const _so = ctx.createOscillator();
        const _sg = ctx.createGain();
        const _sf = ctx.createBiquadFilter();
        _sf.type = "bandpass";
        _sf.frequency.value = 1200;
        _sf.Q.value = 4;
        _so.type = "sine";
        _so.frequency.setValueAtTime(1600, now + 0.5);
        _so.frequency.exponentialRampToValueAtTime(300, now + 0.6);
        _sg.gain.setValueAtTime(0.08, now + 0.5);
        _sg.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
        _so.connect(_sf).connect(_sg).connect(sfxOut());
        _so.start(now + 0.5);
        _so.stop(now + 0.7);
      }
      break;

    case "hybrid": // mysterious DNA merge
      [330, 415, 523, 660].forEach(function (freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + i * 0.12);
        osc.frequency.linearRampToValueAtTime(
          freq * 1.05,
          now + i * 0.12 + 0.3,
        );
        gain.gain.setValueAtTime(0, now + i * 0.12);
        gain.gain.linearRampToValueAtTime(0.08, now + i * 0.12 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.35);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.12);
        osc.stop(now + i * 0.12 + 0.35);
      });
      break;

    case "coins": // soft coin jingle
      [600, 700, 650, 750, 500].forEach(function (freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.04, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.1);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.1);
      });
      break;

    case "weather": // ambient whoosh
      osc = ctx.createOscillator();
      gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.linearRampToValueAtTime(300, now + 0.3);
      osc.frequency.linearRampToValueAtTime(100, now + 0.6);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.06, now + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc.connect(gain).connect(sfxOut());
      osc.start(now);
      osc.stop(now + 0.6);
      break;

    // -- ITEM REVEAL JINGLES (Zelda-style "ta-ra-ram!") --
    case "reveal_common": // simple 2-note pickup: da-ding!
      [392, 523].forEach(function (freq, i) {
        // G4 -> C5
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.12, now + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.25);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.12);
        osc.stop(now + i * 0.12 + 0.25);
      });
      break;

    case "reveal_uncommon": // 3-note rising: da-da-ding!
      [392, 494, 587].forEach(function (freq, i) {
        // G4 -> B4 -> D5
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.12, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.3);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + 0.3);
      });
      break;

    case "reveal_rare": // 4-note fanfare: ta-da-da-DING!
      [330, 392, 494, 659].forEach(function (freq, i) {
        // E4 -> G4 -> B4 -> E5
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = i < 3 ? "triangle" : "sine";
        osc.frequency.value = freq;
        const vol = i === 3 ? 0.16 : 0.1;
        const dur = i === 3 ? 0.5 : 0.2;
        gain.gain.setValueAtTime(vol, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + dur);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + dur);
      });
      break;

    case "reveal_legendary": {
      // epic 5-note: ta-ra-ra-ra-RAAAAM!! with octave doubling
      [294, 370, 440, 554, 740].forEach(function (freq, i) {
        // D4 -> F#4 -> A4 -> C#5 -> F#5
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        const vol = 0.08 + i * 0.02;
        const dur = i === 4 ? 0.8 : 0.18;
        gain.gain.setValueAtTime(vol, now + i * 0.1);
        if (i === 4) {
          gain.gain.setValueAtTime(0.18, now + i * 0.1);
          gain.gain.linearRampToValueAtTime(0.14, now + i * 0.1 + 0.3);
        }
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + dur);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + dur);
      });
      // Octave doubling on final note for fullness
      osc = ctx.createOscillator();
      gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 1480; // F#6
      gain.gain.setValueAtTime(0.06, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);
      osc.connect(gain).connect(sfxOut());
      osc.start(now + 0.4);
      osc.stop(now + 1.1);
      break;
    }

    case "reveal_hybrid": // same as rare — shimmering arpeggio
      [587, 740, 880].forEach(function (freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, now + i * 0.08);
        gain.gain.linearRampToValueAtTime(0.1, now + i * 0.08 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.25);
      });
      break;

    case "reveal_unique": {
      // celestial 6-note ascending with shimmer: the legendary+ reveal
      [262, 330, 392, 494, 587, 784].forEach(function (freq, i) {
        // C4->E4->G4->B4->D5->G5
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        const vol = 0.07 + i * 0.02;
        const dur = i === 5 ? 1.0 : 0.16;
        gain.gain.setValueAtTime(vol, now + i * 0.09);
        if (i === 5) {
          gain.gain.setValueAtTime(0.18, now + i * 0.09);
          gain.gain.linearRampToValueAtTime(0.12, now + i * 0.09 + 0.5);
        }
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.09 + dur);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.09);
        osc.stop(now + i * 0.09 + dur);
      });
      // Shimmer: two detuned high octaves for ethereal sparkle
      [1568, 1580].forEach(function (freq) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.04, now + 0.45);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.3);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + 0.45);
        osc.stop(now + 1.3);
      });
      break;
    }

    case "frost_nip": {
      // crystalline descending tone
      osc = ctx.createOscillator();
      gain = ctx.createGain();
      const frostFilter = ctx.createBiquadFilter();
      frostFilter.type = "highpass";
      frostFilter.frequency.value = 2000;
      osc.type = "sine";
      osc.frequency.setValueAtTime(2400, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.3);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(frostFilter).connect(gain).connect(sfxOut());
      osc.start(now);
      osc.stop(now + 0.35);
      break;
    }

    case "mutation": // wobbly detuned bloom
      [523, 530, 659, 670].forEach(function (freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        osc.frequency.linearRampToValueAtTime(
          freq * (i % 2 === 0 ? 1.03 : 0.97),
          now + 0.3,
        );
        gain.gain.setValueAtTime(0.06, now + (i < 2 ? 0 : 0.1));
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + (i < 2 ? 0 : 0.1));
        osc.stop(now + 0.4);
      });
      break;

    case "coin_clink": // soft coin sound
      osc = ctx.createOscillator();
      gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = 800;
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain).connect(sfxOut());
      osc.start(now);
      osc.stop(now + 0.12);
      break;

    case "buy": // warm ascending chime (same feel as sale)
      [330, 440, 523].forEach(function (freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.06, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.18);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.18);
      });
      break;

    case "packet_tear": {
      // short noise burst (paper tearing)
      const bufSz = ctx.sampleRate * 0.08;
      const buf = ctx.createBuffer(1, bufSz, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let ni = 0; ni < bufSz; ni++)
        data[ni] = (Math.random() * 2 - 1) * 0.5;
      const noise = ctx.createBufferSource();
      noise.buffer = buf;
      const tearFilter = ctx.createBiquadFilter();
      tearFilter.type = "highpass";
      tearFilter.frequency.value = 3000;
      gain = ctx.createGain();
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      noise.connect(tearFilter).connect(gain).connect(sfxOut());
      noise.start(now);
      noise.stop(now + 0.08);
      break;
    }
  }
}

export function haptic(ms?: number): void {
  try {
    if (navigator.vibrate) navigator.vibrate(ms || 30);
  } catch (e) {
    /* ignore */
  }
}
