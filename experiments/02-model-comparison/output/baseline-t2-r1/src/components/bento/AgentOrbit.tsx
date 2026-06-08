import { useEffect, useState } from 'react'

const ROLES = [
  { label: 'Coder', x: 20, y: 30, color: '#8B5CF6', size: 28 },
  { label: 'Reviewer', x: 70, y: 25, color: '#3B82F6', size: 24 },
  { label: 'Planner', x: 45, y: 55, color: '#10B981', size: 30 },
  { label: 'Tester', x: 25, y: 75, color: '#F59E0B', size: 22 },
  { label: 'Deployer', x: 75, y: 78, color: '#EC4899', size: 26 },
]

export default function AgentOrbit() {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 50)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative w-full h-full min-h-[220px] flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-neon-purple/30 to-neon-blue/30 blur-2xl animate-pulse-glow" />
      </div>
      <div className="relative w-32 h-32 rounded-full border border-white/10">
        <div className="absolute inset-2 rounded-full border border-white/5" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon-purple via-neon-blue to-neon-green flex items-center justify-center font-display text-lg font-bold shadow-neon-purple">
            N
          </div>
        </div>

        {ROLES.map((r, i) => {
          const angle = (i / ROLES.length) * Math.PI * 2 + tick * 0.01
          const radius = 80
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          return (
            <div
              key={r.label}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
              style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
            >
              <div
                className="rounded-full flex items-center justify-center text-[9px] font-mono font-medium border backdrop-blur-md"
                style={{
                  width: r.size,
                  height: r.size,
                  background: `${r.color}20`,
                  borderColor: `${r.color}80`,
                  color: r.color,
                  boxShadow: `0 0 20px ${r.color}40`,
                }}
              >
                {r.label[0]}
              </div>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[9px] font-mono text-white/60 whitespace-nowrap">
                {r.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
