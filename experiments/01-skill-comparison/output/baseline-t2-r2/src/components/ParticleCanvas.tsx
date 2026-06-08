import { useRef, useEffect } from 'react';

function Particle({ angle, radius, speed, size, opacity, color }: {
  angle: number;
  radius: number;
  speed: number;
  size: number;
  opacity: number;
  color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const state = useRef({ angle, radius, speed });

  useEffect(() => {
    let frame: number;
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      state.current.angle += state.current.speed * 0.002;
      const x = Math.cos(state.current.angle) * state.current.radius;
      const y = Math.sin(state.current.angle) * state.current.radius;
      el.style.transform = `translate(${x}px, ${y}px)`;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        background: color,
        opacity,
        filter: `blur(${size * 0.8}px)`,
        left: '50%',
        top: '50%',
      }}
    />
  );
}

export default function ParticleCanvas() {
  const particles = [
    { angle: 0, radius: 180, speed: 0.3, size: 4, opacity: 0.6, color: '#8B5CF6' },
    { angle: 1.2, radius: 200, speed: -0.25, size: 3, opacity: 0.5, color: '#3B82F6' },
    { angle: 2.4, radius: 160, speed: 0.35, size: 5, opacity: 0.4, color: '#10B981' },
    { angle: 3.6, radius: 220, speed: -0.2, size: 3, opacity: 0.5, color: '#8B5CF6' },
    { angle: 4.8, radius: 190, speed: 0.28, size: 6, opacity: 0.35, color: '#3B82F6' },
    { angle: 5.5, radius: 240, speed: -0.32, size: 4, opacity: 0.45, color: '#10B981' },
    { angle: 2.0, radius: 170, speed: 0.22, size: 3, opacity: 0.55, color: '#A78BFA' },
    { angle: 4.0, radius: 210, speed: -0.27, size: 5, opacity: 0.4, color: '#60A5FA' },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-[500px] h-[500px] flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl animate-pulse-glow" />

        {particles.map((p, i) => (
          <Particle key={i} {...p} />
        ))}

        <svg
          className="absolute inset-0 w-full h-full animate-rotate-slow opacity-20"
          viewBox="0 0 500 500"
        >
          <circle
            cx="250" cy="250" r="140"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="0.5"
            strokeDasharray="20 200"
          />
          <circle
            cx="250" cy="250" r="180"
            fill="none"
            stroke="url(#grad2)"
            strokeWidth="0.5"
            strokeDasharray="40 180"
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute w-20 h-20 rounded-full border border-purple-500/20 animate-pulse-glow" />
        <div className="absolute w-40 h-40 rounded-full border border-blue-500/10 animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
      </div>
    </div>
  );
}
