import { useEffect, useRef } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  baseR: number;
  hue: number;
  phase: number;
}

const NODE_COUNT = 90;
  const LINK_DIST = 140;
  const MOUSE_RADIUS = 180;
  const MOUSE_FORCE = 0.05;

export function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouse = useMousePosition();
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    mouseRef.current.x = mouse.x;
    mouseRef.current.y = mouse.y;
  }, [mouse]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    const nodes: Node[] = [];

    const resize = () => {
      const rect = container.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        const baseR = 0.6 + Math.random() * 1.6;
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: baseR,
          baseR,
          hue: 250 + Math.random() * 60, // violet → blue
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    resize();
    seed();

    const onResize = () => {
      resize();
      seed();
    };
    window.addEventListener('resize', onResize);

    const onTouch = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    container.addEventListener('pointermove', onTouch);

    let start = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - start) / 16.67, 2);
      start = now;

      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Step + mouse force
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.phase += 0.01 * dt;
        n.x += n.vx * dt;
        n.y += n.vy * dt;

        // gentle mouse repulsion
        const dx = n.x - mx;
        const dy = n.y - my;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < MOUSE_RADIUS * MOUSE_RADIUS && dist2 > 0.01) {
          const dist = Math.sqrt(dist2);
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;
          n.vx += (dx / dist) * force;
          n.vy += (dy / dist) * force;
        }

        // damping
        n.vx *= 0.985;
        n.vy *= 0.985;

        // wrap
        if (n.x < -10) n.x = w + 10;
        if (n.x > w + 10) n.x = -10;
        if (n.y < -10) n.y = h + 10;
        if (n.y > h + 10) n.y = -10;

        n.r = n.baseR + Math.sin(n.phase) * 0.4;
      }

      // Links
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const d = Math.sqrt(d2);
            const t = 1 - d / LINK_DIST;
            const alpha = t * 0.35;
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, `hsla(${a.hue}, 90%, 70%, ${alpha})`);
            grad.addColorStop(1, `hsla(${b.hue}, 90%, 70%, ${alpha})`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = t * 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Mouse halo
      const haloGrad = ctx.createRadialGradient(mx, my, 0, mx, my, MOUSE_RADIUS);
      haloGrad.addColorStop(0, 'rgba(139, 92, 246, 0.18)');
      haloGrad.addColorStop(0.4, 'rgba(59, 130, 246, 0.08)');
      haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(mx, my, MOUSE_RADIUS, 0, Math.PI * 2);
      ctx.fill();

      // Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4);
        g.addColorStop(0, `hsla(${n.hue}, 95%, 75%, 0.95)`);
        g.addColorStop(1, `hsla(${n.hue}, 95%, 75%, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${n.hue}, 95%, 85%, 0.9)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      container.removeEventListener('pointermove', onTouch);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/0 to-ink-950" />
    </div>
  );
}
