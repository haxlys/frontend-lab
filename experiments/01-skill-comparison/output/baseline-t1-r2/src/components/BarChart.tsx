type BarData = {
  month: string
  value: number
  max: number
}

const data: BarData[] = [
  { month: 'Jan', value: 65, max: 100 },
  { month: 'Feb', value: 45, max: 100 },
  { month: 'Mar', value: 78, max: 100 },
  { month: 'Apr', value: 52, max: 100 },
  { month: 'May', value: 90, max: 100 },
  { month: 'Jun', value: 70, max: 100 },
  { month: 'Jul', value: 85, max: 100 },
  { month: 'Aug', value: 60, max: 100 },
  { month: 'Sep', value: 95, max: 100 },
  { month: 'Oct', value: 73, max: 100 },
  { month: 'Nov', value: 88, max: 100 },
  { month: 'Dec', value: 92, max: 100 },
]

export default function BarChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-semibold">Monthly Revenue</h2>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block" /> 2025
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-200 inline-block" /> 2024
          </span>
        </div>
      </div>
      <div className="flex items-end gap-1.5 sm:gap-2 h-56">
        {data.map((d) => {
          const height = (d.value / d.max) * 100
          return (
            <div key={d.month} className="flex-1 flex flex-col items-center gap-1 min-w-0">
              <span className="text-[10px] sm:text-xs text-gray-400 font-medium">{d.value}K</span>
              <div className="w-full relative flex-1 flex items-end">
                <div
                  className="w-full bg-indigo-500 rounded-t-md transition-all duration-500 hover:bg-indigo-600"
                  style={{ height: `${height}%` }}
                />
              </div>
              <span className="text-[10px] sm:text-xs text-gray-400">{d.month}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
