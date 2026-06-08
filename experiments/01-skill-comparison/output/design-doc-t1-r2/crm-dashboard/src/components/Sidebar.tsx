import { type FC, useState } from 'react';
import Icon from './Icon';
import { navItems } from '../data/dashboard';

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ mobileOpen, onClose }) => {
  const [items] = useState(navItems);

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-30 h-full w-60 bg-navy text-white flex flex-col transition-transform duration-300 lg:translate-x-0 lg:static lg:z-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center gap-2.5 px-5 h-16 border-b border-navy-700 flex-shrink-0">
          <div className="w-7 h-7 rounded-md bg-blue-500 flex items-center justify-center">
            <span className="text-xs font-bold text-white">C</span>
          </div>
          <span className="text-base font-semibold tracking-tight">CRM Flow</span>
          <button
            className="ml-auto p-1 rounded-md hover:bg-navy-700 transition-colors lg:hidden"
            onClick={onClose}
          >
            <Icon name="X" className="w-[18px] h-[18px]" />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                    item.active
                      ? 'bg-blue-500/15 text-blue-400'
                      : 'text-slate-300 hover:bg-navy-700 hover:text-white'
                  }`}
                >
                  <Icon name={item.icon} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-5 py-4 border-t border-navy-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-navy-700 flex items-center justify-center text-xs font-semibold text-slate-300">
              JB
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">장비비</p>
              <p className="text-xs text-slate-400 truncate">Admin</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
