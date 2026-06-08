import { motion } from 'motion/react'
import NeonButton from './NeonButton'
import ParticleCanvas from './ParticleCanvas'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-eclipse-950 via-eclipse-950 to-eclipse-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(139,92,246,0.06),transparent)]" />
      <ParticleCanvas />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 8, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[12px] font-medium tracking-wider uppercase text-neon-blue">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-30 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue" />
            </span>
            Now in Public Beta
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tighter text-white mb-6 max-w-4xl mx-auto"
        >
          Intelligence that
          <br />
          <span className="text-gradient-blue-purple">thinks before</span> you ask
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(1rem,1.5vw,1.2rem)] text-white/45 leading-relaxed max-w-[55ch] mx-auto mb-10"
        >
          Nexus is the first reasoning engine built for product teams. It connects your data, anticipates questions, and surfaces insights before you even open a dashboard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#platform">
            <NeonButton>Explore the platform</NeonButton>
          </a>
          <a href="#solutions">
            <NeonButton variant="secondary">See solutions</NeonButton>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex items-center justify-center gap-12 flex-wrap"
        >
          {['Vercel', 'Stripe', 'Linear', 'Notion'].map((name) => (
            <span
              key={name}
              className="text-[13px] font-medium tracking-wider text-white/20 hover:text-white/35 transition-colors duration-500 uppercase cursor-default"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-eclipse-950 to-transparent pointer-events-none" />
    </section>
  )
}
