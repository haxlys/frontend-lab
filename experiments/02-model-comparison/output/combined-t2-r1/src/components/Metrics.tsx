import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

const metrics = [
  { value: 82, suffix: 'ms', label: 'Median reasoning latency' },
  { value: 4.2, suffix: '×', label: 'Faster than leading agent frameworks', decimals: 1 },
  { value: 31, suffix: '%', label: 'Lower cost per resolved task' },
  { value: 12, suffix: 'k+', label: 'Teams running Aether in production' },
]

export default function Metrics() {
  return (
    <section className="relative z-10 border-y border-white/[0.06] bg-black/30 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 md:grid-cols-4">
        {metrics.map((m, i) => (
          <Cell key={m.label} {...m} index={i} />
        ))}
      </div>
    </section>
  )
}

function Cell({
  value,
  suffix,
  label,
  decimals = 0,
  index,
}: {
  value: number
  suffix: string
  label: string
  decimals?: number
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduce = useReducedMotion()
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setN(value)
      return
    }
    const start = performance.now()
    const duration = 1200
    let alive = true
    const tick = (now: number) => {
      if (!alive) return
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setN(value * eased)
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
    return () => {
      alive = false
    }
  }, [inView, value, reduce])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="relative px-2 md:border-l md:border-white/[0.06] md:pl-8"
    >
      <div className="flex items-baseline gap-1">
        <span className="text-[44px] font-medium leading-none tracking-[-0.04em] text-zinc-100 sm:text-[56px]">
          {n.toFixed(decimals)}
        </span>
        <span className="text-[24px] font-medium text-zinc-400">{suffix}</span>
      </div>
      <p className="mt-3 max-w-[24ch] text-[13px] leading-[1.5] text-zinc-500">{label}</p>
    </motion.div>
  )
}
