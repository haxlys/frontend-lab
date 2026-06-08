import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/cn';
import { kpis } from '@/lib/data';

function Sparkline({ data, trend }: { data: number[]; trend: 'up' | 'down' | 'flat' }) {
  const w = 100;
  const h = 28;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / span) * (h - 4) - 2;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
  const area = `${points} ${w},${h} 0,${h}`;
  const stroke =
    trend === 'up' ? '#2563EB' : trend === 'down' ? '#E11D48' : '#64748B';
  const fill = trend === 'up' ? 'rgba(37,99,235,0.10)' : trend === 'down' ? 'rgba(225,29,72,0.10)' : 'rgba(100,116,139,0.10)';

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-7 w-full" preserveAspectRatio="none" aria-hidden>
      <polygon points={area} fill={fill} />
      <polyline
        points={points}
        fill="none"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function KpiRow() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map((k) => {
        const positive = k.delta >= 0;
        const trend: 'up' | 'down' = positive ? 'up' : 'down';
        return (
          <div
            key={k.label}
            className="card relative flex flex-col gap-3 p-4 transition-shadow duration-150 hover:shadow-card-hover"
          >
            <div className="flex items-start justify-between">
              <p className="text-xs font-medium text-ink-tertiary">{k.label}</p>
              <button
                type="button"
                aria-label="More"
                className="-mr-1 -mt-0.5 grid h-6 w-6 place-items-center rounded-xs text-ink-muted opacity-0 transition-opacity duration-150 hover:bg-surface-sunken hover:text-ink-secondary group-hover:opacity-100 focus-ring"
              >
                <Icon.More size={14} />
              </button>
            </div>

            <div className="flex items-end justify-between gap-3">
              <div className="min-w-0">
                <p className="num truncate text-2xl font-semibold leading-tight text-ink-primary">
                  {k.value}
                  {'valueSuffix' in k && k.valueSuffix ? (
                    <span className="ml-1 text-sm font-medium text-ink-tertiary">
                      {k.valueSuffix}
                    </span>
                  ) : null}
                </p>
                <p className="mt-1 text-2xs text-ink-tertiary">{k.hint}</p>
              </div>
              <span
                className={cn(
                  'inline-flex shrink-0 items-center gap-0.5 rounded-xs px-1.5 py-0.5 text-2xs font-semibold num',
                  positive ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700',
                )}
              >
                {positive ? <Icon.ArrowUp size={10} /> : <Icon.ArrowDown size={10} />}
                {Math.abs(k.delta).toFixed(1)}%
              </span>
            </div>

            <div className="-mb-1">
              <Sparkline data={k.spark as unknown as number[]} trend={trend} />
            </div>

            <p className="-mt-1 text-2xs text-ink-muted">
              <span className={cn(positive ? 'text-emerald-700' : 'text-rose-700')}>
                {positive ? '+' : ''}
                {k.delta.toFixed(1)}%
              </span>{' '}
              {k.deltaLabel}
            </p>
          </div>
        );
      })}
    </div>
  );
}
