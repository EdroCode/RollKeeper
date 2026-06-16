"use client";

import { useState } from "react";
import { BrushCleaning, Dice6, OctagonX } from "lucide-react";


export default function DiceRoller() {

  const dice = [2, 3, 4, 6, 8, 10, 12, 16, 20, 100];

  const [result, setResult] = useState<number | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  function rollDice(dice: number): number {
    return Math.floor(Math.random() * dice) + 1;
  }
  
  function handleRoll(dice: number) {
    const value = rollDice(dice);

    setResult(value);

    setHistory((prev) => [`${value}`, ...prev].slice(0, 10));
  }

  function clearHistory() {
    setHistory([]);
    setResult(0);
  }

  return (
    <div className="p-4 rounded-2xl bg-gradient-to from-zinc-50 to-zinc-100 border border-zinc-200 shadow-sm w-full max-w-md">
      <header className="flex justify-between mb-3">
        <h1 className="flex gap-2 items-center text-xs font-semibold tracking-[0.2em] text-zinc-500">
          <span className="text-zinc-950"><Dice6/></span>
          DICE ROLLER
        </h1>
        <button className="flex gap-1 cursor-pointer" onClick={clearHistory}>
            <BrushCleaning/>
            <OctagonX/>
        </button>
      </header>

      <main className="grid grid-cols-2 gap-3">
        <div className="grid grid-cols-2 gap-2">
          {dice.map((value) => (
            <button
              key={value}
              onClick={() => handleRoll(value)}
              className="
                cursor-pointer
                px-3 py-2 rounded-xl
                bg-white/70 border border-zinc-200
                shadow-sm text-zinc-700 font-semibold
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
          <div className="flex-1 flex items-center justify-center rounded-xl bg-white/70 border border-zinc-200 shadow-inner">
            <h2 className="text-6xl font-black tracking-tight text-zinc-900">
              {(result && result != 0) ? result : "00"}
            </h2>
          </div>

          <div className="h-28 p-3 rounded-xl bg-white/40 border border-zinc-200 shadow-sm overflow-auto">
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
              History
            </p>

            <div className="space-y-1">
              {history.map((roll, i) => (
                <div key={i} className="text-sm text-zinc-700">
                  {roll}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
