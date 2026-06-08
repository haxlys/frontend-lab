import { Button } from './ui/Button';
import { IconChevronDown, IconPlus } from './icons';

export function PageHeader() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="flex items-center gap-2 text-2xs text-ink-500">
          <span>워크스페이스</span>
          <span className="text-ink-300">/</span>
          <span>대시보드</span>
        </div>
        <h1 className="mt-1 text-xl font-semibold tracking-tight text-ink-900">
          안녕하세요, 민지님 👋
        </h1>
        <p className="text-sm text-ink-500 mt-1">
          오늘 진행 현황을 요약해드릴게요. 화이팅합니다!
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Button
          size="md"
          variant="outline"
          rightIcon={<IconChevronDown size={14} />}
        >
          최근 30일
        </Button>
        <Button
          size="md"
          variant="primary"
          leftIcon={<IconPlus size={14} />}
        >
          신규 리드
        </Button>
      </div>
    </div>
  );
}
