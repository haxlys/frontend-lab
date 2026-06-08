import { useMemo, useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Controls';
import { Icon } from '@/components/ui/Icon';
import { customers } from '@/lib/data';
import type { Customer } from '@/lib/types';
import { cn } from '@/lib/cn';

type StatusFilter = 'all' | Customer['status'];
type SortKey = 'updated' | 'mrr' | 'name';

const statusMeta: Record<
  Customer['status'],
  { label: string; tone: 'green' | 'blue' | 'amber' | 'slate' }
> = {
  active: { label: 'Active', tone: 'green' },
  trial: { label: 'Trial', tone: 'blue' },
  'churn-risk': { label: 'Churn risk', tone: 'amber' },
  new: { label: 'New', tone: 'slate' },
};

const industryTone: Record<Customer['industry'], 'blue' | 'violet' | 'rose' | 'amber' | 'emerald'> = {
  SaaS: 'blue',
  Fintech: 'violet',
  Health: 'rose',
  Retail: 'amber',
  Media: 'emerald',
};

function timeAgo(iso: string): string {
  const now = new Date('2026-06-08T12:00:00Z');
  const diffMs = now.getTime() - new Date(iso).getTime();
  const hours = Math.floor(diffMs / 3_600_000);
  if (hours < 1) return 'just now';
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export function CustomersTable() {
  const [status, setStatus] = useState<StatusFilter>('all');
  const [sort, setSort] = useState<SortKey>('updated');

  const rows = useMemo(() => {
    let r = customers.slice();
    if (status !== 'all') r = r.filter((c) => c.status === status);
    r.sort((a, b) => {
      if (sort === 'mrr') return b.mrr - a.mrr;
      if (sort === 'name') return a.name.localeCompare(b.name);
      return new Date(b.updated).getTime() - new Date(a.updated).getTime();
    });
    return r;
  }, [status, sort]);

  return (
    <Card padding="none" className="flex flex-col">
      <div className="flex flex-col gap-3 border-b border-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div>
          <h3 className="text-md font-semibold text-ink-primary">Recently updated customers</h3>
          <p className="text-xs text-ink-tertiary">
            {rows.length} of {customers.length} customers · auto-refreshed 4 min ago
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-sm border border-line bg-surface-base p-0.5">
            {(['all', 'active', 'trial', 'new', 'churn-risk'] as StatusFilter[]).map((s) => {
              const active = status === s;
              const label = s === 'all' ? 'All' : statusMeta[s].label;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStatus(s)}
                  className={cn(
                    'h-6 rounded-xs px-2 text-xs font-medium transition-colors duration-150 focus-ring',
                    active
                      ? 'bg-surface-raised text-ink-primary shadow-card'
                      : 'text-ink-tertiary hover:text-ink-secondary',
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <Select
            ariaLabel="Sort by"
            value={sort}
            onChange={(v) => setSort(v as SortKey)}
            options={[
              { value: 'updated', label: 'Recently updated' },
              { value: 'mrr', label: 'MRR (high to low)' },
              { value: 'name', label: 'Name (A → Z)' },
            ]}
          />
          <Button variant="outline" size="sm" leadingIcon={<Icon.Filter size={13} />}>
            Filters
          </Button>
          <Button variant="outline" size="sm" leadingIcon={<Icon.Download size={13} />}>
            <span className="hidden sm:inline">Export</span>
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] text-sm">
          <thead>
            <tr className="border-b border-line bg-surface-base/60 text-left text-2xs font-semibold uppercase tracking-wider text-ink-tertiary">
              <th className="px-5 py-2 font-semibold">Customer</th>
              <th className="px-3 py-2 font-semibold">Status</th>
              <th className="px-3 py-2 font-semibold">Industry</th>
              <th className="px-3 py-2 font-semibold">Owner</th>
              <th className="px-3 py-2 text-right font-semibold">MRR</th>
              <th className="px-3 py-2 font-semibold">Updated</th>
              <th className="w-10 px-3 py-2" />
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((c) => {
              const s = statusMeta[c.status];
              return (
                <tr
                  key={c.id}
                  className="group cursor-pointer transition-colors duration-150 hover:bg-surface-sunken/60"
                >
                  <td className="px-5 py-2.5">
                    <div className="flex items-center gap-2.5">
                      <Avatar name={c.name} size="sm" />
                      <div className="min-w-0">
                        <p className="truncate font-medium text-ink-primary">{c.name}</p>
                        <p className="truncate text-xs text-ink-tertiary">{c.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-2.5">
                    <Badge tone={s.tone} size="xs">
                      {s.label}
                    </Badge>
                  </td>
                  <td className="px-3 py-2.5">
                    <Badge tone={industryTone[c.industry]} variant="outline" size="xs">
                      {c.industry}
                    </Badge>
                  </td>
                  <td className="px-3 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <Avatar name={c.owner} size="xs" />
                      <span className="truncate text-xs text-ink-secondary">{c.owner}</span>
                    </div>
                  </td>
                  <td className="px-3 py-2.5 text-right">
                    <span className="num text-sm font-semibold text-ink-primary">
                      {c.mrr > 0 ? `$${c.mrr.toLocaleString()}` : '—'}
                    </span>
                    {c.mrr > 0 ? (
                      <p className="num text-2xs text-ink-tertiary">
                        ${(c.mrr * 12).toLocaleString()} ARR
                      </p>
                    ) : null}
                  </td>
                  <td className="px-3 py-2.5">
                    <span className="text-xs text-ink-secondary">{timeAgo(c.updated)}</span>
                  </td>
                  <td className="px-3 py-2.5 text-right">
                    <button
                      type="button"
                      aria-label="Open customer"
                      className="grid h-6 w-6 place-items-center rounded-xs text-ink-muted opacity-0 hover:bg-surface-base hover:text-ink-secondary group-hover:opacity-100 focus-ring"
                    >
                      <Icon.External size={13} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-line px-4 py-2.5 text-xs text-ink-tertiary sm:px-5">
        <span>
          Showing <span className="font-medium text-ink-secondary num">{rows.length}</span> of{' '}
          <span className="font-medium text-ink-secondary num">{customers.length}</span>
        </span>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" disabled>
            Previous
          </Button>
          <Button variant="ghost" size="sm" trailingIcon={<Icon.ChevronRight size={12} />}>
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
}
