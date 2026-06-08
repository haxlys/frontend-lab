const Footer = () => (
  <footer className="border-t border-gray-200 bg-gray-50 dark:border-brand-800 dark:bg-brand-900/30">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
            A
          </div>
          <span className="text-lg font-bold text-gray-900 dark:text-white">ADE</span>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} ADE. All rights reserved. Built with care for agent developers.
        </p>

        <div className="flex items-center gap-6">
          {["Twitter", "GitHub", "Discord"].map((name) => (
            <a
              key={name}
              href="#"
              className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
