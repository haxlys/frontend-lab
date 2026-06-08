import { useEffect, useState } from 'react'
import { NeuralCanvas } from './NeuralCanvas'

const ROTATING = ['faster.', 'more accurate.', 'more autonomous.', 'finally useful.']

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING.length)
    }, 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="product" className="relative pt-36 sm:pt-44 md:pt-52">
      <div className="absolute inset-x-0 top-20 -z-10 mx-auto h-[600px] max-w-5xl">
        <div className="absolute inset-0 rounded-full opacity-60 blur-3xl"
          style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.35), transparent 60%)' }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal flex justify-center">
            <span className="label-chip">
              <span className="relative grid h-1.5 w-1.5 place-items-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-emerald/70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-neon-emerald" />
              </span>
              v4.0 — Now with autonomous agents
              <span className="ml-1 text-white/40">→</span>
            </span>
          </div>

          <h1 className="reveal reveal-delay-1 mt-7 font-display text-[clamp(2.6rem,7vw,5.75rem)] font-semibold leading-[0.95] tracking-ultratight text-balance">
            The AI that runs{' '}
            <span className="relative inline-block">
              <span
                key={wordIndex}
                className="neon-text-anim inline-block min-w-[6ch] text-left italic"
                style={{ animation: 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both' }}
              >
                {ROTATING[wordIndex]}
              </span>
            </span>
            <br className="hidden sm:block" />
            <span className="text-gradient-muted">on your behalf.</span>
          </h1>

          <p className="reveal reveal-delay-2 mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            Neural is the autonomous reasoning layer for product teams. Ship workflows
            that <em className="not-italic text-white/85">think</em>, <em className="not-italic text-white/85">plan</em>, and
            execute — without the brittle prompt chains.
          </p>

          <div className="reveal reveal-delay-3 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a href="#start" className="btn-primary group w-full sm:w-auto">
              <span>Start building free</span>
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5">
                <path fill="currentColor" d="M8.6 3.4 7.2 4.8 10.8 8.5H2v1.5h8.8l-3.6 3.7 1.4 1.4L14 8.5 8.6 3.4Z" />
              </svg>
            </a>
            <a href="#demo" className="btn-ghost group w-full sm:w-auto">
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-white/60 group-hover:text-white">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" fill="none" />
                <path fill="currentColor" d="M6.5 5.2v5.6L11 8Z" />
              </svg>
              Watch the 90s demo
            </a>
          </div>

          <div className="reveal reveal-delay-4 mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/40">
            <span className="flex items-center gap-1.5">
              <Check /> SOC 2 Type II
            </span>
            <span className="flex items-center gap-1.5">
              <Check /> 99.99% uptime
            </span>
            <span className="flex items-center gap-1.5">
              <Check /> Self-host ready
            </span>
          </div>
        </div>

        <div className="reveal reveal-delay-5 relative mt-16 sm:mt-20">
          <div className="glow-border relative overflow-hidden rounded-3xl">
            <div className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-2 sm:p-3">
              <NeuralCanvas />

              <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 sm:left-6 sm:top-6">
                <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60 backdrop-blur">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-emerald" />
                  live · reasoning stream
                </div>
              </div>

              <div className="pointer-events-none absolute right-4 top-4 hidden items-center gap-2 sm:right-6 sm:top-6 sm:flex">
                <span className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[10px] text-white/50 backdrop-blur">
                  12.4k tok/s
                </span>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-6">
                <AgentLog />
                <MetricsTicker />
              </div>
            </div>
          </div>

          <FloatingChips />
        </div>
      </div>
    </section>
  )
}

function Check() {
  return (
    <svg viewBox="0 0 12 12" className="h-3 w-3 text-neon-emerald">
      <path
        fill="currentColor"
        d="M4.6 8.7 2.3 6.4 1.2 7.5l3.4 3.4 6.4-6.4-1.1-1.1Z"
      />
    </svg>
  )
}

const LOG = [
  { tone: 'text-neon-cyan', msg: '▸ parsing 1,284 documents' },
  { tone: 'text-neon-violet', msg: '▸ planning 3-step strategy' },
  { tone: 'text-neon-emerald', msg: '▸ executing in parallel' },
  { tone: 'text-white/60', msg: '▸ verified — 0.2s response' },
]

function AgentLog() {
  return (
    <div className="pointer-events-auto hidden w-[280px] overflow-hidden rounded-xl border border-white/10 bg-black/55 backdrop-blur-xl sm:block">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-1.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
          agent.log
        </span>
        <span className="font-mono text-[10px] text-white/30">stream</span>
      </div>
      <div className="space-y-1 px-3 py-2 font-mono text-[11px] leading-relaxed">
        {LOG.map((line, i) => (
          <div
            key={i}
            className={line.tone}
            style={{
              animation: `fade-up 0.6s ${0.1 + i * 0.25}s cubic-bezier(0.16,1,0.3,1) both`,
            }}
          >
            {line.msg}
            {i === LOG.length - 1 && <span className="ml-1 inline-block h-3 w-1.5 animate-caret bg-white/60 align-middle" />}
          </div>
        ))}
      </div>
    </div>
  )
}

function MetricsTicker() {
  const metrics = [
    { label: 'Reasoning', value: '12.4k', unit: 'tok/s' },
    { label: 'Latency', value: '0.21', unit: 's' },
    { label: 'Accuracy', value: '99.7', unit: '%' },
  ]
  return (
    <div className="pointer-events-auto hidden gap-2 lg:flex">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="rounded-xl border border-white/10 bg-black/55 px-3 py-2 backdrop-blur-xl"
        >
          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
            {m.label}
          </div>
          <div className="mt-0.5 flex items-baseline gap-1">
            <span className="font-display text-base font-semibold tracking-tightest text-white">
              {m.value}
            </span>
            <span className="text-[10px] text-white/40">{m.unit}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function FloatingChips() {
  const chips = [
    { title: 'Vector memory', sub: 'recall in 18ms', className: 'left-2 -top-6 sm:-top-8' },
    { title: 'Tool use', sub: '14 integrations', className: 'right-2 top-12' },
    { title: 'Self-critique', sub: 'verifier v2', className: 'left-6 -bottom-6 sm:-bottom-8' },
  ]
  return (
    <>
      {chips.map((c, i) => (
        <div
          key={c.title}
          className={`absolute z-10 hidden md:block ${c.className}`}
          style={{ animation: `float-slow 5s ${i * 0.6}s ease-in-out infinite` }}
        >
          <div className="glow-border flex items-center gap-3 rounded-2xl border border-white/10 bg-black/55 px-3.5 py-2.5 backdrop-blur-xl">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-neon-purple/30 to-neon-blue/30">
              <SparkIcon />
            </span>
            <div>
              <div className="text-xs font-medium text-white">{c.title}</div>
              <div className="font-mono text-[10px] text-white/50">{c.sub}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-white">
      <path
        fill="currentColor"
        d="M8 1.5 9.7 6 14 7.5l-3.5 3 1 4.5L8 12.7 4.5 15l1-4.5L2 7.5 6.3 6Z"
      />
    </svg>
  )
}
