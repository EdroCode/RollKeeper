"use client";
import { WidgetType } from "@/app/types/widgets";
import { Dices, HeartIcon, Plus } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type Section = "overview" | "combat" | "players";

type WidgetOption = {
  type: WidgetType;
  label: string;
  icon: React.ReactNode;
};

const WIDGETS_BY_SECTION: Record<Section, WidgetOption[]> = {
  overview: [
    { type: "dice", label: "Dice Roller", icon: <Dices className="w-4 h-4" /> },
    {
      type: "health",
      label: "Health Bar",
      icon: <HeartIcon className="w-4 h-4" />,
    },
  ],
  combat: [
    { type: "dice", label: "Dice Roller", icon: <Dices className="w-4 h-4" /> },
    {
      type: "health",
      label: "Health Bar",
      icon: <HeartIcon className="w-4 h-4" />,
    },
  ],
  players: [
    {
      type: "health",
      label: "Health Bar",
      icon: <HeartIcon className="w-4 h-4" />,
    },
  ],
};

type Props = {
  onAddWidget: (type: WidgetType) => void;
  activeSection: Section;
};

export default function AddWidget({ onAddWidget, activeSection }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const options = WIDGETS_BY_SECTION[activeSection];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (options.length === 0) return null;

  return (
    <div className="relative shrink-0" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-sm text-white transition"
      >
        <Plus className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl z-50 py-1 overflow-hidden">
          <p className="px-3 pt-1 pb-2 text-xs text-zinc-500 uppercase tracking-wider font-medium">
            {activeSection}
          </p>
          {options.map((opt, index) => (
            <button
              key={`${opt.type}-${index}`}
              onClick={() => {
                onAddWidget(opt.type);
                setOpen(false);
              }}
              className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-800 transition"
            >
              {opt.icon}
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
