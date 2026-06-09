import { ArrowUpIcon, ArrowDownIcon } from '../Icons'
import type { StatData } from '../../types'

interface StatCardProps {
  data: StatData
}

export function StatCard({ data }: StatCardProps) {
  const positive = data.change >= 0

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500 mb-1">{data.label}</p>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-semibold text-slate-800 tracking-tight">
          {data.value}
        </p>
        <div
          className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
            positive
              ? 'text-emerald-700 bg-emerald-50'
              : 'text-red-700 bg-red-50'
          }`}
        >
          {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
          {Math.abs(data.change)}%
        </div>
      </div>
      <p className="text-xs text-slate-400 mt-1.5">{data.changeLabel}</p>
    </div>
  )
}
