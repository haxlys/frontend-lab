import { type FC, type ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => (
  <div className="min-h-screen bg-navy-50">
    <Sidebar />
    <TopBar />
    <main className="ml-[232px] pt-[56px] min-h-screen">
      <div className="p-6 max-w-[1440px] mx-auto">
        {children}
      </div>
    </main>
  </div>
);
