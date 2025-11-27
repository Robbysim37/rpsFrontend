"use client"

import { useState,  } from "react"
import type {ReactNode} from "react"
import type { Move,Result } from "@/Types/MoveAndResultsEnum"
import {
  MoveHistoryContext,
  type MoveHistoryContextValue,
} from "./MoveHistoryContext"

export const MoveHistoryProvider = ({ children }: { children: ReactNode }) => {
  const [moveHistory, setMoveHistory] = useState<Move[]>([])
  const [resultHistory, setResultHistory] = useState<Result[]>([])

  const addToMoveHistory = async (entry: Move) => {
    setMoveHistory(prev => [...prev, entry])
  }

  const addToResultHistory = async (entry: Result) => {
    setResultHistory(prev => [...prev, entry])
  }

  const value: MoveHistoryContextValue = {
    moveHistory,
    resultHistory,
    addToMoveHistory,
    addToResultHistory
  }

  return (
    <MoveHistoryContext.Provider value={value}>
      {children}
    </MoveHistoryContext.Provider>
  )
}
