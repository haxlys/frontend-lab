import { Sidebar } from "./components/layout/Sidebar";
import { TopBar } from "./components/layout/TopBar";
import { PageHeader } from "./components/dashboard/PageHeader";
import { StatCards } from "./components/dashboard/StatCards";
import { PipelineChart } from "./components/dashboard/PipelineChart";
import { ActivityPanel } from "./components/dashboard/ActivityPanel";
import { CustomersTable } from "./components/dashboard/CustomersTable";

export default function App() {
  return (
    <div className="min-h-screen flex bg-canvas">
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <TopBar />
        <main className="flex-1 px-4 md:px-6 lg:px-8 py-6 md:py-8 max-w-[1440px] w-full mx-auto">
          <div className="space-y-6 md:space-y-7">
            <PageHeader />
            <StatCards />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
              <div className="lg:col-span-2">
                <PipelineChart />
              </div>
              <div className="lg:col-span-1">
                <ActivityPanel />
              </div>
            </div>
            <CustomersTable />
          </div>
        </main>
      </div>
    </div>
  );
}
