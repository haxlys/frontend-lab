interface BarData {
  label: string;
  value: number;
}

const monthlyData: BarData[] = [
  { label: "Jan", value: 4200 },
  { label: "Feb", value: 3800 },
  { label: "Mar", value: 5100 },
  { label: "Apr", value: 4600 },
  { label: "May", value: 5900 },
  { label: "Jun", value: 5400 },
  { label: "Jul", value: 6800 },
  { label: "Aug", value: 7200 },
  { label: "Sep", value: 6500 },
  { label: "Oct", value: 7800 },
  { label: "Nov", value: 8300 },
  { label: "Dec", value: 9100 },
];

export function BarChart() {
  const maxValue = Math.max(...monthlyData.map((d) => d.value));

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-semibold text-slate-900">Monthly Revenue</h3>
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-brand-500" />
            2025
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-slate-200" />
            2024
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        {/* Y-axis labels */}
        <div className="flex h-56 items-end gap-1 sm:gap-2">
          <div className="hidden sm:flex shrink-0 w-10 flex-col justify-between pb-1 text-[10px] text-slate-400 text-right pr-2">
            <span>$10k</span>
            <span>$8k</span>
            <span>$6k</span>
            <span>$4k</span>
            <span>$2k</span>
            <span>$0</span>
          </div>

          {/* Bars */}
          {monthlyData.map((item) => {
            const heightPct = (item.value / maxValue) * 100;
            return (
              <div
                key={item.label}
                className="group relative flex flex-1 flex-col items-center justify-end"
              >
                {/* Tooltip */}
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-800 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none z-10">
                  ${item.value.toLocaleString()}
                </div>

                {/* 2024 bar (background) */}
                <div
                  className="w-full max-w-[28px] rounded-t-sm bg-slate-100 sm:max-w-[36px]"
                  style={{ height: `${heightPct * 0.7}%` }}
                />

                {/* 2025 bar (foreground) */}
                <div
                  className="w-full max-w-[28px] rounded-t-sm bg-brand-500 transition-colors hover:bg-brand-600 sm:max-w-[36px] absolute bottom-0"
                  style={{ height: `${heightPct}%` }}
                />
              </div>
            );
          })}
        </div>

        {/* X-axis labels */}
        <div className="flex gap-1 sm:gap-2 mt-2">
          <div className="hidden sm:block w-10 shrink-0" />
          {monthlyData.map((item) => (
            <span
              key={item.label}
              className="flex-1 text-center text-[10px] text-slate-400 sm:text-xs"
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
