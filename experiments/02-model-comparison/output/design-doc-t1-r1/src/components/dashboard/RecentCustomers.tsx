import { ArrowUpDown, MoreHorizontal, Mail, Phone } from 'lucide-react';
import { cn, formatCurrency } from '../../lib/utils';

type Customer = {
  id: number;
  name: string;
  contact: string;
  email: string;
  owner: string;
  ownerInitials: string;
  value: number;
  status: 'active' | 'pending' | 'negotiation' | 'closed';
  updated: string;
};

const customers: Customer[] = [
  {
    id: 1,
    name: 'Acme Corporation',
    contact: '이서연 · CTO',
    email: 'seoyeon@acme.io',
    owner: '지훈',
    ownerInitials: 'JH',
    value: 124000,
    status: 'negotiation',
    updated: '2시간 전',
  },
  {
    id: 2,
    name: 'Globex Industries',
    contact: '박도윤 · VP Eng',
    email: 'doyoon@globex.co',
    owner: '소연',
    ownerInitials: 'SY',
    value: 86000,
    status: 'active',
    updated: '5시간 전',
  },
  {
    id: 3,
    name: 'Initech Software',
    contact: '김민재 · Head of Ops',
    email: 'minjae@initech.dev',
    owner: '지훈',
    ownerInitials: 'JH',
    value: 42000,
    status: 'pending',
    updated: '어제',
  },
  {
    id: 4,
    name: 'Hooli Cloud',
    contact: '최유진 · Director',
    email: 'yujin@hooli.com',
    owner: '민서',
    ownerInitials: 'MS',
    value: 218000,
    status: 'negotiation',
    updated: '어제',
  },
  {
    id: 5,
    name: 'Pied Piper',
    contact: '강하준 · CEO',
    email: 'hajun@piedpiper.io',
    owner: '소연',
    ownerInitials: 'SY',
    value: 64000,
    status: 'active',
    updated: '2일 전',
  },
  {
    id: 6,
    name: 'Soylent Foods',
    contact: '한지우 · Procurement',
    email: 'jiwu@soylent.com',
    owner: '민서',
    ownerInitials: 'MS',
    value: 31200,
    status: 'closed',
    updated: '3일 전',
  },
];

const statusLabel: Record<Customer['status'], string> = {
  active: '활성',
  pending: '대기',
  negotiation: '협상 중',
  closed: '완료',
};

const statusClass: Record<Customer['status'], string> = {
  active: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  pending: 'bg-amber-50 text-amber-700 ring-amber-200',
  negotiation: 'bg-brand-50 text-brand-700 ring-brand-100',
  closed: 'bg-ink-100 text-ink-600 ring-ink-200',
};

export function RecentCustomers() {
  return (
    <section className="overflow-hidden rounded-lg border border-ink-200 bg-white shadow-soft">
      <header className="flex items-center justify-between border-b border-ink-200 p-5">
        <div>
          <h2 className="text-base font-semibold tracking-tight text-ink-900">
            최근 업데이트된 고객
          </h2>
          <p className="mt-0.5 text-sm text-ink-500">
            최근 7일 동안 활동이 있었던 {customers.length}개의 계정
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-md border border-ink-200 px-3 py-1.5 text-xs font-medium text-ink-600 transition-colors hover:bg-ink-50 hover:text-ink-800"
          >
            필터
          </button>
          <button
            type="button"
            className="rounded-md border border-ink-200 px-3 py-1.5 text-xs font-medium text-ink-600 transition-colors hover:bg-ink-50 hover:text-ink-800"
          >
            전체 보기
          </button>
        </div>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-sm">
          <thead>
            <tr className="border-b border-ink-200 bg-ink-50/60 text-left text-2xs font-medium uppercase tracking-wider text-ink-500">
              <th className="px-5 py-2.5 font-medium">
                <span className="inline-flex items-center gap-1">
                  고객 <ArrowUpDown className="h-3 w-3" />
                </span>
              </th>
              <th className="px-5 py-2.5 font-medium">담당자</th>
              <th className="px-5 py-2.5 font-medium">상태</th>
              <th className="px-5 py-2.5 font-medium text-right">파이프라인 가치</th>
              <th className="px-5 py-2.5 font-medium">최근 업데이트</th>
              <th className="w-10 px-5 py-2.5" />
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            {customers.map((c) => (
              <tr
                key={c.id}
                className="group cursor-pointer transition-colors hover:bg-ink-50/70"
              >
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-ink-100 text-xs font-semibold text-ink-700">
                      {c.name
                        .split(' ')
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join('')}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-medium text-ink-900">{c.name}</p>
                      <p className="truncate text-xs text-ink-500">{c.contact}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-2xs font-semibold text-white">
                      {c.ownerInitials}
                    </div>
                    <span className="text-ink-700">{c.owner}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5">
                  <span
                    className={cn(
                      'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset',
                      statusClass[c.status]
                    )}
                  >
                    {statusLabel[c.status]}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-right font-semibold tabular-nums text-ink-900">
                  {formatCurrency(c.value)}
                </td>
                <td className="px-5 py-3.5 text-ink-500">{c.updated}</td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center justify-end gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                    <button
                      type="button"
                      aria-label="이메일"
                      className="rounded-md p-1.5 text-ink-500 hover:bg-ink-100 hover:text-ink-800"
                    >
                      <Mail className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      aria-label="전화"
                      className="rounded-md p-1.5 text-ink-500 hover:bg-ink-100 hover:text-ink-800"
                    >
                      <Phone className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      aria-label="더보기"
                      className="rounded-md p-1.5 text-ink-500 hover:bg-ink-100 hover:text-ink-800"
                    >
                      <MoreHorizontal className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="flex items-center justify-between border-t border-ink-200 px-5 py-3 text-xs text-ink-500">
        <span>총 {customers.length}개 중 1–6 표시</span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="rounded-md border border-ink-200 px-2.5 py-1 text-ink-500 hover:bg-ink-50 hover:text-ink-800 disabled:opacity-40"
            disabled
          >
            이전
          </button>
          <button
            type="button"
            className="rounded-md border border-ink-200 px-2.5 py-1 text-ink-500 hover:bg-ink-50 hover:text-ink-800"
          >
            다음
          </button>
        </div>
      </footer>
    </section>
  );
}
