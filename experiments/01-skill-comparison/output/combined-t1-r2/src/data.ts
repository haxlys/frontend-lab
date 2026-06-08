import type { StatCardData, PipelineStage, Activity, Customer, Task } from './types'

export const stats: StatCardData[] = [
  { label: 'Total Revenue', value: '$847,230', change: 12.5, changeLabel: 'vs last month', icon: 'dollar' },
  { label: 'New Leads', value: '1,247', change: 8.2, changeLabel: 'vs last month', icon: 'users' },
  { label: 'Conversion Rate', value: '24.8%', change: -2.4, changeLabel: 'vs last month', icon: 'trend-up' },
  { label: 'Active Deals', value: '63', change: 18.7, changeLabel: 'vs last month', icon: 'briefcase' },
]

export const pipelineData: PipelineStage[] = [
  { name: 'Lead', value: 1420, deals: 87 },
  { name: 'Qualified', value: 980, deals: 54 },
  { name: 'Proposal', value: 620, deals: 31 },
  { name: 'Negotiation', value: 410, deals: 18 },
  { name: 'Closed Won', value: 280, deals: 14 },
]

export const activities: Activity[] = [
  { id: '1', user: 'Sarah Chen', action: 'closed a deal with', target: 'Stripe', time: '2m ago', type: 'deal' },
  { id: '2', user: 'Marcus Rivera', action: 'added a note to', target: 'Vercel', time: '18m ago', type: 'note' },
  { id: '3', user: 'Emily Park', action: 'scheduled a meeting with', target: 'Notion', time: '1h ago', type: 'meeting' },
  { id: '4', user: 'James Wilson', action: 'converted lead', target: 'Linear', time: '2h ago', type: 'lead' },
  { id: '5', user: 'Aiko Tanaka', action: 'updated pipeline for', target: 'Figma', time: '3h ago', type: 'deal' },
  { id: '6', user: 'David Kim', action: 'added a note to', target: 'Supabase', time: '4h ago', type: 'note' },
]

export const customers: Customer[] = [
  { id: '1', name: 'Alice Johnson', company: 'Stripe', email: 'alice@stripe.com', stage: 'Negotiation', value: 48000, lastContact: 'Today', owner: 'Sarah Chen' },
  { id: '2', name: 'Bob Williams', company: 'Vercel', email: 'bob@vercel.com', stage: 'Proposal', value: 32000, lastContact: 'Yesterday', owner: 'Marcus Rivera' },
  { id: '3', name: 'Carol Martinez', company: 'Notion', email: 'carol@notion.so', stage: 'Qualified', value: 18500, lastContact: '2 days ago', owner: 'Emily Park' },
  { id: '4', name: 'Dan Brown', company: 'Linear', email: 'dan@linear.app', stage: 'Lead', value: 9500, lastContact: '3 days ago', owner: 'James Wilson' },
  { id: '5', name: 'Eva Garcia', company: 'Figma', email: 'eva@figma.com', stage: 'Closed Won', value: 72000, lastContact: 'Today', owner: 'Aiko Tanaka' },
  { id: '6', name: 'Frank Lee', company: 'Supabase', email: 'frank@supabase.io', stage: 'Negotiation', value: 41000, lastContact: 'Yesterday', owner: 'David Kim' },
  { id: '7', name: 'Grace Chen', company: 'Railway', email: 'grace@railway.app', stage: 'Proposal', value: 26500, lastContact: '4 days ago', owner: 'Sarah Chen' },
  { id: '8', name: 'Henry Davis', company: 'PlanetScale', email: 'henry@planetscale.com', stage: 'Qualified', value: 15000, lastContact: '5 days ago', owner: 'Marcus Rivera' },
]

export const tasks: Task[] = [
  { id: '1', title: 'Follow up with Stripe on contract terms', due: 'Today', priority: 'high', done: false },
  { id: '2', title: 'Send proposal to Vercel team', due: 'Today', priority: 'high', done: false },
  { id: '3', title: 'Review Notion demo recording', due: 'Tomorrow', priority: 'medium', done: false },
  { id: '4', title: 'Update pipeline forecast for Q3', due: 'Tomorrow', priority: 'medium', done: true },
  { id: '5', title: 'Prepare Linear onboarding docs', due: 'Jun 12', priority: 'low', done: false },
  { id: '6', title: 'Quarterly sales review deck', due: 'Jun 14', priority: 'low', done: false },
]
