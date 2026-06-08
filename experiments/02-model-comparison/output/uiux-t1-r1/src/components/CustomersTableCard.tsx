import { useMemo, useState } from 'react';
import {
  ArrowUpDown,
  ArrowDown,
  ArrowUp,
  MoreHorizontal,
  Search,
  Filter,
  Download,
} from 'lucide-react';
import { cn, formatCurrency } from '../lib/utils';

type Status = 'active' | 'pending' | 'churned';
type Stage = '리드' | '컨택' | '제안' | '협상' | '성사';

type Customer = {
  id: string;
  name: string;
  contact: string;
  email: string;
  owner: { name: string; initials: string; color: string };
  stage: Stage;
  value: number;
  status: Status;
  updated: string;
};

const customers: Customer[] = [
  {
    id: 'c1',
    name: 'Northwind Traders',
    contact: 'Anna Müller',
    email: 'anna@northwind.io',
    owner: { name: 'Jamie M.', initials: 'JM', color: 'from-blue-500 to-blue-600' },
    stage: '협상',
    value: 84000,
    status: 'active',
    updated: '2시간 전',
  },
  {
    id: 'c2',
    name: 'Acme Corporation',
    contact: 'Diego Alvarez',
    email: 'diego@acme.com',
    owner: { name: 'Sora K.', initials: 'SK', color: 'from-violet-500 to-violet-600' },
    stage: '제안',
    value: 142000,
    status: 'active',
    updated: '5시간 전',
  },
  {
    id: 'c3',
    name: 'Globex Inc.',
    contact: 'Hana Park',
    email: 'hana@globex.co',
    owner: { name: 'Jamie M.', initials: 'JM', color: 'from-blue-500 to-blue-600' },
    stage: '성사',
    value: 216000,
    status: 'active',
    updated: '어제',
  },
  {
    id: 'c4',
    name: 'Initech',
    contact: 'Marco Bianchi',
    email: 'marco@initech.dev',
    owner: { name: 'Liam P.', initials: 'LP', color: 'from-emerald-500 to-emerald-600' },
    stage: '컨택',
    value: 38000,
    status: 'pending',
    updated: '어제',
  },
  {
    id: 'c5',
    name: 'Umbrella Corp.',
    contact: 'Riya Singh',
    email: 'riya@umbrella.health',
    owner: { name: 'Sora K.', initials: 'SK', color: 'from-violet-500 to-violet-600' },
    stage: '제안',
    value: 96000,
    status: 'active',
    updated: '2일 전',
  },
  {
    id: 'c6',
    name: 'Stark Industries',
    contact: 'Noah Williams',
    email: 'noah@stark.io',
    owner: { name: 'Liam P.', initials: 'LP', color: 'from-emerald-500 to-emerald-600' },
    stage: '협상',
    value: 312000,
    status: 'active',
    updated: '3일 전',
  },
  {
    id: 'c7',
    name: 'Wayne Enterprises',
    contact: 'Olivia Chen',
    email: 'olivia@wayne.co',
    owner: { name: 'Jamie M.', initials: 'JM', color: 'from-blue-500 to-blue-600' },
    stage: '리드',
    value: 18000,
    status: 'pending',
    updated: '4일 전',
  },
  {
    id: 'c8',
    name: 'Hooli',
    contact: 'Ethan Park',
    email: 'ethan@hooli.com',
    owner: { name: 'Sora K.', initials: 'SK', color: 'from-violet-500 to-violet-600' },
    stage: '성사',
    value: 58000,
    status: 'churned',
    updated: '1주 전',
  },
];

type SortKey = 'name' | 'value' | 'updated';
type SortDir = 'asc' | 'desc';

const statusStyle: Record<Status, { label: string; className: string }> = {
  active: { label: '활성', className: 'bg-emerald-50 text-emerald-700 ring-emerald-200' },
  pending: { label: '대기', className: 'bg-amber-50 text-amber-700 ring-amber-200' },
  churned: { label: '이탈', className: 'bg-slate-100 text-slate-600 ring-slate-200' },
};

const stageStyle: Record<Stage, string> = {
  리드: 'bg-slate-100 text-slate-700',
  컨택: 'bg-blue-50 text-blue-700',
  제안: 'bg-violet-50 text-violet-700',
  협상: 'bg-amber-50 text-amber-700',
  성사: 'bg-emerald-50 text-emerald-700',
};

export function CustomersTableCard() {
  const [sortKey, setSortKey] = useState<SortKey>('updated');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [statusFilter, setStatusFilter] = useState<Status | 'all'>('all');

  const filtered = useMemo(() => {
    let list = customers;
    if (statusFilter !== 'all') list = list.filter((c) => c.status === statusFilter);
    list = [...list].sort((a, b) => {
      let av: number | string = a[sortKey] as never;
      let bv: number | string = b[sortKey] as never;
      if (sortKey === 'name') {
        av = a.name;
        bv = b.name;
      }
      if (av < bv) return sortDir === 'asc' ? -1 : 1;
      if (av > bv) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
    return list;
  }, [sortKey, sortDir, statusFilter]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else {
      setSortKey(key);
      setSortDir(key === 'name' ? 'asc' : 'desc');
    }
  };

  return (
    <section
      aria-label="최근 업데이트된 고객"
      className="rounded-lg border border-border bg-card shadow-soft"
    >
      <header className="flex flex-col gap-3 border-b border-border p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold tracking-tight text-foreground">
            최근 업데이트된 고객
          </h2>
          <p className="mt-0.5 text-xs text-muted-foreground">
            가장 최근에 활동이 있었던 {filtered.length}개의 회사
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="회사 또는 담당자"
              className="h-8 w-44 rounded-md border border-border bg-muted/40 pl-8 pr-3 text-xs text-foreground placeholder:text-muted-foreground transition-colors hover:border-slate-300 focus:border-accent focus:bg-card focus:outline-none focus:ring-2 focus:ring-accent/20 sm:w-56"
              aria-label="테이블 내 검색"
            />
          </div>
          <div className="inline-flex rounded-md border border-border bg-muted/50 p-0.5 text-xs">
            {(['all', 'active', 'pending', 'churned'] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStatusFilter(s)}
                className={cn(
                  'h-7 rounded-[5px] px-2.5 font-medium transition-colors',
                  statusFilter === s
                    ? 'bg-card text-foreground shadow-soft'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {s === 'all' ? '전체' : statusStyle[s as Status].label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="필터"
          >
            <Filter className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex h-8 items-center gap-1.5 rounded-md border border-border bg-card px-2.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Download className="h-3.5 w-3.5" />
            내보내기
          </button>
        </div>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30 text-[11px] uppercase tracking-wider text-muted-foreground">
              <th scope="col" className="px-5 py-3 font-semibold">
                <SortButton
                  active={sortKey === 'name'}
                  dir={sortDir}
                  onClick={() => toggleSort('name')}
                >
                  회사
                </SortButton>
              </th>
              <th scope="col" className="px-5 py-3 font-semibold">담당자</th>
              <th scope="col" className="px-5 py-3 font-semibold">단계</th>
              <th scope="col" className="px-5 py-3 font-semibold">상태</th>
              <th scope="col" className="px-5 py-3 text-right font-semibold">
                <SortButton
                  active={sortKey === 'value'}
                  dir={sortDir}
                  onClick={() => toggleSort('value')}
                  align="right"
                >
                  예상 가치
                </SortButton>
              </th>
              <th scope="col" className="px-5 py-3 font-semibold">
                <SortButton
                  active={sortKey === 'updated'}
                  dir={sortDir}
                  onClick={() => toggleSort('updated')}
                >
                  업데이트
                </SortButton>
              </th>
              <th scope="col" className="w-10 px-3 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((c) => {
              const status = statusStyle[c.status];
              return (
                <tr
                  key={c.id}
                  className="group transition-colors hover:bg-muted/40"
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-slate-100 to-slate-200 text-xs font-semibold text-slate-700">
                        {c.name
                          .split(' ')
                          .map((w) => w[0])
                          .slice(0, 2)
                          .join('')}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-foreground">{c.name}</p>
                        <p className="truncate text-xs text-muted-foreground">{c.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          'flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br text-[10px] font-semibold text-white',
                          c.owner.color
                        )}
                      >
                        {c.owner.initials}
                      </span>
                      <span className="text-sm text-foreground">{c.contact}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={cn(
                        'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium',
                        stageStyle[c.stage]
                      )}
                    >
                      {c.stage}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={cn(
                        'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset',
                        status.className
                      )}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {status.label}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right text-sm font-semibold text-foreground tabular-nums">
                    {formatCurrency(c.value)}
                  </td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground">{c.updated}</td>
                  <td className="px-3 py-3.5">
                    <button
                      type="button"
                      className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground opacity-0 transition-colors hover:bg-muted hover:text-foreground group-hover:opacity-100 focus-visible:opacity-100"
                      aria-label={`${c.name} 메뉴`}
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <footer className="flex flex-col items-center justify-between gap-3 border-t border-border px-5 py-3 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          <span className="font-medium text-foreground">1–{filtered.length}</span> / 총 {customers.length}개
        </p>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            disabled
            className="h-7 rounded-md border border-border bg-card px-2.5 text-xs font-medium text-muted-foreground disabled:opacity-50"
          >
            이전
          </button>
          <button
            type="button"
            className="h-7 w-7 rounded-md bg-primary text-xs font-semibold text-primary-foreground"
          >
            1
          </button>
          <button
            type="button"
            className="h-7 w-7 rounded-md border border-border bg-card text-xs font-medium text-foreground hover:bg-muted"
          >
            2
          </button>
          <button
            type="button"
            className="h-7 w-7 rounded-md border border-border bg-card text-xs font-medium text-foreground hover:bg-muted"
          >
            3
          </button>
          <button
            type="button"
            className="h-7 rounded-md border border-border bg-card px-2.5 text-xs font-medium text-foreground hover:bg-muted"
          >
            다음
          </button>
        </div>
      </footer>
    </section>
  );
}

function SortButton({
  active,
  dir,
  onClick,
  align = 'left',
  children,
}: {
  active: boolean;
  dir: SortDir;
  onClick: () => void;
  align?: 'left' | 'right';
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'group inline-flex items-center gap-1 transition-colors hover:text-foreground',
        align === 'right' && 'ml-auto'
      )}
    >
      {children}
      {active ? (
        dir === 'asc' ? (
          <ArrowUp className="h-3 w-3 text-foreground" />
        ) : (
          <ArrowDown className="h-3 w-3 text-foreground" />
        )
      ) : (
        <ArrowUpDown className="h-3 w-3 opacity-50 group-hover:opacity-100" />
      )}
    </button>
  );
}
