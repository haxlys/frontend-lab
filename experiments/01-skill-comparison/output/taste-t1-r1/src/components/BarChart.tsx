const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const data = [
  { month: "Jan", value: 4100 },
  { month: "Feb", value: 3200 },
  { month: "Mar", value: 5200 },
  { month: "Apr", value: 4700 },
  { month: "May", value: 6100 },
  { month: "Jun", value: 5600 },
  { month: "Jul", value: 7200 },
  { month: "Aug", value: 6700 },
  { month: "Sep", value: 8100 },
  { month: "Oct", value: 7400 },
  { month: "Nov", value: 6900 },
  { month: "Dec", value: 9200 },
];

const max = Math.max(...data.map((d) => d.value));

export default function BarChart() {
  return (
    <div className="rounded-xl bg-surface-elevated border border-border p-5 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-text-primary font-semibold text-lg">Monthly Revenue</h2>
          <p className="text-text-muted text-sm mt-0.5">vs previous year</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-brand" />
            <span className="text-text-secondary">2025</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-border" />
            <span className="text-text-secondary">2024</span>
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col min-h-[240px]">
        {/* Y-axis grid */}
        <div className="flex-1 relative">
          {[0, 25, 50, 75, 100].map((pct) => (
            <div
              key={pct}
              className="absolute left-0 right-0 border-t border-border/40"
              style={{ bottom: `${pct}%` }}
            />
          ))}
        </div>

        {/* Bars + X-axis */}
        <div className="flex items-end justify-between gap-1 sm:gap-2 pt-2 h-[200px]">
          {data.map((d) => {
            const heightPct = (d.value / max) * 100;
            return (
              <div key={d.month} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                <div className="w-full relative flex flex-col items-center justify-end h-full">
                  <div
                    className="w-full rounded-t-md bg-gradient-to-t from-brand to-brand-light transition-all duration-300 hover:from-brand-light hover:to-brand-light/70 cursor-pointer group relative"
                    style={{ height: `${heightPct}%` }}
                  >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      ${d.value.toLocaleString()}
                    </span>
                    {/* 2024 comparison bar (slightly transparent, behind) */}
                    <div
                      className="absolute bottom-0 left-0 right-0 rounded-t-sm bg-border"
                      style={{ height: `${Math.max(0, heightPct * 0.7)}%` }}
                    />
                  </div>
                </div>
                <span className="text-xs text-text-muted">{d.month}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
