import { Sidebar, TopBar, StatCard, PipelineChart, ActivitySidebar, CustomerTable } from './components'

export default function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar />

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="max-w-[1440px] mx-auto space-y-4 lg:space-y-6">
            {/* Page header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-slate-800 tracking-tight">
                  Sales Dashboard
                </h1>
                <p className="text-sm text-slate-400 mt-0.5">
                  Your sales overview at a glance
                </p>
              </div>
              <button className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-accent hover:bg-accent/90 rounded-[8px] transition-colors">
                + Add Deal
              </button>
            </div>

            {/* Row 1: Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
              <StatCard
                title="Total Revenue"
                value="$324,800"
                change="12.5%"
                trend="up"
                icon="trending-up"
                accent="green"
              />
              <StatCard
                title="New Leads"
                value="48"
                change="8.2%"
                trend="up"
                icon="users"
                accent="default"
              />
              <StatCard
                title="Conversion Rate"
                value="24.8%"
                change="3.1%"
                trend="down"
                icon="trending-down"
                accent="amber"
              />
              <StatCard
                title="Active Deals"
                value="61"
                change="5.4%"
                trend="up"
                icon="pipeline"
                accent="teal"
              />
            </div>

            {/* Row 2: Pipeline + Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              <div className="lg:col-span-2">
                <PipelineChart />
              </div>
              <div className="lg:col-span-1 min-h-0">
                <ActivitySidebar />
              </div>
            </div>

            {/* Row 3: Customer table */}
            <CustomerTable />
          </div>
        </main>
      </div>
    </div>
  )
}
