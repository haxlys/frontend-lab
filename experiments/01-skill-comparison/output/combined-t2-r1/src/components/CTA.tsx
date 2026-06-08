import { motion } from 'motion/react'
import NeonButton from './NeonButton'

export default function CTA() {
  return (
    <section className="relative py-40 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-eclipse-950 via-eclipse-900 to-eclipse-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(139,92,246,0.08),transparent)]" />

      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tighter text-white mb-6">
          Ready to stop
          <br />
          <span className="text-gradient-blue-purple">building dashboards?</span>
        </h2>
        <p className="text-white/40 text-[1.05rem] leading-relaxed max-w-[48ch] mx-auto mb-10">
          Join the teams that have moved from reactive analytics to proactive intelligence. Your data already knows. Let Nexus tell you.
        </p>
        <a href="#">
          <NeonButton>Get early access</NeonButton>
        </a>
        <p className="mt-5 text-[13px] text-white/20">
          Free for the first 100 teams. No credit card required.
        </p>
      </motion.div>
    </section>
  )
}
