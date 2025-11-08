import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FRUITS, Fruit } from "@/types";
import FruitCard from "./FruitCard";

interface ScenarioScreenProps {
  onContinue: (selectedFruits: Fruit[]) => void;
}

const ScenarioScreen = ({ onContinue }: ScenarioScreenProps) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const handleToggle = (fruitId: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(fruitId)) {
      newSelected.delete(fruitId);
    } else if (newSelected.size < 10) {
      newSelected.add(fruitId);
    }
    setSelectedIds(newSelected);
  };

  const handleContinue = () => {
    const selected = FRUITS.filter((f) => selectedIds.has(f.id));
    onContinue(selected);
  };

  const selectedCount = selectedIds.size;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            میوه‌های سالاد خود را انتخاب کنید
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            دقیقاً ۱۰ میوه برای سالاد خود انتخاب کنید
          </p>
          <div className="inline-flex items-center gap-3 bg-card px-6 py-3 rounded-full border-2 border-primary shadow-md">
            <span className="text-2xl font-bold text-primary">{selectedCount}</span>
            <span className="text-lg text-muted-foreground">/</span>
            <span className="text-2xl font-bold text-muted-foreground">۱۰</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          {FRUITS.map((fruit) => (
            <FruitCard
              key={fruit.id}
              fruit={fruit}
              selected={selectedIds.has(fruit.id)}
              onToggle={() => handleToggle(fruit.id)}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handleContinue}
            disabled={selectedCount !== 10}
            size="lg"
            className="h-14 px-12 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            ادامه به مرحله بعد
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScenarioScreen;
