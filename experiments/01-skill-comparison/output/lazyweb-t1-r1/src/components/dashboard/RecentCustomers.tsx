import { ChevronRightIcon } from '../Icons'
import type { Customer } from '../../types'

const stageBadge: Record<string, string> = {
  '계약 완료': 'bg-emerald-50 text-emerald-700',
  '제안 발송': 'bg-blue-50 text-blue-700',
  '초기 미팅': 'bg-amber-50 text-amber-700',
  '리드': 'bg-slate-100 text-slate-600',
  '협상 중': 'bg-purple-50 text-purple-700',
}

interface RecentCustomersProps {
  customers: Customer[]
}

export function RecentCustomers({ customers }: RecentCustomersProps) {
  const formatCurrency = (v: number) =>
    new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
      maximumFractionDigits: 0,
    }).format(v)

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
        <h3 className="text-base font-semibold text-slate-800">
          최근 업데이트된 고객
        </h3>
        <a
          href="#"
          className="flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-accent-600 transition-colors"
        >
          전체 보기
          <ChevronRightIcon />
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-6 py-3">
                이름
              </th>
              <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-6 py-3 hidden sm:table-cell">
                회사
              </th>
              <th className="text-right text-xs font-medium text-slate-400 uppercase tracking-wider px-6 py-3">
                거래 금액
              </th>
              <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-6 py-3 hidden md:table-cell">
                단계
              </th>
              <th className="text-right text-xs font-medium text-slate-400 uppercase tracking-wider px-6 py-3 hidden lg:table-cell">
                최근 연락
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors cursor-pointer"
              >
                <td className="px-6 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600 shrink-0">
                      {customer.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700">
                        {customer.name}
                      </p>
                      <p className="text-xs text-slate-400 sm:hidden">
                        {customer.company}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3.5 text-sm text-slate-600 hidden sm:table-cell">
                  {customer.company}
                </td>
                <td className="px-6 py-3.5 text-right">
                  <span className="text-sm font-medium text-slate-800 tabular-nums">
                    {formatCurrency(customer.dealValue)}
                  </span>
                </td>
                <td className="px-6 py-3.5 hidden md:table-cell">
                  <span
                    className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${
                      stageBadge[customer.stage] ?? 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {customer.stage}
                  </span>
                </td>
                <td className="px-6 py-3.5 text-right text-sm text-slate-500 hidden lg:table-cell">
                  {customer.lastContact}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
