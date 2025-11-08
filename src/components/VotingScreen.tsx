import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Fruit, STORY_POINTS, Votes } from "@/types";
import { toast } from "sonner";

interface VotingScreenProps {
  selectedFruits: Fruit[];
  onComplete: (votes: Votes) => void;
}

const VotingScreen = ({ selectedFruits, onComplete }: VotingScreenProps) => {
  const [votes, setVotes] = useState<Votes>({});

  const handleVote = (fruitId: string, points: string) => {
    setVotes((prev) => ({
      ...prev,
      [fruitId]: parseInt(points),
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(votes).length < selectedFruits.length) {
      toast.error("لطفاً به همه میوه‌ها امتیاز دهید!");
      return;
    }
    onComplete(votes);
  };

  const votedCount = Object.keys(votes).length;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            به میوه‌های خود امتیاز دهید
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            به هر میوه بر اساس تلاش لازم برای آماده‌سازی، امتیاز دهید
          </p>
          <div className="inline-flex items-center gap-3 bg-card px-6 py-3 rounded-full border-2 border-primary shadow-md">
            <span className="text-2xl font-bold text-primary">{votedCount}</span>
            <span className="text-lg text-muted-foreground">/</span>
            <span className="text-2xl font-bold text-muted-foreground">{selectedFruits.length}</span>
            <span className="text-sm text-muted-foreground mr-2">رأی داده شده</span>
          </div>
        </div>

        <div className="grid gap-4 mb-8">
          {selectedFruits.map((fruit) => (
            <div
              key={fruit.id}
              className="bg-card rounded-xl shadow-card p-6 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{fruit.emoji}</div>
                  <div className="text-xl font-semibold">{fruit.name}</div>
                </div>
                <Select
                  value={votes[fruit.id]?.toString()}
                  onValueChange={(value) => handleVote(fruit.id, value)}
                >
                  <SelectTrigger className="w-[180px] h-12 text-lg">
                    <SelectValue placeholder="امتیاز انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border z-50">
                    {STORY_POINTS.map((point) => (
                      <SelectItem key={point} value={point.toString()} className="text-lg cursor-pointer">
                        {point} پوینت
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handleSubmit}
            size="lg"
            className="h-14 px-12 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            مشاهده نتایج
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VotingScreen;
