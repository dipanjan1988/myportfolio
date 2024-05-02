import React, { useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { ComputersCanvas } from "./canvas";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const titleRef = useRef();
  const scrollToDiv = () => {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <section className="relative w-full h-screen mx-auto">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Results-oriented Senior Full Stack consultant with 12 years of
          experience in the financial and telecom sector, specializing in
          sustainable finance and climate transition initiatives. Proficient in
          Java development, including Spring Boot, with expertise in system
          integration using REST and Kafka. Skilled in web development with
          React (5y+ experience) and adept in mobile development with React
          Native. Proven track record of delivering innovative solutions for
          large-scale projects. Strong commitment to continuous learning and
          development, with a collaborative mindset and proficiency in agile
          methodologies. Excited about the opportunities to contribute to
          strategic goals while leveraging technology to drive positive
          environmental and social impact.
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        <div className="xs:bottom-10 bottom-32 w-full flex justify-center items-center mt-4">
          <button href="#" onClick={() => scrollToDiv()}>
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </button>
        </div>

        <div
          id="scrollToSection"
          ref={titleRef}
          className="w-full h-[1164px] flex justify-center items-center"
        >
          <ComputersCanvas />
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(About, "about");
