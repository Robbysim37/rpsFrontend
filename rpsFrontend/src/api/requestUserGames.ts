import type { AllAnonymousGamesDto } from "@/DTOs/GamesStats"

//Anonymous games here because we don't need user data for these games, this is just statistics mapping
export const requestUserGames = async (token:string): Promise<AllAnonymousGamesDto> => {

  const liveURL = import.meta.env.VITE_REQ_USER_GAMES_LIVE
  const testURL = import.meta.env.VITE_REQ_USER_GAMES_TEST

  const response = await fetch(testURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  })

  if (!response.ok) {
    throw new Error("Failed to send GET request")
  }

  return response.json()
}
