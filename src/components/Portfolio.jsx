import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Icon } from "@iconify/react";
import { ArrowRight, DirectRight } from "iconsax-react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";

const PortfolioCard = ({index, item, handlePortfolio, setParam}) => {

  const [isReady, setIsReady] = useState(false)

  const makeReady = () => {
    setTimeout(() => { 
      setIsReady(true)
    }, 5000)
    clearTimeout();
  }

  useEffect(() => {
    makeReady();
  }, [])

    return (
      <motion.button
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
        className="w-full aspect-[1.4] rounded-[16px] z-0 overflow-hidden relative flex items-end foliocard"
        onClick={() => {
          handlePortfolio(item);
          setParam(item.name);
        }}
      >
        <div className="w-full z-20 py-3 px-4 bg-yelow-300 flex items-center justify-between actions">
          <h3 className="text-sm grad-text font-[500] bg-clip-text text-white">
            {item.name}
          </h3>
          <div className="flex items-center gap-3 ">
            <a href={item.live_link} target="blank">
              <ArrowRight
                color="#fff"
                className="transform -rotate-45 bg-[#ffffff30] h-[30px] w-[30px] p-[6px] rounded-[40px] hover:scale-[1.04] active:scale-[1.04] "
              />
            </a>
            { item.source_code_link !== "" && (<a
              href={item.source_code_link}
              target="blank"
              className="bg-[#ffffff30] h-[30px] px-[10px] rounded-[40px] flex items-center justify-center text-sm font-[300] hover:scale-[1.04]"
            >
              GitHub
            </a>)}
          </div>
        </div>
        {item.video ? (
          <div className="absolute z-[-20] w-full top-0 left-0 h-[100%] flex">
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

  const navigate = useNavigate()
  // const offSet = window.pageYOffset

  const [detailsOpen, setDetailsOpen] = useState(false);
  const [newDetails, setNewDetails] = useState({})
  const [param, setParam] = useState("")

  const handlePortfolio = (tag) => {
    setDetailsOpen(true);
    window.scrollTo(0, 180)
    setNewDetails(tag);

    console.log(param + ":" + newDetails )
  } 

  useEffect(() => {
    
   }, [param])
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        exit={{ opacity: 0 }}
        className="h-1/2 w-full"
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>SEE WHAT I'VE BEEN UP TO</p>
          <h2 className={styles.sectionHeadText}>My Projects.</h2>
        </motion.div>
        <div
          className={
            detailsOpen === true ? "detailsWrapOpen"
              : "detailsWrapClose"
          }
        >
          <ProjectDetails param={param} newDetails={newDetails} />
        </div>
        {/* <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ">
          Walk with me as I take you through 
        </p> */}

        <div className="w-full py-[1rem] mt-[5rem] work-grid">
          {projects?.map((item, index) => (
            <PortfolioCard
              handlePortfolio={handlePortfolio}
              key={index}
              index={index}
              item={item}
              param={param} 
              setParam={setParam}
            /> 
          ))}
        </div>
        <p className="text-[#66ffe7] fatface text-[300px] z-[0] fixed leading-[240px] bottom-0 left-1/2 transform -translate-x-1/2 opacity-[0.03] whitespace-nowrap pointer-events-none">
          Projects.
        </p>
      </motion.div>
    </>
  );
}

export default SectionWrapper(Portfolio, 'portfolio' )