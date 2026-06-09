import { useState } from 'react'
import { cn } from '../utils'

interface SidebarProps {
  activeItem: string
  onNavigate: (item: string) => void
}

const navItems = [
  { id: 'dashboard', label: '대시보드', icon: DashboardIcon },
  { id: 'customers', label: '고객 관리', icon: CustomersIcon },
  { id: 'pipeline', label: '파이프라인', icon: PipelineIcon },
  { id: 'deals', label: '딜 관리', icon: DealsIcon },
  { id: 'tasks', label: '할 일', icon: TasksIcon },
  { id: 'reports', label: '리포트', icon: ReportsIcon },
  { id: 'settings', label: '설정', icon: SettingsIcon },
]

export default function Sidebar({ activeItem, onNavigate }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      <div className={cn(
        'fixed inset-y-0 left-0 z-40 flex flex-col bg-navy-900 text-white transition-all duration-200',
        collapsed ? 'w-[68px]' : 'w-[220px]'
      )}>
        <div className="flex h-14 items-center justify-between px-4 border-b border-white/10">
          {!collapsed && <span className="text-sm font-semibold tracking-tight">CRM</span>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto flex size-8 items-center justify-center rounded-md text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 4h10M3 8h10M3 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                'flex w-full items-center gap-3 rounded-md px-3 py-2.5 mb-0.5 text-sm transition-colors',
                activeItem === item.id
                  ? 'bg-white/10 text-white font-medium'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              )}
            >
              <item.icon active={activeItem === item.id} />
              {!collapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="border-t border-white/10 px-3 py-3">
          <div className={cn('flex items-center gap-3', collapsed && 'justify-center')}>
            <div className="flex size-8 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold">
              AD
            </div>
            {!collapsed && (
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium truncate">Admin User</p>
                <p className="text-xs text-slate-400 truncate">admin@crm.com</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={cn('transition-all duration-200', collapsed ? 'ml-[68px]' : 'ml-[220px]')} />
    </>
  )
}

function DashboardIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="1" width="6.5" height="6.5" rx="1.5" stroke={active ? '#fff' : '#94A3B8'} strokeWidth="1.5"/>
      <rect x="10.5" y="1" width="6.5" height="6.5" rx="1.5" stroke={active ? '#fff' : '#94A3B8'} strokeWidth="1.5"/>
      <rect x="1" y="10.5" width="6.5" height="6.5" rx="1.5" stroke={active ? '#fff' : '#94A3B8'} strokeWidth="1.5"/>
      <rect x="10.5" y="10.5" width="6.5" height="6.5" rx="1.5" stroke={active ? '#fff' : '#94A3B8'} strokeWidth="1.5"/>
    </svg>
  )
}

function CustomersIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="7" cy="5" r="2.5" stroke={active ? '#fff' : '#94A3B8'} strokeWidth="1.5"/>
      <path d="M1.5 15c0-2.485 2.015-4.5 4.5-4.5h2c2.485 0 4.5 2.015 4.5 4.5" stroke={active ? '#fff' : '#94A3B8'} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="14" cy="6" r="2" stroke={active ? '#fff' : '#94A3B8'} strokeWidth="1.5"/>
      <path d="M16.5 14c0-1.933-1.567-3.5-3.5-3.5" stroke={active ? '#fff' : '#94A3B8'} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function PipelineIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1.5" y="4" width="3.5" height="10" rx="1" stroke={active ? '#fff' : '#94A3B8'} strokeWidth="1.5"/>
      <rect x="7.25" y="2" width="3.5" height="12" rx="1" stroke={active ? '#fff' : '#94A3B8'} strokeWidth="1.5"/>
      <rect x="13" y="6.5" width="3.5" height="7.5" rx="1" stroke={active ? '#fff' : '#94A3B8'} strokeWidth="1.5"/>
    </svg>
  )
}

function DealsIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M1.5 4.5h15v9a2 2 0 01-2 2h-11a2 2 0 01-2-2v-9z" stroke={active ? '#fff' : '#94A3B8'} strokeWidth="1.5"/>
      <path d="M1.5 3a1.5 1.5 0 011.5-1.5h12a1.5 1.5 0 011.5 1.5v1.5h-15V3z" stroke={active ? '#fff' : '#94A3B8'} strokeWidth="1.5"/>
      <path d="M9 8v5M6.5 10h5" stroke={active ? '#fff' : '#94A3B8'} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function TasksIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2.5" y="1.5" width="13" height="15" rx="2" stroke={active ? '#fff' : '#94A3B8'} strokeWidth="1.5"/>
      <path d="M5.5 5.5h7M5.5 9h7M5.5 12.5h4" stroke={active ? '#fff' : '#94A3B8'} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function ReportsIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2 14.5V3.5a1 1 0 011-1h12a1 1 0 011 1v11" stroke={active ? '#fff' : '#94A3B8'} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5.5 11.5V9M9 11.5V6M12.5 11.5V4" stroke={active ? '#fff' : '#94A3B8'} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function SettingsIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="3" stroke={active ? '#fff' : '#94A3B8'} strokeWidth="1.5"/>
      <path d="M9 1.5v2M9 14.5v2M1.5 9h2M14.5 9h2M3.7 3.7l1.4 1.4M12.9 12.9l1.4 1.4M3.7 14.3l1.4-1.4M12.9 5.1l1.4-1.4" stroke={active ? '#fff' : '#94A3B8'} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
