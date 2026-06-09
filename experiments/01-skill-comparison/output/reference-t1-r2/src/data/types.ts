export interface StatCard {
  label: string
  value: string
  change: string
  changeType: 'up' | 'down'
  icon: string
}

export interface PipelineStage {
  name: string
  deals: number
  value: number
}

export interface Activity {
  id: number
  user: string
  avatar: string
  action: string
  target: string
  time: string
}

export interface Todo {
  id: number
  text: string
  done: boolean
}

export interface Customer {
  id: number
  name: string
  company: string
  email: string
  status: 'Active' | 'Lead' | 'Churned' | 'Onboarding'
  lastUpdated: string
  dealValue: string
}
