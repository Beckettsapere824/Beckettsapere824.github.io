(() => {
  const canvas = document.getElementById('pool-canvas');
  const cell = document.getElementById('about-pool');
  if (!canvas || !cell) return;

  const ctx = canvas.getContext('2d');
  let W = 600, H = 360;
  let paused = false;
  let last = performance.now();
  let t0 = performance.now();
  const ducks = [];
  const CROSS_MS = 6000;

  // Promo cycle: every 10s → hand 2s → text 2s → idle
  const CYCLE = 10000;
  const HAND_DUR = 2000;
  const TEXT_DUR = 2000;
  let tipX = 0.42;
  let tipY = 0.48;

  function resize() {
    const r = cell.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = Math.max(1, Math.floor(r.width));
    H = Math.max(1, Math.floor(r.height));
    canvas.width = Math.floor(W * dpr);
    canvas.height = Math.floor(H * dpr);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function spawnDuck(fromLeft) {
    const size = 12 + Math.random() * 14;
    const y = size * 1.6 + Math.random() * Math.max(8, H - size * 3.2);
    const baseSpeed = (W + size * 4) / (CROSS_MS / 1000);
    const speedMul = 0.75 + Math.random() * 0.55;
    const vx = (fromLeft ? 1 : -1) * baseSpeed * speedMul;
    ducks.push({
      x: fromLeft ? -size * 2.2 : W + size * 2.2,
      y,
      baseY: y,
      vx,
      phase: Math.random() * Math.PI * 2,
      phase2: Math.random() * Math.PI * 2,
      swayAmp: 3 + Math.random() * 12,
      swayFreq: 0.45 + Math.random() * 1.1,
      driftAmp: 2 + Math.random() * 6,
      driftFreq: 0.15 + Math.random() * 0.35,
      rotAmp: 0.1 + Math.random() * 0.28,
      rotFreq: 0.4 + Math.random() * 0.9,
      size,
      heading: fromLeft ? 0 : Math.PI,
      wobble: (Math.random() - 0.5) * 0.08
    });
  }

  function ensureDucks() {
    for (let i = ducks.length - 1; i >= 0; i--) {
      const d = ducks[i];
      if (d.vx > 0 && d.x > W + d.size * 3) ducks.splice(i, 1);
      else if (d.vx < 0 && d.x < -d.size * 3) ducks.splice(i, 1);
    }
    while (ducks.length < 1) spawnDuck(Math.random() < 0.85);
    if (ducks.length < 3 && Math.random() < 0.012) {
      spawnDuck(Math.random() < 0.8);
    }
  }

  function drawPool(now) {
    const g = ctx.createLinearGradient(0, 0, W * 0.35, H);
    g.addColorStop(0, '#b8e0f0');
    g.addColorStop(0.45, '#9fd4ea');
    g.addColorStop(1, '#7ec4de');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    ctx.save();
    ctx.globalAlpha = 0.12;
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    const step = 28;
    for (let x = 0; x < W + step; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x - H * 0.15, H);
      ctx.stroke();
    }
    for (let y = 0; y < H + step; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y + W * 0.04);
      ctx.stroke();
    }
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = 0.08;
    ctx.fillStyle = '#fff';
    for (let i = 0; i < 5; i++) {
      const cx = (W * (0.15 + i * 0.18) + Math.sin(now / 900 + i) * 12) % W;
      const cy = H * (0.25 + (i % 3) * 0.22);
      ctx.beginPath();
      ctx.ellipse(cx, cy, 40 + i * 8, 12 + i * 2, 0.2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    const edge = ctx.createLinearGradient(0, 0, 0, 10);
    edge.addColorStop(0, 'rgba(0,40,60,0.08)');
    edge.addColorStop(1, 'rgba(0,40,60,0)');
    ctx.fillStyle = edge;
    ctx.fillRect(0, 0, W, 12);
  }

  function drawDuck(d) {
    const s = d.size;
    const rot = d.heading + Math.sin(d.phase * d.rotFreq) * d.rotAmp + d.wobble;
    ctx.save();
    ctx.translate(d.x, d.y);
    ctx.rotate(rot);

    ctx.beginPath();
    ctx.ellipse(1, 2, s * 0.95, s * 0.55, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(20,60,80,0.12)';
    ctx.fill();

    const body = ctx.createRadialGradient(-s * 0.15, -s * 0.2, s * 0.1, 0, 0, s);
    body.addColorStop(0, '#ffe566');
    body.addColorStop(0.55, '#ffd000');
    body.addColorStop(1, '#e6b800');
    ctx.beginPath();
    ctx.ellipse(0, 0, s * 0.95, s * 0.62, 0, 0, Math.PI * 2);
    ctx.fillStyle = body;
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(-s * 0.2, -s * 0.18, s * 0.35, s * 0.18, -0.3, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.fill();

    const hx = s * 0.55;
    const head = ctx.createRadialGradient(hx - 2, -2, 1, hx, 0, s * 0.42);
    head.addColorStop(0, '#ffe87a');
    head.addColorStop(1, '#f0c400');
    ctx.beginPath();
    ctx.ellipse(hx, 0, s * 0.42, s * 0.38, 0, 0, Math.PI * 2);
    ctx.fillStyle = head;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(hx + s * 0.28, -s * 0.12);
    ctx.lineTo(hx + s * 0.72, 0);
    ctx.lineTo(hx + s * 0.28, s * 0.12);
    ctx.closePath();
    const beak = ctx.createLinearGradient(hx + s * 0.28, 0, hx + s * 0.72, 0);
    beak.addColorStop(0, '#ff9f40');
    beak.addColorStop(1, '#ff7a18');
    ctx.fillStyle = beak;
    ctx.fill();

    ctx.fillStyle = '#222';
    ctx.beginPath();
    ctx.arc(hx + s * 0.05, -s * 0.12, Math.max(1.2, s * 0.07), 0, Math.PI * 2);
    ctx.arc(hx + s * 0.05, s * 0.12, Math.max(1.2, s * 0.07), 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  /** X-promo style pointing hand (cartoon), tip at (tx, ty) */
  function drawHand(progress, tx, ty) {
    // progress 0→1 appear, stay, 1→0 would be handled by caller alpha
    const ease = progress < 0.2
      ? progress / 0.2
      : progress > 0.85
        ? (1 - progress) / 0.15
        : 1;
    const alpha = Math.max(0, Math.min(1, ease));
    if (alpha <= 0) return;

    const scale = Math.min(W, H) / 220;
    ctx.save();
    ctx.globalAlpha = alpha;
    // Hand enters from bottom-right toward tip
    const enter = progress < 0.25 ? progress / 0.25 : 1;
    const ox = tx + (1 - enter) * (W * 0.35);
    const oy = ty + (1 - enter) * (H * 0.45);
    ctx.translate(ox, oy);
    ctx.scale(scale, scale);
    // Point roughly toward upper-left of palm origin
    ctx.rotate(-0.55);

    // Shadow
    ctx.fillStyle = 'rgba(0,30,50,0.12)';
    ctx.beginPath();
    ctx.ellipse(8, 28, 42, 18, 0.2, 0, Math.PI * 2);
    ctx.fill();

    const skin = '#f5d0b0';
    const skinDark = '#e8b890';

    // Palm
    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.moveTo(-8, 10);
    ctx.quadraticCurveTo(-18, 35, 8, 48);
    ctx.quadraticCurveTo(32, 42, 28, 12);
    ctx.quadraticCurveTo(22, 0, 8, 2);
    ctx.quadraticCurveTo(-4, 2, -8, 10);
    ctx.fill();

    // Index finger (pointing)
    ctx.beginPath();
    ctx.moveTo(6, 4);
    ctx.quadraticCurveTo(4, -28, 8, -52);
    ctx.quadraticCurveTo(14, -56, 16, -48);
    ctx.quadraticCurveTo(14, -20, 18, 6);
    ctx.closePath();
    ctx.fillStyle = skin;
    ctx.fill();
    ctx.strokeStyle = skinDark;
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // Knuckle line on finger
    ctx.beginPath();
    ctx.moveTo(7, -18);
    ctx.quadraticCurveTo(11, -16, 15, -18);
    ctx.stroke();

    // Other fingers curled
    const curls = [
      [20, 8, 38, -6, 34, 14],
      [18, 16, 36, 8, 30, 22],
      [14, 24, 30, 22, 24, 30]
    ];
    curls.forEach(([x0, y0, x1, y1, x2, y2]) => {
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.quadraticCurveTo(x1, y1, x2, y2);
      ctx.quadraticCurveTo(x1 + 4, y1 + 10, x0 - 2, y0 + 8);
      ctx.closePath();
      ctx.fillStyle = skin;
      ctx.fill();
      ctx.strokeStyle = skinDark;
      ctx.stroke();
    });

    // Thumb
    ctx.beginPath();
    ctx.moveTo(-2, 14);
    ctx.quadraticCurveTo(-28, 8, -30, 22);
    ctx.quadraticCurveTo(-22, 34, 0, 28);
    ctx.closePath();
    ctx.fillStyle = skin;
    ctx.fill();
    ctx.strokeStyle = skinDark;
    ctx.stroke();

    ctx.restore();
  }

  function drawAboutScript(progress, tx, ty) {
    const ease = progress < 0.15
      ? progress / 0.15
      : progress > 0.8
        ? (1 - progress) / 0.2
        : 1;
    const alpha = Math.max(0, Math.min(1, ease));
    if (alpha <= 0) return;

    const size = Math.max(22, Math.min(W, H) * 0.11);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.font = `italic ${size}px "Palatino Linotype", Palatino, "Book Antiqua", Georgia, "Times New Roman", serif`;
    ctx.fillStyle = '#0a3a4a';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(255,255,255,0.55)';
    ctx.shadowBlur = 6;
    // Always Latin script label
    ctx.fillText('About Me', tx, ty);
    ctx.restore();
  }

  function cyclePhase(elapsed) {
    const t = elapsed % CYCLE;
    if (t < HAND_DUR) {
      return { mode: 'hand', p: t / HAND_DUR };
    }
    if (t < HAND_DUR + TEXT_DUR) {
      return { mode: 'text', p: (t - HAND_DUR) / TEXT_DUR };
    }
    return { mode: 'idle', p: 0 };
  }

  // Pick a new tip when a cycle starts
  let lastCycle = -1;
  function maybeRetarget(elapsed) {
    const c = Math.floor(elapsed / CYCLE);
    if (c !== lastCycle) {
      lastCycle = c;
      tipX = 0.28 + Math.random() * 0.44;
      tipY = 0.28 + Math.random() * 0.44;
    }
  }

  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const elapsed = now - t0;

    if (!paused) {
      ensureDucks();
      ducks.forEach((d) => {
        d.x += d.vx * dt;
        d.phase += d.swayFreq * dt * Math.PI * 2;
        d.phase2 += d.driftFreq * dt * Math.PI * 2;
        d.y = d.baseY
          + Math.sin(d.phase) * d.swayAmp
          + Math.sin(d.phase2) * d.driftAmp;
        // slight speed jitter
        d.x += Math.sin(d.phase2 * 0.7) * 4 * dt;
      });
    }

    drawPool(now);
    ducks.forEach(drawDuck);

    maybeRetarget(elapsed);
    const phase = cyclePhase(elapsed);
    const tx = tipX * W;
    const ty = tipY * H;
    if (phase.mode === 'hand') drawHand(phase.p, tx, ty);
    if (phase.mode === 'text') drawAboutScript(phase.p, tx, ty);

    requestAnimationFrame(frame);
  }

  cell.addEventListener('mouseenter', () => { paused = true; });
  cell.addEventListener('mouseleave', () => { paused = false; });
  cell.addEventListener('touchstart', () => { paused = true; }, { passive: true });
  cell.addEventListener('touchend', () => { paused = false; }, { passive: true });

  window.addEventListener('resize', resize);
  resize();
  spawnDuck(true);
  spawnDuck(true);
  requestAnimationFrame(frame);
})();
