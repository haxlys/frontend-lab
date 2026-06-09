import type { PipelineStage } from '../types'

interface PipelineChartProps {
  stages: PipelineStage[]
}

export default function PipelineChart({ stages }: PipelineChartProps) {
  const maxValue = Math.max(...stages.map((s) => s.value))

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-1 text-sm font-semibold text-slate-800">영업 파이프라인</h3>
      <p className="mb-5 text-xs text-slate-400">스테이지별 현재 딜 수</p>
      <div className="flex items-end gap-4 h-48">
        {stages.map((stage) => (
          <div key={stage.stage} className="flex flex-1 flex-col items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">{stage.value}</span>
            <div className="relative w-full flex-1 flex items-end">
              <div
                className="w-full rounded-t-md transition-all duration-500 ease-out"
                style={{
                  height: `${(stage.value / maxValue) * 100}%`,
                  backgroundColor: stage.color,
                }}
              />
            </div>
            <span className="text-[11px] text-slate-500 text-center leading-tight mt-1">
              {stage.stage}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
