import type { ChartData } from '../types'

const data: ChartData[] = [
  { month: 'Jan', value: 65 },
  { month: 'Feb', value: 59 },
  { month: 'Mar', value: 80 },
  { month: 'Apr', value: 81 },
  { month: 'May', value: 56 },
  { month: 'Jun', value: 72 },
  { month: 'Jul', value: 68 },
  { month: 'Aug', value: 87 },
  { month: 'Sep', value: 75 },
  { month: 'Oct', value: 91 },
  { month: 'Nov', value: 84 },
  { month: 'Dec', value: 95 },
]

export default function BarChart() {
  const max = Math.max(...data.map((d) => d.value))

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Monthly Overview</h2>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-indigo-500" /> 2025
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-gray-700" /> 2024
          </span>
        </div>
      </div>
      <div className="flex items-end gap-1.5 sm:gap-2">
        {data.map((d) => {
          const pct = (d.value / max) * 100
          return (
            <div key={d.month} className="group flex flex-1 flex-col items-center gap-2">
              <div className="relative w-full">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-0.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {d.value}%
                </span>
              </div>
              <div className="flex w-full items-end justify-center gap-1">
                <div
                  className="w-2.5 rounded-t-sm transition-all duration-300 sm:w-3.5"
                  style={{
                    height: `${pct * 0.7}%`,
                    minHeight: `${pct}%`,
                    background: 'linear-gradient(to top, rgb(99 102 241 / 0.4), rgb(99 102 241 / 1))',
                  }}
                />
                <div
                  className="w-2.5 rounded-t-sm transition-all duration-300 sm:w-3.5"
                  style={{
                    height: `${pct * 0.5}%`,
                    minHeight: `${pct * 0.5}%`,
                    background: 'linear-gradient(to top, rgb(55 65 81 / 0.4), rgb(75 85 99 / 0.8))',
                  }}
                />
              </div>
              <span className="mt-2 text-xs text-gray-500">{d.month}</span>
            </div>
          )
        })}
      </div>
      <div className="mt-6 grid grid-cols-4 gap-2 border-t border-gray-800 pt-4">
        <div>
          <span className="text-xs text-gray-500">Total Revenue</span>
          <p className="text-sm font-semibold">$452K</p>
        </div>
        <div>
          <span className="text-xs text-gray-500">Avg. Monthly</span>
          <p className="text-sm font-semibold">$37.6K</p>
        </div>
        <div>
          <span className="text-xs text-gray-500">YoY Growth</span>
          <p className="text-sm font-semibold text-emerald-400">+23.1%</p>
        </div>
        <div>
          <span className="text-xs text-gray-500">Best Month</span>
          <p className="text-sm font-semibold">Dec</p>
        </div>
      </div>
    </div>
  )
}
