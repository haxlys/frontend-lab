interface Activity {
  id: number;
  time: string;
  user: string;
  action: string;
  status: "completed" | "pending" | "failed";
}

const activities: Activity[] = [
  { id: 1, time: "2 min ago", user: "Alice Chen", action: "Upgraded to Pro plan", status: "completed" },
  { id: 2, time: "18 min ago", user: "Bob Kumar", action: "Created new project", status: "completed" },
  { id: 3, time: "1 hour ago", user: "Carlos M.", action: "Payment processing", status: "pending" },
  { id: 4, time: "3 hours ago", user: "Diana Wu", action: "Exported report", status: "completed" },
  { id: 5, time: "5 hours ago", user: "Erik Nilsen", action: "Team invite sent", status: "failed" },
  { id: 6, time: "Yesterday", user: "Fatima A.", action: "Updated billing info", status: "completed" },
];

const statusStyles: Record<Activity["status"], string> = {
  completed: "bg-emerald-50 text-emerald-700",
  pending: "bg-amber-50 text-amber-700",
  failed: "bg-red-50 text-red-700",
};

export function ActivityList() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <h3 className="text-base font-semibold text-slate-900">Recent Activity</h3>
        <button className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors">
          View all
        </button>
      </div>
      <div className="divide-y divide-slate-50">
        {activities.map((a) => (
          <div
            key={a.id}
            className="flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                {a.user
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-slate-900">{a.user}</p>
                <p className="truncate text-sm text-slate-500">{a.action}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 ml-11 sm:ml-0">
              <span className="text-xs text-slate-400 whitespace-nowrap">{a.time}</span>
              <span
                className={`inline-flex shrink-0 rounded-full px-2 py-0.5 text-xs font-medium capitalize ${statusStyles[a.status]}`}
              >
                {a.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
