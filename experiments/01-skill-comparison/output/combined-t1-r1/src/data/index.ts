import type { NavItem, StatCardData, PipelineStage, Activity, Customer } from "../types";

export const navigation: NavItem[] = [
  { label: "Dashboard", icon: "squares-four", active: true },
  { label: "Contacts", icon: "users" },
  { label: "Pipeline", icon: "funnel" },
  { label: "Deals", icon: "handshake" },
  { label: "Tasks", icon: "check-square" },
  { label: "Analytics", icon: "chart-bar" },
  { label: "Settings", icon: "gear" },
];

export const stats: StatCardData[] = [
  {
    label: "Total Revenue",
    value: "$847,290",
    change: 12.5,
    changeLabel: "vs last month",
    icon: "currency-dollar",
  },
  {
    label: "New Leads",
    value: "1,284",
    change: 8.2,
    changeLabel: "vs last month",
    icon: "user-plus",
  },
  {
    label: "Conversion Rate",
    value: "24.8%",
    change: -3.1,
    changeLabel: "vs last month",
    icon: "target",
  },
  {
    label: "Active Deals",
    value: "47",
    change: 5.7,
    changeLabel: "vs last month",
    icon: "briefcase",
  },
];

export const pipeline: PipelineStage[] = [
  { name: "Lead", value: 340, color: "#94a3b8" },
  { name: "Qualified", value: 215, color: "#2563eb" },
  { name: "Proposal", value: 128, color: "#0d9488" },
  { name: "Negotiation", value: 64, color: "#d97706" },
  { name: "Closed Won", value: 47, color: "#16a34a" },
];

export const activities: Activity[] = [
  {
    id: 1,
    type: "deal",
    title: "Deal closed",
    description: "Acme Corp signed the Enterprise plan — $48,000 ARR",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    type: "lead",
    title: "New lead assigned",
    description: "Sarah Chen from Vercel — Inbound demo request",
    timestamp: "4 hours ago",
  },
  {
    id: 3,
    type: "meeting",
    title: "Meeting completed",
    description: "Discovery call with Linear — Technical evaluation next",
    timestamp: "5 hours ago",
  },
  {
    id: 4,
    type: "note",
    title: "Note added",
    description: "Jordan marked Stripe deal as high priority",
    timestamp: "6 hours ago",
  },
  {
    id: 5,
    type: "deal",
    title: "Stage changed",
    description: "Notion moved to Negotiation — $62,000 deal",
    timestamp: "Yesterday",
  },
  {
    id: 6,
    type: "meeting",
    title: "Meeting scheduled",
    description: "Demo with Figma procurement team — Thu 2PM",
    timestamp: "Yesterday",
  },
];

export const customers: Customer[] = [
  {
    id: 1,
    name: "Alex Rivera",
    company: "Acme Corp",
    email: "alex@acmecorp.com",
    stage: "Closed",
    value: 48000,
    lastContact: "Today",
    owner: "Jordan Lee",
  },
  {
    id: 2,
    name: "Sarah Chen",
    company: "Vercel",
    email: "sarah@vercel.com",
    stage: "Lead",
    value: 24000,
    lastContact: "Today",
    owner: "Mia Zhang",
  },
  {
    id: 3,
    name: "Marcus Webb",
    company: "Linear",
    email: "marcus@linear.app",
    stage: "Qualified",
    value: 36000,
    lastContact: "Yesterday",
    owner: "Jordan Lee",
  },
  {
    id: 4,
    name: "Priya Kapoor",
    company: "Notion",
    email: "priya@notion.so",
    stage: "Negotiation",
    value: 62000,
    lastContact: "2 days ago",
    owner: "Alex Kim",
  },
  {
    id: 5,
    name: "David Cho",
    company: "Figma",
    email: "david@figma.com",
    stage: "Proposal",
    value: 52000,
    lastContact: "2 days ago",
    owner: "Mia Zhang",
  },
  {
    id: 6,
    name: "Emma Wright",
    company: "Stripe",
    email: "emma@stripe.com",
    stage: "Qualified",
    value: 85000,
    lastContact: "3 days ago",
    owner: "Jordan Lee",
  },
  {
    id: 7,
    name: "Tomás Silva",
    company: "Datadog",
    email: "tomas@datadoghq.com",
    stage: "Proposal",
    value: 44000,
    lastContact: "4 days ago",
    owner: "Alex Kim",
  },
  {
    id: 8,
    name: "Lisa Park",
    company: "GitHub",
    email: "lisa@github.com",
    stage: "Lead",
    value: 30000,
    lastContact: "5 days ago",
    owner: "Mia Zhang",
  },
];

export const stageColors: Record<Customer["stage"], { bg: string; text: string }> = {
  Lead: { bg: "bg-slate-100", text: "text-slate-700" },
  Qualified: { bg: "bg-accent-light", text: "text-accent" },
  Proposal: { bg: "bg-teal-light", text: "text-teal" },
  Negotiation: { bg: "bg-amber-light", text: "text-amber" },
  Closed: { bg: "bg-emerald-100", text: "text-emerald-700" },
};
