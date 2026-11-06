// Procedural Web Audio API sound synthesizer
// Generates warm, celestial chords, high-register starlight sparkles, and harp arpeggios

class CelestialAudioEngine {
  private ctx: AudioContext | null = null;
  public isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private intervalId: number | null = null;

  async init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;

    this.ctx = new AudioCtx();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  async start() {
    await this.init();
    if (!this.ctx || !this.masterGain) return;

    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }

    this.isPlaying = true;
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.setTargetAtTime(0.35, this.ctx.currentTime, 2.5);

    this.startPadCycle();
  }

  stop() {
    if (!this.ctx || !this.masterGain) return;
    this.isPlaying = false;
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 1.5);
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      this.playHarpChime();
      return true;
    }
  }

  private startPadCycle() {
    if (!this.ctx || !this.masterGain) return;

    // Frequencies for ethereal celestial progression (D major 9, Bm7, Gmaj7, Aadd9)
    const chords = [
      [146.83, 220.00, 277.18, 369.99, 440.00], // Dmaj9
      [123.47, 185.00, 220.00, 293.66, 369.99], // Bm7
      [98.00, 146.83, 196.00, 246.94, 293.66],  // Gmaj7
      [110.00, 164.81, 220.00, 277.18, 329.63]  // Aadd9
    ];

    let chordIdx = 0;

    const playChord = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;
      const notes = chords[chordIdx % chords.length];
      chordIdx++;
      const now = this.ctx.currentTime;
      const duration = 7.0;

      notes.forEach((freq, i) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const noteGain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = i === 0 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, now);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(380 + (i * 90), now);
        filter.frequency.exponentialRampToValueAtTime(280, now + duration);

        noteGain.gain.setValueAtTime(0.0001, now);
        noteGain.gain.exponentialRampToValueAtTime(0.07 / (i + 1), now + 2.0);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        osc.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + duration + 0.2);
      });

      // High starlight sparkle
      if (Math.random() > 0.25) {
        const sparkleOsc = this.ctx.createOscillator();
        const sparkleGain = this.ctx.createGain();
        const highNotes = [587.33, 739.99, 880.00, 1108.73, 1174.66, 1479.98];
        const note = highNotes[Math.floor(Math.random() * highNotes.length)];

        sparkleOsc.type = 'sine';
        sparkleOsc.frequency.setValueAtTime(note, now + 1.2);

        sparkleGain.gain.setValueAtTime(0.0001, now + 1.2);
        sparkleGain.gain.exponentialRampToValueAtTime(0.025, now + 1.6);
        sparkleGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.0);

        sparkleOsc.connect(sparkleGain);
        sparkleGain.connect(this.masterGain);

        sparkleOsc.start(now + 1.2);
        sparkleOsc.stop(now + 4.2);
      }
    };

    playChord();
    this.intervalId = window.setInterval(playChord, 6500);
  }

  // Harmonic harp chime for interactive moments
  playHarpChime() {
    if (!this.ctx || !this.masterGain) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const now = this.ctx.currentTime;
    const arpeggio = [440.00, 554.37, 659.25, 880.00, 1108.73, 1318.51]; // A major celestial

    arpeggio.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const time = now + (idx * 0.08);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);

      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.exponentialRampToValueAtTime(0.09, time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 1.8);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(time);
      osc.stop(time + 2.0);
    });
  }

  // Soft micro-click for buttons
  playSoftClick() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(620, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.04);

    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.05);
  }
}

export const audioEngine = new CelestialAudioEngine();
