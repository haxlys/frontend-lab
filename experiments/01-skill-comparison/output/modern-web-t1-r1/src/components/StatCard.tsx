interface StatCardProps {
  label: string
  value: string
  change: number
  changeLabel: string
}

export default function StatCard({ label, value, change, changeLabel }: StatCardProps) {
  const isPositive = change > 0

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <p className="mb-1 text-xs font-medium text-slate-500 uppercase tracking-wide">{label}</p>
      <p className="mb-2 text-2xl font-bold text-slate-800 tracking-tight">{value}</p>
      <div className="flex items-center gap-1.5">
        <span className={isPositive ? 'text-teal-500' : 'text-red-500'}>
          {isPositive ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2.5v9M3.5 6L7 2.5 10.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 11.5v-9M3.5 8L7 11.5 10.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </span>
        <span className={`text-sm font-medium ${isPositive ? 'text-teal-500' : 'text-red-500'}`}>
          {isPositive ? '+' : ''}{change}%
        </span>
        <span className="text-xs text-slate-400">{changeLabel}</span>
      </div>
    </div>
  )
}
