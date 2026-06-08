import { chartData } from '../data'

const max = Math.max(...chartData.map((d) => d.value))

export default function MonthlyChart() {
  return (
    <div className="bg-white rounded-card shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Monthly Revenue</h3>
        <span className="text-xs text-slate-400">2026</span>
      </div>

      <div className="h-64 flex items-end gap-2 sm:gap-3">
        {chartData.map((d) => {
          const height = (d.value / max) * 100
          const isTop = d.value === max

          return (
            <div key={d.month} className="flex-1 flex flex-col items-center justify-end h-full">
              <div className="relative w-full flex flex-col items-center mb-2">
                <span
                  className={`text-xs font-medium mb-1 transition-opacity duration-200 opacity-0 hover:opacity-100 ${
                    isTop ? 'text-primary' : 'text-slate-500'
                  }`}
                >
                  {d.value}
                </span>
              </div>
              <div className="relative w-full flex flex-col items-center">
                <div
                  className={`w-full rounded-t transition-all duration-300 hover:opacity-85 cursor-pointer ${
                    isTop
                      ? 'bg-primary'
                      : 'bg-primary/60 hover:bg-primary/80'
                  }`}
                  style={{ height: `${height}%` }}
                  title={`${d.month}: ${d.value}`}
                />
              </div>
              <span className="text-xs text-slate-400 mt-2">{d.month}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
