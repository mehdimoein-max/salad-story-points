import { cn } from "@/lib/utils";
import { Fruit } from "@/types";
import { Check } from "lucide-react";

interface FruitCardProps {
  fruit: Fruit;
  selected: boolean;
  onToggle: () => void;
}

const FruitCard = ({ fruit, selected, onToggle }: FruitCardProps) => {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "relative p-6 rounded-xl border-2 transition-all duration-300",
        "flex flex-col items-center justify-center gap-3",
        "hover:scale-105 hover:shadow-hover active:scale-95",
        selected
          ? "bg-primary/10 border-primary shadow-md"
          : "bg-card border-border hover:border-primary/50"
      )}
    >
      {selected && (
        <div className="absolute top-2 left-2 bg-primary text-primary-foreground rounded-full p-1">
          <Check className="w-4 h-4" />
        </div>
      )}
      <div className="text-5xl">{fruit.emoji}</div>
      <div className="text-lg font-semibold text-foreground">{fruit.name}</div>
    </button>
  );
};

export default FruitCard;
