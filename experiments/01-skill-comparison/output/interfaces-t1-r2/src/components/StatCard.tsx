import { Icon } from './Icon'

interface StatCardProps {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: 'trending-up' | 'trending-down' | 'users' | 'pipeline'
  accent?: 'default' | 'green' | 'amber' | 'teal'
}

const accentStyles: Record<string, { bg: string; text: string }> = {
  default: { bg: 'bg-accent-light', text: 'text-accent' },
  green: { bg: 'bg-success-light', text: 'text-success' },
  amber: { bg: 'bg-warning-light', text: 'text-warning' },
  teal: { bg: 'bg-teal-light', text: 'text-teal' },
}

export function StatCard({ title, value, change, trend, icon, accent = 'default' }: StatCardProps) {
  const colors = accentStyles[accent]

  return (
    <div className="bg-white rounded-[8px] border border-slate-200 p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
          {title}
        </p>
        <div className={`w-8 h-8 rounded-[6px] ${colors.bg} flex items-center justify-center`}>
          <Icon name={icon} size={16} className={colors.text} />
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-slate-800 tracking-tight">
          {value}
        </span>
        <span
          className={[
            'inline-flex items-center gap-0.5 text-xs font-semibold px-1.5 py-0.5 rounded-[4px]',
            trend === 'up' ? 'text-success bg-success-light' : 'text-danger bg-danger-light',
          ].join(' ')}
        >
          <Icon name={trend === 'up' ? 'trending-up' : 'trending-down'} size={12} />
          {change}
        </span>
      </div>
    </div>
  )
}
