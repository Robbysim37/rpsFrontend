import { FaRegHandScissors } from "react-icons/fa";
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { motion } from "framer-motion";
import type { Move } from "@/Types/MoveAndResultsEnum";
import { buildPlayRequest } from "@/api/buildPlayRequest";
import { sendPlayRequest } from "@/api/playRound";
import { Spinner } from "./ui/spinner";
import { useChartData } from "@/context/ChartData/ChartDataContext";
import { useMoveHistory } from "@/context/MoveHistory/MoveHistoryContext";

const buttonStyle = `w-[30vw] h-[30vw] sm:w-[20vw] sm:h-[20vw] flex justify-center cursor-pointer 
      items-center rounded-full bg-linear-to-b from-[#1a1a1a] to-[#0d0d0d]`;

type GameplayButtonsProps = {
  buttonType: "rock" | "paper" | "scissors"
  isDisabled: boolean
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>
}

export const GameplayButtons = ({ buttonType,isDisabled,setIsDisabled }: GameplayButtonsProps) => {

  const moveContext = useMoveHistory()
  const chartDataContext = useChartData()

  const chooseMove = async () => {

    if(isDisabled){
      return
    }

    setIsDisabled(true)

    let moveToPlay:Move = 0

    if(buttonType == "rock"){
      moveToPlay = 0
    }else if (buttonType == "paper"){
      moveToPlay = 1
    }else if (buttonType == "scissors"){
      moveToPlay = 2
    }

    moveContext?.addToMoveHistory(moveToPlay)

    const request = buildPlayRequest(moveToPlay,moveContext?.moveHistory,moveContext?.resultHistory)

    try {
      const response = await sendPlayRequest(request)
      moveContext?.addToResultHistory(response.winner)
      moveContext?.increaseResultCount(response.winner)
      const gamePlayed = {
        humanMove: moveToPlay,
        aiMove: response.aiMove,
        humansResult: response.winner
      }
      chartDataContext?.addToAllGames(gamePlayed)
      setIsDisabled(false)
    } catch (err) {
      console.error("Error sending request:", err)
      setIsDisabled(false)
    }
  }

  return (
    <>
      {buttonType === "rock" && <motion.div
          className={buttonStyle}
          onClick={chooseMove}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 24px rgba(255,255,255,0.6)",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {!isDisabled ? <FaRegHandRock className="text-3xl md:text-8xl"/> : <Spinner className="flex h-32 items-center justify-center size-12"/>}
        </motion.div>}
      {buttonType === "paper" && <motion.div
          className={buttonStyle}
          onClick={chooseMove}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 24px rgba(255,255,255,0.6)",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {!isDisabled ? <FaRegHandPaper className="text-3xl md:text-8xl" /> : <Spinner className="flex h-32 items-center justify-center size-12"/>}
        </motion.div>}
      {buttonType === "scissors" && <motion.div
          className={buttonStyle}
          onClick={chooseMove}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 24px rgba(255,255,255,0.6)",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {!isDisabled ? <FaRegHandScissors className="text-3xl md:text-8xl" /> : <Spinner className="flex h-32 items-center justify-center size-12"/>}
        </motion.div>}
    </>
  );
};