import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: number;
};

const HUES = [266, 217, 158]; // purple, blue, emerald

/**
 * Interactive neural-style canvas: floating nodes that connect with
 * gradient lines when the pointer approaches. No external libs.
 */
export function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const raf = useRef<number | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth: w, clientHeight: h } = canvas;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { w, h, dpr };

      const count = Math.min(70, Math.max(28, Math.floor((w * h) / 22000)));
      const next: Node[] = [];
      for (let i = 0; i < count; i++) {
        next.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.6 + 0.6,
          hue: HUES[i % HUES.length] ?? 266,
        });
      }
      nodesRef.current = next;
    };

    setup();
    window.addEventListener("resize", setup);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.current.x = e.clientX - rect.left;
      pointer.current.y = e.clientY - rect.top;
      pointer.current.active = true;
    };
    const onLeave = () => {
      pointer.current.active = false;
    };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    const tick = () => {
      const { w, h } = sizeRef.current;
      ctx.clearRect(0, 0, w, h);

      // soft radial background glow
      const grd = ctx.createRadialGradient(
        w * 0.5,
        h * 0.55,
        0,
        w * 0.5,
        h * 0.55,
        Math.max(w, h) * 0.6,
      );
      grd.addColorStop(0, "rgba(139,92,246,0.10)");
      grd.addColorStop(0.5, "rgba(59,130,246,0.04)");
      grd.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      const nodes = nodesRef.current;
      const p = pointer.current;
      const pointerR = 160;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]!;
        if (!reduce) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
        // pointer repulsion/attraction (subtle)
        if (p.active) {
          const dx = p.x - n.x;
          const dy = p.y - n.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < pointerR * pointerR) {
            const d = Math.sqrt(d2) || 1;
            const force = (1 - d / pointerR) * 0.04;
            n.vx -= (dx / d) * force;
            n.vy -= (dy / d) * force;
          }
        }
        n.vx = Math.max(-0.5, Math.min(0.5, n.vx));
        n.vy = Math.max(-0.5, Math.min(0.5, n.vy));
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]!;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const max = 130 * 130;
          if (d2 < max) {
            const d = Math.sqrt(d2);
            const alpha = (1 - d / 130) * 0.35;
            const stroke = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            stroke.addColorStop(0, `hsla(${a.hue}, 90%, 65%, ${alpha})`);
            stroke.addColorStop(1, `hsla(${b.hue}, 90%, 65%, ${alpha})`);
            ctx.strokeStyle = stroke;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw pointer line
      if (p.active) {
        for (const n of nodes) {
          const dx = p.x - n.x;
          const dy = p.y - n.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < pointerR) {
            const alpha = (1 - d / pointerR) * 0.7;
            ctx.strokeStyle = `rgba(139,92,246,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.fillStyle = `hsla(${n.hue}, 95%, 70%, 0.95)`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `hsla(${n.hue}, 95%, 65%, 0.7)`;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      // Pointer halo
      if (p.active) {
        const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 60);
        halo.addColorStop(0, "rgba(139,92,246,0.45)");
        halo.addColorStop(0.4, "rgba(59,130,246,0.15)");
        halo.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 60, 0, Math.PI * 2);
        ctx.fill();
      }

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", setup);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
