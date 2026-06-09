import CTAButton from './CTAButton';
import ScrollReveal from './ScrollReveal';

export default function CTASection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/[0.02] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-neon-purple/5 blur-[150px] pointer-events-none" />

      <ScrollReveal>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tighter mb-6">
            Ready to experience
            <br />
            <span className="neon-text">the future?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join thousands of developers already building on Nexus. Start for free, scale when you're ready.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton size="lg">
              Start Building Free
            </CTAButton>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
              Talk to sales →
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
