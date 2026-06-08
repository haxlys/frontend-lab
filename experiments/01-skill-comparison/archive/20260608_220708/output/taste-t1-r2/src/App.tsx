import StatsGrid from './components/StatsGrid'
import RecentActivity from './components/RecentActivity'
import BarChart from './components/BarChart'

export default function App() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <header className="mb-6 lg:mb-8">
        <h1 className="text-xl font-bold tracking-tight sm:text-2xl">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-400">Overview of your SaaS metrics and activity.</p>
      </header>

      <div className="space-y-6">
        <StatsGrid />
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <BarChart />
          </div>
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  )
}
