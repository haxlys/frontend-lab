import { ChevronRight, Sparkles } from 'lucide-react';

export function PageHeader() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <nav aria-label="브레드크럼" className="mb-2 flex items-center gap-1 text-xs text-muted-foreground">
          <span>워크스페이스</span>
          <ChevronRight className="h-3 w-3" />
          <span className="font-medium text-foreground">대시보드</span>
        </nav>
        <div className="flex items-center gap-2.5">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">대시보드</h1>
          <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent">
            <Sparkles className="h-3 w-3" />
            실시간
          </span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          안녕하세요, Jamie님 — 오늘 진행 상황 요약입니다.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="inline-flex rounded-md border border-border bg-card p-0.5 text-xs shadow-soft">
          {['일', '주', '월', '분기'].map((label, i) => (
            <button
              key={label}
              type="button"
              className={
                i === 1
                  ? 'h-7 rounded-[5px] bg-primary px-2.5 font-medium text-primary-foreground'
                  : 'h-7 rounded-[5px] px-2.5 font-medium text-muted-foreground transition-colors hover:text-foreground'
              }
            >
              {label}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="h-8 rounded-md border border-border bg-card px-3 text-xs font-medium text-foreground shadow-soft transition-colors hover:bg-muted"
        >
          필터
        </button>
      </div>
    </div>
  );
}
