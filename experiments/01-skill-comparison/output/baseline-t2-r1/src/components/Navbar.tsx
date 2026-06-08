function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-surface/80 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-ade-500 to-ade-700 flex items-center justify-center text-white text-sm font-extrabold">
            A
          </span>
          <span className="text-white">ADE</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">기능</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">동작 방식</a>
          <a href="#pricing" className="hover:text-white transition-colors">가격</a>
        </div>
        <a
          href="#pricing"
          className="hidden md:inline-flex px-5 py-2 rounded-full bg-ade-600 hover:bg-ade-500 text-white text-sm font-medium transition-colors"
        >
          시작하기
        </a>
      </div>
    </nav>
  )
}

export default Navbar
