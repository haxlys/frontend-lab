import { motion } from 'motion/react'

interface BentoCard {
  title: string
  description: string
  accent: 'blue' | 'purple' | 'emerald'
  size: 'tall' | 'wide' | 'normal'
  icon: React.ReactNode
  stat?: { value: string; label: string }
}

const cards: BentoCard[] = [
  {
    title: 'Real-time Reasoning',
    description: 'Process and correlate millions of data points in milliseconds, surfacing the insight you need exactly when you need it.',
    accent: 'purple',
    size: 'wide',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" /><path d="M12 18v4" /><path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" /><path d="M2 12h4" /><path d="M18 12h4" /><path d="M4.93 19.07l2.83-2.83" /><path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    stat: { value: '< 50ms', label: 'Average latency' },
  },
  {
    title: 'Autonomous Agents',
    description: 'Deploy AI agents that monitor, analyze, and act on your behalf across any connected system.',
    accent: 'blue',
    size: 'normal',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="8" height="8" rx="1" /><rect x="14" y="2" width="8" height="8" rx="1" /><rect x="2" y="14" width="8" height="8" rx="1" /><rect x="14" y="14" width="8" height="8" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Context-Aware Memory',
    description: 'Every interaction builds a persistent semantic graph. The engine remembers what matters and forgets what doesn\'t.',
    accent: 'emerald',
    size: 'normal',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    stat: { value: '99.7%', label: 'Recall accuracy' },
  },
  {
    title: 'Predictive Insights',
    description: 'Anticipate trends and anomalies before they surface, with confidence-scored forecasts delivered to your workflow.',
    accent: 'purple',
    size: 'normal',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
      </svg>
    ),
  },
  {
    title: 'Seamless Integration',
    description: 'Connect with 200+ tools using native SDKs. Zero-ETL pipelines sync your data in real time.',
    accent: 'blue',
    size: 'tall',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </svg>
    ),
    stat: { value: '200+', label: 'Integrations' },
  },
]

const accentBorder = {
  purple: 'before:from-neon-purple before:to-neon-purple/20',
  blue: 'before:from-neon-blue before:to-neon-blue/20',
  emerald: 'before:from-neon-emerald before:to-neon-emerald/20',
} as const

const accentGlow = {
  purple: 'shadow-purple-500/5 hover:shadow-purple-500/10',
  blue: 'shadow-blue-500/5 hover:shadow-blue-500/10',
  emerald: 'shadow-emerald-500/5 hover:shadow-emerald-500/10',
} as const

const accentStat = {
  purple: 'text-neon-purple',
  blue: 'text-neon-blue',
  emerald: 'text-neon-emerald',
} as const

const accentIcon = {
  purple: 'text-neon-purple/70',
  blue: 'text-neon-blue/70',
  emerald: 'text-neon-emerald/70',
} as const

export default function BentoGrid() {
  return (
    <section id="platform" className="relative py-32 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_50%,rgba(59,130,246,0.04),transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tighter text-white mb-4">
            Built for how your
            <br />
            <span className="text-gradient-emerald">team actually works</span>
          </h2>
          <p className="text-white/40 text-[1.05rem] leading-relaxed max-w-[50ch] mx-auto">
            Not another dashboard. A reasoning layer that sits on top of your stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px rounded-3xl overflow-hidden glass">
          {cards.map((card, i) => {
            const isWide = card.size === 'wide'
            const isTall = card.size === 'tall'

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`
                  relative group p-8 bg-eclipse-900/80 transition-all duration-500
                  hover:bg-eclipse-800/80
                  ${isWide ? 'lg:col-span-2' : ''}
                  ${isTall ? 'lg:row-span-2 flex flex-col justify-between' : ''}
                  ${accentGlow[card.accent]}
                  before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500
                  before:bg-gradient-to-br ${accentBorder[card.accent]}
                  hover:before:opacity-100
                  before:-z-10 before:rounded-[inherit]
                `}
              >
                <div className="mb-5 text-neon-purple/40">
                  <div className={`${accentIcon[card.accent]}`}>
                    {card.icon}
                  </div>
                </div>

                <div className={isTall ? 'flex-1' : ''}>
                  <h3 className="font-display text-[1.15rem] font-semibold tracking-tight text-white/90 mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-[0.925rem] text-white/35 leading-relaxed max-w-[42ch]">
                    {card.description}
                  </p>
                </div>

                {card.stat && (
                  <div className={`mt-6 pt-5 border-t border-white/[0.06]`}>
                    <div className={`font-mono text-2xl font-bold tracking-tighter ${accentStat[card.accent]}`}>
                      {card.stat.value}
                    </div>
                    <div className="text-[12px] text-white/25 mt-0.5 tracking-wide uppercase">
                      {card.stat.label}
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
