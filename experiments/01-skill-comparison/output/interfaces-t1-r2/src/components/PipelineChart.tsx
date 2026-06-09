interface StageBar {
  label: string
  count: number
  color: string
}

const stages: StageBar[] = [
  { label: 'Lead', count: 48, color: '#94a3b8' },
  { label: 'Qualified', count: 32, color: '#60a5fa' },
  { label: 'Proposal', count: 18, color: '#2563eb' },
  { label: 'Negotiation', count: 11, color: '#f59e0b' },
  { label: 'Closed Won', count: 26, color: '#10b981' },
]

const maxCount = Math.max(...stages.map((s) => s.count))

export function PipelineChart() {
  return (
    <div className="bg-white rounded-[8px] border border-slate-200 p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-semibold text-slate-800">Pipeline Progress</h3>
          <p className="text-xs text-slate-400 mt-0.5">Deals by stage this quarter</p>
        </div>
        <select className="text-xs font-medium text-slate-500 bg-slate-50 border border-slate-200 rounded-[6px] px-2.5 py-1.5 outline-none cursor-pointer">
          <option>This Quarter</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="space-y-3">
        {stages.map((stage) => (
          <div key={stage.label} className="flex items-center gap-3">
            <span className="w-20 text-xs font-medium text-slate-500 shrink-0 text-right">
              {stage.label}
            </span>
            <div className="flex-1 h-7 bg-slate-50 rounded-[4px] overflow-hidden relative">
              <div
                className="h-full rounded-[4px] transition-all duration-500"
                style={{
                  width: `${Math.max((stage.count / maxCount) * 100, 8)}%`,
                  backgroundColor: stage.color,
                }}
              />
              <span className="absolute inset-y-0 left-2 flex items-center text-xs font-semibold text-white drop-shadow-sm">
                {stage.count}
              </span>
            </div>
            <span className="w-12 text-xs text-slate-400 text-left">
              {Math.round((stage.count / stages.reduce((sum, s) => sum + s.count, 0)) * 100)}%
            </span>
          </div>
        ))}
      </div>

      {/* Total bar */}
      <div className="flex items-center gap-3 mt-4 pt-3 border-t border-slate-100">
        <span className="w-20 text-xs font-semibold text-slate-700 shrink-0 text-right">
          Total
        </span>
        <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden flex">
          {stages.map((stage) => {
            const total = stages.reduce((sum, s) => sum + s.count, 0)
            return (
              <div
                key={stage.label}
                style={{
                  width: `${(stage.count / total) * 100}%`,
                  backgroundColor: stage.color,
                }}
              />
            )
          })}
        </div>
        <span className="w-12 text-xs font-semibold text-slate-700 text-left">
          {stages.reduce((sum, s) => sum + s.count, 0)}
        </span>
      </div>
    </div>
  )
}
