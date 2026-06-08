import {
  PhoneCall,
  Envelope,
  CalendarBlank,
  CheckCircle,
  UserPlus,
} from "@phosphor-icons/react";

const activities = [
  {
    id: 1,
    type: "call",
    icon: PhoneCall,
    iconBg: "bg-blue-50 text-blue-600",
    title: "Call with Sarah Chen",
    subtitle: "Acme Corp · 24m ago",
  },
  {
    id: 2,
    type: "email",
    icon: Envelope,
    iconBg: "bg-amber-50 text-amber-600",
    title: "Email to James Wilson",
    subtitle: "Globex Inc · 1h ago",
  },
  {
    id: 3,
    type: "meeting",
    icon: CalendarBlank,
    iconBg: "bg-emerald-50 text-emerald-600",
    title: "Demo with TechStart",
    subtitle: "Tomorrow · 10:00 AM",
  },
  {
    id: 4,
    type: "lead",
    icon: UserPlus,
    iconBg: "bg-violet-50 text-violet-600",
    title: "New lead: Maria Garcia",
    subtitle: "Initech · 2h ago",
  },
  {
    id: 5,
    type: "closed",
    icon: CheckCircle,
    iconBg: "bg-emerald-50 text-emerald-600",
    title: "Deal closed: $12,400",
    subtitle: "Stark Industries · 4h ago",
  },
];

export function ActivityTimeline() {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-5 flex flex-col">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-[15px] font-semibold text-slate-900">
          Recent Activity
        </h3>
        <button className="text-[12.5px] font-medium text-[#2563EB] hover:text-blue-700 transition-colors">
          View all
        </button>
      </div>
      <p className="text-[12.5px] text-slate-400 mb-4">
        Latest updates from your team
      </p>

      <div className="flex-1 flex flex-col gap-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 rounded-md hover:bg-slate-50 transition-colors duration-150 -mx-1 px-1 py-1 cursor-pointer"
          >
            <div
              className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${activity.iconBg}`}
            >
              <activity.icon size={16} weight="fill" />
            </div>
            <div className="min-w-0">
              <p className="text-[13.5px] font-medium text-slate-800 truncate">
                {activity.title}
              </p>
              <p className="text-[12px] text-slate-400 mt-0.5">
                {activity.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
