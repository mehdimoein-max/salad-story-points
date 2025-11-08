import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface StartScreenProps {
  onStart: (groupName: string) => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  const [groupName, setGroupName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (groupName.trim()) {
      onStart(groupName.trim());
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <div className="text-8xl mb-6 animate-bounce">🍎🍌🍊</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            به پلنینگ پوکر سالاد میوه خوش آمدید!
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            یک روش جالب برای تخمین استوری پوینت‌ها با استفاده از میوه‌ها
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-card p-8 border border-border">
          <div className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="groupName" className="text-lg font-semibold">
                نام گروه یا پروژه خود را وارد کنید:
              </Label>
              <Input
                id="groupName"
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="مثلاً: پروژه سالاد تیم آلفا"
                className="text-lg h-14 text-right"
                dir="rtl"
              />
            </div>

            <Button
              type="submit"
              disabled={!groupName.trim()}
              className="w-full h-14 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              شروع بازی
            </Button>
          </div>
        </form>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>با استفاده از این ابزار، تیم شما می‌تواند به صورت جالب و سرگرم‌کننده</p>
          <p>به تخمین استوری پوینت‌های پروژه بپردازد</p>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
