import { Button } from "@/components/ui/button";
import { GameSession } from "@/types";
import { Calendar, TrendingUp, Users } from "lucide-react";

interface HistoryScreenProps {
  sessions: GameSession[];
  onNewGame: () => void;
}

const HistoryScreen = ({ sessions, onNewGame }: HistoryScreenProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">تاریخچه بازی‌ها</h2>
          <p className="text-lg text-muted-foreground">
            مرور جلسات قبلی پلنینگ پوکر
          </p>
        </div>

        {sessions.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-xl text-muted-foreground mb-6">
              هنوز هیچ جلسه‌ای ذخیره نشده است
            </p>
            <Button
              onClick={onNewGame}
              size="lg"
              className="h-14 px-12 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              شروع بازی جدید
            </Button>
          </div>
        ) : (
          <>
            <div className="grid gap-4 mb-8">
              {sessions.map((session) => (
                <div
                  key={session.id}
                  className="bg-card rounded-xl shadow-card p-6 border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        {session.groupName}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {session.selectedFruits.map((fruit) => (
                          <span
                            key={fruit.id}
                            className="inline-flex items-center gap-1 bg-muted px-3 py-1 rounded-full text-sm"
                          >
                            <span>{fruit.emoji}</span>
                            <span className="font-medium">{session.votes[fruit.id]}</span>
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {new Date(session.date).toLocaleDateString('fa-IR')}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start lg:items-end">
                      <div className="bg-gradient-primary text-white px-6 py-3 rounded-xl">
                        <div className="text-sm opacity-90">مجموع پوینت‌ها</div>
                        <div className="text-3xl font-bold">{session.totalPoints}</div>
                      </div>
                      {session.velocity && (
                        <div className="flex items-center gap-2 text-sm bg-secondary/10 text-secondary px-4 py-2 rounded-lg">
                          <TrendingUp className="w-4 h-4" />
                          <span>سرعت: {session.velocity}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Button
                onClick={onNewGame}
                size="lg"
                className="h-14 px-12 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                شروع بازی جدید
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HistoryScreen;
