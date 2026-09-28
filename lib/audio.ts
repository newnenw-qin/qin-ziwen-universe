export class UniverseAudio {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private musicGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private drones: OscillatorNode[] = [];
  private noise: AudioBufferSourceNode | null = null;
  enabled = false;
  private lastHover = 0;
  private lastMove = 0;

  private ensure() {
    if (this.ctx) return;
    const ctx = new AudioContext();
    const master = ctx.createGain();
    master.gain.value = 0.7;
    master.connect(ctx.destination);
    const musicGain = ctx.createGain();
    musicGain.gain.value = 0;
    musicGain.connect(master);
    const sfxGain = ctx.createGain();
    sfxGain.gain.value = 0.35;
    sfxGain.connect(master);
    this.ctx = ctx;
    this.master = master;
    this.musicGain = musicGain;
    this.sfxGain = sfxGain;
  }

  async toggle() {
    this.ensure();
    if (!this.ctx || !this.musicGain) return this.enabled;
    await this.ctx.resume();
    this.enabled = !this.enabled;
    const now = this.ctx.currentTime;
    if (this.enabled) {
      this.startDrone();
      this.musicGain.gain.cancelScheduledValues(now);
      this.musicGain.gain.linearRampToValueAtTime(0.22, now + 1.8);
    } else {
      this.musicGain.gain.cancelScheduledValues(now);
      this.musicGain.gain.linearRampToValueAtTime(0, now + 0.6);
    }
    return this.enabled;
  }

  private startDrone() {
    if (!this.ctx || !this.musicGain || this.drones.length) return;
    const freqs = [55, 82.4, 110, 164.8];
    freqs.forEach((f, i) => {
      const osc = this.ctx!.createOscillator();
      osc.type = i % 2 ? "sine" : "triangle";
      osc.frequency.value = f;
      const g = this.ctx!.createGain();
      g.gain.value = i === 0 ? 0.18 : 0.07;
      const filter = this.ctx!.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 420;
      osc.connect(g);
      g.connect(filter);
      filter.connect(this.musicGain!);
      osc.start();
      this.drones.push(osc);
    });

    const bufferSize = 2 * this.ctx.sampleRate;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * 0.08;
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;
    const nf = this.ctx.createBiquadFilter();
    nf.type = "bandpass";
    nf.frequency.value = 280;
    nf.Q.value = 0.7;
    const ng = this.ctx.createGain();
    ng.gain.value = 0.12;
    noise.connect(nf);
    nf.connect(ng);
    ng.connect(this.musicGain);
    noise.start();
    this.noise = noise;
  }

  hover() {
    if (!this.enabled || !this.ctx || !this.sfxGain) return;
    const now = performance.now();
    if (now - this.lastHover < 420) return;
    this.lastHover = now;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(220, t);
    osc.frequency.exponentialRampToValueAtTime(90, t + 0.5);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.06, t + 0.04);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.55);
    osc.connect(g);
    g.connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.6);
  }

  click() {
    if (!this.enabled || !this.ctx || !this.sfxGain) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(70, t);
    osc.frequency.exponentialRampToValueAtTime(32, t + 0.35);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.18, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
    osc.connect(g);
    g.connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.42);
  }

  transit() {
    if (!this.enabled || !this.ctx || !this.sfxGain) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(40, t);
    osc.frequency.exponentialRampToValueAtTime(180, t + 0.7);
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(200, t);
    filter.frequency.exponentialRampToValueAtTime(1200, t + 0.5);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.07, t + 0.08);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
    osc.connect(filter);
    filter.connect(g);
    g.connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.95);
  }

  move() {
    if (!this.enabled || !this.ctx || !this.sfxGain) return;
    const now = performance.now();
    if (now - this.lastMove < 1600) return;
    this.lastMove = now;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = 48;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.02, t + 0.1);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.8);
    osc.connect(g);
    g.connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.85);
  }
}

export const audio = new UniverseAudio();
