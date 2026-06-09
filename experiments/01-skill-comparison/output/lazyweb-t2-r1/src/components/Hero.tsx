import { useRef } from 'react';
import CTAButton from './CTAButton';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-32 overflow-hidden"
    >
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-neon-purple/10 blur-[120px] animate-drift pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-electric-blue/8 blur-[120px] animate-drift pointer-events-none" style={{ animationDelay: '-10s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-emerald/6 blur-[100px] animate-drift pointer-events-none" style={{ animationDelay: '-5s' }} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-in mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm text-xs font-medium text-gray-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald" />
            </span>
            Now in Public Beta — v2.0
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl leading-none tracking-tighter text-white mb-6 animate-fade-in">
          Think at the
          <br />
          <span className="neon-text">Speed of Light</span>
        </h1>

        <p className="max-w-xl text-lg sm:text-xl text-gray-400 font-light leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Nexus harnesses next-generation AI to process, reason, and create in milliseconds.
          Built for the era where latency is the only enemy.
        </p>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <CTAButton size="lg">
            Start Building Free
          </CTAButton>
          <a
            href="#features"
            className="px-7 py-4 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
          >
            Watch demo
            <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors duration-300">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 sm:gap-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {[
            { value: '99.9%', label: 'Uptime' },
            { value: '<10ms', label: 'Inference Latency' },
            { value: '500K+', label: 'Developers' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-gray-500 mt-1 tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid overlay at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
    </section>
  );
}
