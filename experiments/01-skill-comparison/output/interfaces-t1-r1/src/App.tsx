import { Card, CardHeader, CardTitle } from "./components/ui/Card";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { StatCard } from "./components/dashboard/StatCard";
import { PipelineChart } from "./components/dashboard/PipelineChart";
import { ActivityTimeline } from "./components/dashboard/ActivityTimeline";
import { CustomerTable } from "./components/dashboard/CustomerTable";
import {
  DollarSign,
  Users,
  TrendingUp,
  Briefcase,
} from "lucide-react";

export default function App() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-navy-900 md:text-2xl">
              Dashboard
            </h1>
            <p className="mt-0.5 text-[13px] text-navy-500">
              Overview of your sales pipeline & recent activity.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden text-[12px] text-navy-400 sm:inline">
              Last updated: just now
            </span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Revenue"
            value="$128,430"
            change={12.5}
            changeLabel="vs last month"
            icon={DollarSign}
          />
          <StatCard
            title="New Leads"
            value="84"
            change={8.2}
            changeLabel="vs last month"
            icon={Users}
          />
          <StatCard
            title="Conversion Rate"
            value="24.6%"
            change={-2.4}
            changeLabel="vs last month"
            icon={TrendingUp}
          />
          <StatCard
            title="Active Deals"
            value="76"
            change={5.1}
            changeLabel="vs last month"
            icon={Briefcase}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="min-h-[320px]">
              <CardHeader>
                <CardTitle>Pipeline Progress</CardTitle>
                <span className="text-[12px] text-navy-400">This quarter</span>
              </CardHeader>
              <PipelineChart />
            </Card>
          </div>
          <div>
            <Card className="min-h-[320px]">
              <CardHeader>
                <CardTitle>Activity & Tasks</CardTitle>
              </CardHeader>
              <ActivityTimeline />
            </Card>
          </div>
        </div>

        <Card padding="none">
          <div className="border-b border-navy-200 px-5 py-4">
            <div className="flex items-center justify-between">
              <CardTitle>Recent Customers</CardTitle>
              <button className="text-[13px] font-medium text-accent-600 transition-colors hover:text-accent-500">
                View all
              </button>
            </div>
          </div>
          <div className="px-5 py-2">
            <CustomerTable />
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
