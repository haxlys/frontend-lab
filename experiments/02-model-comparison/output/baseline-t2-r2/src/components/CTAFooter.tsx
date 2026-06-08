export function CTAFooter() {
  return (
    <section id="start" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-5">
        <div className="reveal relative overflow-hidden rounded-3xl border border-white/10 p-10 sm:p-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-90"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139,92,246,0.35), transparent 60%), radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59,130,246,0.25), transparent 60%)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000, transparent 80%)',
            }}
          />

          <div className="relative">
            <span className="label-chip">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-emerald" />
              Free during open beta
            </span>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-ultratight sm:text-5xl text-balance">
              Build something <span className="neon-text italic">unreasonable</span> this week.
            </h2>
            <p className="mt-4 max-w-xl text-white/60">
              No credit card. 1M free tokens. Cancel anytime — you probably won't.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#start" className="btn-primary group">
                Start building
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5">
                  <path fill="currentColor" d="M8.6 3.4 7.2 4.8 10.8 8.5H2v1.5h8.8l-3.6 3.7 1.4 1.4L14 8.5 8.6 3.4Z" />
                </svg>
              </a>
              <a href="#demo" className="btn-ghost">Talk to the team</a>
            </div>
          </div>
        </div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-white/40 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="grid h-5 w-5 place-items-center rounded bg-gradient-to-br from-neon-purple/40 to-neon-blue/40 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>
            <span>© {new Date().getFullYear()} Neural Labs, Inc.</span>
          </div>
          <ul className="flex items-center gap-5">
            {['Privacy', 'Terms', 'Status', 'Changelog'].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-white">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </section>
  )
}
