import type { ActivityItem } from '../types'

const activities: ActivityItem[] = [
  { time: '2 minutes ago', user: 'Alice Chen', action: 'Created new project "Nova"', status: 'completed' },
  { time: '18 minutes ago', user: 'Bob Wilson', action: 'Upgraded to Pro plan', status: 'completed' },
  { time: '42 minutes ago', user: 'Charlie Kim', action: 'Requested API key rotation', status: 'pending' },
  { time: '1 hour ago', user: 'Diana Park', action: 'Deleted staging environment', status: 'completed' },
  { time: '2 hours ago', user: 'Evan Lee', action: 'Payment method expired', status: 'failed' },
  { time: '4 hours ago', user: 'Fiona Zhao', action: 'Invited 3 team members', status: 'completed' },
  { time: '6 hours ago', user: 'George Tanaka', action: 'Exported quarterly report', status: 'completed' },
]

const statusStyles: Record<ActivityItem['status'], string> = {
  completed: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
  pending: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
  failed: 'bg-red-400/10 text-red-400 border-red-400/20',
}

const statusDots: Record<ActivityItem['status'], string> = {
  completed: 'bg-emerald-400',
  pending: 'bg-amber-400',
  failed: 'bg-red-400',
}

export default function RecentActivity() {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
        <button className="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300">
          View all
        </button>
      </div>
      <div className="divide-y divide-gray-800">
        {activities.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-6 py-3.5 transition-colors hover:bg-gray-800/30"
          >
            <div className={`h-2 w-2 shrink-0 rounded-full ${statusDots[item.status]}`} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm text-gray-200">
                <span className="font-medium text-white">{item.user}</span>
                {' '}{item.action}
              </p>
              <p className="mt-0.5 text-xs text-gray-500">{item.time}</p>
            </div>
            <span
              className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyles[item.status]}`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
