import type { Move, Result } from "../Types/MoveAndResultsEnum"

export interface PlayRequestDTO {
    HumanMoves: Move[]
    PreviousHumanResults?: Result[]
}

export interface PlayResponseDTO  {
    aiMove: Move,
    winner: Result
}