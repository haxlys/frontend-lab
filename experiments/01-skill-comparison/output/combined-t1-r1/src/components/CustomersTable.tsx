import { customers, stageColors } from "../data";
import clsx from "clsx";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function CustomersTable() {
  return (
    <div className="stat-card p-0 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-800">Recent Customers</h3>
        <a href="#" className="text-xs text-accent font-medium hover:underline">
          View all
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="table-header px-5 py-3">Name</th>
              <th className="table-header px-5 py-3">Company</th>
              <th className="table-header px-5 py-3">Stage</th>
              <th className="table-header px-5 py-3 text-right">Value</th>
              <th className="table-header px-5 py-3">Last Contact</th>
              <th className="table-header px-5 py-3">Owner</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => {
              const stageStyle = stageColors[customer.stage];
              return (
                <tr key={customer.id} className="table-row">
                  <td className="px-5 py-3">
                    <p className="text-sm font-medium text-slate-800">{customer.name}</p>
                    <p className="text-xs text-slate-400">{customer.email}</p>
                  </td>
                  <td className="px-5 py-3">
                    <span className="text-sm text-slate-700">{customer.company}</span>
                  </td>
                  <td className="px-5 py-3">
                    <span
                      className={clsx(
                        "inline-flex px-2 py-0.5 rounded-full text-xs font-medium",
                        stageStyle.bg,
                        stageStyle.text
                      )}
                    >
                      {customer.stage}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <span className="text-sm font-mono font-medium text-slate-800 tabular-nums">
                      {formatCurrency(customer.value)}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <span className="text-sm text-slate-500">{customer.lastContact}</span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-navy-800 flex items-center justify-center text-white text-xs font-medium">
                        {customer.owner
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="text-sm text-slate-600">{customer.owner}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
