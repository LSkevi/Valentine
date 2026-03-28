// ══════════════════════════════════════════════════════════
// AMBIENT MUSIC — cottagecore procedural soundtrack
// 3 voices: warm pad, pentatonic melody, gentle bass
// 80 BPM, C major pentatonic, natural variation
// Extracted from game.js for modular use
// ══════════════════════════════════════════════════════════

import { getAudioCtx, sfxOut, _soundEnabled } from "./audio";

// TODO: Replace with proper G import once game state is modularized
function getG(): any {
  return (window as any).__G;
}

// ── Pentatonic scale frequencies (multiple octaves) ──
const PENTA_LOW: readonly number[] = [130.8, 146.8, 164.8, 196, 220]; // C3-A3
const PENTA_MID: readonly number[] = [261.6, 293.7, 329.6, 392, 440]; // C4-A4
const PENTA_HIGH: readonly number[] = [523.3, 587.3, 659.3, 784, 880]; // C5-A5

// ── Types ──

interface Chord {
  readonly pad: readonly number[];
  readonly bass: number;
}

interface SeqEvent {
  readonly t: "pad" | "mel" | "bass" | "kick" | "hat" | "snap";
  readonly f?: number | readonly number[];
}

interface Song {
  readonly id: number;
  readonly name: string;
  readonly weather: string;
  readonly beatMs: number;
  readonly filterHz: number;
  readonly padWave: OscillatorType;
  readonly melWave: OscillatorType;
  readonly bassWave: OscillatorType;
  readonly melOctave: number;
  readonly restPct: number;
  readonly padAttack: number;
  readonly melLen: number;
  readonly chords: readonly Chord[];
  readonly progs: readonly (readonly number[])[];
  readonly melodies: readonly (readonly number[])[];
  readonly sequencer?: boolean;
  readonly seqSteps?: number;
  readonly seq?: readonly (readonly SeqEvent[])[];
}

interface MusicNodes {
  masterGain: GainNode;
  filter: BiquadFilterNode;
  padGain: GainNode;
  melodyGain: GainNode;
  bassGain: GainNode;
  state: MusicState;
  clearTimers: () => void;
}

interface MusicState {
  progIdx: number;
  chordStep: number;
  melodyPatIdx: number;
  melodyNoteIdx: number;
  beat: number;
  padOscs: { o: OscillatorNode; g: GainNode }[];
  bassOsc: { o: OscillatorNode; g: GainNode } | null;
  useHighOctave: boolean;
  /** Bug fix #7: local reversed pattern so we never mutate SONGS data */
  currentPattern: readonly number[] | null;
}

interface RainAmbient {
  src: AudioBufferSourceNode;
  gain: GainNode;
}

// ── Module state ──

export let _musicNodes: MusicNodes | null = null;
export let _musicEnabled: boolean = false;
let _musicInterval: ReturnType<typeof setInterval> | null = null;
let _melodyInterval: ReturnType<typeof setInterval> | null = null;
let _bassInterval: ReturnType<typeof setInterval> | null = null;
let _rainAmbient: RainAmbient | null = null;

export let _currentSongIdx: number = 0;
let _currentMoodIdx: number = 0;
let _moodChangeTimer: ReturnType<typeof setInterval> | null = null;
const MOOD_CHANGE_MS: number = 30000; // rotate progs/melodies every 30s within a song

/** Set music enabled from other modules */
export function setMusicEnabled(v: boolean): void {
  _musicEnabled = v;
}

/** Set current song index from other modules */
export function setCurrentSongIdx(v: number): void {
  _currentSongIdx = v;
}

// ── 10 NAMED SONGS — each has unique character via synthesis params ──
// padWave/melWave: oscillator type. melOctave: 0=mid,1=high,2=mix. restPct: 0-0.5
// padAttack: seconds to fade in. melLen: note length. bassWave: bass timbre
// filterHz: per-song warmth filter override
export const SONGS: readonly Song[] = [
  {
    id: 0,
    name: "Groovy Garden",
    weather: "sunny",
    beatMs: 167,
    filterHz: 1200,
    sequencer: true,
    seqSteps: 128,
    seq: [
      // BAR 1: Intro — just pad + bass, gentle start
      [{ t: "pad", f: [130.8, 196, 261.6] }, { t: "bass", f: 65.4 }],
      [],
      [],
      [],
      [{ t: "bass", f: 65.4 }],
      [],
      [],
      [],
      [{ t: "pad", f: [87.3, 130.8, 174.6] }, { t: "bass", f: 87.3 }],
      [],
      [],
      [],
      [{ t: "bass", f: 87.3 }],
      [],
      [],
      [],

      // BAR 2: Intro + melody enters
      [
        { t: "pad", f: [130.8, 196, 261.6] },
        { t: "mel", f: 392 },
        { t: "bass", f: 65.4 },
      ],
      [],
      [{ t: "mel", f: 440 }],
      [],
      [{ t: "mel", f: 523.3 }],
      [],
      [],
      [],
      [
        { t: "pad", f: [87.3, 130.8, 174.6] },
        { t: "mel", f: 440 },
        { t: "bass", f: 87.3 },
      ],
      [],
      [{ t: "mel", f: 523.3 }],
      [],
      [{ t: "mel", f: 392 }],
      [],
      [],
      [],

      // BAR 3: Verse 1 — full groove (original preset)
      [
        { t: "pad", f: [130.8, 196, 261.6] },
        { t: "mel", f: 392 },
        { t: "bass", f: 65.4 },
        { t: "kick" },
      ],
      [],
      [{ t: "mel", f: 440 }, { t: "hat" }],
      [],
      [{ t: "mel", f: 523.3 }, { t: "kick" }, { t: "snap" }],
      [],
      [{ t: "mel", f: 392 }, { t: "hat" }],
      [],
      [
        { t: "pad", f: [87.3, 130.8, 174.6] },
        { t: "mel", f: 440 },
        { t: "bass", f: 87.3 },
        { t: "kick" },
      ],
      [],
      [{ t: "mel", f: 523.3 }, { t: "hat" }],
      [],
      [{ t: "mel", f: 329.6 }, { t: "kick" }, { t: "snap" }],
      [],
      [{ t: "mel", f: 293.7 }, { t: "hat" }],
      [],

      // BAR 4: Verse 1 variation — higher melody
      [
        { t: "pad", f: [130.8, 196, 261.6] },
        { t: "mel", f: 523.3 },
        { t: "bass", f: 65.4 },
        { t: "kick" },
      ],
      [],
      [{ t: "mel", f: 587.3 }, { t: "hat" }],
      [],
      [{ t: "mel", f: 659.3 }, { t: "kick" }, { t: "snap" }],
      [],
      [{ t: "mel", f: 523.3 }, { t: "hat" }],
      [],
      [
        { t: "pad", f: [87.3, 130.8, 174.6] },
        { t: "mel", f: 587.3 },
        { t: "bass", f: 87.3 },
        { t: "kick" },
      ],
      [],
      [{ t: "mel", f: 440 }, { t: "hat" }],
      [],
      [{ t: "mel", f: 392 }, { t: "kick" }, { t: "snap" }],
      [],
      [{ t: "mel", f: 329.6 }, { t: "hat" }],
      [],

      // BAR 5: Chorus — G + Em chords, busier rhythm
      [
        { t: "pad", f: [98, 146.8, 196] },
        { t: "mel", f: 392 },
        { t: "bass", f: 49 },
        { t: "kick" },
      ],
      [{ t: "hat" }],
      [{ t: "mel", f: 523.3 }, { t: "hat" }],
      [],
      [{ t: "mel", f: 659.3 }, { t: "kick" }, { t: "snap" }],
      [{ t: "hat" }],
      [{ t: "mel", f: 523.3 }, { t: "hat" }],
      [],
      [
        { t: "pad", f: [82.4, 123.5, 164.8] },
        { t: "mel", f: 440 },
        { t: "bass", f: 82.4 },
        { t: "kick" },
      ],
      [{ t: "hat" }],
      [{ t: "mel", f: 392 }, { t: "hat" }],
      [],
      [{ t: "mel", f: 329.6 }, { t: "kick" }, { t: "snap" }],
      [{ t: "hat" }],
      [{ t: "mel", f: 293.7 }, { t: "hat" }],
      [],

      // BAR 6: Bridge — Am + Dm, darker, sparser
      [
        { t: "pad", f: [110, 164.8, 220] },
        { t: "bass", f: 55 },
        { t: "kick" },
      ],
      [],
      [{ t: "mel", f: 329.6 }, { t: "hat" }],
      [],
      [{ t: "mel", f: 293.7 }, { t: "kick" }],
      [],
      [{ t: "hat" }],
      [],
      [
        { t: "pad", f: [73.4, 110, 146.8] },
        { t: "mel", f: 261.6 },
        { t: "bass", f: 73.4 },
        { t: "kick" },
      ],
      [],
      [{ t: "mel", f: 293.7 }, { t: "hat" }],
      [],
      [{ t: "mel", f: 329.6 }, { t: "kick" }, { t: "snap" }],
      [],
      [{ t: "hat" }],
      [],

      // BAR 7: Chorus 2 — back to G+C, full energy
      [
        { t: "pad", f: [98, 146.8, 196] },
        { t: "mel", f: 523.3 },
        { t: "bass", f: 49 },
        { t: "kick" },
      ],
      [{ t: "hat" }],
      [{ t: "mel", f: 440 }, { t: "hat" }],
      [{ t: "mel", f: 392 }],
      [{ t: "mel", f: 523.3 }, { t: "kick" }, { t: "snap" }],
      [{ t: "hat" }],
      [{ t: "mel", f: 659.3 }, { t: "hat" }],
      [],
      [
        { t: "pad", f: [130.8, 196, 261.6] },
        { t: "mel", f: 587.3 },
        { t: "bass", f: 65.4 },
        { t: "kick" },
      ],
      [{ t: "hat" }],
      [{ t: "mel", f: 523.3 }, { t: "hat" }],
      [{ t: "mel", f: 440 }],
      [{ t: "mel", f: 392 }, { t: "kick" }, { t: "snap" }],
      [{ t: "hat" }],
      [{ t: "mel", f: 329.6 }, { t: "hat" }],
      [],

      // BAR 8: Outro — winding down, back to basics
      [
        { t: "pad", f: [130.8, 196, 261.6] },
        { t: "mel", f: 392 },
        { t: "bass", f: 65.4 },
        { t: "kick" },
      ],
      [],
      [{ t: "mel", f: 329.6 }, { t: "hat" }],
      [],
      [{ t: "kick" }],
      [],
      [{ t: "mel", f: 293.7 }, { t: "hat" }],
      [],
      [
        { t: "pad", f: [87.3, 130.8, 174.6] },
        { t: "mel", f: 261.6 },
        { t: "bass", f: 87.3 },
      ],
      [],
      [{ t: "hat" }],
      [],
      [{ t: "mel", f: 293.7 }],
      [],
      [{ t: "mel", f: 261.6 }],
      [],
    ],
    padWave: "sine",
    melWave: "sine",
    bassWave: "sine",
    melOctave: 1,
    restPct: 0,
    padAttack: 0.3,
    melLen: 0.2,
    chords: [{ pad: [130.8, 196, 261.6], bass: 65.4 }],
    progs: [[0]],
    melodies: [[0, 2, 4, 3]],
  },

  {
    id: 1,
    name: "Morning Dew",
    weather: "sunny",
    beatMs: 700,
    padWave: "sine",
    melWave: "triangle",
    bassWave: "sine",
    melOctave: 2,
    restPct: 0.15,
    padAttack: 1.0,
    melLen: 0.35,
    filterHz: 900,
    chords: [
      { pad: [130.8, 196, 261.6, 329.6], bass: 65.4 },
      { pad: [98, 146.8, 196, 293.7], bass: 49 },
      { pad: [110, 164.8, 220, 329.6], bass: 55 },
      { pad: [87.3, 130.8, 174.6, 261.6], bass: 87.3 },
    ],
    progs: [
      [0, 1, 2, 3],
      [0, 2, 3, 1],
      [3, 2, 1, 0],
    ],
    melodies: [
      [4, 3, 4, 2, 3, 1, 0],
      [0, 1, 3, 4, 3, 2, 0],
      [2, 3, 4, 3, 2, 0, 1],
    ],
  },

  {
    id: 2,
    name: "Sunflower Waltz",
    weather: "sunny",
    beatMs: 550,
    padWave: "sine",
    melWave: "sine",
    bassWave: "triangle",
    melOctave: 1,
    restPct: 0.05,
    padAttack: 0.5,
    melLen: 0.25,
    filterHz: 1000,
    chords: [
      { pad: [73.4, 110, 146.8, 220], bass: 73.4 },
      { pad: [98, 146.8, 196, 246.9], bass: 49 },
      { pad: [130.8, 164.8, 196, 261.6], bass: 65.4 },
      { pad: [82.4, 123.5, 164.8, 246.9], bass: 82.4 },
    ],
    progs: [
      [0, 1, 2, 3],
      [2, 0, 1, 3],
      [1, 3, 0, 2],
    ],
    melodies: [
      [2, 3, 4, 3, 2, 0, 1],
      [0, 4, 2, 3, 4, 2, 1],
      [1, 0, 2, 4, 3, 2, 0, 1],
    ],
  },

  {
    id: 3,
    name: "Yurie's Garden",
    weather: "any",
    beatMs: 780,
    padWave: "sine",
    melWave: "triangle",
    bassWave: "sine",
    melOctave: 0,
    restPct: 0.2,
    padAttack: 1.2,
    melLen: 0.4,
    filterHz: 700,
    chords: [
      { pad: [130.8, 196, 261.6, 329.6], bass: 65.4 },
      { pad: [110, 164.8, 220, 329.6], bass: 55 },
      { pad: [87.3, 130.8, 174.6, 261.6], bass: 87.3 },
      { pad: [98, 146.8, 196, 293.7], bass: 49 },
    ],
    progs: [
      [0, 2, 1, 3],
      [0, 3, 1, 2],
      [0, 1, 2, 3],
    ],
    melodies: [
      [0, 2, 4, 3, 2],
      [0, 1, 3, 2, 4],
      [2, 0, 3, 1, 4],
      [4, 3, 2, 0, 1, 3],
    ],
  },

  {
    id: 4,
    name: "Rainy Lullaby",
    weather: "rainy",
    beatMs: 950,
    padWave: "sine",
    melWave: "sine",
    bassWave: "sine",
    melOctave: 0,
    restPct: 0.35,
    padAttack: 2.0,
    melLen: 0.6,
    filterHz: 500,
    chords: [
      { pad: [87.3, 130.8, 174.6, 220], bass: 87.3 },
      { pad: [130.8, 164.8, 196, 261.6], bass: 65.4 },
      { pad: [73.4, 110, 146.8, 220], bass: 73.4 },
      { pad: [87.3, 116.5, 174.6, 220], bass: 58.3 },
    ],
    progs: [
      [0, 1, 2, 3],
      [0, 2, 1, 0],
      [2, 0, 3, 1],
    ],
    melodies: [
      [0, 1, 0, 2, 1, 0],
      [2, 1, 3, 2, 0],
      [0, 2, 1, 0, 1, 2, 3],
    ],
  },

  {
    id: 5,
    name: "Twilight Walk",
    weather: "any",
    beatMs: 850,
    padWave: "triangle",
    melWave: "triangle",
    bassWave: "sine",
    melOctave: 2,
    restPct: 0.25,
    padAttack: 1.5,
    melLen: 0.45,
    filterHz: 650,
    chords: [
      { pad: [110, 164.8, 220, 261.6], bass: 55 },
      { pad: [87.3, 130.8, 174.6, 220], bass: 87.3 },
      { pad: [130.8, 164.8, 196, 261.6], bass: 65.4 },
      { pad: [82.4, 123.5, 164.8, 246.9], bass: 82.4 },
    ],
    progs: [
      [0, 1, 2, 3],
      [0, 3, 1, 2],
      [2, 0, 1, 3],
    ],
    melodies: [
      [4, 3, 4, 2, 1, 0],
      [0, 1, 0, 2, 3, 2],
      [3, 2, 0, 1, 2, 4],
    ],
  },

  {
    id: 6,
    name: "Starlight Sonata",
    weather: "any",
    beatMs: 900,
    padWave: "sine",
    melWave: "sine",
    bassWave: "sine",
    melOctave: 1,
    restPct: 0.3,
    padAttack: 2.0,
    melLen: 0.5,
    filterHz: 550,
    chords: [
      { pad: [82.4, 123.5, 164.8, 246.9], bass: 82.4 },
      { pad: [130.8, 164.8, 196, 261.6], bass: 65.4 },
      { pad: [98, 123.5, 164.8, 196], bass: 49 },
      { pad: [73.4, 110, 146.8, 220], bass: 73.4 },
    ],
    progs: [
      [0, 1, 2, 3],
      [0, 2, 3, 1],
      [2, 0, 1, 3],
    ],
    melodies: [
      [4, 3, 2, 4, 3, 1, 0],
      [0, 2, 4, 2, 0],
      [3, 4, 2, 1, 0, 2],
    ],
  },

  {
    id: 7,
    name: "Drought Blues",
    weather: "drought",
    beatMs: 800,
    padWave: "triangle",
    melWave: "sawtooth",
    bassWave: "triangle",
    melOctave: 0,
    restPct: 0.4,
    padAttack: 0.8,
    melLen: 0.3,
    filterHz: 600,
    chords: [
      { pad: [110, 164.8, 220, 261.6], bass: 55 },
      { pad: [73.4, 110, 146.8, 220], bass: 73.4 },
      { pad: [82.4, 123.5, 164.8, 246.9], bass: 82.4 },
      { pad: [110, 130.8, 164.8, 196], bass: 55 },
    ],
    progs: [
      [0, 1, 2, 3],
      [0, 2, 1, 0],
      [3, 1, 0, 2],
    ],
    melodies: [
      [0, 1, 0, 2, 0, 1],
      [2, 1, 0, 2, 3, 2, 1],
      [0, 0, 2, 1, 0, 3, 2],
    ],
  },

  {
    id: 8,
    name: "Snowfall Waltz",
    weather: "snowy",
    beatMs: 880,
    padWave: "sine",
    melWave: "triangle",
    bassWave: "sine",
    melOctave: 2,
    restPct: 0.25,
    padAttack: 1.8,
    melLen: 0.5,
    filterHz: 600,
    chords: [
      { pad: [130.8, 164.8, 196, 261.6], bass: 65.4 },
      { pad: [98, 146.8, 196, 246.9], bass: 49 },
      { pad: [87.3, 130.8, 174.6, 261.6], bass: 87.3 },
      { pad: [110, 164.8, 220, 329.6], bass: 55 },
    ],
    progs: [
      [0, 1, 2, 3],
      [0, 2, 3, 1],
      [3, 0, 1, 2],
    ],
    melodies: [
      [0, 2, 4, 2, 0],
      [4, 3, 2, 3, 4],
      [0, 1, 2, 0, 4, 3, 2],
    ],
  },

  {
    id: 9,
    name: "Winter Night",
    weather: "snowy",
    beatMs: 1000,
    padWave: "sine",
    melWave: "sine",
    bassWave: "sine",
    melOctave: 1,
    restPct: 0.3,
    padAttack: 2.5,
    melLen: 0.7,
    filterHz: 450,
    chords: [
      { pad: [98, 146.8, 196, 293.7], bass: 49 },
      { pad: [82.4, 123.5, 164.8, 246.9], bass: 82.4 },
      { pad: [130.8, 196, 261.6, 329.6], bass: 65.4 },
      { pad: [73.4, 110, 146.8, 220], bass: 73.4 },
    ],
    progs: [
      [0, 1, 2, 3],
      [0, 2, 1, 3],
      [2, 0, 3, 1],
    ],
    melodies: [
      [4, 3, 2, 0, 1, 0, 2, 4],
      [2, 3, 4, 3, 2, 1, 0, 1],
      [0, 0, 2, 3, 4, 4, 3, 2],
      [0, 4, 2, 0, 3, 4, 2],
    ],
  },
];

export function startAmbientMusic(): void {
  if (_musicNodes) return;
  const ctx = getAudioCtx();
  if (!ctx) return;
  const G = getG();

  // Start with Groovy Garden (song 0)
  if (_currentSongIdx === 0 && !G?._userPickedSong) _currentSongIdx = 0;

  // Master output chain
  const masterGain = ctx.createGain();
  masterGain.gain.value = G?.musicVolume || 0.045;
  masterGain.connect(ctx.destination);

  // Lo-fi warmth filter — initial value from song, updated per-song
  const warmFilter = ctx.createBiquadFilter();
  warmFilter.type = "lowpass";
  warmFilter.frequency.value = getSong().filterHz || 700;
  warmFilter.Q.value = 0.7;
  warmFilter.connect(masterGain);

  // Separate gains for each voice
  const padGain = ctx.createGain();
  padGain.gain.value = 0.5;
  padGain.connect(warmFilter);

  const melodyGain = ctx.createGain();
  melodyGain.gain.value = 0.35;
  melodyGain.connect(warmFilter);

  const bassGain = ctx.createGain();
  bassGain.gain.value = 0.4;
  bassGain.connect(warmFilter);

  function getSong(): Song {
    return SONGS[_currentSongIdx % SONGS.length];
  }

  const state: MusicState = {
    progIdx: 0,
    chordStep: 0,
    melodyPatIdx: 0,
    melodyNoteIdx: 0,
    beat: 0,
    padOscs: [],
    bassOsc: null,
    useHighOctave: false,
    currentPattern: null,
  };

  // -- PAD VOICE — warm sustained chords, 4 beats per chord --
  function playPad(): void {
    const mood = getSong();
    const prog = mood.progs[state.progIdx % mood.progs.length];
    const chord = mood.chords[prog[state.chordStep % prog.length]];
    const now = ctx.currentTime;

    // Fade out old pad
    state.padOscs.forEach(function (o) {
      try {
        o.g.gain.linearRampToValueAtTime(0, now + 0.8);
        o.o.stop(now + 1);
      } catch (e) {
        /* ignore */
      }
    });
    state.padOscs = [];

    // Play new chord — use song-specific wave and attack
    const songNow = getSong();
    const pAtk = songNow.padAttack || 1.2;
    chord.pad.forEach(function (freq) {
      for (let d = 0; d < 2; d++) {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = d === 0 ? (songNow.padWave || "sine") : "triangle";
        o.frequency.value =
          freq + (d === 0 ? -1.5 : 1.5) + (Math.random() - 0.5);
        g.gain.setValueAtTime(0, now);
        g.gain.linearRampToValueAtTime(d === 0 ? 0.6 : 0.15, now + pAtk);
        g.gain.linearRampToValueAtTime(
          d === 0 ? 0.4 : 0.1,
          now + pAtk + 3,
        );
        o.connect(g).connect(padGain);
        o.start(now);
        state.padOscs.push({ o, g });
      }
    });

    state.chordStep++;
    // Every full progression, maybe switch to a new one within the mood
    const moodForSwitch = getSong();
    if (state.chordStep % 4 === 0 && Math.random() < 0.4) {
      state.progIdx = Math.floor(Math.random() * moodForSwitch.progs.length);
    }
  }

  // -- MELODY VOICE — pentatonic notes, syncopated --
  function playMelody(): void {
    const now = ctx.currentTime;
    const mood = getSong();

    // Bug fix #7: use local currentPattern if set, otherwise read from SONGS
    const pattern: readonly number[] =
      state.currentPattern ||
      mood.melodies[state.melodyPatIdx % mood.melodies.length];
    const degree = pattern[state.melodyNoteIdx % pattern.length];

    // Choose octave based on song setting
    const songM = getSong();
    const melOct = songM.melOctave || 0;
    let scale: readonly number[];
    if (melOct === 1) scale = PENTA_HIGH;
    else if (melOct === 2)
      scale = state.useHighOctave ? PENTA_HIGH : PENTA_MID;
    else scale = PENTA_MID;
    const freq = scale[degree % scale.length];

    const swing = Math.random() * 0.04; // always positive, 0-40ms ahead
    const noteLen = (songM.melLen || 0.35) + Math.random() * 0.1;

    // Rest based on song's rest percentage
    if (Math.random() < (songM.restPct || 0.2)) {
      state.melodyNoteIdx++;
      return;
    }

    const o = ctx.createOscillator();
    const g = ctx.createGain();
    const mFilter = ctx.createBiquadFilter();
    mFilter.type = "lowpass";
    mFilter.frequency.value = (songM.filterHz || 700) + 400;

    o.type = songM.melWave || "sine";
    o.frequency.value = freq + (Math.random() - 0.5) * 3;

    g.gain.setValueAtTime(0, now + swing);
    g.gain.linearRampToValueAtTime(0.7, now + swing + 0.06);
    g.gain.linearRampToValueAtTime(0.3, now + swing + noteLen * 0.6);
    g.gain.linearRampToValueAtTime(0, now + swing + noteLen);
    o.connect(mFilter).connect(g).connect(melodyGain);
    o.start(now + Math.max(0, swing));
    o.stop(now + swing + noteLen + 0.1);

    state.melodyNoteIdx++;
    // When pattern ends, apply variation to avoid exact repetition
    if (state.melodyNoteIdx >= pattern.length) {
      state.melodyNoteIdx = 0;
      const moodNow = getSong();
      // 40% chance: switch to different pattern
      // 30% chance: reverse current pattern
      // 30% chance: keep but shift octave
      const variation = Math.random();
      if (variation < 0.4) {
        state.melodyPatIdx = Math.floor(
          Math.random() * moodNow.melodies.length,
        );
        // Clear local override when switching patterns
        state.currentPattern = null;
      } else if (variation < 0.7) {
        // Bug fix #7: store reversed pattern locally instead of mutating SONGS
        const reversed = pattern.slice().reverse();
        state.currentPattern = reversed;
      } else {
        // Keep pattern, clear local override
        state.currentPattern = null;
      }
      state.useHighOctave = Math.random() < 0.3;
    }
  }

  // -- BASS VOICE — root notes, gentle pulse --
  function playBass(): void {
    const now = ctx.currentTime;
    const mood = getSong();
    const prog = mood.progs[state.progIdx % mood.progs.length];
    const chord =
      mood.chords[prog[(state.chordStep - 1 + prog.length) % prog.length]];

    // Stop old bass
    if (state.bassOsc) {
      try {
        state.bassOsc.g.gain.linearRampToValueAtTime(0, now + 0.3);
        state.bassOsc.o.stop(now + 0.4);
      } catch (e) {
        /* ignore */
      }
    }

    const songB = getSong();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = songB.bassWave || "sine";
    o.frequency.value = chord.bass;

    // Sometimes play the 5th instead of root for movement
    if (state.beat % 4 === 2 && Math.random() < 0.4) {
      o.frequency.value = chord.bass * 1.5;
    }

    const bLen = songB.beatMs ? (songB.beatMs * 3.5) / 1000 : 2.8;
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(0.6, now + 0.15);
    g.gain.linearRampToValueAtTime(0.25, now + bLen * 0.5);
    g.gain.linearRampToValueAtTime(0, now + bLen);
    o.connect(g).connect(bassGain);
    o.start(now);
    o.stop(now + bLen + 0.1);
    state.bassOsc = { o, g };
    state.beat++;
  }

  // Sequencer state
  let _seqStep = 0;

  // -- Look-ahead scheduler (precise Web Audio timing) --
  // Instead of setInterval firing each note, we use a fast scheduler
  // that checks AudioContext.currentTime and schedules notes ahead
  const _scheduleAhead = 0.1; // schedule 100ms ahead
  const _schedulerInterval = 25; // check every 25ms
  let _nextBeatTime = 0;
  let _beatCounter = 0;
  let _schedulerTimer: ReturnType<typeof setInterval> | null = null;

  function scheduler(): void {
    const song = getSong();
    const beatSec = song.beatMs / 1000;
    // Schedule all beats that fall within the lookahead window
    while (_nextBeatTime < ctx.currentTime + _scheduleAhead) {
      if (song.sequencer) {
        scheduleSeqBeat(_nextBeatTime);
      } else {
        scheduleProceduralBeat(_nextBeatTime);
      }
      _nextBeatTime += beatSec;
      _beatCounter++;
    }
  }

  function scheduleSeqBeat(time: number): void {
    const song = getSong();
    const events = song.seq![_seqStep % song.seqSteps!];
    events.forEach(function (evt) {
      if (evt.t === "pad") {
        (evt.f as readonly number[]).forEach(function (freq) {
          for (let d = 0; d < 2; d++) {
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.type = d === 0 ? "sine" : "triangle";
            o.frequency.value = freq + (d === 0 ? -1.5 : 1.5);
            g.gain.setValueAtTime(0, time);
            g.gain.linearRampToValueAtTime(
              d === 0 ? 0.25 : 0.06,
              time + 0.08,
            );
            g.gain.linearRampToValueAtTime(0, time + 0.5);
            o.connect(g).connect(warmFilter);
            o.start(time);
            o.stop(time + 0.55);
          }
        });
      } else if (evt.t === "mel") {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = Math.random() < 0.6 ? "sine" : "triangle";
        o.frequency.value = (evt.f as number) + (Math.random() - 0.5) * 2;
        g.gain.setValueAtTime(0, time);
        g.gain.linearRampToValueAtTime(0.35, time + 0.03);
        g.gain.linearRampToValueAtTime(0, time + 0.35);
        o.connect(g).connect(warmFilter);
        o.start(time);
        o.stop(time + 0.4);
      } else if (evt.t === "bass") {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "sine";
        o.frequency.value = evt.f as number;
        g.gain.setValueAtTime(0, time);
        g.gain.linearRampToValueAtTime(0.45, time + 0.04);
        g.gain.linearRampToValueAtTime(0, time + 0.4);
        o.connect(g).connect(warmFilter);
        o.start(time);
        o.stop(time + 0.45);
      } else if (evt.t === "kick") {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "sine";
        o.frequency.setValueAtTime(160, time);
        o.frequency.exponentialRampToValueAtTime(40, time + 0.12);
        g.gain.setValueAtTime(0.5, time);
        g.gain.exponentialRampToValueAtTime(0.001, time + 0.25);
        o.connect(g).connect(masterGain);
        o.start(time);
        o.stop(time + 0.25);
      } else if (evt.t === "hat") {
        const bufSz = ctx.sampleRate * 0.05;
        const buf = ctx.createBuffer(1, bufSz, ctx.sampleRate);
        const dd = buf.getChannelData(0);
        for (let ii = 0; ii < bufSz; ii++)
          dd[ii] = (Math.random() * 2 - 1) * 0.3;
        const src = ctx.createBufferSource();
        src.buffer = buf;
        const hp = ctx.createBiquadFilter();
        hp.type = "highpass";
        hp.frequency.value = 7000;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.25, time);
        g.gain.exponentialRampToValueAtTime(0.001, time + 0.06);
        src.connect(hp).connect(g).connect(masterGain);
        src.start(time);
        src.stop(time + 0.06);
      } else if (evt.t === "snap") {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "square";
        o.frequency.value = 1800;
        g.gain.setValueAtTime(0.15, time);
        g.gain.exponentialRampToValueAtTime(0.001, time + 0.05);
        o.connect(g).connect(masterGain);
        o.start(time);
        o.stop(time + 0.05);
      }
    });
    _seqStep = (_seqStep + 1) % song.seqSteps!;
  }

  function scheduleProceduralBeat(_time: number): void {
    const localBeat = _beatCounter;
    // Pad: every 4 beats
    if (localBeat % 4 === 0) {
      playPad();
    }
    // Melody: every beat
    playMelody();
    // Bass: every 2 beats
    if (localBeat % 2 === 0) {
      playBass();
    }
  }

  function startTimers(): void {
    const song = getSong();
    if (song.sequencer) {
      _seqStep = 0;
      warmFilter.frequency.value = 1200;
      warmFilter.Q.value = 0.6;
    } else {
      warmFilter.frequency.value = song.filterHz || 700;
      warmFilter.Q.value = 0.7;
      playPad();
      playBass();
    }
    _nextBeatTime = ctx.currentTime + 0.05; // start slightly ahead
    _beatCounter = 0;
    _schedulerTimer = setInterval(scheduler, _schedulerInterval);
  }

  function clearTimers(): void {
    if (_schedulerTimer) {
      clearInterval(_schedulerTimer);
      _schedulerTimer = null;
    }
    if (_musicInterval) {
      clearInterval(_musicInterval);
      _musicInterval = null;
    }
    if (_melodyInterval) {
      clearInterval(_melodyInterval);
      _melodyInterval = null;
    }
    if (_bassInterval) {
      clearInterval(_bassInterval);
      _bassInterval = null;
    }
  }

  // Mood rotation every 30s
  _moodChangeTimer = setInterval(function () {
    // Rotate internal progression/melody within current song
    const song = getSong();
    state.chordStep = 0;
    state.melodyNoteIdx = 0;
    state.progIdx = (state.progIdx + 1) % song.progs.length;
    state.melodyPatIdx = (state.melodyPatIdx + 1) % song.melodies.length;
    // Clear local pattern override on mood change
    state.currentPattern = null;
    // Update filter to match song character
    warmFilter.frequency.value = song.filterHz || 700;
    // Restart timers with new tempo
    clearTimers();
    startTimers();
  }, MOOD_CHANGE_MS);

  startTimers();

  _musicNodes = {
    masterGain,
    filter: warmFilter,
    padGain,
    melodyGain,
    bassGain,
    state,
    clearTimers,
  };
}

export function stopAmbientMusic(): void {
  if (_moodChangeTimer) {
    clearInterval(_moodChangeTimer);
    _moodChangeTimer = null;
  }
  if (_musicNodes) {
    _musicNodes.clearTimers();
    const s = _musicNodes.state;
    s.padOscs.forEach(function (o) {
      try {
        o.o.stop();
      } catch (e) {
        /* ignore */
      }
    });
    if (s.bassOsc)
      try {
        s.bassOsc.o.stop();
      } catch (e) {
        /* ignore */
      }
    try {
      _musicNodes.masterGain.disconnect();
    } catch (e) {
      /* ignore */
    }
    _musicNodes = null;
  }
  stopRainAmbient();
}

export function updateMusicForWeather(): void {
  if (!_musicNodes) return;
  const filter = _musicNodes.filter;
  const mg = _musicNodes.melodyGain;
  const ctx = getAudioCtx();
  if (!ctx) return;
  const G = getG();
  const now = ctx.currentTime;
  if (G?.weather === "rainy") {
    filter.frequency.linearRampToValueAtTime(500, now + 2);
    mg.gain.linearRampToValueAtTime(0.2, now + 2);
  } else if (G?.weather === "snowy") {
    filter.frequency.linearRampToValueAtTime(450, now + 2);
    mg.gain.linearRampToValueAtTime(0.25, now + 2);
  } else if (G?.weather === "sunny") {
    filter.frequency.linearRampToValueAtTime(900, now + 2);
    mg.gain.linearRampToValueAtTime(0.4, now + 2);
  } else {
    filter.frequency.linearRampToValueAtTime(600, now + 2);
    mg.gain.linearRampToValueAtTime(0.3, now + 2);
  }
}

// Rain ambient SFX — triggered by weather, not music
export function updateRainSfx(): void {
  const G = getG();
  if (G?.weather === "rainy" && _soundEnabled) {
    startRainAmbient();
  } else {
    stopRainAmbient();
  }
}

function startRainAmbient(): void {
  if (_rainAmbient) return;
  const ctx = getAudioCtx();
  if (!ctx) return;
  const bufSz = ctx.sampleRate * 2;
  const buf = ctx.createBuffer(1, bufSz, ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < bufSz; i++) d[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.loop = true;
  const bp = ctx.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.value = 1400;
  bp.Q.value = 1.2;
  const g = ctx.createGain();
  g.gain.value = 0.005;
  src.connect(bp).connect(g).connect(sfxOut());
  src.start();
  _rainAmbient = { src, gain: g };
}

function stopRainAmbient(): void {
  if (!_rainAmbient) return;
  try {
    _rainAmbient.src.stop();
  } catch (e) {
    /* ignore */
  }
  try {
    _rainAmbient.gain.disconnect();
  } catch (e) {
    /* ignore */
  }
  _rainAmbient = null;
}
