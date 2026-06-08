import { type FC } from 'react';

interface BarChartProps {
  data: { stage: string; count: number; value: number }[];
}

const BarChart: FC<BarChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="flex items-end gap-3 h-48 px-1">
      {data.map((item) => {
        const height = (item.value / maxValue) * 100;
        return (
          <div key={item.stage} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full flex flex-col items-center gap-1">
              <span className="text-xs font-semibold text-navy">{item.count}</span>
              <div
                className="w-full bg-blue-500 rounded-t-sm transition-all duration-300 hover:bg-blue-600"
                style={{ height: `${height * 1.6}px` }}
              />
            </div>
            <span className="text-[11px] text-slate-500 text-center leading-tight whitespace-nowrap">
              {item.stage}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default BarChart;
