import type { NavItem, StatData, PipelineStage, Activity, Customer, TodoItem } from '../types'

export const navItems: NavItem[] = [
  { label: 'Dashboard', icon: 'grid', active: true },
  { label: 'Contacts', icon: 'users', badge: 24 },
  { label: 'Pipeline', icon: 'trending-up', badge: 8 },
  { label: 'Tasks', icon: 'check-square' },
  { label: 'Reports', icon: 'bar-chart-2' },
  { label: 'Settings', icon: 'settings' },
]

export const stats: StatData[] = [
  {
    title: 'Total Revenue',
    value: '$284,240',
    change: 12.5,
    changeLabel: 'vs last month',
    icon: 'dollar-sign',
    accent: 'blue',
  },
  {
    title: 'New Leads',
    value: '1,429',
    change: 8.2,
    changeLabel: 'vs last month',
    icon: 'user-plus',
    accent: 'teal',
  },
  {
    title: 'Conversion Rate',
    value: '24.8%',
    change: -2.4,
    changeLabel: 'vs last month',
    icon: 'target',
    accent: 'amber',
  },
  {
    title: 'Active Deals',
    value: '47',
    change: 18.1,
    changeLabel: 'vs last month',
    icon: 'briefcase',
    accent: 'green',
  },
]

export const pipelineStages: PipelineStage[] = [
  { name: 'Prospecting', value: 82, deals: 18, color: '#94A3B8' },
  { name: 'Qualification', value: 56, deals: 12, color: '#64748B' },
  { name: 'Proposal', value: 38, deals: 8, color: '#475569' },
  { name: 'Negotiation', value: 24, deals: 5, color: '#2563EB' },
  { name: 'Closed Won', value: 16, deals: 4, color: '#0D9488' },
]

export const activities: Activity[] = [
  {
    id: '1',
    user: 'Sarah Chen',
    avatar: 'SC',
    action: 'closed deal with',
    target: 'Acme Corp ($48,000)',
    time: '10 min ago',
  },
  {
    id: '2',
    user: 'Marcus Webb',
    avatar: 'MW',
    action: 'added note to',
    target: 'TechVentures Inc.',
    time: '28 min ago',
  },
  {
    id: '3',
    user: 'Emily Park',
    avatar: 'EP',
    action: 'moved',
    target: 'Globex to Negotiation',
    time: '1 hour ago',
  },
  {
    id: '4',
    user: 'David Kim',
    avatar: 'DK',
    action: 'scheduled call with',
    target: 'Initech',
    time: '2 hours ago',
  },
  {
    id: '5',
    user: 'Lisa Rodriguez',
    avatar: 'LR',
    action: 'created lead for',
    target: 'Umbrella Co.',
    time: '3 hours ago',
  },
]

export const todoItems: TodoItem[] = [
  { id: 't1', text: 'Follow up with Globex proposal', done: false, priority: 'high' },
  { id: 't2', text: 'Review Q2 pipeline forecast', done: false, priority: 'high' },
  { id: 't3', text: 'Send contract to Initech', done: false, priority: 'medium' },
  { id: 't4', text: 'Update CRM fields for new leads', done: true, priority: 'low' },
  { id: 't5', text: 'Prepare meeting deck for Acme', done: true, priority: 'medium' },
  { id: 't6', text: 'Review team KPIs', done: false, priority: 'low' },
]

export const customers: Customer[] = [
  { id: 'c1', name: 'Alex Johnson', email: 'alex@acmecorp.com', company: 'Acme Corp', status: 'active', lastContact: 'Today', value: 48000 },
  { id: 'c2', name: 'Maria Santos', email: 'maria@techventures.com', company: 'TechVentures Inc.', status: 'active', lastContact: 'Today', value: 32500 },
  { id: 'c3', name: 'James Wilson', email: 'jwilson@globex.co', company: 'Globex', status: 'lead', lastContact: 'Yesterday', value: 18500 },
  { id: 'c4', name: 'Sophie Lambert', email: 'sophie@initech.io', company: 'Initech', status: 'active', lastContact: 'Yesterday', value: 52000 },
  { id: 'c5', name: 'Ryan Park', email: 'ryan@umbrella.dev', company: 'Umbrella Co.', status: 'lead', lastContact: '2 days ago', value: 8800 },
  { id: 'c6', name: 'Olivia Chen', email: 'olivia@stark.io', company: 'Stark Industries', status: 'inactive', lastContact: '5 days ago', value: 64000 },
  { id: 'c7', name: 'Daniel Lee', email: 'daniel@wayne.com', company: 'Wayne Enterprises', status: 'active', lastContact: '3 days ago', value: 29500 },
]
