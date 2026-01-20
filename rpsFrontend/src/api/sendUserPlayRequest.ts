import type { PlayRequestDTO } from "@/DTOs/HumanMoves"
import type { PlayResponseDTO } from "@/DTOs/HumanMoves"

export const sendUserPlayRequest = async (dto: PlayRequestDTO, token:string): Promise<PlayResponseDTO> => {

  const liveURL = import.meta.env.VITE_PLAY_USER_ROUND_LIVE
  //const testURL = import.meta.env.VITE_PLAY_USER_ROUND_TEST

  console.log(dto)

  const response = await fetch(liveURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dto),
  })

  if (!response.ok) {
    throw new Error("Failed to send play request")
  }

  return response.json()
}
