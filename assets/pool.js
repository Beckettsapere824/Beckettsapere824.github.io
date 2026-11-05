(() => {
  const canvas = document.getElementById('pool-canvas');
  const cell = document.getElementById('about-pool');
  if (!canvas || !cell) return;

  const ctx = canvas.getContext('2d');
  let W = 600, H = 360;
  let paused = false;
  let last = performance.now();
  const ducks = [];
  const CROSS_MS = 6000;

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
    const size = 14 + Math.random() * 10;
    const y = size * 1.5 + Math.random() * Math.max(8, H - size * 3);
    const vx = (W + size * 4) / (CROSS_MS / 1000);
    ducks.push({
      x: fromLeft ? -size * 2 : W + size * 2,
      y,
      baseY: y,
      vx: fromLeft ? vx : -vx,
      phase: Math.random() * Math.PI * 2,
      swayAmp: 4 + Math.random() * 8,
      swayFreq: 0.6 + Math.random() * 0.8,
      rotAmp: 0.12 + Math.random() * 0.18,
      size,
      heading: fromLeft ? 0 : Math.PI
    });
  }

  function ensureDucks() {
    ducks.forEach((d, i) => {
      if (d.vx > 0 && d.x > W + d.size * 3) ducks.splice(i, 1);
      else if (d.vx < 0 && d.x < -d.size * 3) ducks.splice(i, 1);
    });
    while (ducks.length < 1) spawnDuck(true);
    if (ducks.length < 3 && Math.random() < 0.008) {
      spawnDuck(Math.random() < 0.85);
    }
  }

  function drawPool() {
    const g = ctx.createLinearGradient(0, 0, W * 0.3, H);
    g.addColorStop(0, '#b8e0f0');
    g.addColorStop(0.45, '#9fd4ea');
    g.addColorStop(1, '#7ec4de');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    // soft depth / tile suggestion
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

    // light caustic-ish soft ellipses
    ctx.save();
    ctx.globalAlpha = 0.08;
    ctx.fillStyle = '#fff';
    for (let i = 0; i < 5; i++) {
      const cx = (W * (0.15 + i * 0.18) + Math.sin(last / 900 + i) * 12) % W;
      const cy = H * (0.25 + (i % 3) * 0.22);
      ctx.beginPath();
      ctx.ellipse(cx, cy, 40 + i * 8, 12 + i * 2, 0.2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // rim shadow
    const edge = ctx.createLinearGradient(0, 0, 0, 10);
    edge.addColorStop(0, 'rgba(0,40,60,0.08)');
    edge.addColorStop(1, 'rgba(0,40,60,0)');
    ctx.fillStyle = edge;
    ctx.fillRect(0, 0, W, 12);
  }

  /** Top-down rubber duck */
  function drawDuck(d) {
    const s = d.size;
    const rot = d.heading + Math.sin(d.phase) * d.rotAmp;
    ctx.save();
    ctx.translate(d.x, d.y);
    ctx.rotate(rot);

    // soft shadow on water
    ctx.beginPath();
    ctx.ellipse(1, 2, s * 0.95, s * 0.55, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(20,60,80,0.12)';
    ctx.fill();

    // body gradient (top view)
    const body = ctx.createRadialGradient(-s * 0.15, -s * 0.2, s * 0.1, 0, 0, s);
    body.addColorStop(0, '#ffe566');
    body.addColorStop(0.55, '#ffd000');
    body.addColorStop(1, '#e6b800');
    ctx.beginPath();
    ctx.ellipse(0, 0, s * 0.95, s * 0.62, 0, 0, Math.PI * 2);
    ctx.fillStyle = body;
    ctx.fill();

    // highlight
    ctx.beginPath();
    ctx.ellipse(-s * 0.2, -s * 0.18, s * 0.35, s * 0.18, -0.3, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.fill();

    // head (slightly forward)
    const hx = s * 0.55;
    const head = ctx.createRadialGradient(hx - 2, -2, 1, hx, 0, s * 0.42);
    head.addColorStop(0, '#ffe87a');
    head.addColorStop(1, '#f0c400');
    ctx.beginPath();
    ctx.ellipse(hx, 0, s * 0.42, s * 0.38, 0, 0, Math.PI * 2);
    ctx.fillStyle = head;
    ctx.fill();

    // beak (top view triangle-ish)
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

    // eyes from above
    ctx.fillStyle = '#222';
    ctx.beginPath();
    ctx.arc(hx + s * 0.05, -s * 0.12, Math.max(1.2, s * 0.07), 0, Math.PI * 2);
    ctx.arc(hx + s * 0.05, s * 0.12, Math.max(1.2, s * 0.07), 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;

    if (!paused) {
      ensureDucks();
      ducks.forEach((d) => {
        d.x += d.vx * dt;
        d.phase += d.swayFreq * dt * Math.PI * 2;
        d.y = d.baseY + Math.sin(d.phase) * d.swayAmp;
      });
    }

    drawPool();
    ducks.forEach(drawDuck);
    requestAnimationFrame(frame);
  }

  cell.addEventListener('mouseenter', () => { paused = true; });
  cell.addEventListener('mouseleave', () => { paused = false; });
  // touch: brief pause
  cell.addEventListener('touchstart', () => { paused = true; }, { passive: true });
  cell.addEventListener('touchend', () => { paused = false; }, { passive: true });

  window.addEventListener('resize', () => {
    resize();
  });

  resize();
  spawnDuck(true);
  spawnDuck(true);
  requestAnimationFrame(frame);
})();
