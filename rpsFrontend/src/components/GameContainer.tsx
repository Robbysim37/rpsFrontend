import { GameplayButtons } from "./GameplayButtons"
import { ResultsText } from "./ResultsText"
import { useState } from "react"

export const GameContainer = () => {

    const [isDisabled, setIsDisabled] = useState(false)

    return(<div className="flex-col">

        <div className="flex w-full justify-center mb-8">
          <ResultsText/>
        </div>

        <div className="flex w-full justify-around mb-16">
          <GameplayButtons buttonType="rock" isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>
          <GameplayButtons buttonType="paper" isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>
          <GameplayButtons buttonType="scissors" isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>
        </div>

    </div>)
}