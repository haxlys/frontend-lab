export interface StatItem {
  label: string
  value: string
  change: number
  changeLabel: string
}

export interface PipelineStage {
  stage: string
  value: number
  color: string
}

export interface ActivityItem {
  id: number
  type: 'deal' | 'lead' | 'meeting' | 'note'
  title: string
  description: string
  time: string
}

export interface TodoItem {
  id: number
  text: string
  done: boolean
}

export interface Customer {
  id: number
  name: string
  company: string
  email: string
  stage: string
  value: number
  lastActivity: string
  avatar: string
}
