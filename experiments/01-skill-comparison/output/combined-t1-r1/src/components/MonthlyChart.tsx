const DATA = [
  { month: 'Jan', revenue: 28, users: 19 },
  { month: 'Feb', revenue: 35, users: 24 },
  { month: 'Mar', revenue: 42, users: 31 },
  { month: 'Apr', revenue: 38, users: 35 },
  { month: 'May', revenue: 55, users: 42 },
  { month: 'Jun', revenue: 48, users: 38 },
  { month: 'Jul', revenue: 62, users: 51 },
  { month: 'Aug', revenue: 58, users: 47 },
  { month: 'Sep', revenue: 71, users: 56 },
  { month: 'Oct', revenue: 65, users: 52 },
  { month: 'Nov', revenue: 80, users: 63 },
  { month: 'Dec', revenue: 74, users: 58 },
]

const CHART_HEIGHT = 200

export default function MonthlyChart() {
  const maxValue = Math.max(...DATA.map((d) => Math.max(d.revenue, d.users)))

  return (
    <div className="bg-white rounded-card shadow-[0_1px_2px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100">
        <h2 className="text-[20px] font-semibold text-[#1e293b]">Monthly Overview</h2>
      </div>

      <div className="px-5 py-4">
        <div className="flex items-center gap-5 mb-6">
          <label className="flex items-center gap-2 text-[14px] text-[#64748b]">
            <span className="w-3 h-3 rounded-[3px] bg-primary-500 inline-block" />
            Revenue
          </label>
          <label className="flex items-center gap-2 text-[14px] text-[#64748b]">
            <span className="w-3 h-3 rounded-[3px] bg-secondary-500 inline-block" />
            Users
          </label>
        </div>

        <div className="relative" style={{ height: CHART_HEIGHT }}>
          <div className="absolute inset-0 flex items-end gap-1 sm:gap-2">
            {DATA.map((d) => {
              const revenueHeight = (d.revenue / maxValue) * 100
              const usersHeight = (d.users / maxValue) * 100
              return (
                <div
                  key={d.month}
                  className="flex-1 flex flex-col justify-end gap-[2px] group cursor-pointer min-w-0"
                  title={`${d.month}: Revenue ${d.revenue}k, Users ${d.users}k`}
                >
                  <div
                    className="w-full rounded-t-[4px] bg-primary-500 transition-all duration-200 group-hover:bg-primary-600 min-w-[4px]"
                    style={{ height: `${revenueHeight}%` }}
                  />
                  <div
                    className="w-full rounded-t-[4px] bg-secondary-500 transition-all duration-200 group-hover:bg-secondary-600 min-w-[4px]"
                    style={{ height: `${usersHeight}%` }}
                  />
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex justify-between mt-2">
          {DATA.map((d) => (
            <span
              key={d.month}
              className="flex-1 text-center text-[14px] text-[#64748b] truncate px-0.5"
            >
              {d.month}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
