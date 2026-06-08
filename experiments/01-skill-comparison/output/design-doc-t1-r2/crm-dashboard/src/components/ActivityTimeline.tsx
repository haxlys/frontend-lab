import { type FC } from 'react';

interface Activity {
  id: number;
  user: string;
  action: string;
  target: string;
  detail: string;
  time: string;
  avatar: string;
}

interface ActivityTimelineProps {
  activities: Activity[];
}

const ActivityTimeline: FC<ActivityTimelineProps> = ({ activities }) => {
  return (
    <div className="flex flex-col gap-0">
      {activities.map((a, i) => (
        <div
          key={a.id}
          className="flex items-start gap-3 px-3 py-2.5 rounded-md hover:bg-slate-50 transition-colors duration-150"
        >
          <div className="relative flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-semibold">
              {a.avatar}
            </div>
            {i < activities.length - 1 && (
              <div className="absolute top-9 left-1/2 -translate-x-1/2 w-px h-[calc(100%+4px)] bg-slate-200" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-sm font-medium text-navy">{a.user}</span>
              <span className="text-xs text-slate-500">{a.action}</span>
            </div>
            <p className="text-sm text-slate-700 font-medium mt-0.5">{a.target}</p>
            <p className="text-xs text-slate-400 mt-0.5">{a.detail}</p>
          </div>
          <span className="text-[11px] text-slate-400 whitespace-nowrap flex-shrink-0">{a.time}</span>
        </div>
      ))}
    </div>
  );
};

export default ActivityTimeline;
