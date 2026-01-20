import type { AllAnonymousGamesDto } from "@/DTOs/GamesStats"

export const sendGameStatsRequest = async (): Promise<AllAnonymousGamesDto> => {

  const liveURL = import.meta.env.VITE_REQ_ANON_GAME_LIVE
  const testURL = import.meta.env.VITE_REQ_ANON_GAME_TEST

  const response = await fetch(liveURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })

  if (!response.ok) {
    throw new Error("Failed to send GET request")
  }

  return response.json()
}
