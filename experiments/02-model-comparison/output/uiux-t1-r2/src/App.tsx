import { Sidebar } from "./components/layout/Sidebar";
import { TopBar } from "./components/layout/TopBar";
import { PageHeader } from "./components/ui/PageHeader";
import { Button } from "./components/ui/Button";
import { StatGrid } from "./components/dashboard/StatGrid";
import { PipelineChart } from "./components/dashboard/PipelineChart";
import { ActivityTimeline } from "./components/dashboard/ActivityTimeline";
import { TodoList } from "./components/dashboard/TodoList";
import { CustomerTable } from "./components/dashboard/CustomerTable";
import { Download, Filter } from "./components/ui/icons";

function App() {
  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <main className="flex-1 overflow-y-auto">
          <div className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-[1600px] mx-auto animate-fadeIn">
            <PageHeader
              title="Dashboard"
              description="Welcome back, Sarah. Here's what's happening with your sales today."
              actions={
                <>
                  <Button size="md" variant="outline" leftIcon={<Filter size={14} />}>
                    This month
                  </Button>
                  <Button size="md" variant="outline" leftIcon={<Download size={14} />}>
                    Export
                  </Button>
                </>
              }
            />

            <div className="mt-6">
              <StatGrid />
            </div>

            <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-2">
                <PipelineChart />
              </div>
              <div className="lg:col-span-1">
                <TodoList />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-2">
                <CustomerTable />
              </div>
              <div className="lg:col-span-1">
                <ActivityTimeline />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
