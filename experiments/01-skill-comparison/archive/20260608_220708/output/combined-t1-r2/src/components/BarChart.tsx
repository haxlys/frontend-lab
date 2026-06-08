import { useState, useMemo } from 'react'
import type { BarData } from '../types'

interface Props {
  data: BarData[]
}

export default function BarChart({ data }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const maxVal = useMemo(() => Math.max(...data.map((d) => d.value)), [data])

  return (
    <div className="bg-brand-surface rounded-card shadow-card overflow-hidden">
      <div className="px-5 py-4 sm:px-6 border-b border-slate-100 flex items-center justify-between">
        <h2 className="text-base font-semibold text-brand-text-primary">월별 수익</h2>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs text-brand-text-secondary">
            <span className="w-2.5 h-2.5 rounded-sm bg-brand-primary" />
            올해
          </span>
          <span className="flex items-center gap-1.5 text-xs text-brand-text-secondary">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-200" />
            작년
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        {/* Y-axis labels */}
        <div className="flex items-end gap-2 sm:gap-3" style={{ height: 180 }}>
          {data.map((d, i) => {
            const heightPct = (d.value / maxVal) * 100
            const isHovered = hoveredIndex === i

            return (
              <div key={d.month} className="flex-1 flex flex-col items-center justify-end h-full group">
                {/* Tooltip */}
                <div className={`mb-2 text-[11px] font-semibold text-brand-text-primary bg-white/95 backdrop-blur-sm shadow-elevated rounded px-2 py-1 transition-all duration-200 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'}`}>
                  ${d.value.toLocaleString()}
                </div>

                {/* Bars */}
                <div className="relative w-full max-w-[32px] flex flex-col justify-end gap-1" style={{ height: 'calc(100% - 28px)' }}>
                  {/* Current year bar */}
                  <div
                    className="w-full rounded-t-md bg-brand-primary transition-all duration-300 ease-out cursor-pointer hover:brightness-110"
                    style={{
                      height: `${heightPct}%`,
                      minHeight: d.value > 0 ? '4px' : '0',
                    }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />

                  {/* Last year bar (comparison) */}
                  <div
                    className="w-full rounded-t-md bg-slate-200 transition-all duration-300 ease-out"
                    style={{
                      height: `${Math.max(heightPct * 0.7, 4)}%`,
                    }}
                  />
                </div>

                {/* Month label */}
                <span className="mt-2.5 text-[11px] font-medium text-brand-text-secondary">
                  {d.month}
                </span>
              </div>
            )
          })}
        </div>

        {/* Summary stats */}
        <div className="mt-5 pt-3 border-t border-slate-100 grid grid-cols-2 gap-4">
          <div>
            <span className="text-[11px] text-brand-text-secondary">총 수익</span>
            <p className="text-sm font-bold text-brand-text-primary mt-0.5">
              ${data.reduce((sum, d) => sum + d.value, 0).toLocaleString()}
            </p>
          </div>
          <div>
            <span className="text-[11px] text-brand-text-secondary">월 평균</span>
            <p className="text-sm font-bold text-brand-text-primary mt-0.5">
              ${Math.round(data.reduce((sum, d) => sum + d.value, 0) / data.length).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
