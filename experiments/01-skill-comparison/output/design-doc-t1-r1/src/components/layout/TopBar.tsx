import { type FC, useState } from "react";
import { Avatar, IconButton } from "../ui";

const SvgIcon: FC<{ name: string; className?: string }> = ({ name, className = "h-5 w-5" }) => {
  const iconMap: Record<string, React.JSX.Element> = {
    Search: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
    Bell: <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></>,
    ChevronDown: <polyline points="6 9 12 15 18 9" />,
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
      {iconMap[name] ?? null}
    </svg>
  );
};

export const TopBar: FC = () => {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="flex h-16 items-center gap-4 border-b border-navy-200 bg-white px-6">
      <div
        className={`flex flex-1 items-center gap-2 rounded-md border px-3 py-2 transition-colors ${
          searchFocused
            ? "border-accent-500 bg-white ring-2 ring-accent-500/20"
            : "border-navy-200 bg-navy-50"
        }`}
      >
        <SvgIcon name="Search" className="h-4 w-4 text-navy-400" />
        <input
          type="text"
          placeholder="고객, 딜, 연락처 검색..."
          className="flex-1 bg-transparent text-sm text-navy-700 placeholder-navy-400 outline-none"
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />
        <kbd className="hidden rounded border border-navy-300 px-1.5 py-0.5 text-[10px] font-medium text-navy-400 sm:inline-block">
          ⌘K
        </kbd>
      </div>

      <div className="flex items-center gap-1">
        <IconButton badge={3} aria-label="알림">
          <SvgIcon name="Bell" />
        </IconButton>
      </div>

      <div className="flex items-center gap-2 pl-4 border-l border-navy-200">
        <Avatar initials="JD" size="sm" status="online" />
        <div className="hidden sm:block">
          <p className="text-sm font-medium text-navy-700">John Doe</p>
          <p className="text-xs text-navy-400">Admin</p>
        </div>
        <SvgIcon name="ChevronDown" className="hidden h-4 w-4 text-navy-400 sm:block" />
      </div>
    </header>
  );
};
