import { Button } from "../ui/Button";
import { Icon } from "../Icon";

export function PageHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 className="text-[22px] md:text-[24px] font-semibold tracking-[-0.015em] text-ink-primary">
          Good morning, Jordan
        </h1>
        <p className="mt-1 text-[13px] text-ink-secondary">
          Here's how your pipeline is performing this quarter.
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="inline-flex items-center bg-surface border border-border rounded p-0.5">
          {(["7d", "30d", "90d", "QTD"] as const).map((label, i) => (
            <button
              key={label}
              className={`h-7 px-2.5 text-[12px] font-medium rounded transition-colors ${
                i === 1
                  ? "bg-canvas text-ink-primary shadow-card"
                  : "text-ink-secondary hover:text-ink-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <Button variant="secondary" size="sm" leadingIcon={<Icon.Filter size={12} />}>
          Filters
        </Button>
        <Button variant="secondary" size="sm" trailingIcon={<Icon.ChevronDown size={12} />}>
          Export
        </Button>
      </div>
    </div>
  );
}
