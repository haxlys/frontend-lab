import { NeuralCanvas } from './NeuralCanvas'

const trustLogos = [
  'STRIPE', 'VERCEL', 'LINEAR', 'NOTION', 'FIGMA', 'ANTHROPIC', 'OPENAI', 'FRAMER',
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* Background layer */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg mask-radial-fade opacity-[0.5]" />
        <div className="absolute inset-x-0 top-0 h-[60%] bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.18),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.14),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Eyebrow */}
        <div
          data-reveal
          className="reveal in-view mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70 backdrop-blur"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-emerald opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-neon-emerald" />
          </span>
          Introducing Neural 3.0 — frontier reasoning models
          <svg
            viewBox="0 0 24 24"
            className="h-3 w-3 text-white/50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </div>

        {/* Headline */}
        <h1
          data-reveal
          className="reveal in-view reveal-delay-1 mx-auto mt-8 max-w-5xl text-center font-display text-mega font-semibold text-balance"
        >
          The AI that <span className="text-gradient-neon">thinks ahead</span>
          <br className="hidden sm:block" /> so your team can{' '}
          <span className="relative inline-block">
            <span className="text-gradient-neon">move faster</span>
            <svg
              aria-hidden
              viewBox="0 0 300 12"
              className="absolute -bottom-2 left-0 h-3 w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M2 8 C 80 2, 220 2, 298 8"
                stroke="url(#underline-grad)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="underline-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          .
        </h1>

        {/* Subhead */}
        <p
          data-reveal
          className="reveal in-view reveal-delay-2 mx-auto mt-7 max-w-2xl text-center text-base leading-relaxed text-white/65 sm:text-lg"
        >
          Neural is a frontier AI platform that automates the work that matters —
          from research and engineering to design and ops. One surface, every
          model, no compromises.
        </p>

        {/* CTA row */}
        <div
          data-reveal
          className="reveal in-view reveal-delay-3 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a href="#cta" className="btn-primary">
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
          <a href="#showcase" className="btn-ghost">
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="6 4 20 12 6 20 6 4" />
            </svg>
            Watch the demo
          </a>
        </div>

        {/* Interactive canvas — the visual centerpiece */}
        <div
          data-reveal
          className="reveal in-view reveal-delay-4 relative mt-16 sm:mt-20"
        >
          <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.01] shadow-glass sm:h-[520px]">
            {/* Top chrome */}
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-white/[0.06] bg-black/20 px-4 py-3 backdrop-blur">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-white/50">
                <span className="h-1.5 w-1.5 rounded-full bg-neon-emerald" />
                neural.live · reasoning stream
              </div>
              <div className="font-mono text-[11px] text-white/40">
                ⌘ K
              </div>
            </div>

            {/* Canvas */}
            <div className="absolute inset-0 pt-12">
              <NeuralCanvas />

              {/* Floating HUD cards */}
              <div className="pointer-events-none absolute left-4 top-16 hidden w-56 rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur md:block animate-float-slow">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-white/50">
                  <span>Inference</span>
                  <span className="text-neon-emerald">● live</span>
                </div>
                <div className="mt-2 font-mono text-xl text-white">42 ms</div>
                <div className="mt-1 text-xs text-white/50">p50 latency</div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue" />
                </div>
              </div>

              <div className="pointer-events-none absolute right-4 top-20 hidden w-60 rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur md:block animate-float-slow [animation-delay:1.2s]">
                <div className="text-[10px] uppercase tracking-widest text-white/50">
                  Active agents
                </div>
                <div className="mt-2 space-y-1.5 font-mono text-xs text-white/80">
                  <div className="flex items-center justify-between">
                    <span>researcher</span>
                    <span className="text-neon-purple">thinking…</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>designer</span>
                    <span className="text-neon-blue">drafting</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>engineer</span>
                    <span className="text-neon-emerald">shipped</span>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-4 py-2 font-mono text-[11px] text-white/60 backdrop-blur md:flex">
                <span className="text-white/40">$</span>
                <span className="ml-2">neural.run --reasoning=deep</span>
                <span className="ml-1 inline-block h-3.5 w-1.5 animate-pulse bg-neon-purple" />
              </div>
            </div>
          </div>

          {/* Frame reflections */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-white/10 via-transparent to-transparent"
          />
        </div>

        {/* Trust row */}
        <div
          data-reveal
          className="reveal in-view reveal-delay-5 mt-20 sm:mt-28"
        >
          <p className="text-center text-xs uppercase tracking-[0.3em] text-white/40">
            Trusted by teams building the future
          </p>
          <div className="relative mt-8 overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-0 to-transparent z-10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink-0 to-transparent z-10"
            />
            <div className="flex w-max animate-marquee items-center gap-12 px-6 text-white/40">
              {[...trustLogos, ...trustLogos].map((logo, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap font-display text-lg font-semibold tracking-[0.25em]"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
