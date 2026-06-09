import type { PipelineStage } from '../../types'

interface PipelineChartProps {
  data: PipelineStage[]
}

const stageColors = [
  'bg-accent-500',
  'bg-sky-500',
  'bg-amber-500',
  'bg-emerald-500',
  'bg-purple-500',
]

export function PipelineChart({ data }: PipelineChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value))

  const formatCurrency = (v: number) =>
    new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
      maximumFractionDigits: 0,
    }).format(v)

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-semibold text-slate-800">
          영업 파이프라인 현황
        </h3>
        <span className="text-xs text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
          이번 달
        </span>
      </div>

      <div className="space-y-3">
        {data.map((stage, i) => (
          <div key={stage.name} className="flex items-center gap-3">
            <span className="text-xs font-medium text-slate-500 w-20 text-right shrink-0">
              {stage.name}
            </span>
            <div className="flex-1 bg-slate-100 rounded-full h-7 relative overflow-hidden">
              <div
                className={`${stageColors[i % stageColors.length]} h-full rounded-full transition-all duration-700 ease-out flex items-center justify-end pr-2.5`}
                style={{ width: `${Math.max((stage.value / maxValue) * 100, 8)}%` }}
              >
                <span className="text-xs font-semibold text-white">
                  {stage.count}건
                </span>
              </div>
            </div>
            <span className="text-xs font-medium text-slate-600 w-24 text-right shrink-0 tabular-nums">
              {formatCurrency(stage.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
