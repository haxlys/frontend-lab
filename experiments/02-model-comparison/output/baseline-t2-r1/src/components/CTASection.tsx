import { useReveal } from '../hooks/useReveal'

export default function CTASection() {
  const { ref, isVisible } = useReveal<HTMLDivElement>(0.1)
  return (
    <section
      ref={ref}
      className="relative py-32 sm:py-40 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-neon-radial opacity-50" />
        <div className="absolute inset-0 grid-bg opacity-50" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-balance leading-[1.02]">
            Build the future.{' '}
            <span className="text-gradient-neon">Ship it today.</span>
          </h2>
        </div>
        <p
          className={`reveal reveal-delay-1 ${
            isVisible ? 'is-visible' : ''
          } mt-6 text-lg text-white/55 max-w-xl mx-auto`}
        >
          Join 18,000+ teams already using Neura to compress weeks of work into
          hours. Free to start — no credit card.
        </p>
        <div
          className={`reveal reveal-delay-2 ${
            isVisible ? 'is-visible' : ''
          } mt-10 flex flex-col sm:flex-row items-center justify-center gap-3`}
        >
          <button className="neon-button relative w-full sm:w-auto px-8 py-4 rounded-xl font-medium text-white">
            <span className="relative z-10">Get early access</span>
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium text-white/80 glass hover:bg-white/[0.08] transition-all">
            Talk to sales
          </button>
        </div>
      </div>
    </section>
  )
}
