import { MoveHistoryContext } from "@/context/MoveHistory/MoveHistoryContext"
import { useContext } from "react"

export const ResultsText = () => {

    const moveContext = useContext(MoveHistoryContext)

    let initialMessage = true

    if (moveContext && moveContext.resultHistory.length > 0) {
    initialMessage = false
    }

    return(<>
        {initialMessage && 
        <p className="font-science-gothic text-3xl">Choose Your Move</p>}
        {!initialMessage && moveContext?.resultHistory[moveContext.resultHistory.length -1] == 0 &&
        <p className="font-science-gothic text-3xl text-[var(--chart-1)]" >You win!</p>}
        {!initialMessage && moveContext?.resultHistory[moveContext.resultHistory.length -1] == 1 &&
        <p className="font-science-gothic text-3xl text-[var(--chart-2)]">Computer wins!</p>}
        {!initialMessage && moveContext?.resultHistory[moveContext.resultHistory.length -1] == 2 &&
        <p className="font-science-gothic text-3xl text-[var(--chart-3)]">TIe!</p>}
    </>)
}