import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, LabelList } from "recharts";
import { Card } from "../ui/Card";
import type { PipelineStage } from "../../data/mock";

const COLORS = ["#E2E8F0", "#CBD5E1", "#94A3B8", "#64748B", "#0F172A"];

export function PipelineChart({ data }: { data: PipelineStage[] }) {
  return (
    <Card padding="lg">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-slate-800">영업 파이프라인 현황</h3>
        <p className="mt-0.5 text-xs text-slate-400">단계별 예상 매출 (₩M)</p>
      </div>
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
            <XAxis
              dataKey="stage"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#94A3B8" }}
              dy={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#94A3B8" }}
              width={40}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={48} maxBarSize={64}>
              <LabelList dataKey="count" position="top" fontSize={11} fill="#64748B" formatter={(v: unknown) => `${v}건`} />
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
