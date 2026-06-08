interface StatCardProps {
  title: string
  value: string
  change: string
  icon: React.ReactNode
  positive: boolean
}

export default function StatCard({ title, value, change, icon, positive }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4 transition-shadow hover:shadow-md">
      <div
        className="h-12 w-12 rounded-lg flex items-center justify-center shrink-0"
        style={{
          backgroundColor: positive ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.12)',
          color: positive ? '#16a34a' : '#dc2626',
        }}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-0.5">{value}</p>
        <p className={`text-xs font-medium mt-1 ${positive ? 'text-green-600' : 'text-red-600'}`}>
          {positive ? '↑' : '↓'} {change} from last month
        </p>
      </div>
    </div>
  )
}
