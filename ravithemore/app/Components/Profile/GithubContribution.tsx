"use client";
import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

export default function GithubContribution() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const explicitTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
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
