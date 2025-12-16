import { createContext, useContext } from "react";
import type { Move, Result } from "@/Types/MoveAndResultsEnum";
import type { ResultCounts } from "@/Types/ResultCounts";

export type MoveHistoryContextValue = {
  moveHistory: Move[];
  resultHistory: Result[];
  numberOfResults: ResultCounts;
  addToMoveHistory: (entry: Move) => void;
  addToResultHistory: (entry: Result) => void;
  increaseResultCount: (entry: 0 | 1 | 2) => void;
};

export const MoveHistoryContext = createContext<
  MoveHistoryContextValue | undefined
>(undefined);

export function useMoveHistory() {
  const context = useContext(MoveHistoryContext);
  if (!context) {
    throw new Error("useMoveHistory must be used inside MoveHistoryProvider");
  }
  return context;
}
