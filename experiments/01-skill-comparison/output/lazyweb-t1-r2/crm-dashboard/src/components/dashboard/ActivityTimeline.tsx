import { type FC } from "react";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

interface Activity {
  type: "deal" | "task" | "note" | "meeting";
  text: string;
  time: string;
}

type ActivityVariant = {
  dot: string;
  line: string;
  badge: React.ReactNode;
};

const activities: (Activity & { variant: ActivityVariant })[] = [
  {
    type: "deal",
    text: "㈜아이노베이션 — 1.5억 딜 협상 단계 진입",
    time: "14분 전",
    variant: {
      dot: "bg-accent-500",
      line: "border-accent-200",
      badge: <Badge label="딜" />,
    },
  },
  {
    type: "meeting",
    text: "박민수 대표님 미팅 — 2차 미팅 일정 확정",
    time: "1시간 전",
    variant: {
      dot: "bg-teal-500",
      line: "border-teal-200",
      badge: <Badge label="미팅" variant="success" />,
    },
  },
  {
    type: "task",
    text: "제안서 초안 발송 완료 (@김지원)",
    time: "2시간 전",
    variant: {
      dot: "bg-amber-600",
      line: "border-amber-200",
      badge: <Badge label="할 일" variant="warning" />,
    },
  },
  {
    type: "note",
    text: "황수진 님 — 계약 조건 관련 메모 추가",
    time: "3시간 전",
    variant: {
      dot: "bg-purple-500",
      line: "border-purple-200",
      badge: <Badge label="메모" variant="default" />,
    },
  },
  {
    type: "deal",
    text: "㈜테크브릿지 — 신규 리드 등록",
    time: "5시간 전",
    variant: {
      dot: "bg-accent-500",
      line: "border-accent-200",
      badge: <Badge label="딜" />,
    },
  },
];

export const ActivityTimeline: FC = () => (
  <Card className="flex flex-col h-full">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-[15px] font-semibold text-navy-800">최근 활동</h3>
      <button className="text-[13px] text-accent-600 font-medium hover:text-accent-500 transition-colors">
        모두 보기
      </button>
    </div>

    <div className="flex-1 space-y-0">
      {activities.map((activity, i) => (
        <div key={i} className="flex gap-3">
          <div className="flex flex-col items-center pt-0.5">
            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${activity.variant.dot}`} />
            {i < activities.length - 1 && (
              <div className={`w-px flex-1 mt-1 border-l border-dashed ${activity.variant.line}`} />
            )}
          </div>
          <div className={`pb-4 ${i === activities.length - 1 ? "" : ""}`}>
            <p className="text-[13px] text-navy-700 leading-relaxed">{activity.text}</p>
            <div className="flex items-center gap-2 mt-1">
              {activity.variant.badge}
              <span className="text-[11px] text-navy-400">{activity.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Card>
);
