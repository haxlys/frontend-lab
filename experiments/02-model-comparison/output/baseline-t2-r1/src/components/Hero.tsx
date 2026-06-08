import { useReveal } from '../hooks/useReveal'
import NeuralCanvas from './NeuralCanvas'
import TypingLine from './TypingLine'

export default function Hero() {
  const { ref, isVisible } = useReveal<HTMLDivElement>(0.05)

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-70 animate-grid-move" />
      <div className="absolute inset-0 bg-grid-fade" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-neon-radial blur-3xl opacity-60" />
      <div className="noise" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col items-center text-center">
          <div
            className={`reveal ${isVisible ? 'is-visible' : ''} mb-6`}
          >
            <span className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs font-medium text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse-glow" />
              <span>Now in public beta</span>
              <span className="text-white/30">·</span>
              <span className="text-gradient-neon font-semibold">
                Series B announced
              </span>
            </span>
          </div>

          <h1
            className={`reveal reveal-delay-1 ${
              isVisible ? 'is-visible' : ''
            } font-display font-medium tracking-tight text-balance leading-[0.95] text-[clamp(2.5rem,7vw,6.5rem)]`}
          >
            <span className="block text-white/95">Intelligence,</span>
            <span className="block">
              <span className="text-gradient-neon">accelerated</span>
              <span className="text-white/95"> beyond</span>
            </span>
            <span className="block text-white/95">
              the boundaries of code.
            </span>
          </h1>

          <p
            className={`reveal reveal-delay-2 ${
              isVisible ? 'is-visible' : ''
            } mt-7 max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed`}
          >
            Neura is a unified intelligence platform that turns your raw data,
            tools, and teams into autonomous workflows — built on a frontier
            model that reasons, plans, and ships alongside you.
          </p>

          <div
            className={`reveal reveal-delay-3 ${
              isVisible ? 'is-visible' : ''
            } mt-10 flex flex-col sm:flex-row items-center gap-3`}
          >
            <button className="neon-button group relative w-full sm:w-auto px-7 py-3.5 rounded-xl font-medium text-white text-sm">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start building free
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </button>
            <button className="group w-full sm:w-auto px-7 py-3.5 rounded-xl font-medium text-sm text-white/90 glass hover:bg-white/[0.08] transition-all duration-300 flex items-center justify-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-neon-purple/30 transition-colors">
                <svg
                  className="w-2.5 h-2.5 text-white ml-0.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Watch the keynote
            </button>
          </div>

          <div
            className={`reveal reveal-delay-4 ${
              isVisible ? 'is-visible' : ''
            } mt-12 w-full max-w-3xl`}
          >
            <div className="relative glass rounded-2xl overflow-hidden glow-border">
              <NeuralCanvas />
              <div className="absolute top-0 inset-x-0 p-3 flex items-center justify-between pointer-events-none">
                <TypingLine />
                <div className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] text-white/40">
                  <span>USD</span>
                  <span className="text-neon-green">▲ 12.4%</span>
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-ink-900/80 to-transparent pointer-events-none" />
            </div>
          </div>

          <div
            className={`reveal reveal-delay-5 ${
              isVisible ? 'is-visible' : ''
            } mt-16 w-full`}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-6">
              Trusted by teams shipping at the frontier
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
              {['LINEAR', 'VERCEL', 'STRIPE', 'NOTION', 'FIGMA', 'ANTHROPIC'].map(
                (logo) => (
                  <span
                    key={logo}
                    className="font-display text-sm tracking-[0.25em] text-white/50 hover:text-white transition-colors"
                  >
                    {logo}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
