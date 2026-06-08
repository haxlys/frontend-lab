import { motion } from 'motion/react'
import {
  Lightning,
  Brain,
  Pulse,
  Shield,
  ArrowsClockwise,
  Code,
} from '@phosphor-icons/react'
import {
  SpeedVisual,
  PlanVisual,
  LiveTraceVisual,
  CodeVisual,
  LoopVisual,
  ShieldVisual,
} from './BentoVisuals'

/**
 * Bento grid. 6 cells, asymmetric, exactly N cells for N items.
 * Desktop 12-col grid composition (no empty cells, no repetition).
 *   row 1: [Speed 8 ][Plans 4 (rowspan 2)]
 *   row 2: [Live 4 ][Tools 5 ][Loop 3]
 *   row 3: [Enterprise 12 (full-width inline)]
 */
export default function Bento() {
  return (
    <section id="product" className="relative z-10 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader />

        <div className="mt-14 grid grid-cols-1 gap-4 md:auto-rows-[minmax(180px,auto)] md:grid-cols-12">
          <Cell size="md:col-span-8" tone="violet" index={0}
            icon={<Lightning weight="duotone" className="h-5 w-5 text-violet-200" />}
            title="Sub-100ms reasoning"
            body="Aether routes to the smallest viable model for every step. Faster answers, a third of the spend."
            visual={<SpeedVisual />} />

          <Cell size="md:col-span-4 md:row-span-2" tone="ink" index={1}
            icon={<Brain weight="duotone" className="h-5 w-5 text-cyan-200" />}
            title="Verifiable plans"
            body="Every decision is decomposed into inspectable steps. Approve, redirect, or override at any node."
            visual={<PlanVisual />} />

          <Cell size="md:col-span-4" tone="ink" index={2}
            icon={<Pulse weight="duotone" className="h-5 w-5 text-emerald-300" />}
            title="Live observability"
            body="Token-level traces, replay, and cost attribution out of the box."
            visual={<LiveTraceVisual />} />

          <Cell size="md:col-span-5" tone="ink" index={3}
            icon={<Code weight="duotone" className="h-5 w-5 text-zinc-200" />}
            title="Native tool use"
            body="SDKs for TypeScript, Python, and Go. Sandboxes, webhooks, and function calling included."
            visual={<CodeVisual />} />

          <Cell size="md:col-span-3" tone="iris" index={4}
            icon={<ArrowsClockwise weight="duotone" className="h-5 w-5 text-white" />}
            title="Compounding memory"
            body="Your agents get sharper from your private traces. Your data never leaves your tenant."
            visual={<LoopVisual />} />

          <Cell size="md:col-span-12" tone="dark" index={5} inline
            icon={<Shield weight="duotone" className="h-5 w-5 text-zinc-200" />}
            title="Enterprise posture, by default"
            body="SOC 2 Type II, HIPAA-ready, single-tenant deployment, BYOK, and data residency across fourteen regions."
            visual={<ShieldVisual />} />
        </div>
      </div>
    </section>
  )
}

function SectionHeader() {
  return (
    <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12">
      <div className="md:col-span-7">
        <h2 className="text-balance text-[40px] font-medium leading-[1.02] tracking-[-0.03em] sm:text-[56px]">
          Built like infrastructure.
          <br />
          <span className="text-zinc-500">Feels like a teammate.</span>
        </h2>
      </div>
      <div className="md:col-span-5">
        <p className="max-w-[42ch] text-[15px] leading-[1.55] text-zinc-400">
          Six primitives that compose into any workflow you can describe. Each
          ships with the same observability, the same SDK, the same security
          posture.
        </p>
      </div>
    </div>
  )
}

type Tone = 'violet' | 'iris' | 'ink' | 'dark'
type CellProps = {
  size: string
  tone: Tone
  index: number
  icon: React.ReactNode
  title: string
  body: string
  visual?: React.ReactNode
  inline?: boolean
}

function Cell({ size, tone, index, icon, title, body, visual, inline }: CellProps) {
  const toneBg =
    tone === 'violet'
      ? 'bg-gradient-to-br from-violet-500/25 via-violet-500/[0.06] to-transparent'
      : tone === 'iris'
        ? 'bg-gradient-to-br from-indigo-500/30 via-indigo-500/[0.08] to-transparent'
        : tone === 'dark'
          ? 'bg-gradient-to-b from-white/[0.035] to-white/[0.012]'
          : 'bg-white/[0.025]'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={[
        'group relative overflow-hidden rounded-2xl border border-white/[0.08]',
        'transition-colors duration-500',
        size,
        toneBg,
      ].join(' ')}
      style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(139,92,246,0.35), 0 0 60px -10px rgba(139,92,246,0.2)' }}
      />

      {inline ? (
        <div className="grid h-full grid-cols-1 items-center gap-6 p-7 md:grid-cols-12 md:gap-10 md:p-9">
          <div className="md:col-span-5">
            <Header icon={icon} title={title} />
            <p className="mt-3 max-w-[42ch] text-[15px] leading-[1.55] text-zinc-400">{body}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['SOC 2 II', 'HIPAA', 'ISO 27001', 'GDPR', 'BYOK', 'VPC'].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-zinc-400"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-7">{visual}</div>
        </div>
      ) : (
        <div className="flex h-full flex-col p-6">
          <Header icon={icon} title={title} />
          <p className="mt-2 max-w-[36ch] text-[14px] leading-[1.55] text-zinc-400">{body}</p>
          {visual && <div className="mt-auto pt-6">{visual}</div>}
        </div>
      )}
    </motion.div>
  )
}

function Header({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
        {icon}
      </span>
      <h3 className="text-[15.5px] font-medium tracking-tight text-zinc-100">{title}</h3>
    </div>
  )
}
