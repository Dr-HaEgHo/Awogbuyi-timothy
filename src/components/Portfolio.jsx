import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Icon } from "@iconify/react";
import { ArrowRight, DirectRight } from "iconsax-react";
import ReactPlayer from "react-player";

const PortfolioCard = ({index, item}) => {

  const [isReady, setIsReady] = useState(false)

  const makeReady = () => {
    setTimeout(() => { 
      setIsReady(true)
    }, 5000)
    clearTimeout();
  }

  useEffect(() => {
    makeReady();
  })

    return (
      <motion.button
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
        className="w-full  bg-white aspect-[1.4] rounded-[16px] z-0 overflow-hidden relative flex items-end foliocard"
        onClick={() => {}}
      >
        
        <div className="w-full z-20 py-3 px-4 bg-yelow-300 flex items-center justify-between actions">
          <h3 className="text-sm grad-text font-[500] bg-clip-text text-white">
            {item.name}
          </h3>
          <div className="flex items-center gap-3 ">
            <ArrowRight
              color="#fff"
              className="transform -rotate-45 bg-[#ffffff30] h-[30px] w-[30px] p-[6px] rounded-[40px] hover:scale-[1.04] active:scale-[1.04] "
            />
            <button className="bg-[#ffffff30] h-[30px] px-[10px] rounded-[40px] flex items-center justify-center text-sm font-[300] hover:scale-[1.04]">
              GitHub
            </button>
          </div>
        </div>
        {item.video ? (
          <div className="absolute z-[-20] w-full top-0 left-0 h-[100%] flex bg-pink-300">
            <ReactPlayer
              url={item.video}
              playing
              width="100%"
              height="auto"
              light={isReady === true ? false : item.image}
              loop
            />
          </div>
        ) : (
          <img className="z-[-20] absolute h-full w-auto" src={item.image} />
        )}
      </motion.button>
    );
}

const Portfolio = () => {
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
          Projects
        </p>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>SEE WHAT I'VE BEEN UP TO</p>
          <h2 className={styles.sectionHeadText}>My Projects.</h2>
        </motion.div>
        {/* <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ">
          Walk with me as I take you through 
        </p> */}

              <div className="w-full py-[1rem] mt-[5rem] work-grid" >
                  {projects?.map((item, index) => <PortfolioCard key={index} index={index} item={item} />)}
            </div>
      </motion.div>
    </>
  );
}

export default SectionWrapper(Portfolio, 'portfolio' )