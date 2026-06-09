export interface StatData {
  label: string
  value: string
  change: number
  changeLabel: string
}

export interface PipelineStage {
  name: string
  count: number
  value: number
}

export interface Activity {
  id: string
  type: 'call' | 'email' | 'meeting' | 'note'
  title: string
  description: string
  timestamp: string
}

export interface Customer {
  id: string
  name: string
  company: string
  email: string
  dealValue: number
  stage: string
  lastContact: string
}

export interface TodoItem {
  id: string
  text: string
  done: boolean
}
