import { Avatar } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/Icon';

type Props = {
  onMenuClick: () => void;
  title: string;
  subtitle?: string;
};

export function TopBar({ onMenuClick, title, subtitle }: Props) {
  return (
    <header className="h-16 bg-white border-b border-ink-200 flex items-center px-4 lg:px-6 gap-3 sticky top-0 z-20">
      <button
        onClick={onMenuClick}
        className="lg:hidden -ml-1 h-9 w-9 inline-flex items-center justify-center rounded-sm text-ink-600 hover:bg-ink-100"
        aria-label="Open menu"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      <div className="hidden md:block min-w-0">
        <h1 className="text-[15px] font-semibold text-ink-900 tracking-tight truncate">{title}</h1>
        {subtitle && <p className="text-xs text-ink-500 truncate">{subtitle}</p>}
      </div>

      <div className="flex-1 max-w-md mx-auto md:mx-0 md:ml-6 md:max-w-sm lg:max-w-md">
        <div className="relative">
          <Icon.Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
          <input
            type="search"
            placeholder="Search customers, deals, tasks…"
            className="w-full h-9 pl-9 pr-16 text-sm bg-ink-50 border border-ink-200 rounded-sm placeholder:text-ink-400 text-ink-900 focus:bg-white focus:border-ink-300 focus:ring-2 focus:ring-brand/15 transition-colors"
          />
          <kbd className="hidden sm:inline-flex absolute right-2.5 top-1/2 -translate-y-1/2 h-5 items-center px-1.5 text-[10px] font-medium text-ink-500 bg-white border border-ink-200 rounded-sm">
            ⌘K
          </kbd>
        </div>
      </div>

      <div className="flex items-center gap-1.5 ml-auto">
        <Button variant="primary" size="sm" leftIcon={<Icon.Plus size={14} />} className="hidden sm:inline-flex">
          New Deal
        </Button>
        <button
          className="relative h-9 w-9 inline-flex items-center justify-center rounded-sm text-ink-600 hover:bg-ink-100 hover:text-ink-900"
          aria-label="Notifications"
        >
          <Icon.Bell size={17} />
          <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-rose-500 ring-2 ring-white" />
        </button>
        <div className="h-6 w-px bg-ink-200 mx-1 hidden sm:block" />
        <div className="flex items-center gap-2.5 pl-1 pr-1 py-1 rounded-sm hover:bg-ink-50 cursor-pointer">
          <Avatar initials="EM" color="bg-gradient-to-br from-brand-500 to-brand-700 text-white" size="md" />
          <div className="hidden lg:block min-w-0">
            <div className="text-xs font-semibold text-ink-900 leading-tight">Eleanor M.</div>
            <div className="text-2xs text-ink-500 leading-tight">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}
