"use client"

import { useState,useEffect } from "react"
import type {ReactNode} from "react"
import type { Game } from "@/Types/Game"
import { sendGameStatsRequest } from "@/api/requestAnonymousGames"

import { type ChartDataContextValue, ChartDataContext } from "./ChartDataContext"
import type { ResultCounts } from "@/Types/ResultCounts"

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
