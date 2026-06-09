import { useState } from "react";

interface Activity {
  id: number;
  type: "call" | "email" | "meeting" | "note";
  title: string;
  description: string;
  time: string;
}

const activities: Activity[] = [
  { id: 1, type: "call", title: "Call with Acme Corp", description: "Discussed renewal terms", time: "10 min ago" },
  { id: 2, type: "email", title: "Email to Sarah Kim", description: "Sent proposal follow-up", time: "32 min ago" },
  { id: 3, type: "meeting", title: "Demo with BigCo Inc", description: "Product walkthrough completed", time: "1 hr ago" },
  { id: 4, type: "note", title: "Note added to GlobalTech", description: "Decision maker on PTO this week", time: "2 hr ago" },
  { id: 5, type: "email", title: "Email from Mike Chen", description: "Requesting pricing for Enterprise", time: "3 hr ago" },
];

import type { ReactNode } from "react";

const activityIcons: Record<string, ReactNode> = {
  call: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  email: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  meeting: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  note: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
};

const bgColors: Record<string, string> = {
  call: "bg-[#eff6ff]",
  email: "bg-[#f5f3ff]",
  meeting: "bg-[#ecfdf5]",
  note: "bg-[#f1f5f9]",
};

const tasks = [
  "Follow up with Acme Corp renewal",
  "Send proposal to InnoTech Ltd",
  "Review Q3 pipeline metrics",
  "Prepare demo for BigCo Inc",
];

export default function ActivityTimeline() {
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const toggleTask = (idx: number) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <div className="rounded-lg border border-[#e2e8f0] bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-sm font-semibold text-[#0f172a]">Today&apos;s Tasks</h3>
      <div className="mb-4 space-y-1.5">
        {tasks.map((task, idx) => (
          <button
            key={idx}
            onClick={() => toggleTask(idx)}
            className="flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-[#f8fafc]"
          >
            <div
              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                completed.has(idx)
                  ? "border-[#2563eb] bg-[#2563eb]"
                  : "border-[#cbd5e1] bg-white"
              }`}
            >
              {completed.has(idx) && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
            <span className={completed.has(idx) ? "text-[#94a3b8] line-through" : "text-[#334155]"}>
              {task}
            </span>
          </button>
        ))}
      </div>

      <div className="border-t border-[#e2e8f0] pt-4">
        <h3 className="mb-3 text-sm font-semibold text-[#0f172a]">Recent Activity</h3>
        <div className="space-y-0">
          {activities.slice(0, 4).map((activity) => (
            <div key={activity.id} className="flex gap-3 py-2">
              <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${bgColors[activity.type]}`}>
                {activityIcons[activity.type]}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-[#0f172a]">{activity.title}</p>
                <p className="truncate text-xs text-[#94a3b8]">{activity.description}</p>
              </div>
              <span className="shrink-0 text-xs text-[#94a3b8]">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
