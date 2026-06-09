import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import StatCard from "./components/StatCard";
import PipelineChart from "./components/PipelineChart";
import ActivityTimeline from "./components/ActivityTimeline";
import CustomersTable from "./components/CustomersTable";

const statIcons = {
  revenue: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  leads: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <polyline points="17 11 19 13 23 9" />
    </svg>
  ),
  conversion: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  deals: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12.01" />
    </svg>
  ),
};

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />

      <div className="flex flex-1 flex-col xl:ml-[232px]">
        <TopBar />

        <main className="flex-1 overflow-auto">
          <div className="mx-auto max-w-[1400px] space-y-6 p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                title="Total Revenue"
                value="$124,700"
                change="+12.5% vs last month"
                changeType="positive"
                icon={statIcons.revenue}
              />
              <StatCard
                title="New Leads"
                value="142"
                change="+8.2% vs last month"
                changeType="positive"
                icon={statIcons.leads}
              />
              <StatCard
                title="Conversion Rate"
                value="24.8%"
                change="-2.1% vs last month"
                changeType="negative"
                icon={statIcons.conversion}
              />
              <StatCard
                title="Active Deals"
                value="38"
                change="Same as last month"
                changeType="neutral"
                icon={statIcons.deals}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <PipelineChart />
              </div>
              <div>
                <ActivityTimeline />
              </div>
            </div>

            <div>
              <CustomersTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
