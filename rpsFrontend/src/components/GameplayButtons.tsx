import { FaRegHandScissors } from "react-icons/fa";
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";

type GameplayButtonsProps = {
    buttonType: "rock" | "paper" | "scissors"
}

export const GameplayButtons = ({ buttonType }: GameplayButtonsProps) => {
  console.log(buttonType);

  return (
    <>
      {buttonType === "rock" && <div className="w-[25vw] h-[25vw] flex 
      justify-center items-center rounded-full bg-[#111111]">
        <FaRegHandRock size={60}/></div>}
      {buttonType === "paper" && <div className="w-[25vw] h-[25vw] flex 
      justify-center items-center rounded-full bg-[#111111]">
        <FaRegHandPaper size={60}/></div>}
      {buttonType === "scissors" && <div className="w-[25vw] h-[25vw] flex 
      justify-center items-center rounded-full bg-[#111111]">
        <FaRegHandScissors size={60}/></div>}
    </>
  );
};