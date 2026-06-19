"use client";
import { useState } from "react";
import Sidebar from "@/components/sidebar";
import { Widget } from "../types/widgets";
import DiceRoller from "@/components/diceRoller";
import HealthBar from "@/components/healthBar";

const widgetMap = {
  dice: DiceRoller,
  health: HealthBar,
};

export default function Dashboard() {
  const [widgets, setWidgets] = useState<Widget[]>([]);

  function addWidget(type: Widget["type"]) {
    setWidgets((prev) => [...prev, { id: crypto.randomUUID(), type }]);
  }

  function removeWidget(id: string) {
    setWidgets((prev) => prev.filter((w) => w.id !== id));
  }

  return (
    <div className="flex h-screen bg-white text-zinc-900">
      <Sidebar onAddWidget={addWidget} />
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
