import { StatsOverview } from './components/StatsOverview'
import { ActivityList } from './components/ActivityList'
import { BarChart } from './components/BarChart'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Dashboard</h1>
          <div className="flex items-center gap-4">
            <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Overview</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Analytics</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Reports</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Settings</a>
            </nav>
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-semibold">
              AD
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <StatsOverview />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <BarChart />
          </div>
          <div>
            <ActivityList />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
