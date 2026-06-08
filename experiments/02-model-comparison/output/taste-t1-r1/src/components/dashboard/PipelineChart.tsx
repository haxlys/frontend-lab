import { useState } from 'react';
import { Card, CardHeader } from '@/components/ui/Card';
import { Segmented, Select } from '@/components/ui/Controls';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icon';
import { stageMeta, type Stage } from '@/lib/types';
import { stageTotals, weeklyTrend } from '@/lib/data';
import { cn } from '@/lib/cn';

type View = 'volume' | 'value';
type Granularity = 'volume' | 'value';

export function PipelineChart() {
  const [view, setView] = useState<View>('volume');
  const [gran, setGran] = useState<Granularity>('volume');

  return (
    <Card padding="md" className="flex flex-col">
      <CardHeader
        title="Pipeline progress"
        description="New deals entering each stage, last 8 weeks"
        action={
          <div className="flex items-center gap-2">
            <Segmented<View>
              value={view}
              onChange={setView}
              options={[
                { value: 'volume', label: 'Volume' },
                { value: 'value', label: 'Value' },
              ]}
            />
            <Select
              ariaLabel="Granularity"
              value={gran}
              onChange={(v) => setGran(v as Granularity)}
              options={[
                { value: 'volume', label: 'Weekly' },
                { value: 'value', label: 'Monthly' },
              ]}
            />
          </div>
        }
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_180px]">
        {/* Chart */}
        <div className="rounded-md border border-line bg-surface-base/40 p-4">
          <Chart view={view} />

          {/* Legend */}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-ink-secondary">
            {(Object.keys(stageMeta) as Stage[]).map((s) => (
              <div key={s} className="inline-flex items-center gap-1.5">
                <span className={cn('h-2 w-2 rounded-xs', stageMeta[s].bar)} />
                <span>{stageMeta[s].label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stage summary */}
        <ul className="divide-y divide-line rounded-md border border-line bg-surface-base/40">
          {stageTotals.map((s) => {
            const m = stageMeta[s.stage];
            return (
              <li key={s.stage} className="flex items-center justify-between px-3.5 py-2.5">
                <div className="flex min-w-0 items-center gap-2">
                  <span className={cn('h-2 w-2 shrink-0 rounded-xs', m.bar)} />
                  <span className="truncate text-xs font-medium text-ink-primary">
                    {m.label}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold text-ink-primary num">{s.count}</p>
                  <p className="text-2xs text-ink-tertiary num">${(s.value / 1000).toFixed(0)}k</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
}

function Chart({ view }: { view: View }) {
  const w = 560;
  const h = 220;
  const padX = 28;
  const padY = 18;
  const innerW = w - padX * 2;
  const innerH = h - padY * 2;

  const stages: Stage[] = ['lead', 'qualified', 'proposal', 'negotiation', 'won'];
  const totals = weeklyTrend.map((w) => {
    if (view === 'volume') {
      return stages.reduce((acc, s) => acc + w[s], 0);
    }
    // Mock value series — proportional
    return stages.reduce((acc, s) => acc + w[s] * 18, 0);
  });
  const max = Math.max(...totals);
  const min = 0;
  const span = max - min || 1;
  const bw = innerW / weeklyTrend.length;
  const barW = Math.min(bw * 0.55, 36);

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <div className="flex items-baseline gap-2">
          <span className="num text-xl font-semibold text-ink-primary">
            {view === 'volume'
              ? totals.reduce((a, b) => a + b, 0).toLocaleString()
              : '$' + (totals.reduce((a, b) => a + b, 0) * 1000).toLocaleString()}
          </span>
          <span className="text-xs text-ink-tertiary">
            {view === 'volume' ? 'deals created' : 'weighted value'}
          </span>
        </div>
        <Badge tone="emerald" leadingIcon={<Icon.ArrowUp size={10} />}>
          18.2% vs prev. period
        </Badge>
      </div>

      <svg viewBox={`0 0 ${w} ${h}`} className="mt-3 w-full" role="img" aria-label="Pipeline chart">
        {/* Y grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((p) => {
          const y = padY + innerH - p * innerH;
          return (
            <g key={p}>
              <line
                x1={padX}
                x2={w - padX}
                y1={y}
                y2={y}
                stroke="#E2E8F0"
                strokeDasharray={p === 0 ? '0' : '2 3'}
                strokeWidth={1}
              />
            </g>
          );
        })}

        {/* Stacked bars */}
        {weeklyTrend.map((row, i) => {
          const x = padX + bw * i + (bw - barW) / 2;
          let acc = 0;
          return (
            <g key={row.week}>
              {stages.map((s) => {
                const v = view === 'volume' ? row[s] : row[s] * 18;
                const segH = (v / span) * innerH;
                const y = padY + innerH - acc - segH;
                acc += segH;
                const first = s === 'lead';
                const last = s === 'won';
                return (
                  <rect
                    key={s}
                    x={x}
                    y={y}
                    width={barW}
                    height={Math.max(segH - (first ? 0 : 1), 0)}
                    className={stageMeta[s].bar}
                    rx={last ? 3 : 0}
                    ry={last ? 3 : 0}
                  />
                );
              })}
              <text
                x={x + barW / 2}
                y={h - 4}
                textAnchor="middle"
                className="fill-ink-tertiary"
                fontSize={10}
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                {row.week}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
