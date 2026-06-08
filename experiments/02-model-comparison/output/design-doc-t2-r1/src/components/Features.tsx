import { usePointerTracker } from '../hooks/usePointerTracker'

type BentoSize = 'sm' | 'md' | 'lg' | 'xl'

type BentoProps = {
  size: BentoSize
  title: string
  description: string
  icon: React.ReactNode
  accent: 'purple' | 'blue' | 'emerald' | 'multi'
  visual: React.ReactNode
  className?: string
  delay?: 1 | 2 | 3 | 4 | 5 | 6
}

const sizeMap: Record<BentoSize, string> = {
  sm: 'md:col-span-1',
  md: 'md:col-span-2',
  lg: 'md:col-span-2',
  xl: 'md:col-span-3',
}

const accentMap = {
  purple: 'from-neon-purple/30 via-neon-purple/10 to-transparent',
  blue: 'from-neon-blue/30 via-neon-blue/10 to-transparent',
  emerald: 'from-neon-emerald/30 via-neon-emerald/10 to-transparent',
  multi: 'from-neon-purple/25 via-neon-blue/15 to-neon-emerald/25',
}

export function Bento({
  size,
  title,
  description,
  icon,
  accent,
  visual,
  className = '',
  delay = 1,
}: BentoProps) {
  const ref = usePointerTracker<HTMLDivElement>()

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`)
    el.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      data-reveal
      className={`reveal in-view reveal-delay-${delay} bento glow-border group min-h-[260px] p-6 sm:p-7 ${sizeMap[size]} ${className}`}
    >
      {/* Accent gradient blob */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${accentMap[accent]} blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white/90">
            {icon}
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/35">
            0{Math.floor(Math.random() * 9) + 1}
          </span>
        </div>

        <div className="mt-5 flex-1">{visual}</div>

        <div className="mt-6">
          <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {title}
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-white/55">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ────────── Micro-interaction visuals ────────── */

function SpeedVisual() {
  return (
    <div className="flex h-full w-full items-end gap-1.5">
      {[28, 64, 42, 88, 54, 96, 70, 100, 58, 82, 46, 90, 38, 72, 60].map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-gradient-to-t from-neon-purple/40 to-neon-blue/80"
          style={{
            height: `${h}%`,
            animation: `barRise 1.4s ease-out ${i * 60}ms both`,
          }}
        />
      ))}
      <style>{`@keyframes barRise { from { transform: scaleY(0); transform-origin: bottom; } to { transform: scaleY(1); } }`}</style>
    </div>
  )
}

function AccuracyVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <svg viewBox="0 0 200 120" className="w-full">
        <defs>
          <linearGradient id="acc-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <linearGradient id="acc-grad-soft" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(139,92,246,0.0)" />
            <stop offset="100%" stopColor="rgba(16,185,129,0.4)" />
          </linearGradient>
        </defs>
        {/* Grid */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="0"
            x2="200"
            y1={20 + i * 20}
            y2={20 + i * 20}
            stroke="rgba(255,255,255,0.05)"
            strokeDasharray="2 4"
          />
        ))}
        <path
          d="M0 90 C 30 80, 50 60, 80 50 S 130 35, 170 20 L 200 14"
          fill="none"
          stroke="url(#acc-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M0 90 C 30 80, 50 60, 80 50 S 130 35, 170 20 L 200 14 L 200 120 L 0 120 Z"
          fill="url(#acc-grad-soft)"
          opacity="0.4"
        />
        <circle cx="170" cy="20" r="4" fill="#10B981">
          <animate
            attributeName="r"
            values="3;6;3"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  )
}

function AutomationVisual() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative h-32 w-32">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-3 rounded-full border border-dashed border-white/15" />
          <div className="absolute inset-6 rounded-full border border-white/20" />
          <div className="absolute inset-0 animate-orbit">
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-neon-purple shadow-neon-purple" />
          </div>
          <div className="absolute inset-0 animate-orbit [animation-delay:-6s] [animation-duration:24s]">
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-neon-blue shadow-neon-blue" />
          </div>
          <div className="absolute inset-0 animate-orbit [animation-delay:-12s] [animation-duration:30s]">
            <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-neon-emerald shadow-neon-emerald" />
          </div>
          <div className="absolute inset-0 grid place-items-center">
            <div className="font-mono text-[10px] uppercase tracking-widest text-white/60">
              agent
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MemoryVisual() {
  return (
    <div className="flex h-full w-full flex-col gap-2">
      {[
        { label: 'Project context', pct: 92, color: 'from-neon-purple to-neon-blue' },
        { label: 'Past sessions', pct: 78, color: 'from-neon-blue to-neon-emerald' },
        { label: 'Team knowledge', pct: 64, color: 'from-neon-emerald to-neon-purple' },
      ].map((row) => (
        <div key={row.label} className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-[11px] text-white/55">
            <span className="font-mono uppercase tracking-widest">{row.label}</span>
            <span className="font-mono">{row.pct}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${row.color} transition-all duration-700`}
              style={{ width: `${row.pct}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

function CodeVisual() {
  return (
    <div className="font-mono text-[11px] leading-relaxed text-white/70">
      <div className="flex items-center gap-1.5 border-b border-white/5 pb-2 text-white/40">
        <span className="h-2 w-2 rounded-full bg-neon-purple" />
        <span>main.tsx</span>
        <span className="ml-auto text-white/30">live</span>
      </div>
      <pre className="mt-2 overflow-hidden">
        <code>
          <span className="text-neon-purple">const</span>{' '}
          <span className="text-white">agent</span> ={' '}
          <span className="text-neon-blue">new</span>{' '}
          <span className="text-neon-emerald">Neural</span>
          {`({`}
          {'\n  '}model: <span className="text-neon-emerald">'opus-3'</span>,
          {'\n  '}tools: [<span className="text-neon-emerald">'search'</span>,{' '}
          <span className="text-neon-emerald">'code'</span>,{' '}
          <span className="text-neon-emerald">'deploy'</span>],
          {'\n  '}
          {`});`}
          {'\n'}
          <span className="text-white/40">→ shipped in 12s ✦</span>
        </code>
      </pre>
    </div>
  )
}

function GlobalVisual() {
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 240 120" className="h-full w-full">
        <defs>
          <radialGradient id="globe-grad" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="rgba(139,92,246,0.5)" />
            <stop offset="100%" stopColor="rgba(139,92,246,0)" />
          </radialGradient>
        </defs>
        {[
          [40, 40],
          [80, 30],
          [140, 50],
          [200, 38],
          [60, 80],
          [180, 78],
          [120, 60],
          [220, 90],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="3" fill="#8B5CF6">
              <animate
                attributeName="opacity"
                values="0.3;1;0.3"
                dur={`${2 + (i % 3)}s`}
                repeatCount="indefinite"
                begin={`${i * 0.2}s`}
              />
            </circle>
          </g>
        ))}
        {[
          [40, 40, 140, 50],
          [80, 30, 180, 78],
          [60, 80, 200, 38],
          [120, 60, 220, 90],
          [80, 30, 140, 50],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="rgba(59,130,246,0.35)"
            strokeWidth="0.8"
          />
        ))}
      </svg>
    </div>
  )
}

function ShieldVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative">
        <svg viewBox="0 0 64 64" className="h-24 w-24">
          <defs>
            <linearGradient id="shield-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          <path
            d="M32 4 L56 14 V32 C56 46 44 56 32 60 C20 56 8 46 8 32 V14 Z"
            fill="url(#shield-g)"
            opacity="0.18"
          />
          <path
            d="M32 4 L56 14 V32 C56 46 44 56 32 60 C20 56 8 46 8 32 V14 Z"
            fill="none"
            stroke="url(#shield-g)"
            strokeWidth="2"
          />
          <path
            d="M22 32 L29 39 L43 25"
            fill="none"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0 60;60 60"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </div>
  )
}

/* ────────── Public feature export ────────── */

export function Features() {
  return (
    <section id="features" className="relative isolate py-28 sm:py-40">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg mask-radial-fade opacity-30" />
        <div className="absolute left-1/2 top-0 h-96 w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.16),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span
            data-reveal
            className="reveal in-view inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-white/60"
          >
            <span className="h-1 w-1 rounded-full bg-neon-blue" />
            Capabilities
          </span>
          <h2
            data-reveal
            className="reveal in-view reveal-delay-1 mt-6 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
          >
            One platform.{' '}
            <span className="text-gradient-neon">Every model.</span> Endless
            leverage.
          </h2>
          <p
            data-reveal
            className="reveal in-view reveal-delay-2 mt-5 text-white/60 sm:text-lg"
          >
            Neural runs the best frontier models side-by-side, routes every task
            to the optimal one, and gives your team a single surface to ship
            with AI.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:auto-rows-[minmax(280px,auto)]">
          <Bento
            size="xl"
            accent="purple"
            delay={1}
            title="Realtime reasoning at the speed of thought"
            description="Sub-50ms inference with a streaming-first architecture. Every keystroke, every tool call — instant."
            icon={<BoltIcon />}
            visual={
              <div className="flex h-full flex-col justify-end">
                <SpeedVisual />
                <div className="mt-4 flex items-center justify-between font-mono text-xs text-white/45">
                  <span>p50 · 42ms</span>
                  <span className="text-neon-emerald">↑ 8.2× faster</span>
                </div>
              </div>
            }
            className="md:row-span-2"
          />

          <Bento
            size="md"
            accent="blue"
            delay={2}
            title="Stateful memory"
            description="Recalls project context, decisions, and past sessions — so the model picks up where you left off."
            icon={<BrainIcon />}
            visual={
              <div className="flex h-full items-end">
                <MemoryVisual />
              </div>
            }
          />

          <Bento
            size="md"
            accent="emerald"
            delay={3}
            title="99.4% task accuracy"
            description="Routed ensembles of frontier models score higher than any single provider on internal and external benchmarks."
            icon={<TargetIcon />}
            visual={<AccuracyVisual />}
          />

          <Bento
            size="sm"
            accent="multi"
            delay={4}
            title="Agentic workflows"
            description="Multi-step automations that actually finish the job."
            icon={<WorkflowIcon />}
            visual={
              <div className="flex h-full items-center">
                <AutomationVisual />
              </div>
            }
          />

          <Bento
            size="md"
            accent="purple"
            delay={5}
            title="Code that ships"
            description="From diff to deploy — Neural writes, reviews, and runs code in a sandboxed environment."
            icon={<CodeIcon />}
            visual={<CodeVisual />}
          />

          <Bento
            size="md"
            accent="blue"
            delay={6}
            title="Built for the globe"
            description="Edge-deployed across 38 regions with automatic failover and SOC 2 Type II."
            icon={<GlobeIcon />}
            visual={<GlobalVisual />}
          />

          <Bento
            size="md"
            accent="emerald"
            delay={3}
            title="Enterprise-grade security"
            description="Zero-retention mode, customer-managed keys, and audit logs for every request."
            icon={<ShieldIcon />}
            visual={<ShieldVisual />}
          />
        </div>
      </div>
    </section>
  )
}

/* ────────── Icons ────────── */

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-5 w-5',
}

function BoltIcon() {
  return (
    <svg {...iconProps}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  )
}
function BrainIcon() {
  return (
    <svg {...iconProps}>
      <path d="M9 4a3 3 0 00-3 3v0a3 3 0 00-3 3v2a3 3 0 003 3v0a3 3 0 003 3M15 4a3 3 0 013 3v0a3 3 0 013 3v2a3 3 0 01-3 3v0a3 3 0 01-3 3M9 4v16M15 4v16" />
    </svg>
  )
}
function TargetIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  )
}
function WorkflowIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="3" width="6" height="6" rx="1" />
      <rect x="9" y="15" width="6" height="6" rx="1" />
      <path d="M6 9v3a3 3 0 003 3M18 9v3a3 3 0 01-3 3" />
    </svg>
  )
}
function CodeIcon() {
  return (
    <svg {...iconProps}>
      <path d="M8 6l-5 6 5 6M16 6l5 6-5 6M14 4l-4 16" />
    </svg>
  )
}
function GlobeIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </svg>
  )
}
function ShieldIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 3l8 4v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}
