export default function Dashboard() {
  return (
    <div className="flex h-screen bg-white text-zinc-900 font-sans">

      <aside className="w-52 shrink-0 border-r border-zinc-200 bg-white flex flex-col">
        <div className="px-4 py-5 border-b border-zinc-200">
          <span className="text-sm font-semibold tracking-tight">RollKeeper</span>
        </div>
        <nav className="flex-1 p-2 space-y-0.5">
          <p className="px-2 pt-2 pb-1 text-[10px] font-medium text-zinc-400 uppercase tracking-widest">Tools</p>
        </nav>
      </aside>

      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="h-12 border-b border-zinc-200 flex items-center px-6 gap-3 shrink-0">
          <span className="text-sm font-medium">Dashboard</span>
        </header>

        <main className="flex-1 overflow-auto p-6 bg-zinc-50">
          <div className="grid grid-cols-3 gap-4">
          </div>
        </main>
      </div>

    </div>
  );
}