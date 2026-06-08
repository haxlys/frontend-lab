export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
        <div className="flex items-center gap-2 font-semibold text-slate-500">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-500 text-[10px] font-extrabold text-white">
            A
          </span>
          ADE
        </div>
        <p>
          &copy; {new Date().getFullYear()} ADE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
