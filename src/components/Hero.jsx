import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";
import { Bio } from "../constants";
import Avatar from "./Avatar";
import { fadeIn } from "../utils/motion";
import { mobileLinks } from "./SocialLinks";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl max-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="flex xl:flex-row mt-5 space-between">
          <div className="flex flex-col">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#00FF00]">Dipanjan</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              {" "}
              I am a{" "}
              <span className="text-[#00FF00]">
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>{" "}
            </p>
            <ul className="list-none flex flex-row sm:relative item-center justify-center md:hidden">
              {mobileLinks.map((link) => (
                <li
                  key={link.id}
                  className={
                    "flex justify-between items-center w-12 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-transparent" +
                    " " +
                    link.style
                  }
                >
                  <a
                    href={link.href ? link.href : "/"}
                    className="flex justify-between items-center w-full text-white"
                    download={link.download}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.child}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            variants={fadeIn("up", "spring", 0.5, 5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="max-w-[737px] max-h-[878px] "
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
