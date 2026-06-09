import ParticleCanvas from "./ParticleCanvas";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div
        className="orb -top-32 left-[10%] h-[500px] w-[500px]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="orb -bottom-32 right-[10%] h-[500px] w-[500px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="orb top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Particle canvas */}
      <div className="absolute inset-0 z-0">
        <ParticleCanvas />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Status badge */}
        <div className="animate-reveal visible mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-glass-bg px-4 py-1.5 text-sm backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-emerald-green animate-[pulse-glow_2s_infinite]" />
          <span className="text-text-secondary">
            Now in Public Beta ·{" "}
            <span className="text-white">v2.0</span>
          </span>
        </div>

        {/* Main heading */}
        <h1 className="animate-reveal visible delay-200 mb-6 font-[family-name:var(--font-display)] text-6xl leading-[1.08] font-black tracking-[-0.04em] sm:text-7xl lg:text-8xl">
          <span className="text-white">Think </span>
          <span className="text-glow-purple">Smarter.</span>
          <br />
          <span className="text-white">Move </span>
          <span className="text-glow-blue">Faster.</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-reveal visible delay-300 mx-auto mb-10 max-w-xl text-lg leading-relaxed text-text-secondary sm:text-xl">
          NexaMind is the autonomous AI layer that anticipates your next move
          — before you do.
        </p>

        {/* CTA buttons */}
        <div className="animate-reveal visible delay-400 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            }
          >
            Start Building Free
          </CTAButton>
          <CTAButton variant="secondary">
            Watch Demo
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </CTAButton>
        </div>

        {/* Trusted by / social proof strip */}
        <div className="animate-reveal visible delay-500 mt-20">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-text-muted">
            Trusted by engineers at
          </p>
          <div className="flex items-center justify-center gap-10 opacity-40 grayscale">
            {["Acme Inc", "Stellar", "QuantumLabs", "Orbit", "Synthwave"].map(
              (name) => (
                <span
                  key={name}
                  className="text-sm font-semibold tracking-wide text-white"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-deep-black to-transparent pointer-events-none" />
    </section>
  );
}
