import type { StatCard } from '../data/types'

interface Props {
  stats: StatCard[]
}

export default function StatCards({ stats }: Props) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white border border-slate-200 rounded-card p-4 lg:p-5 hover:shadow-sm transition-shadow"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
              {stat.label}
            </span>
            <span className="text-lg">{stat.icon}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold text-slate-800">{stat.value}</span>
            <span
              className={[
                'text-xs font-medium',
                stat.changeType === 'up' ? 'text-success' : 'text-danger',
              ].join(' ')}
            >
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
