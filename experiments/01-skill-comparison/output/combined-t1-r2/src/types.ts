export interface StatCardData {
  label: string
  value: string
  change: number
  changeLabel: string
  icon: 'dollar' | 'users' | 'trend-up' | 'briefcase'
}

export interface PipelineStage {
  name: string
  value: number
  deals: number
}

export interface Activity {
  id: string
  user: string
  action: string
  target: string
  time: string
  type: 'deal' | 'lead' | 'meeting' | 'note'
}

export interface Customer {
  id: string
  name: string
  company: string
  email: string
  stage: string
  value: number
  lastContact: string
  owner: string
}

export interface Task {
  id: string
  title: string
  due: string
  priority: 'high' | 'medium' | 'low'
  done: boolean
}
