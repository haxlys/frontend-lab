import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Avatar, Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/Icon';
import { customers, type Customer } from '@/data';
import { cn } from '@/lib/cn';

const statusTone: Record<Customer['status'], 'emerald' | 'amber' | 'rose' | 'brand'> = {
  Active: 'emerald',
  Pending: 'amber',
  'At Risk': 'rose',
  New: 'brand',
};

const filters = ['All', 'Active', 'Pending', 'At Risk', 'New'];

export function CustomersTable() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = customers.filter((c) => {
    const matchesFilter = filter === 'All' || c.status === filter;
    const q = search.trim().toLowerCase();
    const matchesSearch =
      !q ||
      c.name.toLowerCase().includes(q) ||
      c.company.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  return (
    <Card padded={false} className="overflow-hidden">
      <div className="p-5 pb-3 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-ink-900 tracking-tight">Recent customers</h3>
          <p className="text-xs text-ink-500 mt-0.5">Updated in the last 7 days</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Icon.Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-ink-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter…"
              className="h-8 pl-8 pr-3 text-xs w-40 sm:w-48 bg-white border border-ink-200 rounded-sm placeholder:text-ink-400 focus:border-ink-300 focus:ring-2 focus:ring-brand/15"
            />
          </div>
          <Button size="sm" variant="secondary" leftIcon={<Icon.Filter size={13} />}>
            Filter
          </Button>
          <Button size="sm" variant="secondary" leftIcon={<Icon.Download size={13} />} className="hidden sm:inline-flex">
            Export
          </Button>
        </div>
      </div>

      <div className="px-5 pb-3 flex flex-wrap items-center gap-1.5 border-b border-ink-100">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              'px-2.5 h-7 text-xs font-medium rounded-sm transition-colors',
              filter === f
                ? 'bg-ink-900 text-white'
                : 'text-ink-600 hover:bg-ink-100',
            )}
          >
            {f}
          </button>
        ))}
        <div className="ml-auto text-2xs text-ink-500">{filtered.length} results</div>
      </div>

      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-2xs font-semibold text-ink-500 uppercase tracking-wider border-b border-ink-100 bg-ink-50/50">
              <th className="px-5 py-2.5 font-semibold">Customer</th>
              <th className="px-3 py-2.5 font-semibold">Status</th>
              <th className="px-3 py-2.5 font-semibold hidden md:table-cell">Value</th>
              <th className="px-3 py-2.5 font-semibold hidden lg:table-cell">Owner</th>
              <th className="px-3 py-2.5 font-semibold hidden md:table-cell">Updated</th>
              <th className="px-5 py-2.5 font-semibold w-10" aria-label="Actions" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr
                key={c.id}
                className="group border-b border-ink-100 last:border-0 hover:bg-ink-50/70 transition-colors"
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <Avatar
                      initials={c.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                      color="bg-ink-100 text-ink-700"
                      size="md"
                    />
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-ink-900 truncate">{c.name}</div>
                      <div className="text-xs text-ink-500 truncate">
                        {c.contact} · {c.company}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <Badge tone={statusTone[c.status]} dot>
                    {c.status}
                  </Badge>
                </td>
                <td className="px-3 py-3 hidden md:table-cell">
                  <span className="text-sm font-semibold text-ink-900 tabular-nums">{c.value}</span>
                </td>
                <td className="px-3 py-3 hidden lg:table-cell">
                  <div className="flex items-center gap-2">
                    <Avatar initials={c.ownerInitials} color={c.ownerColor} size="xs" />
                    <span className="text-xs text-ink-700">{c.owner}</span>
                  </div>
                </td>
                <td className="px-3 py-3 hidden md:table-cell">
                  <span className="text-xs text-ink-500">{c.updated}</span>
                </td>
                <td className="px-5 py-3 text-right">
                  <button
                    className="h-7 w-7 inline-flex items-center justify-center rounded-sm text-ink-400 hover:bg-ink-100 hover:text-ink-700 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="More"
                  >
                    <Icon.More size={15} />
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center text-sm text-ink-500">
                  No customers match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-5 py-3 border-t border-ink-100">
        <p className="text-xs text-ink-500">
          Showing <span className="font-medium text-ink-700">1–{filtered.length}</span> of{' '}
          <span className="font-medium text-ink-700">{customers.length}</span>
        </p>
        <div className="flex items-center gap-1">
          <Button size="sm" variant="ghost">
            Previous
          </Button>
          <Button size="sm" variant="secondary" className="!h-7 !px-2.5 !text-xs">
            1
          </Button>
          <Button size="sm" variant="ghost" className="!h-7 !px-2.5 !text-xs">
            2
          </Button>
          <Button size="sm" variant="ghost" className="!h-7 !px-2.5 !text-xs">
            3
          </Button>
          <Button size="sm" variant="ghost">
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
}
