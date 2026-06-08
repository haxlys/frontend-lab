export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span className="font-semibold text-slate-900">ADE</span>
          <span className="text-slate-300">|</span>
          <span>AI Agent Development Editor</span>
        </div>
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} ADE Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
