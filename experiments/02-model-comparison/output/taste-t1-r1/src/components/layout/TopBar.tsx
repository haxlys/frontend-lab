import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { Avatar } from '@/components/ui/Avatar';
import { Select } from '@/components/ui/Controls';
import { cn } from '@/lib/cn';

interface TopBarProps {
  onMenuToggle?: () => void;
}

export function TopBar({ onMenuToggle }: TopBarProps) {
  const [range, setRange] = useState('30d');

  return (
    <header
      className={cn(
        'sticky top-0 z-30 flex h-topbar items-center gap-3 border-b border-line bg-surface-raised/85 px-4 backdrop-blur supports-[backdrop-filter]:bg-surface-raised/70 sm:gap-4 sm:px-6',
      )}
    >
      <button
        type="button"
        onClick={onMenuToggle}
        className="-ml-1 grid h-8 w-8 place-items-center rounded-sm text-ink-tertiary hover:bg-surface-sunken hover:text-ink-primary focus-ring lg:hidden"
        aria-label="Open menu"
      >
        <Icon.Dots size={18} />
      </button>

      {/* Breadcrumb */}
      <div className="hidden items-center gap-1.5 text-sm text-ink-tertiary md:flex">
        <a href="#" className="hover:text-ink-primary">
          Workspace
        </a>
        <Icon.ChevronRight size={12} className="text-ink-muted" />
        <span className="font-medium text-ink-primary">Dashboard</span>
      </div>

      {/* Search */}
      <div className="ml-auto flex max-w-xl flex-1 items-center sm:ml-4">
        <label className="group relative flex h-8 w-full items-center rounded-sm border border-line bg-surface-base transition-colors duration-150 focus-within:border-ink-primary/40 focus-within:bg-surface-raised hover:border-line-strong">
          <Icon.Search
            size={14}
            className="ml-2.5 shrink-0 text-ink-tertiary group-focus-within:text-ink-secondary"
          />
          <input
            type="search"
            placeholder="Search customers, deals, or commands…"
            className="h-full w-full bg-transparent px-2 text-sm text-ink-primary placeholder:text-ink-muted focus:outline-none"
          />
          <span className="mr-2 hidden items-center gap-0.5 rounded-xs border border-line bg-surface-raised px-1 py-0.5 text-2xs text-ink-tertiary sm:inline-flex">
            <Icon.Command size={10} />
            <span>/</span>
          </span>
        </label>
      </div>

      {/* Range */}
      <div className="hidden md:block">
        <Select
          ariaLabel="Date range"
          value={range}
          onChange={setRange}
          options={[
            { value: '7d', label: 'Last 7 days' },
            { value: '30d', label: 'Last 30 days' },
            { value: '90d', label: 'Last 90 days' },
            { value: 'ytd', label: 'Year to date' },
            { value: 'custom', label: 'Custom range' },
          ]}
        />
      </div>

      {/* Icon actions */}
      <div className="flex items-center gap-0.5">
        <IconButton label="Help"><Icon.Help size={16} /></IconButton>
        <NotificationBell />
        <span className="mx-1 hidden h-5 w-px bg-line sm:block" />
        <div className="hidden items-center gap-2 rounded-sm pl-1 pr-0.5 sm:flex">
          <Avatar name="Sara Kim" size="sm" status="online" />
          <div className="hidden text-left leading-tight lg:block">
            <p className="text-xs font-medium text-ink-primary">Sara Kim</p>
            <p className="text-2xs text-ink-tertiary">Sales · Pro</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function IconButton({
  label,
  children,
  badge,
}: {
  label: string;
  children: React.ReactNode;
  badge?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="relative grid h-8 w-8 place-items-center rounded-sm text-ink-tertiary hover:bg-surface-sunken hover:text-ink-primary focus-ring"
    >
      {children}
      {badge ? (
        <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-rose-500 ring-2 ring-surface-raised" />
      ) : null}
    </button>
  );
}

function NotificationBell() {
  return (
    <button
      type="button"
      aria-label="Notifications"
      className="relative grid h-8 w-8 place-items-center rounded-sm text-ink-tertiary hover:bg-surface-sunken hover:text-ink-primary focus-ring"
    >
      <Icon.Bell size={16} />
      <span className="absolute right-1.5 top-1.5 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-white ring-2 ring-surface-raised">
        3
      </span>
    </button>
  );
}
