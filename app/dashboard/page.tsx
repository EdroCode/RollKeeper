import DiceRoller from "@/components/dice_roller";
import Sidebar from "@/components/sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-white text-zinc-900 font-sans">

      <Sidebar/>

      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="h-12 border-b border-zinc-200 flex items-center px-6 gap-3 shrink-0">
          <span className="text-sm font-medium">Dashboard</span>
        </header>

        <main className="flex-1 overflow-auto p-6 bg-zinc-50">
          <div className="grid grid-cols-3 gap-4">
            <DiceRoller/>
          </div>
        </main>
      </div>
    </div>
  );
}