"use client";
import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

const pseudoRandom = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(Math.sin(hash)) % 1;
};

const transformData = (data: any[]) => {
  return data.map((day) => {
    // If the day already has real contributions, keep them
    if (day.count > 0) return day;

    const rand = pseudoRandom(day.date);
    // 55% chance of simulating a contribution on this day to look active but natural
    if (rand < 0.55) {
      let level = 1;
      if (rand < 0.10) level = 4;      // High activity
      else if (rand < 0.22) level = 3; // Medium-high activity
      else if (rand < 0.38) level = 2; // Medium activity
      
      const count = level * 3 - Math.floor(rand * 3);
      return {
        ...day,
        count: count,
        level: level,
      };
    }
    return day;
  });
};

export default function GithubContribution() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const explicitTheme = {
    light: ["#f5f5f5", "#d4d4d4", "#a3a3a3", "#737373", "#262626"],
    dark: ["#161616", "#2a2a2a", "#525252", "#8a8a8a", "#d4d4d4"],
  };

  return (
    <div className="w-full overflow-hidden border-b dark:border-neutral-900 border-neutral-200">
      <div className="flex flex-col mx-auto overflow-hidden border-x dark:border-neutral-900 border-neutral-200 w-full max-w-2xl relative flex-1 items-center justify-center bg-zinc-50 dark:bg-neutral-900">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-8 px-8 bg-white dark:bg-[#09090B] sm:items-start min-h-[140px]">
          {mounted ? (
            <GitHubCalendar
              className="font-mono react-activity-calendar"
              tooltips={{
                activity: {
                  text: (activity) =>
                    `${activity.count} activities on ${activity.date}`,
                },
                colorLegend: {
                  text: (level) => `Activity level ${level + 2}`,
                },
              }}
              year={2026}
              blockSize={10}
              username="ravithemore"
              theme={explicitTheme}
              colorScheme={theme === "dark" ? "dark" : "light"}
              transformData={transformData}
            />
          ) : (
            <div className="h-[120px] w-full flex items-center justify-center text-xs text-neutral-400 dark:text-neutral-500 font-mono">
              Loading calendar...
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
