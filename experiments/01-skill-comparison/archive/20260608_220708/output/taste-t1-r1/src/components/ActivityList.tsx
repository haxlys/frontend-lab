interface Activity {
  id: number;
  time: string;
  user: string;
  initials: string;
  action: string;
  status: "completed" | "pending" | "failed";
}

const activities: Activity[] = [
  { id: 1, time: "2 min ago", user: "Olivia Chen", initials: "OC", action: "Created new project", status: "completed" },
  { id: 2, time: "10 min ago", user: "Marcus Johnson", initials: "MJ", action: "Updated billing info", status: "pending" },
  { id: 3, time: "1 hour ago", user: "Sarah Kim", initials: "SK", action: "Deleted account", status: "failed" },
  { id: 4, time: "3 hours ago", user: "Alex Rivera", initials: "AR", action: "Invited team member", status: "completed" },
  { id: 5, time: "5 hours ago", user: "Jamie Lee", initials: "JL", action: "Upgraded plan", status: "completed" },
];

const statusStyles: Record<Activity["status"], string> = {
  completed: "bg-success/15 text-success",
  pending: "bg-warning/15 text-warning",
  failed: "bg-danger/15 text-danger",
};

const statusLabels: Record<Activity["status"], string> = {
  completed: "Completed",
  pending: "Pending",
  failed: "Failed",
};

export default function ActivityList() {
  return (
    <div className="rounded-xl bg-surface-elevated border border-border p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-text-primary font-semibold text-lg">Recent Activity</h2>
        <button className="text-sm text-brand-light hover:text-brand transition-colors">View all</button>
      </div>
      <div className="flex flex-col">
        {activities.map((a, i) => (
          <div
            key={a.id}
            className={`flex items-center gap-3 py-3 ${
              i < activities.length - 1 ? "border-b border-border/50" : ""
            }`}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface text-xs font-semibold text-text-secondary">
              {a.initials}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-text-primary font-medium truncate">
                {a.user} · <span className="text-text-secondary font-normal">{a.action}</span>
              </div>
              <div className="text-xs text-text-muted mt-0.5">{a.time}</div>
            </div>
            <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[a.status]}`}>
              {statusLabels[a.status]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
