import ParticleCanvas from './ParticleCanvas';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08)_0%,transparent_70%)]" />
      <div className="hero-glow-orb w-[600px] h-[600px] bg-purple-500/10 top-[-200px] left-[-100px]" />
      <div className="hero-glow-orb w-[400px] h-[400px] bg-blue-500/8 bottom-[-100px] right-[-50px]" />
      <div className="hero-glow-orb w-[300px] h-[300px] bg-emerald-500/6 top-[40%] right-[30%] animate-pulse-glow" />

      <ParticleCanvas />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="fade-up visible mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-sm text-purple-300 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse-glow" />
            Introducing Neural AI Platform
          </div>
        </div>

        <h1 className="fade-up delay-1 visible font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6">
          <span className="block">Intelligence</span>
          <span className="block text-gradient">Reimagined</span>
        </h1>

        <p className="fade-up delay-2 visible max-w-2xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed mb-10">
          The next generation of autonomous AI agents. Built for speed, designed for scale.
          Experience intelligence that thinks, adapts, and creates — in real time.
        </p>

        <div className="fade-up delay-3 visible flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn-glow relative px-8 py-3.5 rounded-full text-sm font-semibold text-white inline-flex items-center gap-2 z-10">
            Start Building Free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button className="relative px-8 py-3.5 rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:border-white/20 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-white/5 glass-card">
            Watch Demo
          </button>
        </div>

        <div className="fade-up delay-4 visible mt-16 flex items-center justify-center gap-8 text-xs text-gray-500">
          {['10x Faster Inference', '99.9% Uptime', 'SOC 2 Compliant'].map((stat) => (
            <div key={stat} className="flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-400">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {stat}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-600">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
