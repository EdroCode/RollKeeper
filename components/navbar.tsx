"use client";
import { WidgetType } from "@/app/types/widgets";
import Image from "next/image";
import Link from "next/link";
import AddWidget from "./AddWidget";
import { Settings } from "lucide-react";

type Section = "overview" | "combat" | "players";

type Props = {
  onAddWidget: (type: WidgetType) => void;
  activeSection: Section;
  onSectionChange: (section: Section) => void;
};

const SECTIONS: { id: Section; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "combat", label: "Combat" },
  { id: "players", label: "Players" },
];

export default function Navbar({
  onAddWidget,
  activeSection,
  onSectionChange,
}: Props) {
  return (
    <header className="w-full py-2 shrink-0 border-b border-zinc-400 text-white">
      <div className="flex justify-stretch  items-center gap-6 px-4 h-14">
        <Link
          href="./"
          className="flex items-center gap-3 shrink-0 text-zinc-950"
        >
          <Image src="./d20.svg" alt="d20-logo" width={32} height={28} />
          <h1 className="text-xl font-bold font-rpg">RollKeeper</h1>
        </Link>

        <nav className="flex items-center justify-center gap-1 flex-1">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`px-4 py-1.5  text-md font-medium 
                ${
                  activeSection === section.id
                    ? "text-zinc-950 underline underline-offset-16"
                    : "text-zinc-400 hover:text-zinc-600"
                }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
        <div className="flex gap-4 items-center">
          {activeSection !== "overview" && (
            <AddWidget
              onAddWidget={onAddWidget}
              activeSection={activeSection}
            />
          )}
          <Settings className="text-zinc-950" strokeWidth={1.8} />
        </div>
      </div>
    </header>
  );
}
