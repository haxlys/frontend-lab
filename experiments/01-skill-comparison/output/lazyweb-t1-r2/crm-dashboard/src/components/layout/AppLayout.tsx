import { type FC, type ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-navy-50">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <TopBar onMenuOpen={() => setSidebarOpen(true)} />
      <main className="lg:ml-[232px] pt-[56px] min-h-screen">
        <div className="p-4 sm:p-6 max-w-[1440px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};
