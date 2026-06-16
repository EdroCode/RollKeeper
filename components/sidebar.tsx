export default function () {
  return (
    <aside className="w-52 shrink-0 border-r border-zinc-800 bg-zinc-950 flex flex-col">
      <div className="flex items-center gap-3 px-4 py-5 border-b border-zinc-800">
        <img src="/d20White.svg" alt="D20 logo" className="h-10 w-10" />

        <div className="leading-tight">
          <p className="text-white text-lg font-semibold tracking-tight">
            RollKeeper
          </p>
          <p className="text-zinc-400 text-xs font-medium">Dashboard</p>
        </div>
      </div>

      <nav className="flex-1 p-3">
        <p className="px-2 pb-2 text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">
          Tools
        </p>

        <div className="space-y-1">
          <button
            className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-white rounded-md
                        hover:bg-zinc-800 active:bg-zinc-700 transition-colors"
          >
            Dice Roller
          </button>
        </div>
      </nav>
    </aside>
  );
}
