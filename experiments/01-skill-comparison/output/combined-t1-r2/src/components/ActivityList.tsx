import type { Activity } from '../types'

interface Props {
  activities: Activity[]
}

const statusConfig = {
  completed: { label: '완료', className: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  pending: { label: '대기', className: 'bg-amber-50 text-amber-700 border-amber-200' },
  failed: { label: '실패', className: 'bg-red-50 text-red-700 border-red-200' },
  in_progress: { label: '진행 중', className: 'bg-blue-50 text-blue-700 border-blue-200' },
}

const statusDot = {
  completed: 'bg-emerald-400',
  pending: 'bg-amber-400',
  failed: 'bg-red-400',
  in_progress: 'bg-blue-400',
}

export default function ActivityList({ activities }: Props) {
  return (
    <div className="bg-brand-surface rounded-card shadow-card overflow-hidden">
      <div className="px-5 py-4 sm:px-6 border-b border-slate-100 flex items-center justify-between">
        <h2 className="text-base font-semibold text-brand-text-primary">최근 활동</h2>
        <button className="text-xs font-medium text-brand-primary hover:text-indigo-700 transition-colors duration-200">
          모두 보기
        </button>
      </div>

      <div className="divide-y divide-slate-50">
        {activities.map((a, i) => (
          <div
            key={a.id}
            className="px-5 py-3.5 sm:px-6 flex items-center gap-3 sm:gap-4 hover:bg-slate-50/60 transition-colors duration-150 animate-[fadeIn_0.3s_ease-out]"
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'backwards' }}
          >
            <div className={`flex-shrink-0 w-2 h-2 rounded-full ${statusDot[a.status]}`} />

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-brand-text-primary truncate">{a.user}</p>
              <p className="text-xs text-brand-text-secondary mt-0.5">{a.action}</p>
            </div>

            <span className={`flex-shrink-0 text-[11px] font-medium px-2 py-1 rounded-pill border ${statusConfig[a.status].className}`}>
              {statusConfig[a.status].label}
            </span>

            <span className="flex-shrink-0 text-xs text-brand-text-secondary w-14 text-right tabular-nums">
              {a.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
