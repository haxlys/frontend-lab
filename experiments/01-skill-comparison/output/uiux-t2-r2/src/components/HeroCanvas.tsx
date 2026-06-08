import { useEffect, useRef } from "react";

const ORB_COUNT = 5;

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const orbs: Orb[] = Array.from({ length: ORB_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: 100 + Math.random() * 180,
      hue: Math.random() < 0.5 ? 260 : Math.random() < 0.5 ? 220 : 160,
    }));

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      for (const orb of orbs) {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -200) orb.x = w + 200;
        if (orb.x > w + 200) orb.x = -200;
        if (orb.y < -200) orb.y = h + 200;
        if (orb.y > h + 200) orb.y = -200;

        const mx = mouseX;
        const my = mouseY;
        const distToMouse = Math.hypot(orb.x - mx, orb.y - my);
        const influence = Math.max(0, 1 - distToMouse / 400);
        const targetX = orb.x + (mx - orb.x) * influence * 0.02;
        const targetY = orb.y + (my - orb.y) * influence * 0.02;

        const gradient = ctx.createRadialGradient(
          targetX,
          targetY,
          0,
          targetX,
          targetY,
          orb.radius
        );
        const alpha = 0.04 + influence * 0.06;
        gradient.addColorStop(0, `hsla(${orb.hue}, 80%, 60%, ${alpha})`);
        gradient.addColorStop(0.5, `hsla(${orb.hue}, 70%, 55%, ${alpha * 0.5})`);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(targetX, targetY, orb.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
}
