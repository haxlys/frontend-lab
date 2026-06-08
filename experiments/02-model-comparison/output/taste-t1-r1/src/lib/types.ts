export type Stage = 'lead' | 'qualified' | 'proposal' | 'negotiation' | 'won';

export interface Deal {
  id: string;
  name: string;
  company: string;
  stage: Stage;
  value: number;
  owner: string;
  closeDate: string; // ISO
  probability: number; // 0..1
}

export interface Activity {
  id: string;
  kind: 'call' | 'email' | 'note' | 'meeting' | 'stage';
  actor: string;
  subject: string;
  context?: string;
  at: string; // ISO
}

export interface Customer {
  id: string;
  name: string;
  company: string;
  email: string;
  owner: string;
  status: 'active' | 'trial' | 'churn-risk' | 'new';
  mrr: number;
  updated: string; // ISO
  industry: 'SaaS' | 'Fintech' | 'Health' | 'Retail' | 'Media';
}

export interface Todo {
  id: string;
  title: string;
  due: 'Today' | 'Tomorrow' | 'This week';
  priority: 'low' | 'med' | 'high';
  done: boolean;
}

export const stageMeta: Record<Stage, { label: string; color: string; bar: string }> = {
  lead: { label: 'Lead', color: 'text-slate-600', bar: 'bg-stage-lead' },
  qualified: { label: 'Qualified', color: 'text-sky-700', bar: 'bg-stage-qualified' },
  proposal: { label: 'Proposal', color: 'text-indigo-700', bar: 'bg-stage-proposal' },
  negotiation: { label: 'Negotiation', color: 'text-amber-700', bar: 'bg-stage-negotiation' },
  won: { label: 'Won', color: 'text-emerald-700', bar: 'bg-stage-won' },
};
