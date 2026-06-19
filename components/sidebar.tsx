"use client";

import { WidgetType } from "@/app/types/widgets";
import { Dices, HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  onAddWidget: (type: WidgetType) => void;
};

export default function Sidebar({ onAddWidget }: Props) {
  return (
    <aside className="w-56 shrink-0 border-r border-zinc-800 bg-zinc-950 text-white flex flex-col">
      <Link href="./" className="flex gap-3 px-4 py-6 border-b border-zinc-800">
        <Image src="./d20White.svg" alt="d20-logo" width={48} height={40} />
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">RollKeeper</h1>
          <p className="text-xs text-zinc-400">RPG Dashboard</p>
        </div>
      </Link>

      <nav className="flex-1 p-3 space-y-2">
        <button
          onClick={() => onAddWidget("dice")}
          className="flex gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-zinc-800 transition"
        >
          <Dices /> Dice Roller
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
