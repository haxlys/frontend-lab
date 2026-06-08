import { Avatar } from './ui/Avatar';
import { Button } from './ui/Button';
import {
  IconBell,
  IconHelp,
  IconPlus,
  IconSearch,
} from './icons';

export function TopBar() {
  return (
    <header className="h-14 shrink-0 flex items-center gap-3 px-4 lg:px-6 border-b border-border bg-white/80 backdrop-blur">
      <div className="lg:hidden flex items-center gap-2">
        <div className="h-7 w-7 rounded-md bg-ink-900 text-white grid place-items-center text-xs font-semibold">
          L
        </div>
        <span className="text-sm font-semibold text-ink-900">Lattice</span>
      </div>

      <div className="hidden md:flex flex-1 max-w-xl">
        <label className="group relative w-full">
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-ink-400 group-focus-within:text-ink-600">
            <IconSearch size={15} />
          </span>
          <input
            type="text"
            placeholder="고객, 딜, 메모 검색…"
            className="w-full h-8 pl-8 pr-16 text-sm bg-ink-50 border border-transparent rounded-md placeholder:text-ink-400 text-ink-800 focus:bg-white focus:border-ink-200 focus:shadow-ring transition-colors"
          />
          <span className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <span className="kbd">⌘</span>
            <span className="kbd">K</span>
          </span>
        </label>
      </div>

      <div className="ml-auto flex items-center gap-1">
        <Button
          size="md"
          variant="primary"
          leftIcon={<IconPlus size={14} />}
          className="hidden sm:inline-flex"
        >
          새 딜
        </Button>

        <button
          aria-label="도움말"
          className="h-8 w-8 grid place-items-center rounded-md text-ink-500 hover:bg-ink-100 hover:text-ink-800"
        >
          <IconHelp size={16} />
        </button>

        <button
          aria-label="알림"
          className="relative h-8 w-8 grid place-items-center rounded-md text-ink-500 hover:bg-ink-100 hover:text-ink-800"
        >
          <IconBell size={16} />
          <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 ring-2 ring-white" />
        </button>

        <div className="h-6 w-px bg-ink-200 mx-1" />

        <button className="flex items-center gap-2 pl-1 pr-1.5 h-8 rounded-md hover:bg-ink-100">
          <Avatar name="Minji Kim" size="sm" />
          <div className="hidden sm:block text-left">
            <p className="text-xs font-medium text-ink-900 leading-tight">
              김민지
            </p>
            <p className="text-2xs text-ink-500 leading-tight">Sales Lead</p>
          </div>
        </button>
      </div>
    </header>
  );
}
