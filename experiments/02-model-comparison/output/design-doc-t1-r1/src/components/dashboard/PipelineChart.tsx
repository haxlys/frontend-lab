import { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { cn, formatCurrency } from '../../lib/utils';

type Point = { month: string; value: number; won: number };

const data: Point[] = [
  { month: '1월', value: 120, won: 42 },
  { month: '2월', value: 158, won: 55 },
  { month: '3월', value: 142, won: 48 },
  { month: '4월', value: 196, won: 71 },
  { month: '5월', value: 224, won: 88 },
  { month: '6월', value: 210, won: 76 },
  { month: '7월', value: 268, won: 102 },
  { month: '8월', value: 302, won: 118 },
  { month: '9월', value: 284, won: 96 },
  { month: '10월', value: 348, won: 134 },
  { month: '11월', value: 392, won: 152 },
  { month: '12월', value: 420, won: 168 },
];

const ranges = ['7일', '30일', '90일', '12개월'] as const;
type Range = (typeof ranges)[number];

export function PipelineChart() {
  const [range, setRange] = useState<Range>('12개월');
  const max = Math.max(...data.map((d) => d.value));
  const wonMax = Math.max(...data.map((d) => d.won));
  const total = data.reduce((acc, d) => acc + d.value, 0);
  const wonTotal = data.reduce((acc, d) => acc + d.won, 0);

  return (
    <section className="flex flex-col rounded-lg border border-ink-200 bg-white shadow-soft">
      <header className="flex items-start justify-between gap-4 border-b border-ink-200 p-5">
        <div>
          <h2 className="text-base font-semibold tracking-tight text-ink-900">
            영업 파이프라인 진행 현황
          </h2>
          <p className="mt-0.5 text-sm text-ink-500">
            월별 잠재 매출과 성사된 딜의 추이
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-3 text-xs text-ink-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand-500" /> 파이프라인
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-teal-500" /> 성사
            </span>
          </div>
          <div className="inline-flex rounded-md border border-ink-200 p-0.5 text-xs">
            {ranges.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRange(r)}
                className={cn(
                  'rounded px-2.5 py-1 font-medium transition-colors',
                  range === r
                    ? 'bg-ink-900 text-white'
                    : 'text-ink-500 hover:text-ink-800'
                )}
              >
                {r}
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label="더보기"
            className="rounded-md p-1.5 text-ink-400 hover:bg-ink-100 hover:text-ink-700"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-4 px-5 pt-5 sm:grid-cols-3">
        <Metric label="총 파이프라인" value={formatCurrency(total * 1000)} />
        <Metric label="성사된 딜" value={formatCurrency(wonTotal * 1000)} accent="teal" />
        <Metric
          label="평균 전환율"
          value={`${((wonTotal / total) * 100).toFixed(1)}%`}
          accent="brand"
        />
      </div>

      <div className="flex-1 p-5">
        <div className="flex h-64 items-end gap-2 sm:gap-3">
          {data.map((d) => {
            const h = (d.value / max) * 100;
            const wH = (d.won / wonMax) * 100;
            return (
              <div key={d.month} className="group flex flex-1 flex-col items-center gap-1.5">
                <div className="relative flex h-full w-full items-end justify-center gap-1">
                  <div
                    className="w-full max-w-[14px] rounded-sm bg-ink-200 transition-colors group-hover:bg-ink-300 sm:max-w-[18px]"
                    style={{ height: `${h}%` }}
                  />
                  <div
                    className="w-full max-w-[14px] rounded-sm bg-brand-500 transition-colors group-hover:bg-brand-600 sm:max-w-[18px]"
                    style={{ height: `${wH}%` }}
                  />
                </div>
                <span className="text-2xs text-ink-500">{d.month}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Metric({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: 'brand' | 'teal';
}) {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-ink-500">{label}</span>
      <span
        className={cn(
          'mt-1 text-lg font-semibold tracking-tight',
          accent === 'teal' && 'text-teal-600',
          accent === 'brand' && 'text-brand-600',
          !accent && 'text-ink-900'
        )}
      >
        {value}
      </span>
    </div>
  );
}
