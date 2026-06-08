import { motion as m } from 'motion/react'

const steps = [
  {
    n: '01',
    title: 'Describe the job',
    body: 'Plain-English spec, a Notion doc, a Linear ticket, or a function signature. Aether parses intent and infers constraints.',
  },
  {
    n: '02',
    title: 'Aether plans it',
    body: 'A graph of steps, each with a model assigned, tools wired, and a verification strategy. You see it before anything runs.',
  },
  {
    n: '03',
    title: 'Agents execute',
    body: 'Long-running workers run in sandboxes, call your tools, branch on findings, and checkpoint. You can pause, redirect, or take over.',
  },
  {
    n: '04',
    title: 'You ship faster',
    body: 'A pull request with the diff, a tested migration, a deployed feature, a closed ticket. Traced end to end, costed per step.',
  },
] as const

export default function Workflow() {
  return (
    <section id="workflow" className="relative z-10 border-t border-white/[0.06] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-balance text-[40px] font-medium leading-[1.02] tracking-[-0.03em] sm:text-[56px]">
            From intent to shipped, in one continuous loop.
          </h2>
          <p className="mt-5 max-w-[60ch] text-[15px] leading-[1.6] text-zinc-400">
            Aether isn&apos;t a chatbot. It&apos;s a reasoning runtime. You set
            the goal, it picks the route, you stay in control of every step.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Vertical rail */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[27px] top-2 bottom-2 hidden w-px md:block"
            style={{
              background:
                'linear-gradient(180deg, transparent, rgba(139,92,246,0.4) 10%, rgba(34,211,238,0.4) 90%, transparent)',
            }}
          />
          <ol className="space-y-8">
            {steps.map((s, i) => (
              <Step key={s.n} {...s} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function Step({ n, title, body, index }: { n: string; title: string; body: string; index: number }) {
  return (
    <m.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative grid grid-cols-[56px_1fr] items-start gap-5 md:grid-cols-[56px_1fr_220px]"
    >
      <div className="relative">
        <div
          className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] font-mono text-[13px] text-zinc-300"
          style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}
        >
          {n}
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-2 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: 'radial-gradient(closest-side, rgba(139,92,246,0.5), transparent 70%)' }}
        />
      </div>

      <div className="pt-1.5">
        <h3 className="text-[22px] font-medium leading-tight tracking-tight text-zinc-100 sm:text-[26px]">{title}</h3>
        <p className="mt-2.5 max-w-[60ch] text-[15px] leading-[1.6] text-zinc-400">{body}</p>
      </div>

      <div className="hidden md:block md:pt-2">
        <StepTag index={index} />
      </div>
    </m.li>
  )
}

function StepTag({ index }: { index: number }) {
  const tags = ['input', 'plan', 'execute', 'ship']
  const accents = [
    'rgba(139,92,246,0.5)',
    'rgba(99,102,241,0.5)',
    'rgba(34,211,238,0.5)',
    'rgba(16,185,129,0.5)',
  ]
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-zinc-400"
      style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)' }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: accents[index], boxShadow: `0 0 8px ${accents[index]}` }}
      />
      {tags[index]}
    </div>
  )
}
