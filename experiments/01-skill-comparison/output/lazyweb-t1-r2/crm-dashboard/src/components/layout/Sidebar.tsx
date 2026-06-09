import { type FC } from "react";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

const navItems: NavItem[] = [
  {
    label: "대시보드",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <rect x="11" y="3" width="6" height="6" rx="1" />
        <rect x="3" y="11" width="6" height="6" rx="1" />
        <rect x="11" y="11" width="6" height="6" rx="1" />
      </svg>
    ),
    active: true,
  },
  {
    label: "고객 관리",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="6" r="3" />
        <path d="M1 18v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" />
        <circle cx="15" cy="7" r="2" />
        <path d="M16 17v-1a3 3 0 0 0-1.5-2.6" />
      </svg>
    ),
  },
  {
    label: "파이프라인",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="14" height="3" rx="1.5" />
        <rect x="5" y="10" width="10" height="3" rx="1.5" />
        <rect x="7" y="15" width="6" height="3" rx="1.5" />
      </svg>
    ),
  },
  {
    label: "거래",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v16l3-3 3 3 3-3 3 3 3-3 2 2V2z" />
      </svg>
    ),
  },
  {
    label: "리포트",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="14" width="3" height="4" rx="0.5" />
        <rect x="8.5" y="10" width="3" height="8" rx="0.5" />
        <rect x="14" y="5" width="3" height="13" rx="0.5" />
      </svg>
    ),
  },
  {
    label: "설정",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="2.5" />
        <path d="M10 1.5v2M10 16.5v2M3.5 10h2M14.5 10h2M4.93 4.93l1.41 1.41M13.66 13.66l1.41 1.41M4.93 15.07l1.41-1.41M13.66 6.34l1.41-1.41" />
      </svg>
    ),
  },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export const Sidebar: FC<SidebarProps> = ({ open, onClose }) => (
  <>
    {open && (
      <div
        className="fixed inset-0 bg-black/30 z-30 lg:hidden"
        onClick={onClose}
      />
    )}

    <aside
      className={`fixed left-0 top-0 bottom-0 w-[232px] bg-navy-800 text-white flex flex-col z-30 transition-transform duration-200 ${
        open ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="flex items-center justify-between gap-2.5 px-5 h-[56px] border-b border-navy-700 flex-shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-accent-600 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-semibold text-[15px] tracking-tight">FlowCRM</span>
        </div>
        <button
          className="lg:hidden text-navy-400 hover:text-white transition-colors"
          onClick={onClose}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M15 5L5 15M5 5l10 10" />
          </svg>
        </button>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            onClick={onClose}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium transition-colors ${
              item.active
                ? "bg-accent-600/20 text-white"
                : "text-navy-400 hover:bg-navy-700/60 hover:text-navy-200"
            }`}
          >
            <span className="flex-shrink-0">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="px-4 py-3 border-t border-navy-700 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-accent-600 flex items-center justify-center text-xs font-semibold">
          KJ
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-medium text-white truncate">김지원</p>
          <p className="text-[11px] text-navy-400 truncate">관리자</p>
        </div>
      </div>
    </aside>
  </>
);
