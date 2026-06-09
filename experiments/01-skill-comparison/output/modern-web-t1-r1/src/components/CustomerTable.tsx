import type { Customer } from '../types'

interface CustomerTableProps {
  customers: Customer[]
}

const stageColors: Record<string, string> = {
  '계약 완료': 'bg-teal-50 text-teal-600',
  '협상 중': 'bg-blue-50 text-blue-600',
  '제안 발송': 'bg-slate-100 text-slate-600',
  '미팅 예약': 'bg-amber-50 text-amber-600',
  '리드 발굴': 'bg-slate-100 text-slate-500',
}

function formatCurrency(value: number): string {
  if (value >= 100000000) {
    return `₩${(value / 100000000).toFixed(1)}억`
  }
  if (value >= 10000) {
    return `₩${(value / 10000).toFixed(0)}만`
  }
  return `₩${value.toLocaleString()}`
}

export default function CustomerTable({ customers }: CustomerTableProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-800">최근 업데이트된 고객</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              <th className="px-5 py-2.5 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">고객</th>
              <th className="px-5 py-2.5 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">회사</th>
              <th className="px-5 py-2.5 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">이메일</th>
              <th className="px-5 py-2.5 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">스테이지</th>
              <th className="px-5 py-2.5 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">금액</th>
              <th className="px-5 py-2.5 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">최근 활동</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-full bg-slate-200 text-[11px] font-semibold text-slate-600">
                      {customer.avatar}
                    </div>
                    <span className="text-sm font-medium text-slate-800">{customer.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-sm text-slate-600">{customer.company}</td>
                <td className="px-5 py-3 text-sm text-slate-500">{customer.email}</td>
                <td className="px-5 py-3">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${stageColors[customer.stage] || 'bg-slate-100 text-slate-500'}`}>
                    {customer.stage}
                  </span>
                </td>
                <td className="px-5 py-3 text-sm text-slate-700 text-right font-medium">{formatCurrency(customer.value)}</td>
                <td className="px-5 py-3 text-sm text-slate-400">{customer.lastActivity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
