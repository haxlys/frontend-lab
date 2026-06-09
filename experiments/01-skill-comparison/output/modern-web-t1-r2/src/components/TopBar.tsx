import { SearchIcon, BellIcon, MenuIcon } from './icons';

interface TopBarProps {
  onMenuClick: () => void;
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 h-16 bg-white border-b border-navy-200 flex items-center gap-4 px-4 lg:px-6">
      <button
        onClick={onMenuClick}
        className="lg:hidden text-navy-500 hover:text-navy-700 transition-colors -ml-1 p-1"
      >
        <MenuIcon />
      </button>

      <div className="flex-1 max-w-md">
        <div className="relative">
          <SearchIcon />
          <input
            type="text"
            placeholder="고객, 딜, 연락처 검색..."
            className="w-full pl-0 pr-3 py-2 text-sm text-navy-800 placeholder-navy-400
                       border-0 border-b border-transparent bg-transparent
                       focus:outline-none focus:border-accent-500 transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button className="relative p-2 text-navy-400 hover:text-navy-600 rounded-md hover:bg-navy-50 transition-colors">
          <BellIcon />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-600 rounded-full ring-2 ring-white" />
        </button>

        <div className="hidden sm:flex items-center gap-3 ml-2 pl-4 border-l border-navy-200">
          <div className="w-8 h-8 rounded-full bg-accent-600 flex items-center justify-center text-xs font-semibold text-white">
            JD
          </div>
          <div className="hidden lg:block min-w-0">
            <p className="text-sm font-medium text-navy-800">정도윤</p>
            <p className="text-xs text-navy-400">Sales Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
}
