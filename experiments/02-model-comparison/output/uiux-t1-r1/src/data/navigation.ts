import type { LucideIcon } from 'lucide-react';
import {
  LayoutDashboard,
  Users,
  GitBranch,
  CalendarDays,
  MessageSquare,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  Sparkles,
} from 'lucide-react';

export interface NavItem {
  label: string;
  icon: LucideIcon;
  href: string;
  badge?: string;
  active?: boolean;
}

export const primaryNav: NavItem[] = [
  { label: '대시보드', icon: LayoutDashboard, href: '#', active: true },
  { label: '고객 관리', icon: Users, href: '#', badge: '24' },
  { label: '파이프라인', icon: GitBranch, href: '#' },
  { label: '일정', icon: CalendarDays, href: '#' },
  { label: '메시지', icon: MessageSquare, href: '#', badge: '3' },
  { label: '리포트', icon: BarChart3, href: '#' },
];

export const secondaryNav: NavItem[] = [
  { label: '설정', icon: Settings, href: '#' },
  { label: '도움말', icon: HelpCircle, href: '#' },
  { label: '로그아웃', icon: LogOut, href: '#' },
];

export const workspaceMeta = {
  name: 'Pulse CRM',
  plan: 'Team Workspace',
  icon: Sparkles,
};
