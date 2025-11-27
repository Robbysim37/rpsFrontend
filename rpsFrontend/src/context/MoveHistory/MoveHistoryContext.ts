import { createContext } from "react"
import type { Move, Result } from "@/Types/MoveAndResultsEnum"
import type { ResultCounts } from "@/Types/ResultCounts"

export type MoveHistoryContextValue = {
  moveHistory: Move[]
  resultHistory: Result[]
  numberOfResults: ResultCounts
  addToMoveHistory: (entry: Move) => void
  addToResultHistory: (entry: Result) => void
  increaseResultCount: (entry: 0|1|2) => void
}

// Context only, no components here
export const MoveHistoryContext =
  createContext<MoveHistoryContextValue | undefined>(undefined)
