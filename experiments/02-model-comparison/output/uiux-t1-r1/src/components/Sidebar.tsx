import { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  GitBranch,
  CalendarDays,
  MessageSquare,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  Sparkles,
  ChevronsUpDown,
  Search,
  Plus,
} from 'lucide-react';
import { cn } from '../lib/utils';

type NavItem = {
  label: string;
  icon: typeof LayoutDashboard;
  href: string;
  badge?: string;
  active?: boolean;
};

const primaryNav: NavItem[] = [
  { label: '대시보드', icon: LayoutDashboard, href: '#', active: true },
  { label: '고객 관리', icon: Users, href: '#', badge: '24' },
  { label: '파이프라인', icon: GitBranch, href: '#' },
  { label: '일정', icon: CalendarDays, href: '#' },
  { label: '메시지', icon: MessageSquare, href: '#', badge: '3' },
  { label: '리포트', icon: BarChart3, href: '#' },
];

const secondaryNav: NavItem[] = [
  { label: '설정', icon: Settings, href: '#' },
  { label: '도움말', icon: HelpCircle, href: '#' },
  { label: '로그아웃', icon: LogOut, href: '#' },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const [active, setActive] = useState('대시보드');

  return (
    <>
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex w-64 shrink-0 flex-col border-r border-border bg-card transition-transform duration-200 ease-out lg:static lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
        aria-label="Primary"
      >
        <div className="flex h-16 items-center gap-2 border-b border-border px-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Sparkles className="h-4 w-4" strokeWidth={2.25} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">Pulse CRM</p>
            <p className="text-xs text-muted-foreground">Team Workspace</p>
          </div>
          <button
            type="button"
            className="hidden h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground lg:flex"
            aria-label="워크스페이스 전환"
          >
            <ChevronsUpDown className="h-4 w-4" />
          </button>
        </div>

        <div className="px-3 pt-4">
          <button
            type="button"
            className="group flex w-full items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:border-slate-300 hover:text-foreground"
          >
            <Search className="h-4 w-4" />
            <span className="flex-1">빠른 검색</span>
            <kbd className="hidden rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground sm:inline-block">
              ⌘K
            </kbd>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 scrollbar-thin">
          <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            워크스페이스
          </p>
          <ul className="space-y-0.5">
            {primaryNav.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.label;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(item.label);
                    }}
                    className={cn(
                      'group relative flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-accent/10 text-accent'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    )}
                  >
                    {isActive && (
                      <span className="absolute inset-y-1.5 left-0 w-0.5 rounded-r-full bg-accent" />
                    )}
                    <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={1.75} />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span
                        className={cn(
                          'rounded-full px-1.5 py-0.5 text-[10px] font-semibold leading-none',
                          isActive
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-muted text-muted-foreground'
                        )}
                      >
                        {item.badge}
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <p className="px-3 pb-2 pt-6 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            계정
          </p>
          <ul className="space-y-0.5">
            {secondaryNav.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={1.75} />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-border p-3">
          <div className="flex items-center gap-2 rounded-md p-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-accent to-blue-600 text-sm font-semibold text-white">
              JM
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-foreground">Jamie Morrison</p>
              <p className="truncate text-xs text-muted-foreground">jamie@pulse.app</p>
            </div>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="계정 메뉴"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {open && (
        <button
          type="button"
          aria-label="사이드바 닫기"
          onClick={onClose}
          className="fixed inset-0 z-30 bg-slate-900/30 backdrop-blur-sm lg:hidden"
        />
      )}
    </>
  );
}
