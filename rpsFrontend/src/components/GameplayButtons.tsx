import { FaRegHandScissors } from "react-icons/fa";
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { motion } from "framer-motion";

type GameplayButtonsProps = {
    buttonType: "rock" | "paper" | "scissors"
}

const buttonStyle = `w-[20vw] h-[20vw] flex justify-center cursor-pointer 
      items-center rounded-full bg-linear-to-b from-[#1a1a1a] to-[#0d0d0d]`;

export const GameplayButtons = ({ buttonType }: GameplayButtonsProps) => {
  console.log(buttonType);

  return (
    <>
      {buttonType === "rock" && <motion.div
          className={buttonStyle}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 24px rgba(255,255,255,0.6)",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <FaRegHandRock size={96} />
        </motion.div>}
      {buttonType === "paper" && <motion.div
          className={buttonStyle}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 24px rgba(255,255,255,0.6)",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <FaRegHandPaper  size={96} />
        </motion.div>}
      {buttonType === "scissors" && <motion.div
          className={buttonStyle}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 24px rgba(255,255,255,0.6)",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <FaRegHandScissors  size={96} />
        </motion.div>}
    </>
  );
};