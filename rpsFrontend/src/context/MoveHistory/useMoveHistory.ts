import { useContext } from "react"
import { MoveHistoryContext } from "./MoveHistoryContext"

export const useMoveHistory = () => {
  const ctx = useContext(MoveHistoryContext)

  if (!ctx) {
    throw new Error("useMoveHistory must be used inside a MoveHistoryProvider")
  }

  return ctx
}