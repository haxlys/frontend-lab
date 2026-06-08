import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  BarChart3,
  Mail,
  Calendar,
  Settings,
  HelpCircle,
  ChevronsUpDown,
  Search,
  Plus,
} from "lucide-react";
import { cn } from "../../lib/cn";
import { Avatar } from "../ui/Avatar";

const primary = [
  { icon: LayoutDashboard, label: "대시보드", active: true },
  { icon: Users, label: "고객 관리" },
  { icon: Briefcase, label: "파이프라인" },
  { icon: BarChart3, label: "리포트" },
  { icon: Mail, label: "이메일" },
  { icon: Calendar, label: "캘린더" },
];

const secondary = [
  { icon: Settings, label: "설정" },
  { icon: HelpCircle, label: "도움말" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "hidden md:flex h-screen shrink-0 flex-col border-r border-ink-200 bg-white transition-[width] duration-200",
        collapsed ? "w-[68px]" : "w-[240px]"
      )}
    >
      {/* Workspace switcher */}
      <div className="flex h-14 items-center gap-2 border-b border-ink-200 px-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-ink-900 text-sm font-semibold text-white">
          N
        </div>
        {!collapsed && (
          <div className="flex min-w-0 flex-1 items-center justify-between">
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-ink-900">
                Northwind
              </div>
              <div className="truncate text-[11px] text-ink-500">Pro Plan</div>
            </div>
            <button className="rounded-md p-1 text-ink-400 hover:bg-ink-100 hover:text-ink-700">
              <ChevronsUpDown className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Search */}
      {!collapsed && (
        <div className="px-3 pt-3">
          <div className="flex h-8 items-center gap-2 rounded-md border border-ink-200 bg-ink-50 px-2 text-sm text-ink-500">
            <Search className="h-3.5 w-3.5" />
            <span className="truncate">빠른 검색...</span>
            <kbd className="ml-auto rounded border border-ink-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-ink-500">
              ⌘K
            </kbd>
          </div>
        </div>
      )}

      {/* Primary nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {!collapsed && (
          <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-ink-400">
            Workspace
          </div>
        )}
        <ul className="space-y-0.5">
          {primary.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={cn(
                  "group flex h-8 items-center gap-3 rounded-md px-2 text-sm font-medium transition-colors",
                  item.active
                    ? "bg-brand-50 text-brand-700"
                    : "text-ink-600 hover:bg-ink-100 hover:text-ink-900"
                )}
              >
                <item.icon
                  className={cn(
                    "h-4 w-4 shrink-0",
                    item.active ? "text-brand-600" : "text-ink-400"
                  )}
                />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>

        {!collapsed && (
          <>
            <div className="mb-2 mt-6 flex items-center justify-between px-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">
                Pipelines
              </span>
              <button className="rounded p-0.5 text-ink-400 hover:bg-ink-100 hover:text-ink-700">
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
            <ul className="space-y-0.5">
              {["Enterprise Sales", "SMB Outbound", "Renewals"].map((p) => (
                <li key={p}>
                  <a
                    href="#"
                    className="flex h-8 items-center gap-3 rounded-md px-2 text-sm text-ink-600 hover:bg-ink-100 hover:text-ink-900"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-ink-300" />
                    <span className="truncate">{p}</span>
                    <span className="ml-auto text-xs text-ink-400">
                      {p === "Enterprise Sales" ? 12 : 4}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </nav>

      {/* Secondary nav */}
      <div className="border-t border-ink-200 px-3 py-3">
        <ul className="space-y-0.5">
          {secondary.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className="flex h-8 items-center gap-3 rounded-md px-2 text-sm text-ink-600 hover:bg-ink-100 hover:text-ink-900"
              >
                <item.icon className="h-4 w-4 text-ink-400" />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>

        {!collapsed && (
          <div className="mt-3 flex items-center gap-2 rounded-md p-2 hover:bg-ink-50">
            <Avatar initials="SK" className="h-7 w-7 text-[11px]" />
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium text-ink-900">
                Sarah Kim
              </div>
              <div className="truncate text-xs text-ink-500">
                sarah@northwind.io
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setCollapsed((c) => !c)}
          className="mt-2 hidden h-7 w-full items-center justify-center rounded-md text-xs text-ink-400 hover:bg-ink-100 hover:text-ink-700 lg:flex"
        >
          {collapsed ? ">" : "<"}
        </button>
      </div>
    </aside>
  );
}
