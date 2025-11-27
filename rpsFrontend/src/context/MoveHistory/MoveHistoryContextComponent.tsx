"use client"

import { useState,  } from "react"
import type {ReactNode} from "react"
import type { Move,Result } from "@/Types/MoveAndResultsEnum"
import {
  MoveHistoryContext,
  type MoveHistoryContextValue,
} from "./MoveHistoryContext"
import type { ResultCounts } from "@/Types/ResultCounts"

export const MoveHistoryProvider = ({ children }: { children: ReactNode }) => {
  const [moveHistory, setMoveHistory] = useState<Move[]>([])
  const [resultHistory, setResultHistory] = useState<Result[]>([])
  const [numberOfResults, setNumberofResults] = useState<ResultCounts>({wins:0,losses:0,ties:0})

  const addToMoveHistory = (entry: Move) => {
    setMoveHistory(prev => [...prev, entry])
  }

  const addToResultHistory = (entry: Result) => {
    setResultHistory(prev => [...prev, entry])
  }

  const increaseResultCount = (entry: 0|1|2) => {

    const tempNumberOfResults = {...numberOfResults}

    if(entry == 0){
      tempNumberOfResults.wins++
      setNumberofResults(tempNumberOfResults)
    }
    if(entry == 1){
      tempNumberOfResults.losses++
      setNumberofResults(tempNumberOfResults)
    }if(entry == 2){
      tempNumberOfResults.ties++
      setNumberofResults(tempNumberOfResults)
    }
  }

  const value: MoveHistoryContextValue = {
    moveHistory,
    resultHistory,
    numberOfResults,
    addToMoveHistory,
    addToResultHistory,
    increaseResultCount
  }

  return (
    <MoveHistoryContext.Provider value={value}>
      {children}
    </MoveHistoryContext.Provider>
  )
}
