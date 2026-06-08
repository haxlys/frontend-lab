import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Lightning, Gauge, Brain, Robot, Globe, ShieldCheck } from '@phosphor-icons/react'

interface Feature {
  icon: React.ElementType
  title: string
  desc: string
  variant: 'purple' | 'blue' | 'emerald'
  size: 'small' | 'medium' | 'large'
}

const features: Feature[] = [
  {
    icon: Lightning,
    title: 'Real-time inference',
    desc: 'Sub-50ms response times across any scale. Your users never wait.',
    variant: 'purple',
    size: 'large',
  },
  {
    icon: Gauge,
    title: 'Adaptive scaling',
    desc: 'Infrastructure that breathes with your traffic. Zero config, zero waste.',
    variant: 'blue',
    size: 'medium',
  },
  {
    icon: Brain,
    title: 'Context-aware memory',
    desc: 'Persistent long-term memory across sessions. Nexus remembers what matters.',
    variant: 'emerald',
    size: 'small',
  },
  {
    icon: Robot,
    title: 'Autonomous agents',
    desc: 'Deploy task-specific agents that operate independently, 24/7.',
    variant: 'purple',
    size: 'medium',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise security',
    desc: 'SOC 2 Type II compliant. End-to-end encryption. Your data stays yours.',
    variant: 'blue',
    size: 'small',
  },
  {
    icon: Globe,
    title: 'Multimodal by default',
    desc: 'Text, image, audio, video — one unified API, zero translation layers.',
    variant: 'emerald',
    size: 'large',
  },
]

const sizeMap: Record<string, string> = {
  'small': 'col-span-1 row-span-1',
  'medium': 'col-span-1 row-span-1 md:row-span-2',
  'large': 'col-span-1 md:col-span-2 row-span-1',
}

const variantStyles: Record<string, { border: string; glow: string; iconBg: string; iconColor: string }> = {
  purple: {
    border: 'border-neon-purple/10 hover:border-neon-purple/25',
    glow: 'before:from-neon-purple/8',
    iconBg: 'bg-neon-purple/10',
    iconColor: 'text-neon-purple',
  },
  blue: {
    border: 'border-electric-blue/10 hover:border-electric-blue/25',
    glow: 'before:from-electric-blue/8',
    iconBg: 'bg-electric-blue/10',
    iconColor: 'text-electric-blue',
  },
  emerald: {
    border: 'border-emerald/10 hover:border-emerald/25',
    glow: 'before:from-emerald/8',
    iconBg: 'bg-emerald/10',
    iconColor: 'text-emerald',
  },
}

function BentoCard({ feature, index }: { feature: Feature; index: number }) {
  const reduce = useReducedMotion()
  const style = variantStyles[feature.variant]

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`${sizeMap[feature.size]} group relative rounded-3xl border bg-white/[0.02] p-6 md:p-8 transition-all duration-500 ${style.border} before:absolute before:inset-0 before:rounded-3xl before:opacity-0 before:transition-opacity before:duration-500 before:bg-gradient-to-br ${style.glow} before:to-transparent hover:before:opacity-100`}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${style.iconBg}`}>
          <feature.icon size={22} weight="duotone" className={style.iconColor} />
        </div>

        <h3 className="text-lg font-semibold tracking-tight mb-2 text-white/90">
          {feature.title}
        </h3>
        <p className="text-sm text-white/35 leading-relaxed max-w-xs">
          {feature.desc}
        </p>

        {feature.size === 'large' && (
          <div className="mt-auto pt-6">
            <div className="flex items-center gap-2 text-xs text-white/20">
              <span className={`w-1.5 h-1.5 rounded-full ${style.iconBg} ring-1 ${style.border}`} />
              <span>Active</span>
              <span className="w-px h-3 bg-white/[0.06]" />
              <span>99.97% uptime</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function BentoGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const reveals = section.querySelectorAll('.bento-reveal')
            reveals.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('visible')
              }, i * 100)
            })
          }
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [reduce])

  return (
    <section
      id="platform"
      ref={sectionRef}
      className="relative py-32 md:py-40 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter leading-tight max-w-2xl">
            Built for the way
            <br />
            <span className="neon-text">AI should work</span>
          </h2>
          <p className="mt-4 text-white/35 text-lg max-w-lg leading-relaxed">
            Every component engineered for speed, reliability, and developer experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-auto gap-4">
          {features.map((feature, i) => (
            <BentoCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
