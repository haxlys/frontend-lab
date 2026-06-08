import NeuralCanvas from './NeuralCanvas';

const STAT_FIGURES = [
  { value: '99.9%', label: 'Uptime' },
  { value: '<1ms', label: 'Inference Latency' },
  { value: '10M+', label: 'Daily Predictions' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,0.06),transparent_50%)]" />

      <NeuralCanvas />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <div className="animate-fade-in mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs text-text-secondary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Now Available — Early Access
          </div>
        </div>

        <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8">
          <span className="text-white">Intelligence</span>
          <br />
          <span className="gradient-text">Beyond Human</span>
        </h1>

        <p className="animate-fade-in-up delay-300 max-w-2xl mx-auto text-lg sm:text-xl text-text-secondary leading-relaxed mb-10">
          NexusAI is the next-generation autonomous reasoning engine. It thinks, adapts, 
          and executes — pushing the boundaries of what artificial intelligence can achieve.
        </p>

        <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="group relative px-8 py-3.5 rounded-xl font-medium text-white cursor-pointer
            bg-gradient-to-r from-purple-500 to-blue-500
            shadow-[0_0_30px_rgba(139,92,246,0.3)]
            hover:shadow-[0_0_50px_rgba(139,92,246,0.5)]
            transition-all duration-500 ease-out
            before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-purple-400 before:to-blue-400 before:opacity-0 before:transition-opacity before:duration-500
            hover:before:opacity-100 hover:scale-[1.02]">
            <span className="relative z-10 flex items-center gap-2">
              Start Building Free
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>

          <button className="px-8 py-3.5 rounded-xl font-medium text-white cursor-pointer
            glass hover:bg-white/[0.06] hover:border-purple-500/20 transition-all duration-300
            flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Demo
          </button>
        </div>

        <div className="animate-fade-in-up delay-700 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {STAT_FIGURES.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-text-muted uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
