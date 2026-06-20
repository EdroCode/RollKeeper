"use client";
import { useState } from "react";
import {
  HeartIcon,
  BrushCleaning,
  OctagonX,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

export default function HealthBar({ onClose }: { onClose: () => void }) {
  const [maxHP, setMaxHP] = useState(100);
  const [hp, setHp] = useState(100);
  const [amount, setAmount] = useState(10);
  const [collapsed, setCollapsed] = useState(false);

  function clamp(value: number, min: number, max: number) {
    return Math.max(min, Math.min(max, value));
  }

  const percent = maxHP > 0 ? (hp / maxHP) * 100 : 0;
  const barColor =
    percent > 60
      ? "bg-green-500"
      : percent > 30
        ? "bg-yellow-500"
        : "bg-red-500";

  return (
    <div className="p-4 rounded-2xl border border-zinc-200 bg-white shadow-sm w-full h-fit max-w-xs">
      <header className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => setCollapsed((p) => !p)}
            aria-label="Toggle"
          >
            {collapsed ? (
              <ChevronRight size={14} className="text-zinc-800" />
            ) : (
              <ChevronDown size={14} className="text-zinc-800" />
            )}
          </button>
          <HeartIcon size={16} className="text-zinc-900" />
          <input
            placeholder="HEALTH BAR"
            className="text-[10px] font-semibold tracking-[0.2em] text-zinc-500 bg-transparent border-none outline-none placeholder:text-zinc-500 w-28"
          />
        </div>
        {collapsed && (
          <span className="text-[10px] font-medium text-zinc-800">
            {hp} / {maxHP}
          </span>
        )}
        <div className="flex gap-2">
          <button type="button" onClick={() => setHp(maxHP)} aria-label="Reset">
            <BrushCleaning size={16} className="text-zinc-700" />
          </button>
          <button type="button" onClick={onClose} aria-label="Close">
            <OctagonX size={16} className="text-zinc-950" />
          </button>
        </div>
      </header>

      {!collapsed && (
        <main className="flex flex-col gap-3 mt-3">
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-xs font-medium text-zinc-700">
                {hp} / {maxHP}
              </span>
              <span className="text-[10px] text-zinc-700">
                {Math.round(percent)}%
              </span>
            </div>
            <div className="w-full h-3 bg-zinc-200 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${barColor}`}
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setHp((p) => clamp(p - amount, 0, maxHP))}
              className="flex-1 py-1.5 text-xs rounded-xl bg-zinc-950 text-white font-semibold hover:bg-red-500 active:scale-95 transition"
            >
              -{amount}
            </button>
            <button
              type="button"
              onClick={() => setHp((p) => clamp(p + amount, 0, maxHP))}
              className="flex-1 py-1.5 text-xs rounded-xl bg-zinc-950 text-white font-semibold hover:bg-green-500 active:scale-95 transition"
            >
              +{amount}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <label
              htmlFor="hb-amount"
              className="text-[10px] text-zinc-500 whitespace-nowrap"
            >
              Amount
            </label>
            <input
              id="hb-amount"
              type="number"
              min={0}
              value={amount}
              onChange={(e) =>
                setAmount(clamp(Number(e.target.value) || 0, 0, 9999))
              }
              className="p-1.5 text-xs rounded-md border w-full border-zinc-200 bg-white/60 text-zinc-900"
            />
          </div>

          <div className="flex items-center gap-2">
            <label
              htmlFor="hb-max"
              className="text-[10px] text-zinc-500 whitespace-nowrap"
            >
              Max HP
            </label>
            <input
              id="hb-max"
              type="number"
              min={1}
              value={maxHP}
              onChange={(e) => {
                const next = clamp(Number(e.target.value) || 1, 1, 99999);
                setMaxHP(next);
                setHp((p) => clamp(p, 0, next));
              }}
              className="p-1.5 text-xs rounded-md border w-full border-zinc-200 bg-white/60 text-zinc-900"
            />
          </div>
        </main>
      )}
    </div>
  );
}
