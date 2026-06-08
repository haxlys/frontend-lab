import InteractiveCanvas from "./InteractiveCanvas";
import CTAButton from "./CTAButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16">
      <InteractiveCanvas />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,11,15,0.7)_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center flex flex-col items-center gap-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
          <span className="text-xs text-zinc-400 font-medium tracking-wide">Now in Public Beta</span>
        </div>

        <h1 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.03em] text-white max-w-[800px]">
          Intelligence <span className="text-glow">amplified.</span>
          <br />
          <span className="text-zinc-500 font-light">Human potential</span> unleashed.
        </h1>

        <p className="text-base sm:text-lg text-zinc-400 max-w-[560px] leading-relaxed">
          Nexus AI orchestrates autonomous agents that reason, code, and create—turning weeks of work into minutes of conversation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <CTAButton href="#features">Start building free</CTAButton>
          <CTAButton href="#platform" variant="secondary">Watch demo</CTAButton>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-deep-charcoal to-transparent pointer-events-none" />
    </section>
  );
}
