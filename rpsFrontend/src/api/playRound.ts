import type { PlayRequestDTO } from "@/DTOs/HumanMoves"
import type { PlayResponseDTO } from "@/DTOs/HumanMoves"

export const sendPlayRequest = async (dto: PlayRequestDTO): Promise<PlayResponseDTO> => {

  const response = await fetch("https://rpsbackend-grcjbrawddd7gyac.canadacentral-01.azurewebsites.net/api/play", {
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
