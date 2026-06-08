import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import HeroCanvas from './HeroCanvas'
import { ArrowRight, Sparkle, Play } from '@phosphor-icons/react'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate flex min-h-[100dvh] items-center pt-28 pb-16 sm:pt-32"
    >
      <motion.div style={reduce ? undefined : { y, opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* LEFT: typography stack */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11.5px] text-zinc-300"
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)' }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 pulse-ring" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono uppercase tracking-[0.18em] text-zinc-400">Aether 2.4</span>
              <span className="text-zinc-600">/</span>
              <span>Reasoning models, now in general availability</span>
            </motion.div>

            <h1 className="mt-7 text-balance text-[44px] font-medium leading-[0.96] tracking-[-0.035em] sm:text-[68px] lg:text-[88px]">
              <RevealLine delay={0.05}>
                Intelligence that
              </RevealLine>
              <RevealLine delay={0.18}>
                <span className="text-gradient-violet italic">thinks</span>{' '}
                <span className="text-zinc-100">in</span>{' '}
                <span className="relative inline-block">
                  production
                  <UnderlineSweep />
                </span>
                .
              </RevealLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-[58ch] text-[17px] leading-[1.55] text-zinc-400"
            >
              Aether is the autonomous reasoning layer for engineering teams. Models that plan,
              agents that ship, observability that explains every decision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <GlowCTA href="#start" label="Start free" />
              <a
                href="#demo"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-[14px] text-zinc-200 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <Play weight="fill" className="h-3.5 w-3.5 text-violet-300" />
                <span>Watch the 90s demo</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-10 flex items-center gap-6 text-[12px] text-zinc-500"
            >
              <Bullet>No credit card</Bullet>
              <Bullet>SOC 2 Type II</Bullet>
              <Bullet>Self-host available</Bullet>
            </motion.div>
          </div>

          {/* RIGHT: interactive visual */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[5/6] w-full"
            >
              <HeroCanvas />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom fade so scroll-out is soft */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-b from-transparent to-[#0B0B0F]" />
    </section>
  )
}

function RevealLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  )
}

function UnderlineSweep() {
  return (
    <svg
      className="pointer-events-none absolute -bottom-1.5 left-0 h-3 w-full"
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      aria-hidden
    >
      <motion.path
        d="M2 6 C 50 0, 150 12, 198 6"
        stroke="url(#us)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <defs>
        <linearGradient id="us" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
          <stop offset="40%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function GlowCTA({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="group relative isolate inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-[14px] font-medium text-white">
      <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 blur-xl opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
      <span className="absolute inset-[1px] -z-10 rounded-full bg-[#0B0B0F]" />
      <span className="relative z-10 inline-flex items-center gap-2 text-white">
        <Sparkle weight="fill" className="h-3.5 w-3.5 text-violet-200" />
        {label}
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
    </a>
  )
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="h-1 w-1 rounded-full bg-zinc-600" />
      {children}
    </span>
  )
}
