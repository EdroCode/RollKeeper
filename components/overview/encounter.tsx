export default function Encounter() {
  return (
    <div className="flex flex-col gap-6 p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm w-md max-w-xl min-h-80">
      <p className="text-sm text-zinc-500">Active Encounter</p>

      <input
        className="text-2xl font-bold bg-transparent outline-none placeholder:text-zinc-300 text-zinc-900 -mt-2"
        placeholder="The Goblin Ambush"
      />

      <div className="flex items-center justify-between">
        <p className="text-base text-zinc-800">Round 3</p>
        <div className="flex items-center gap-2 text-sm text-zinc-800">
          <span className="w-2 h-2 rounded-full bg-zinc-900 inline-block" />
          Players' Turn
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-5xl font-bold font-mono text-zinc-900 tabular-nums">
          00:45:12
        </p>
        <p className="text-sm text-zinc-400">Elapsed Time</p>
      </div>

      <div className="flex gap-3 mt-auto">
        <button className="flex-1 py-2.5 rounded-xl border border-zinc-200 hover:bg-zinc-50 text-zinc-800 text-sm font-medium transition">
          End Encounter
        </button>
        <button className="flex-1 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-700 text-white text-sm font-medium transition">
          Next Round
        </button>
      </div>
    </div>
  );
}
