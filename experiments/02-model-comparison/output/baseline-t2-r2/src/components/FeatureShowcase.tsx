interface Feature {
  title: string
  description: string
  className: string
  visual: React.ReactNode
  meta: string
}

const features: Feature[] = [
  {
    title: 'Blazing inference',
    description:
      'A custom speculative decoder that streams reasoning 6× faster than GPT-class baselines — without the quality trade-off.',
    className: 'md:col-span-3 md:row-span-2',
    meta: 'Performance',
    visual: <SpeedVisual />,
  },
  {
    title: 'Pinpoint accuracy',
    description:
      'A verifier loop catches hallucinations before they ever reach your users. 99.7% factual on internal evals.',
    className: 'md:col-span-3 md:row-span-1',
    meta: 'Reliability',
    visual: <AccuracyVisual />,
  },
  {
    title: 'Truly autonomous',
    description: 'Spin up agents that plan, browse, and execute — for hours — on your behalf.',
    className: 'md:col-span-2 md:row-span-2',
    meta: 'Agents',
    visual: <AgentVisual />,
  },
  {
    title: 'Bring your stack',
    description: 'Native SDKs for TypeScript, Python, Go. Deploy to Vercel, Fly, or self-host.',
    className: 'md:col-span-2 md:row-span-1',
    meta: 'Developer',
    visual: <StackVisual />,
  },
  {
    title: 'Memory that lasts',
    description: 'Long-term vector + episodic memory with sub-20ms recall across sessions.',
    className: 'md:col-span-2 md:row-span-1',
    meta: 'Memory',
    visual: <MemoryVisual />,
  },
  {
    title: 'Privacy by default',
    description: 'Zero-retention mode, on-prem deployments, and SOC 2 Type II out of the box.',
    className: 'md:col-span-3 md:row-span-1',
    meta: 'Trust',
    visual: <TrustVisual />,
  },
]

export function FeatureShowcase() {
  return (
    <section id="showcase" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="label-chip">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-purple" />
            Capabilities
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-ultratight sm:text-5xl text-balance">
            Everything you need to ship{' '}
            <span className="neon-text italic">production-grade</span> AI.
          </h2>
          <p className="mt-5 text-white/60">
            Six primitives. One composable runtime. Built by the team behind some of
            the most-used AI tools on the web.
          </p>
        </div>

        <div className="reveal reveal-delay-1 mt-14 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[180px] md:grid-cols-5 lg:auto-rows-[200px]">
          {features.map((f, i) => (
            <article
              key={f.title}
              className={`bento group flex flex-col justify-between reveal reveal-delay-${(i % 4) + 1} ${f.className}`}
            >
              <div className="flex items-center justify-between text-xs text-white/40">
                <span className="font-mono uppercase tracking-[0.18em]">{f.meta}</span>
                <span className="font-mono text-white/30">0{i + 1}</span>
              </div>

              <div className="flex-1">{f.visual}</div>

              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                  {f.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SpeedVisual() {
  return (
    <div className="relative h-full min-h-[160px]">
      <div className="absolute inset-0">
        <svg viewBox="0 0 400 220" className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="bar-grad" x1="0" x2="0" y1="1" y2="0">
              <stop offset="0" stopColor="#3B82F6" stopOpacity="0.9" />
              <stop offset="1" stopColor="#8B5CF6" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="bar-grad-soft" x1="0" x2="0" y1="1" y2="0">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {Array.from({ length: 18 }).map((_, i) => {
            const baseH = 20 + Math.sin(i * 0.6) * 30 + i * 4
            const isUs = i % 4 === 0
            return (
              <rect
                key={i}
                x={20 + i * 20}
                y={190 - baseH}
                width={10}
                height={baseH}
                rx={3}
                fill={isUs ? 'url(#bar-grad)' : 'url(#bar-grad-soft)'}
                style={{
                  transformOrigin: 'bottom',
                  animation: `fade-up 0.6s ${i * 0.04}s cubic-bezier(0.16,1,0.3,1) both`,
                }}
              />
            )
          })}
        </svg>
      </div>
      <div className="absolute right-3 top-3 flex items-baseline gap-1 rounded-lg border border-white/10 bg-black/40 px-2.5 py-1.5 backdrop-blur">
        <span className="font-display text-lg font-semibold tracking-tightest text-white">6.2×</span>
        <span className="font-mono text-[10px] text-white/50">faster</span>
      </div>
    </div>
  )
}

function AccuracyVisual() {
  const cells = Array.from({ length: 60 })
  return (
    <div className="flex h-full items-center gap-4">
      <div className="grid flex-1 grid-cols-10 gap-1.5">
        {cells.map((_, i) => {
          const pass = Math.random() > 0.06
          return (
            <span
              key={i}
              className={`aspect-square rounded-[3px] ${
                pass ? 'bg-neon-emerald/60' : 'bg-rose-500/60'
              }`}
              style={{
                animation: `fade-up 0.4s ${i * 0.015}s cubic-bezier(0.16,1,0.3,1) both`,
                opacity: pass ? 0.7 : 1,
              }}
            />
          )
        })}
      </div>
      <div className="flex flex-col gap-1 pr-1">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
          Pass rate
        </div>
        <div className="font-display text-2xl font-semibold tracking-tightest text-white">
          99.7%
        </div>
        <div className="font-mono text-[10px] text-neon-emerald">↑ 1.2%</div>
      </div>
    </div>
  )
}

function AgentVisual() {
  return (
    <div className="relative h-full min-h-[180px] overflow-hidden rounded-xl border border-white/[0.06] bg-black/30 p-3">
      <div className="grid h-full grid-cols-3 grid-rows-3 gap-2">
        <div className="col-span-3 flex items-center gap-2 rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-emerald" />
          <span className="font-mono text-[10px] text-white/70">research-agent</span>
          <span className="ml-auto font-mono text-[10px] text-white/40">running 04:12</span>
        </div>
        {['Plan', 'Search', 'Synthesize', 'Verify', 'Draft', 'Deliver'].map((step, i) => {
          const done = i < 3
          const active = i === 3
          return (
            <div
              key={step}
              className={`relative overflow-hidden rounded-md border px-2 py-1.5 ${
                done
                  ? 'border-neon-emerald/30 bg-neon-emerald/10'
                  : active
                    ? 'border-neon-purple/40 bg-neon-purple/10'
                    : 'border-white/5 bg-white/[0.02]'
              }`}
            >
              <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
                step 0{i + 1}
              </div>
              <div className="text-[11px] text-white/80">{step}</div>
              {active && (
                <div className="absolute inset-x-0 bottom-0 h-0.5 overflow-hidden">
                  <div
                    className="h-full w-1/3"
                    style={{
                      background: 'linear-gradient(90deg, transparent, #A78BFA, transparent)',
                      animation: 'shoot 1.4s linear infinite',
                    }}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function StackVisual() {
  const items = ['TS', 'PY', 'GO', '◇', '✦']
  return (
    <div className="flex h-full items-center justify-center gap-3">
      {items.map((it, i) => (
        <div
          key={i}
          className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.04] font-mono text-sm text-white/80"
          style={{
            animation: `float-slow 4s ${i * 0.2}s ease-in-out infinite`,
          }}
        >
          {it}
        </div>
      ))}
    </div>
  )
}

function MemoryVisual() {
  return (
    <div className="relative h-full">
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative h-28 w-28">
          <span className="absolute inset-0 animate-ping rounded-full border border-neon-emerald/30" />
          <span
            className="absolute inset-2 animate-ping rounded-full border border-neon-purple/30"
            style={{ animationDelay: '0.4s' }}
          />
          <span
            className="absolute inset-4 animate-ping rounded-full border border-neon-blue/30"
            style={{ animationDelay: '0.8s' }}
          />
          <span className="absolute inset-0 grid place-items-center rounded-full bg-gradient-to-br from-neon-purple/30 to-neon-blue/30 backdrop-blur">
            <span className="font-display text-sm font-semibold tracking-tightest text-white">18ms</span>
          </span>
        </div>
      </div>
    </div>
  )
}

function TrustVisual() {
  return (
    <div className="flex h-full items-center gap-3">
      {['SOC 2', 'GDPR', 'HIPAA', 'ISO 27001'].map((badge, i) => (
        <div
          key={badge}
          className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] py-2.5"
          style={{
            animation: `fade-up 0.5s ${0.1 + i * 0.08}s cubic-bezier(0.16,1,0.3,1) both`,
          }}
        >
          <ShieldIcon />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
            {badge}
          </span>
        </div>
      ))}
    </div>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-neon-emerald">
      <path
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.4"
        d="M12 2 4 5v6c0 4.6 3.4 9 8 11 4.6-2 8-6.4 8-11V5l-8-3Z"
      />
      <path
        fill="currentColor"
        d="m10.5 13.5-2-2 1.1-1.1.9.9 3.4-3.4 1.1 1.1-4.5 4.5Z"
      />
    </svg>
  )
}
