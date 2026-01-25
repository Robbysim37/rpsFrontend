import { GameplayButtons } from "./GameplayButtons"
import { ResultsText } from "./ResultsText"
import { useState } from "react"

export const GameContainer = () => {

    const [isDisabled, setIsDisabled] = useState(false)

    return(<div className="flex-col">

        <div className="flex w-full justify-center mb-8">
          <ResultsText isDisabled={isDisabled}/>
        </div>

        <div className="h-[70vh] flex flex-col items-center justify-around mb-16 w-full
          md:flex-row md:h-fit
        ">
          <GameplayButtons buttonType="rock" isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
          <GameplayButtons buttonType="paper" isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
          <GameplayButtons buttonType="scissors" isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
        </div>

    </div>)
}