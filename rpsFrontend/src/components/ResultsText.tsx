import { useMoveHistory } from "@/context/MoveHistory/MoveHistoryContextComponent"

export const ResultsText = () => {

    const moveContext = useMoveHistory()

    let initialMessage = true

    if (moveContext && moveContext.resultHistory.length > 0) {
    initialMessage = false
    }

    return(<>
        {initialMessage && 
        <p className="font-science-gothic text-2xl md:text-3xl">Choose Your Move</p>}
        {!initialMessage && moveContext?.resultHistory[moveContext.resultHistory.length -1] == 0 &&
        <p className="font-science-gothic text-2xl md:text-3xl text-chart-1" >You win!</p>}
        {!initialMessage && moveContext?.resultHistory[moveContext.resultHistory.length -1] == 1 &&
        <p className="font-science-gothic text-2xl md:text-3xl text-chart-2">Computer wins!</p>}
        {!initialMessage && moveContext?.resultHistory[moveContext.resultHistory.length -1] == 2 &&
        <p className="font-science-gothic text-2xl md:text-3xl text-chart-3">Tie!</p>}
    </>)
}