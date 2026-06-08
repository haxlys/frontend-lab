import InteractiveCanvas from './InteractiveCanvas'
import GlowButton from './GlowButton'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <InteractiveCanvas />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <div className="scroll-reveal mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs text-white/60 font-medium tracking-wide">
            Now available — Early Access
          </span>
        </div>

        <h1 className="scroll-reveal font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8 text-white max-w-4xl mx-auto">
          Intelligence
          <br />
          <span className="text-gradient">beyond limits</span>
          <span className="text-white/40">.</span>
        </h1>

        <p className="scroll-reveal text-lg sm:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto mb-12 font-light"
           style={{ transitionDelay: '100ms' }}>
          NEXUS redefines what AI can do. From real-time reasoning to autonomous
          workflows — experience intelligence engineered for the next era.
        </p>

        <div className="scroll-reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
             style={{ transitionDelay: '200ms' }}>
          <GlowButton variant="primary">
            Start Building Free
          </GlowButton>
          <GlowButton variant="outline">
            Watch Demo
          </GlowButton>
        </div>

        <div className="scroll-reveal grid grid-cols-3 gap-8 max-w-lg mx-auto"
             style={{ transitionDelay: '300ms' }}>
          {[
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '<10ms', label: 'Latency' },
            { value: '2M+', label: 'Developers' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-white/30 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
