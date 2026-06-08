import BentoCard from './BentoCard'

function IconBox({ icon, color }: { icon: React.ReactNode; color: 'purple' | 'blue' | 'green' }) {
  const gradients = {
    purple: 'from-purple-500/20 to-purple-600/10 border-purple-500/20',
    blue: 'from-blue-500/20 to-blue-600/10 border-blue-500/20',
    green: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/20',
  }

  return (
    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradients[color]} border flex items-center justify-center mb-5`}>
      {icon}
    </div>
  )
}

const features = [
  {
    title: 'Real‑time Reasoning',
    description: 'Process complex problems with millisecond latency. Our inference engine handles multi‑step reasoning in a single pass.',
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'purple' as const,
    glow: 'purple' as const,
    size: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1',
  },
  {
    title: 'Autonomous Workflows',
    description: 'Design multi‑agent pipelines that execute, verify, and iterate without human intervention.',
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    color: 'blue' as const,
    glow: 'blue' as const,
    size: 'col-span-1 row-span-1',
  },
  {
    title: '99.99% Accuracy',
    description: 'Industry‑leading precision across every benchmark. Verified by independent audits and real‑world deployments.',
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'green' as const,
    glow: 'green' as const,
    size: 'col-span-1 row-span-1',
  },
  {
    title: 'Context Window',
    description: '1M token context means you can reason over entire codebases, legal documents, and research papers simultaneously.',
    stat: '1M',
    statLabel: 'tokens',
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7M4 7c0-2 1-3 3-3h10c2 0 3 1 3 3M4 7h16" />
      </svg>
    ),
    color: 'purple' as const,
    glow: 'purple' as const,
    size: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1',
  },
  {
    title: 'Multi‑modal',
    description: 'Text, image, audio, video — NEXUS processes every modality natively with unified embeddings.',
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'blue' as const,
    glow: 'blue' as const,
    size: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1',
  },
  {
    title: 'Enterprise‑grade Security',
    description: 'SOC 2 Type II compliant. Encrypted at rest and in transit. Your data never leaves your infrastructure.',
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    color: 'green' as const,
    glow: 'green' as const,
    size: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1',
  },
]

export default function FeatureShowcase() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30 font-medium mb-4">
            Platform
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Engineered for{' '}
            <span className="text-gradient">performance</span>
          </h2>
          <p className="text-white/35 text-lg mt-6 max-w-xl mx-auto font-light">
            Every component is designed from the ground up for speed, reliability, and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {features.map((feature, i) => (
            <BentoCard
              key={feature.title}
              className={feature.size}
              delay={i * 100}
              glow={feature.glow}
            >
              <IconBox icon={feature.icon} color={feature.color} />
              <h3 className="font-display text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/35 text-sm leading-relaxed font-light">
                {feature.description}
              </p>
              {feature.stat && (
                <div className="mt-6 pt-4 border-t border-white/5 flex items-baseline gap-2">
                  <span className="text-4xl font-display font-bold text-gradient">
                    {feature.stat}
                  </span>
                  <span className="text-white/30 text-sm">{feature.statLabel}</span>
                </div>
              )}
            </BentoCard>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />
    </section>
  )
}
