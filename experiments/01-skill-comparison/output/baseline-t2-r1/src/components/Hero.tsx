import { useEffect, useRef } from 'react';
import HeroCanvas from './HeroCanvas';
import CTAButton from './CTAButton';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroCanvas />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
        <div
          className="w-full h-full rounded-full animate-spin-slow"
          style={{
            background:
              'conic-gradient(from 0deg, transparent, rgba(139,92,246,0.08), transparent, rgba(59,130,246,0.08), transparent)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-neon-purple animate-pulse-glow shadow-[0_0_20px_#8B5CF6,0_0_60px_#8B5CF6]" />
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse-glow shadow-[0_0_15px_#3B82F6,0_0_40px_#3B82F6]" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-emerald animate-pulse-glow shadow-[0_0_10px_#10B981,0_0_30px_#10B981]" style={{ animationDelay: '0.8s' }} />

      <div ref={containerRef} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/5 text-xs font-medium text-gray-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald" />
          </span>
          Now in Public Beta — v2.0
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold leading-[1.05] tracking-tight text-white mb-6">
          The Future of{' '}
          <span className="text-gradient">Intelligence</span>
          <br />
          is Here
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          NexusAI combines neural architecture with real-time reasoning to deliver
          <br className="hidden sm:block" />
          answers, automate workflows, and unlock human potential — at the speed of thought.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton variant="primary">Start Building Free</CTAButton>
          <CTAButton variant="outline">Explore the Docs</CTAButton>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8">
          {[
            { value: '10M+', label: 'Requests/day' },
            { value: '99.97%', label: 'Uptime SLA' },
            { value: '150ms', label: 'Avg Latency' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
