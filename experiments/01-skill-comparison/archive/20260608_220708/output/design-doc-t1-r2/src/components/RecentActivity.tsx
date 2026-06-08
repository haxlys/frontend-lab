import { activities } from '../data'

const statusStyles: Record<string, string> = {
  success: 'bg-green-100 text-green-700',
  pending: 'bg-amber-100 text-amber-700',
  failed: 'bg-red-100 text-red-700',
}

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-card shadow-sm p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-5">Recent Activity</h3>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px]">
          <thead>
            <tr className="text-left text-sm text-slate-500 border-b border-slate-100">
              <th className="pb-3 font-medium">Time</th>
              <th className="pb-3 font-medium">User</th>
              <th className="pb-3 font-medium">Action</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((a) => (
              <tr
                key={a.id}
                className="border-b border-slate-50 last:border-0 transition-colors duration-200 hover:bg-slate-50"
              >
                <td className="py-3.5 text-sm text-slate-500 whitespace-nowrap">{a.time}</td>
                <td className="py-3.5 text-sm font-medium text-slate-800 whitespace-nowrap">{a.user}</td>
                <td className="py-3.5 text-sm text-slate-600 whitespace-nowrap">{a.action}</td>
                <td className="py-3.5 whitespace-nowrap">
                  <span
                    className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-pill capitalize ${statusStyles[a.status]}`}
                  >
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
