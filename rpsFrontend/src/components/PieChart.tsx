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

export const description = "A pie chart with a label"

const chartData = [
  { result: "Loss", percentage: 20, fill: "var(--chart-2)" },
  { result: "Win",  percentage: 20, fill: "var(--chart-1)" },
  { result: "Tie",  percentage: 30, fill: "var(--chart-3)" },
]

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

export function PieChartComponent() {

  

  return (
    <Card className="flex flex-col">
      <CardHeader className="justify-center items-center pb-0">
        <CardTitle className="text-center">Session Winrate</CardTitle>
        <CardDescription className="text-center">
          Total Games Played: WIP
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 px-0">
        <ChartContainer
          config={chartConfig}
          className="h-[15vw] w-[20vw] pb-0"
        >
          <PieChart>
            <Pie
              data={chartData}
              dataKey="percentage"
              nameKey="result"
              label={({ name, value }) => `${name}: ${value}%`}
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