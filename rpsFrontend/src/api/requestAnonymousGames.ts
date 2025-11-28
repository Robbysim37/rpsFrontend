import type { AllAnonymousGamesDto } from "@/DTOs/GamesStats"

export const sendGameStatsRequest = async (): Promise<AllAnonymousGamesDto> => {

  const response = await fetch("http://localhost:5049/api/stats", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })

  if (!response.ok) {
    throw new Error("Failed to send play request")
  }

  return response.json()
}
