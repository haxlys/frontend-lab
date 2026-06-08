export interface NavItem {
  label: string;
  icon: string;
  active?: boolean;
}

export interface StatCardData {
  label: string;
  value: string;
  change: number;
  changeLabel: string;
  icon: string;
}

export interface PipelineStage {
  name: string;
  value: number;
  color: string;
}

export interface Activity {
  id: number;
  type: "deal" | "lead" | "meeting" | "note";
  title: string;
  description: string;
  timestamp: string;
}

export interface Customer {
  id: number;
  name: string;
  company: string;
  email: string;
  stage: "Lead" | "Qualified" | "Proposal" | "Negotiation" | "Closed";
  value: number;
  lastContact: string;
  owner: string;
}
