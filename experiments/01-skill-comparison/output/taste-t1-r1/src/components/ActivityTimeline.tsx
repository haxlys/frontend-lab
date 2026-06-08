interface Activity {
  id: number
  user: string
  action: string
  target: string
  value: string
  time: string
  avatar: string
}

export function ActivityTimeline({ activities }: { activities: Activity[] }) {
  return (
    <div className="bg-white rounded-lg border border-navy-200 p-5">
      <h3 className="text-sm font-semibold text-navy-900 mb-4">Recent Activity</h3>
      <div className="space-y-0">
        {activities.map((a, i) => (
          <div
            key={a.id}
            className={`flex items-start gap-3 py-3 ${
              i < activities.length - 1 ? "border-b border-navy-100" : ""
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-navy-100 flex items-center justify-center shrink-0">
              <span className="text-xs font-semibold text-navy-600">{a.avatar}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-navy-800">
                <span className="font-medium">{a.user}</span>{" "}
                <span className="text-navy-500">{a.action}</span>{" "}
                <span className="font-medium text-navy-800">{a.target}</span>
                {a.value && (
                  <span className="ml-1.5 text-xs font-semibold text-accent-600 bg-accent-50 rounded-full px-2 py-0.5">
                    {a.value}
                  </span>
                )}
              </p>
              <p className="text-xs text-navy-400 mt-0.5">{a.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
