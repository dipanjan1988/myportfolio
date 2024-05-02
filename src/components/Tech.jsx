import React from "react";
import { motion } from "framer-motion";
import { BallCanvas, StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useState } from "react";

const TechCard = ({ technology }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const flipCard = () => {
    if (!isAnimating) {
      console.log("inside flipCard");
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };
  return (
    <div className="flex items-center justify-center bg-transparent h-[150px] cursor-pointer">
      <div
        className="flip-card w-[160px] h-[136px] rounded-md"
        onClick={flipCard}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          exit={{ opacity: 0, rotateY: -180 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4">
            <BallCanvas icon={technology.icon} />
          </div>
          <div className="flip-card-back flex flex-col justify-center items-center w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-2">
            <h1 className="text-xl">{technology.name}</h1>
            <h4 className="text-xs flex flex-col justify-center items-center">
              <span>Proficiency: </span>
              <span>{technology.proficiency}</span>
            </h4>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Tech = () => {
  return (
    <>
      <section className="relative w-full h-screen mx-auto mt-12">
        <motion.div variants={textVariant}>
          <p className={styles.sectionSubText}>My Tech Stack</p>
          <h2 className={styles.sectionHeadText}>Technologies.</h2>
        </motion.div>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology, index) => (
            <TechCard index={index} technology={technology} />
          ))}
          <StarsCanvas />
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Tech, "technology");
