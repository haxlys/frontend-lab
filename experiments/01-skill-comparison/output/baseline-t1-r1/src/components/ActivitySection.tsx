import type { JSX } from "react";

export interface ActivityItem {
  id: string;
  title: string;
  subtitle: string;
  timestamp: string;
  icon: JSX.Element;
  iconBg?: string;
}

export interface TaskItem {
  id: string;
  text: string;
  done: boolean;
}

interface ActivitySectionProps {
  activities: ActivityItem[];
  tasks: TaskItem[];
  onToggleTask: (id: string) => void;
}

export function ActivitySection({ activities, tasks, onToggleTask }: ActivitySectionProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 h-full flex flex-col">
      <h3 className="text-sm font-semibold text-navy-900 mb-4">Recent Activity</h3>

      <div className="flex-1 overflow-y-auto scrollbar-thin space-y-3 mb-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-3 items-start">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{ backgroundColor: activity.iconBg ?? "#F1F5F9" }}
            >
              {activity.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-navy-800 font-medium leading-snug">
                {activity.title}
              </p>
              <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                {activity.subtitle}
              </p>
            </div>
            <span className="text-[11px] text-slate-400 shrink-0 mt-1">
              {activity.timestamp}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100 pt-4">
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
          Tasks for today
        </h4>
        <div className="space-y-2">
          {tasks.map((task) => (
            <label
              key={task.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => onToggleTask(task.id)}
                className="w-4 h-4 rounded border-slate-300 text-accent
                           focus:ring-2 focus:ring-accent/20 cursor-pointer"
              />
              <span
                className={`text-sm transition-colors duration-150 ${
                  task.done
                    ? "text-slate-400 line-through"
                    : "text-navy-800 group-hover:text-navy-900"
                }`}
              >
                {task.text}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
