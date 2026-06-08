const data = [
  { month: 'Jan', value: 40, revenue: 12.4 },
  { month: 'Feb', value: 55, revenue: 15.8 },
  { month: 'Mar', value: 35, revenue: 10.2 },
  { month: 'Apr', value: 65, revenue: 18.6 },
  { month: 'May', value: 48, revenue: 14.1 },
  { month: 'Jun', value: 72, revenue: 21.3 },
  { month: 'Jul', value: 58, revenue: 16.9 },
  { month: 'Aug', value: 80, revenue: 23.7 },
  { month: 'Sep', value: 68, revenue: 19.8 },
  { month: 'Oct', value: 85, revenue: 25.1 },
  { month: 'Nov', value: 74, revenue: 22.4 },
  { month: 'Dec', value: 92, revenue: 28.5 },
]

export function BarChart() {
  const maxValue = Math.max(...data.map((d) => d.value))

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-semibold text-gray-900 dark:text-white">Monthly Overview</h2>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-indigo-500 inline-block" />
            <span className="text-gray-500 dark:text-gray-400">Orders</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400 inline-block" />
            <span className="text-gray-500 dark:text-gray-400">Revenue ($K)</span>
          </span>
        </div>
      </div>

      <div className="hidden sm:flex items-end gap-1.5 h-56 px-1">
        {data.map((d) => (
          <div key={d.month} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
            <div className="w-full flex flex-col items-center gap-1" style={{ height: `${(d.value / maxValue) * 100}%` }}>
              <div
                className="w-full rounded-t-md transition-all duration-300 hover:opacity-80"
                style={{ height: `${(d.revenue / 30) * 100}%`, background: 'linear-gradient(180deg, #34d399, #6ee7b7)' }}
              />
              <div
                className="w-full rounded-t-md transition-all duration-300 hover:opacity-80"
                style={{ height: `${(d.value / maxValue) * 100}%`, background: 'linear-gradient(180deg, #6366f1, #818cf8)' }}
              />
            </div>
            <span className="text-[11px] text-gray-400 dark:text-gray-500 tabular-nums mt-1">{d.month}</span>
          </div>
        ))}
      </div>

      <div className="sm:hidden space-y-3">
        {data.map((d) => (
          <div key={d.month} className="flex items-center gap-3">
            <span className="text-xs text-gray-400 dark:text-gray-500 w-8 tabular-nums">{d.month}</span>
            <div className="flex-1 flex items-center gap-1 h-8">
              <div
                className="h-full rounded-r-md transition-all"
                style={{ width: `${(d.value / maxValue) * 100}%`, background: 'linear-gradient(90deg, #6366f1, #818cf8)' }}
              />
              <span className="text-xs text-gray-400 dark:text-gray-500 tabular-nums">${d.revenue}K</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
