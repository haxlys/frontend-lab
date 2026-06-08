import {
  IconArrowDown,
  IconArrowUp,
  IconArrowUpRight,
} from './icons';
import { stats } from '../data/mock';

function Sparkline({ data, trendUp }: { data: number[]; trendUp: boolean }) {
  const w = 96;
  const h = 28;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = w / (data.length - 1);
  const points = data
    .map((v, i) => {
      const x = i * step;
      const y = h - ((v - min) / range) * h;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
  const stroke = trendUp ? '#2563EB' : '#94A3B8';
  const fill = trendUp ? 'rgba(37, 99, 235, 0.10)' : 'rgba(148, 163, 184, 0.12)';
  const areaPath = `M0,${h} L${points.split(' ').join(' L')} L${w},${h} Z`;
  return (
    <svg width={w} height={h} className="block">
      <path d={areaPath} fill={fill} />
      <polyline
        points={points}
        fill="none"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((s) => {
        const up = s.delta >= 0;
        return (
          <div
            key={s.id}
            className="card p-4 flex flex-col gap-3 group cursor-default"
          >
            <div className="flex items-start justify-between">
              <p className="text-xs font-medium text-ink-500">{s.label}</p>
              <button
                aria-label="자세히"
                className="text-ink-300 hover:text-ink-700 transition-colors"
              >
                <IconArrowUpRight size={14} />
              </button>
            </div>

            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-2xl font-semibold tracking-tight text-ink-900 tabular-nums">
                  {s.value}
                </p>
                <div className="mt-1 flex items-center gap-1.5 text-2xs">
                  <span
                    className={`inline-flex items-center gap-0.5 font-semibold ${
                      up ? 'text-success-700' : 'text-danger-700'
                    }`}
                  >
                    {up ? (
                      <IconArrowUp size={10} />
                    ) : (
                      <IconArrowDown size={10} />
                    )}
                    {Math.abs(s.delta).toFixed(1)}%
                  </span>
                  <span className="text-ink-400">{s.hint}</span>
                </div>
              </div>
              <Sparkline data={[...s.spark]} trendUp={up} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
