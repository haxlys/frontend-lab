export function CTASection() {
  return (
    <section id="cta" className="relative isolate px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <div
          data-reveal
          className="reveal in-view glow-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-10 text-center sm:p-16"
        >
          {/* Decorative orbs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-neon-purple/30 blur-3xl animate-pulse-glow"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-neon-blue/30 blur-3xl animate-pulse-glow"
          />
          {/* Grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid-bg mask-radial-fade opacity-40"
          />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-white/60">
              <span className="h-1 w-1 rounded-full bg-neon-emerald" />
              Free for the first 30 days
            </span>
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
              Build the future,
              <br />
              <span className="text-gradient-neon">faster than ever.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/60 sm:text-lg">
              Join 12,000+ teams shipping with Neural. No credit card. Cancel
              anytime.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#" className="btn-primary">
                Start building free
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#" className="btn-ghost">
                Talk to sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-12 text-sm text-white/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-neon-purple to-neon-blue">
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 18V6l8 12V6M14 18h6" />
            </svg>
          </span>
          <span className="font-display text-sm font-semibold text-white">
            Neural
          </span>
          <span className="ml-2 font-mono text-xs text-white/30">
            © {new Date().getFullYear()}
          </span>
        </div>
        <div className="flex items-center gap-5">
          {['Privacy', 'Terms', 'Status', 'Changelog', 'X', 'GitHub'].map((l) => (
            <a
              key={l}
              href="#"
              className="transition-colors hover:text-white"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
