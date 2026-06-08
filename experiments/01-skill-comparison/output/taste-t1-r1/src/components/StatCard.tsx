import { ArrowUp, ArrowDown } from "@phosphor-icons/react"

interface StatCardProps {
  label: string
  value: string
  change: string
  trend: "up" | "down"
}

export function StatCard({ label, value, change, trend }: StatCardProps) {
  const isUp = trend === "up"

  return (
    <div className="bg-white rounded-lg border border-navy-200 p-5 hover:shadow-sm transition-shadow">
      <p className="text-xs font-medium text-navy-500 uppercase tracking-wide mb-2">
        {label}
      </p>
      <div className="flex items-baseline justify-between">
        <span className="text-2xl font-semibold text-navy-900 tracking-tight">
          {value}
        </span>
        <span
          className={`flex items-center gap-0.5 text-xs font-semibold rounded-full px-2 py-0.5 ${
            isUp ? "text-emerald-500 bg-emerald-50" : "text-amber-500 bg-amber-50"
          }`}
        >
          {isUp ? <ArrowUp size={12} weight="bold" /> : <ArrowDown size={12} weight="bold" />}
          {change}
        </span>
      </div>
    </div>
  )
}
