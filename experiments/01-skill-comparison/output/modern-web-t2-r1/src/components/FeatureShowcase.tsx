import ScrollReveal from './ScrollReveal'

const features = [
  {
    title: 'Reasoning',
    description: 'Multi-step logical inference with chain-of-thought that mirrors expert human reasoning under uncertainty.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    color: 'from-neon-purple to-violet-500',
    size: 'col-span-2 row-span-2 md:col-span-1 md:row-span-2',
  },
  {
    title: 'Speed',
    description: 'Sub-100ms inference latency at petabyte scale. Real-time results, every time.',
    metric: '<100ms',
    metricLabel: 'Avg Latency',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: 'from-electric-blue to-cyan-400',
    size: 'col-span-1 row-span-1',
  },
  {
    title: 'Precision',
    description: '99.7% accuracy on benchmark tasks. Enterprise-grade reliability built into every inference.',
    metric: '99.7%',
    metricLabel: 'Accuracy',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: 'from-emerald to-teal-400',
    size: 'col-span-1 row-span-1',
  },
  {
    title: 'Automation',
    description: 'Autonomous workflow orchestration across 200+ integrations with zero human intervention.',
    metric: '200+',
    metricLabel: 'Integrations',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-400',
    size: 'col-span-1 row-span-1',
  },
  {
    title: 'Context',
    description: '2M token context windows with perfect recall. Every conversation is a continuous thread.',
    metric: '2M',
    metricLabel: 'Token Window',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    color: 'from-pink-500 to-rose-400',
    size: 'col-span-2 md:col-span-1',
  },
  {
    title: 'Privacy',
    description: 'Military-grade encryption with on-premise deployment options. Your data never leaves your control.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    color: 'from-violet-500 to-purple-400',
    size: 'col-span-2 md:col-span-1',
  },
]

interface BentoCardProps {
  feature: (typeof features)[number]
  delay: number
}

function BentoCard({ feature, delay }: BentoCardProps) {
  return (
    <ScrollReveal className={`${feature.size} min-h-0`} delay={delay}>
      <div
        className={`glass-card glow-border group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 sm:p-8`}
      >
        {/* Gradient accent strip at top */}
        <div
          className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Background glow orb on hover */}
        <div
          className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-3xl transition-all duration-700`}
        />

        {/* Icon */}
        <div
          className={`relative mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10 text-white shadow-lg`}
        >
          {feature.icon}
        </div>

        {/* Title */}
        <h3 className="relative text-lg sm:text-xl font-semibold text-white/90 font-display tracking-tight">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="relative mt-2 text-sm text-white/35 leading-relaxed flex-1">
          {feature.description}
        </p>

        {/* Metric (if present) */}
        {feature.metric && (
          <div className="relative mt-4 pt-4 border-t border-white/5">
            <div
              className={`text-2xl sm:text-3xl font-bold font-display tracking-tight bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
            >
              {feature.metric}
            </div>
            <div className="mt-0.5 text-xs text-white/25 uppercase tracking-widest">
              {feature.metricLabel}
            </div>
          </div>
        )}
      </div>
    </ScrollReveal>
  )
}

export default function FeatureShowcase() {
  return (
    <section id="features" className="relative py-32 sm:py-40 overflow-hidden">
      {/* Section background orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-neon-purple orb opacity-[0.02]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-electric-blue orb opacity-[0.02]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <ScrollReveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 text-xs text-white/50 backdrop-blur-md">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            Core Capabilities
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white/90 tracking-tight">
            Engineered for
            <span className="neon-text ml-3">Scale</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-white/35 font-light leading-relaxed">
            Every feature is designed from the ground up to be production-grade,
            not just a demo. This is infrastructure you can build on.
          </p>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
          {features.map((f, i) => (
            <BentoCard key={f.title} feature={f} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
