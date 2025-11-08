import { useState, useEffect, useMemo } from "react";
import Navigation from "@/components/Navigation";
import StartScreen from "@/components/StartScreen";
import ScenarioScreen from "@/components/ScenarioScreen";
import GuideScreen from "@/components/GuideScreen";
import VotingScreen from "@/components/VotingScreen";
import ResultsScreen from "@/components/ResultsScreen";
import HistoryScreen from "@/components/HistoryScreen";
import AboutScreen from "@/components/AboutScreen";
import { Fruit, Votes, GameSession } from "@/types";

const STORAGE_KEY = "planning-poker-history";

const Index = () => {
  const [currentTab, setCurrentTab] = useState("start");
  const [groupName, setGroupName] = useState("");
  const [selectedFruits, setSelectedFruits] = useState<Fruit[]>([]);
  const [votes, setVotes] = useState<Votes>({});
  const [history, setHistory] = useState<GameSession[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setHistory(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse history", e);
      }
    }
  }, []);

  const tabs = useMemo(() => [
    { id: "start", label: "شروع", enabled: true },
    { id: "scenario", label: "۱. سناریو", enabled: groupName !== "" },
    { id: "guide", label: "۲. راهنما", enabled: selectedFruits.length === 10 },
    { id: "voting", label: "۳. رأی‌گیری", enabled: selectedFruits.length === 10 },
    { id: "results", label: "۴. نتایج", enabled: Object.keys(votes).length === 10 },
    { id: "history", label: "تاریخچه", enabled: history.length > 0 },
    { id: "about", label: "درباره PMPiran", enabled: true },
  ], [groupName, selectedFruits, votes, history]);

  const handleStart = (name: string) => {
    setGroupName(name);
    setCurrentTab("scenario");
  };

  const handleScenarioContinue = (fruits: Fruit[]) => {
    setSelectedFruits(fruits);
    setCurrentTab("guide");
  };

  const handleGuideContinue = () => {
    setCurrentTab("voting");
  };

  const handleVotingComplete = (newVotes: Votes) => {
    setVotes(newVotes);
    setCurrentTab("results");
  };

  const handleSaveAndFinish = (velocity?: number) => {
    const totalPoints = Object.values(votes).reduce((sum, p) => sum + p, 0);
    const session: GameSession = {
      id: Date.now().toString(),
      groupName,
      selectedFruits,
      votes,
      totalPoints,
      velocity,
      date: new Date().toISOString(),
    };

    const newHistory = [session, ...history];
    setHistory(newHistory);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
    setCurrentTab("history");
  };

  const handleNewGame = () => {
    setGroupName("");
    setSelectedFruits([]);
    setVotes({});
    setCurrentTab("start");
  };

  const handleTabChange = (tabId: string) => {
    const tab = tabs.find((t) => t.id === tabId);
    if (tab?.enabled) {
      setCurrentTab(tabId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navigation currentTab={currentTab} tabs={tabs} onTabChange={handleTabChange} />
      
      <main>
        {currentTab === "start" && <StartScreen onStart={handleStart} />}
        {currentTab === "scenario" && <ScenarioScreen onContinue={handleScenarioContinue} />}
        {currentTab === "guide" && <GuideScreen onContinue={handleGuideContinue} />}
        {currentTab === "voting" && (
          <VotingScreen selectedFruits={selectedFruits} onComplete={handleVotingComplete} />
        )}
        {currentTab === "results" && (
          <ResultsScreen
            groupName={groupName}
            selectedFruits={selectedFruits}
            votes={votes}
            onSaveAndFinish={handleSaveAndFinish}
          />
        )}
        {currentTab === "history" && (
          <HistoryScreen sessions={history} onNewGame={handleNewGame} />
        )}
        {currentTab === "about" && <AboutScreen />}
      </main>
    </div>
  );
};

export default Index;
