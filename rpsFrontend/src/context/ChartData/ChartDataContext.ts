import { createContext, useContext } from "react";
import type { Game } from "@/Types/Game";
import type { ResultCounts } from "@/Types/ResultCounts";

export type ChartDataContextValue = {
  allGames: Game[];
  totalResults: ResultCounts;
  addToAllGames: (entry: Game) => void;
};

export const ChartDataContext = createContext<ChartDataContextValue | undefined>(
  undefined
);

export function useChartData() {
  const context = useContext(ChartDataContext);
  if (!context) {
    throw new Error("useChartData must be used inside ChartDataProvider");
  }
  return context;
}
