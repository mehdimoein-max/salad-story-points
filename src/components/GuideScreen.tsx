import { Button } from "@/components/ui/button";
import { STORY_POINTS } from "@/types";

interface GuideScreenProps {
  onContinue: () => void;
}

const GuideScreen = ({ onContinue }: GuideScreenProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            راهنمای استوری پوینت‌ها
          </h2>
          <div className="text-6xl mb-4">📊</div>
        </div>

        <div className="bg-card rounded-2xl shadow-card p-8 border border-border mb-8 space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-primary">استوری پوینت چیست؟</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              استوری پوینت یک واحد اندازه‌گیری نسبی است که پیچیدگی، تلاش و عدم قطعیت یک کار را نشان می‌دهد.
              در این بازی، شما به هر میوه یک امتیاز اختصاص می‌دهید که نشان‌دهنده میزان کار لازم برای آماده‌سازی آن میوه است.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-secondary">تخمین نسبی</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              به جای زمان دقیق، میوه‌ها را با یکدیگر مقایسه کنید. مثلاً اگر شستن انگور ۳ پوینت است،
              آماده‌سازی آناناس چند پوینت خواهد بود؟
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">کارت‌های امتیازدهی:</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {STORY_POINTS.map((point) => (
                <div
                  key={point}
                  className="bg-gradient-primary text-white px-6 py-4 rounded-xl text-2xl font-bold shadow-md"
                >
                  {point}
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-4">
              از دنباله فیبوناچی اصلاح‌شده استفاده می‌کنیم
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={onContinue}
            size="lg"
            className="h-14 px-12 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            متوجه شدم، بریم به رأی‌گیری!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GuideScreen;
