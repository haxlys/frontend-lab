import type { Activity } from '../data/mock';

interface ActivityTimelineProps {
  activities: Activity[];
}

export default function ActivityTimeline({ activities }: ActivityTimelineProps) {
  return (
    <div className="bg-white border border-navy-200 rounded-lg p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-navy-800">최근 액티비티</h3>
        <button className="text-xs font-medium text-accent-600 hover:text-accent-500 transition-colors">
          모두 보기
        </button>
      </div>

      <div className="space-y-0">
        {activities.slice(0, 5).map((activity, index) => (
          <div
            key={activity.id}
            className={`
              flex items-start gap-3 py-3
              ${index > 0 ? 'border-t border-navy-100' : ''}
              hover:bg-navy-50/50 -mx-2 px-2 rounded-md transition-colors
            `}
          >
            <div className="w-8 h-8 rounded-full bg-navy-100 flex-shrink-0 flex items-center justify-center
                            text-[11px] font-semibold text-navy-600">
              {activity.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-navy-700 leading-snug">
                <span className="font-medium text-navy-800">{activity.user}</span>
                {' '}{activity.action} -{' '}
                <span className="font-medium">{activity.target}</span>
              </p>
              <p className="text-xs text-navy-400 mt-0.5">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
