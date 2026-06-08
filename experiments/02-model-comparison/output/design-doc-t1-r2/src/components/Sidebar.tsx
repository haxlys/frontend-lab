import { useState } from 'react';
import {
  IconCalendar,
  IconChart,
  IconChevronDown,
  IconDashboard,
  IconInbox,
  IconLogo,
  IconMessage,
  IconPipeline,
  IconPlus,
  IconSettings,
  IconUsers,
} from './icons';

type NavId =
  | 'dashboard'
  | 'customers'
  | 'pipeline'
  | 'inbox'
  | 'calendar'
  | 'reports'
  | 'messages'
  | 'settings';

interface NavItem {
  id: NavId;
  label: string;
  icon: typeof IconDashboard;
  badge?: string;
}

const primary: NavItem[] = [
  { id: 'dashboard', label: '대시보드', icon: IconDashboard },
  { id: 'customers', label: '고객 관리', icon: IconUsers },
  { id: 'pipeline', label: '파이프라인', icon: IconPipeline, badge: '12' },
  { id: 'inbox', label: '받은 메시지', icon: IconInbox, badge: '4' },
  { id: 'calendar', label: '일정', icon: IconCalendar },
  { id: 'reports', label: '리포트', icon: IconChart },
];

const secondary: NavItem[] = [
  { id: 'messages', label: '메시지', icon: IconMessage },
  { id: 'settings', label: '설정', icon: IconSettings },
];

const workspaces = [
  { id: 'acme', label: 'Acme Corp', color: 'bg-emerald-500' },
  { id: 'northwind', label: 'Northwind', color: 'bg-amber-500' },
  { id: 'globex', label: 'Globex Inc.', color: 'bg-sky-500' },
];

export function Sidebar() {
  const [active, setActive] = useState<NavId>('dashboard');
  const [ws, setWs] = useState(workspaces[0]);

  return (
    <aside className="hidden lg:flex w-60 shrink-0 flex-col border-r border-border bg-white">
      <div className="h-14 flex items-center gap-2 px-4 border-b border-border">
        <IconLogo size={22} />
        <span className="text-sm font-semibold tracking-tight text-ink-900">
          Lattice
        </span>
        <span className="ml-1 px-1.5 h-4 inline-flex items-center rounded text-[10px] font-semibold bg-ink-100 text-ink-500">
          CRM
        </span>
      </div>

      <div className="px-3 pt-3">
        <button
          type="button"
          className="w-full flex items-center justify-between gap-2 h-9 px-2.5 rounded-md border border-ink-200 hover:border-ink-300 transition-colors"
        >
          <span className="flex items-center gap-2 min-w-0">
            <span
              className={`h-2 w-2 rounded-full ${ws.color} ring-2 ring-white`}
            />
            <span className="text-sm font-medium text-ink-800 truncate">
              {ws.label}
            </span>
          </span>
          <IconChevronDown size={14} className="text-ink-400" />
        </button>
        <div className="mt-1 pl-3.5 flex flex-col">
          {workspaces
            .filter((w) => w.id !== ws.id)
            .map((w) => (
              <button
                key={w.id}
                onClick={() => setWs(w)}
                className="hidden xl:flex items-center gap-2 h-7 text-xs text-ink-500 hover:text-ink-800"
              >
                <span className={`h-1.5 w-1.5 rounded-full ${w.color}`} />
                {w.label}
              </button>
            ))}
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-2.5 py-4">
        <p className="px-2 mb-1.5 text-2xs font-semibold uppercase tracking-wider text-ink-400">
          워크스페이스
        </p>
        <ul className="space-y-0.5">
          {primary.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id)}
                  className={`w-full group flex items-center gap-2.5 h-8 px-2 rounded-md text-sm transition-colors ${
                    isActive
                      ? 'bg-ink-100 text-ink-900 font-medium'
                      : 'text-ink-600 hover:text-ink-900 hover:bg-ink-50'
                  }`}
                >
                  <Icon
                    size={16}
                    className={
                      isActive ? 'text-ink-900' : 'text-ink-400 group-hover:text-ink-700'
                    }
                  />
                  <span className="truncate flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-2xs font-semibold px-1.5 h-4 inline-flex items-center rounded ${
                        isActive
                          ? 'bg-white text-ink-700 border border-ink-200'
                          : 'bg-ink-100 text-ink-500'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <p className="px-2 mt-6 mb-1.5 text-2xs font-semibold uppercase tracking-wider text-ink-400">
          일반
        </p>
        <ul className="space-y-0.5">
          {secondary.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id)}
                  className={`w-full group flex items-center gap-2.5 h-8 px-2 rounded-md text-sm transition-colors ${
                    isActive
                      ? 'bg-ink-100 text-ink-900 font-medium'
                      : 'text-ink-600 hover:text-ink-900 hover:bg-ink-50'
                  }`}
                >
                  <Icon
                    size={16}
                    className={
                      isActive ? 'text-ink-900' : 'text-ink-400 group-hover:text-ink-700'
                    }
                  />
                  <span className="truncate text-left">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-border p-3">
        <button className="w-full inline-flex items-center justify-center gap-1.5 h-8 rounded-md bg-ink-900 text-white text-xs font-medium hover:bg-ink-800 transition-colors">
          <IconPlus size={14} />
          신규 리드 추가
        </button>
        <div className="mt-3 flex items-center gap-2.5 px-1">
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-brand-500 to-indigo-600 ring-2 ring-white" />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-ink-900 truncate">김민지</p>
            <p className="text-2xs text-ink-500 truncate">Sales Lead · Acme</p>
          </div>
          <button className="text-ink-400 hover:text-ink-700">
            <IconChevronDown size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
}
