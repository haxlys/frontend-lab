const customers = [
  { id: 1, name: "Acme Corp", contact: "John Smith", email: "john@acmecorp.com", stage: "Negotiation", value: "$24,000", updated: "2h ago" },
  { id: 2, name: "InnoTech Ltd", contact: "Sarah Kim", email: "sarah@innotech.io", stage: "Proposal", value: "$18,500", updated: "4h ago" },
  { id: 3, name: "BigCo Inc", contact: "Mike Chen", email: "mike@bigco.com", stage: "Qualified", value: "$42,000", updated: "6h ago" },
  { id: 4, name: "GlobalTech", contact: "Emily Park", email: "emily@globaltech.com", stage: "Lead In", value: "$8,200", updated: "1d ago" },
  { id: 5, name: "NexGen Solutions", contact: "David Lee", email: "david@nexgen.co", stage: "Closed Won", value: "$31,000", updated: "2d ago" },
];

const stageColors: Record<string, string> = {
  "Lead In": "bg-[#f1f5f9] text-[#475569]",
  Qualified: "bg-[#dbeafe] text-[#1e40af]",
  Proposal: "bg-[#f5f3ff] text-[#5b21b6]",
  Negotiation: "bg-[#fef3c7] text-[#92400e]",
  "Closed Won": "bg-[#d1fae5] text-[#065f46]",
};

export default function CustomersTable() {
  return (
    <div className="rounded-lg border border-[#e2e8f0] bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-[#e2e8f0] px-5 py-3.5">
        <h3 className="text-sm font-semibold text-[#0f172a]">Recent Customers</h3>
        <button className="text-xs font-medium text-[#2563eb] transition-colors hover:text-[#1d4ed8]">
          View all &rarr;
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#e2e8f0] bg-[#f8fafc] text-left text-xs font-medium text-[#64748b]">
              <th className="px-5 py-2.5 font-medium">Company</th>
              <th className="hidden px-5 py-2.5 font-medium sm:table-cell">Contact</th>
              <th className="hidden px-5 py-2.5 font-medium lg:table-cell">Email</th>
              <th className="hidden px-5 py-2.5 font-medium sm:table-cell">Stage</th>
              <th className="hidden px-5 py-2.5 font-medium sm:table-cell">Value</th>
              <th className="px-5 py-2.5 font-medium">Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e2e8f0]">
            {customers.map((c) => (
              <tr
                key={c.id}
                className="transition-colors hover:bg-[#f8fafc]"
              >
                <td className="px-5 py-3">
                  <p className="text-sm font-medium text-[#0f172a]">{c.name}</p>
                </td>
                <td className="hidden px-5 py-3 sm:table-cell">
                  <p className="text-sm text-[#334155]">{c.contact}</p>
                </td>
                <td className="hidden px-5 py-3 lg:table-cell">
                  <p className="text-sm text-[#64748b]">{c.email}</p>
                </td>
                <td className="hidden px-5 py-3 sm:table-cell">
                  <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${stageColors[c.stage]}`}>
                    {c.stage}
                  </span>
                </td>
                <td className="hidden px-5 py-3 sm:table-cell">
                  <span className="text-sm font-medium text-[#0f172a]">{c.value}</span>
                </td>
                <td className="px-5 py-3">
                  <span className="text-sm text-[#94a3b8]">{c.updated}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
