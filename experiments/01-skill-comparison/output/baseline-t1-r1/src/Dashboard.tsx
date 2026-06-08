import { useState, useCallback } from "react";
import { Sidebar } from "./components/Sidebar";
import type { NavItem } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { StatCard } from "./components/StatCard";
import type { StatCardData } from "./components/StatCard";
import { BarChart } from "./components/BarChart";
import type { BarDataPoint } from "./components/BarChart";
import { ActivitySection } from "./components/ActivitySection";
import type { ActivityItem, TaskItem } from "./components/ActivitySection";
import { DataTable } from "./components/DataTable";
import type { TableColumn } from "./components/DataTable";

interface CustomerRow {
  id: string;
  name: string;
  company: string;
  stage: string;
  value: string;
  lastContact: string;
}

const navItems: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    active: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    id: "customers",
    label: "Customers",
    badge: 248,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "pipeline",
    label: "Pipeline",
    badge: 18,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    id: "settings",
    label: "Settings",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

const statCards: StatCardData[] = [
  {
    label: "Total Revenue",
    value: "$284,240",
    change: "+12.5%",
    changeType: "up",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    label: "New Leads",
    value: "342",
    change: "+8.2%",
    changeType: "up",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="23" y1="11" x2="17" y2="11" />
      </svg>
    ),
  },
  {
    label: "Conversion Rate",
    value: "18.6%",
    change: "+2.1%",
    changeType: "up",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    label: "Active Deals",
    value: "52",
    change: "-3.1%",
    changeType: "down",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
];

const pipelineData: BarDataPoint[] = [
  { label: "Prospect", value: 85, color: "#94A3B8" },
  { label: "Qualify", value: 62, color: "#60A5FA" },
  { label: "Proposal", value: 41, color: "#2563EB" },
  { label: "Negotiate", value: 28, color: "#1D4ED8" },
  { label: "Closed", value: 19, color: "#059669" },
];

const recentActivities: ActivityItem[] = [
  {
    id: "1",
    title: "Sarah Chen moved deal to Proposal",
    subtitle: "TechCorp — $24,000 annual",
    timestamp: "12m ago",
    iconBg: "#EFF6FF",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    id: "2",
    title: "New lead from website form",
    subtitle: "John Martinez · jm@example.com",
    timestamp: "1h ago",
    iconBg: "#ECFDF5",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="23" y1="11" x2="17" y2="11" />
      </svg>
    ),
  },
  {
    id: "3",
    title: "Contract signed — Acme Inc",
    subtitle: "$48,000 deal closed by Alex Kim",
    timestamp: "3h ago",
    iconBg: "#FEF2F2",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    id: "4",
    title: "Follow-up scheduled with Netflix",
    subtitle: "Demo call · Tomorrow at 2:00 PM",
    timestamp: "5h ago",
    iconBg: "#FFFBEB",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
];

const initialTasks: TaskItem[] = [
  { id: "t1", text: "Send proposal to Stripe team", done: false },
  { id: "t2", text: "Review Q2 pipeline forecast", done: false },
  { id: "t3", text: "Update contact info for Shopify", done: true },
  { id: "t4", text: "Prepare onboarding docs", done: false },
];

const customers: CustomerRow[] = [
  {
    id: "c1",
    name: "Sarah Chen",
    company: "TechCorp",
    stage: "Proposal",
    value: "$24,000",
    lastContact: "2 hours ago",
  },
  {
    id: "c2",
    name: "Marcus Webb",
    company: "Netflix",
    stage: "Qualify",
    value: "$52,000",
    lastContact: "Yesterday",
  },
  {
    id: "c3",
    name: "Elena Torres",
    company: "Shopify",
    stage: "Negotiate",
    value: "$18,500",
    lastContact: "3 days ago",
  },
  {
    id: "c4",
    name: "David Park",
    company: "Stripe",
    stage: "Prospect",
    value: "$36,000",
    lastContact: "1 week ago",
  },
  {
    id: "c5",
    name: "Julia Li",
    company: "Airbnb",
    stage: "Closed",
    value: "$48,000",
    lastContact: "5 days ago",
  },
];

const customerColumns: TableColumn<CustomerRow>[] = [
  {
    key: "name",
    header: "Name",
    render: (row) => (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-slate-100 text-navy-600 font-medium text-xs flex items-center justify-center">
          {row.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <p className="font-medium text-navy-900">{row.name}</p>
          <p className="text-xs text-slate-400">{row.company}</p>
        </div>
      </div>
    ),
  },
  {
    key: "stage",
    header: "Stage",
    render: (row) => {
      const colors: Record<string, string> = {
        Prospect: "bg-slate-100 text-slate-600",
        Qualify: "bg-accent-subtle text-accent",
        Proposal: "bg-warning-subtle text-warning",
        Negotiate: "bg-purple-50 text-purple-600",
        Closed: "bg-success-subtle text-success",
      };
      return (
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${colors[row.stage] ?? "bg-slate-100 text-slate-600"}`}
        >
          {row.stage}
        </span>
      );
    },
  },
  {
    key: "value",
    header: "Deal Value",
    render: (row) => (
      <span className="font-medium text-navy-800">{row.value}</span>
    ),
  },
  {
    key: "lastContact",
    header: "Last Contact",
    render: (row) => (
      <span className="text-slate-500">{row.lastContact}</span>
    ),
  },
];

const stageToColor: Record<string, string> = {
  Prospect: "bg-slate-100 text-slate-600 border-slate-200",
  Qualify: "bg-blue-50 text-blue-700 border-blue-200",
  Proposal: "bg-amber-50 text-amber-700 border-amber-200",
  Negotiate: "bg-purple-50 text-purple-700 border-purple-200",
  Closed: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

const customersMobile = customers;
const customerColumnsMobile: TableColumn<CustomerRow>[] = [
  {
    key: "name-mobile",
    header: "Customer",
    render: (row) => (
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-7 h-7 rounded-full bg-slate-100 text-navy-600 font-medium text-[11px] flex items-center justify-center shrink-0">
          {row.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div className="min-w-0">
          <p className="font-medium text-navy-900 text-[13px] truncate">{row.name}</p>
          <p className="text-[11px] text-slate-400 truncate">{row.company} · {row.value}</p>
        </div>
      </div>
    ),
  },
  {
    key: "stage-mobile",
    header: "Stage",
    render: (row) => (
      <span
        className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${stageToColor[row.stage] ?? ""}`}
      >
        {row.stage}
      </span>
    ),
  },
];

export function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);
  const [activeNav, setActiveNav] = useState("dashboard");

  const handleToggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }, []);

  const handleNavigate = useCallback((id: string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
  }, []);

  const currentNavItems = navItems.map((item) => ({
    ...item,
    active: item.id === activeNav,
  }));

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <Sidebar
          items={currentNavItems}
          onNavigate={handleNavigate}
          collapsed={sidebarCollapsed}
        />
      </div>

      {/* Mobile sidebar overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-navy-900/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full z-10">
            <Sidebar
              items={currentNavItems}
              onNavigate={handleNavigate}
              collapsed={false}
            />
          </div>
        </div>
      )}

      {/* Main area */}
      <div
        className="flex-1 flex flex-col min-h-screen transition-all duration-200"
        style={{ marginLeft: 0 }}
      >
        {/* Top bar — on desktop, it's fixed and offset by sidebar */}
        {/* On mobile, we use a static top bar */}
        <div className="lg:hidden">
          <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-9 h-9 flex items-center justify-center rounded-default text-navy-700 hover:bg-slate-100 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <span className="text-base font-semibold text-navy-900">FlowCRM</span>
            <div className="w-7 h-7 rounded-full bg-accent-subtle text-accent font-semibold text-xs flex items-center justify-center">
              JD
            </div>
          </header>
        </div>

        {/* Desktop top bar */}
        <div className="hidden lg:block">
          <TopBar sidebarCollapsed={sidebarCollapsed} />
        </div>

        {/* Main content */}
        <main className="flex-1 p-4 lg:p-8 lg:pt-24 lg:pl-[256px] lg:pr-8 pt-4"
              style={{ paddingLeft: undefined }}>
          {/* Collapse toggle (desktop only) */}
          <div className="hidden lg:flex items-center gap-2 mb-6">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="w-8 h-8 flex items-center justify-center rounded-default text-slate-400 hover:text-navy-700 hover:bg-slate-200 transition-colors duration-150"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="9" y1="3" x2="9" y2="21" />
              </svg>
            </button>
            <h2 className="text-lg font-semibold text-navy-900">
              {activeNav === "dashboard" ? "Dashboard" : activeNav.charAt(0).toUpperCase() + activeNav.slice(1)}
            </h2>
          </div>

          {/* Mobile page title */}
          <h2 className="text-lg font-semibold text-navy-900 mb-4 lg:hidden">
            {activeNav === "dashboard" ? "Dashboard" : activeNav.charAt(0).toUpperCase() + activeNav.slice(1)}
          </h2>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
            {statCards.map((card) => (
              <StatCard key={card.label} card={card} />
            ))}
          </div>

          {/* Pipeline + Activity Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Pipeline Chart (2/3 width on desktop) */}
            <div className="lg:col-span-2">
              <BarChart title="Sales Pipeline" data={pipelineData} />
            </div>

            {/* Activity Section (1/3 width on desktop) */}
            <div className="lg:col-span-1">
              <ActivitySection
                activities={recentActivities}
                tasks={tasks}
                onToggleTask={handleToggleTask}
              />
            </div>
          </div>

          {/* Customer Table Row */}
          <div>
            {/* Desktop table */}
            <div className="hidden md:block">
              <DataTable<CustomerRow>
                title="Recently Updated Customers"
                columns={customerColumns}
                data={customers}
              />
            </div>
            {/* Mobile table */}
            <div className="md:hidden">
              <DataTable<CustomerRow>
                title="Recently Updated"
                columns={customerColumnsMobile}
                data={customersMobile}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
