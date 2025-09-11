Below is an **implementation‑ready design system** for the **Ocean‑Fusion** brand. It’s written for engineers to build now, while leaving room for art direction polish. I’ve kept it modular, disciplined, and performance‑aware.

---

# 0) Design Tenets (one page)

* **Material language:** mineral **copper** (human) × **ion‑cyan** (AI) with **UV ring** highlights on graphite surfaces.
* **Motion language:** calm, deterministic flows (no chaos). One GPU canvas, gated by visibility and user preference.
* **Voice:** premium, technically credible, founder‑crafted. No theatrics; clarity over spectacle.
* **A11y:** AA contrast minimum; reduced‑motion support; keyboard‑first UX.

---

# 1) Architecture & Layout

## 1.1 Page Structure

```
<html data-theme="ocean-fusion">
  <body>
    <header class="nav"> … rails + halo … </header>

    <main>
      <section class="hero"> … stylized bust + headline + CTA … </section>

      <section class="proof"> … “how we work” 3-step … </section>

      <section class="mcp">
        <div class="mcp-card memory"> … </div>
        <div class="mcp-card cognition"> … </div>
        <div class="mcp-card waves"> … </div>
      </section>

      <section class="cases"> … selected outcomes … </section>
      <section class="about"> … “why Ocean” … </section>
      <section class="contact"> … booking form … </section>
    </main>

    <footer class="site-footer"> … links + rails … </footer>

    <!-- single performance‑gated canvas -->
    <canvas id="fusion-canvas" class="fusion-canvas"></canvas>
  </body>
</html>
```

## 1.2 Grid & Spacing

* **Container widths:** `sm 640px`, `md 768px`, `lg 1024px`, `xl 1280px`, `2xl 1440px`.
* **Grid:** fluid **12‑column**, 24px gutters (`16px` on <768).
* **Spacing scale (px):** `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`.
* **Radii:** `8px` (chips), `12px` (cards), `18px` (hero), `999px` (pills).
* **Elevation:** soft, color‑mixed shadows (never pure black).

## 1.3 Breakpoints

* `--bp-sm: 480px`, `--bp-md: 768px`, `--bp-lg: 1024px`, `--bp-xl: 1440px`.
* **Mobile adaptations:**

  * Stack hero: **bust (top)**, headline/CTA **below**.
  * MCP cards: single column; signatures simplified (no lattice overlay).
  * Canvas particle count throttled (≤ 40k).

## 1.4 Component Hierarchy

* **Atoms:** tokens, icons, buttons, tags, inputs.
* **Molecules:** nav, card, list, form row, CTA bar.
* **Organisms:** hero, MCP cluster, case gallery, contact section.
* **Template pages:** Landing, Docs (Cold‑Archive shell), Booking.

---

# 2) Visual System

## 2.1 Design Tokens (OKLCH; dark theme)

```css
:root[data-theme="ocean-fusion"]{
  /* graphite neutrals */
  --bg-0:  oklch(20% 0.02 260);
  --bg-1:  oklch(24% 0.02 260);
  --surface: oklch(28% 0.02 260);
  --line: color-mix(in oklab, white 12%, transparent);
  --text:  oklch(95% 0.02 250);
  --muted: oklch(78% 0.03 250);

  /* brand axes */
  --human-copper: oklch(75% 0.16 60);    /* mineral copper */
  --ai-ion:       oklch(80% 0.15 210);   /* ion cyan */
  --uv-ring:      oklch(70% 0.17 280);   /* ultraviolet highlight */
  --fusion:       oklch(98% 0.01 250);   /* soft white */

  /* states */
  --success: oklch(78% 0.13 150);
  --warn:    oklch(82% 0.12 90);
  --danger:  oklch(70% 0.20 20);

  /* product accents */
  --mem: var(--human-copper);
  --cog: var(--uv-ring);
  --wav: linear-gradient(120deg, var(--ai-ion), var(--human-copper));
}
```

> Light theme (optional later): invert surfaces to `oklch(95%)`, text `oklch(20%)`, keep accents and dial chroma down 15% to maintain contrast.

## 2.2 Typography

* **Display / UI:** Inter or Geist (variable).

  * Weights above the fold: `500` & `700` only; load others after idle.
* **Mono:** JetBrains Mono.
* **Scale:** Minor‑third ratio. Base `16px`.

  * `h1 44/52`, `h2 34/42`, `h3 28/36`, `h4 22/30`, `body 16/24`, `small 14/20`.

## 2.3 Core Components (visual spec + behavior)

### Header / Navigation

* **Structure:** left brand mark, centered nav (max 5 items), right CTA (“Start an intelligence session”).
* **Rails:** 2px cyan rails top/bottom of header (`--ai-ion` @ 24% opacity).
* **Active tab:** 2px underline with **scanner sweep** (CSS conic‑gradient).
* **Particle integration:** canvas extends behind header; no particles above 12% opacity near nav to preserve legibility.

### Hero (stylized Ocean + copy)

* **Stylized representation (no photo):**
  **Option A: “Wire‑bust cameo” (SVG)** — geometric head‑and‑shoulders silhouette with triangular facets; copper stroke; UV halo ring.
  **Option B: “Low‑poly bust” (glTF)** — single mesh (≤12k tris), **matcap copper** with ion‑cyan rimlight; stationary, subtle 2px parallax only.
  Both expose a **path/silhouette** for particles to spawn along the edge.
* **Copy:**
  H1: *“Human insight, machine precision—fused.”*
  Sub: *“We build systems that amplify you.”*
  CTA primary: *“Start an intelligence session”*; secondary link: *“See how it works”*.
* **Layout:** left 38–42% (bust), right 58–62% copy on `--surface` panel.
* **Halo ring:** slow 28s rotation (conic‑gradient) + 1px inner stroke.

### MCP Service Cards

* 3 cards in grid (1×3 on desktop, 1×1 on mobile).
* **Memory (Copper Crystalline):** brief facet crystallization on hover (SVG mask).
* **Cognition (UV Lattice):** lattice underlay reveals on hover; diffraction underline.
* **Waves (Fusion Interference):** two sine fields cross; white sparks at intersections.
* Buttons: `.btn` with cyan background, **specular sweep** on hover.

### CTA / Footer

* **CTA bar:** full‑width panel with rails; copy + primary button (cyan) + secondary (outline copper).
* **Footer:** slim, copper hairlines; links grouped; social (neutral). No heavy graphics.

### Forms (contact / booking)

* Inputs on `--surface`, 1px line; focus ring = dual ring (outer cyan @ 40% / inner UV @ 100%).
* Validation: `--danger` text + shake **disabled** (never motion for errors).
* Submit button: cyan; success toast uses `--success`.

---

# 3) Technical Implementation

## 3.1 CSS/SCSS Architecture

```
/styles
  /tokens/_colors.scss
  /tokens/_typography.scss
  /tokens/_space.scss
  /tokens/_elevation.scss
  base/_normalize.scss
  base/_globals.scss
  components/_buttons.scss
  components/_cards.scss
  components/_nav.scss
  components/_hero.scss
  components/_forms.scss
  effects/_rails.scss
  effects/_halo.scss
  utilities/_visually-hidden.scss
  index.scss
```

### Essentials (extracts)

```css
/* base */
html{ background:var(--bg-0); color:var(--text); }
.container{ width:min(100%, 1200px); margin-inline:auto; padding-inline:24px; }

.card{
  background:var(--surface);
  border:1px solid var(--line);
  border-radius:12px; padding:16px;
  transition:transform .18s, border-color .18s, box-shadow .3s;
}
.card:hover{
  transform:translateY(-1px);
  border-color:color-mix(in oklab, var(--ai-ion) 40%, transparent);
  box-shadow:0 10px 32px color-mix(in oklab, var(--ai-ion) 16%, transparent);
}

.btn{
  position:relative; overflow:hidden;
  background:var(--ai-ion); color:#061015; border-radius:12px;
  padding:.7rem 1.1rem; font-weight:600; border:none; cursor:pointer;
}
.btn::after{
  content:""; position:absolute; inset:-20% -40%;
  background:linear-gradient(100deg, transparent, #fff7, transparent);
  transform:translateX(-120%); filter:blur(2px);
}
.btn:hover::after{ animation:sweep .6s ease; }
@keyframes sweep{ to { transform:translateX(120%); } }

.tag-memory{ background:var(--mem); color:#121212; }
.tag-cognition{ background:var(--cog); color:#090912; }
.tag-waves{ background:var(--wav); color:#0B0D0E; }
```

## 3.2 FusionParticles (full TS implementation)

A minimal, dependency‑free WebGL2 particle engine with deterministic motion, anchor flows, and perf gates. **One canvas; three draw passes** (human, AI, fusion). Includes reduced‑motion + visibility gating.

> **Note:** This is engineered for **visual quality** at low complexity. It does *not* use transform feedback; positions are a smooth function of seed+time (deterministic, continuous). That keeps CPU at \~0 and GPU stable.

```ts
// src/particles/FusionParticles.ts
type Field = 'human' | 'ai' | 'fusion';
type Mode = 'idle' | 'converge' | 'deliver' | 'cta';

export interface ParticleTheme {
  color: [number, number, number];    // linear sRGB 0..1
  size: [number, number];             // px range
  speed: [number, number];            // scalar multipliers
  jitter?: number;                    // 0..1
}

export interface FlowAnchor { el: Element; weight?: number; }

interface DrawPass {
  count: number;
  vao: WebGLVertexArrayObject | null;
  seed: WebGLBuffer | null;   // vec2
  phase: WebGLBuffer | null;  // float
  speed: WebGLBuffer | null;  // float
  color: [number, number, number];
  size: [number, number];
  theme: ParticleTheme;
  sources: Float32Array; // vec2[N]
  sinks: Float32Array;   // vec2[N]
  numSrc: number;
  numSnk: number;
}

export interface FusionOptions {
  canvas: HTMLCanvasElement;
  dpr?: number;
  maxPerField?: number;          // desktop default 80_000
  mobilePerField?: number;       // mobile default 20_000
  themes: Record<Field, ParticleTheme>;
  anchors?: Partial<Record<Field, { sources?: FlowAnchor[]; sinks?: FlowAnchor[] }>>;
  prefersReducedMotion?: boolean;
}

export class FusionParticles {
  private gl!: WebGL2RenderingContext;
  private prog!: WebGLProgram;
  private u = {} as Record<string, WebGLUniformLocation>;
  private canvas: HTMLCanvasElement;
  private dpr: number;
  private raf = 0;
  private t0 = performance.now();
  private running = false;
  private mode: Mode = 'idle';
  private intensity = 0.85; // 0..1
  private pointer: { x: number; y: number; active: boolean } = { x: 0, y: 0, active: false };
  private passes: Record<Field, DrawPass> = {} as any;
  private maxAnchors = 8;

  private resizeObs?: ResizeObserver;
  private visObs?: IntersectionObserver;

  constructor(private opts: FusionOptions) {
    this.canvas = opts.canvas;
    this.dpr = opts.dpr || Math.min(devicePixelRatio || 1, 2);
    if (opts.prefersReducedMotion === undefined) {
      opts.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    this.initGL();
    this.createProgram();
    this.createPasses();
    this.bindEvents();

    if (!opts.prefersReducedMotion) this.start();
  }

  /** Public API **/
  start() {
    if (this.running) return;
    this.running = true;
    this.t0 = performance.now();
    this.loop();
  }
  stop() {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }
  setMode(mode: Mode) { this.mode = mode; }
  setIntensity(v: number) { this.intensity = Math.max(0, Math.min(1, v)); }

  setAnchors(field: Field, sources: FlowAnchor[] = [], sinks: FlowAnchor[] = []) {
    const pass = this.passes[field];
    const s = this.computeAnchors(sources);
    const k = this.computeAnchors(sinks);
    pass.sources.set(s.data); pass.numSrc = s.count;
    pass.sinks.set(k.data);   pass.numSnk = k.count;
  }

  resize() { this.resizeCanvas(); }

  /** Internal **/
  private initGL() {
    const gl = this.canvas.getContext('webgl2', {
      antialias: true, alpha: true, premultipliedAlpha: true, powerPreference: 'high-performance'
    }) as WebGL2RenderingContext | null;
    if (!gl) throw new Error('WebGL2 not supported');
    this.gl = gl;
    this.resizeCanvas();
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  }

  private resizeCanvas() {
    const w = this.canvas.clientWidth, h = this.canvas.clientHeight;
    const W = Math.max(1, Math.floor(w * this.dpr)), H = Math.max(1, Math.floor(h * this.dpr));
    if (this.canvas.width !== W || this.canvas.height !== H) {
      this.canvas.width = W; this.canvas.height = H;
      this.gl.viewport(0, 0, W, H);
    }
  }

  private createProgram() {
    const vs = `#version 300 es
    precision highp float;
    layout(location=0) in vec2 aSeed;
    layout(location=1) in float aPhase;
    layout(location=2) in float aSpeed;
    uniform float uTime;
    uniform vec2 uRes;
    uniform float uPixelRatio;
    uniform int  uMode;       // 0 idle,1 converge,2 deliver,3 cta
    uniform float uIntensity; // 0..1
    uniform int  uNumSrc;
    uniform int  uNumSnk;
    uniform vec2 uSrc[8];
    uniform vec2 uSnk[8];
    uniform float uSizeMin;
    uniform float uSizeMax;
    uniform vec2 uPointer;     // NDC
    uniform float uPointerOn;

    // --- hash/Noise helpers (fast, not perfect) ---
    float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y)*p3.z); }
    vec2 hash22(vec2 p){ float n = sin(dot(p, vec2(41.0, 289.0))); return fract(vec2(262144.0, 32768.0) * n); }
    float noise(vec2 p){
      vec2 i = floor(p), f = fract(p);
      float a = hash12(i);
      float b = hash12(i + vec2(1.0,0.0));
      float c = hash12(i + vec2(0.0,1.0));
      float d = hash12(i + vec2(1.0,1.0));
      vec2 u = f*f*(3.0-2.0*f);
      return mix(a, b, u.x) + (c - a)*u.y*(1.0-u.x) + (d - b)*u.x*u.y;
    }
    // curl of pseudo noise
    vec2 curl(vec2 p){
      float e = 0.001;
      float n1 = noise(p + vec2(0.0, e));
      float n2 = noise(p - vec2(0.0, e));
      float n3 = noise(p + vec2(e, 0.0));
      float n4 = noise(p - vec2(e, 0.0));
      float dx = (n1 - n2) / (2.0*e);
      float dy = (n3 - n4) / (2.0*e);
      return vec2(dy, -dx);
    }

    vec2 field(vec2 p){
      // base curl flow (scaled with time)
      vec2 f = curl(p*1.7 + uTime*0.05) * 0.35;
      // attract to sinks; slight repel from sources
      for (int i=0;i<8;i++){
        if(i<uNumSnk){ vec2 s = uSnk[i]; vec2 d = s - p; float L = max(length(d), 0.001); f += normalize(d) * (0.12 / L); }
        if(i<uNumSrc){ vec2 s = uSrc[i]; vec2 d = p - s; float L = max(length(d), 0.001); f += normalize(d) * (0.06 / L); }
      }
      // pointer magnetism
      vec2 dp = uPointer - p;
      f += normalize(dp) * (uPointerOn * 0.20 / max(length(dp), 0.001));
      return f;
    }

    void main(){
      // seeds in NDC [-1,1]
      vec2 p = aSeed;

      float t = uTime*0.6 + aPhase;
      vec2 f = field(p);

      // deterministic drift: oscillate around seed along field & noise
      vec2 drift = f * (0.12*sin(t)) + curl(p*2.1 + t*0.07) * 0.05;

      // mode envelopes
      float mIdle = float(uMode==0);
      float mConv = float(uMode==1);
      float mDel  = float(uMode==2);
      float mCta  = float(uMode==3);

      float drive = uIntensity * (0.6*mIdle + 0.9*mConv + 1.0*mDel + 1.2*mCta);
      vec2 pos = p + drift * drive * aSpeed;

      // subtle orbit in converge/cta
      pos += vec2(sin(t*0.5), cos(t*0.5)) * (0.01*(mConv+mCta));

      float s = mix(uSizeMin, uSizeMax, 0.5 + 0.5*sin(t*2.0));
      gl_PointSize = s * uPixelRatio;
      gl_Position = vec4(pos, 0.0, 1.0);
    }`;

    const fs = `#version 300 es
    precision highp float;
    out vec4 o;
    uniform vec3 uColor;

    void main(){
      vec2 uv = gl_PointCoord*2.0 - 1.0;
      float r = length(uv);
      float alpha = smoothstep(1.0, 0.55, 1.0 - r*r); // soft core
      o = vec4(uColor, alpha);
    }`;

    const gl = this.gl;
    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!; gl.shaderSource(sh, src); gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(sh)); throw new Error('shader compile');
      } return sh;
    };
    const pr = gl.createProgram()!;
    gl.attachShader(pr, compile(gl.VERTEX_SHADER, vs));
    gl.attachShader(pr, compile(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) throw new Error('program link');
    gl.useProgram(pr); this.prog = pr;

    const uni = (n: string) => gl.getUniformLocation(pr, n)!;
    ['uTime','uRes','uPixelRatio','uMode','uIntensity','uNumSrc','uNumSnk',
     'uSrc[0]','uSnk[0]','uSizeMin','uSizeMax','uColor','uPointer','uPointerOn'
    ].forEach(n=> this.u[n] = uni(n));
  }

  private createPasses() {
    const mobile = matchMedia('(max-width: 640px)').matches;
    const perField = mobile ? (this.opts.mobilePerField ?? 20000) : (this.opts.maxPerField ?? 80000);

    (['human','ai','fusion'] as Field[]).forEach((f) => {
      const theme = this.opts.themes[f];
      const count = perField;

      const gl = this.gl;
      const vao = gl.createVertexArray(); gl.bindVertexArray(vao);

      // Seeds in NDC space [-1,1], concentrated bands per field
      const seeds = new Float32Array(count*2);
      for (let i=0;i<count;i++){
        const u = Math.random()*2-1;
        const v = Math.random()*2-1;
        let x=u, y=v;
        if (f==='human'){ x = -0.3 + u*0.3; }              // left band
        if (f==='ai'){    x =  0.3 + u*0.3; }              // right band
        if (f==='fusion'){ x = (u*0.15); y = v*0.25; }     // center
        seeds[i*2]=x; seeds[i*2+1]=y;
      }
      const seedBuf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, seedBuf);
      gl.bufferData(gl.ARRAY_BUFFER, seeds, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(0); // aSeed
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

      // Phase + speed jitter
      const phase = new Float32Array(count);
      const speed = new Float32Array(count);
      for (let i=0;i<count;i++){ phase[i]=Math.random()*6.283; speed[i]=theme.speed[0] + Math.random()*(theme.speed[1]-theme.speed[0]); }
      const phBuf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, phBuf);
      gl.bufferData(gl.ARRAY_BUFFER, phase, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(1); gl.vertexAttribPointer(1, 1, gl.FLOAT, false, 0, 0);

      const spBuf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, spBuf);
      gl.bufferData(gl.ARRAY_BUFFER, speed, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(2); gl.vertexAttribPointer(2, 1, gl.FLOAT, false, 0, 0);

      gl.bindVertexArray(null);

      this.passes[f] = {
        count, vao, seed: seedBuf, phase: phBuf, speed: spBuf,
        color: theme.color, size: theme.size, theme,
        sources: new Float32Array(this.maxAnchors*2),
        sinks:   new Float32Array(this.maxAnchors*2),
        numSrc:0, numSnk:0,
      };
    });

    // seed anchors if provided
    if (this.opts.anchors) {
      for (const k of Object.keys(this.opts.anchors) as Field[]) {
        const a = this.opts.anchors![k]!;
        this.setAnchors(k, a.sources ?? [], a.sinks ?? []);
      }
    }
  }

  private bindEvents() {
    const resize = () => this.resizeCanvas();
    this.resizeObs = new ResizeObserver(resize);
    this.resizeObs.observe(this.canvas);

    // visibility gating
    this.visObs = new IntersectionObserver(entries=>{
      for (const e of entries){
        if (e.isIntersecting) this.start(); else this.stop();
      }
    }, { threshold: .15 });
    this.visObs.observe(this.canvas);

    // pointer magnetism
    const toNDC = (e: PointerEvent) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left)/rect.width) * 2 - 1;
      const y = 1 - ((e.clientY - rect.top)/rect.height) * 2;
      return {x,y};
    };
    const onMove = (e: PointerEvent) => { const p = toNDC(e); this.pointer.x = p.x; this.pointer.y = p.y; };
    this.canvas.addEventListener('pointermove', onMove);
    this.canvas.addEventListener('pointerenter', e => { this.pointer.active = true; onMove(e); });
    this.canvas.addEventListener('pointerleave', () => { this.pointer.active = false; });
  }

  private loop = () => {
    if (!this.running) return;
    this.raf = requestAnimationFrame(this.loop);
    const gl = this.gl;
    const now = performance.now();
    const t = (now - this.t0) / 1000;

    gl.useProgram(this.prog);
    gl.uniform1f(this.u['uTime'], t);
    gl.uniform2f(this.u['uRes'], this.canvas.width, this.canvas.height);
    gl.uniform1f(this.u['uPixelRatio'], this.dpr);
    gl.uniform1i(this.u['uMode'], ['idle','converge','deliver','cta'].indexOf(this.mode));
    gl.uniform1f(this.u['uIntensity'], this.intensity);
    gl.uniform2f(this.u['uPointer'], this.pointer.x, this.pointer.y);
    gl.uniform1f(this.u['uPointerOn'], this.pointer.active ? 1 : 0);

    gl.clearColor(0,0,0,0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    (['human','ai','fusion'] as Field[]).forEach((f)=>{
      const p = this.passes[f];
      gl.bindVertexArray(p.vao);

      gl.uniform1f(this.u['uSizeMin'], p.size[0]);
      gl.uniform1f(this.u['uSizeMax'], p.size[1]);
      gl.uniform3f(this.u['uColor'], p.color[0], p.color[1], p.color[2]);

      // anchors
      gl.uniform1i(this.u['uNumSrc'], p.numSrc);
      gl.uniform1i(this.u['uNumSnk'], p.numSnk);
      gl.uniform2fv(this.u['uSrc[0]'], p.sources);
      gl.uniform2fv(this.u['uSnk[0]'], p.sinks);

      gl.drawArrays(gl.POINTS, 0, p.count);
    });
    gl.bindVertexArray(null);
  };

  private computeAnchors(items: FlowAnchor[]){
    const out = new Float32Array(this.maxAnchors*2);
    const rect = this.canvas.getBoundingClientRect();
    const n = Math.min(items.length, this.maxAnchors);
    for (let i=0;i<n;i++){
      const el = items[i].el as HTMLElement;
      const r = el.getBoundingClientRect();
      const cx = (r.left + r.width/2 - rect.left) / rect.width;
      const cy = (r.top + r.height/2 - rect.top) / rect.height;
      out[i*2] = cx*2 - 1;
      out[i*2+1] = 1 - cy*2;
    }
    return { data: out, count: n };
  }
}
```

**Usage (hero):**

```ts
import { FusionParticles } from './particles/FusionParticles';

const canvas = document.getElementById('fusion-canvas') as HTMLCanvasElement;
const engine = new FusionParticles({
  canvas,
  themes: {
    human: { color: [0.79,0.53,0.23], size:[1.8,3.2], speed:[0.8,1.1] },   // copper
    ai:    { color: [0.0,0.82,1.0],   size:[1.4,2.6], speed:[1.0,1.6] },   // ion
    fusion:{ color: [1,1,1],          size:[2.2,4.6], speed:[0.9,1.4] }
  }
});

// anchors: bust silhouette on left; MCP cards on right
engine.setAnchors('human', [{el: document.querySelector('#bust-silhouette')!}], []);
engine.setAnchors('ai',    [{el: document.querySelector('.hero-copy')!}],   []);
engine.setAnchors('fusion', [], [
  {el: document.querySelector('.mcp-card.memory')!},
  {el: document.querySelector('.mcp-card.cognition')!},
  {el: document.querySelector('.mcp-card.waves')!},
]);

// modes
engine.setMode('idle');
document.querySelector('.cta')?.addEventListener('mouseenter', ()=>engine.setMode('cta'));
document.addEventListener('scroll', ()=>{
  // when MCP section enters viewport
  const mcp = document.querySelector('.mcp')!;
  const rect = mcp.getBoundingClientRect();
  if (rect.top < innerHeight*0.7) engine.setMode('deliver');
});
```

## 3.3 Canvas Placement / CSS

```css
.fusion-canvas{
  position: fixed; inset: 0; z-index: 0; pointer-events:none;
}
.nav, .hero, .mcp, .cases, .about, .contact, .site-footer{ position:relative; z-index:1; }
```

## 3.4 Reduced Motion / Perf Gates

* If `prefers-reduced-motion: reduce` → do **not** start engine; show static halos/gradients.
* Visibility gating via `IntersectionObserver` (already in class).
* Particle caps: **Desktop ≤ 240k total**, **Mobile ≤ 60k total**.
* **One** canvas, never more.
* Throttle to 30fps on `navigator.connection.saveData` or low‑end hardware (optional: requestAnimationFrame skip).

---

# 4) Stylized Representation (no real photo)

## 4.1 Wire‑Bust Cameo (SVG)

* **Single SVG path** of a geometric head‑shoulders cameo (vector). Copper stroke, 1.8px on desktop (1.2px mobile).
* Provide an `id="bust-silhouette"` path; its DOM box is used as **human source anchor**.
* Optional **facets** (triangular lines) at 24% opacity.

```html
<svg class="bust" viewBox="0 0 320 400" aria-label="Ocean digital bust">
  <defs>
    <radialGradient id="halo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="transparent"/>
      <stop offset="100%" stop-color="color-mix(in oklab, var(--uv-ring) 40%, transparent)"/>
    </radialGradient>
  </defs>
  <circle cx="160" cy="180" r="160" fill="url(#halo)" class="halo"/>
  <path id="bust-silhouette"
        d="M160 70c-30 0-54 24-54 54 0 18 9 34 23 44-18 10-31 29-31 51v28h124v-28c0-22-13-41-31-51 14-10 23-26 23-44 0-30-24-54-54-54z"
        fill="none" stroke="var(--human-copper)" stroke-width="1.8" />
</svg>
```

## 4.2 Low‑Poly Bust (glTF)

* Create in Blender (head‑and‑shoulders bust), **≤ 12k tris**, single UV set.
* Material: **matcap copper** (PBR roughness `.4`), **rimlight** fake via fresnel.
* Render it once (no continuous rotation); **±2px parallax** on scroll only.

---

# 5) Interaction Patterns & Micro‑animations

* **Nav active underline:** animated gradient sweep 1.2s ease on route change.
* **Card hover:** 2% scale, inner cyan stroke, signature animation (facet/lattice/wave) plays once.
* **CTA hover:** ring tightens from 105%→100% + specular sweep (code above).
* **Toast success (forms):** fade+slide up; no confetti; 700ms.

---

# 6) Content Strategy

## 6.1 Section Architecture & Messaging

1. **Hero**

   * H1: *Human insight, machine precision—fused.*
   * Sub: *We build systems that amplify you.*
   * CTA: *Start an intelligence session*.
2. **How it works (3 steps)**

   * *Discover* (your context) → *Design* (fusion patterns) → *Deploy* (instrumented systems).
   * Use small diagrams with **copper→cyan** flows.
3. **MCP Modules**

   * **Memory MCP:** *Persistent context with semantic search.*
     – *Signature:* copper crystalline facets.
   * **Cognition MCP:** *Ranked reasoning and orchestration.*
     – *Signature:* UV lattice reveal.
   * **Waves MCP:** *Accountability + progress telemetry.*
     – *Signature:* fusion interference lines.
4. **Selected outcomes** (3–5)

   * One‑sentence result + metric. Use neutral screenshots; light powder dissolve on reveal.
5. **About**

   * Ocean’s positioning: *Builds amplifiers, not black boxes.*
   * Small portrait cameo remains stylized.
6. **Contact / Booking**

   * Short form: Name, Email, Company, Problem summary (textarea), Desired outcome (select).
   * CTA: *Initialize session*.

## 6.2 Conversion

* **Primary CTA** repeats after MCP section and before footer.
* **Sticky mini‑CTA** (mobile only): narrow bar with button; no particles.

---

# 7) Asset Requirements

* **Wire‑bust SVG** (provided above as base; replace path later if desired).
* **Optional glTF bust** (see spec 4.2).
* **Icon system (stroke 1.5px):**

  * Memory: stacked coils / card index.
  * Cognition: polyhedron / lattice node.
  * Waves: sine triad with sparks at intersections.
* **Particle sprites:** none required (point sprites). If wanting bokeh: 64×64 soft‑disk PNG (optional).
* **Matcaps:** copper, chrome (PNG 512×512) if using 3D bust.
* **Illustrations:** small annotated diagrams for the “How it works” steps.

---

# 8) Documentation & Handoff

## 8.1 Repository Layout

```
/src
  /styles  (SCSS structure above)
  /particles/FusionParticles.ts
  /components   (Nav.tsx, Hero.tsx, Card.tsx, Form.tsx)
  /icons
  /pages
  main.ts
/public
  /models (bust.glb)
  /images
```

## 8.2 Developer Notes

* **Single canvas** at `#fusion-canvas`, `position: fixed; inset:0; z-index:0; pointer-events:none`.
* Initialize `FusionParticles` in `main.ts` once DOM is ready.
* Pass anchors for bust, hero copy, and MCP cards after mount.
* **Tailwind users:** bind tokens via `:root` CSS variables, then map to Tailwind `theme.extend.colors`.

## 8.3 Component Props (examples)

```ts
type ButtonProps = { variant:'primary'|'outline'|'ghost'; size?:'sm'|'md'|'lg' } // primary=cyan, outline=copper
type CardProps = { title:string; icon:JSX.Element; tag:'Memory'|'Cognition'|'Waves'; cta?:string }
type FormSubmit = (data:{name:string;email:string;company?:string;summary:string;goal?:string})=>Promise<void>
```

## 8.4 Performance Benchmarks & Targets

* **LCP** (hero H1 or bust): **≤ 2.5s** (desktop), **≤ 3.0s** (mobile 4G).
* **CLS:** ≤ 0.02 (reserve space for fonts).
* **TBT:** ≤ 150ms (hydrate light; postpone particle init to `requestIdleCallback` or after first paint).
* **FPS:** 60 desktop (idle ≥ 50), 40–60 mobile (throttle counts).
* **Memory:** GPU ≤ 80MB for canvas.

Instrumentation: `PerformanceObserver` for LCP/CLS, simple RAF sampler for FPS.

---

# 9) Example Markup (hero + MCP)

```html
<header class="nav">
  <div class="container">
    <a class="brand">Ocean</a>
    <nav>
      <a class="active">Home</a><a>How it works</a><a>Modules</a><a>Contact</a>
    </nav>
    <button class="btn cta">Start an intelligence session</button>
  </div>
  <div class="rail"></div>
</header>

<section class="hero container">
  <div class="hero-visual">
    <!-- SVG wire-bust from §4.1 -->
    <!-- id="bust-silhouette" is used by particle anchors -->
  </div>
  <div class="hero-copy">
    <h1>Human insight, machine precision—fused.</h1>
    <p>We build systems that amplify you.</p>
    <div class="actions">
      <button class="btn cta">Start an intelligence session</button>
    </div>
  </div>
</section>

<section class="mcp container">
  <div class="mcp-card memory">
    <div class="tag tag-memory">Memory MCP</div>
    <h3>Persistent context with semantic search</h3>
    <p>Save, rank, and retrieve cross-session context.</p>
    <button class="btn">Explore Memory</button>
  </div>
  <div class="mcp-card cognition">
    <div class="tag tag-cognition">Cognition MCP</div>
    <h3>Ranked reasoning & orchestration</h3>
    <p>Plan, evaluate, and route tasks with UV clarity.</p>
    <button class="btn">Explore Cognition</button>
  </div>
  <div class="mcp-card waves">
    <div class="tag tag-waves">Waves MCP</div>
    <h3>Accountability & progress telemetry</h3>
    <p>ALIVE/WORK gates and steady tracking.</p>
    <button class="btn">Explore Waves</button>
  </div>
</section>
```

---

# 10) Accessibility

* Colors in this spec meet **AA** on `--surface`. Check custom imagery.
* Clear focus rings: 2‑ring style (outer cyan @ 40%, inner UV @ 100%).
* All motion disabled when `prefers-reduced-motion: reduce`.
* Form labels always visible; placeholder ≠ label.
* Keyboard nav: `:focus-visible` styles on links and buttons; skip link at top.

---

# 11) QA Checklist (DoD)

* [ ] LCP target met on Moto G4 throttled (Lighthouse).
* [ ] Engine stops when not visible; no RAF leak.
* [ ] Particle counts correctly cap at breakpoints.
* [ ] Reduced motion path shows static halos; canvas not started.
* [ ] All interactive elements have focus styles & accessible names.
* [ ] MCP signatures render and pause offscreen.
* [ ] Forms validate (client + server), errors announced (aria‑live).

---

## Final Notes

* Start with **Wire‑Bust SVG** (fast). If you later want the **low‑poly bust**, swap the DOM anchor from the `<path id="bust-silhouette">` to the `<model-viewer>`/canvas element bounding box; the particle API already supports element anchors.
* For docs/dashboards, use the same tokens in a **Cold‑Archive** shell: cyan rails, glass slabs, and toned‑down particles (or none).

If you want, I can also deliver a **ready TS + SCSS starter** with this structure and the `FusionParticles` class wired to the hero and MCP anchors, so you can clone and run immediately.
