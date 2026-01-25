import { useMoveHistory } from "@/context/MoveHistory/MoveHistoryContext"

type ResultsTextProps = {
  isDisabled: boolean
}

export const ResultsText = ({isDisabled}: ResultsTextProps) => {

    const moveContext = useMoveHistory()

    let initialMessage = true

    if (moveContext && moveContext.resultHistory.length > 0) {
    initialMessage = false
    }

    return(<>
        {initialMessage && 
        <p className={`font-science-gothic text-2xl md:text-3xl ${isDisabled ? "text-white" : ''}` }>{isDisabled ? "Loading..." : "Choose your move"}</p>}
        {!initialMessage && moveContext?.resultHistory[moveContext.resultHistory.length -1] == 0 &&
        <p className={`font-science-gothic text-2xl md:text-3xl text-chart-1 ${isDisabled ? "text-white" : ''}`} >{isDisabled ? "Loading..." : "You win!"}</p>}
        {!initialMessage && moveContext?.resultHistory[moveContext.resultHistory.length -1] == 1 &&
        <p className={`font-science-gothic text-2xl md:text-3xl text-chart-2 ${isDisabled ? "text-white" : ''}`}>{isDisabled ? "Loading..." : "Computer wins!"}</p>}
        {!initialMessage && moveContext?.resultHistory[moveContext.resultHistory.length -1] == 2 &&
        <p className={`font-science-gothic text-2xl md:text-3xl text-chart-3 ${isDisabled ? "text-white" : ''}`}>{isDisabled ? "Loading..." : "Tie!"}</p>}
    </>)
}