import { useMemo } from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { pipelineSeries } from '../data/mock';
import { IconMore } from './icons';

export function PipelineChart() {
  const { categories, series } = pipelineSeries;

  const max = useMemo(
    () =>
      Math.max(...series.flatMap((s) => s.data)) *
      (1 + series.length * 0.05),
    [series],
  );

  const W = 720;
  const H = 240;
  const padL = 36;
  const padR = 12;
  const padT = 16;
  const padB = 28;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;

  const xStep = innerW / (categories.length - 1);
  const yFor = (v: number) => padT + innerH - (v / max) * innerH;

  const yTicks = 4;
  const tickValues = Array.from(
    { length: yTicks + 1 },
    (_, i) => (max / yTicks) * i,
  );

  return (
    <div className="card p-5 h-full flex flex-col">
      <SectionHeader
        title="영업 파이프라인 진행 현황"
        description="단계별 월간 전환 흐름"
        action={
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3 text-2xs">
              {series.map((s) => (
                <span
                  key={s.name}
                  className="inline-flex items-center gap-1.5 text-ink-600"
                >
                  <span
                    className="h-2 w-2 rounded-sm"
                    style={{ background: s.color }}
                  />
                  {s.name}
                </span>
              ))}
            </div>
            <button className="text-ink-400 hover:text-ink-700">
              <IconMore size={16} />
            </button>
          </div>
        }
      />

      <div className="flex items-center gap-2 mb-3">
        {['7D', '30D', '3M', '12M', '전체'].map((t, i) => (
          <button
            key={t}
            className={`h-6 px-2 text-2xs font-medium rounded-md ${
              i === 2
                ? 'bg-ink-100 text-ink-900'
                : 'text-ink-500 hover:text-ink-800'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex-1 min-h-[220px]">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {tickValues.map((v, i) => {
            const y = yFor(v);
            return (
              <g key={i}>
                <line
                  x1={padL}
                  x2={W - padR}
                  y1={y}
                  y2={y}
                  stroke="#F1F5F9"
                  strokeWidth={1}
                />
                <text
                  x={padL - 8}
                  y={y + 3}
                  textAnchor="end"
                  fontSize={10}
                  fill="#94A3B8"
                >
                  {Math.round(v)}
                </text>
              </g>
            );
          })}

          {categories.map((c, i) => {
            const x = padL + i * xStep;
            return (
              <text
                key={c}
                x={x}
                y={H - 8}
                textAnchor="middle"
                fontSize={10}
                fill="#94A3B8"
              >
                {c}
              </text>
            );
          })}

          {series.map((s) => {
            const points = s.data
              .map((v, i) => `${padL + i * xStep},${yFor(v)}`)
              .join(' ');
            const areaPath = `M${padL},${padT + innerH} L${points
              .split(' ')
              .join(' L')} L${padL + (categories.length - 1) * xStep},${
              padT + innerH
            } Z`;
            return (
              <g key={s.name}>
                <path
                  d={areaPath}
                  fill={s.color}
                  fillOpacity={0.08}
                  stroke="none"
                />
                <polyline
                  points={points}
                  fill="none"
                  stroke={s.color}
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {s.data.map((v, i) => (
                  <circle
                    key={i}
                    cx={padL + i * xStep}
                    cy={yFor(v)}
                    r={2}
                    fill="#fff"
                    stroke={s.color}
                    strokeWidth={1.5}
                  />
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-3 pt-3 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        {series.map((s) => {
          const total = s.data.reduce((a, b) => a + b, 0);
          return (
            <div key={s.name} className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-sm shrink-0"
                style={{ background: s.color }}
              />
              <span className="text-ink-500 truncate">{s.name}</span>
              <span className="ml-auto font-semibold text-ink-900 tabular-nums">
                {total.toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
