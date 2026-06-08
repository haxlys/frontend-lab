type Activity = {
  time: string
  user: string
  action: string
  status: 'completed' | 'pending' | 'failed'
}

const activities: Activity[] = [
  { time: '2 min ago', user: 'Alice Johnson', action: 'Upgraded to Pro plan', status: 'completed' },
  { time: '15 min ago', user: 'Bob Smith', action: 'Created new project', status: 'completed' },
  { time: '1 hour ago', user: 'Carol White', action: 'Payment failed', status: 'failed' },
  { time: '2 hours ago', user: 'Dave Lee', action: 'Invited 3 team members', status: 'completed' },
  { time: '4 hours ago', user: 'Eve Davis', action: 'Exported report', status: 'pending' },
  { time: '6 hours ago', user: 'Frank Miller', action: 'API key generated', status: 'completed' },
]

const statusBadge: Record<Activity['status'], string> = {
  completed: 'bg-emerald-50 text-emerald-700',
  pending: 'bg-amber-50 text-amber-700',
  failed: 'bg-red-50 text-red-700',
}

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <h2 className="text-base font-semibold mb-4">Recent Activity</h2>
      <div className="overflow-x-auto -mx-5 sm:mx-0">
        <table className="w-full min-w-[500px] text-sm">
          <thead>
            <tr className="text-left text-gray-400 border-b border-gray-100">
              <th className="pb-3 pl-5 sm:pl-0 font-medium">Time</th>
              <th className="pb-3 font-medium">User</th>
              <th className="pb-3 font-medium">Action</th>
              <th className="pb-3 pr-5 sm:pr-0 font-medium text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {activities.map((a, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                <td className="py-3 pl-5 sm:pl-0 text-gray-400 whitespace-nowrap">{a.time}</td>
                <td className="py-3 font-medium whitespace-nowrap">{a.user}</td>
                <td className="py-3 text-gray-500 whitespace-nowrap">{a.action}</td>
                <td className="py-3 pr-5 sm:pr-0 text-right whitespace-nowrap">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${statusBadge[a.status]}`}>
                    {a.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
