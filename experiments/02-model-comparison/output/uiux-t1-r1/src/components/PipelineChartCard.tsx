import { useState } from 'react';
import { ArrowUpRight, MoreHorizontal, Download, Filter } from 'lucide-react';
import { cn, formatCompactNumber, formatCurrency } from '../lib/utils';

type Range = '7D' | '30D' | '90D';

const series: Record<Range, { labels: string[]; current: number[]; previous: number[] }> = {
  '7D': {
    labels: ['월', '화', '수', '목', '금', '토', '일'],
    current: [42, 58, 49, 71, 64, 52, 78],
    previous: [38, 44, 52, 55, 60, 48, 62],
  },
  '30D': {
    labels: Array.from({ length: 30 }, (_, i) => `${i + 1}일`),
    current: [42, 58, 49, 71, 64, 52, 78, 86, 64, 52, 71, 88, 92, 78, 64, 82, 96, 104, 88, 72, 80, 92, 98, 110, 96, 84, 92, 104, 116, 124],
    previous: [38, 44, 52, 55, 60, 48, 62, 58, 50, 54, 64, 72, 78, 70, 60, 74, 80, 86, 76, 64, 70, 82, 86, 92, 80, 72, 80, 88, 96, 102],
  },
  '90D': {
    labels: ['1월', '2월', '3월'],
    current: [320, 380, 460],
    previous: [280, 340, 410],
  },
};

const stages = [
  { name: '리드', value: 184, amount: 920000 },
  { name: '컨택', value: 132, amount: 1280000 },
  { name: '제안', value: 78, amount: 1640000 },
  { name: '협상', value: 42, amount: 1980000 },
  { name: '성사', value: 18, amount: 2460000 },
];

export function PipelineChartCard() {
  const [range, setRange] = useState<Range>('30D');
  const data = series[range];
  const total = data.current.reduce((sum, v) => sum + v, 0);
  const previousTotal = data.previous.reduce((sum, v) => sum + v, 0);
  const growth = ((total - previousTotal) / previousTotal) * 100;

  return (
    <section
      aria-label="파이프라인 진행 현황"
      className="flex h-full flex-col rounded-lg border border-border bg-card shadow-soft"
    >
      <header className="flex flex-col gap-3 border-b border-border p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold tracking-tight text-foreground">
            영업 파이프라인 진행 현황
          </h2>
          <p className="mt-0.5 text-xs text-muted-foreground">
            주간 신규 딜 및 전환 추이를 한눈에 확인하세요.
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <div
            role="tablist"
            aria-label="기간 선택"
            className="inline-flex rounded-md border border-border bg-muted/50 p-0.5"
          >
            {(['7D', '30D', '90D'] as Range[]).map((r) => (
              <button
                key={r}
                role="tab"
                aria-selected={range === r}
                onClick={() => setRange(r)}
                className={cn(
                  'h-7 rounded-[5px] px-2.5 text-xs font-medium transition-colors',
                  range === r
                    ? 'bg-card text-foreground shadow-soft'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {r}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="필터"
          >
            <Filter className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="더보기"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div className="grid gap-5 p-5 sm:grid-cols-3">
        <Metric
          label="기간 내 딜"
          value={formatCompactNumber(total)}
          delta={growth}
          helper="지난 기간 대비"
        />
        <Metric
          label="평균 딜 사이즈"
          value={formatCurrency(24800)}
          delta={4.2}
          helper="지난 기간 대비"
        />
        <Metric
          label="성사율"
          value="24.6%"
          delta={-1.4}
          helper="지난 기간 대비"
        />
      </div>

      <div className="px-5 pb-5">
        <div className="rounded-md border border-border bg-background/50 p-4">
          <LineChart
            labels={data.labels}
            current={data.current}
            previous={data.previous}
          />
        </div>
      </div>

      <div className="border-t border-border p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">단계별 분포</h3>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
          >
            전체 보기
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
        <ul className="space-y-2.5">
          {stages.map((stage) => {
            const max = Math.max(...stages.map((s) => s.value));
            const widthPct = (stage.value / max) * 100;
            return (
              <li key={stage.name} className="grid grid-cols-12 items-center gap-3">
                <span className="col-span-2 text-xs font-medium text-muted-foreground">
                  {stage.name}
                </span>
                <div className="col-span-7">
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${widthPct}%` }}
                    />
                  </div>
                </div>
                <span className="col-span-1 text-right text-xs font-semibold text-foreground tabular-nums">
                  {stage.value}
                </span>
                <span className="col-span-2 text-right text-xs text-muted-foreground tabular-nums">
                  {formatCompactNumber(stage.amount)}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex items-center justify-between border-t border-border px-5 py-3 text-xs text-muted-foreground">
        <span>업데이트: 방금 전</span>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-medium text-foreground transition-colors hover:bg-muted"
        >
          <Download className="h-3.5 w-3.5" />
          CSV 내보내기
        </button>
      </div>
    </section>
  );
}

function Metric({
  label,
  value,
  delta,
  helper,
}: {
  label: string;
  value: string;
  delta: number;
  helper: string;
}) {
  const positive = delta >= 0;
  return (
    <div>
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <p className="mt-1.5 text-2xl font-semibold tracking-tight text-foreground tabular-nums">
        {value}
      </p>
      <p className="mt-1 inline-flex items-center gap-1 text-xs">
        <span
          className={cn(
            'font-semibold tabular-nums',
            positive ? 'text-emerald-600' : 'text-rose-600'
          )}
        >
          {positive ? '+' : ''}
          {delta.toFixed(1)}%
        </span>
        <span className="text-muted-foreground">{helper}</span>
      </p>
    </div>
  );
}

function LineChart({
  labels,
  current,
  previous,
}: {
  labels: string[];
  current: number[];
  previous: number[];
}) {
  const width = 800;
  const height = 220;
  const padding = { top: 16, right: 8, bottom: 28, left: 36 };
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;
  const all = [...current, ...previous];
  const max = Math.ceil(Math.max(...all) / 20) * 20;
  const min = 0;
  const range = max - min || 1;

  const xStep = innerW / Math.max(current.length - 1, 1);

  const toPoints = (vals: number[]) =>
    vals
      .map((v, i) => {
        const x = padding.left + i * xStep;
        const y = padding.top + innerH - ((v - min) / range) * innerH;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');

  const currentPoints = current.map((v, i) => {
    const x = padding.left + i * xStep;
    const y = padding.top + innerH - ((v - min) / range) * innerH;
    return { x, y, value: v };
  });

  const ticks = 4;
  const yTicks = Array.from({ length: ticks + 1 }, (_, i) => {
    const value = (max / ticks) * i;
    const y = padding.top + innerH - (i / ticks) * innerH;
    return { value, y };
  });

  return (
    <div className="w-full">
      <div className="mb-3 flex items-center gap-4 text-xs">
        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-accent" />
          이번 기간
        </span>
        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          지난 기간
        </span>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-48 w-full"
        role="img"
        aria-label="기간별 딜 추이 라인 차트"
      >
        {yTicks.map((t, i) => (
          <g key={i}>
            <line
              x1={padding.left}
              x2={width - padding.right}
              y1={t.y}
              y2={t.y}
              stroke="#E2E8F0"
              strokeDasharray={i === 0 ? '0' : '2 3'}
            />
            <text
              x={padding.left - 8}
              y={t.y + 3}
              textAnchor="end"
              className="fill-muted-foreground"
              fontSize="10"
            >
              {Math.round(t.value)}
            </text>
          </g>
        ))}

        <polyline
          points={toPoints(previous)}
          fill="none"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points={toPoints(current)}
          fill="none"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {currentPoints.map(
          (p, i) =>
            i % Math.ceil(currentPoints.length / 6) === 0 && (
              <circle
                key={i}
                cx={p.x}
                cy={p.y}
                r="3"
                fill="#FFFFFF"
                stroke="#2563EB"
                strokeWidth="2"
              />
            )
        )}

        {labels.map((label, i) => {
          if (i % Math.ceil(labels.length / 6) !== 0 && i !== labels.length - 1) return null;
          const x = padding.left + i * xStep;
          return (
            <text
              key={i}
              x={x}
              y={height - 8}
              textAnchor="middle"
              className="fill-muted-foreground"
              fontSize="10"
            >
              {label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
