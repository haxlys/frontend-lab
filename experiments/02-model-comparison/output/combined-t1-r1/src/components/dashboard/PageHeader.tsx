import { CalendarBlank, DownloadSimple } from "@phosphor-icons/react";
import { Button } from "../ui/Button";

export function PageHeader() {
  return (
    <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
      <div>
        <h1 className="text-[22px] font-semibold text-ink-900 tracking-tight">Dashboard</h1>
        <p className="text-[13px] text-ink-500 mt-1">
          A snapshot of your team's pipeline, activity, and customer health.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="md" icon={<CalendarBlank size={13} weight="regular" />}>
          Last 30 days
        </Button>
        <Button variant="secondary" size="md" icon={<DownloadSimple size={13} weight="regular" />}>
          Export
        </Button>
      </div>
    </div>
  );
}
