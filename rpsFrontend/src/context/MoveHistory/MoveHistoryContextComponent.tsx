import { useState } from "react";
import type { ReactNode } from "react";
import type { Move, Result } from "@/Types/MoveAndResultsEnum";
import type { ResultCounts } from "@/Types/ResultCounts";
import {
  MoveHistoryContext,
  type MoveHistoryContextValue,
} from "./MoveHistoryContext";

export const MoveHistoryProvider = ({ children }: { children: ReactNode }) => {
  const [moveHistory, setMoveHistory] = useState<Move[]>([]);
  const [resultHistory, setResultHistory] = useState<Result[]>([]);
  const [numberOfResults, setNumberOfResults] = useState<ResultCounts>({
    wins: 0,
    losses: 0,
    ties: 0,
  });

  const addToMoveHistory: MoveHistoryContextValue["addToMoveHistory"] = (
    entry
  ) => {
    setMoveHistory((prev) => [...prev, entry]);
  };

  const addToResultHistory: MoveHistoryContextValue["addToResultHistory"] = (
    entry
  ) => {
    setResultHistory((prev) => [...prev, entry]);
  };

  const increaseResultCount: MoveHistoryContextValue["increaseResultCount"] = (
    entry
  ) => {
    // ✅ functional update avoids stale state + avoids mutating temp objects
    setNumberOfResults((prev) => {
      if (entry === 0) return { ...prev, wins: prev.wins + 1 };
      if (entry === 1) return { ...prev, losses: prev.losses + 1 };
      return { ...prev, ties: prev.ties + 1 };
    });
  };

  const value: MoveHistoryContextValue = {
    moveHistory,
    resultHistory,
    numberOfResults,
    addToMoveHistory,
    addToResultHistory,
    increaseResultCount,
  };

  return (
    <MoveHistoryContext.Provider value={value}>
      {children}
    </MoveHistoryContext.Provider>
  );
};
