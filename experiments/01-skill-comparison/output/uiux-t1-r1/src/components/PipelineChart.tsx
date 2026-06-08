import type { PipelineStage } from '../types'

export function PipelineChart({ stages }: { stages: PipelineStage[] }) {
  const maxValue = Math.max(...stages.map((s) => s.value))

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-5 h-full">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-semibold text-slate-800">Pipeline Progress</h3>
        <span className="text-xs text-slate-400 font-medium">{stages.reduce((a, b) => a + b.deals, 0)} total deals</span>
      </div>

      <div className="space-y-3">
        {stages.map((stage) => (
          <div key={stage.name}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-slate-600">{stage.name}</span>
              <span className="text-xs text-slate-400">{stage.deals} deals</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(stage.value / maxValue) * 100}%`,
                  backgroundColor: stage.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
        <div className="text-center">
          <p className="text-lg font-semibold text-slate-800">$216,000</p>
          <p className="text-xs text-slate-400">Total Pipeline Value</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-teal-600">$48,000</p>
          <p className="text-xs text-slate-400">Closed This Month</p>
        </div>
      </div>
    </div>
  )
}
