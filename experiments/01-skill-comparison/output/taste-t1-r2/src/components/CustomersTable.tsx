import { useState } from "react";
import { cn } from "../lib/utils";

const customers = [
  { id: 1, name: "Acme Corp", contact: "Sarah Chen", deal: "$48,200", stage: "Negotiation", updated: "2h ago" },
  { id: 2, name: "Globex Inc", contact: "James Wilson", deal: "$32,100", stage: "Proposal", updated: "4h ago" },
  { id: 3, name: "Initech", contact: "Maria Garcia", deal: "$18,500", stage: "Qualified", updated: "1d ago" },
  { id: 4, name: "Stark Industries", contact: "Tony Lee", deal: "$65,000", stage: "Closed Won", updated: "1d ago" },
  { id: 5, name: "Wayne Enterprises", contact: "Bruce Kim", deal: "$22,300", stage: "Contacted", updated: "2d ago" },
  { id: 6, name: "Umbrella Corp", contact: "Alice Park", deal: "$41,800", stage: "Proposal", updated: "3d ago" },
];

const stageColors: Record<string, string> = {
  "Closed Won": "bg-emerald-50 text-emerald-700",
  Negotiation: "bg-blue-50 text-blue-700",
  Proposal: "bg-amber-50 text-amber-700",
  Qualified: "bg-violet-50 text-violet-700",
  Contacted: "bg-slate-100 text-slate-600",
  Lead: "bg-slate-100 text-slate-500",
};

export function CustomersTable() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-lg border border-slate-200">
      <div className="flex items-center justify-between px-5 pt-5 pb-1">
        <div>
          <h3 className="text-[15px] font-semibold text-slate-900">
            Recently Updated Customers
          </h3>
          <p className="text-[12.5px] text-slate-400 mt-0.5">
            {customers.length} customers with recent activity
          </p>
        </div>
        <button className="text-[12.5px] font-medium text-[#2563EB] hover:text-blue-700 transition-colors">
          View all
        </button>
      </div>

      <div className="overflow-x-auto mt-3">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-[12px] font-medium text-slate-400 uppercase tracking-wider px-5 py-2.5">
                Company
              </th>
              <th className="text-[12px] font-medium text-slate-400 uppercase tracking-wider px-5 py-2.5 hidden sm:table-cell">
                Contact
              </th>
              <th className="text-[12px] font-medium text-slate-400 uppercase tracking-wider px-5 py-2.5">
                Deal Value
              </th>
              <th className="text-[12px] font-medium text-slate-400 uppercase tracking-wider px-5 py-2.5 hidden md:table-cell">
                Stage
              </th>
              <th className="text-[12px] font-medium text-slate-400 uppercase tracking-wider px-5 py-2.5 hidden lg:table-cell">
                Updated
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr
                key={c.id}
                onMouseEnter={() => setHovered(c.id)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  "border-b border-slate-50 transition-colors duration-150",
                  hovered === c.id ? "bg-slate-50/70" : "bg-white"
                )}
              >
                <td className="px-5 py-3">
                  <p className="text-[13.5px] font-medium text-slate-800">
                    {c.name}
                  </p>
                </td>
                <td className="px-5 py-3 hidden sm:table-cell">
                  <p className="text-[13px] text-slate-500">{c.contact}</p>
                </td>
                <td className="px-5 py-3">
                  <p className="text-[13.5px] font-medium text-slate-700 tabular-nums">
                    {c.deal}
                  </p>
                </td>
                <td className="px-5 py-3 hidden md:table-cell">
                  <span
                    className={cn(
                      "inline-block text-[11.5px] font-medium px-2.5 py-0.5 rounded-md",
                      stageColors[c.stage] || "bg-slate-100 text-slate-600"
                    )}
                  >
                    {c.stage}
                  </span>
                </td>
                <td className="px-5 py-3 hidden lg:table-cell">
                  <p className="text-[12.5px] text-slate-400">{c.updated}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
