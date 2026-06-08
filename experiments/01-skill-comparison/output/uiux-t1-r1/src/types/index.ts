export interface NavItem {
  label: string
  icon: string
  active?: boolean
  badge?: number
}

export interface StatData {
  title: string
  value: string
  change: number
  changeLabel: string
  icon: string
  accent: string
}

export interface PipelineStage {
  name: string
  value: number
  deals: number
  color: string
}

export interface Activity {
  id: string
  user: string
  avatar: string
  action: string
  target: string
  time: string
}

export interface Customer {
  id: string
  name: string
  email: string
  company: string
  status: 'active' | 'lead' | 'inactive'
  lastContact: string
  value: number
}

export interface TodoItem {
  id: string
  text: string
  done: boolean
  priority: 'high' | 'medium' | 'low'
}
