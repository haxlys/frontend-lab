import { CurrencyDollar, UserPlus, TrendUp, Briefcase } from "@phosphor-icons/react";
import { AppShell } from "./components/layout/AppShell";
import { PageHeader } from "./components/dashboard/PageHeader";
import { StatCard } from "./components/dashboard/StatCard";
import { PipelineChart } from "./components/dashboard/PipelineChart";
import { ActivityPanel } from "./components/dashboard/ActivityPanel";
import { CustomerTable } from "./components/dashboard/CustomerTable";
import { revenueTrend } from "./data/mock";
import { formatCurrency, formatNumber } from "./lib/utils";

const sparklines = {
  revenue: revenueTrend.map((d) => d.value),
  leads: [42, 56, 48, 64, 72, 68, 84, 92, 88, 104, 112, 124],
  conversion: [3.1, 3.4, 3.2, 3.8, 4.0, 3.9, 4.2, 4.4, 4.1, 4.6, 4.8, 5.1],
  deals: [12, 14, 11, 16, 18, 15, 19, 22, 20, 24, 26, 28],
};

export default function App() {
  return (
    <AppShell>
      <PageHeader />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-5">
        <StatCard
          label="Total revenue"
          value={formatCurrency(2_840_000)}
          delta={18.4}
          icon={<CurrencyDollar size={16} weight="regular" />}
          iconColor="#2563EB"
          sparkline={sparklines.revenue}
        />
        <StatCard
          label="New leads"
          value={formatNumber(1248)}
          delta={12.2}
          icon={<UserPlus size={16} weight="regular" />}
          iconColor="#10B981"
          sparkline={sparklines.leads}
        />
        <StatCard
          label="Conversion rate"
          value="5.1%"
          delta={2.6}
          icon={<TrendUp size={16} weight="regular" />}
          iconColor="#8B5CF6"
          sparkline={sparklines.conversion}
        />
        <StatCard
          label="Deals in progress"
          value={formatNumber(28)}
          delta={-3.1}
          icon={<Briefcase size={16} weight="regular" />}
          iconColor="#F59E0B"
          sparkline={sparklines.deals}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-5">
        <div className="lg:col-span-2">
          <PipelineChart />
        </div>
        <div className="lg:col-span-1">
          <ActivityPanel />
        </div>
      </div>

      <CustomerTable />
    </AppShell>
  );
}
