import { DashboardLayout } from "./components/DashboardLayout";
import { StatCards } from "./components/StatCards";
import { PipelineChart } from "./components/PipelineChart";
import { ActivityTimeline } from "./components/ActivityTimeline";
import { CustomersTable } from "./components/CustomersTable";

function App() {
  return (
    <DashboardLayout>
      <StatCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PipelineChart />
        </div>
        <div className="lg:col-span-1">
          <ActivityTimeline />
        </div>
      </div>

      <CustomersTable />
    </DashboardLayout>
  );
}

export default App;
