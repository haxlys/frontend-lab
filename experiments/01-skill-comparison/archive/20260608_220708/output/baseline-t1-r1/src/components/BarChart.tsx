const months = [
  { label: 'Jan', value: 4200, max: 9000 },
  { label: 'Feb', value: 3800, max: 9000 },
  { label: 'Mar', value: 6100, max: 9000 },
  { label: 'Apr', value: 5400, max: 9000 },
  { label: 'May', value: 7200, max: 9000 },
  { label: 'Jun', value: 5800, max: 9000 },
  { label: 'Jul', value: 8100, max: 9000 },
  { label: 'Aug', value: 7400, max: 9000 },
  { label: 'Sep', value: 6300, max: 9000 },
  { label: 'Oct', value: 8700, max: 9000 },
  { label: 'Nov', value: 7600, max: 9000 },
  { label: 'Dec', value: 9000, max: 9000 },
]

const yLabels = ['$9k', '$6k', '$3k', '$0']

export default function BarChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="px-5 py-4 border-b border-gray-100">
        <h3 className="text-base font-semibold text-gray-900">Monthly Revenue</h3>
        <p className="text-xs text-gray-500 mt-0.5">Revenue overview for 2025</p>
      </div>
      <div className="p-5">
        <div className="flex">
          <div className="flex flex-col justify-between h-52 pr-3 shrink-0">
            {yLabels.map((label) => (
              <span key={label} className="text-[11px] text-gray-400 leading-none -translate-y-0.5">
                {label}
              </span>
            ))}
          </div>

          {/* Grid + bars area */}
          <div className="flex-1 relative">
            {/* horizontal grid lines */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute left-0 right-0 border-t border-gray-100"
                style={{ top: `${(i / 3) * 100}%` }}
              />
            ))}

            {/* bars */}
            <div className="flex items-end justify-between h-52 gap-1.5 sm:gap-2 ml-0.5">
              {months.map((m) => {
                const pct = (m.value / m.max) * 100
                const isMax = m.value === m.max
                return (
                  <div key={m.label} className="flex-1 flex flex-col items-center gap-1 min-w-0">
                    <div className="w-full flex items-end justify-center" style={{ height: 'calc(100% - 20px)' }}>
                      <div
                        className={`w-full rounded-t-md transition-all duration-300 hover:opacity-80 ${
                          isMax
                            ? 'bg-indigo-500'
                            : 'bg-indigo-100 hover:bg-indigo-200'
                        }`}
                        style={{ height: `${pct}%`, maxWidth: 32 }}
                        title={`$${m.value.toLocaleString()}`}
                      />
                    </div>
                    <span className="text-[11px] text-gray-400 leading-none">{m.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
