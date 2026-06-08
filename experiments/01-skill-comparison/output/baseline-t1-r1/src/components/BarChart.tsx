export interface BarDataPoint {
  label: string;
  value: number;
  color?: string;
}

interface BarChartProps {
  title: string;
  data: BarDataPoint[];
  maxValue?: number;
}

export function BarChart({ title, data, maxValue }: BarChartProps) {
  const max = maxValue ?? Math.max(...data.map((d) => d.value));

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 h-full">
      <h3 className="text-sm font-semibold text-navy-900 mb-6">{title}</h3>
      <div className="flex items-end justify-between gap-3 h-[180px]">
        {data.map((point) => {
          const height = (point.value / max) * 100;
          return (
            <div key={point.label} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
              <div className="w-full flex flex-col items-center gap-1">
                <span className="text-xs font-semibold text-navy-800">
                  {point.value}
                </span>
                <div
                  className="w-full rounded-t-md transition-all duration-300 hover:opacity-85"
                  style={{
                    height: `${height}%`,
                    backgroundColor: point.color ?? "#2563EB",
                    minHeight: 4,
                  }}
                />
              </div>
              <span className="text-[11px] text-slate-400 font-medium mt-1">
                {point.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
