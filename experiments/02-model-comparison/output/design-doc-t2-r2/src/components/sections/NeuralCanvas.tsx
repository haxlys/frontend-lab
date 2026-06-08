import { useEffect, useRef } from "react";
import { useMousePosition } from "../../hooks/useMousePosition.ts";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  size: number;
  hue: number;
};

export function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useMousePosition();
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    mouseRef.current = mouse;
  }, [mouse]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const countFor = (w: number, h: number) => {
      const area = w * h;
      return Math.max(40, Math.min(140, Math.floor(area / 14000)));
    };

    const init = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = countFor(width, height);
      particles = new Array(count).fill(0).map(() => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const hue = 240 + Math.random() * 90; // purple->blue->green
        return {
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          size: Math.random() * 1.6 + 0.6,
          hue,
        };
      });
    };

    const onResize = () => init();
    window.addEventListener("resize", onResize);
    init();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const m = mouseRef.current;
      const mx = m.x;
      const my = m.y;
      const rect = canvas.getBoundingClientRect();
      const localX = mx - rect.left;
      const localY = my - rect.top;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse repulsion
        if (mx > 0 && my > 0) {
          const dx = p.x - localX;
          const dy = p.y - localY;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < 16000) {
            const dist = Math.sqrt(dist2) || 1;
            const force = (1 - dist / 130) * 0.6;
            p.vx += (dx / dist) * force * 0.5;
            p.vy += (dy / dist) * force * 0.5;
          }
        }

        // Spring back
        p.vx += (p.baseX - p.x) * 0.0025;
        p.vy += (p.baseY - p.y) * 0.0025;

        // Damping
        p.vx *= 0.94;
        p.vy *= 0.94;

        p.x += p.vx;
        p.y += p.vy;

        // Draw node
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        grad.addColorStop(0, `hsla(${p.hue}, 90%, 70%, 0.95)`);
        grad.addColorStop(1, `hsla(${p.hue}, 90%, 70%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${p.hue}, 90%, 80%, 0.9)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 11000) {
            const alpha = (1 - d2 / 11000) * 0.35;
            ctx.strokeStyle = `hsla(${(p.hue + q.hue) / 2}, 85%, 70%, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="relative h-full w-full">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* Glow orbs to enhance depth */}
      <div className="pointer-events-none absolute -left-12 top-6 h-40 w-40 rounded-full bg-neon-purple/30 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -right-8 bottom-4 h-44 w-44 rounded-full bg-neon-blue/30 blur-3xl animate-blob [animation-delay:-4s]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-28 w-28 -translate-x-1/2 rounded-full bg-neon-emerald/20 blur-3xl animate-blob [animation-delay:-8s]" />
    </div>
  );
}
