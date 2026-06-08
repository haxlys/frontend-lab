import { Sidebar } from "./components/layout/Sidebar";
import { TopBar } from "./components/layout/TopBar";
import { StatCards } from "./components/dashboard/StatCards";
import { PipelineChart } from "./components/dashboard/PipelineChart";
import { ActivityTimeline } from "./components/dashboard/ActivityTimeline";
import { CustomerTable } from "./components/dashboard/CustomerTable";

export default function App() {
  return (
    <div className="flex min-h-screen bg-ink-50">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />
        <main className="flex-1 overflow-x-hidden">
          <div className="mx-auto max-w-[1400px] space-y-6 px-4 py-6 sm:px-6 lg:px-8">
            {/* Page header */}
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold tracking-tight text-ink-900 sm:text-2xl">
                안녕하세요, Sarah님 👋
              </h1>
              <p className="text-sm text-ink-500">
                오늘의 파이프라인과 진행 상황을 한눈에 확인하세요.
              </p>
            </div>

            {/* Row 1: KPI cards */}
            <StatCards />

            {/* Row 2: Chart + Timeline */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <PipelineChart />
              </div>
              <div className="lg:col-span-1">
                <ActivityTimeline />
              </div>
            </div>

            {/* Row 3: Customer table */}
            <CustomerTable />
          </div>
        </main>
      </div>
    </div>
  );
}
