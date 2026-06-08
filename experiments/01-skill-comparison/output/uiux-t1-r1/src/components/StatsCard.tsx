import { Icon } from './Icon'
import type { StatData } from '../types'

const accentMap: Record<string, { bg: string; iconBg: string; text: string }> = {
  blue: { bg: 'bg-blue-50', iconBg: 'bg-blue-600', text: 'text-blue-600' },
  teal: { bg: 'bg-teal-50', iconBg: 'bg-teal-600', text: 'text-teal-600' },
  amber: { bg: 'bg-amber-50', iconBg: 'bg-amber-500', text: 'text-amber-600' },
  green: { bg: 'bg-green-50', iconBg: 'bg-green-500', text: 'text-green-600' },
}

export function StatsCard({ stat }: { stat: StatData }) {
  const accent = accentMap[stat.accent] || accentMap.blue
  const isPositive = stat.change >= 0

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-5 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{stat.title}</p>
          <p className="text-2xl font-semibold text-slate-800">{stat.value}</p>
        </div>
        <div className={`w-9 h-9 rounded-lg ${accent.bg} flex items-center justify-center`}>
          <Icon name={stat.icon} size={18} className={accent.text} />
        </div>
      </div>
      <div className="flex items-center gap-1.5 mt-3">
        <Icon
          name={isPositive ? 'arrow-up' : 'arrow-down'}
          size={12}
          className={isPositive ? 'text-green-500' : 'text-red-500'}
        />
        <span className={`text-xs font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {Math.abs(stat.change)}%
        </span>
        <span className="text-xs text-slate-400">{stat.changeLabel}</span>
      </div>
    </div>
  )
}
