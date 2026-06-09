import { CheckCircle2, AlertCircle, Clock } from "lucide-react";

const tasks = [
  { id: 1, title: "Follow up with Acme Corp", done: false },
  { id: 2, title: "Send proposal to Initech", done: true },
  { id: 3, title: "Review pipeline Q2 forecast", done: false },
  { id: 4, title: "Prepare onboarding for Globex", done: false },
  { id: 5, title: "Update contact records", done: true },
];

const activities = [
  {
    icon: CheckCircle2,
    color: "text-emerald-500 bg-emerald-50",
    text: "Deal closed: Acme Corp ($48K)",
    time: "2h ago",
  },
  {
    icon: AlertCircle,
    color: "text-amber-500 bg-amber-50",
    text: "New lead assigned: Sarah Chen",
    time: "4h ago",
  },
  {
    icon: Clock,
    color: "text-navy-500 bg-navy-100",
    text: "Meeting scheduled with Initech",
    time: "6h ago",
  },
  {
    icon: CheckCircle2,
    color: "text-emerald-500 bg-emerald-50",
    text: "Task completed: Update pipeline",
    time: "Yesterday",
  },
];

export function ActivityTimeline() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-5 space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-navy-400">
          Today&apos;s Tasks
        </p>
        {tasks.map((task) => (
          <label
            key={task.id}
            className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-1 -mx-2 transition-colors hover:bg-navy-50"
          >
            <input
              type="checkbox"
              defaultChecked={task.done}
              className="peer h-4 w-4 shrink-0 cursor-pointer rounded border-navy-300 text-accent-600 focus:ring-accent-500/25"
            />
            <span className="text-[13px] text-navy-700 peer-checked:text-navy-400 peer-checked:line-through">
              {task.title}
            </span>
          </label>
        ))}
      </div>

      <div className="border-t border-navy-100 pt-4">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-navy-400">
          Recent Activity
        </p>
        <div className="space-y-0">
          {activities.map((activity, i) => (
            <div
              key={i}
              className="relative flex items-start gap-3 pb-3 pl-0"
            >
              {i !== activities.length - 1 && (
                <div className="absolute left-[11px] top-7 bottom-0 w-px bg-navy-200" />
              )}
              <div
                className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full ${activity.color}`}
              >
                <activity.icon size={11} />
              </div>
              <div className="flex-1 pt-px">
                <p className="text-[13px] font-medium text-navy-700">
                  {activity.text}
                </p>
                <p className="text-[11px] text-navy-400 mt-0.5">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
