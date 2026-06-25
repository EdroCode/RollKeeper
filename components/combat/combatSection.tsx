import { Widget, WidgetType } from "@/app/types/widgets";
import DiceRoller from "@/components/tools/diceRoller";
import HealthBar from "@/components/tools/healthBar";

const widgetMap = { dice: DiceRoller, health: HealthBar };

type Props = {
  widgets: Widget[];
  onRemoveWidget: (id: string) => void;
};

export default function CombatSection({ widgets, onRemoveWidget }: Props) {
  return (
    <div className="flex flex-wrap gap-4 items-start content-start">
      {widgets.map((w) => {
        const Component = widgetMap[w.type];
        return <Component key={w.id} onClose={() => onRemoveWidget(w.id)} />;
      })}
    </div>
  );
}
