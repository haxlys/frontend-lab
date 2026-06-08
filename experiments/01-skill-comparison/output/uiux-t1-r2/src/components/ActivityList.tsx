interface Activity {
  id: number
  user: string
  initials: string
  action: string
  status: 'completed' | 'pending' | 'failed' | 'in-progress'
  time: string
}

const activities: Activity[] = [
  { id: 1, user: 'Alice Chen', initials: 'AC', action: 'Upgraded to Pro plan', status: 'completed', time: '2 min ago' },
  { id: 2, user: 'Bob Martinez', initials: 'BM', action: 'Created new project "Atlas"', status: 'completed', time: '18 min ago' },
  { id: 3, user: 'Carol Wu', initials: 'CW', action: 'Payment failed — retry scheduled', status: 'failed', time: '1 hour ago' },
  { id: 4, user: 'Dave Kim', initials: 'DK', action: 'Exported monthly report', status: 'in-progress', time: '2 hours ago' },
  { id: 5, user: 'Eva Johansson', initials: 'EJ', action: 'Invited 3 team members', status: 'pending', time: '3 hours ago' },
  { id: 6, user: 'Frank Liu', initials: 'FL', action: 'Changed billing address', status: 'completed', time: '5 hours ago' },
  { id: 7, user: 'Grace Park', initials: 'GP', action: 'Deleted staging environment', status: 'completed', time: '6 hours ago' },
]

const statusStyles: Record<Activity['status'], string> = {
  completed: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400',
  pending: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400',
  failed: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400',
  'in-progress': 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400',
}

export function ActivityList() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
      <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-base font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
      </div>
      <div className="divide-y divide-gray-50 dark:divide-gray-700/50">
        {activities.map((a) => (
          <div
            key={a.id}
            className="flex items-center gap-4 px-6 py-3.5 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
          >
            <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                {a.initials}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {a.user}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                {a.action}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${statusStyles[a.status]}`}>
                {a.status}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500 w-20 text-right tabular-nums">
                {a.time}
              </span>
            </div>
            <div className="sm:hidden text-xs text-gray-400 dark:text-gray-500 tabular-nums">
              {a.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
