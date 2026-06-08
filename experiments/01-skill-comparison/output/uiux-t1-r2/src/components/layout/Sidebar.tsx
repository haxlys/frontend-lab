import { cn } from "../../lib/utils";
import {
  LayoutDashboard,
  Users,
  GitBranch,
  Settings,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

interface NavItem {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  badge?: number;
}

const mainItems: NavItem[] = [
  { icon: LayoutDashboard, label: "대시보드", active: true },
  { icon: Users, label: "고객 관리", badge: 12 },
  { icon: GitBranch, label: "파이프라인" },
  { icon: BarChart3, label: "리포트" },
];

const subItems: NavItem[] = [
  { icon: Settings, label: "설정" },
];

export function Sidebar() {
  return (
    <aside className="flex h-full w-sidebar shrink-0 flex-col border-r border-slate-200 bg-white">   
      <div className="flex h-topbar items-center gap-2.5 border-b border-slate-200 px-5">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-navy-900">
          <span className="text-xs font-bold text-white">C</span>
        </div>
        <span className="text-sm font-semibold tracking-tight text-slate-800">
          ConnectFlow
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-0.5 px-3 py-4">
        <div className="mb-2 px-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            메인 메뉴
          </span>
        </div>

        {mainItems.map((item) => (
          <NavButton key={item.label} item={item} />
        ))}

        <div className="mb-2 mt-6 px-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            시스템
          </span>
        </div>

        {subItems.map((item) => (
          <NavButton key={item.label} item={item} />
        ))}
      </nav>

      <div className="border-t border-slate-200 p-4">
        <div className="flex items-center gap-3 rounded-md bg-slate-50 px-3 py-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-royal-600 text-xs font-semibold text-white">
            KJ
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-xs font-medium text-slate-700">김지훈</p>
            <p className="truncate text-[11px] text-slate-400">Account Executive</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavButton({ item }: { item: NavItem }) {
  const Icon = item.icon;
  return (
    <button
      className={cn(
        "flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors",
        item.active
          ? "bg-slate-100 text-slate-900"
          : "text-slate-500 hover:bg-slate-50 hover:text-slate-700",
      )}
    >
      <Icon className={cn("h-4 w-4 shrink-0", item.active && "text-royal-600")} />
      <span className="flex-1">{item.label}</span>
      {item.badge != null && (
        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-royal-50 px-1.5 text-[11px] font-semibold text-royal-600">
          {item.badge}
        </span>
      )}
    </button>
  );
}
