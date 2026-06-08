type Activity = {
  time: string
  user: string
  action: string
  status: 'completed' | 'pending' | 'failed'
}

const activities: Activity[] = [
  { time: '2 min ago', user: 'Alice Kim', action: 'Upgraded to Pro plan', status: 'completed' },
  { time: '18 min ago', user: 'James Park', action: 'Created new project', status: 'completed' },
  { time: '1 hour ago', user: 'Sarah Lee', action: 'Payment failed — retrying', status: 'failed' },
  { time: '3 hours ago', user: 'David Cho', action: 'Invited team members', status: 'completed' },
  { time: '5 hours ago', user: 'Emma Jeong', action: 'Subscription renewal', status: 'pending' },
  { time: '8 hours ago', user: 'Tommy Yoo', action: 'Exported report', status: 'completed' },
]

const statusStyles: Record<Activity['status'], string> = {
  completed: 'bg-green-100 text-green-700',
  pending: 'bg-amber-100 text-amber-700',
  failed: 'bg-red-100 text-red-700',
}

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100">
        <h3 className="text-base font-semibold text-gray-900">Recent Activity</h3>
      </div>
      <div className="divide-y divide-gray-50">
        {activities.map((a, i) => (
          <div key={i} className="px-5 py-3.5 flex items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900 truncate">{a.user}</p>
              <p className="text-xs text-gray-500 truncate">{a.action}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs text-gray-400 hidden sm:inline">{a.time}</span>
              <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${statusStyles[a.status]}`}>
                {a.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
