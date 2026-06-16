"use client";

import { useState } from "react";
import { HeartIcon, BrushCleaning, OctagonX } from "lucide-react";

export default function HealthBar({ onClose }: { onClose: () => void }) {
  const [maxHP, setMaxHP] = useState(100);
  const [hp, setHp] = useState(100);
  const [amount, setAmount] = useState(10);

  function clamp(value: number, min: number, max: number) {
    return Math.max(min, Math.min(max, value));
  }

  function damage(value: number) {
    setHp((prev) => clamp(prev - value, 0, maxHP));
  }

  function heal(value: number) {
    setHp((prev) => clamp(prev + value, 0, maxHP));
  }

  function resetBar() {
    setHp(maxHP);
  }

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const next = Number(e.target.value);
    setAmount(Number.isNaN(next) ? 0 : clamp(next, 0, 9999));
  }

  function handleMaxHpChange(e: React.ChangeEvent<HTMLInputElement>) {
    const next = Number(e.target.value);
    const safeNext = Number.isNaN(next) ? 1 : clamp(next, 1, 99999);
    setMaxHP(safeNext);
    setHp((prev) => clamp(prev, 0, safeNext));
  }

  const percent = maxHP > 0 ? (hp / maxHP) * 100 : 0;
  const barColor =
    percent > 60
      ? "bg-green-500"
      : percent > 30
        ? "bg-yellow-500"
        : "bg-red-500";

  return (
    <div className="p-4 rounded-2xl border border-zinc-200 bg-white shadow-sm w-full h-fit max-w-md">
      <header className="flex justify-between items-center mb-3 shrink-0 w-full">
        <h1 className="flex gap-2 items-center text-xs font-semibold tracking-[0.2em] text-zinc-500">
          <HeartIcon size={18} className="text-zinc-900" />
          HEALTH BAR
        </h1>
        <div className="flex gap-2">
          <button
            type="button"
            className="cursor-pointer"
            onClick={resetBar}
            aria-label="Reset to full health"
            title="Reset to full health"
          >
            <BrushCleaning size={18} className="text-zinc-700" />
          </button>
          <button
            type="button"
            className="cursor-pointer"
            onClick={onClose}
            aria-label="Close health bar"
            title="Close"
          >
            <OctagonX size={18} className="text-zinc-950" />
          </button>
        </div>
      </header>

      <main>
        <div className="flex justify-between items-baseline mb-1">
          <span className="text-sm font-medium text-zinc-700">
            {hp} / {maxHP}
          </span>
          <span className="text-xs text-zinc-400">{Math.round(percent)}%</span>
        </div>

        <div className="w-full h-4 bg-zinc-200 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${barColor}`}
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="flex gap-2 mt-4">
          <button
            type="button"
            onClick={() => damage(amount)}
            className="flex-1 py-2 rounded-xl bg-zinc-950 text-white font-semibold hover:bg-red-600 active:scale-95 transition"
          >
            -{amount}
          </button>
          <button
            type="button"
            onClick={() => heal(amount)}
            className="flex-1 py-2 rounded-xl bg-zinc-950 text-white font-semibold hover:bg-green-600 active:scale-95 transition"
          >
            +{amount}
          </button>
        </div>

        <div className="flex items-center gap-2 py-2 mt-2">
          <label
            htmlFor="hb-amount"
            className="tracking-wide whitespace-nowrap"
          >
            Amount:
          </label>
          <input
            id="hb-amount"
            type="number"
            min={0}
            value={amount}
            onChange={handleAmountChange}
            className="p-2 rounded-md border w-full border-zinc-200 bg-white/60 text-zinc-900"
          />
        </div>

        <div className="flex items-center gap-2 py-2 mt-2">
          <label htmlFor="hb-max" className="tracking-wide whitespace-nowrap">
            Max Health:
          </label>
          <input
            id="hb-max"
            type="number"
            min={1}
            value={maxHP}
            onChange={handleMaxHpChange}
            className="p-2 rounded-md border w-full border-zinc-200 bg-white/60 text-zinc-900"
          />
        </div>
      </main>
    </div>
  );
}
