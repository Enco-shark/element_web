const canvas = document.getElementById("scene");
const ctx = canvas.getContext("2d", { alpha: true });

const particleCountLabel = document.getElementById("particleCountLabel");
const modeLabel = document.getElementById("modeLabel");
const particleDensityInput = document.getElementById("particleDensity");
const turbulenceInput = document.getElementById("turbulence");
const trailFadeInput = document.getElementById("trailFade");
const gravityStrengthInput = document.getElementById("gravityStrength");
const randomizeBtn = document.getElementById("randomizeBtn");
const toggleMotionBtn = document.getElementById("toggleMotionBtn");
const boostBtn = document.getElementById("boostBtn");

const TAU = Math.PI * 2;
const pointer = {
  x: 0,
  y: 0,
  tx: 0,
  ty: 0,
  active: false,
  force: 0,
};

const config = {
  density: parseFloat(particleDensityInput.value),
  turbulence: parseFloat(turbulenceInput.value),
  trailFade: parseFloat(trailFadeInput.value),
  gravityStrength: parseFloat(gravityStrengthInput.value),
};

const scenes = [
  {
    name: "Void Drift",
    bg: ["#030612", "#091126", "#0d1844"],
    colors: ["#72e6ff", "#5f8cff", "#ff87dd"],
    scale: 0.0012,
    spin: 1.2,
    ringPulse: 1.4,
    drift: 0.42,
    satellites: 2,
  },
  {
    name: "Ion Bloom",
    bg: ["#040716", "#130a2a", "#1a1e4f"],
    colors: ["#8cf5ff", "#ae7aff", "#ffbe78"],
    scale: 0.0016,
    spin: -1.1,
    ringPulse: 0.9,
    drift: 0.58,
    satellites: 3,
  },
  {
    name: "Event Veil",
    bg: ["#02040f", "#081227", "#102458"],
    colors: ["#7df0d2", "#72a0ff", "#ff7fd1"],
    scale: 0.001,
    spin: 1.8,
    ringPulse: 1.75,
    drift: 0.36,
    satellites: 4,
  },
];

const state = {
  width: 0,
  height: 0,
  dpr: 1,
  time: 0,
  lastTime: performance.now(),
  particles: [],
  paused: false,
  boostUntil: 0,
  preset: scenes[0],
  core: { x: 0, y: 0, radius: 200 },
  satellites: [],
};

function resize() {
  state.width = window.innerWidth;
  state.height = window.innerHeight;
  state.dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = Math.floor(state.width * state.dpr);
  canvas.height = Math.floor(state.height * state.dpr);
  canvas.style.width = `${state.width}px`;
  canvas.style.height = `${state.height}px`;
  ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);

  state.core.x = state.width * 0.52;
  state.core.y = state.height * 0.52;
  state.core.radius = Math.min(state.width, state.height) * 0.18;

  rebuildSatellites();
  rebuildParticles();
}

function rebuildSatellites() {
  state.satellites = [];
  for (let i = 0; i < state.preset.satellites; i += 1) {
    const angle = (i / state.preset.satellites) * TAU + Math.random() * 0.8;
    const dist = Math.min(state.width, state.height) * (0.18 + Math.random() * 0.16);
    state.satellites.push({
      orbit: angle,
      distance: dist,
      speed: (Math.random() * 0.5 + 0.3) * (i % 2 === 0 ? 1 : -1),
      size: 80 + Math.random() * 100,
      strength: 0.5 + Math.random() * 1.1,
    });
  }
}

function particleTargetCount() {
  const areaFactor = (state.width * state.height) / 900;
  return Math.max(900, Math.min(4200, Math.round(areaFactor * 0.95 * config.density)));
}

function rebuildParticles() {
  const count = particleTargetCount();
  state.particles = [];
  for (let i = 0; i < count; i += 1) {
    state.particles.push(createParticle(true));
  }
  particleCountLabel.textContent = count.toLocaleString("zh-CN");
  modeLabel.textContent = state.preset.name;
}

function createParticle(initial = false) {
  const depth = Math.random();
  const angle = Math.random() * TAU;
  const radius = Math.pow(Math.random(), 0.72) * Math.min(state.width, state.height) * 0.44;
  const x = initial ? Math.random() * state.width : state.core.x + Math.cos(angle) * radius * 0.45;
  const y = initial ? Math.random() * state.height : state.core.y + Math.sin(angle) * radius * 0.45;
  return {
    x,
    y,
    px: x,
    py: y,
    vx: 0,
    vy: 0,
    age: Math.random() * 400,
    depth,
    size: 0.4 + depth * 1.6,
    drag: 0.88 + depth * 0.08,
    energy: 0.7 + Math.random() * 0.8,
    hueShift: Math.random(),
  };
}

function respawnParticle(particle) {
  Object.assign(particle, createParticle(false));
}

function hash(x, y) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return s - Math.floor(s);
}

function smoothNoise(x, y) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;

  const a = hash(ix, iy);
  const b = hash(ix + 1, iy);
  const c = hash(ix, iy + 1);
  const d = hash(ix + 1, iy + 1);

  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);

  return a + (b - a) * ux + (c - a) * uy * (1 - ux) + (d - b - c + a) * ux * uy;
}

function fbm(x, y) {
  let value = 0;
  let amp = 0.5;
  let freq = 1;
  for (let i = 0; i < 4; i += 1) {
    value += smoothNoise(x * freq, y * freq) * amp;
    freq *= 2.03;
    amp *= 0.5;
  }
  return value;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  const int = parseInt(normalized, 16);
  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255,
  };
}

function mixRgb(a, b, t) {
  return {
    r: Math.round(lerp(a.r, b.r, t)),
    g: Math.round(lerp(a.g, b.g, t)),
    b: Math.round(lerp(a.b, b.b, t)),
  };
}

function getSatellitePosition(satellite, t) {
  const orbitAngle = satellite.orbit + t * satellite.speed * 0.24;
  return {
    x: state.core.x + Math.cos(orbitAngle) * satellite.distance,
    y: state.core.y + Math.sin(orbitAngle * 1.18) * satellite.distance * 0.6,
  };
}

function sampleField(x, y, depth) {
  const time = state.time;
  const preset = state.preset;
  const scale = preset.scale * (0.8 + config.turbulence * 0.45);

  const nx = x * scale;
  const ny = y * scale;

  const nA = fbm(nx + time * 0.045, ny - time * 0.022);
  const nB = fbm(nx * 1.7 - time * 0.028, ny * 1.5 + time * 0.031);
  const angle = nA * TAU * 2.4 + (nB - 0.5) * 3.6;

  let fx = Math.cos(angle);
  let fy = Math.sin(angle);

  const dx = x - state.core.x;
  const dy = y - state.core.y;
  const dist = Math.hypot(dx, dy) + 0.0001;
  const ndx = dx / dist;
  const ndy = dy / dist;
  const tangential = preset.spin * (0.65 + depth * 1.1) * config.gravityStrength;
  const radial = -0.38 * config.gravityStrength;
  const ringWave = Math.sin(dist * 0.02 - time * (1.4 + preset.ringPulse)) * 0.22;

  fx += (-ndy * tangential) + ndx * (radial + ringWave);
  fy += (ndx * tangential) + ndy * (radial + ringWave);

  for (const satellite of state.satellites) {
    const p = getSatellitePosition(satellite, time);
    const sx = p.x - x;
    const sy = p.y - y;
    const sd = Math.hypot(sx, sy) + 1;
    const pull = Math.min(2.2, (satellite.strength * 90) / (sd * 0.8));
    fx += (sx / sd) * pull;
    fy += (sy / sd) * pull;
  }

  if (pointer.active || pointer.force > 0.001) {
    const mx = pointer.x - x;
    const my = pointer.y - y;
    const md = Math.hypot(mx, my) + 1;
    const pointerPull = Math.max(0, 1 - md / 280) * (0.8 + pointer.force * 1.8);
    const direction = Math.sin(time * 1.4) > 0 ? 1 : -1;
    fx += (mx / md) * pointerPull * direction;
    fy += (my / md) * pointerPull * direction;
    fx += (-my / md) * pointerPull * 0.65;
    fy += (mx / md) * pointerPull * 0.65;
  }

  const boost = performance.now() < state.boostUntil ? 1.9 : 1;
  return {
    x: fx * boost,
    y: fy * boost,
  };
}

function drawBackground(delta) {
  const [c0, c1, c2] = state.preset.bg;
  const gradient = ctx.createRadialGradient(
    state.core.x,
    state.core.y,
    0,
    state.core.x,
    state.core.y,
    Math.max(state.width, state.height) * 0.8
  );
  gradient.addColorStop(0, `${c2}22`);
  gradient.addColorStop(0.42, `${c1}12`);
  gradient.addColorStop(1, `${c0}00`);

  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = `rgba(4, 8, 18, ${config.trailFade + delta * 0.01})`;
  ctx.fillRect(0, 0, state.width, state.height);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, state.width, state.height);

  for (const satellite of state.satellites) {
    const p = getSatellitePosition(satellite, state.time);
    const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, satellite.size * 1.3);
    halo.addColorStop(0, "rgba(255,255,255,0.055)");
    halo.addColorStop(0.3, "rgba(114,230,255,0.045)");
    halo.addColorStop(1, "rgba(114,230,255,0)");
    ctx.fillStyle = halo;
    ctx.beginPath();
    ctx.arc(p.x, p.y, satellite.size * 1.3, 0, TAU);
    ctx.fill();
  }
}

function drawCore() {
  const coreGlow = ctx.createRadialGradient(
    state.core.x,
    state.core.y,
    0,
    state.core.x,
    state.core.y,
    state.core.radius * 1.6
  );
  coreGlow.addColorStop(0, "rgba(255,255,255,0.14)");
  coreGlow.addColorStop(0.16, "rgba(114,230,255,0.11)");
  coreGlow.addColorStop(0.46, "rgba(94,140,255,0.05)");
  coreGlow.addColorStop(1, "rgba(94,140,255,0)");
  ctx.globalCompositeOperation = "screen";
  ctx.fillStyle = coreGlow;
  ctx.beginPath();
  ctx.arc(state.core.x, state.core.y, state.core.radius * 1.6, 0, TAU);
  ctx.fill();
}

function drawParticles(delta) {
  const palette = state.preset.colors.map(hexToRgb);
  ctx.globalCompositeOperation = "lighter";

  for (const particle of state.particles) {
    particle.age += delta;
    particle.px = particle.x;
    particle.py = particle.y;

    const field = sampleField(particle.x, particle.y, particle.depth);
    const depthSpeed = 0.18 + particle.depth * 1.8;
    const turbulence = 0.55 + config.turbulence * 0.8;

    particle.vx += field.x * 0.016 * depthSpeed * turbulence;
    particle.vy += field.y * 0.016 * depthSpeed * turbulence;
    particle.vx += Math.sin(state.time + particle.hueShift * TAU) * 0.0028 * state.preset.drift;
    particle.vy += Math.cos(state.time * 0.83 + particle.hueShift * TAU) * 0.0028 * state.preset.drift;

    particle.vx *= particle.drag;
    particle.vy *= particle.drag;

    particle.x += particle.vx * (2.2 + particle.depth * 3.6);
    particle.y += particle.vy * (2.2 + particle.depth * 3.6);

    const speed = Math.hypot(particle.vx, particle.vy);
    const alpha = Math.min(0.78, 0.06 + speed * 0.9 + particle.depth * 0.18);
    const blend = (Math.sin(particle.age * 0.01 + particle.hueShift * 8) + 1) * 0.5;
    const base = mixRgb(palette[0], palette[1], blend);
    const tone = mixRgb(base, palette[2], particle.depth * 0.65);

    ctx.strokeStyle = `rgba(${tone.r}, ${tone.g}, ${tone.b}, ${alpha})`;
    ctx.lineWidth = particle.size * (0.5 + speed * 0.9);
    ctx.beginPath();
    ctx.moveTo(particle.px, particle.py);
    ctx.lineTo(particle.x, particle.y);
    ctx.stroke();

    if (speed > 0.05) {
      ctx.fillStyle = `rgba(${tone.r}, ${tone.g}, ${tone.b}, ${alpha * 0.42})`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * (1 + speed * 5), 0, TAU);
      ctx.fill();
    }

    const outOfBounds =
      particle.x < -120 ||
      particle.x > state.width + 120 ||
      particle.y < -120 ||
      particle.y > state.height + 120;

    if (outOfBounds || particle.age > 900 + particle.depth * 1200) {
      respawnParticle(particle);
    }
  }
}

function animate(now) {
  const deltaMs = Math.min(32, now - state.lastTime || 16);
  state.lastTime = now;
  const delta = deltaMs / 16.666;

  pointer.x = lerp(pointer.x, pointer.tx, 0.16);
  pointer.y = lerp(pointer.y, pointer.ty, 0.16);
  pointer.force = lerp(pointer.force, pointer.active ? 1 : 0, 0.1);

  if (!state.paused) {
    state.time += deltaMs * 0.001;
    drawBackground(delta);
    drawCore();
    drawParticles(delta);
  }

  requestAnimationFrame(animate);
}

function randomizeScene() {
  state.preset = scenes[Math.floor(Math.random() * scenes.length)];
  config.turbulence = 0.7 + Math.random() * 1.4;
  config.gravityStrength = 0.7 + Math.random() * 1.2;
  config.trailFade = 0.05 + Math.random() * 0.07;

  turbulenceInput.value = config.turbulence.toFixed(2);
  gravityStrengthInput.value = config.gravityStrength.toFixed(2);
  trailFadeInput.value = config.trailFade.toFixed(3);

  rebuildSatellites();
  rebuildParticles();
}

function triggerBoost() {
  state.boostUntil = performance.now() + 1400;
}

particleDensityInput.addEventListener("input", () => {
  config.density = parseFloat(particleDensityInput.value);
  rebuildParticles();
});

turbulenceInput.addEventListener("input", () => {
  config.turbulence = parseFloat(turbulenceInput.value);
});

trailFadeInput.addEventListener("input", () => {
  config.trailFade = parseFloat(trailFadeInput.value);
});

gravityStrengthInput.addEventListener("input", () => {
  config.gravityStrength = parseFloat(gravityStrengthInput.value);
});

randomizeBtn.addEventListener("click", randomizeScene);

toggleMotionBtn.addEventListener("click", () => {
  state.paused = !state.paused;
  toggleMotionBtn.textContent = state.paused ? "恢复运动" : "暂停运动";
  if (!state.paused) {
    state.lastTime = performance.now();
  }
});

boostBtn.addEventListener("click", triggerBoost);

window.addEventListener("pointermove", (event) => {
  pointer.tx = event.clientX;
  pointer.ty = event.clientY;
  pointer.active = true;
});

window.addEventListener("pointerdown", (event) => {
  pointer.tx = event.clientX;
  pointer.ty = event.clientY;
  pointer.active = true;
  triggerBoost();
});

window.addEventListener("pointerleave", () => {
  pointer.active = false;
});

window.addEventListener("pointerup", () => {
  pointer.active = false;
});

window.addEventListener(
  "touchend",
  () => {
    pointer.active = false;
  },
  { passive: true }
);

window.addEventListener("resize", resize);

resize();
requestAnimationFrame(animate);
