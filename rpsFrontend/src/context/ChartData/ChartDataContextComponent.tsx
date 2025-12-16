import { useState,useEffect } from "react"
import type {ReactNode} from "react"
import type { Game } from "@/Types/Game"
import { sendGameStatsRequest } from "@/api/requestAnonymousGames"
import { createContext } from "react"
import { useContext } from "react"


import type { ResultCounts } from "@/Types/ResultCounts"

type ChartDataContextValue = {
    allGames: Game[]
    totalResults: ResultCounts
    addToAllGames: (entry: Game) => void
}

const ChartDataContext = createContext<ChartDataContextValue | undefined>(undefined)

export const ChartDataProvider = ({ children }: { children: ReactNode }) => {
    const [allGames,setAllgames] = useState<Game[]>([])
    const [totalResults, setTotalResults] = useState<ResultCounts>({wins:0,losses:0,ties:0})

    const calculateTotalResults = (array:Game[]) => {
        const tempTotalResults = {wins:0,losses:0,ties:0}
        array.forEach(game => {
            if(game.humansResult == 0){
                tempTotalResults.wins++
            }
            if(game.humansResult == 1){
                tempTotalResults.losses++
            }
            if(game.humansResult == 2){
                tempTotalResults.ties++
            }
        })
        setTotalResults(tempTotalResults)
    }

    useEffect(() => {
        async function grabGames() {
            const response = (await sendGameStatsRequest()).anonymousGames
            setAllgames(response)
            calculateTotalResults(response)
            
        }
        grabGames()
    }, [])

    const addToAllGames = (entry: Game) => {
        console.log([...allGames,entry])
        calculateTotalResults([...allGames,entry])
        setAllgames(prev => [...prev,entry])
    }

    const value: ChartDataContextValue = {
        allGames,
        totalResults,
        addToAllGames
    }

    return (
        <ChartDataContext.Provider value={value}>
        {children}
        </ChartDataContext.Provider>
    )
}

export function useChartData() {
  const context = useContext(ChartDataContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}