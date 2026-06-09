import type { ActivityItem } from '../types'

interface ActivityTimelineProps {
  activities: ActivityItem[]
}

const iconMap: Record<ActivityItem['type'], { bg: string; icon: string }> = {
  deal: { bg: 'bg-teal-50 text-teal-500', icon: 'M3.75 13.5l6.75-6.75 3.75 3.75L3.75 13.5z' },
  meeting: { bg: 'bg-blue-50 text-blue-500', icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
  lead: { bg: 'bg-amber-50 text-amber-500', icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 19.5a8.25 8.25 0 0115 0' },
  note: { bg: 'bg-slate-100 text-slate-500', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25' },
}

export default function ActivityTimeline({ activities }: ActivityTimelineProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm flex flex-col h-full">
      <h3 className="mb-1 text-sm font-semibold text-slate-800">최근 액티비티</h3>
      <p className="mb-4 text-xs text-slate-400">실시간 업데이트</p>
      <div className="flex-1 space-y-0 overflow-y-auto max-h-[180px]">
        {activities.map((activity) => {
          const { bg } = iconMap[activity.type]
          return (
            <div key={activity.id} className="flex gap-3 py-2.5 -mx-1 px-1 rounded-md hover:bg-slate-50 transition-colors">
              <div className={`flex size-8 shrink-0 items-center justify-center rounded-full ${bg}`}>
                <svg width="14" height="14" viewBox="0 0 21 21" fill="none">
                  <path d={iconMap[activity.type].icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-medium text-slate-800 truncate">{activity.title}</p>
                  <span className="shrink-0 text-[11px] text-slate-400">{activity.time}</span>
                </div>
                <p className="text-xs text-slate-500 truncate mt-0.5">{activity.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
