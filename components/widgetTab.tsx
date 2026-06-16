import { Dice6, Heart } from "lucide-react";
import { WidgetType } from "@/app/types/widgets";

type Props = {
  type: WidgetType;
  label: string;
  icon: React.ReactNode;
  onAddWidget: (type: WidgetType) => void;
};

export function WidgetTab({ type, label, icon, onAddWidget }: Props) {
  return (
    <button
      onClick={() => onAddWidget(type)}
      className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-white rounded-md
                 hover:bg-zinc-800 active:bg-zinc-700 transition-colors cursor-pointer"
    >
      <span>{icon}</span>
      {label}
    </button>
  );
}
