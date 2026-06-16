export default function DiceRoller() {
  const dice = [2, 3, 4, 6, 8, 10, 12, 16, 20, 100];

  return (
    <div className="p-4 rounded-2xl bg-gradient-to from-zinc-50 to-zinc-100 border border-zinc-200 shadow-sm backdrop-blur-md w-full max-w-md">

      <header className="mb-3">
        <h1 className="text-xs font-semibold tracking-[0.2em] text-zinc-500">
          DICE ROLLER
        </h1>
      </header>

      <main className="grid grid-cols-2 gap-3">

        <div className="grid grid-cols-2 gap-2">
          {dice.map((value) => (
            <button
              key={value}
              className="
                relative
                px-3 py-2
                rounded-xl
                bg-white/70
                border border-zinc-200
                shadow-sm
                text-zinc-700
                font-semibold
                hover:bg-zinc-900 hover:text-white
                hover:shadow-md
                active:scale-95
                transition-all duration-200
              "
            >
              D{value}
            </button>
          ))}
        </div>

        <div className="h-full flex flex-col gap-3">

            <div className="flex-1 flex items-center justify-center rounded-xl 
                            bg-white/70 border border-zinc-200 shadow-inner">
                <h2 className="text-6xl font-black tracking-tight text-zinc-900">
                00
                </h2>
            </div>

            <div className="flex-1 flex p-2 rounded-xl bg-white/40 border border-zinc-200 shadow-sm">
                <p className="text-md font-semibold tracking-tight text-zinc-950">
                </p>
            </div>

        </div>

      </main>
    </div>
  );
}