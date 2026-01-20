"use client"

import { Pie, PieChart, Cell } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"
import { useMoveHistory } from "@/context/MoveHistory/MoveHistoryContext"

export const description = "A pie chart with a label"

const chartConfig = {
  win: {
    label: "Win",
    color: "hsl(var(--chart-1))",
  },
  loss: {
    label: "Loss",
    color: "hsl(var(--chart-2))",
  },
  tie: {
    label: "Tie",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function SessionPieChartComponent() {

const moveContext = useMoveHistory()

let percentageWins = 0
let percentageLoss = 0
let percentageTie = 0
let totalGames = 0

if (moveContext) {
  totalGames = moveContext.moveHistory.length

  if (totalGames > 0) {
    percentageWins =
      (moveContext.numberOfResults.wins / totalGames) * 100
    percentageLoss =
      (moveContext.numberOfResults.losses / totalGames) * 100
    percentageTie =
      (moveContext.numberOfResults.ties / totalGames) * 100
  }
}
  
  const rawChartData = [
  {
    result: "Loss",
    percentage: Math.round(percentageLoss * 100) / 100,
    fill: "var(--chart-2)",
  },
  {
    result: "Win",
    percentage: Math.round(percentageWins * 100) / 100,
    fill: "var(--chart-1)",
  },
  {
    result: "Tie",
    percentage: Math.round(percentageTie * 100) / 100,
    fill: "var(--chart-3)",
  },
]

const chartData = rawChartData.filter(d => d.percentage > 0)

  return (
    <Card className="flex flex-col w-fit md:mb-0">
      <CardHeader className="justify-center items-center pb-0">
        <CardTitle className="text-center">Session Winrate</CardTitle>
        <CardDescription className="text-center">
          Total Games Played: {totalGames}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 px-0">
        <ChartContainer
          config={chartConfig}
          className="h-[35vw] w-[75vw] md:h-[15vw] md:w-[25vw] pb-0"
        >
          <PieChart>
            <Pie
              data={chartData}
              dataKey="percentage"
              nameKey="result"
              label={({ name, value }) => `${name}: ${value}%`}
            >
              {chartData.map(entry => (
                <Cell key={entry.result} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}