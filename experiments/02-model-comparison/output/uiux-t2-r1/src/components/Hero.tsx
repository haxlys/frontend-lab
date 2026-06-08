import { NeuralCanvas } from './NeuralCanvas';

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden pt-28 sm:pt-32"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" aria-hidden="true" />

      {/* Aurora glow top */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-aurora"
        aria-hidden="true"
      />

      {/* Mouse-following gradient overlay (CSS variable driven) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 transition-opacity duration-700"
        style={{
          background:
            'radial-gradient(600px circle at var(--mx, 50%) var(--my, 30%), rgba(139,92,246,0.18), transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Interactive neural canvas */}
      <div className="absolute inset-0 -z-10">
        <NeuralCanvas />
      </div>

      {/* Decorative orbital rings */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 rounded-full border border-white/20 animate-orbit-slow" />
        <div className="absolute inset-12 rounded-full border border-white/15 animate-orbit-medium" />
        <div className="absolute inset-24 rounded-full border border-white/10" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 pb-20 text-center sm:px-8">
        {/* Eyebrow chip */}
        <div
          className="group relative inline-flex animate-fade-up items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur"
          style={{ animationDelay: '0ms' }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span>Now in public beta · v2.4 — Real-time reasoning engine</span>
          <svg
            viewBox="0 0 24 24"
            className="h-3 w-3 text-white/50 transition-transform duration-300 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>

        {/* Massive headline */}
        <h1
          className="mt-6 max-w-5xl text-balance font-display text-[44px] font-medium leading-[0.95] tracking-ultra text-white sm:text-7xl md:text-[88px] lg:text-[112px]"
          style={{ animation: 'fade-up 0.9s 80ms cubic-bezier(0.16,1,0.3,1) both' }}
        >
          The AI that{' '}
          <span className="relative inline-block">
            <span className="text-gradient-neon">thinks</span>
            <span
              className="pointer-events-none absolute -inset-x-2 -inset-y-2 -z-10 rounded-2xl bg-neon-violet/15 blur-2xl"
              aria-hidden="true"
            />
          </span>{' '}
          at the
          <br className="hidden sm:block" /> speed of{' '}
          <span className="shimmer-text">light.</span>
        </h1>

        {/* Sub copy */}
        <p
          className="mt-6 max-w-2xl text-pretty text-base text-white/60 sm:text-lg"
          style={{ animation: 'fade-up 0.9s 180ms cubic-bezier(0.16,1,0.3,1) both' }}
        >
          Aurora is a reasoning engine that plans, builds, and ships alongside you.
          From raw data to deployed product — in seconds, not sprints.
        </p>

        {/* CTAs */}
        <div
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          style={{ animation: 'fade-up 0.9s 280ms cubic-bezier(0.16,1,0.3,1) both' }}
        >
          <a
            href="#cta"
            className="btn-neon group relative inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start building free
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </a>
          <a
            href="#demo"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3.5 text-sm font-medium text-white/80 transition-colors duration-300 hover:bg-white/[0.05] hover:text-white"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-neon-violet/30">
              <svg viewBox="0 0 24 24" className="h-3 w-3 translate-x-[1px]" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Watch the 90s demo
          </a>
        </div>

        {/* Trust line */}
        <div
          className="mt-12 flex flex-col items-center gap-4"
          style={{ animation: 'fade-in 1.2s 500ms ease-out both' }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/30">
            Trusted by builders at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-70">
            {['VERCEL', 'LINEAR', 'STRIPE', 'ANTHROPIC', 'NOTION', 'FIGMA'].map((logo) => (
              <span
                key={logo}
                className="font-display text-sm font-semibold tracking-[0.2em] text-white/55"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
    </section>
  );
}
