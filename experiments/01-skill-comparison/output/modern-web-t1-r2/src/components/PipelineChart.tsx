import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import type { PipelineStage } from '../data/mock';

interface PipelineChartProps {
  data: PipelineStage[];
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: { payload: PipelineStage }[] }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-navy-800 text-white text-xs rounded-md px-3 py-2 shadow-lg">
      <p className="font-semibold">{d.name}</p>
      <p className="text-navy-300 mt-0.5">{d.value}건</p>
    </div>
  );
}

export default function PipelineChart({ data }: PipelineChartProps) {
  return (
    <div className="bg-white border border-navy-200 rounded-lg p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-semibold text-navy-800">영업 파이프라인 진행 현황</h3>
          <p className="text-xs text-navy-400 mt-0.5">단계별 현재 진행 중인 딜 수</p>
        </div>
        <select className="text-xs font-medium text-navy-500 border border-navy-200 rounded-md px-2 py-1.5
                           bg-white focus:outline-none focus:border-accent-400 cursor-pointer">
          <option>이번 달</option>
          <option>지난 달</option>
          <option>이번 분기</option>
        </select>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" horizontal={false} />
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#94A3B8' }}
            />
            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#475569', fontWeight: 500 }}
              width={90}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#F8FAFC' }} />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={18}>
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-navy-100">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent-600" />
          <span className="text-xs text-navy-500">합계</span>
          <span className="text-sm font-semibold text-navy-800">
            {data.reduce((sum, d) => sum + d.value, 0)}건
          </span>
        </div>
        <span className="text-xs text-navy-400">전체 파이프라인 가치 ₩2.1B</span>
      </div>
    </div>
  );
}
