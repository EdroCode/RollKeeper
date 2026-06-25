"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import { Widget, WidgetType } from "../types/widgets";
import OverviewSection from "@/components/overview/overviewSection";
import CombatSection from "@/components/combat/combatSection";

type Section = "overview" | "combat" | "players";

type SectionWidgets = Record<Exclude<Section, "overview">, Widget[]>;

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState<Section>("overview");
  const [sectionWidgets, setSectionWidgets] = useState<SectionWidgets>({
    combat: [],
    players: [],
  });

  function addWidget(type: WidgetType) {
    if (activeSection === "overview") return;
    setSectionWidgets((prev) => ({
      ...prev,
      [activeSection]: [
        ...prev[activeSection],
        { id: crypto.randomUUID(), type },
      ],
    }));
  }

  function removeWidget(id: string) {
    if (activeSection === "overview") return;
    setSectionWidgets((prev) => ({
      ...prev,
      [activeSection]: prev[activeSection].filter((w) => w.id !== id),
    }));
  }

  return (
    <div className="flex flex-col h-screen bg-white text-zinc-900">
      <Navbar
        onAddWidget={addWidget}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="flex-1 overflow-auto p-6 bg-zinc-50">
        {activeSection === "overview" && <OverviewSection />}
        {activeSection === "combat" && (
          <CombatSection
            widgets={sectionWidgets.combat}
            onRemoveWidget={removeWidget}
          />
        )}
      </main>
    </div>
  );
}
