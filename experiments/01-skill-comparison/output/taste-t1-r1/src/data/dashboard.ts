export const stats = [
  { label: "Total Revenue", value: "$842,490", change: "+12.5%", trend: "up" as const },
  { label: "New Leads", value: "1,247", change: "+8.2%", trend: "up" as const },
  { label: "Conversion Rate", value: "24.8%", change: "+3.1%", trend: "up" as const },
  { label: "Active Deals", value: "43", change: "-2.4%", trend: "down" as const },
]

export const pipelineStages = [
  { name: "Lead", value: 1247, color: "#94A3B8" },
  { name: "Qualified", value: 892, color: "#64748B" },
  { name: "Proposal", value: 543, color: "#475569" },
  { name: "Negotiation", value: 218, color: "#2563EB" },
  { name: "Closed Won", value: 156, color: "#10B981" },
]

export const activities = [
  { id: 1, user: "Sarah Chen", action: "closed deal", target: "Acme Corp", value: "$48,000", time: "12 min ago", avatar: "SC" },
  { id: 2, user: "Marcus Webb", action: "created lead", target: "TechVista Inc", value: "", time: "34 min ago", avatar: "MW" },
  { id: 3, user: "Emily Park", action: "updated pipeline", target: "Globex Ltd", value: "Negotiation", time: "1 hr ago", avatar: "EP" },
  { id: 4, user: "James Liu", action: "scheduled call", target: "Nimbus Co", value: "Tomorrow 10AM", time: "2 hr ago", avatar: "JL" },
  { id: 5, user: "Rachel Kim", action: "sent proposal", target: "Orbit Systems", value: "$32,500", time: "3 hr ago", avatar: "RK" },
]

export const todos = [
  { id: 1, text: "Follow up with InnoWare leads", done: false },
  { id: 2, text: "Review Q2 pipeline forecast", done: false },
  { id: 3, text: "Approve proposal for DataStream", done: true },
  { id: 4, text: "Send onboarding docs to new clients", done: false },
  { id: 5, text: "Prepare weekly sales report", done: true },
]

export const customers = [
  { id: 1, company: "Acme Corp", contact: "Alice Johnson", stage: "Closed Won", value: "$48,000", updated: "2 hours ago", status: "active" as const },
  { id: 2, company: "TechVista Inc", contact: "Bob Miller", stage: "Lead", value: "$12,400", updated: "3 hours ago", status: "new" as const },
  { id: 3, company: "Globex Ltd", contact: "Carol Davis", stage: "Negotiation", value: "$156,000", updated: "5 hours ago", status: "active" as const },
  { id: 4, company: "Nimbus Co", contact: "David Wilson", stage: "Qualified", value: "$28,900", updated: "1 day ago", status: "active" as const },
  { id: 5, company: "Orbit Systems", contact: "Eva Martinez", stage: "Proposal", value: "$32,500", updated: "1 day ago", status: "active" as const },
  { id: 6, company: "Quantum Labs", contact: "Frank Brown", stage: "Lead", value: "$8,200", updated: "2 days ago", status: "new" as const },
  { id: 7, company: "Helios AI", contact: "Grace Lee", stage: "Closed Won", value: "$95,000", updated: "2 days ago", status: "active" as const },
]
