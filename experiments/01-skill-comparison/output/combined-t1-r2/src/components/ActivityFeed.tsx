import type { Activity } from '../types'

interface ActivityFeedProps {
  activities: Activity[]
}

const typeIcons: Record<Activity['type'], string> = {
  deal: 'bg-emerald-100 text-emerald-600',
  lead: 'bg-blue-100 text-blue-600',
  meeting: 'bg-amber-100 text-amber-600',
  note: 'bg-slate-100 text-slate-500',
}

const typeLabels: Record<Activity['type'], string> = {
  deal: 'Deal',
  lead: 'Lead',
  meeting: 'Meeting',
  note: 'Note',
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900">Recent Activity</h3>
        <button className="text-xs font-medium text-accent hover:text-accent-hover transition-colors">
          View all
        </button>
      </div>
      <div className="flex flex-col gap-0">
        {activities.map((act, i) => (
          <div
            key={act.id}
            className={`flex items-start gap-3 py-2.5 ${i < activities.length - 1 ? 'border-b border-slate-50' : ''}`}
          >
            <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[10px] font-semibold ${typeIcons[act.type]}`}>
              {typeLabels[act.type].slice(0, 1)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] leading-snug text-slate-700">
                <span className="font-medium text-slate-900">{act.user}</span>{' '}
                {act.action}{' '}
                <span className="font-medium text-slate-900">{act.target}</span>
              </p>
              <span className="mt-0.5 block text-[11px] text-slate-400">{act.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
