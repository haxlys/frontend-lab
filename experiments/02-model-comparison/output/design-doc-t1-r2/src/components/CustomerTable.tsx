import { SectionHeader } from './ui/SectionHeader';
import { Avatar } from './ui/Avatar';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { customers } from '../data/mock';
import {
  IconArrowUpRight,
  IconChevronDown,
  IconMore,
  IconSearch,
} from './icons';

const formatKRW = (n: number) =>
  '₩' + n.toLocaleString('ko-KR');

export function CustomerTable() {
  return (
    <div className="card overflow-hidden">
      <div className="p-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <SectionHeader
          title="최근 업데이트된 고객"
          description="지난 7일 동안 활동이 있었던 리드"
          className="mb-0"
        />
        <div className="flex items-center gap-2">
          <label className="relative">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-ink-400">
              <IconSearch size={14} />
            </span>
            <input
              placeholder="고객 필터…"
              className="h-8 pl-7 pr-2 text-xs w-44 bg-ink-50 border border-transparent rounded-md placeholder:text-ink-400 text-ink-800 focus:bg-white focus:border-ink-200 focus:shadow-ring transition-colors"
            />
          </label>
          <Button size="sm" variant="outline" rightIcon={<IconChevronDown size={12} />}>
            모든 단계
          </Button>
          <Button size="sm" variant="outline">
            내보내기
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-2xs uppercase tracking-wider text-ink-500 border-y border-border bg-ink-50/50">
              <th className="font-semibold px-5 py-2.5">고객</th>
              <th className="font-semibold px-5 py-2.5">담당자</th>
              <th className="font-semibold px-5 py-2.5">업종</th>
              <th className="font-semibold px-5 py-2.5 text-right">가치</th>
              <th className="font-semibold px-5 py-2.5">단계</th>
              <th className="font-semibold px-5 py-2.5">업데이트</th>
              <th className="font-semibold px-5 py-2.5 w-10" />
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr
                key={c.id}
                className="row-hover border-b border-border last:border-b-0"
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="h-7 w-7 rounded-md grid place-items-center text-[11px] font-semibold text-white"
                      style={{ background: c.ownerColor }}
                    >
                      {c.name[0]}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink-900 truncate">
                        {c.name}
                      </p>
                      <p className="text-2xs text-ink-500">#{(c.id).toUpperCase()}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <Avatar name={c.owner} size="xs" />
                    <span className="text-xs text-ink-700">{c.owner}</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-xs text-ink-600">{c.industry}</td>
                <td className="px-5 py-3 text-right text-sm font-semibold text-ink-900 tabular-nums">
                  {formatKRW(c.value)}
                </td>
                <td className="px-5 py-3">
                  <Badge tone={c.stageTone}>{c.stage}</Badge>
                </td>
                <td className="px-5 py-3 text-xs text-ink-500">{c.updated}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      aria-label="열기"
                      className="h-6 w-6 grid place-items-center rounded text-ink-400 hover:text-ink-800 hover:bg-ink-100"
                    >
                      <IconArrowUpRight size={12} />
                    </button>
                    <button
                      aria-label="더보기"
                      className="h-6 w-6 grid place-items-center rounded text-ink-400 hover:text-ink-800 hover:bg-ink-100"
                    >
                      <IconMore size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-5 py-3 border-t border-border text-xs text-ink-500">
        <span>전체 {customers.length}개 중 1–{customers.length}</span>
        <div className="flex items-center gap-1">
          <Button size="sm" variant="ghost">
            이전
          </Button>
          <Button size="sm" variant="ghost">
            다음
          </Button>
        </div>
      </div>
    </div>
  );
}
