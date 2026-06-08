import { motion, useReducedMotion } from 'motion/react'
import { ParticleCanvas } from './ParticleCanvas'
import { ArrowRight } from '@phosphor-icons/react'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      <ParticleCanvas />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-white/50 tracking-wide mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
            Now in public beta
          </span>
        </motion.div>

        <motion.h1
          initial={reduce ? undefined : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.05] max-w-4xl"
        >
          Intelligence that{' '}
          <span className="neon-text">thinks ahead</span>
          <br />
          of you
        </motion.h1>

        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg text-white/40 max-w-xl leading-relaxed"
        >
          Nexus learns your workflow, anticipates your next move, and automates
          the mundane so you can focus on what matters.
        </motion.p>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-medium text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]">
            <span className="relative z-10 flex items-center gap-2">
              Start building free
              <ArrowRight
                size={18}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </span>
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-neon-purple/20 via-electric-blue/20 to-emerald/20 blur-xl" />
          </button>

          <button className="px-8 py-3.5 rounded-full text-sm text-white/50 hover:text-white/80 transition-colors duration-200 border border-white/[0.06] hover:border-white/[0.12] bg-white/[0.02]">
            View documentation
          </button>
        </motion.div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 flex items-center gap-8 text-xs text-white/20"
        >
          <span>TRUSTED BY FORWARD-THINKING TEAMS</span>
          <div className="flex items-center gap-8">
            {['Veridian', 'Astra', 'Cobalt', 'Pulse'].map((name) => (
              <span
                key={name}
                className="font-mono text-white/25 tracking-wider hover:text-white/50 transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
