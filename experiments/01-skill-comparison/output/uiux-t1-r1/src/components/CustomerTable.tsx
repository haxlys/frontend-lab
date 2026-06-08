import { Icon } from './Icon'
import type { Customer } from '../types'

const statusStyles: Record<string, string> = {
  active: 'bg-green-50 text-green-700',
  lead: 'bg-blue-50 text-blue-700',
  inactive: 'bg-slate-100 text-slate-500',
}

const statusLabels: Record<string, string> = {
  active: 'Active',
  lead: 'Lead',
  inactive: 'Inactive',
}

export function CustomerTable({ data }: { data: Customer[] }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200">
      <div className="flex items-center justify-between p-5 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-800">Recent Customers</h3>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 px-2 py-1.5 rounded-md hover:bg-slate-100 transition-colors">
            <Icon name="filter" size={14} />
            Filter
          </button>
          <button className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 px-2 py-1.5 rounded-md hover:bg-slate-100 transition-colors">
            <Icon name="download" size={14} />
            Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Name
              </th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden sm:table-cell">
                Company
              </th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">
                Status
              </th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden lg:table-cell">
                Last Contact
              </th>
              <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Value
              </th>
              <th className="w-10 px-3 py-3" />
            </tr>
          </thead>
          <tbody>
            {data.map((customer) => (
              <tr
                key={customer.id}
                className="border-b border-slate-50 hover:bg-slate-50/70 transition-colors cursor-pointer"
              >
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                      <span className="text-xs font-semibold text-slate-600">
                        {customer.name.split(' ').map((n) => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">{customer.name}</p>
                      <p className="text-xs text-slate-400">{customer.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-slate-600 hidden sm:table-cell">
                  {customer.company}
                </td>
                <td className="px-5 py-3.5 hidden md:table-cell">
                  <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${statusStyles[customer.status]}`}>
                    {statusLabels[customer.status]}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-slate-500 hidden lg:table-cell">
                  {customer.lastContact}
                </td>
                <td className="px-5 py-3.5 text-right font-medium text-slate-800">
                  ${customer.value.toLocaleString()}
                </td>
                <td className="px-3 py-3.5">
                  <button className="p-1 rounded hover:bg-slate-100 transition-colors">
                    <Icon name="more-horizontal" size={16} className="text-slate-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-5 py-3 border-t border-slate-100">
        <p className="text-xs text-slate-400">
          Showing <span className="font-medium text-slate-600">{data.length}</span> customers
        </p>
        <div className="flex items-center gap-1">
          <button className="p-1 rounded hover:bg-slate-100 transition-colors" disabled>
            <Icon name="chevron-left" size={16} className="text-slate-300" />
          </button>
          <span className="text-xs font-medium text-slate-600 px-2">Page 1 of 1</span>
          <button className="p-1 rounded hover:bg-slate-100 transition-colors" disabled>
            <Icon name="chevron-right" size={16} className="text-slate-300" />
          </button>
        </div>
      </div>
    </div>
  )
}
