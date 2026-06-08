import { useState, useEffect, useCallback } from 'react'
import { List } from '@phosphor-icons/react/dist/ssr'
import { Sidebar } from './components/Sidebar'
import { TopBar } from './components/TopBar'
import Dashboard from './Dashboard'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const closeSidebar = useCallback(() => setSidebarOpen(false), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeSidebar() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [closeSidebar])

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="hidden xl:block">
        <Sidebar />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm" onClick={closeSidebar} />
          <Sidebar />
        </div>
      )}

      <div className="xl:pl-[220px]">
        <TopBar>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 xl:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <List className="h-[18px] w-[18px]" />
          </button>
        </TopBar>
        <main className="p-4 sm:p-6">
          <Dashboard />
        </main>
      </div>
    </div>
  )
}
