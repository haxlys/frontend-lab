import type { StatCard, PipelineStage, Activity, Todo, Customer } from './types'

export const stats: StatCard[] = [
  { label: 'Total Revenue', value: '$428,591', change: '+12.3%', changeType: 'up', icon: '💵' },
  { label: 'New Leads', value: '142', change: '+8.1%', changeType: 'up', icon: '👤' },
  { label: 'Conversion Rate', value: '24.5%', change: '-2.4%', changeType: 'down', icon: '📈' },
  { label: 'Active Deals', value: '38', change: '+5.7%', changeType: 'up', icon: '🤝' },
]

export const pipeline: PipelineStage[] = [
  { name: 'Lead', deals: 24, value: 120000 },
  { name: 'Contacted', deals: 18, value: 95000 },
  { name: 'Proposal', deals: 12, value: 180000 },
  { name: 'Negotiation', deals: 8, value: 210000 },
  { name: 'Closed Won', deals: 15, value: 340000 },
]

export const activities: Activity[] = [
  { id: 1, user: 'Alex Kim', avatar: 'AK', action: 'added a note to', target: 'Acme Corp', time: '10m ago' },
  { id: 2, user: 'Sarah Chen', avatar: 'SC', action: 'moved deal to Negotiation for', target: 'TechVista', time: '24m ago' },
  { id: 3, user: 'Marcus Rivera', avatar: 'MR', action: 'closed deal with', target: 'DataFlow Inc', time: '1h ago' },
  { id: 4, user: 'Emma Watson', avatar: 'EW', action: 'sent proposal to', target: 'CloudNine', time: '2h ago' },
  { id: 5, user: 'James Park', avatar: 'JP', action: 'called', target: 'NextGen Solutions', time: '3h ago' },
]

export const todos: Todo[] = [
  { id: 1, text: 'Follow up with TechVista deal', done: false },
  { id: 2, text: 'Review Q2 pipeline report', done: false },
  { id: 3, text: 'Send contract to DataFlow', done: true },
  { id: 4, text: 'Prepare demo for CloudNine', done: false },
  { id: 5, text: 'Update CRM contact list', done: true },
]

export const customers: Customer[] = [
  { id: 1, name: 'Jennifer Walsh', company: 'Acme Corp', email: 'j.walsh@acme.com', status: 'Active', lastUpdated: '2026-06-09', dealValue: '$48,000' },
  { id: 2, name: 'Robert Chen', company: 'TechVista', email: 'r.chen@techvista.io', status: 'Active', lastUpdated: '2026-06-08', dealValue: '$125,000' },
  { id: 3, name: 'Lisa Grant', company: 'DataFlow Inc', email: 'l.grant@dataflow.com', status: 'Onboarding', lastUpdated: '2026-06-07', dealValue: '$92,500' },
  { id: 4, name: 'Mark Holloway', company: 'CloudNine', email: 'm.h@cloudnine.dev', status: 'Lead', lastUpdated: '2026-06-06', dealValue: '$15,000' },
  { id: 5, name: 'Priya Sharma', company: 'NextGen Solutions', email: 'p.sharma@nextgen.co', status: 'Active', lastUpdated: '2026-06-05', dealValue: '$210,000' },
  { id: 6, name: 'Tom Fletcher', company: 'BrightPath AI', email: 't.f@brightpath.ai', status: 'Churned', lastUpdated: '2026-06-04', dealValue: '$0' },
  { id: 7, name: 'Anna Decker', company: 'ScaleUp Labs', email: 'a.decker@scaleup.io', status: 'Lead', lastUpdated: '2026-06-03', dealValue: '$38,000' },
]
