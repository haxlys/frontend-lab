import { Clock, Handshake, UserPlus, PhoneCall, NotePencil } from "@phosphor-icons/react";
import type { ComponentType } from "react";
import type { Activity } from "../types";
import { activities } from "../data";
import clsx from "clsx";

type PhosphorIcon = ComponentType<{ size?: number; weight?: "fill" | "regular" }>;

const typeConfig: Record<
  Activity["type"],
  { icon: PhosphorIcon; bg: string; iconColor: string }
> = {
  deal: { icon: Handshake, bg: "bg-emerald-50", iconColor: "text-emerald-600" },
  lead: { icon: UserPlus, bg: "bg-accent-light", iconColor: "text-accent" },
  meeting: { icon: PhoneCall, bg: "bg-amber-light", iconColor: "text-amber" },
  note: { icon: NotePencil, bg: "bg-slate-100", iconColor: "text-slate-500" },
};

export function ActivityTimeline() {
  return (
    <div className="stat-card h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-800">Recent Activity</h3>
        <span className="text-xs text-accent font-medium cursor-pointer hover:underline">
          View all
        </span>
      </div>

      <div className="space-y-0">
        {activities.map((activity, i) => {
          const config = typeConfig[activity.type];
          const Icon = config.icon;
          return (
            <div
              key={activity.id}
              className={clsx(
                "flex gap-3 py-3",
                i !== activities.length - 1 && "border-b border-slate-50"
              )}
            >
              <div
                className={clsx(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                  config.bg,
                  config.iconColor
                )}
              >
                <Icon size={16} weight="fill" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-800 truncate">
                  {activity.title}
                </p>
                <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                  {activity.description}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-slate-300"><Clock size={12} /></span>
                  <span className="text-xs text-slate-400">{activity.timestamp}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
