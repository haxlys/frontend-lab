import { Card, CardHeader } from "../ui/Card";
import { MoreHorizontal, Phone, Mail, Calendar, FileText, Briefcase } from "../ui/icons";
import { Button } from "../ui/Button";
import { activities } from "../../data/mock";

const iconMap = {
  call: Phone,
  email: Mail,
  meeting: Calendar,
  note: FileText,
  deal: Briefcase,
};

const toneMap: Record<string, { bg: string; color: string }> = {
  call: { bg: "bg-blue-50", color: "text-blue-600" },
  email: { bg: "bg-violet-50", color: "text-violet-600" },
  meeting: { bg: "bg-amber-50", color: "text-amber-600" },
  note: { bg: "bg-slate-100", color: "text-slate-600" },
  deal: { bg: "bg-emerald-50", color: "text-emerald-600" },
};

export function ActivityTimeline() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader
        title="Recent Activity"
        description="Latest team updates"
        action={
          <div className="flex items-center gap-1">
            <Button size="sm" variant="ghost">
              All
            </Button>
            <Button size="icon" variant="ghost" aria-label="More">
              <MoreHorizontal size={16} />
            </Button>
          </div>
        }
      />
      <div className="px-5 pb-5 flex-1">
        <ul className="relative space-y-1">
          {activities.map((a, idx) => {
            const Icon = iconMap[a.type];
            const tone = toneMap[a.type];
            return (
              <li key={a.id} className="flex gap-3 relative">
                <div className="flex flex-col items-center pt-0.5">
                  <div className={`h-7 w-7 rounded-full ${tone.bg} ${tone.color} grid place-items-center shrink-0`}>
                    <Icon size={13} />
                  </div>
                  {idx !== activities.length - 1 ? (
                    <div className="w-px flex-1 bg-slate-200 mt-1.5 mb-1.5 min-h-[16px]" />
                  ) : null}
                </div>
                <div className="flex-1 min-w-0 pb-3.5">
                  <div className="text-[13px] leading-snug text-slate-700">
                    <span className="font-semibold text-slate-900">{a.user}</span>{" "}
                    <span className="text-slate-500">{a.description.split("·")[0]?.trim()}</span>{" "}
                    <span className="font-medium text-slate-900">{a.target}</span>
                    {a.description.includes("·") ? (
                      <span className="text-slate-500"> · {a.description.split("·")[1]?.trim()}</span>
                    ) : null}
                  </div>
                  <div className="mt-0.5 text-[11.5px] text-slate-400">{a.time}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
}
