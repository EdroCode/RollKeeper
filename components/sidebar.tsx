"use client";
import { WidgetType } from "@/app/types/widgets";
import { Dices, HeartIcon, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  onAddWidget: (type: WidgetType) => void;
};

export default function Sidebar({ onAddWidget }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className="relative flex shrink-0">
      <div
        className={`${collapsed ? "w-20" : "w-52"} shrink-0 border-r border-zinc-800 bg-zinc-950 text-white flex flex-col transition-all duration-200`}
      >
        <Link
          href="./"
          className="flex gap-3 px-4 py-6 border-b border-zinc-800"
        >
          <Image src="./d20White.svg" alt="d20-logo" width={48} height={40} />
          {!collapsed && (
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">RollKeeper</h1>
              <p className="text-xs text-zinc-400">RPG Dashboard</p>
            </div>
          )}
        </Link>

        <nav className="flex-1 p-3 space-y-2 items-center">
          <button
            onClick={() => onAddWidget("dice")}
            className="flex gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-zinc-800 transition"
          >
            <Dices className="w-6 h-6" />
            {!collapsed && "Dice Roller"}
          </button>
          <button
            onClick={() => onAddWidget("health")}
            className="flex gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-zinc-800 transition"
          >
            <HeartIcon className="w-6 h-6" />
            {!collapsed && "Health Bar"}
          </button>
        </nav>
      </div>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="cursor-pointer absolute -right-3 top-1/2 -translate-y-1/2 z-10
          w-6 h-12 rounded-full
          bg-zinc-800 border border-zinc-700
          flex items-center justify-center
          hover:bg-zinc-700 transition"
      >
        {collapsed ? (
          <ChevronRight className="w-3 h-3 text-zinc-400" />
        ) : (
          <ChevronLeft className="w-3 h-3 text-zinc-400" />
        )}
      </button>
    </aside>
  );
}
