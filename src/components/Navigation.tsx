import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  enabled: boolean;
}

interface NavigationProps {
  currentTab: string;
  tabs: Tab[];
  onTabChange: (tabId: string) => void;
}

const Navigation = ({ currentTab, tabs, onTabChange }: NavigationProps) => {
  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            🍎 پلنینگ پوکر - سالاد میوه
          </h1>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 -mb-px scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => tab.enabled && onTabChange(tab.id)}
              disabled={!tab.enabled}
              className={cn(
                "px-6 py-3 rounded-t-lg font-medium whitespace-nowrap transition-all duration-300",
                "border-b-2 border-transparent",
                currentTab === tab.id
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : tab.enabled
                  ? "bg-muted text-foreground hover:bg-muted/80 hover:border-primary/50"
                  : "bg-muted/50 text-muted-foreground cursor-not-allowed opacity-50"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
