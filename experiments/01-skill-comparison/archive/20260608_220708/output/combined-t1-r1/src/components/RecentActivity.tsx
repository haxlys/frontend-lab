interface Activity {
  id: number
  user: string
  avatar: string
  action: string
  time: string
  status: 'success' | 'pending' | 'failed'
}

const ACTIVITIES: Activity[] = [
  { id: 1, user: 'Jiwon Kim', avatar: 'JK', action: 'Upgraded to Pro plan', time: '2 min ago', status: 'success' },
  { id: 2, user: 'Suhyun Park', avatar: 'SP', action: 'Created new project "Atlas"', time: '14 min ago', status: 'success' },
  { id: 3, user: 'Dohyun Lee', avatar: 'DL', action: 'Payment failed — retry', time: '32 min ago', status: 'failed' },
  { id: 4, user: 'Yejin Choi', avatar: 'YC', action: 'Invited 3 team members', time: '1 hour ago', status: 'success' },
  { id: 5, user: 'Minjun Jung', avatar: 'MJ', action: 'Downgraded to Free plan', time: '2 hours ago', status: 'pending' },
  { id: 6, user: 'Hana Song', avatar: 'HS', action: 'Exported monthly report', time: '3 hours ago', status: 'success' },
  { id: 7, user: 'Taewoo Kang', avatar: 'TK', action: 'API key regenerated', time: '5 hours ago', status: 'pending' },
]

const STATUS_STYLES: Record<string, string> = {
  success: 'bg-emerald-50 text-emerald-700',
  pending: 'bg-amber-50 text-amber-700',
  failed: 'bg-rose-50 text-rose-700',
}

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-card shadow-[0_1px_2px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100">
        <h2 className="text-[20px] font-semibold text-[#1e293b]">Recent Activity</h2>
      </div>
      <ul className="divide-y divide-slate-50">
        {ACTIVITIES.map((a) => (
          <li
            key={a.id}
            className="px-5 py-3.5 flex items-center gap-3 hover:bg-slate-50 transition-colors duration-200"
          >
            <div className="w-9 h-9 shrink-0 rounded-pill bg-primary-100 text-primary-600 text-[14px] font-semibold flex items-center justify-center">
              {a.avatar}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-medium text-[#1e293b] truncate">
                {a.user} <span className="font-normal text-[#64748b]">{a.action}</span>
              </p>
              <p className="text-[14px] text-[#64748b]">{a.time}</p>
            </div>
            <span className={`shrink-0 text-[14px] font-medium px-2.5 py-1 rounded-pill ${STATUS_STYLES[a.status]}`}>
              {a.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
