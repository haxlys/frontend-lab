const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-glow via-transparent to-transparent" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

    <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 pb-16 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-card text-xs font-medium text-accent-light mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        Now in public beta
      </div>

      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
        Build AI agents
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-white">
          with natural language
        </span>
      </h1>

      <p className="max-w-2xl mx-auto text-lg sm:text-xl text-text-secondary leading-relaxed mb-10">
        ADE is the first agent development editor that lets you design, test,
        and deploy autonomous AI agents using plain English. No YAML, no JSON
        configs, no boilerplate.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#pricing"
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-accent text-white font-semibold text-base hover:bg-accent/90 transition-all shadow-lg shadow-accent/25"
        >
          Start building free
        </a>
        <a
          href="#how-it-works"
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-border text-text-primary font-semibold text-base hover:bg-surface-card transition-all"
        >
          See how it works
        </a>
      </div>

      <div className="mt-20 pt-12 border-t border-border/50">
        <p className="text-xs text-text-muted uppercase tracking-widest font-semibold mb-6">
          Trusted by engineering teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-text-muted/60">
          <span className="text-xl font-bold opacity-50">Acme AI</span>
          <span className="text-xl font-bold opacity-50">Synthwave</span>
          <span className="text-xl font-bold opacity-50">Cortex Labs</span>
          <span className="text-xl font-bold opacity-50">NexusCorp</span>
          <span className="text-xl font-bold opacity-50">Datum</span>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
