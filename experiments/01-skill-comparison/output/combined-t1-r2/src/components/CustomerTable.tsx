import type { Customer } from '../types'

interface CustomerTableProps {
  customers: Customer[]
}

const stageStyles: Record<string, string> = {
  'Lead': 'bg-slate-100 text-slate-600',
  'Qualified': 'bg-blue-50 text-blue-700',
  'Proposal': 'bg-amber-50 text-amber-700',
  'Negotiation': 'bg-purple-50 text-purple-700',
  'Closed Won': 'bg-emerald-50 text-emerald-700',
}

export function CustomerTable({ customers }: CustomerTableProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Recent Customers</h3>
          <p className="mt-0.5 text-xs text-slate-500">Recently updated accounts</p>
        </div>
        <button className="text-xs font-medium text-accent hover:text-accent-hover transition-colors">
          View all customers
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="py-3 pl-5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">Name</th>
              <th className="py-3 text-[11px] font-semibold uppercase tracking-wide text-slate-400">Company</th>
              <th className="py-3 text-[11px] font-semibold uppercase tracking-wide text-slate-400 hidden md:table-cell">Stage</th>
              <th className="py-3 text-[11px] font-semibold uppercase tracking-wide text-slate-400 hidden lg:table-cell">Value</th>
              <th className="py-3 text-[11px] font-semibold uppercase tracking-wide text-slate-400 hidden lg:table-cell">Last Contact</th>
              <th className="py-3 pr-5 text-[11px] font-semibold uppercase tracking-wide text-slate-400 hidden xl:table-cell">Owner</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {customers.map((c) => (
              <tr key={c.id} className="transition-colors hover:bg-slate-50/80">
                <td className="py-3 pl-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-500">
                      {c.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div className="min-w-0">
                      <span className="block truncate text-sm font-medium text-slate-900">{c.name}</span>
                      <span className="block truncate text-xs text-slate-400">{c.email}</span>
                    </div>
                  </div>
                </td>
                <td className="py-3">
                  <span className="text-sm text-slate-600">{c.company}</span>
                </td>
                <td className="py-3 hidden md:table-cell">
                  <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-medium ${stageStyles[c.stage] || 'bg-slate-100 text-slate-600'}`}>
                    {c.stage}
                  </span>
                </td>
                <td className="py-3 hidden lg:table-cell">
                  <span className="text-sm font-medium text-slate-900">${c.value.toLocaleString()}</span>
                </td>
                <td className="py-3 hidden lg:table-cell">
                  <span className="text-sm text-slate-500">{c.lastContact}</span>
                </td>
                <td className="py-3 pr-5 hidden xl:table-cell">
                  <span className="text-sm text-slate-600">{c.owner}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
