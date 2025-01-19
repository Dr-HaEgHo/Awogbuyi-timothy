import React, { useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Experience from "./Experience";
import { Icon } from "@iconify/react";
import { DirectRight } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { Contacts } from "./Hero";

export const ServiceCard = ({ index, title, icon }) => {
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
          className="bg-tertiary rounded-[20px] py-2 px-2 min-h-[180px] flex justify-evenly items-center flex-col"
        >
          <Icon icon={icon} className="text-[40px]" />
          <h3 className="text-white text-[16px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {

  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        exit={{ opacity: 0 }}
        className="h-1/2 w-full z-0"
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} mt-[2rem]`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText} `}>Overview.</h2>
        </motion.div>
        <motion.p
          variants={textVariant()}
          className="mt-4 text-secondary text-[15px] md:text-[17px] max-w-3xl leading-[25px] md:leading-[30px] "
        >
          I'm a skilled front-end developer with experience in JavaScript, TypeScript, and
          expertise with vuejs, React, Nextjs, and Node.Js. I love to collaborate closely with clients to create efficient, scalable, and
          user-friendly solutions that solve real-world problems. Let's work
          together to bring your ideas to life
        </motion.p>

        <motion.p
          variants={textVariant()}
          className="mt-4 text-secondary text-[15px] md:text-[17px] max-w-3xl leading-[25px] md:leading-[30px] "
        >
          I bring high quality solutions to businesses to achieve performance, profitability, higher conversion and unique high quality code.
        </motion.p>

        <motion.div variants={textVariant()}>
          <p
            className={`${styles.sectionSubText} flex items-center gap-2 text-white mt-[2rem] mb-1`}
          >
            <span>
              <DirectRight color="#000" variant="Bold" className="grad-line" />
            </span>{" "}
            WHAT HAVE I BEEN UP TO LATELY?
          </p>
          <hr className="grad-line w-[260px] h-[1px] border-none" />
          <p className="mt-4 mb-12 text-secondary text-[15px] md:text-[17px] max-w-3xl leading-[25px] md:leading-[30px] ">
            Recently, I have dived into deeper learning AI and also have worked on some personal projects that involve integrating AI into simple day-to-day apps, providing solutions one at a time. <br />
            I keep improving everyday to become a better developer who will provide better
            solutions for you.
            I am here to ensure that you are fully satisfied.
          </p>
        </motion.div>


        <Contacts />
        <Experience />
        <div className="w-full flex flex-col-reverse md:flex-row items-end justify-between">
          <div className="w-full mt-[2rem]  md:mt-0 md:w-1/2">
            <Contacts />
          </div>
          <div className="w-full  md:w-1/2">
            <button
              onClick={() => navigate("/portfolio")}
              className="w-full text-right mt-[2rem] md:mt-[4rem] mb-1 z-50 transform hover:opacity-75 transition duration-200 ease-in-out"
            >
              wanna see my projects?
            </button>
            <hr className="grad-line w-full ml-auto border-none h-[1px]" />
          </div>
        </div>

        <p className="text-[#66ffe7] fatface text-[300px] z-[0] fixed leading-[240px] bottom-0 left-1/2 transform -translate-x-1/2 opacity-[0.03] whitespace-nowrap pointer-events-none">
          About Me.
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");

 
// 369 X 263