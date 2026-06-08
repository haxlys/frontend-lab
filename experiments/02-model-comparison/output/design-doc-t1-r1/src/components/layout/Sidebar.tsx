import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  TrendingUp,
  Mail,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  Sparkles,
} from 'lucide-react';
import { cn } from '../../lib/utils';

const primaryNav = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/customers', label: '고객 관리', icon: Users },
  { to: '/pipeline', label: '파이프라인', icon: TrendingUp },
  { to: '/inbox', label: '받은 메시지', icon: Mail },
  { to: '/reports', label: '리포트', icon: BarChart3 },
];

const secondaryNav = [
  { to: '/settings', label: '설정', icon: Settings },
  { to: '/help', label: '도움말', icon: HelpCircle },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:flex w-60 shrink-0 flex-col border-r border-ink-200 bg-white">
      <div className="flex h-16 items-center gap-2 border-b border-ink-200 px-5">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-ink-900 text-white">
          <Sparkles className="h-4 w-4" strokeWidth={2.5} />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold tracking-tight text-ink-900">Northwind</span>
          <span className="text-2xs text-ink-500">CRM Suite</span>
        </div>
      </div>

      <nav className="flex-1 space-y-6 px-3 py-5">
        <div>
          <p className="px-3 pb-2 text-2xs font-medium uppercase tracking-wider text-ink-400">
            Workspace
          </p>
          <ul className="space-y-0.5">
            {primaryNav.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'group flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-ink-100 text-ink-900'
                        : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'
                    )
                  }
                >
                  <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="px-3 pb-2 text-2xs font-medium uppercase tracking-wider text-ink-400">
            Account
          </p>
          <ul className="space-y-0.5">
            {secondaryNav.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    cn(
                      'group flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-ink-100 text-ink-900'
                        : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'
                    )
                  }
                >
                  <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="border-t border-ink-200 p-3">
        <div className="flex items-center gap-2.5 rounded-md px-2 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-xs font-semibold text-white">
            JK
          </div>
          <div className="min-w-0 flex-1 leading-tight">
            <p className="truncate text-sm font-medium text-ink-900">Jamie Kim</p>
            <p className="truncate text-2xs text-ink-500">jamie@northwind.io</p>
          </div>
          <button
            type="button"
            className="rounded-md p-1.5 text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-700"
            aria-label="로그아웃"
          >
            <LogOut className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
