import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Fruit, Votes } from "@/types";
import html2canvas from "html2canvas";
import { Download, Save } from "lucide-react";
import { toast } from "sonner";

interface ResultsScreenProps {
  groupName: string;
  selectedFruits: Fruit[];
  votes: Votes;
  onSaveAndFinish: (velocity?: number) => void;
}

const ResultsScreen = ({ groupName, selectedFruits, votes, onSaveAndFinish }: ResultsScreenProps) => {
  const [velocity, setVelocity] = useState<string>("");
  const resultsRef = useRef<HTMLDivElement>(null);

  const totalPoints = Object.values(votes).reduce((sum, points) => sum + points, 0);

  const handleSaveImage = async () => {
    if (!resultsRef.current) return;

    try {
      const canvas = await html2canvas(resultsRef.current, {
        backgroundColor: "#ffffff",
        scale: 2,
      });
      
      const link = document.createElement("a");
      link.download = `planning-poker-${groupName}-${new Date().toISOString().split('T')[0]}.png`;
      link.href = canvas.toDataURL();
      link.click();
      
      toast.success("تصویر با موفقیت ذخیره شد!");
    } catch (error) {
      toast.error("خطا در ذخیره‌سازی تصویر");
    }
  };

  const handleSaveAndFinish = () => {
    const vel = velocity ? parseInt(velocity) : undefined;
    onSaveAndFinish(vel);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div ref={resultsRef} className="bg-gradient-warm rounded-2xl shadow-card p-8 border border-border mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{groupName}</h2>
            <p className="text-lg text-muted-foreground">نتایج پلنینگ پوکر</p>
          </div>

          <div className="bg-gradient-primary rounded-2xl p-8 mb-8 text-center shadow-lg">
            <div className="text-white/80 text-xl mb-2">مجموع استوری پوینت‌ها</div>
            <div className="text-6xl md:text-7xl font-bold text-white">{totalPoints}</div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {selectedFruits.map((fruit) => (
              <div
                key={fruit.id}
                className="bg-card rounded-xl p-4 border border-border text-center shadow-sm"
              >
                <div className="text-4xl mb-2">{fruit.emoji}</div>
                <div className="text-sm font-medium mb-1">{fruit.name}</div>
                <div className="text-2xl font-bold text-primary">{votes[fruit.id]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-2xl shadow-card p-6 border border-border mb-6">
          <Label htmlFor="velocity" className="text-lg font-semibold mb-3 block">
            سرعت تیم (اختیاری)
          </Label>
          <p className="text-sm text-muted-foreground mb-4">
            تیم شما در روز چند سالاد می‌تواند آماده کند؟
          </p>
          <Input
            id="velocity"
            type="number"
            value={velocity}
            onChange={(e) => setVelocity(e.target.value)}
            placeholder="مثلاً: 3"
            className="text-lg h-12 text-right"
            dir="rtl"
            min="0"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleSaveImage}
            size="lg"
            variant="outline"
            className="h-14 px-8 text-lg font-semibold gap-2"
          >
            <Download className="w-5 h-5" />
            ذخیره به صورت تصویر
          </Button>
          <Button
            onClick={handleSaveAndFinish}
            size="lg"
            className="h-14 px-8 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-opacity gap-2"
          >
            <Save className="w-5 h-5" />
            ذخیره و پایان بازی
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;
