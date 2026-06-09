import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Dashboard from './components/Dashboard'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeNav] = useState('dashboard')

  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="hidden lg:block">
        <Sidebar activeItem={activeNav} onNavigate={() => {}} />
      </aside>

      <div className="flex flex-1 flex-col min-w-0 lg:ml-[220px]">
        <TopBar />

        <div className="lg:hidden sticky top-0 z-20 flex items-center gap-3 border-b border-slate-200 bg-white px-4 h-12">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex size-8 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2.25 4.5h13.5M2.25 9h13.5M2.25 13.5h13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <span className="text-sm font-semibold text-slate-800">CRM</span>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div className="absolute inset-0 bg-black/40" onClick={() => setMobileMenuOpen(false)} />
            <div className="relative z-10 w-56">
              <Sidebar activeItem={activeNav} onNavigate={() => setMobileMenuOpen(false)} />
            </div>
          </div>
        )}

        <Dashboard />
      </div>
    </div>
  )
}
