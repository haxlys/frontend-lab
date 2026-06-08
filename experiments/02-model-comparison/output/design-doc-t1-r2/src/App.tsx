import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Dashboard } from './components/Dashboard';

export default function App() {
  return (
    <div className="h-screen w-full flex bg-bg text-ink-800">
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <TopBar />
        <Dashboard />
      </div>
    </div>
  );
}
