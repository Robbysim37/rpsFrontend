import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Game } from "@/Types/Game";
import type { ResultCounts } from "@/Types/ResultCounts";
import { sendGameStatsRequest } from "@/api/requestAnonymousGames";
import { ChartDataContext, type ChartDataContextValue } from "./ChartDataContext";

function computeTotals(games: Game[]): ResultCounts {
  const totals: ResultCounts = { wins: 0, losses: 0, ties: 0 };

  for (const game of games) {
    if (game.humansResult === 0) totals.wins++;
    else if (game.humansResult === 1) totals.losses++;
    else if (game.humansResult === 2) totals.ties++;
  }

  return totals;
}

export const ChartDataProvider = ({ children }: { children: ReactNode }) => {
  const [allGames, setAllGames] = useState<Game[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function grabGames() {
      const response = await sendGameStatsRequest();
      if (cancelled) return;
      setAllGames(response.anonymousGames);
    }

    grabGames();

    return () => {
      cancelled = true;
    };
  }, []);

  const totalResults = useMemo(() => computeTotals(allGames), [allGames]);

  const addToAllGames: ChartDataContextValue["addToAllGames"] = (entry) => {
    setAllGames((prev) => [...prev, entry]);
  };

  const value: ChartDataContextValue = {
    allGames,
    totalResults,
    addToAllGames,
  };

  return (
    <ChartDataContext.Provider value={value}>
      {children}
    </ChartDataContext.Provider>
  );
};
