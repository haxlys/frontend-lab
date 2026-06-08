import { useState } from 'react';
import { Icon } from '@/components/Icon';
import { navItems, navItemsSecondary } from '@/data';
import { cn } from '@/lib/cn';

type Props = {
  mobileOpen: boolean;
  onMobileClose: () => void;
};

export function Sidebar({ mobileOpen, onMobileClose }: Props) {
  const [active, setActive] = useState('Dashboard');

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-ink-900/40 lg:hidden"
          onClick={onMobileClose}
          aria-hidden
        />
      )}

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-64 bg-ink-900 text-ink-200 flex flex-col transition-transform duration-200 ease-out lg:translate-x-0 lg:static lg:z-auto',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="h-16 flex items-center justify-between px-5 border-b border-white/5">
          <div className="flex items-center gap-2.5">
            <Icon.Logo size={22} />
            <span className="text-[15px] font-semibold tracking-tight text-white">
              Pulse
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-ink-400 bg-white/5 rounded-sm px-1.5 py-0.5">
              v2.4
            </span>
          </div>
          <button
            onClick={onMobileClose}
            className="lg:hidden text-ink-400 hover:text-white p-1 -mr-1"
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-3 py-4">
          <div className="px-2 mb-2 text-2xs font-semibold uppercase tracking-wider text-ink-500">
            Workspace
          </div>
          <nav className="space-y-0.5">
            {navItems.map((item) => {
              const IconComp = Icon[item.icon];
              const isActive = active === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    setActive(item.label);
                    onMobileClose();
                  }}
                  className={cn(
                    'group w-full flex items-center gap-2.5 px-2.5 h-9 rounded-sm text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-white/[0.06] text-white'
                      : 'text-ink-400 hover:text-white hover:bg-white/[0.04]',
                  )}
                >
                  <IconComp size={16} className={cn(isActive ? 'text-brand-500' : 'text-ink-400 group-hover:text-ink-200')} />
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge !== undefined && (
                    <span
                      className={cn(
                        'text-[10px] font-semibold rounded-sm px-1.5 h-5 inline-flex items-center',
                        isActive ? 'bg-brand-500/20 text-brand-500' : 'bg-white/5 text-ink-400',
                      )}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="px-3 py-2 mt-auto border-t border-white/5">
          <div className="px-2 mb-2 text-2xs font-semibold uppercase tracking-wider text-ink-500">
            Account
          </div>
          <nav className="space-y-0.5">
            {navItemsSecondary.map((item) => {
              const IconComp = Icon[item.icon];
              return (
                <button
                  key={item.label}
                  className="group w-full flex items-center gap-2.5 px-2.5 h-9 rounded-sm text-sm font-medium text-ink-400 hover:text-white hover:bg-white/[0.04] transition-colors"
                >
                  <IconComp size={16} />
                  <span className="flex-1 text-left">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-3 m-3 rounded-md bg-white/[0.03] border border-white/5">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-xs font-semibold">
              EM
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-white truncate">Eleanor M.</div>
              <div className="text-2xs text-ink-400 truncate">eleanor@pulse.io</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
