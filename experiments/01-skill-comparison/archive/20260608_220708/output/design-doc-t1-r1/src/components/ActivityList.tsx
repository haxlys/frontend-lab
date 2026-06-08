import type { ActivityItem } from '../types'

const statusConfig: Record<ActivityItem['status'], { bg: string; dot: string }> = {
  success: {
    bg: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    dot: 'bg-emerald-500',
  },
  warning: {
    bg: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    dot: 'bg-amber-500',
  },
  pending: {
    bg: 'bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400',
    dot: 'bg-sky-500',
  },
  error: {
    bg: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    dot: 'bg-red-500',
  },
}

interface ActivityListProps {
  items: ActivityItem[]
}

export default function ActivityList({ items }: ActivityListProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h3 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">
        Recent Activity
      </h3>
      <div className="space-y-0 divide-y divide-gray-100 dark:divide-gray-800">
        {items.map((item) => {
          const s = statusConfig[item.status]
          return (
            <div key={item.id} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
              <span className="w-20 shrink-0 text-xs text-gray-400 dark:text-gray-500">
                {item.time}
              </span>
              <span className="min-w-0 flex-1 truncate text-sm font-medium text-gray-900 dark:text-white">
                {item.user}
              </span>
              <span className="hidden min-w-0 flex-1 truncate text-sm text-gray-500 dark:text-gray-400 sm:block">
                {item.action}
              </span>
              <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${s.bg}`}>
                <span className={`mr-1 inline-block h-1.5 w-1.5 rounded-full ${s.dot}`} />
                {item.status}
              </span>
            </div>
          )
        })}
        {items.length === 0 && (
          <p className="py-6 text-center text-sm text-gray-400">No recent activity</p>
        )}
      </div>
    </div>
  )
}
