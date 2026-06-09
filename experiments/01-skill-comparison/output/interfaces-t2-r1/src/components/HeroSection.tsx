import AICanvas from './AICanvas';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <AICanvas />

      <div className="absolute inset-0 bg-orbit" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-purple/20 bg-neon-purple/5 px-4 py-1.5 text-sm font-medium text-neon-purple">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-purple opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-purple" />
          </span>
          Now in Public Beta
        </div>

        <h1 className="font-display text-5xl font-bold leading-[1.08] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block text-text-primary">
            Build the future
          </span>
          <span className="text-gradient">
            with AI that thinks
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
          Neural is the next-generation AI platform that understands context,
          reasons deeply, and automates complex workflows — so you can focus on
          what matters.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button className="group relative overflow-hidden rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-black transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:scale-[1.02] active:scale-[0.98]">
            <span className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-emerald opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40" />
            <span className="relative z-10">Start building free</span>
            <span className="relative z-10 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <button className="group flex items-center gap-2 rounded-xl border border-white/10 px-8 py-3.5 text-base font-medium text-text-secondary transition-all duration-300 hover:border-neon-purple/40 hover:text-text-primary">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-neon-purple/50 transition-all duration-300 group-hover:border-neon-purple group-hover:bg-neon-purple/10">
              <span className="h-2 w-2 translate-x-[0.5px] border-r-2 border-t-2 border-neon-purple rotate-45 transition-colors duration-300 group-hover:border-white" />
            </span>
            Watch demo
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 sm:gap-16">
          {[
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '<100ms', label: 'Response time' },
            { value: '10M+', label: 'API calls / day' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-display text-2xl font-bold text-text-primary sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
