interface Customer {
  company: string
  contact: string
  email: string
  dealValue: string
  stage: string
  lastUpdated: string
}

const stageBadgeStyles: Record<string, string> = {
  Lead: 'bg-slate-100 text-slate-600',
  Qualified: 'bg-blue-50 text-blue-700',
  Proposal: 'bg-accent-light text-accent',
  Negotiation: 'bg-warning-light text-warning',
  'Closed Won': 'bg-success-light text-success',
}

const customers: Customer[] = [
  {
    company: 'Acme Corp',
    contact: 'Alice Johnson',
    email: 'alice@acmecorp.com',
    dealValue: '$24,500',
    stage: 'Negotiation',
    lastUpdated: '2 hours ago',
  },
  {
    company: 'Globex Inc.',
    contact: 'Bob Williams',
    email: 'bob@globex.io',
    dealValue: '$82,000',
    stage: 'Closed Won',
    lastUpdated: '1 day ago',
  },
  {
    company: 'Initech',
    contact: 'Carol Davis',
    email: 'carol@initech.com',
    dealValue: '$12,200',
    stage: 'Proposal',
    lastUpdated: '3 hours ago',
  },
  {
    company: 'Umbrella Co',
    contact: 'Dave Lee',
    email: 'dave@umbrella.com',
    dealValue: '$45,800',
    stage: 'Qualified',
    lastUpdated: '5 hours ago',
  },
  {
    company: 'Stark Industries',
    contact: 'Eve Rogers',
    email: 'eve@stark.com',
    dealValue: '$120,000',
    stage: 'Lead',
    lastUpdated: '1 day ago',
  },
  {
    company: 'Wayne Enterprises',
    contact: 'Frank Black',
    email: 'frank@wayne.co',
    dealValue: '$67,300',
    stage: 'Proposal',
    lastUpdated: '8 hours ago',
  },
  {
    company: 'Cyberdyne Systems',
    contact: 'Grace Hopper',
    email: 'grace@cyberdyne.ai',
    dealValue: '$31,000',
    stage: 'Qualified',
    lastUpdated: '2 days ago',
  },
]

export function CustomerTable() {
  return (
    <div className="bg-white rounded-[8px] border border-slate-200 overflow-hidden">
      <div className="px-5 py-4 flex items-center justify-between border-b border-slate-100">
        <div>
          <h3 className="text-sm font-semibold text-slate-800">Recent Customers</h3>
          <p className="text-xs text-slate-400 mt-0.5">Latest updates across all deals</p>
        </div>
        <button className="text-xs font-medium text-accent hover:text-accent/80 transition-colors">
          View all
        </button>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">
                Company
              </th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">
                Contact
              </th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">
                Deal Value
              </th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">
                Stage
              </th>
              <th className="text-right text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">
                Updated
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.company} className="table-row">
                <td className="px-5 py-3">
                  <p className="text-sm font-medium text-slate-800">{c.company}</p>
                  <p className="text-xs text-slate-400">{c.email}</p>
                </td>
                <td className="px-5 py-3">
                  <p className="text-sm text-slate-700">{c.contact}</p>
                </td>
                <td className="px-5 py-3">
                  <span className="text-sm font-medium text-slate-800">
                    {c.dealValue}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span
                    className={`inline-block text-[11px] font-medium px-2 py-0.5 rounded-[4px] ${stageBadgeStyles[c.stage]}`}
                  >
                    {c.stage}
                  </span>
                </td>
                <td className="px-5 py-3 text-right text-xs text-slate-400">
                  {c.lastUpdated}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile card list */}
      <div className="md:hidden">
        {customers.map((c) => (
          <div
            key={c.company}
            className="table-row px-5 py-4 flex flex-col gap-1.5"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-800">{c.company}</span>
              <span
                className={`text-[11px] font-medium px-2 py-0.5 rounded-[4px] ${stageBadgeStyles[c.stage]}`}
              >
                {c.stage}
              </span>
            </div>
            <p className="text-sm text-slate-600">{c.contact}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-800">{c.dealValue}</span>
              <span className="text-xs text-slate-400">{c.lastUpdated}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
