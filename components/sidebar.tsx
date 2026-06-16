"use client";

import { WidgetType } from "@/app/types/widgets";
import { Dice6, HeartIcon } from "lucide-react";

type Props = {
  onAddWidget: (type: WidgetType) => void;
};

export default function Sidebar({ onAddWidget }: Props) {
  return (
    <aside className="w-56 shrink-0 border-r border-zinc-800 bg-zinc-950 text-white flex flex-col">
      <div className="px-4 py-5 border-b border-zinc-800">
        <h1 className="text-lg font-bold">RollKeeper</h1>
        <p className="text-xs text-zinc-400">RPG Dashboard</p>
      </div>

      <nav className="flex-1 p-3 space-y-2">
        <button
          onClick={() => onAddWidget("dice")}
          className="flex gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-zinc-800 transition"
        >
          <Dice6 /> Dice Roller
        </button>

        <button
          onClick={() => onAddWidget("health")}
          className="flex gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-zinc-800 transition"
        >
          <HeartIcon /> Health Bar
        </button>
      </nav>
    </aside>
  );
}
