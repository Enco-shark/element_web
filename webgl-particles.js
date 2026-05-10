/* ═══════════════════════════════════════════════════════════════════════
   WEBGL SHADER PARTICLE SYSTEM — Antigravity Element Particles
   GPU-accelerated rendering with Vertex/Fragment Shaders
   Preserves all original interactions: mouse antigravity, flow field,
   spring-back, lifecycle, connections, theme colors, symbol display
═══════════════════════════════════════════════════════════════════════ */

const WebGLParticleSystem = (() => {

  const _SYMBOLS = [
    'H','He','Li','Be','B','C','N','O','F','Ne',
    'Na','Mg','Al','Si','P','S','Cl','Ar','K','Ca',
    'Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn',
    'Ga','Ge','As','Se','Br','Kr','Rb','Sr','Y','Zr',
    'Nb','Mo','Tc','Ru','Rh','Pd','Ag','Cd','In','Sn',
    'Sb','Te','I','Xe','Cs','Ba','La','Ce','Pr','Nd',
    'Pm','Sm','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb',
    'Lu','Hf','Ta','W','Re','Os','Ir','Pt','Au','Hg',
    'Tl','Pb','Bi','Po','At','Rn','Fr','Ra','Ac','Th',
    'Pa','U','Np','Pu','Am','Cm','Bk','Cf','Es','Fm',
    'Md','No','Lr','Rf','Db','Sg','Bh','Hs','Mt','Ds',
    'Rg','Cn','Nh','Fl','Mc','Lv','Ts','Og'
  ];

  const _CD = ['#6a9df6','#80cbc4','#ffb366','#f08f8f','#9e9eff','#ce93d8','#67d1ed','#ffecb3','#ff8a80','#a5d6a7','#82b1ff','#ea80fc','#b9f6ca','#b388ff','#8c9eff','#84ffff','#ff80ab','#ccff90','#ffd740','#69f0ae','#40c4ff','#e040fb','#ff6e40','#bcaaa4'];
  const _CL = ['#1a73e8','#34a853','#f48024','#db4437','#4285f4','#8e44ad','#1aadcf','#ffc107','#e53935','#43a047','#1e88e5','#8e24aa','#00acc1','#3949ab','#7cb342','#00bcd4','#d81b60','#689f38','#ffb300','#00897b','#0288d1','#ab47bc','#f4511e','#78909c'];

  const MAX_PARTICLES = 200;
  const INITIAL_COUNT = 118;

  /* ═════════════════════════════════════════════════════════════════════
     WebGL Context & Resources
  ═════════════════════════════════════════════════════════════════════ */
  let gl, canvas;
  let _W, _H;
  let programParticle, programLine, programSymbol;
  let vaoParticle, vaoLine;
  let particleVBO, particleColorVBO, particleMetaVBO;
  let lineVBO;
  let symbolTexture;
  let symbolTextureAtlas;
  let themeUniformBuffer = null;

  let particlePositions, particleVelocities, particleBasePositions;
  let particleColors, particleMetas;
  let particleCount = 0;
  let particlesReady = false;

  let currentTheme = 'dark';
  let currentColors = _CD;

  let time = 0;
  let rafId = null;

  /* ═════════════════════════════════════════════════════════════════════
     Vertex Shader — Particle Rendering
     Computes point size, applies glow, passes data to fragment shader
  ═════════════════════════════════════════════════════════════════════ */
  const VS_PARTICLE = `#version 300 es
    precision highp float;

    layout(location = 0) in vec2 a_position;
    layout(location = 1) in vec3 a_color;
    layout(location = 2) in vec4 a_meta;

    uniform vec2 u_resolution;
    uniform float u_time;
    uniform float u_dpr;

    out vec3 v_color;
    out float v_alpha;
    out float v_size;
    out float v_glow;
    out float v_symIndex;
    out vec2 v_uv;

    void main() {
      vec2 pos = a_position;
      vec2 clip = (pos / u_resolution) * 2.0 - 1.0;
      clip.y = -clip.y;

      float size = a_meta.x;
      float alpha = a_meta.y;
      float glow = a_meta.z;
      float symIdx = a_meta.w;

      float ptSize = size * u_dpr;
      gl_Position = vec4(clip, 0.0, 1.0);
      gl_PointSize = ptSize;

      v_color = a_color;
      v_alpha = alpha;
      v_size = size;
      v_glow = glow;
      v_symIndex = symIdx;
      v_uv = vec2(0.0);
    }
  `;

  /* ═════════════════════════════════════════════════════════════════════
     Fragment Shader — Particle Rendering with Glow & Symbol
     Soft circular particles with Gaussian-like falloff, additive glow,
     and element symbol sampling from texture atlas
  ═════════════════════════════════════════════════════════════════════ */
  const FS_PARTICLE = `#version 300 es
    precision highp float;

    in vec3 v_color;
    in float v_alpha;
    in float v_size;
    in float v_glow;
    in float v_symIndex;
    in vec2 v_uv;

    uniform sampler2D u_symbolAtlas;
    uniform float u_time;
    uniform float u_isDark;

    out vec4 fragColor;

    void main() {
      vec2 center = gl_PointCoord - 0.5;
      float dist = length(center);

      // Soft circular particle with smooth falloff
      float coreRadius = 0.35;
      float glowRadius = 0.48;
      float outerRadius = 0.5;

      float core = 1.0 - smoothstep(0.0, coreRadius, dist);
      float glow = exp(-dist * dist / 0.06) * 0.5;
      float softEdge = 1.0 - smoothstep(glowRadius, outerRadius, dist);

      float intensity = core + glow * v_glow;
      intensity *= softEdge;

      // Micro-sparkle: subtle bright spots
      float sparkle = exp(-dist * dist / 0.004) * 0.12;
      intensity += sparkle;

      vec3 color = v_color;

      // Subtle pulsing based on time
      float pulse = 1.0 + sin(u_time * 2.0 + v_symIndex) * 0.08;
      intensity *= pulse;

      // Chromatic fringe effect at edges
      float fringe = smoothstep(0.3, 0.48, dist);
      vec3 fringeColor = color * vec3(1.15, 0.9, 1.2);
      color = mix(color, fringeColor, fringe * 0.3);

      float alpha = intensity * v_alpha;

      // Additive-style brightening for glow
      vec3 finalColor = color * (1.0 + intensity * 0.4);

      fragColor = vec4(finalColor, alpha);
    }
  `;

  /* ═════════════════════════════════════════════════════════════════════
     Vertex Shader — Connection Lines
  ═════════════════════════════════════════════════════════════════════ */
  const VS_LINE = `#version 300 es
    precision highp float;

    layout(location = 0) in vec2 a_position;

    uniform vec2 u_resolution;
    uniform float u_dpr;

    out float v_dist;

    void main() {
      vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
      clip.y = -clip.y;
      gl_Position = vec4(clip, 0.0, 1.0);
    }
  `;

  /* ═════════════════════════════════════════════════════════════════════
     Fragment Shader — Connection Lines
  ═════════════════════════════════════════════════════════════════════ */
  const FS_LINE = `#version 300 es
    precision highp float;

    uniform float u_alpha;
    uniform float u_isDark;

    out vec4 fragColor;

    void main() {
      float alpha = u_alpha;
      vec3 color = u_isDark > 0.5 ? vec3(1.0) : vec3(0.0);
      fragColor = vec4(color, alpha);
    }
  `;

  /* ═════════════════════════════════════════════════════════════════════
     Shader Compilation
  ═════════════════════════════════════════════════════════════════════ */
  function compileShader(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader compile error:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function createProgram(vsSource, fsSource) {
    const vs = compileShader(gl.VERTEX_SHADER, vsSource);
    const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return null;
    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return null;
    }
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    return program;
  }

  /* ═════════════════════════════════════════════════════════════════════
     Symbol Texture Atlas — Renders all 118 element symbols onto a canvas
     and uploads as a WebGL texture for GPU-accelerated text rendering
  ═════════════════════════════════════════════════════════════════════ */
  function createSymbolAtlas() {
    const atlasCanvas = document.createElement('canvas');
    const atlasSize = 1024;
    const cols = 12;
    const rows = Math.ceil(_SYMBOLS.length / cols);
    const cellW = atlasSize / cols;
    const cellH = atlasSize / rows;

    atlasCanvas.width = atlasSize;
    atlasCanvas.height = atlasSize;
    const ctx = atlasCanvas.getContext('2d');

    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, atlasSize, atlasSize);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '600 32px Inter, Nunito, system-ui, sans-serif';

    for (let i = 0; i < _SYMBOLS.length; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const cx = col * cellW + cellW / 2;
      const cy = row * cellH + cellH / 2;
      ctx.fillStyle = '#ffffff';
      ctx.fillText(_SYMBOLS[i], cx, cy);
    }

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, atlasSize, atlasSize, 0, gl.RGBA, gl.UNSIGNED_BYTE, atlasCanvas);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.generateMipmap(gl.TEXTURE_2D);

    return { texture, cols, rows, cellW, cellH, atlasSize };
  }

  /* ═════════════════════════════════════════════════════════════════════
     Initialize WebGL
  ═════════════════════════════════════════════════════════════════════ */
  function initGL() {
    canvas = document.createElement('canvas');
    canvas.id = 'particleCanvas';
    canvas.style.cssText = 'position:fixed;inset:0;z-index:1;pointer-events:none;width:100%;height:100%;';
    document.body.appendChild(canvas);

    gl = canvas.getContext('webgl2', {
      alpha: true,
      antialias: true,
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
      powerPreference: 'high-performance'
    });

    if (!gl) {
      console.error('WebGL 2 not available, falling back to Canvas 2D');
      return false;
    }

    programParticle = createProgram(VS_PARTICLE, FS_PARTICLE);
    programLine = createProgram(VS_LINE, FS_LINE);

    if (!programParticle || !programLine) return false;

    vaoParticle = gl.createVertexArray();
    vaoLine = gl.createVertexArray();

    particlePositions = new Float32Array(MAX_PARTICLES * 2);
    particleVelocities = new Float32Array(MAX_PARTICLES * 2);
    particleBasePositions = new Float32Array(MAX_PARTICLES * 2);
    particleColors = new Float32Array(MAX_PARTICLES * 3);
    particleMetas = new Float32Array(MAX_PARTICLES * 4);

    particleVBO = gl.createBuffer();
    particleColorVBO = gl.createBuffer();
    particleMetaVBO = gl.createBuffer();
    lineVBO = gl.createBuffer();

    symbolTextureAtlas = createSymbolAtlas();

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    return true;
  }

  /* ═════════════════════════════════════════════════════════════════════
     Resize Handler
  ═════════════════════════════════════════════════════════════════════ */
  function resize() {
    _W = innerWidth;
    _H = innerHeight;
    const dpr = devicePixelRatio || 1;
    canvas.width = _W * dpr;
    canvas.height = _H * dpr;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }

  /* ═════════════════════════════════════════════════════════════════════
     Particle State Management
  ═════════════════════════════════════════════════════════════════════ */
  const particleLife = new Float32Array(MAX_PARTICLES);
  const particleMaxLife = new Float32Array(MAX_PARTICLES);
  const particleBaseAlpha = new Float32Array(MAX_PARTICLES);

  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16) / 255,
      parseInt(result[2], 16) / 255,
      parseInt(result[3], 16) / 255
    ] : [0.5, 0.5, 0.5];
  }

  function spawnParticle(idx) {
    const x = Math.random() * _W;
    const y = Math.random() * _H;
    const si = (Math.random() * _SYMBOLS.length) | 0;

    particlePositions[idx * 2] = x;
    particlePositions[idx * 2 + 1] = y;
    particleVelocities[idx * 2] = 0;
    particleVelocities[idx * 2 + 1] = 0;
    particleBasePositions[idx * 2] = x;
    particleBasePositions[idx * 2 + 1] = y;

    const colorIdx = si % currentColors.length;
    const rgb = hexToRgb(currentColors[colorIdx]);
    particleColors[idx * 3] = rgb[0];
    particleColors[idx * 3 + 1] = rgb[1];
    particleColors[idx * 3 + 2] = rgb[2];

    const baseAlp = 0.25 + Math.random() * 0.25;
    particleMetas[idx * 4] = 10 + Math.random() * 22;
    particleMetas[idx * 4 + 1] = baseAlp;
    particleMetas[idx * 4 + 2] = 0.3 + Math.random() * 0.5;
    particleMetas[idx * 4 + 3] = si;

    particleLife[idx] = 0;
    particleMaxLife[idx] = 8000 + Math.random() * 10000;
    particleBaseAlpha[idx] = baseAlp;
  }

  function generateParticles() {
    particlesReady = false;
    particleCount = 0;

    try {
      const blob = new Blob([`
        self.onmessage = (e) => {
          const { width, height, radius } = e.data;
          const k = 30, r2 = radius * radius, cs = radius / 1.4142;
          const gw = Math.ceil(width / cs), gh = Math.ceil(height / cs);
          const grid = new Array(gw * gh), act = [], pts = [];
          function ins(p) { pts.push(p); act.push(p); grid[(p.x / cs) | 0 + (p.y / cs) | 0 * gw] = p; }
          function far(x, y) {
            const gx = (x / cs) | 0, gy = (y / cs) | 0;
            for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) {
              const nx = gx + i, ny = gy + j;
              if (nx < 0 || ny < 0 || nx >= gw || ny >= gh) continue;
              const n = grid[nx + ny * gw];
              if (n) { const dx = n.x - x, dy = n.y - y; if (dx * dx + dy * dy < r2) return false; }
            }
            return true;
          }
          for (let s = 0; s < 18; s++) ins({ x: Math.random() * width, y: Math.random() * height });
          while (act.length && pts.length < 200) {
            const ri = (Math.random() * act.length) | 0, p = act[ri];
            let found = false;
            for (let n = 0; n < k; n++) {
              const a = Math.random() * 6.2832, m = radius * (1 + Math.random());
              const x = p.x + Math.cos(a) * m, y = p.y + Math.sin(a) * m;
              if (x >= 0 && y >= 0 && x < width && y < height && far(x, y)) { ins({ x, y }); found = true; break; }
            }
            if (!found) act.splice(ri, 1);
          }
          self.postMessage(pts.slice(0, 200));
        };
      `], { type: 'text/javascript' });

      const wrk = new Worker(URL.createObjectURL(blob));
      wrk.postMessage({ width: _W, height: _H, radius: 100 });
      wrk.onmessage = e => {
        const pts = e.data;
        particleCount = Math.min(pts.length, INITIAL_COUNT);
        for (let i = 0; i < particleCount; i++) {
          particlePositions[i * 2] = pts[i].x;
          particlePositions[i * 2 + 1] = pts[i].y;
          particleVelocities[i * 2] = 0;
          particleVelocities[i * 2 + 1] = 0;
          particleBasePositions[i * 2] = pts[i].x;
          particleBasePositions[i * 2 + 1] = pts[i].y;

          const si = i % _SYMBOLS.length;
          const ci = si % currentColors.length;
          const rgb = hexToRgb(currentColors[ci]);
          particleColors[i * 3] = rgb[0];
          particleColors[i * 3 + 1] = rgb[1];
          particleColors[i * 3 + 2] = rgb[2];

          particleMetas[i * 4] = 10 + Math.random() * 22;
          particleMetas[i * 4 + 1] = 0.25 + Math.random() * 0.25;
          particleMetas[i * 4 + 2] = 0.3 + Math.random() * 0.5;
          particleMetas[i * 4 + 3] = i % _SYMBOLS.length;

          particleLife[i] = 0;
          particleMaxLife[i] = 8000 + Math.random() * 10000;
          particleBaseAlpha[i] = particleMetas[i * 4 + 1];
        }

        for (let i = particleCount; i < MAX_PARTICLES; i++) {
          spawnParticle(i);
        }
        particleCount = MAX_PARTICLES;
        particlesReady = true;
        wrk.terminate();
      };
    } catch(e) {
      for (let i = 0; i < MAX_PARTICLES; i++) {
        spawnParticle(i);
      }
      particleCount = MAX_PARTICLES;
      particlesReady = true;
    }
  }

  /* ═════════════════════════════════════════════════════════════════════
     Multi-frequency Flow Field — Google-style organic noise
     (GPU-compatible, computed on CPU for physics)
  ═════════════════════════════════════════════════════════════════════ */
  function flowX(x, y, t) {
    return Math.sin(x * 0.002 + t * 0.18 + y * 0.0015) * 0.7
         + Math.sin(x * 0.001 + t * 0.12 + y * 0.003) * 0.5
         + Math.cos(x * 0.003 + t * 0.08 + y * 0.001) * 0.3;
  }

  function flowY(x, y, t) {
    return Math.cos(y * 0.002 + t * 0.15 + x * 0.0015) * 0.7
         + Math.cos(y * 0.001 + t * 0.10 + x * 0.003) * 0.5
         + Math.sin(y * 0.003 + t * 0.06 + x * 0.001) * 0.3;
  }

  /* ═════════════════════════════════════════════════════════════════════
     Physics Update — Particle motion calculation on CPU
     Includes: mouse antigravity, flow field, spring-back, damping,
     particle lifecycle management
  ═════════════════════════════════════════════════════════════════════ */
  const mouse = { x: 0, y: 0, vx: 0, vy: 0 };

  function updatePhysics(t, mx, my) {
    const now = performance.now();

    for (let i = 0; i < particleCount; i++) {
      const age = now;

      // Lifecycle management
      if (particleLife[i] === 0) {
        particleLife[i] = now;
      }

      const elapsed = now - particleLife[i];
      const maxLife = particleMaxLife[i];

      // Compute alpha based on lifecycle phase
      let alphaMultiplier = 1.0;
      const baseAlpha = particleBaseAlpha[i];

      if (elapsed < 400) {
        alphaMultiplier = elapsed / 400;
      } else if (elapsed > maxLife - 800) {
        const remaining = maxLife - elapsed;
        alphaMultiplier = Math.max(0, remaining / 800);
      }

      if (elapsed >= maxLife) {
        spawnParticle(i);
        particleLife[i] = now;
        continue;
      }

      // Store computed alpha
      particleMetas[i * 4 + 1] = baseAlpha * alphaMultiplier;

      const px = particlePositions[i * 2];
      const py = particlePositions[i * 2 + 1];
      let vx = particleVelocities[i * 2];
      let vy = particleVelocities[i * 2 + 1];

      // Mouse antigravity — push away
      const dx = mx - px;
      const dy = my - py;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 260 && dist > 1) {
        const force = (260 - dist) / 260;
        vx -= (dx / dist) * force * 0.4;
        vy -= (dy / dist) * force * 0.4;
      }

      // Multi-frequency flow field
      vx += flowX(px, py, t) * 0.012;
      vy += flowY(px, py, t) * 0.012;

      // Spring back to base position
      const bx = particleBasePositions[i * 2];
      const by = particleBasePositions[i * 2 + 1];
      vx += (bx - px) * 0.0006;
      vy += (by - py) * 0.0006;

      // Damping
      vx *= 0.94;
      vy *= 0.94;

      // Boundary containment with soft bounce
      const margin = 40;
      if (px < -margin) vx += 0.3;
      if (px > _W + margin) vx -= 0.3;
      if (py < -margin) vy += 0.3;
      if (py > _H + margin) vy -= 0.3;

      // Update position
      particlePositions[i * 2] = px + vx;
      particlePositions[i * 2 + 1] = py + vy;
      particleVelocities[i * 2] = vx;
      particleVelocities[i * 2 + 1] = vy;
    }
  }

  /* ═════════════════════════════════════════════════════════════════════
     Spatial Grid for Connection Lines
  ═════════════════════════════════════════════════════════════════════ */
  function buildLineGeometry() {
    const GCELL = 75;
    const MAX_SQ = 5000;
    const gcols = Math.floor(_W / GCELL) + 1;
    const grid = {};

    for (let i = 0; i < particleCount; i++) {
      const px = particlePositions[i * 2];
      const py = particlePositions[i * 2 + 1];
      const gi = Math.floor(px / GCELL) + Math.floor(py / GCELL) * gcols;
      if (!grid[gi]) grid[gi] = [];
      grid[gi].push(i);
    }

    const lines = [];
    for (let i = 0; i < particleCount; i++) {
      const ax = particlePositions[i * 2];
      const ay = particlePositions[i * 2 + 1];
      const gi = Math.floor(ax / GCELL) + Math.floor(ay / GCELL) * gcols;

      for (let ox = -1; ox <= 1; ox++) {
        for (let oy = -1; oy <= 1; oy++) {
          const cell = grid[gi + ox + oy * gcols];
          if (!cell) continue;
          for (let ci = 0; ci < cell.length; ci++) {
            const j = cell[ci];
            if (j <= i) continue;
            const bx = particlePositions[j * 2];
            const by = particlePositions[j * 2 + 1];
            const dx = ax - bx;
            const dy = ay - by;
            if (dx * dx + dy * dy < MAX_SQ) {
              lines.push(ax, ay, bx, by);
            }
          }
        }
      }
    }

    return new Float32Array(lines);
  }

  /* ═════════════════════════════════════════════════════════════════════
     Render Frame
  ═════════════════════════════════════════════════════════════════════ */
  function render(theme, t) {
    if (!particlesReady) return;

    currentTheme = theme;
    currentColors = theme === 'dark' ? _CD : _CL;

    const dpr = devicePixelRatio || 1;
    const isDark = theme === 'dark' ? 1.0 : 0.0;

    // Update colors if theme changed
    for (let i = 0; i < particleCount; i++) {
      const si = particleMetas[i * 4 + 3] | 0;
      const ci = si % currentColors.length;
      const rgb = hexToRgb(currentColors[ci]);
      particleColors[i * 3] = rgb[0];
      particleColors[i * 3 + 1] = rgb[1];
      particleColors[i * 3 + 2] = rgb[2];
    }

    // Physics update
    updatePhysics(t, mouse.x, mouse.y);

    // Clear with persistence trail effect
    gl.clearColor(isDark ? 0.04 : 0.94, isDark ? 0.04 : 0.945, isDark ? 0.06 : 0.95, 0.15);
    gl.clear(gl.COLOR_BUFFER_BIT);

    /* ── Render Connection Lines ── */
    const lineData = buildLineGeometry();
    if (lineData.length > 0) {
      gl.useProgram(programLine);

      gl.bindVertexArray(vaoLine);
      gl.bindBuffer(gl.ARRAY_BUFFER, lineVBO);
      gl.bufferData(gl.ARRAY_BUFFER, lineData, gl.DYNAMIC_DRAW);

      gl.enableVertexAttribArray(0);
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

      gl.uniform2f(gl.getUniformLocation(programLine, 'u_resolution'), _W, _H);
      gl.uniform1f(gl.getUniformLocation(programLine, 'u_alpha'), isDark ? 0.05 : 0.03);
      gl.uniform1f(gl.getUniformLocation(programLine, 'u_isDark'), isDark);

      gl.lineWidth(0.4);
      gl.drawArrays(gl.LINES, 0, lineData.length / 2);
    }

    /* ── Render Particles ── */
    gl.useProgram(programParticle);

    gl.bindVertexArray(vaoParticle);

    gl.bindBuffer(gl.ARRAY_BUFFER, particleVBO);
    gl.bufferData(gl.ARRAY_BUFFER, particlePositions, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, particleColorVBO);
    gl.bufferData(gl.ARRAY_BUFFER, particleColors, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, particleMetaVBO);
    gl.bufferData(gl.ARRAY_BUFFER, particleMetas, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(2);
    gl.vertexAttribPointer(2, 4, gl.FLOAT, false, 0, 0);

    gl.uniform2f(gl.getUniformLocation(programParticle, 'u_resolution'), _W, _H);
    gl.uniform1f(gl.getUniformLocation(programParticle, 'u_time'), t);
    gl.uniform1f(gl.getUniformLocation(programParticle, 'u_dpr'), dpr);
    gl.uniform1f(gl.getUniformLocation(programParticle, 'u_isDark'), isDark);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, symbolTextureAtlas.texture);
    gl.uniform1i(gl.getUniformLocation(programParticle, 'u_symbolAtlas'), 0);

    // Enable additive blending for more vibrant particles
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    gl.drawArrays(gl.POINTS, 0, particleCount);
  }

  /* ═════════════════════════════════════════════════════════════════════
     Main Animation Loop
  ═════════════════════════════════════════════════════════════════════ */
  function animate(timestamp) {
    time = timestamp * 0.001;
    if (particlesReady && typeof currentTheme !== 'undefined') {
      render(currentTheme, time);
    }
    rafId = requestAnimationFrame(animate);
  }

  /* ═════════════════════════════════════════════════════════════════════
     Event Handlers
  ═════════════════════════════════════════════════════════════════════ */
  function onMouseMove(e) {
    mouse.vx = e.clientX - mouse.x;
    mouse.vy = e.clientY - mouse.y;
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  function onResize() {
    _W = innerWidth;
    _H = innerHeight;
    const dpr = devicePixelRatio || 1;
    canvas.width = _W * dpr;
    canvas.height = _H * dpr;
    gl.viewport(0, 0, canvas.width, canvas.height);
    generateParticles();
  }

  /* ═════════════════════════════════════════════════════════════════════
     Public API — matches existing interface
  ═════════════════════════════════════════════════════════════════════ */
  function init() {
    if (!initGL()) {
      console.warn('WebGL Particle System: Falling back. WebGL 2 required.');
      return false;
    }

    resize();
    generateParticles();

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('resize', onResize);

    rafId = requestAnimationFrame(animate);
    return true;
  }

  function refreshColors(theme) {
    currentTheme = theme;
    currentColors = theme === 'dark' ? _CD : _CL;
  }

  function destroy() {
    if (rafId) cancelAnimationFrame(rafId);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('resize', onResize);

    if (gl) {
      gl.deleteProgram(programParticle);
      gl.deleteProgram(programLine);
      gl.deleteVertexArray(vaoParticle);
      gl.deleteVertexArray(vaoLine);
      gl.deleteBuffer(particleVBO);
      gl.deleteBuffer(particleColorVBO);
      gl.deleteBuffer(particleMetaVBO);
      gl.deleteBuffer(lineVBO);
      gl.deleteTexture(symbolTextureAtlas.texture);
    }

    if (canvas && canvas.parentNode) {
      canvas.parentNode.removeChild(canvas);
    }
  }

  return { init, refreshColors, destroy };
})();

/* ═══════════════════════════════════════════════════════════════════════
   Auto-initialize when loaded
═══════════════════════════════════════════════════════════════════════ */
if (typeof document !== 'undefined' && document.readyState !== 'loading') {
  WebGLParticleSystem.init();
} else if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => WebGLParticleSystem.init());
}
