import type { PipelineStage } from '../data/types'

interface Props {
  pipeline: PipelineStage[]
}

const maxValue = 280000

export default function PipelineChart({ pipeline }: Props) {
  return (
    <div className="bg-white border border-slate-200 rounded-card p-4 lg:p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-semibold text-slate-800">Pipeline Progress</h3>
        <select className="text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-btn px-2 py-1 focus:outline-none">
          <option>This Quarter</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="space-y-4">
        {pipeline.map((stage) => {
          const pct = Math.round((stage.value / maxValue) * 100)
          return (
            <div key={stage.name}>
              <div className="flex justify-between items-baseline mb-1.5">
                <span className="text-sm font-medium text-slate-600">{stage.name}</span>
                <span className="text-xs text-slate-400">
                  {stage.deals} deals &middot; ${(stage.value / 1000).toFixed(1)}k
                </span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${Math.max(pct, 4)}%`,
                    backgroundColor:
                      pct >= 80 ? '#059669' : pct >= 40 ? '#2563EB' : '#94A3B8',
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="w-3 h-3 rounded-sm bg-slate-300" /> Early
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="w-3 h-3 rounded-sm bg-accent" /> Mid
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="w-3 h-3 rounded-sm bg-success" /> Won
        </div>
      </div>
    </div>
  )
}
