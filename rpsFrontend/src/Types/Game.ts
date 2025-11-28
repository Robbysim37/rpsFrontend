import type { Move, Result } from "./MoveAndResultsEnum"

export type Game = {
    humanMove: Move
    aiMove: Move
    humansResult: Result
}