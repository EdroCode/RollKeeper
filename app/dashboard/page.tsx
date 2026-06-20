"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import { Widget, WidgetType } from "../types/widgets";
import DiceRoller from "@/components/tools/diceRoller";
import HealthBar from "@/components/tools/healthBar";

type Section = "overview" | "combat" | "players";

const widgetMap = {
  dice: DiceRoller,
  health: HealthBar,
};

export default function Dashboard() {
  const [widgets, setWidgets] = useState<Widget[]>([]);
  const [activeSection, setActiveSection] = useState<Section>("overview");

  function addWidget(type: WidgetType) {
    setWidgets((prev) => [...prev, { id: crypto.randomUUID(), type }]);
  }

  function removeWidget(id: string) {
    setWidgets((prev) => prev.filter((w) => w.id !== id));
  }

  return (
    <div className="flex flex-col h-screen bg-white text-zinc-900">
      <Navbar
        onAddWidget={addWidget}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="flex-1 overflow-auto p-6 bg-zinc-50">
        <div className="flex flex-wrap gap-4 items-start content-start">
          {widgets.map((w) => {
            const Component = widgetMap[w.type];
            return <Component key={w.id} onClose={() => removeWidget(w.id)} />;
          })}
        </div>
      </main>
    </div>
  );
}
