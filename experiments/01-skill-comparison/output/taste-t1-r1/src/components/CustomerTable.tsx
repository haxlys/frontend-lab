import { DotsThree, Calendar, CaretUpDown } from "@phosphor-icons/react"

interface Customer {
  id: number
  company: string
  contact: string
  stage: string
  value: string
  updated: string
  status: "active" | "new"
}

const stageColors: Record<string, string> = {
  Lead: "bg-navy-100 text-navy-700",
  Qualified: "bg-navy-200 text-navy-700",
  Proposal: "bg-accent-100 text-accent-600",
  Negotiation: "bg-amber-50 text-amber-600",
  "Closed Won": "bg-emerald-50 text-emerald-600",
}

export function CustomerTable({ customers }: { customers: Customer[] }) {
  return (
    <div className="bg-white rounded-lg border border-navy-200">
      <div className="flex items-center justify-between px-5 py-4 border-b border-navy-200">
        <h3 className="text-sm font-semibold text-navy-900">Recent Customers</h3>
        <button className="text-xs font-medium text-accent-600 hover:text-accent-500 transition-colors">
          View all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-navy-100">
              <th className="text-left px-5 py-3 text-xs font-semibold text-navy-500 uppercase tracking-wider">
                <span className="inline-flex items-center gap-1 cursor-pointer hover:text-navy-700 transition-colors">
                  Company <CaretUpDown size={12} weight="bold" />
                </span>
              </th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-navy-500 uppercase tracking-wider hidden sm:table-cell">
                Contact
              </th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-navy-500 uppercase tracking-wider">
                Stage
              </th>
              <th className="text-right px-5 py-3 text-xs font-semibold text-navy-500 uppercase tracking-wider hidden md:table-cell">
                Value
              </th>
              <th className="text-right px-5 py-3 text-xs font-semibold text-navy-500 uppercase tracking-wider hidden lg:table-cell">
                <span className="inline-flex items-center gap-1">
                  <Calendar size={12} weight="bold" /> Updated
                </span>
              </th>
              <th className="w-10 px-2 py-3" />
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr
                key={c.id}
                className="border-b border-navy-100 hover:bg-navy-50 transition-colors"
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-navy-100 flex items-center justify-center shrink-0">
                      <span className="text-xs font-semibold text-navy-600">
                        {c.company.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy-900">{c.company}</p>
                      <p className="text-xs text-navy-400 sm:hidden">{c.contact}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3 hidden sm:table-cell">
                  <p className="text-sm text-navy-700">{c.contact}</p>
                </td>
                <td className="px-5 py-3">
                  <span
                    className={`inline-block text-xs font-semibold rounded-full px-2.5 py-1 ${
                      stageColors[c.stage] || "bg-navy-100 text-navy-700"
                    }`}
                  >
                    {c.stage}
                  </span>
                </td>
                <td className="px-5 py-3 text-right hidden md:table-cell">
                  <span className="text-sm font-semibold text-navy-900">
                    {c.value}
                  </span>
                </td>
                <td className="px-5 py-3 text-right hidden lg:table-cell">
                  <span className="text-sm text-navy-500">{c.updated}</span>
                </td>
                <td className="px-2 py-3">
                  <button className="p-1 rounded-md text-navy-400 hover:text-navy-700 hover:bg-navy-100 transition-colors">
                    <DotsThree size={18} weight="bold" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
