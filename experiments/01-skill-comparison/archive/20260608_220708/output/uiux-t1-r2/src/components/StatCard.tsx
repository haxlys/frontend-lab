interface StatCardProps {
  title: string
  value: string
  change: string
  changeType: 'up' | 'down'
  icon: React.ReactNode
  accent: string
}

export function StatCard({ title, value, change, changeType, icon, accent }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase">
          {title}
        </span>
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${accent}15`, color: accent }}
        >
          {icon}
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</div>
      <div className="flex items-center gap-1 text-sm">
        <span className={changeType === 'up' ? 'text-emerald-500' : 'text-red-400'}>
          {changeType === 'up' ? '↑' : '↓'} {change}
        </span>
        <span className="text-gray-400 dark:text-gray-500 text-xs">vs last month</span>
      </div>
    </div>
  )
}
