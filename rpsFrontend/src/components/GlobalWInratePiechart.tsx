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
import { useChartData } from "@/context/ChartData/ChartDataContext"

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

export function GlobalWinratePieChartComponent() {
  const chartDataContext = useChartData()

  let percentageWins = 0
  let percentageLoss = 0
  let percentageTie = 0
  let totalGames = 0

  if (chartDataContext) {
    totalGames = chartDataContext.allGames.length

    // avoid divide-by-zero
    if (totalGames > 0) {
      percentageWins = (chartDataContext.totalResults.wins / totalGames) * 100
      percentageLoss =
        (chartDataContext.totalResults.losses / totalGames) * 100
      percentageTie = (chartDataContext.totalResults.ties / totalGames) * 100
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

  const chartData = rawChartData.filter((d) => d.percentage > 0)

  return (
    <Card className="flex flex-col w-fit">
      <CardHeader className="justify-center items-center">
        <CardTitle className="text-center">Global Winrate</CardTitle>
        <CardDescription className="text-center">
          Total Games Played: {totalGames}
        </CardDescription>
      </CardHeader>

      {/* allow chart + labels to render outside without being clipped */}
      <CardContent className="flex-1 pb-0 px-0 overflow-visible">
        <ChartContainer
          config={chartConfig}
          className="h-[35vw] w-[75vw] md:h-[15vw] md:w-[25vw] overflow-visible"
        >
          {/* margin gives outside labels room so they don't get cut off */}
          <PieChart margin={{ top: 24, right: 48, bottom: 24, left: 48 }}>
            <Pie
              data={chartData}
              dataKey="percentage"
              nameKey="result"
              // keep your label format exactly
              label={({ name, value }) => `${name}: ${value}%`}
              labelLine={false}
              // optional: slightly smaller radius so labels fit better
              outerRadius="75%"
            >
              {chartData.map((entry) => (
                <Cell key={entry.result} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
