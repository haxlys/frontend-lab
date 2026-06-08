import ScrollReveal from './ScrollReveal';

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)]" />
      <div className="hero-glow-orb w-[500px] h-[500px] bg-purple-500/10 top-[-100px] left-1/2 -translate-x-1/2" />

      <ScrollReveal>
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-8 md:p-14 neon-border">
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
              Ready to{' '}
              <span className="text-gradient">ship faster?</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
              Join thousands of developers building the future with Neural.
              Start with 1M free tokens — no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-glow relative px-8 py-3.5 rounded-full text-sm font-semibold text-white inline-flex items-center gap-2 z-10">
                Get Started Free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button className="px-8 py-3.5 rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:border-white/20 hover:text-white transition-all duration-300 glass-card">
                Talk to Sales
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-gray-600">
              <span>No credit card required</span>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <span>1M tokens free</span>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
