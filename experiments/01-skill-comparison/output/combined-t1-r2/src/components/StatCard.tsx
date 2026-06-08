import type { ReactNode } from 'react'

interface StatCardProps {
  label: string
  value: string
  change: number
  changeLabel: string
  icon: ReactNode
}

export function StatCard({ label, value, change, changeLabel, icon }: StatCardProps) {
  const isPositive = change >= 0

  return (
    <div className="rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-[border-color] duration-200 hover:border-slate-300">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</span>
          <span className="text-2xl font-semibold tracking-tight text-slate-900">{value}</span>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-100 text-slate-500">
          {icon}
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        <span className={`flex items-center gap-0.5 text-xs font-medium ${isPositive ? 'text-emerald-600' : 'text-red-500'}`}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isPositive ? '' : 'rotate-180'}
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
          {Math.abs(change)}%
        </span>
        <span className="text-xs text-slate-400">{changeLabel}</span>
      </div>
    </div>
  )
}
