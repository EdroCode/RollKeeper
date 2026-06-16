"use client";

import { useState } from "react";
import { BrushCleaning, Dice6, OctagonX } from "lucide-react";

export default function DiceRoller({ onClose }: { onClose: () => void }) {
  const dice = [3, 4, 6, 8, 10, 12, 20, 100];

  const [result, setResult] = useState<number | null>(null);
  const [breakdown, setBreakdown] = useState<number[]>([]);
  const [history, setHistory] = useState<string[]>([]);

  const [quantity, setQuantity] = useState<number>(1);
  const [diceValue, setDiceValue] = useState<number>(20);
  const [modifier, setModifier] = useState<number>(0);

  function rollMany(sides: number, qty: number) {
    return Array.from(
      { length: Math.max(1, qty) },
      () => Math.floor(Math.random() * sides) + 1,
    );
  }

  function handleRoll(sides: number) {
    const safeQty = Math.max(1, Math.min(20, quantity));
    const safeSides = Math.max(2, Math.min(100, sides));

    const rolls = rollMany(safeSides, safeQty);
    const sum = rolls.reduce((a, b) => a + b, 0);
    const total = sum + modifier;

    setResult(total);
    setBreakdown(rolls);

    const label =
      `${total} ( ${safeQty}d${safeSides} )` +
      (modifier ? ` ${modifier >= 0 ? "+" : ""}${modifier}` : "") +
      (rolls.length > 1 ? ` (${rolls.join(" + ")})` : "");

    setHistory((prev) => [label, ...prev].slice(0, 10));
  }

  function clearHistory() {
    setHistory([]);
    setResult(null);
    setBreakdown([]);
  }

  return (
    <div className="p-4 rounded-2xl bg-linear-tp from-zinc-50 to-zinc-100 border border-zinc-200 shadow-sm w-md max-w-xl min-h-80 flex flex-col">
      <header className="flex justify-between items-center mb-3 shrink-0 w-full">
        <h1 className="flex gap-2 items-center text-xs font-semibold tracking-[0.2em] text-zinc-500">
          <Dice6 size={18} className="text-zinc-900" />
          DICE ROLLER
        </h1>

        <div className="flex gap-2">
          <button className="cursor-pointer" onClick={clearHistory}>
            <BrushCleaning size={18} className="text-zinc-700" />
          </button>
          <button className="cursor-pointer" onClick={onClose}>
            <OctagonX size={18} className="text-zinc-950" />
          </button>
        </div>
      </header>

      <main className="grid grid-cols-2 gap-2 flex-1 min-h-0 w-full">
        <div className="flex flex-col gap-2 w-48">
          <div className="grid grid-cols-3 gap-2 content-start w-full">
            {dice.map((value) => (
              <button
                key={value}
                onClick={() => handleRoll(value)}
                className="
                  cursor-pointer
                  px-3 py-3 rounded-xl
                  bg-white/70 border border-zinc-200
                  shadow-sm text-zinc-700 font-semibold
                  hover:bg-zinc-900 hover:text-white
                  hover:shadow-md
                  active:scale-95
                  transition-all duration-200
                "
              >
                {quantity > 1 ? `${quantity}d${value}` : `D${value}`}
              </button>
            ))}
          </div>

          <hr className="my-2 text-zinc-400"></hr>

          <div className="flex gap-2">
            <div className="flex flex-col gap-1 w-20">
              <p className="text-xs text-zinc-500">Qty</p>
              <input
                type="number"
                min={1}
                max={20}
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    Math.max(
                      1,
                      Math.min(20, parseInt(e.target.value || "1", 10)),
                    ),
                  )
                }
                className="p-2 rounded-md border border-zinc-200 bg-white/60 text-zinc-900"
              />
            </div>

            <div className="flex flex-col gap-1 flex-1">
              <p className="text-xs text-zinc-500">Dice</p>
              <input
                type="number"
                min={2}
                max={100}
                value={diceValue}
                onChange={(e) =>
                  setDiceValue(parseInt(e.target.value || "20", 10))
                }
                className="p-2 rounded-md border border-zinc-200 bg-white/60 text-zinc-900"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xs text-zinc-500">Modifier</p>
            <input
              type="number"
              value={modifier}
              onChange={(e) => setModifier(parseInt(e.target.value || "0", 10))}
              className="p-2 rounded-md border border-zinc-200 bg-white/60 text-zinc-900"
              placeholder="+0"
            />
          </div>

          <button
            onClick={() => handleRoll(diceValue)}
            className="mt-2 px-3 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 active:scale-95 transition font-medium"
          >
            Roll {quantity}d{diceValue}{" "}
            {modifier !== 0 && (modifier > 0 ? `+${modifier}` : modifier)}
          </button>
        </div>

        <div className="flex flex-col gap-3 min-h-0">
          <div className="flex-1 flex flex-col items-center justify-center rounded-xl bg-white/70 border border-zinc-200 shadow-inner p-4 overflow-hidden">
            <h2 className="text-7xl font-black text-zinc-900 leading-none">
              {result ?? "00"}
            </h2>

            {breakdown.length > 0 && (
              <p className="text-xs text-zinc-400 mt-2 wrap-break-words text-center">
                {breakdown.join(" + ")}
                {modifier !== 0
                  ? ` ${modifier >= 0 ? "+" : ""}${modifier}`
                  : ""}
              </p>
            )}
          </div>

          <div className="h-40 shrink-0 p-3 rounded-xl bg-white/40 border border-zinc-200 shadow-sm overflow-y-auto">
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
              History
            </p>

            <div className="space-y-1">
              {history.map((h, i) => (
                <div key={i} className="text-sm text-zinc-700 wrap-break-words">
                  {h}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
