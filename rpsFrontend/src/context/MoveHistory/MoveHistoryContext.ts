import { createContext } from "react"
import type { Move, Result } from "@/Types/MoveAndResultsEnum"

export type MoveHistoryContextValue = {
  moveHistory: Move[]
  resultHistory: Result[]
  addToMoveHistory: (entry: Move) => void
  addToResultHistory: (entry: Result) => void
}

// Context only, no components here
export const MoveHistoryContext =
  createContext<MoveHistoryContextValue | undefined>(undefined)
