import { type FC } from 'react';
import Icon from './Icon';

interface TopBarProps {
  onMenuClick: () => void;
}

const TopBar: FC<TopBarProps> = ({ onMenuClick }) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-6 flex-shrink-0">
      <div className="flex items-center gap-3">
        <button
          className="p-2 rounded-md hover:bg-slate-100 transition-colors lg:hidden"
          onClick={onMenuClick}
        >
          <Icon name="Menu" className="text-slate-600" />
        </button>

        <div className="relative hidden sm:block">
          <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="고객사, 연락처 검색..."
            className="w-72 h-9 pl-9 pr-3 rounded-md border border-slate-200 bg-slate-50 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="relative p-2 rounded-md hover:bg-slate-100 transition-colors">
          <Icon name="Bell" className="text-slate-500 w-[18px] h-[18px]" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-slate-200 ml-1">
          <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center text-xs font-semibold text-white">
            JB
          </div>
          <Icon name="ChevronDown" className="text-slate-400 w-3.5 h-3.5" />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
