import type { Move,Result } from "@/Types/MoveAndResultsEnum"
import type { PlayRequestDTO } from "@/DTOs/HumanMoves"

export const buildPlayRequest = (moveToPlay:Move,moveHistory:Move[] | undefined, resultHistory:Result[]) => {

    let request: PlayRequestDTO
    
    if (!moveHistory) {
        request = {
        HumanMoves: [moveToPlay],
        PreviousHumanResults: resultHistory
        }
    } else {
        request = {
        HumanMoves: [...moveHistory, moveToPlay],
        PreviousHumanResults: resultHistory
        }
    }

    return request
}