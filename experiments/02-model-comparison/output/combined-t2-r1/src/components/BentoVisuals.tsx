import { motion } from 'motion/react'

/* ---- Visuals used by Bento.tsx. Real content, not generic placeholders. ---- */

export function SpeedVisual() {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-xl border border-white/[0.07] bg-black/40 p-4">
      <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.18em] text-zinc-500">
        <span>latency · p50 / p99</span>
        <span className="text-emerald-300">healthy</span>
      </div>
      <svg viewBox="0 0 400 120" className="mt-2 h-[110px] w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="speedfill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="speedline" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          d="M0 95 C 40 60, 80 50, 120 65 S 200 90, 240 70 320 35, 360 50 400 30, 400 30"
          fill="none"
          stroke="url(#speedline)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.path
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          d="M0 95 C 40 60, 80 50, 120 65 S 200 90, 240 70 320 35, 360 50 400 30, 400 30 L 400 120 L 0 120 Z"
          fill="url(#speedfill)"
        />
      </svg>
      <div className="mt-2 flex items-end justify-between">
        <div>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-zinc-500">p50</div>
          <div className="mt-0.5 text-[22px] font-medium tracking-tight text-zinc-100">82<span className="text-zinc-500 text-sm">ms</span></div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-zinc-500">p99</div>
          <div className="mt-0.5 text-[22px] font-medium tracking-tight text-zinc-100">146<span className="text-zinc-500 text-sm">ms</span></div>
        </div>
      </div>
    </div>
  )
}

export function PlanVisual() {
  const steps = [
    { id: '01', label: 'parse intent', state: 'done' },
    { id: '02', label: 'retrieve context', state: 'done' },
    { id: '03', label: 'draft plan', state: 'active' },
    { id: '04', label: 'tool call: search', state: 'queued' },
    { id: '05', label: 'verify & reply', state: 'queued' },
  ] as const
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/[0.07] bg-black/40 p-3">
      <div className="flex items-center justify-between px-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-zinc-500">
        <span>plan · run 4821</span>
        <span>3 / 5</span>
      </div>
      <ol className="mt-3 space-y-1.5">
        {steps.map((s, i) => (
          <motion.li
            key={s.id}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5 rounded-md border border-white/[0.04] bg-white/[0.015] px-2.5 py-1.5"
          >
            <span className="font-mono text-[10px] text-zinc-600">{s.id}</span>
            <span className="flex-1 text-[12.5px] text-zinc-300">{s.label}</span>
            {s.state === 'done' && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />}
            {s.state === 'active' && (
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-300 pulse-ring" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
              </span>
            )}
            {s.state === 'queued' && <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />}
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

export function LiveTraceVisual() {
  return (
    <div className="relative h-32 w-full overflow-hidden rounded-xl border border-white/[0.07] bg-black/40 p-3 font-mono text-[11px]">
      <div className="flex items-center justify-between text-[10.5px] uppercase tracking-[0.18em] text-zinc-500">
        <span>trace · stream</span>
        <span className="text-violet-300">live</span>
      </div>
      <div className="mt-2 space-y-1 text-zinc-400">
        <Line color="zinc-500" t="12:04:18" body="tool.search('refund policy')" />
        <Line color="violet-300" t="12:04:18" body="model.gpt-aether-mini · 812 tok" />
        <Line color="zinc-400" t="12:04:19" body="retriever.query → 4 chunks" />
        <Line color="cyan-300" t="12:04:19" body="verify.span ✓" />
        <Line color="zinc-600" t="12:04:20" body="await human_review..." />
      </div>
    </div>
  )
}

function Line({ t, body, color }: { t: string; body: string; color: string }) {
  const colorMap: Record<string, string> = {
    'zinc-500': 'text-zinc-500',
    'zinc-600': 'text-zinc-600',
    'violet-300': 'text-violet-300',
    'cyan-300': 'text-cyan-300',
    'zinc-400': 'text-zinc-400',
  }
  return (
    <div className="flex items-center gap-2">
      <span className="text-zinc-600">{t}</span>
      <span className={colorMap[color] ?? 'text-zinc-500'}>·</span>
      <span className="truncate text-zinc-300">{body}</span>
    </div>
  )
}

export function CodeVisual() {
  return (
    <div className="relative h-36 w-full overflow-hidden rounded-xl border border-white/[0.07] bg-black/55 p-4 font-mono text-[11.5px]">
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-zinc-700" />
        <span className="h-2 w-2 rounded-full bg-zinc-700" />
        <span className="h-2 w-2 rounded-full bg-zinc-700" />
        <span className="ml-3 text-[10.5px] uppercase tracking-[0.18em] text-zinc-500">agent.ts</span>
      </div>
      <pre className="mt-3 leading-[1.65]">
        <code>
          <span className="text-zinc-500">import</span> <span className="text-zinc-200">{'{ aether }'}</span> <span className="text-zinc-500">from</span> <span className="text-emerald-300">"@aether/sdk"</span>{'\n'}
          <span className="text-zinc-500">const</span> <span className="text-zinc-200">agent</span> = <span className="text-zinc-200">aether</span>.<span className="text-violet-300">agent</span>({'{'}
          {'\n'}  <span className="text-cyan-300">model</span>: <span className="text-emerald-300">"aether-mini"</span>,{'\n'}
          {'  '}<span className="text-cyan-300">tools</span>: [search, jira, github],{'\n'}
          {'}'}){'\n'}
          <span className="text-zinc-500">await</span> <span className="text-zinc-200">agent</span>.<span className="text-violet-300">run</span>(<span className="text-emerald-300">"triage new tickets"</span>)
        </code>
      </pre>
    </div>
  )
}

export function LoopVisual() {
  return (
    <div className="relative flex h-32 w-full items-center justify-center overflow-hidden rounded-xl border border-white/[0.07] bg-black/40">
      <svg viewBox="0 0 120 120" className="h-28 w-28">
        <defs>
          <linearGradient id="loop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <motion.circle
          cx="60" cy="60" r="42"
          fill="none"
          stroke="url(#loop)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 10"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '60px 60px' }}
        />
        <circle cx="60" cy="18" r="3" fill="#c4b5fd" />
        <circle cx="60" cy="102" r="3" fill="#22D3EE" />
        <text x="60" y="56" textAnchor="middle" fontSize="9" fontFamily="ui-monospace, monospace" fill="#a1a1aa" letterSpacing="2">EVAL</text>
        <text x="60" y="68" textAnchor="middle" fontSize="9" fontFamily="ui-monospace, monospace" fill="#a1a1aa" letterSpacing="2">·TUNE·</text>
      </svg>
    </div>
  )
}

export function ShieldVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/[0.07] bg-black/40 p-4">
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
        {[
          { k: 'us-east', c: '●' },
          { k: 'us-west', c: '●' },
          { k: 'eu-west', c: '●' },
          { k: 'eu-central', c: '●' },
          { k: 'ap-south', c: '●' },
          { k: 'ap-ne', c: '●' },
          { k: 'sa-east', c: '●' },
          { k: 'af-south', c: '●' },
          { k: 'me', c: '●' },
          { k: 'ca', c: '●' },
          { k: 'in', c: '●' },
          { k: 'jp', c: '●' },
        ].map((r) => (
          <div
            key={r.k}
            className="flex items-center justify-between rounded-md border border-white/[0.05] bg-white/[0.02] px-2 py-1.5"
          >
            <span className="font-mono text-[10.5px] text-zinc-500">{r.k}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_6px_rgba(16,185,129,0.7)]" />
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.18em] text-zinc-500">
        <span>data residency · 14 regions</span>
        <span className="text-emerald-300">all clear</span>
      </div>
    </div>
  )
}
