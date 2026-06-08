import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroCanvas />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="animate-fade-in mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-glass-border bg-glass-bg backdrop-blur-md text-sm text-gray-300">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            Now in Public Beta
          </span>
        </div>

        <h1 className="animate-fade-in-up text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6 text-white reveal-delay-1">
          Build the future
          <br />
          with{" "}
          <span className="animated-gradient-text neon-glow-purple">
            Intelligence
          </span>
        </h1>

        <p className="animate-fade-in-up reveal-delay-2 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed mb-10">
          NexusAI empowers teams to deploy autonomous AI agents that think,
          reason, and act — transforming how products are built, deployed,
          and scaled across the globe.
        </p>

        <div className="animate-fade-in-up reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group relative px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-neon-purple to-electric-blue shadow-xl shadow-neon-purple/30 hover:shadow-neon-purple/60 transition-all duration-500 hover:scale-105 active:scale-95">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple to-electric-blue opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            <span className="relative flex items-center gap-2">
              Start Building Free
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </span>
          </button>

          <button className="px-8 py-4 text-base font-semibold text-gray-300 rounded-full border border-glass-border hover:border-neon-purple/40 hover:text-white transition-all duration-300 glass">
            Watch Demo
          </button>
        </div>

        <div className="animate-fade-in-up reveal-delay-5 mt-16 flex items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex -space-x-3">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-pure-black bg-gradient-to-br from-neon-purple/60 to-electric-blue/60"
                style={{ transform: `translateX(${-i * 4}px)` }}
              />
            ))}
          </div>
          <span>Trusted by 10,000+ developers worldwide</span>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pure-black to-transparent pointer-events-none" />
    </section>
  );
}
