export type PipelineStage = {
  name: string;
  count: number;
  value: number;
  color: string;
};

export const pipelineData: PipelineStage[] = [
  { name: "Lead", count: 142, value: 284000, color: "#94A3B8" },
  { name: "Qualified", count: 86, value: 612000, color: "#60A5FA" },
  { name: "Proposal", count: 54, value: 894000, color: "#3B82F6" },
  { name: "Negotiation", count: 28, value: 712000, color: "#2563EB" },
  { name: "Closed Won", count: 19, value: 528000, color: "#1E40AF" },
];

export const revenueTrend = [
  { month: "Jan", value: 142 },
  { month: "Feb", value: 168 },
  { month: "Mar", value: 156 },
  { month: "Apr", value: 198 },
  { month: "May", value: 224 },
  { month: "Jun", value: 261 },
  { month: "Jul", value: 248 },
  { month: "Aug", value: 286 },
  { month: "Sep", value: 312 },
  { month: "Oct", value: 348 },
  { month: "Nov", value: 392 },
  { month: "Dec", value: 428 },
];

export type Activity = {
  id: string;
  type: "call" | "email" | "meeting" | "note";
  title: string;
  description: string;
  customer: string;
  time: string;
  user: { name: string; initials: string; color: string };
};

export const activities: Activity[] = [
  {
    id: "a1",
    type: "call",
    title: "Call with Acme Robotics",
    description: "Discussed renewal terms and expansion to EU region",
    customer: "Acme Robotics",
    time: "12 min ago",
    user: { name: "Jihoon Lee", initials: "JL", color: "#2563EB" },
  },
  {
    id: "a2",
    type: "email",
    title: "Proposal sent to Northwind Co.",
    description: "Q4 enterprise package — 240 seats, annual contract",
    customer: "Northwind Co.",
    time: "38 min ago",
    user: { name: "Mei Tanaka", initials: "MT", color: "#7C3AED" },
  },
  {
    id: "a3",
    type: "meeting",
    title: "Demo scheduled with Lumen Health",
    description: "Technical evaluation with their security and IT team",
    customer: "Lumen Health",
    time: "1 hour ago",
    user: { name: "Daniel Park", initials: "DP", color: "#0EA5E9" },
  },
  {
    id: "a4",
    type: "note",
    title: "Note added on Globex Systems",
    description: "Decision maker changed — new VP of Operations engaged",
    customer: "Globex Systems",
    time: "3 hours ago",
    user: { name: "Sara Kim", initials: "SK", color: "#10B981" },
  },
  {
    id: "a5",
    type: "call",
    title: "Follow-up with Initech",
    description: "Sent updated SOW, awaiting legal review by Friday",
    customer: "Initech",
    time: "Yesterday",
    user: { name: "Jihoon Lee", initials: "JL", color: "#2563EB" },
  },
];

export type Todo = {
  id: string;
  title: string;
  due: string;
  priority: "high" | "medium" | "low";
  done: boolean;
};

export const todos: Todo[] = [
  { id: "t1", title: "Send revised quote to Northwind", due: "Today, 4:00 PM", priority: "high", done: false },
  { id: "t2", title: "Review Globex security questionnaire", due: "Today, 6:00 PM", priority: "high", done: false },
  { id: "t3", title: "Prepare demo deck for Lumen Health", due: "Tomorrow, 10:00 AM", priority: "medium", done: false },
  { id: "t4", title: "Sync with product team on Initech feedback", due: "Tomorrow, 2:00 PM", priority: "medium", done: true },
  { id: "t5", title: "Update CRM tags for Q4 lead cohorts", due: "Wed, 11:00 AM", priority: "low", done: false },
];

export type Customer = {
  id: string;
  name: string;
  contact: string;
  email: string;
  plan: "Enterprise" | "Business" | "Starter";
  status: "Active" | "Trial" | "At risk" | "Churned";
  value: number;
  updated: string;
  initials: string;
  color: string;
};

export const customers: Customer[] = [
  { id: "c1", name: "Acme Robotics", contact: "Hanna Wei", email: "hanna.wei@acme.io", plan: "Enterprise", status: "Active", value: 84000, updated: "2 min ago", initials: "AR", color: "#2563EB" },
  { id: "c2", name: "Northwind Co.", contact: "Marcus Hale", email: "m.hale@northwind.com", plan: "Enterprise", status: "Active", value: 124000, updated: "12 min ago", initials: "NW", color: "#7C3AED" },
  { id: "c3", name: "Lumen Health", contact: "Priya Anand", email: "priya@lumenhealth.org", plan: "Business", status: "Trial", value: 0, updated: "1 hour ago", initials: "LH", color: "#0EA5E9" },
  { id: "c4", name: "Globex Systems", contact: "Tomás Rivera", email: "t.rivera@globex.systems", plan: "Business", status: "At risk", value: 36000, updated: "3 hours ago", initials: "GX", color: "#F59E0B" },
  { id: "c5", name: "Initech", contact: "Peter Gibbons", email: "peter@initech.com", plan: "Enterprise", status: "Active", value: 96000, updated: "Yesterday", initials: "IN", color: "#10B981" },
  { id: "c6", name: "Vertex Labs", contact: "Aisha Mensah", email: "aisha@vertexlabs.dev", plan: "Starter", status: "Active", value: 9800, updated: "Yesterday", initials: "VX", color: "#EC4899" },
  { id: "c7", name: "Halcyon Bank", contact: "Edward Lin", email: "e.lin@halcyon.bank", plan: "Enterprise", status: "Active", value: 218000, updated: "2 days ago", initials: "HB", color: "#1E40AF" },
];

export const navItems = [
  { label: "Dashboard", icon: "SquaresFour", active: true },
  { label: "Contacts", icon: "Users" },
  { label: "Pipeline", icon: "Funnel" },
  { label: "Deals", icon: "Briefcase" },
  { label: "Tasks", icon: "CheckSquare" },
  { label: "Reports", icon: "ChartLineUp" },
];

export const navSecondary = [
  { label: "Settings", icon: "Gear" },
  { label: "Help center", icon: "Question" },
];
