import StatCards from './components/StatCards'
import RecentActivity from './components/RecentActivity'
import MonthlyChart from './components/MonthlyChart'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <header className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[8px] bg-primary-500 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </div>
            <span className="text-[20px] font-semibold text-[#1e293b]">Dash</span>
          </div>
          <div className="w-9 h-9 rounded-pill bg-slate-100 flex items-center justify-center text-[14px] font-semibold text-[#64748b]">
            AD
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <StatCards />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
          <MonthlyChart />
          <RecentActivity />
        </div>
      </main>
    </div>
  )
}
