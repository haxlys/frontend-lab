import { type FC } from 'react';

interface Customer {
  id: number;
  name: string;
  contact: string;
  email: string;
  stage: string;
  value: string;
  updated: string;
}

const stageColorMap: Record<string, string> = {
  '리드 발굴': 'bg-slate-100 text-slate-600',
  '미팅 예약': 'bg-blue-50 text-blue-700',
  '제안 발송': 'bg-amber-50 text-amber-700',
  '협상 중': 'bg-teal-50 text-teal-700',
  '계약 완료': 'bg-green-50 text-green-700',
};

interface CustomerTableProps {
  customers: Customer[];
}

const CustomerTable: FC<CustomerTableProps> = ({ customers }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left font-medium text-slate-500 py-3 px-4">고객사</th>
            <th className="text-left font-medium text-slate-500 py-3 px-4 hidden sm:table-cell">담당자</th>
            <th className="text-left font-medium text-slate-500 py-3 px-4 hidden md:table-cell">이메일</th>
            <th className="text-left font-medium text-slate-500 py-3 px-4">단계</th>
            <th className="text-right font-medium text-slate-500 py-3 px-4">금액</th>
            <th className="text-right font-medium text-slate-500 py-3 px-4 hidden lg:table-cell">업데이트</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr
              key={c.id}
              className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-150"
            >
              <td className="py-3 px-4">
                <span className="font-semibold text-navy">{c.name}</span>
              </td>
              <td className="py-3 px-4 text-slate-600 hidden sm:table-cell">{c.contact}</td>
              <td className="py-3 px-4 text-slate-500 hidden md:table-cell">{c.email}</td>
              <td className="py-3 px-4">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    stageColorMap[c.stage] || 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {c.stage}
                </span>
              </td>
              <td className="py-3 px-4 text-right font-medium text-navy">{c.value}</td>
              <td className="py-3 px-4 text-right text-slate-400 text-xs hidden lg:table-cell">{c.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
