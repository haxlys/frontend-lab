import { motion } from 'motion/react'
import { ArrowRight } from '@phosphor-icons/react'

export default function CTA() {
  return (
    <section className="relative z-10 px-4 pb-24 sm:pb-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/[0.08]">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(60% 80% at 20% 0%, rgba(139,92,246,0.18), transparent 60%), radial-gradient(50% 70% at 90% 100%, rgba(34,211,238,0.18), transparent 60%), #0B0B0F',
          }}
        />
        <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-72 w-[44rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(139,92,246,0.4), transparent 70%)' }}
        />

        <div className="grid grid-cols-1 gap-10 p-10 md:grid-cols-12 md:p-16">
          <div className="md:col-span-7">
            <h2 className="text-balance text-[40px] font-medium leading-[1.02] tracking-[-0.03em] sm:text-[56px]">
              Build the thing you keep
              <br />
              <span className="text-gradient-violet italic">putting off.</span>
            </h2>
            <p className="mt-5 max-w-[52ch] text-[15.5px] leading-[1.6] text-zinc-400">
              Free to start, no card required. Aether meets you where your
              codebase is and gets to work in the time it takes to read this
              sentence.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 md:col-span-5 md:items-end md:justify-end">
            <motion.a
              href="#start"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-[14.5px] font-medium text-white"
            >
              <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400" />
              <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 blur-xl opacity-50" />
              <span className="relative z-10 inline-flex items-center gap-2">
                Start building free
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </motion.a>
            <a
              href="#sales"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13.5px] text-zinc-400 transition-colors duration-200 hover:text-zinc-200"
            >
              or talk to a human
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
