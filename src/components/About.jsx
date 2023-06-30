import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Experience from "./Experience";
import { Icon } from "@iconify/react";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full transition z-20 duration-100">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
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
          <Icon icon={icon} className="text-[70px]" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        exit={{ opacity: 0 }}
        className="h-1/2 w-full "
      >
        <p className="text-[#66ffe7] fatface text-[300px] z-[0] fixed leading-[240px] bottom-0 left-1/2 transform -translate-x-1/2 opacity-[0.03] whitespace-nowrap">
          About Me.
        </p>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frame works like React, Node.Js, and
          Three.Js. I'm a quicklearner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-10 z-50">
          {services.map((item, idx) => (
            <ServiceCard key={item.title} index={idx} {...item} />
          ))}
        </div>
        <Experience />
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
