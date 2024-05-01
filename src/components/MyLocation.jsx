import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { slideIn } from "../utils/motion";

const MyLocation = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Current Location</p>
          <h2 className={styles.sectionHeadText}>Location</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="blue-black-gradient flex-[0.75] bg-black-100 p-8 rounded-2xl"
          style={{
            position: "relative",
            top: "50%",
            "z-index": 999999,
            width: "267px",
            padding: "20px",
            color: "#fff",
            "font-family": "Helvetica",
            "font-size": "17px",
            "font-weight": 300,
            animation: "fadeIn 1s 1.5s",
            "animation-fill-mode": "forwards",
          }}
        >
          Dipanjan Ghosh,
          <br />
          Finland,
          <br />
          Paulankatu 2B, 112 <br />
          Helsinki, 00240 <br />
          <br />
          <span>dipanjanghosh1988@gmail.com</span>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
          style={{
            overflow: "hidden",
            "padding-bottom": "56.25%",
            position: "relative",
            height: 0,
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.1834681030573!2d24.926920877409096!3d60.19424657504474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469209f4b486cfff%3A0x6137a09afd6d60b1!2sPaulankatu%202%20B%2C%2000240%20Helsinki!5e0!3m2!1sen!2sfi!4v1712479534723!5m2!1sen!2sfi"
            width="1000"
            height="450"
            allowfullscreen=""
            loading="lazy"
            title="My Location"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(MyLocation, "mylocation");
