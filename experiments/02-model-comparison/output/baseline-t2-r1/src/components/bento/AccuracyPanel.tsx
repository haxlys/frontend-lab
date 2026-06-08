import { useEffect, useState } from 'react'

const SAMPLES = [
  { prompt: 'Summarize Q3 pipeline risk', score: 0.98, color: '#10B981' },
  { prompt: 'Draft investor update', score: 0.94, color: '#3B82F6' },
  { prompt: 'Cluster 12k support tickets', score: 0.91, color: '#8B5CF6' },
]

export default function AccuracyPanel() {
  const [val, setVal] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setVal(99.2), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative w-full h-full flex flex-col justify-between">
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle
              cx="18"
              cy="18"
              r="15.9"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="3"
            />
            <circle
              cx="18"
              cy="18"
              r="15.9"
              fill="none"
              stroke="url(#acc-grad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${(val / 100) * 100} 100`}
              style={{ transition: 'stroke-dasharray 1.5s ease-out' }}
            />
            <defs>
              <linearGradient id="acc-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-display text-lg font-medium text-white">
            {val}
            <span className="text-xs text-white/40">%</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-white">Verified accuracy</p>
          <p className="text-xs text-white/50 mt-0.5">
            across 2.4M evaluations
          </p>
        </div>
      </div>

      <div className="space-y-1.5">
        {SAMPLES.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 text-[11px] font-mono group"
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
            <span className="text-white/70 flex-1 truncate group-hover:text-white transition-colors">
              {s.prompt}
            </span>
            <span className="text-white/50">{(s.score * 100).toFixed(1)}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
