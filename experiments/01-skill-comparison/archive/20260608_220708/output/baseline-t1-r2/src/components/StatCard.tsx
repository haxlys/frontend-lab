type StatCardProps = {
  title: string
  value: string
  change: string
  changeType: 'up' | 'down'
  icon: React.ReactNode
}

export default function StatCard({ title, value, change, changeType, icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start justify-between">
      <div className="min-w-0">
        <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{title}</p>
        <p className="text-2xl font-bold mt-1 truncate">{value}</p>
        <p className={`text-sm mt-1 font-medium ${changeType === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
          {changeType === 'up' ? '↑' : '↓'} {change} from last month
        </p>
      </div>
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 ml-3">
        {icon}
      </div>
    </div>
  )
}
