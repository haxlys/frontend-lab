import type { StatData } from '../types'

export default function StatCard({ label, value, change, positive, icon }: StatData) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-colors hover:border-gray-700">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-400">{label}</span>
        <span className="rounded-lg bg-gray-800 p-2 text-gray-300">{icon}</span>
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-2xl font-semibold tracking-tight sm:text-3xl">{value}</span>
        <span className={`text-sm font-medium ${positive ? 'text-emerald-400' : 'text-red-400'}`}>
          {change}
        </span>
      </div>
    </div>
  )
}
