export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-primary-500 to-secondary-500 text-white text-xs">
              A
            </span>
            ADE
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-slate-500 transition-colors hover:text-slate-700">
              블로그
            </a>
            <a href="#" className="text-slate-500 transition-colors hover:text-slate-700">
              문서
            </a>
            <a href="#" className="text-slate-500 transition-colors hover:text-slate-700">
              GitHub
            </a>
            <a href="#" className="text-slate-500 transition-colors hover:text-slate-700">
              이용약관
            </a>
            <a href="#" className="text-slate-500 transition-colors hover:text-slate-700">
              개인정보처리방침
            </a>
          </div>

          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} ADE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
