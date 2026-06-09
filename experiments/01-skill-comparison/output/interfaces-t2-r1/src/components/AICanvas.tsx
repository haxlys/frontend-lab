import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

function initParticles(count: number, width: number, height: number): Particle[] {
  const colors = [
    'rgba(139,92,246,0.6)',
    'rgba(59,130,246,0.6)',
    'rgba(16,185,129,0.5)',
    'rgba(139,92,246,0.3)',
    'rgba(59,130,246,0.3)',
  ];

  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    size: Math.random() * 2.5 + 0.5,
    opacity: Math.random() * 0.6 + 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));
}

export default function AICanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  const drawConnection = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      a: Particle,
      b: Particle,
      distance: number,
    ) => {
      const maxDist = 120;
      const opacity = (1 - distance / maxDist) * 0.15;
      if (opacity <= 0) return;

      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = `rgba(139,92,246,${opacity})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    },
    [],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const rect = canvas.getBoundingClientRect();
    particlesRef.current = initParticles(80, rect.width, rect.height);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    window.addEventListener('mousemove', handleMouse);

    const animate = () => {
      if (!ctx || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      const { width, height } = rect;

      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < 150) {
          const force = (1 - distMouse / 150) * 0.3;
          p.vx -= dxMouse * force * 0.02;
          p.vy -= dyMouse * force * 0.02;
          p.opacity = Math.min(0.9, p.opacity + 0.01);
        } else {
          p.opacity = Math.max(0.1, p.opacity - 0.005);
        }

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 1.2) {
          p.vx = (p.vx / speed) * 1.2;
          p.vy = (p.vy / speed) * 1.2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace('0.6', String(p.opacity)).replace('0.5', String(p.opacity)).replace('0.3', String(p.opacity));
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            drawConnection(ctx, p, particles[j], dist);
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, [drawConnection]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-70"
    />
  );
}
