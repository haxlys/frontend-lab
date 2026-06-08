import GlowButton from './GlowButton'

export default function CTASection() {
  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="scroll-reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30 font-medium mb-4">
            Get Started
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Ready to{' '}
            <span className="text-gradient">transcend</span>
            ?
          </h2>
          <p className="text-white/35 text-lg mb-12 max-w-xl mx-auto font-light">
            Join thousands of teams already building the future on NEXUS. Start free, scale infinitely.
          </p>
        </div>

        <div className="scroll-reveal" style={{ transitionDelay: '100ms' }}>
          <GlowButton variant="primary" className="px-10 py-4 text-base">
            Get Early Access
          </GlowButton>
        </div>

        <p className="scroll-reveal text-white/20 text-xs mt-6" style={{ transitionDelay: '200ms' }}>
          No credit card required · 10K requests free · Cancel anytime
        </p>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />
    </section>
  )
}
