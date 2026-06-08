export type NavItem = {
  label: string;
  icon: string;
  badge?: number;
  active?: boolean;
};

export const navItems: NavItem[] = [
  { label: 'Dashboard', icon: 'Home', active: true },
  { label: 'Customers', icon: 'Users', badge: 12 },
  { label: 'Pipeline', icon: 'Pipeline' },
  { label: 'Inbox', icon: 'Inbox', badge: 3 },
  { label: 'Calendar', icon: 'Calendar' },
  { label: 'Reports', icon: 'Chart' },
];

export const navItemsSecondary: NavItem[] = [
  { label: 'Settings', icon: 'Settings' },
  { label: 'Help & Support', icon: 'Help' },
];

export type Kpi = {
  label: string;
  value: string;
  delta: number;
  deltaLabel: string;
  icon: string;
};

export const kpis: Kpi[] = [
  {
    label: 'Total Revenue',
    value: '$284,392',
    delta: 12.4,
    deltaLabel: 'vs last month',
    icon: 'Chart',
  },
  {
    label: 'New Leads',
    value: '1,284',
    delta: 8.2,
    deltaLabel: 'vs last month',
    icon: 'Users',
  },
  {
    label: 'Conversion Rate',
    value: '24.8%',
    delta: -1.6,
    deltaLabel: 'vs last month',
    icon: 'Pipeline',
  },
  {
    label: 'Deals in Progress',
    value: '146',
    delta: 5.7,
    deltaLabel: 'vs last month',
    icon: 'Inbox',
  },
];

export type Stage = { name: string; value: number; color: string };
export const pipelineStages: Stage[] = [
  { name: 'Discovery', value: 38, color: '#3B82F6' },
  { name: 'Qualified', value: 28, color: '#6366F1' },
  { name: 'Proposal', value: 19, color: '#0D9488' },
  { name: 'Negotiation', value: 12, color: '#F59E0B' },
  { name: 'Closed Won', value: 8, color: '#10B981' },
];

export type TrendPoint = { month: string; current: number; previous: number };
export const trendData: TrendPoint[] = [
  { month: 'Jan', current: 42, previous: 28 },
  { month: 'Feb', current: 51, previous: 35 },
  { month: 'Mar', current: 38, previous: 41 },
  { month: 'Apr', current: 64, previous: 47 },
  { month: 'May', current: 58, previous: 52 },
  { month: 'Jun', current: 76, previous: 58 },
  { month: 'Jul', current: 69, previous: 62 },
  { month: 'Aug', current: 88, previous: 71 },
  { month: 'Sep', current: 82, previous: 79 },
  { month: 'Oct', current: 96, previous: 85 },
];

export type Activity = {
  id: string;
  user: string;
  initials: string;
  color: string;
  action: string;
  target: string;
  time: string;
  channel: 'call' | 'mail' | 'note' | 'meeting';
};

export const activities: Activity[] = [
  {
    id: 'a1',
    user: 'Mia Chen',
    initials: 'MC',
    color: 'bg-brand-100 text-brand-700',
    action: 'called',
    target: 'Acme Corp',
    time: '12m ago',
    channel: 'call',
  },
  {
    id: 'a2',
    user: 'Daniel Park',
    initials: 'DP',
    color: 'bg-teal-50 text-teal-600',
    action: 'sent proposal to',
    target: 'Globex Inc.',
    time: '38m ago',
    channel: 'mail',
  },
  {
    id: 'a3',
    user: 'Sara Lee',
    initials: 'SL',
    color: 'bg-amber-50 text-amber-600',
    action: 'scheduled meeting with',
    target: 'Initech',
    time: '1h ago',
    channel: 'meeting',
  },
  {
    id: 'a4',
    user: 'Omar Reyes',
    initials: 'OR',
    color: 'bg-violet-50 text-violet-600',
    action: 'noted on',
    target: 'Umbrella Co.',
    time: '2h ago',
    channel: 'note',
  },
  {
    id: 'a5',
    user: 'Jin Park',
    initials: 'JP',
    color: 'bg-pink-50 text-pink-600',
    action: 'closed deal with',
    target: 'Stark Industries',
    time: '4h ago',
    channel: 'mail',
  },
  {
    id: 'a6',
    user: 'Ava Kim',
    initials: 'AK',
    color: 'bg-emerald-50 text-emerald-600',
    action: 'qualified lead',
    target: 'Wayne Enterprises',
    time: 'Yesterday',
    channel: 'note',
  },
];

export type Todo = { id: string; title: string; due: string; priority: 'high' | 'med' | 'low'; done: boolean };
export const todos: Todo[] = [
  { id: 't1', title: 'Follow up with Acme Corp', due: 'Today, 2:00 PM', priority: 'high', done: false },
  { id: 't2', title: 'Send revised quote to Globex', due: 'Today, 4:30 PM', priority: 'high', done: false },
  { id: 't3', title: 'Prepare Q3 forecast deck', due: 'Tomorrow', priority: 'med', done: false },
  { id: 't4', title: 'Review demo recording with Initech', due: 'Wed', priority: 'med', done: true },
  { id: 't5', title: 'Update CRM tags & segments', due: 'Fri', priority: 'low', done: false },
];

export type Customer = {
  id: string;
  name: string;
  contact: string;
  email: string;
  company: string;
  status: 'Active' | 'Pending' | 'At Risk' | 'New';
  value: string;
  owner: string;
  ownerInitials: string;
  ownerColor: string;
  updated: string;
};

export const customers: Customer[] = [
  {
    id: 'c1',
    name: 'Liam Walker',
    contact: 'CTO',
    email: 'liam@acme.io',
    company: 'Acme Corp',
    status: 'Active',
    value: '$48,200',
    owner: 'Mia Chen',
    ownerInitials: 'MC',
    ownerColor: 'bg-brand-100 text-brand-700',
    updated: '2 min ago',
  },
  {
    id: 'c2',
    name: 'Sophia Rivera',
    contact: 'VP Sales',
    email: 'sophia@globex.com',
    company: 'Globex Inc.',
    status: 'Pending',
    value: '$124,500',
    owner: 'Daniel Park',
    ownerInitials: 'DP',
    ownerColor: 'bg-teal-50 text-teal-600',
    updated: '1 hour ago',
  },
  {
    id: 'c3',
    name: 'Noah Bennett',
    contact: 'Procurement',
    email: 'noah@initech.co',
    company: 'Initech',
    status: 'At Risk',
    value: '$18,900',
    owner: 'Sara Lee',
    ownerInitials: 'SL',
    ownerColor: 'bg-amber-50 text-amber-600',
    updated: '3 hours ago',
  },
  {
    id: 'c4',
    name: 'Emma Tanaka',
    contact: 'Founder',
    email: 'emma@umbrella.dev',
    company: 'Umbrella Co.',
    status: 'New',
    value: '$7,250',
    owner: 'Omar Reyes',
    ownerInitials: 'OR',
    ownerColor: 'bg-violet-50 text-violet-600',
    updated: '5 hours ago',
  },
  {
    id: 'c5',
    name: 'Lucas Müller',
    contact: 'COO',
    email: 'lucas@stark.com',
    company: 'Stark Industries',
    status: 'Active',
    value: '$312,000',
    owner: 'Jin Park',
    ownerInitials: 'JP',
    ownerColor: 'bg-pink-50 text-pink-600',
    updated: 'Yesterday',
  },
  {
    id: 'c6',
    name: 'Olivia Brooks',
    contact: 'Director',
    email: 'olivia@wayne.co',
    company: 'Wayne Enterprises',
    status: 'Active',
    value: '$86,400',
    owner: 'Ava Kim',
    ownerInitials: 'AK',
    ownerColor: 'bg-emerald-50 text-emerald-600',
    updated: 'Yesterday',
  },
  {
    id: 'c7',
    name: 'Ethan Nakamura',
    contact: 'Head of Ops',
    email: 'ethan@soylent.io',
    company: 'Soylent Labs',
    status: 'Pending',
    value: '$22,800',
    owner: 'Mia Chen',
    ownerInitials: 'MC',
    ownerColor: 'bg-brand-100 text-brand-700',
    updated: '2 days ago',
  },
];
