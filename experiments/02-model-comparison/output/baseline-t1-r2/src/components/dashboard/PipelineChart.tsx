import { useMemo, useState } from 'react';
import { Card, SectionHeader } from '@/components/ui/Card';
import { pipelineStages, trendData } from '@/data';
import { cn } from '@/lib/cn';

type Tab = 'pipeline' | 'trend';
const tabs: { id: Tab; label: string }[] = [
  { id: 'pipeline', label: 'Pipeline' },
  { id: 'trend', label: 'Revenue trend' },
];

const ranges = ['7D', '30D', '90D', '1Y'];

export function PipelineChart() {
  const [tab, setTab] = useState<Tab>('pipeline');
  const [range, setRange] = useState('30D');

  const totalDeals = pipelineStages.reduce((sum, s) => sum + s.value, 0);
  const weightedValue =
    pipelineStages.reduce(
      (sum, s) =>
        sum + s.value * (s.name === 'Closed Won' ? 1 : s.name === 'Negotiation' ? 0.7 : s.name === 'Proposal' ? 0.45 : s.name === 'Qualified' ? 0.2 : 0.05),
      0,
    ) * 12_500;

  return (
    <Card className="h-full flex flex-col">
      <SectionHeader
        title="Sales performance"
        description="Deal progression and revenue overview"
        action={
          <div className="flex items-center gap-2">
            <div className="hidden sm:inline-flex p-0.5 rounded-sm bg-ink-100">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={cn(
                    'px-2.5 h-7 text-xs font-medium rounded-[5px] transition-colors',
                    tab === t.id ? 'bg-white text-ink-900 shadow-soft' : 'text-ink-500 hover:text-ink-700',
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="hidden md:inline-flex p-0.5 rounded-sm border border-ink-200">
              {ranges.map((r) => (
                <button
                  key={r}
                  onClick={() => setRange(r)}
                  className={cn(
                    'px-2 h-7 text-2xs font-semibold transition-colors first:rounded-l-[5px] last:rounded-r-[5px]',
                    range === r ? 'bg-ink-900 text-white' : 'text-ink-500 hover:text-ink-700',
                  )}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        }
      />

      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 mb-5">
        <div>
          <div className="text-2xs text-ink-500 font-medium uppercase tracking-wider">Weighted pipeline</div>
          <div className="text-xl font-semibold tracking-tight text-ink-900 tabular-nums">
            ${(weightedValue / 1000).toFixed(1)}k
          </div>
        </div>
        <div className="h-8 w-px bg-ink-200 hidden sm:block" />
        <div>
          <div className="text-2xs text-ink-500 font-medium uppercase tracking-wider">Open deals</div>
          <div className="text-xl font-semibold tracking-tight text-ink-900 tabular-nums">
            {totalDeals}
          </div>
        </div>
        <div className="h-8 w-px bg-ink-200 hidden sm:block" />
        <div>
          <div className="text-2xs text-ink-500 font-medium uppercase tracking-wider">Win rate</div>
            <div className="text-xl font-semibold tracking-tight text-ink-900 tabular-nums">
              {((pipelineStages[pipelineStages.length - 1]!.value / totalDeals) * 100).toFixed(1)}%
            </div>
        </div>
      </div>

      <div className="flex-1 min-h-[260px]">
        {tab === 'pipeline' ? <PipelineBars /> : <TrendLine />}
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 mt-2 border-t border-ink-100">
        {pipelineStages.map((s) => (
          <div key={s.name} className="flex items-center gap-1.5 text-xs">
            <span className="h-2 w-2 rounded-sm" style={{ background: s.color }} />
            <span className="text-ink-600">{s.name}</span>
            <span className="text-ink-400 tabular-nums">{s.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function PipelineBars() {
  const max = Math.max(...pipelineStages.map((s) => s.value));
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 grid grid-cols-5 gap-3 sm:gap-5 items-end">
        {pipelineStages.map((s) => {
          const heightPct = (s.value / max) * 100;
          return (
            <div key={s.name} className="flex flex-col items-center gap-2 min-w-0">
              <div className="text-xs font-semibold text-ink-900 tabular-nums">{s.value}</div>
              <div className="w-full h-40 sm:h-48 flex items-end">
                <div
                  className="w-full rounded-sm transition-all duration-500"
                  style={{
                    height: `${heightPct}%`,
                    background: s.color,
                    opacity: 0.92,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-5 gap-3 sm:gap-5 mt-2">
        {pipelineStages.map((s) => (
          <div key={s.name} className="text-2xs font-medium text-ink-500 text-center truncate">
            {s.name}
          </div>
        ))}
      </div>
    </div>
  );
}

function TrendLine() {
  const { path, areaPath, points, max } = useMemo((): { path: { current: string; previous: string }; areaPath: string; points: { x: number; y: number }[]; max: number } => {
    const w = 600;
    const h = 220;
    const padding = { top: 16, right: 8, bottom: 8, left: 8 };
    const innerW = w - padding.left - padding.right;
    const innerH = h - padding.top - padding.bottom;
    const max = Math.max(...trendData.flatMap((d) => [d.current, d.previous]));
    const stepX = innerW / (trendData.length - 1);

    const ptToCoord = (val: number, i: number) => {
      const x = padding.left + i * stepX;
      const y = padding.top + innerH - (val / max) * innerH;
      return { x, y };
    };

    const currentPts = trendData.map((d, i) => ptToCoord(d.current, i));
    const previousPts = trendData.map((d, i) => ptToCoord(d.previous, i));

    const toPath = (pts: { x: number; y: number }[]) =>
      pts
        .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
        .join(' ');

    const currentPath = toPath(currentPts);
    const previousPath = toPath(previousPts);
    const last = currentPts[currentPts.length - 1]!;
    const first = currentPts[0]!;
    const areaPath = `${currentPath} L ${last.x} ${h - padding.bottom} L ${first.x} ${h - padding.bottom} Z`;

    return { path: { current: currentPath, previous: previousPath }, areaPath, points: currentPts, max };
  }, []);

  const gridYs = [0, 0.25, 0.5, 0.75, 1];
  const gridLines = gridYs.map((p) => Math.round(max * p));

  return (
    <div className="w-full h-full">
      <svg
        viewBox="0 0 600 220"
        preserveAspectRatio="none"
        className="w-full h-40 sm:h-48"
        role="img"
        aria-label="Revenue trend"
      >
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>
        </defs>

        {gridLines.map((_, i) => (
          <line
            key={i}
            x1="0"
            x2="600"
            y1={16 + (1 - i / (gridLines.length - 1)) * (220 - 16 - 8)}
            y2={16 + (1 - i / (gridLines.length - 1)) * (220 - 16 - 8)}
            stroke="#E2E8F0"
            strokeDasharray="2 4"
            strokeWidth="1"
          />
        ))}

        <path d={areaPath} fill="url(#areaGrad)" />
        <path d={path.previous} fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 3" />
        <path d={path.current} fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="3" fill="white" stroke="#2563EB" strokeWidth="1.75" />
        ))}
      </svg>
      <div className="grid grid-cols-10 mt-1">
        {trendData.map((d) => (
          <div key={d.month} className="text-2xs text-ink-400 text-center">
            {d.month}
          </div>
        ))}
      </div>
    </div>
  );
}
