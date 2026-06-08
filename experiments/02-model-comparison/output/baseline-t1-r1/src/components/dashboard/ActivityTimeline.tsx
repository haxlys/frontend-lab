import { Phone, Mail, MessageSquare, FileText, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/cn";

type Activity = {
  id: string;
  type: "call" | "email" | "note" | "deal" | "meeting";
  title: string;
  description: string;
  actor: string;
  time: string;
  initials: string;
};

const items: Activity[] = [
  {
    id: "1",
    type: "deal",
    title: "딜 단계 변경",
    description: "Acme Corp이 '제안' → '협상'으로 이동",
    actor: "Sarah Kim",
    time: "방금 전",
    initials: "SK",
  },
  {
    id: "2",
    type: "call",
    title: "통화 완료 · 24분",
    description: "Globex의 CTO와 제품 데모",
    actor: "Daniel Lee",
    time: "32분 전",
    initials: "DL",
  },
  {
    id: "3",
    type: "email",
    title: "이메일 발송",
    description: "견적서 v2를 Initech에 전송",
    actor: "Mina Park",
    time: "1시간 전",
    initials: "MP",
  },
  {
    id: "4",
    type: "note",
    title: "노트 추가",
    description: "Hooli 담당자가 결재 라인 확장 예정",
    actor: "Jisoo Han",
    time: "오늘 09:14",
    initials: "JH",
  },
  {
    id: "5",
    type: "meeting",
    title: "미팅 예약됨",
    description: "Pied Piper · 다음 주 화요일 11:00",
    actor: "Sarah Kim",
    time: "어제",
    initials: "SK",
  },
];

const iconMap: Record<Activity["type"], { icon: LucideIcon; tone: string }> = {
  deal: { icon: CheckCircle2, tone: "bg-emerald-50 text-emerald-600" },
  call: { icon: Phone, tone: "bg-brand-50 text-brand-600" },
  email: { icon: Mail, tone: "bg-violet-50 text-violet-600" },
  note: { icon: FileText, tone: "bg-amber-50 text-amber-600" },
  meeting: { icon: MessageSquare, tone: "bg-pink-50 text-pink-600" },
};

export function ActivityTimeline() {
  return (
    <div className="rounded-lg border border-ink-200 bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-ink-200 px-5 py-4">
        <div>
          <h2 className="text-base font-semibold text-ink-900">
            최근 액티비티
          </h2>
          <p className="mt-0.5 text-xs text-ink-500">
            팀의 최신 영업 활동을 확인하세요
          </p>
        </div>
        <button className="text-xs font-medium text-ink-500 hover:text-ink-900">
          전체 보기
        </button>
      </div>

      <ol className="relative px-5 py-2">
        {items.map((a, i) => {
          const { icon: Icon, tone } = iconMap[a.type];
          return (
            <li key={a.id} className="relative flex gap-3 py-3">
              {/* rail */}
              {i !== items.length - 1 && (
                <span className="absolute left-[19px] top-10 h-[calc(100%-1.25rem)] w-px bg-ink-200" />
              )}
              <div
                className={cn(
                  "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-4 ring-white",
                  tone
                )}
              >
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="truncate text-sm font-medium text-ink-900">
                    {a.title}
                  </div>
                  <div className="shrink-0 text-[11px] text-ink-400">
                    {a.time}
                  </div>
                </div>
                <div className="mt-0.5 truncate text-xs text-ink-500">
                  {a.description}
                </div>
                <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-ink-500">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-ink-900 text-[9px] font-semibold text-white">
                    {a.initials}
                  </span>
                  {a.actor}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
