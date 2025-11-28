import { createContext } from "react"
import type { Game } from "@/Types/Game"
import type { ResultCounts } from "@/Types/ResultCounts"

export type ChartDataContextValue = {
    allGames: Game[]
    totalResults: ResultCounts
    addToAllGames: (entry: Game) => void
}

// Context only, no components here
export const ChartDataContext =
  createContext<ChartDataContextValue | undefined>(undefined)
