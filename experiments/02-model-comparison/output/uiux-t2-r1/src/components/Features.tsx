import { type ReactNode, useState } from 'react';
import { useInView } from '../hooks/useInView';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function BentoCard({ children, className = '', delay = 0 }: BentoCardProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionProperty: 'transform, opacity',
        transitionDuration: '900ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        opacity: inView ? 1 : 0,
      }}
      className={[
        'group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 sm:p-7',
        'transition-colors duration-500 hover:border-white/15',
        'before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-neon-violet/0 before:via-neon-blue/0 before:to-neon-green/0 before:opacity-0 before:transition-opacity before:duration-700 hover:before:from-neon-violet/10 hover:before:via-neon-blue/5 hover:before:to-neon-green/5 hover:before:opacity-100',
        'backdrop-blur-sm',
        className,
      ].join(' ')}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.04]" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

function SpeedDemo() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="mt-4 space-y-2">
      {[
        { label: 'Realtime stream', value: 12, color: 'from-emerald-400 to-cyan-400' },
        { label: 'Batch reasoning', value: 74, color: 'from-violet-400 to-blue-400' },
        { label: 'Deep research', value: 96, color: 'from-fuchsia-400 to-violet-400' },
      ].map((row) => (
        <div
          key={row.label}
          className="group/row flex items-center gap-3"
        >
          <span className="w-32 shrink-0 font-mono text-[11px] uppercase tracking-wider text-white/50">
            {row.label}
          </span>
          <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-white/[0.05]">
            <div
              className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${row.color}`}
              style={{
                width: `${row.value}%`,
                transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)] bg-[length:200%_100%] animate-shimmer" />
          </div>
          <span className="w-12 text-right font-mono text-xs tabular-nums text-white/70">
            {row.value}ms
          </span>
        </div>
      ))}
      <button
        onClick={() => {
          setProgress(0);
          requestAnimationFrame(() => setProgress(100));
        }}
        className="mt-2 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-white/50 transition-colors hover:text-white"
      >
        <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse-glow" />
        Run benchmark
      </button>
    </div>
  );
}

function AccuracyOrb() {
  return (
    <div className="relative mt-4 grid h-40 place-items-center">
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative h-32 w-32">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-violet/30 to-neon-blue/20 blur-2xl animate-pulse-glow" />
          <div className="absolute inset-2 rounded-full border border-white/10" />
          <div className="absolute inset-6 rounded-full border border-white/15" />
          <div className="absolute inset-10 rounded-full bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur animate-float" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="font-display text-2xl font-semibold tracking-tight">99.7%</div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-white/50">accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomationFlow() {
  return (
    <div className="mt-4 space-y-2">
      {[
        { name: 'Ingest', state: 'done' },
        { name: 'Analyze', state: 'done' },
        { name: 'Generate', state: 'active' },
        { name: 'Deploy', state: 'idle' },
      ].map((step, i) => (
        <div key={step.name} className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2">
          <span
            className={[
              'grid h-5 w-5 place-items-center rounded-full text-[10px] font-mono',
              step.state === 'done' && 'bg-emerald-400/20 text-emerald-300',
              step.state === 'active' && 'bg-neon-violet/20 text-violet-300',
              step.state === 'idle' && 'bg-white/5 text-white/40',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {step.state === 'done' ? '✓' : i + 1}
          </span>
          <span className="flex-1 text-xs text-white/80">{step.name}</span>
          {step.state === 'active' && (
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-violet-400" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-violet-400" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-violet-300">running</span>
            </span>
          )}
          {step.state === 'done' && (
            <span className="font-mono text-[10px] text-white/40">0.{1 + i}s</span>
          )}
        </div>
      ))}
    </div>
  );
}

function Terminal() {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/60">
      <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/[0.02] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/60" />
        <span className="h-2 w-2 rounded-full bg-amber-400/60" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/60" />
        <span className="ml-2 font-mono text-[10px] text-white/40">aurora · reasoning</span>
      </div>
      <div className="space-y-1 p-3 font-mono text-[11px] leading-relaxed">
        <p>
          <span className="text-violet-400">aurora</span>
          <span className="text-white/40"> ▸ </span>
          <span className="text-white/85">plan a launch for our AI tool</span>
        </p>
        <p className="text-white/55">
          <span className="text-emerald-400">●</span> analyzing 142 sources…
        </p>
        <p className="text-white/55">
          <span className="text-emerald-400">●</span> drafting 6-week rollout…
        </p>
        <p className="text-white/85">
          <span className="text-blue-400">↳</span> generated timeline + 14 tasks
        </p>
        <p>
          <span className="text-violet-400 animate-blink">▌</span>
        </p>
      </div>
    </div>
  );
}

function MemoryGraph() {
  return (
    <div className="relative mt-4 h-44 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/5 to-blue-500/5">
      <svg viewBox="0 0 320 160" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="nodeG" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="linkG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {[
          [40, 40], [120, 30], [220, 50], [290, 30],
          [60, 110], [150, 130], [250, 120],
          [100, 80], [200, 90], [40, 130], [280, 130], [170, 70],
        ].map(([cx, cy], i, arr) => (
          <g key={i}>
            {arr.slice(i + 1).map(([x2, y2], j) => {
              const d = Math.hypot((cx ?? 0) - (x2 ?? 0), (cy ?? 0) - (y2 ?? 0));
              if (d > 110) return null;
              return (
                <line
                  key={j}
                  x1={cx}
                  y1={cy}
                  x2={x2}
                  y2={y2}
                  stroke="url(#linkG)"
                  strokeWidth="0.8"
                />
              );
            })}
            <circle cx={cx} cy={cy} r="14" fill="url(#nodeG)" />
            <circle cx={cx} cy={cy} r="3" fill="#fff" />
          </g>
        ))}
      </svg>
      <div className="absolute bottom-2 left-3 font-mono text-[10px] uppercase tracking-widest text-white/40">
        persistent context graph
      </div>
    </div>
  );
}

function IntegrationsGrid() {
  const items = [
    { label: 'GitHub', short: 'GH' },
    { label: 'Slack', short: 'SL' },
    { label: 'Notion', short: 'NO' },
    { label: 'Linear', short: 'LI' },
    { label: 'Figma', short: 'FG' },
    { label: 'Drive', short: 'DR' },
    { label: 'Web', short: 'WB' },
    { label: 'API', short: 'AP' },
  ];
  return (
    <div className="mt-4 grid grid-cols-4 gap-2">
      {items.map((it) => (
        <div
          key={it.label}
          className="group/tile relative aspect-square overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.02] transition-colors duration-300 hover:border-neon-violet/40 hover:bg-neon-violet/10"
        >
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-mono text-[10px] font-semibold tracking-widest text-white/50 transition-colors group-hover/tile:text-white">
              {it.short}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionHeader() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="mx-auto max-w-3xl text-center"
      style={{
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        opacity: inView ? 1 : 0,
        transition: 'all 900ms cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-neon-violet">
        — capabilities
      </p>
      <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl">
        Built for the <span className="text-gradient-neon">next decade</span> of work.
      </h2>
      <p className="mt-4 text-pretty text-white/55 sm:text-lg">
        Six primitives. One coherent surface. Designed to disappear once you start shipping.
      </p>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-950 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-6 md:gap-5 lg:gap-6">
          {/* Speed — wide */}
          <BentoCard className="sm:col-span-6 lg:col-span-4" delay={0}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-300">01 — speed</p>
                <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-white sm:text-3xl">
                  Sub-second <span className="text-gradient-neon">reasoning</span>.
                </h3>
                <p className="mt-2 max-w-md text-sm text-white/55">
                  A custom inference fabric tuned for streaming, planning, and tool use — without the wait.
                </p>
              </div>
              <div className="hidden h-10 w-10 shrink-0 place-items-center rounded-xl border border-emerald-400/20 bg-emerald-400/5 sm:grid">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>
              </div>
            </div>
            <SpeedDemo />
          </BentoCard>

          {/* Accuracy — tall */}
          <BentoCard className="sm:col-span-3 lg:col-span-2 lg:row-span-2" delay={100}>
            <div className="flex h-full flex-col">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet-300">02 — accuracy</p>
                <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-white sm:text-3xl">
                  Hallucinations, <span className="text-gradient-neon">erased</span>.
                </h3>
                <p className="mt-2 text-sm text-white/55">
                  Verifier models cross-check every claim against grounded sources.
                </p>
              </div>
              <AccuracyOrb />
              <div className="mt-auto grid grid-cols-3 gap-2 border-t border-white/[0.06] pt-4">
                {[
                  { v: '99.7%', l: 'fact' },
                  { v: '0.3%', l: 'hallu.' },
                  { v: 'A+', l: 'grade' },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-lg font-semibold text-white">{s.v}</div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-white/40">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Automation */}
          <BentoCard className="sm:col-span-3 lg:col-span-2" delay={180}>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue-300">03 — automation</p>
            <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-white sm:text-3xl">
              End-to-end <span className="text-gradient-neon">pipelines</span>.
            </h3>
            <AutomationFlow />
          </BentoCard>

          {/* Terminal — wide */}
          <BentoCard className="sm:col-span-6 lg:col-span-3" delay={260}>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fuchsia-300">04 — interface</p>
            <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-white sm:text-3xl">
              A console that <span className="text-gradient-neon">feels alive</span>.
            </h3>
            <Terminal />
          </BentoCard>

          {/* Memory */}
          <BentoCard className="sm:col-span-3 lg:col-span-2" delay={340}>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300">05 — memory</p>
            <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-white sm:text-3xl">
              Persistent <span className="text-gradient-neon">context</span>.
            </h3>
            <MemoryGraph />
          </BentoCard>

          {/* Integrations */}
          <BentoCard className="sm:col-span-3 lg:col-span-1" delay={420}>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-amber-300">06 — connect</p>
            <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-white">
              <span className="text-gradient-neon">+40</span> tools
            </h3>
            <p className="mt-1 text-xs text-white/55">Your stack, fluent.</p>
            <IntegrationsGrid />
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
