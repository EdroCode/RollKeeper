"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar";
import DiceRoller from "@/components/dice_roller";

type Widget = { id: string; type: "dice" };

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
        <div className="grid grid-cols-3 gap-80">
          {widgets.map((w) => {
            switch (w.type) {
              case "dice":
                return (
                  <DiceRoller key={w.id} onClose={() => removeWidget(w.id)} />
                );
            }
          })}
        </div>
      </main>
    </div>
  );
}
