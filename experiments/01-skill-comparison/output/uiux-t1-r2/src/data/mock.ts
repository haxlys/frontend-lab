export interface StatProps {
  label: string;
  value: string;
  change: string;
  changeType: "up" | "down";
  icon: "dollar" | "users" | "trending" | "briefcase";
}

export const stats: StatProps[] = [
  { label: "총 매출", value: "₩847.2M", change: "+12.5%", changeType: "up", icon: "dollar" },
  { label: "신규 리드", value: "2,847", change: "+8.2%", changeType: "up", icon: "users" },
  { label: "전환율", value: "24.8%", change: "-2.1%", changeType: "down", icon: "trending" },
  { label: "진행 중인 딜", value: "134", change: "+18.7%", changeType: "up", icon: "briefcase" },
];

export interface PipelineStage {
  stage: string;
  value: number;
  count: number;
}

export const pipelineData: PipelineStage[] = [
  { stage: "리드 발굴", value: 342, count: 48 },
  { stage: "미팅 예약", value: 218, count: 36 },
  { stage: "제안 발송", value: 156, count: 28 },
  { stage: "협상 중", value: 98, count: 18 },
  { stage: "계약 완료", value: 52, count: 14 },
];

export interface Activity {
  id: string;
  type: "call" | "email" | "meeting" | "note" | "deal";
  description: string;
  time: string;
}

export const activities: Activity[] = [
  { id: "1", type: "deal", description: "스타트업A와 ₩45M 계약 체결", time: "방금 전" },
  { id: "2", type: "meeting", description: "기업B 온보딩 미팅 완료", time: "1시간 전" },
  { id: "3", type: "email", description: "리드 12건에 아웃리치 메일 발송", time: "2시간 전" },
  { id: "4", type: "call", description: "고객사C 컨택 후속 통화", time: "3시간 전" },
  { id: "5", type: "note", description: "파이프라인 리뷰 메모 작성", time: "4시간 전" },
];

export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

export const todos: Todo[] = [
  { id: "1", text: "기업D 제안서 초안 검토", done: false },
  { id: "2", text: "주간 영업 실적 리포트 작성", done: false },
  { id: "3", text: "신규 리드 10건 배정", done: true },
  { id: "4", text: "계약서 템플릿 업데이트", done: true },
];

export interface Customer {
  id: string;
  name: string;
  company: string;
  email: string;
  status: "active" | "lead" | "negotiation" | "closed";
  value: string;
  updatedAt: string;
}

export const customers: Customer[] = [
  { id: "1", name: "김민준", company: "테크스타트A", email: "minjun@techa.co.kr", status: "active", value: "₩120M", updatedAt: "2시간 전" },
  { id: "2", name: "이서연", company: "핀테크B", email: "seoyeon@finb.com", status: "negotiation", value: "₩85M", updatedAt: "3시간 전" },
  { id: "3", name: "박지호", company: "헬스케어C", email: "jiho@healthc.kr", status: "lead", value: "₩32M", updatedAt: "5시간 전" },
  { id: "4", name: "최유나", company: "이커머스D", email: "yuna@ecommd.com", status: "active", value: "₩67M", updatedAt: "6시간 전" },
  { id: "5", name: "정도윤", company: "로지텍E", email: "doyun@logite.co.kr", status: "closed", value: "₩210M", updatedAt: "어제" },
  { id: "6", name: "한소희", company: "에듀테크F", email: "sohee@edutechf.kr", status: "negotiation", value: "₩54M", updatedAt: "어제" },
  { id: "7", name: "송우진", company: "AI랩G", email: "woojin@ailabg.com", status: "lead", value: "₩18M", updatedAt: "2일 전" },
];
