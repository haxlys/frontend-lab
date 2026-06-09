import { MoreHorizontalIcon } from './icons';
import type { Customer } from '../data/mock';

interface CustomerTableProps {
  customers: Customer[];
}

const stageColors: Record<string, string> = {
  '리드 발굴': 'bg-navy-100 text-navy-600',
  '미팅 예약': 'bg-amber-50 text-amber-700',
  '제안서 발송': 'bg-blue-50 text-blue-700',
  '협상': 'bg-purple-50 text-purple-700',
  '계약': 'bg-teal-50 text-teal-700',
};

const statusColors: Record<string, string> = {
  active: 'bg-teal-50 text-teal-700',
  inactive: 'bg-navy-100 text-navy-500',
  lead: 'bg-blue-50 text-blue-700',
};

const statusLabels: Record<string, string> = {
  active: '활성',
  inactive: '비활성',
  lead: '리드',
};

export default function CustomerTable({ customers }: CustomerTableProps) {
  return (
    <div className="bg-white border border-navy-200 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-navy-100">
        <div>
          <h3 className="text-sm font-semibold text-navy-800">최근 업데이트된 고객</h3>
          <p className="text-xs text-navy-400 mt-0.5">총 {customers.length}개 고객사</p>
        </div>
        <button className="text-xs font-medium text-accent-600 hover:text-accent-500 transition-colors">
          전체 보기
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-navy-100">
              <th className="text-left text-[11px] font-semibold uppercase tracking-wider text-navy-400 px-5 py-3">
                고객명
              </th>
              <th className="text-left text-[11px] font-semibold uppercase tracking-wider text-navy-400 px-5 py-3 hidden sm:table-cell">
                회사
              </th>
              <th className="text-left text-[11px] font-semibold uppercase tracking-wider text-navy-400 px-5 py-3 hidden md:table-cell">
                단계
              </th>
              <th className="text-right text-[11px] font-semibold uppercase tracking-wider text-navy-400 px-5 py-3">
                예상 금액
              </th>
              <th className="text-left text-[11px] font-semibold uppercase tracking-wider text-navy-400 px-5 py-3 hidden lg:table-cell">
                상태
              </th>
              <th className="text-left text-[11px] font-semibold uppercase tracking-wider text-navy-400 px-5 py-3 hidden xl:table-cell">
                업데이트
              </th>
              <th className="w-10 px-3 py-3" />
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b border-navy-50 hover:bg-navy-50/40 transition-colors group"
              >
                <td className="px-5 py-3.5">
                  <div>
                    <p className="text-sm font-medium text-navy-800">{customer.name}</p>
                    <p className="text-xs text-navy-400 sm:hidden">{customer.company}</p>
                  </div>
                </td>
                <td className="px-5 py-3.5 hidden sm:table-cell">
                  <p className="text-sm text-navy-700">{customer.company}</p>
                </td>
                <td className="px-5 py-3.5 hidden md:table-cell">
                  <span className={`inline-flex text-[11px] font-semibold px-2 py-1 rounded ${stageColors[customer.stage] || 'bg-navy-100 text-navy-600'}`}>
                    {customer.stage}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-right">
                  <span className="text-sm font-semibold text-navy-800">{customer.value}</span>
                </td>
                <td className="px-5 py-3.5 hidden lg:table-cell">
                  <span className={`inline-flex text-[11px] font-semibold px-2 py-1 rounded ${statusColors[customer.status]}`}>
                    {statusLabels[customer.status]}
                  </span>
                </td>
                <td className="px-5 py-3.5 hidden xl:table-cell">
                  <span className="text-xs text-navy-400">{customer.updated}</span>
                </td>
                <td className="px-3 py-3.5">
                  <button className="p-1 rounded text-navy-400 hover:text-navy-600 hover:bg-navy-100
                                     opacity-0 group-hover:opacity-100 transition-all">
                    <MoreHorizontalIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
