import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import StatCards from './components/StatCards'
import PipelineChart from './components/PipelineChart'
import RightPanel from './components/RightPanel'
import CustomerTable from './components/CustomerTable'
import { stats, pipeline, activities, todos, customers } from './data/mock'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <div className="lg:pl-60 transition-[padding] duration-200">
        <TopBar />

        <main className="p-4 lg:p-6 space-y-5 max-w-[1400px] mx-auto">
          <div>
            <h1 className="text-xl font-semibold text-slate-800 hidden lg:block">Dashboard</h1>
            <p className="text-sm text-slate-400 hidden lg:block mt-0.5">Welcome back, Jane. Here&apos;s your CRM overview.</p>
          </div>

          <StatCards stats={stats} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2">
              <PipelineChart pipeline={pipeline} />
            </div>
            <div>
              <RightPanel activities={activities} todos={todos} />
            </div>
          </div>

          <CustomerTable customers={customers} />
        </main>
      </div>
    </div>
  )
}
