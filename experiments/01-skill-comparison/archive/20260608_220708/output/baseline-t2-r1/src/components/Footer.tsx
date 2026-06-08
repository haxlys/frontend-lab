function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-ade-500 to-ade-700 flex items-center justify-center text-white text-xs font-extrabold">
              A
            </span>
            <span className="text-white">ADE</span>
          </div>
          <p className="text-slate-500 text-sm text-center">
            &copy; {new Date().getFullYear()} ADE Labs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">이용약관</a>
            <a href="#" className="hover:text-slate-300 transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-slate-300 transition-colors">문의하기</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
