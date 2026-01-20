import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Game } from "@/Types/Game";
import type { ResultCounts } from "@/Types/ResultCounts";
import { sendGameStatsRequest } from "@/api/requestAnonymousGames";
import { ChartDataContext, type ChartDataContextValue } from "./ChartDataContext";
import { requestUserGames } from "@/api/requestUserGames";
import { useAuth } from "../Auth/AuthContext";

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
  const [userGames, setUserGames] = useState<Game[]>([]);

  const authContext = useAuth();

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

  // Fetch user games when token becomes available
  const pullUserGames = async () => {
    if (!authContext.token) return;

    const response = await requestUserGames(authContext.token);
    setUserGames(response.anonymousGames);
  };

  useEffect(() => {
    if (!authContext.token) return;
    pullUserGames();
  }, [authContext.token]);

  const totalResults = useMemo(() => computeTotals(allGames), [allGames]);
  const totalUserResults = useMemo(() => computeTotals(userGames), [userGames]);

  const addToAllGames: ChartDataContextValue["addToAllGames"] = (entry) => {
    if(authContext.token){
      setUserGames((prev) => [...prev, entry]);
    }
    setAllGames((prev) => [...prev, entry]);
  };

  const value: ChartDataContextValue = {
    allGames,
    userGames,
    totalResults,
    totalUserResults,
    addToAllGames,
    pullUserGames,
  };

  return (
    <ChartDataContext.Provider value={value}>
      {children}
    </ChartDataContext.Provider>
  );
};