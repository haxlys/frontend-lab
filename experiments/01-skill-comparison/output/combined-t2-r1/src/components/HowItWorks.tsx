import { motion } from 'motion/react'

const FEATURES = [
  {
    step: '01',
    title: 'Plug in your stack',
    description: 'Connect any tool with our native SDKs. Data flows in real-time with zero configuration.',
    accent: 'from-neon-blue to-neon-purple',
  },
  {
    step: '02',
    title: 'Define your intent',
    description: 'Describe what matters in plain language. The reasoning engine builds the pipeline.',
    accent: 'from-neon-purple to-neon-emerald',
  },
  {
    step: '03',
    title: 'Watch it anticipate',
    description: 'Get insights surfaced proactively. No dashboards, no queries, no waiting.',
    accent: 'from-neon-emerald to-neon-blue',
  },
]

export default function HowItWorks() {
  return (
    <section id="solutions" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(139,92,246,0.04),transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tighter text-white mb-4">
            Three steps.
            <br />
            <span className="text-gradient-blue-purple">Zero friction.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative group p-8 rounded-3xl bg-eclipse-900/60 transition-all duration-500 hover:bg-eclipse-800/60"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.accent} flex items-center justify-center mb-6 text-white font-mono text-lg font-bold shadow-lg transition-shadow duration-500 group-hover:shadow-[0_0_32px_rgba(139,92,246,0.2)]`}>
                {f.step}
              </div>
              <h3 className="font-display text-xl font-semibold tracking-tight text-white/90 mb-3">
                {f.title}
              </h3>
              <p className="text-[0.95rem] text-white/35 leading-relaxed">
                {f.description}
              </p>

              {i < FEATURES.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-white/10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
