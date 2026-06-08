import type { ChartBar } from '../types'

interface BarChartProps {
  data: ChartBar[]
  title: string
}

export default function BarChart({ data, title }: BarChartProps) {
  const max = Math.max(...data.map((d) => d.value))

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h3 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">{title}</h3>

      {/* Y-axis labels */}
      <div className="flex h-56 gap-0.5 sm:gap-1">
        <div className="flex shrink-0 flex-col justify-between pb-5 pr-2 text-[10px] text-gray-400">
          <span>{max}%</span>
          <span>{Math.round(max * 0.5)}%</span>
          <span>0%</span>
        </div>

        <div className="flex flex-1 items-end gap-0.5 sm:gap-1">
          {data.map((item) => {
            const height = (item.value / max) * 100
            return (
              <div
                key={item.label}
                className="group relative flex flex-1 flex-col items-center justify-end"
              >
                <span className="mb-1 text-[10px] text-gray-400 opacity-0 transition-opacity group-hover:opacity-100 sm:text-xs">
                  {item.value}%
                </span>
                <div className="relative w-full">
                  <div
                    className="mx-auto w-full max-w-[32px] rounded-t-md bg-gradient-to-t from-indigo-500 to-indigo-400 transition-all hover:from-indigo-600 hover:to-indigo-500 dark:from-indigo-600 dark:to-indigo-500 dark:hover:from-indigo-500 dark:hover:to-indigo-400"
                    style={{ height: `${height}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* X-axis labels */}
      <div className="mt-2 flex gap-0.5 pl-8 sm:gap-1 sm:pl-10">
        {data.map((item) => (
          <span
            key={item.label}
            className="flex-1 text-center text-[10px] text-gray-400 sm:text-xs"
          >
            {item.label}
          </span>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-5 flex items-center gap-4 border-t border-gray-100 pt-4 text-xs text-gray-400 dark:border-gray-800">
        <div className="flex items-center gap-1.5">
          <span className="block h-2.5 w-2.5 rounded-sm bg-indigo-400" />
          Monthly Growth (%)
        </div>
        <span>{new Date().getFullYear()}</span>
      </div>
    </div>
  )
}
