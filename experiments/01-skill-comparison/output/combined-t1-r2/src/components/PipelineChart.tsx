import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import type { PipelineStage } from '../types'

interface PipelineChartProps {
  data: PipelineStage[]
}

const stageColors = [
  '#94A3B8',
  '#64748B',
  '#475569',
  '#2563EB',
  '#059669',
]

export function PipelineChart({ data }: PipelineChartProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Pipeline Progress</h3>
          <p className="mt-0.5 text-xs text-slate-500">Revenue by stage</p>
        </div>
        <div className="flex items-center gap-3">
        {data.map((s, idx) => (
            <div key={s.name} className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: stageColors[idx] }} />
              <span className="text-[11px] text-slate-500">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#94A3B8' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: '#94A3B8' }}
              tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}k`}
            />
            <Tooltip
              contentStyle={{
                borderRadius: '8px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                fontSize: '12px',
                padding: '8px 12px',
              }}
              formatter={(value) => [`$${(value as number).toLocaleString()}`, 'Revenue']}
              labelStyle={{ fontWeight: 600, marginBottom: '2px', color: '#475569' }}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={48}>
              {data.map((_, idx) => (
                <Cell key={idx} fill={stageColors[idx]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 flex gap-4 border-t border-slate-100 pt-3">
        {data.map((s) => (
          <div key={s.name} className="flex flex-col gap-0.5">
            <span className="text-lg font-semibold text-slate-900">{s.deals}</span>
            <span className="text-[11px] text-slate-400">{s.name} deals</span>
          </div>
        ))}
      </div>
    </div>
  )
}
