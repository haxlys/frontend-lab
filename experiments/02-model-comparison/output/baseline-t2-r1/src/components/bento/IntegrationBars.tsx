import { useEffect, useState } from 'react'

const STACK = [
  { name: 'Gmail', pct: 92, color: '#8B5CF6' },
  { name: 'Notion', pct: 78, color: '#3B82F6' },
  { name: 'GitHub', pct: 64, color: '#10B981' },
  { name: 'Linear', pct: 51, color: '#F59E0B' },
  { name: 'Slack', pct: 38, color: '#EC4899' },
]

export default function IntegrationBars() {
  const [animated, setAnimated] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative w-full h-full flex flex-col justify-center gap-2.5">
      {STACK.map((s) => (
        <div key={s.name} className="flex items-center gap-3 group">
          <span className="text-[11px] font-mono text-white/50 w-14 group-hover:text-white transition-colors">
            {s.name}
          </span>
          <div className="flex-1 h-7 rounded-md bg-white/[0.03] overflow-hidden relative">
            <div
              className="h-full rounded-md relative overflow-hidden"
              style={{
                width: animated ? `${s.pct}%` : '0%',
                background: `linear-gradient(90deg, ${s.color}30, ${s.color})`,
                transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s linear infinite',
                }}
              />
            </div>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-mono text-white/70">
              {s.pct}%
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
