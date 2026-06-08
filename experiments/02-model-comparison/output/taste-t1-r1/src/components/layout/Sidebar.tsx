import { Icon } from '@/components/ui/Icon';
import { Avatar } from '@/components/ui/Avatar';
import { cn } from '@/lib/cn';

interface NavItem {
  label: string;
  icon: keyof typeof Icon;
  badge?: string;
  count?: number;
  active?: boolean;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const groups: NavGroup[] = [
  {
    label: 'Workspace',
    items: [
      { label: 'Dashboard', icon: 'Grid', active: true },
      { label: 'Customers', icon: 'Users', count: 1248 },
      { label: 'Pipeline', icon: 'Pipeline', count: 47 },
      { label: 'Inbox', icon: 'Mail', badge: '3' },
      { label: 'Calendar', icon: 'Calendar' },
    ],
  },
  {
    label: 'Insights',
    items: [
      { label: 'Reports', icon: 'Chart' },
      { label: 'Automations', icon: 'Sparkles' },
    ],
  },
  {
    label: 'Account',
    items: [
      { label: 'Settings', icon: 'Settings' },
      { label: 'Help & docs', icon: 'Help' },
    ],
  },
];

interface SidebarProps {
  className?: string;
  onNavigate?: () => void;
}

export function Sidebar({ className, onNavigate }: SidebarProps) {
  return (
    <aside
      className={cn(
        'flex h-full w-sidebar shrink-0 flex-col border-r border-line bg-surface-raised',
        className,
      )}
    >
      {/* Brand */}
      <div className="flex h-topbar items-center gap-2 border-b border-line px-4">
        <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-ink-primary text-white">
          <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor" aria-hidden>
            <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" opacity=".35" />
            <path d="M4 4h6v6H4z" />
            <path d="M14 14h6v6h-6z" />
          </svg>
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-1.5">
          <span className="truncate text-sm font-semibold text-ink-primary">Northwind</span>
          <span className="rounded-xs bg-slate-100 px-1 py-px text-2xs font-medium text-ink-tertiary">
            v2.4
          </span>
        </div>
        <button
          type="button"
          className="grid h-6 w-6 place-items-center rounded-xs text-ink-tertiary hover:bg-surface-sunken hover:text-ink-primary focus-ring"
          aria-label="Switch workspace"
        >
          <Icon.ChevronDown size={14} />
        </button>
      </div>

      {/* Quick action */}
      <div className="px-3 pt-3">
        <button
          type="button"
          className={cn(
            'group flex w-full items-center justify-between rounded-sm border border-dashed border-line-strong bg-surface-base px-2.5 py-2 text-sm text-ink-secondary',
            'hover:border-ink-primary/30 hover:bg-surface-raised hover:text-ink-primary transition-colors duration-150 focus-ring',
          )}
        >
          <span className="inline-flex items-center gap-1.5">
            <Icon.Plus size={14} />
            <span className="font-medium">New deal</span>
          </span>
          <span className="hidden items-center gap-0.5 rounded-xs border border-line bg-surface-raised px-1 py-0.5 text-2xs text-ink-tertiary group-hover:border-line-strong lg:inline-flex">
            <Icon.Command size={10} />K
          </span>
        </button>
      </div>

      {/* Nav groups */}
      <nav className="flex-1 overflow-y-auto px-2 py-3">
        {groups.map((group) => (
          <div key={group.label} className="mb-5">
            <div className="flex h-6 items-center px-2 text-2xs font-semibold uppercase tracking-wider text-ink-muted">
              {group.label}
            </div>
            <ul className="mt-0.5 space-y-px">
              {group.items.map((item) => {
                const IconCmp = Icon[item.icon];
                return (
                  <li key={item.label}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate?.();
                      }}
                      aria-current={item.active ? 'page' : undefined}
                      className={cn(
                        'group flex h-7 items-center gap-2 rounded-sm px-2 text-sm transition-colors duration-150',
                        item.active
                          ? 'bg-accent-subtle text-accent'
                          : 'text-ink-secondary hover:bg-surface-sunken hover:text-ink-primary',
                      )}
                    >
                      <IconCmp
                        size={15}
                        className={cn(
                          'shrink-0',
                          item.active ? 'text-accent' : 'text-ink-tertiary group-hover:text-ink-secondary',
                        )}
                      />
                      <span className="flex-1 truncate font-medium">{item.label}</span>
                      {item.badge ? (
                        <span className="rounded-xs bg-accent px-1.5 py-0.5 text-2xs font-semibold text-white">
                          {item.badge}
                        </span>
                      ) : null}
                      {typeof item.count === 'number' ? (
                        <span
                          className={cn(
                            'rounded-xs px-1.5 py-0.5 text-2xs num',
                            item.active ? 'bg-accent/10 text-accent' : 'text-ink-muted',
                          )}
                        >
                          {item.count.toLocaleString()}
                        </span>
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Workspace usage card */}
      <div className="m-3 rounded-md border border-line bg-surface-base p-3">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold text-ink-primary">Pipeline capacity</p>
            <p className="mt-0.5 text-2xs text-ink-tertiary">Q3 quota tracking</p>
          </div>
          <span className="rounded-xs bg-emerald-50 px-1.5 py-0.5 text-2xs font-medium text-emerald-700">
            On track
          </span>
        </div>
        <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-xs bg-slate-200/70">
          <div className="h-full w-[68%] rounded-xs bg-accent" />
        </div>
        <div className="mt-1.5 flex items-center justify-between text-2xs">
          <span className="text-ink-tertiary">$684k / $1.0M</span>
          <span className="num font-medium text-ink-secondary">68%</span>
        </div>
      </div>

      {/* User pill */}
      <div className="flex items-center gap-2 border-t border-line p-3">
        <Avatar name="Sara Kim" size="md" status="online" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-ink-primary">Sara Kim</p>
          <p className="truncate text-2xs text-ink-tertiary">Sales · Northwind</p>
        </div>
        <button
          type="button"
          aria-label="Log out"
          className="grid h-7 w-7 place-items-center rounded-xs text-ink-tertiary hover:bg-surface-sunken hover:text-ink-primary focus-ring"
        >
          <Icon.Logout size={14} />
        </button>
      </div>
    </aside>
  );
}
