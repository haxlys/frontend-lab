import type { Activity, Customer, Deal, Todo } from './types';

export const kpis = [
  {
    label: 'Total revenue',
    value: '$684,210',
    delta: 12.4,
    deltaLabel: 'vs. last period',
    hint: 'Closed-won this quarter',
    spark: [12, 18, 14, 22, 19, 28, 26, 32, 29, 36, 34, 41],
  },
  {
    label: 'New leads',
    value: '1,284',
    delta: 8.1,
    deltaLabel: 'vs. last period',
    hint: 'From 14 active sources',
    spark: [8, 11, 9, 14, 12, 17, 15, 20, 18, 22, 21, 25],
  },
  {
    label: 'Conversion rate',
    value: '24.6%',
    delta: -1.8,
    deltaLabel: 'vs. last period',
    hint: 'Lead → Customer (30d)',
    spark: [26, 27, 25, 26, 24, 25, 23, 24, 25, 24, 23, 24],
  },
  {
    label: 'Deals in progress',
    value: '47',
    valueSuffix: ' / $2.1M',
    delta: 4.2,
    deltaLabel: 'vs. last period',
    hint: 'Pipeline weighted value',
    spark: [22, 24, 25, 28, 30, 29, 32, 35, 36, 38, 40, 42],
  },
] as const;

export const deals: Deal[] = [
  { id: 'd-1001', name: 'Enterprise renewal', company: 'Lumen Health', stage: 'negotiation', value: 148000, owner: 'Sara Kim', closeDate: '2026-06-22', probability: 0.7 },
  { id: 'd-1002', name: 'New logo — 200 seats', company: 'Northstar Logistics', stage: 'proposal', value: 96000, owner: 'Marcus Lin', closeDate: '2026-07-04', probability: 0.55 },
  { id: 'd-1003', name: 'Add-on: AI Insights', company: 'Quill & Co.', stage: 'qualified', value: 42000, owner: 'Priya Shah', closeDate: '2026-06-30', probability: 0.4 },
  { id: 'd-1004', name: 'Pilot → annual', company: 'Atlas Robotics', stage: 'proposal', value: 124000, owner: 'Daniel Cho', closeDate: '2026-07-12', probability: 0.5 },
  { id: 'd-1005', name: 'Expansion: 3 teams', company: 'Mossbridge Capital', stage: 'negotiation', value: 86000, owner: 'Sara Kim', closeDate: '2026-06-19', probability: 0.75 },
  { id: 'd-1006', name: 'Inbound trial', company: 'Vertex Materials', stage: 'qualified', value: 32000, owner: 'Marcus Lin', closeDate: '2026-07-09', probability: 0.45 },
  { id: 'd-1007', name: 'Strategic account', company: 'Halcyon Bank', stage: 'proposal', value: 210000, owner: 'Daniel Cho', closeDate: '2026-08-01', probability: 0.55 },
  { id: 'd-1008', name: 'Self-serve upgrade', company: 'Pinecrest Studio', stage: 'lead', value: 18000, owner: 'Priya Shah', closeDate: '2026-07-22', probability: 0.25 },
  { id: 'd-1009', name: 'Multi-year deal', company: 'Brightline Energy', stage: 'negotiation', value: 312000, owner: 'Sara Kim', closeDate: '2026-06-28', probability: 0.65 },
  { id: 'd-1010', name: 'Renewal + add-on', company: 'Indigo Foods', stage: 'won', value: 76000, owner: 'Marcus Lin', closeDate: '2026-06-10', probability: 1 },
];

export const stageTotals = [
  { stage: 'lead' as const, count: 86, value: 412_000 },
  { stage: 'qualified' as const, count: 54, value: 528_000 },
  { stage: 'proposal' as const, count: 32, value: 612_000 },
  { stage: 'negotiation' as const, count: 18, value: 484_000 },
  { stage: 'won' as const, count: 12, value: 348_000 },
];

// Weekly pipeline volume by stage (last 8 weeks)
export const weeklyTrend = [
  { week: 'W18', lead: 12, qualified: 8, proposal: 5, negotiation: 3, won: 1 },
  { week: 'W19', lead: 14, qualified: 9, proposal: 6, negotiation: 3, won: 2 },
  { week: 'W20', lead: 11, qualified: 10, proposal: 5, negotiation: 4, won: 2 },
  { week: 'W21', lead: 16, qualified: 11, proposal: 7, negotiation: 4, won: 2 },
  { week: 'W22', lead: 15, qualified: 12, proposal: 8, negotiation: 4, won: 3 },
  { week: 'W23', lead: 18, qualified: 12, proposal: 9, negotiation: 5, won: 3 },
  { week: 'W24', lead: 20, qualified: 13, proposal: 9, negotiation: 6, won: 4 },
  { week: 'W25', lead: 22, qualified: 14, proposal: 10, negotiation: 6, won: 4 },
];

export const activities: Activity[] = [
  { id: 'a-1', kind: 'call', actor: 'Sara Kim', subject: 'Call with Lumen Health', context: 'Discussed renewal terms · 28 min', at: '2026-06-08T09:42:00Z' },
  { id: 'a-2', kind: 'email', actor: 'Marcus Lin', subject: 'Proposal sent', context: 'Northstar Logistics · 2 attachments', at: '2026-06-08T08:15:00Z' },
  { id: 'a-3', kind: 'stage', actor: 'Priya Shah', subject: 'Stage moved → Negotiation', context: 'Mossbridge Capital · $86,000', at: '2026-06-08T07:50:00Z' },
  { id: 'a-4', kind: 'meeting', actor: 'Daniel Cho', subject: 'Demo booked', context: 'Halcyon Bank · Thu 11:00 AM', at: '2026-06-07T16:22:00Z' },
  { id: 'a-5', kind: 'note', actor: 'Sara Kim', subject: 'Note added to Atlas Robotics', context: 'Procurement wants SOC 2 report', at: '2026-06-07T14:05:00Z' },
  { id: 'a-6', kind: 'email', actor: 'Marcus Lin', subject: 'Follow-up sent', context: 'Vertex Materials · Re: trial feedback', at: '2026-06-07T11:30:00Z' },
  { id: 'a-7', kind: 'call', actor: 'Priya Shah', subject: 'Discovery call', context: 'Pinecrest Studio · 22 min', at: '2026-06-07T10:00:00Z' },
];

export const todos: Todo[] = [
  { id: 't-1', title: 'Send revised quote to Lumen Health', due: 'Today', priority: 'high', done: false },
  { id: 't-2', title: 'Prep demo deck for Halcyon Bank', due: 'Today', priority: 'high', done: false },
  { id: 't-3', title: 'Review Mossbridge MSA redlines', due: 'Today', priority: 'med', done: true },
  { id: 't-4', title: 'Follow up on Atlas Robotics SOC 2', due: 'Tomorrow', priority: 'med', done: false },
  { id: 't-5', title: 'Pipeline review with Marcus', due: 'This week', priority: 'low', done: false },
];

export const customers: Customer[] = [
  { id: 'c-1', name: 'Lumen Health', company: 'Lumen Health Inc.', email: 'ops@lumenhealth.co', owner: 'Sara Kim', status: 'active', mrr: 12400, updated: '2026-06-08T08:24:00Z', industry: 'Health' },
  { id: 'c-2', name: 'Northstar Logistics', company: 'Northstar Logistics', email: 'partners@northstar.io', owner: 'Marcus Lin', status: 'active', mrr: 9600, updated: '2026-06-08T07:15:00Z', industry: 'Retail' },
  { id: 'c-3', name: 'Quill & Co.', company: 'Quill & Company', email: 'team@quill.co', owner: 'Priya Shah', status: 'trial', mrr: 0, updated: '2026-06-07T19:42:00Z', industry: 'Media' },
  { id: 'c-4', name: 'Atlas Robotics', company: 'Atlas Robotics', email: 'hello@atlasrobotics.ai', owner: 'Daniel Cho', status: 'active', mrr: 14800, updated: '2026-06-07T16:05:00Z', industry: 'SaaS' },
  { id: 'c-5', name: 'Mossbridge Capital', company: 'Mossbridge Capital', email: 'desk@mossbridge.com', owner: 'Sara Kim', status: 'active', mrr: 11200, updated: '2026-06-07T15:30:00Z', industry: 'Fintech' },
  { id: 'c-6', name: 'Vertex Materials', company: 'Vertex Materials', email: 'lab@vertexmat.com', owner: 'Marcus Lin', status: 'trial', mrr: 0, updated: '2026-06-07T12:00:00Z', industry: 'SaaS' },
  { id: 'c-7', name: 'Halcyon Bank', company: 'Halcyon Bank', email: 'it@halcyon.bank', owner: 'Daniel Cho', status: 'new', mrr: 0, updated: '2026-06-07T10:18:00Z', industry: 'Fintech' },
  { id: 'c-8', name: 'Pinecrest Studio', company: 'Pinecrest Studio', email: 'hi@pinecrest.studio', owner: 'Priya Shah', status: 'churn-risk', mrr: 3200, updated: '2026-06-06T22:11:00Z', industry: 'Media' },
];
