import { Button } from "@/components/ui/button";

const AboutScreen = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">درباره PMPiran</h2>
          <div className="text-6xl mb-4">🎯</div>
        </div>

        <div className="bg-card rounded-2xl shadow-card p-8 border border-border mb-8 space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-primary">چه کسی هستیم؟</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              PMPiran یک جامعه از متخصصان مدیریت پروژه است که هدف آن ارتقای دانش و مهارت
              مدیران پروژه در ایران می‌باشد. ما با ارائه ابزارها، آموزش‌ها و محتوای با کیفیت،
              به توسعه حرفه‌ای شما کمک می‌کنیم.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-secondary">ماموریت ما</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ایجاد ابزارهای کاربردی و آموزنده برای مدیران پروژه که به آن‌ها کمک کند
              تا پروژه‌های خود را با موفقیت بیشتری به پایان برسانند و از متدولوژی‌های
              مدرن مدیریت پروژه بهره‌مند شوند.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">با ما در ارتباط باشید:</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 h-12"
                onClick={() => window.open('https://pmpiran.com', '_blank')}
              >
                <i className="fas fa-globe text-primary"></i>
                وبسایت
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 h-12"
                onClick={() => window.open('https://instagram.com/pmpiran', '_blank')}
              >
                <i className="fab fa-instagram text-pink-500"></i>
                اینستاگرام
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 h-12"
                onClick={() => window.open('https://t.me/pmpiran', '_blank')}
              >
                <i className="fab fa-telegram text-blue-500"></i>
                تلگرام
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 h-12"
                onClick={() => window.open('https://linkedin.com/company/pmpiran', '_blank')}
              >
                <i className="fab fa-linkedin text-blue-600"></i>
                لینکدین
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p className="mb-2">
            این ابزار با ❤️ توسط تیم PMPiran توسعه داده شده است
          </p>
          <p>
            برای پشتیبانی و پیشنهادات، با ما در ارتباط باشید
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
