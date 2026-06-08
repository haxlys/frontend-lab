"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

type Node = { x: number; y: number; vx: number; vy: number; r: number; phase: number };

export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pointer = { x: -9999, y: -9999, active: false };
    let raf = 0;
    let nodes: Node[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.floor((rect.width * rect.height) / 14000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.6 + 0.6,
        phase: Math.random() * Math.PI * 2,
      }));
    };
    resize();

    const onResize = () => resize();
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    window.addEventListener("resize", onResize);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    const tick = (t: number) => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // background drifting gradient pulse
      const grd = ctx.createRadialGradient(
        rect.width * 0.5 + Math.sin(t * 0.00015) * 80,
        rect.height * 0.55 + Math.cos(t * 0.00012) * 50,
        20,
        rect.width * 0.5,
        rect.height * 0.55,
        Math.max(rect.width, rect.height) * 0.7,
      );
      grd.addColorStop(0, "rgba(139, 92, 246, 0.18)");
      grd.addColorStop(0.5, "rgba(59, 130, 246, 0.06)");
      grd.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, rect.width, rect.height);

      // move + draw nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > rect.width) n.vx *= -1;
        if (n.y < 0 || n.y > rect.height) n.vy *= -1;
        if (pointer.active) {
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 12000) {
            n.x -= dx * 0.0008;
            n.y -= dy * 0.0008;
          }
        }
        const pulse = 0.6 + Math.sin(t * 0.002 + n.phase) * 0.4;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(196, 181, 253, 0.9)";
        ctx.fill();
      }

      // connect nearby
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 130) {
            const alpha = (1 - d / 130) * 0.35;
            ctx.strokeStyle = `rgba(167, 139, 250, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // pointer halo
      if (pointer.active) {
        const grd2 = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 140);
        grd2.addColorStop(0, "rgba(139, 92, 246, 0.35)");
        grd2.addColorStop(0.6, "rgba(59, 130, 246, 0.12)");
        grd2.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = grd2;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, 140, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 h-full w-full"
    />
  );
}
