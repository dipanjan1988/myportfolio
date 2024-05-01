import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import SocialLinks from "../components/SocialLinks";

export const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <div
        className={`${
          idName === "feedbacks" || idName === "works"
            ? "bg-explosion-pattern mix-blend-color-dodge"
            : "bg-hero-pattern"
        } bg-cover bg-no-repeat bg-center `}
      >
        <SocialLinks />
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
          <span className="hash-span" id={idName}>
            &nbsp;
          </span>
          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2b71]"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#2e2257]"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          ></motion.div>
          <Component />
        </motion.section>
      </div>
    );
  };

export default StarWrapper;
