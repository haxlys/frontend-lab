import { useEffect, useState } from 'react'

export default function SpeedMeter() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setProgress(94), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative w-full h-full flex flex-col justify-between">
      <div>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-5xl sm:text-6xl font-medium text-white tracking-tight">
            {progress}
          </span>
          <span className="text-white/40 text-lg font-mono">ms</span>
        </div>
        <p className="text-sm text-white/50 mt-1">median inference latency</p>
      </div>

      <div className="space-y-2.5">
        {['Reasoning', 'Embedding', 'Generation', 'Routing'].map((label, i) => (
          <div key={label} className="flex items-center gap-3">
            <span className="text-[11px] text-white/40 w-20 font-mono uppercase tracking-wider">
              {label}
            </span>
            <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-neon-purple via-neon-blue to-neon-green rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${progress - i * 4}%`,
                  transitionDelay: `${i * 100}ms`,
                }}
              />
            </div>
            <span className="text-[11px] text-white/60 font-mono w-10 text-right">
              {progress - i * 4}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
