import type { Customer } from '../data/types'

interface Props {
  customers: Customer[]
}

const statusStyles: Record<Customer['status'], string> = {
  Active: 'bg-emerald-50 text-emerald-700',
  Lead: 'bg-amber-50 text-amber-700',
  Onboarding: 'bg-blue-50 text-blue-700',
  Churned: 'bg-red-50 text-red-500',
}

export default function CustomerTable({ customers }: Props) {
  return (
    <div className="bg-white border border-slate-200 rounded-card overflow-hidden">
      <div className="flex items-center justify-between px-4 lg:px-6 py-4 border-b border-slate-200">
        <h3 className="text-sm font-semibold text-slate-800">Recent Customers</h3>
        <button className="text-xs font-medium text-accent hover:text-accent-hover transition-colors">
          View all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left">
            <tr>
              <th className="px-4 lg:px-6 py-3 text-xs font-medium uppercase tracking-wider text-slate-400">Name</th>
              <th className="px-4 lg:px-6 py-3 text-xs font-medium uppercase tracking-wider text-slate-400 hidden sm:table-cell">Company</th>
              <th className="px-4 lg:px-6 py-3 text-xs font-medium uppercase tracking-wider text-slate-400 hidden md:table-cell">Email</th>
              <th className="px-4 lg:px-6 py-3 text-xs font-medium uppercase tracking-wider text-slate-400">Status</th>
              <th className="px-4 lg:px-6 py-3 text-xs font-medium uppercase tracking-wider text-slate-400 hidden lg:table-cell">Deal Value</th>
              <th className="px-4 lg:px-6 py-3 text-xs font-medium uppercase tracking-wider text-slate-400 hidden lg:table-cell">Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {customers.map((c) => (
              <tr key={c.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="px-4 lg:px-6 py-3.5 font-medium text-slate-800 whitespace-nowrap">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[11px] font-semibold text-slate-500 shrink-0">
                      {c.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    {c.name}
                  </div>
                </td>
                <td className="px-4 lg:px-6 py-3.5 text-slate-600 hidden sm:table-cell whitespace-nowrap">{c.company}</td>
                <td className="px-4 lg:px-6 py-3.5 text-slate-400 hidden md:table-cell whitespace-nowrap">{c.email}</td>
                <td className="px-4 lg:px-6 py-3.5 whitespace-nowrap">
                  <span className={['inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium', statusStyles[c.status]].join(' ')}>
                    {c.status}
                  </span>
                </td>
                <td className="px-4 lg:px-6 py-3.5 text-slate-600 hidden lg:table-cell whitespace-nowrap">{c.dealValue}</td>
                <td className="px-4 lg:px-6 py-3.5 text-slate-400 hidden lg:table-cell whitespace-nowrap text-xs">{c.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
