import type { Move } from "@/Types/MoveAndResultsEnum"
import type { PlayRequestDTO } from "@/DTOs/HumanMoves"

export const buildPlayRequest = (moveToPlay:Move,moveHistory:Move[] | undefined) => {

    let request: PlayRequestDTO
    
    if (!moveHistory) {
        request = {
        HumanMoves: [moveToPlay],
        }
    } else {
        request = {
        HumanMoves: [...moveHistory, moveToPlay],
        }
    }

    return request
}