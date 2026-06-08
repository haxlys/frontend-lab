export type NavItem = {
  label: string;
  icon: string;
  badge?: number;
};

export type StatCard = {
  id: string;
  label: string;
  value: string;
  delta: number;
  deltaLabel: string;
  icon: string;
};

export type PipelineStage = {
  stage: string;
  value: number;
  count: number;
  color: string;
};

export type Activity = {
  id: string;
  type: "call" | "email" | "meeting" | "note" | "deal";
  user: string;
  userInitials: string;
  userColor: string;
  target: string;
  description: string;
  time: string;
};

export type Todo = {
  id: string;
  title: string;
  due: string;
  priority: "high" | "medium" | "low";
  done: boolean;
};

export type Customer = {
  id: string;
  name: string;
  contact: string;
  email: string;
  status: "Active" | "Pending" | "At Risk" | "New";
  value: number;
  updated: string;
  avatar: string;
};

export const navItems: NavItem[] = [
  { label: "Dashboard", icon: "LayoutDashboard" },
  { label: "Customers", icon: "Users", badge: 12 },
  { label: "Pipeline", icon: "GitBranch" },
  { label: "Deals", icon: "Briefcase", badge: 3 },
  { label: "Tasks", icon: "CheckSquare" },
  { label: "Reports", icon: "BarChart3" },
];

export const navSecondary: NavItem[] = [
  { label: "Integrations", icon: "Plug" },
  { label: "Settings", icon: "Settings" },
  { label: "Help & Docs", icon: "LifeBuoy" },
];

export const stats: StatCard[] = [
  {
    id: "revenue",
    label: "Total Revenue",
    value: "$284,930",
    delta: 12.4,
    deltaLabel: "vs last month",
    icon: "DollarSign",
  },
  {
    id: "leads",
    label: "New Leads",
    value: "1,284",
    delta: 8.2,
    deltaLabel: "vs last month",
    icon: "UserPlus",
  },
  {
    id: "conversion",
    label: "Conversion Rate",
    value: "24.6%",
    delta: -2.1,
    deltaLabel: "vs last month",
    icon: "TrendingUp",
  },
  {
    id: "deals",
    label: "Deals in Progress",
    value: "47",
    delta: 5.3,
    deltaLabel: "vs last month",
    icon: "Briefcase",
  },
];

export const pipelineTrend = [
  { month: "Jan", value: 42, count: 18 },
  { month: "Feb", value: 58, count: 22 },
  { month: "Mar", value: 51, count: 20 },
  { month: "Apr", value: 73, count: 28 },
  { month: "May", value: 65, count: 24 },
  { month: "Jun", value: 88, count: 32 },
  { month: "Jul", value: 79, count: 30 },
  { month: "Aug", value: 94, count: 35 },
  { month: "Sep", value: 82, count: 31 },
  { month: "Oct", value: 105, count: 38 },
  { month: "Nov", value: 98, count: 36 },
  { month: "Dec", value: 116, count: 42 },
];

export const pipelineStages: PipelineStage[] = [
  { stage: "Leads", value: 48, count: 142, color: "#94a3b8" },
  { stage: "Qualified", value: 72, count: 86, color: "#60a5fa" },
  { stage: "Proposal", value: 56, count: 41, color: "#2563eb" },
  { stage: "Negotiation", value: 38, count: 22, color: "#0ea5e9" },
  { stage: "Won", value: 64, count: 18, color: "#10b981" },
];

export const activities: Activity[] = [
  {
    id: "1",
    type: "deal",
    user: "Sarah K.",
    userInitials: "SK",
    userColor: "bg-blue-100 text-blue-700",
    target: "Acme Corp",
    description: "moved deal to Negotiation · $48,200",
    time: "2m ago",
  },
  {
    id: "2",
    type: "email",
    user: "Mike R.",
    userInitials: "MR",
    userColor: "bg-emerald-100 text-emerald-700",
    target: "Globex Inc.",
    description: "replied to proposal email",
    time: "18m ago",
  },
  {
    id: "3",
    type: "call",
    user: "Jane L.",
    userInitials: "JL",
    userColor: "bg-violet-100 text-violet-700",
    target: "Initech",
    description: "scheduled discovery call",
    time: "1h ago",
  },
  {
    id: "4",
    type: "meeting",
    user: "Tom P.",
    userInitials: "TP",
    userColor: "bg-amber-100 text-amber-700",
    target: "Hooli",
    description: "booked demo for Friday 3:00 PM",
    time: "3h ago",
  },
  {
    id: "5",
    type: "note",
    user: "Sarah K.",
    userInitials: "SK",
    userColor: "bg-blue-100 text-blue-700",
    target: "Pied Piper",
    description: "added note: budget confirmed",
    time: "5h ago",
  },
  {
    id: "6",
    type: "deal",
    user: "Mike R.",
    userInitials: "MR",
    userColor: "bg-emerald-100 text-emerald-700",
    target: "Stark Industries",
    description: "closed deal · $124,000",
    time: "Yesterday",
  },
];

export const todos: Todo[] = [
  {
    id: "1",
    title: "Follow up with Acme Corp on contract terms",
    due: "Today · 2:00 PM",
    priority: "high",
    done: false,
  },
  {
    id: "2",
    title: "Prepare Q3 pipeline forecast deck",
    due: "Today · 5:00 PM",
    priority: "high",
    done: false,
  },
  {
    id: "3",
    title: "Review Globex proposal draft",
    due: "Tomorrow · 10:00 AM",
    priority: "medium",
    done: false,
  },
  {
    id: "4",
    title: "Sync with Mike on lead scoring rules",
    due: "Tomorrow · 3:30 PM",
    priority: "medium",
    done: true,
  },
  {
    id: "5",
    title: "Send onboarding email to new customers",
    due: "Thu · 9:00 AM",
    priority: "low",
    done: false,
  },
];

export const customers: Customer[] = [
  {
    id: "1",
    name: "Acme Corporation",
    contact: "Sarah Kim",
    email: "sarah@acme.com",
    status: "Active",
    value: 48200,
    updated: "2 min ago",
    avatar: "SK",
  },
  {
    id: "2",
    name: "Globex Industries",
    contact: "Mike Ross",
    email: "mike@globex.io",
    status: "Pending",
    value: 28400,
    updated: "18 min ago",
    avatar: "MR",
  },
  {
    id: "3",
    name: "Initech LLC",
    contact: "Jane Lawson",
    email: "jane@initech.co",
    status: "Active",
    value: 72100,
    updated: "1 hour ago",
    avatar: "JL",
  },
  {
    id: "4",
    name: "Hooli Group",
    contact: "Tom Park",
    email: "tom@hooli.com",
    status: "At Risk",
    value: 19500,
    updated: "3 hours ago",
    avatar: "TP",
  },
  {
    id: "5",
    name: "Pied Piper",
    contact: "Richard Hendricks",
    email: "richard@piedpiper.com",
    status: "Active",
    value: 96300,
    updated: "5 hours ago",
    avatar: "RH",
  },
  {
    id: "6",
    name: "Stark Industries",
    contact: "Pepper Potts",
    email: "pepper@stark.io",
    status: "New",
    value: 124000,
    updated: "Yesterday",
    avatar: "PP",
  },
  {
    id: "7",
    name: "Wonka Industries",
    contact: "Willy Wonka",
    email: "willy@wonka.co",
    status: "Active",
    value: 35200,
    updated: "2 days ago",
    avatar: "WW",
  },
];
