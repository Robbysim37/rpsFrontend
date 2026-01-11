import type { PlayRequestDTO } from "@/DTOs/HumanMoves"
import type { PlayResponseDTO } from "@/DTOs/HumanMoves"

export const sendPlayRequest = async (dto: PlayRequestDTO): Promise<PlayResponseDTO> => {

  const liveURL = import.meta.env.VITE_PLAY_ROUND_LIVE
  const testURL = import.meta.env.VITE_PLAY_ROUND_TEST

  console.log(dto)

  const response = await fetch(testURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dto),
  })

  if (!response.ok) {
    throw new Error("Failed to send play request")
  }

  return response.json()
}
