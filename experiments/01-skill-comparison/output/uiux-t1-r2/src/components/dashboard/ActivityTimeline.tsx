import { Clock, Phone, Mail, Users2, StickyNote, Handshake } from "lucide-react";
import { cn } from "../../lib/utils";
import { Card } from "../ui/Card";
import type { Activity } from "../../data/mock";

const iconMap = {
  call: Phone,
  email: Mail,
  meeting: Users2,
  note: StickyNote,
  deal: Handshake,
} as const;

const colorMap = {
  call: "bg-blue-50 text-blue-600",
  email: "bg-purple-50 text-purple-600",
  meeting: "bg-amber-50 text-amber-600",
  note: "bg-slate-100 text-slate-500",
  deal: "bg-emerald-50 text-emerald-600",
} as const;

export function ActivityTimeline({ activities }: { activities: Activity[] }) {
  return (
    <Card padding="lg">
      <div className="mb-4 flex items-center gap-2">
        <Clock className="h-4 w-4 text-slate-400" />
        <h3 className="text-sm font-semibold text-slate-800">최근 액티비티</h3>
      </div>
      <div className="space-y-0">
        {activities.map((a, i) => {
          const Icon = iconMap[a.type];
          return (
            <div
              key={a.id}
              className={cn(
                "flex items-start gap-3 py-3",
                i !== activities.length - 1 && "border-b border-slate-100",
              )}
            >
              <div
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-md",
                  colorMap[a.type],
                )}
              >
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-700 leading-snug">{a.description}</p>
                <span className="text-[11px] text-slate-400">{a.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
