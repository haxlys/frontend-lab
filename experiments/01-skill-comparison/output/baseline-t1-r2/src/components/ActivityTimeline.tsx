import type { Activity } from '../data/mock';

interface ActivityTimelineProps {
  activities: Activity[];
}

const typeIcons: Record<Activity['type'], { bg: string; icon: string }> = {
  meeting: { bg: 'bg-accent-50 text-accent-600', icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
  email: { bg: 'bg-teal-50 text-teal-500', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  call: { bg: 'bg-green-50 text-green-500', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
  note: { bg: 'bg-amber-50 text-amber-500', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
};

export default function ActivityTimeline({ activities }: ActivityTimelineProps) {
  return (
    <div className="bg-white rounded-md border border-navy-200 shadow-[var(--shadow-card)]">
      <div className="px-5 py-4 border-b border-navy-200 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-navy-800">최근 액티비티</h3>
        <span className="text-xs text-accent-600 hover:text-accent-500 cursor-pointer font-medium">
          모두 보기
        </span>
      </div>
      <div className="px-5 py-2">
        {activities.map((activity, i) => (
          <div
            key={activity.id}
            className={`flex gap-3 py-3 ${
              i < activities.length - 1 ? 'border-b border-navy-100' : ''
            }`}
          >
            <div
              className={`w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 ${typeIcons[activity.type].bg}`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={typeIcons[activity.type].icon} />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-navy-800 truncate">
                  {activity.title}
                </span>
                <span className="text-xs text-navy-400 flex-shrink-0">{activity.time}</span>
              </div>
              <p className="text-xs text-navy-500 mt-0.5 truncate">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
