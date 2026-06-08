import type { Customer } from '../data/mock';

interface CustomerTableProps {
  customers: Customer[];
}

const stageStyles: Record<string, string> = {
  '리드 발굴': 'bg-navy-100 text-navy-600',
  '미팅 예약': 'bg-accent-50 text-accent-600',
  '제안 발송': 'bg-teal-50 text-teal-500',
  협상: 'bg-amber-50 text-amber-500',
  계약: 'bg-green-50 text-green-500',
};

export default function CustomerTable({ customers }: CustomerTableProps) {
  return (
    <div className="bg-white rounded-md border border-navy-200 shadow-[var(--shadow-card)] overflow-hidden">
      <div className="px-5 py-4 border-b border-navy-200 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-navy-800">최근 업데이트된 고객</h3>
        <span className="text-xs text-accent-600 hover:text-accent-500 cursor-pointer font-medium">
          전체 보기
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-navy-100">
              <th className="text-left py-3 px-5 text-[11px] font-semibold text-navy-400 uppercase tracking-wider">
                고객명
              </th>
              <th className="text-left py-3 px-5 text-[11px] font-semibold text-navy-400 uppercase tracking-wider hidden sm:table-cell">
                회사
              </th>
              <th className="text-left py-3 px-5 text-[11px] font-semibold text-navy-400 uppercase tracking-wider">
                단계
              </th>
              <th className="text-right py-3 px-5 text-[11px] font-semibold text-navy-400 uppercase tracking-wider">
                예상 금액
              </th>
              <th className="text-right py-3 px-5 text-[11px] font-semibold text-navy-400 uppercase tracking-wider hidden md:table-cell">
                최근 연락
              </th>
              <th className="text-right py-3 px-5 text-[11px] font-semibold text-navy-400 uppercase tracking-wider hidden lg:table-cell">
                담당자
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b border-navy-50 hover:bg-navy-50/60 transition-colors cursor-pointer"
              >
                <td className="py-3.5 px-5">
                  <span className="text-sm font-medium text-navy-800">
                    {customer.name}
                  </span>
                </td>
                <td className="py-3.5 px-5 hidden sm:table-cell">
                  <span className="text-sm text-navy-600">{customer.company}</span>
                </td>
                <td className="py-3.5 px-5">
                  <span
                    className={`inline-block text-[11px] font-medium px-2 py-0.5 rounded-full ${
                      stageStyles[customer.stage] || 'bg-navy-100 text-navy-600'
                    }`}
                  >
                    {customer.stage}
                  </span>
                </td>
                <td className="py-3.5 px-5 text-right">
                  <span className="text-sm font-semibold text-navy-700">
                    {customer.value}
                  </span>
                </td>
                <td className="py-3.5 px-5 text-right hidden md:table-cell">
                  <span className="text-sm text-navy-500">{customer.lastContact}</span>
                </td>
                <td className="py-3.5 px-5 text-right hidden lg:table-cell">
                  <span className="text-sm text-navy-600">{customer.owner}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
