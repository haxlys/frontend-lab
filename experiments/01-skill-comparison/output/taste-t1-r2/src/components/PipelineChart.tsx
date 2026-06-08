import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { stage: "Lead", value: 245, fill: "#94A3B8" },
  { stage: "Contacted", value: 189, fill: "#64748B" },
  { stage: "Qualified", value: 142, fill: "#475569" },
  { stage: "Proposal", value: 98, fill: "#334155" },
  { stage: "Negotiation", value: 51, fill: "#1E293B" },
  { stage: "Closed Won", value: 38, fill: "#2563EB" },
];

export function PipelineChart() {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-5">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-[15px] font-semibold text-slate-900">
          Sales Pipeline
        </h3>
        <select className="text-[12.5px] text-slate-500 border border-slate-200 rounded-md px-2.5 py-1.5 bg-slate-50 outline-none focus:border-slate-300">
          <option>This month</option>
          <option>Last month</option>
          <option>Last quarter</option>
        </select>
      </div>
      <p className="text-[12.5px] text-slate-400 mb-5">
        Stage distribution across 148 active deals
      </p>

      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 4, right: 4, bottom: 4, left: -16 }}
            barSize={32}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
            <XAxis
              dataKey="stage"
              tick={{ fontSize: 12, fill: "#94A3B8" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#94A3B8" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "#F8FAFC" }}
              contentStyle={{
                borderRadius: 8,
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                fontSize: 13,
                fontFamily: "Inter",
              }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
