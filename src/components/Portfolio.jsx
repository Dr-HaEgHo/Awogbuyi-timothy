import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Icon } from "@iconify/react";
import { ArrowDown, ArrowRight, DirectRight } from "iconsax-react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import { StarsCanvas } from "./canvas";

const PortfolioCard = ({
  index,
  item,
  handlePortfolio,
  setParam,
  isPlaying,
  setIsPlaying,
  isMuted,
  setIsMuted,
}) => {
  const [isReady, setIsReady] = useState(false);

  const makeReady = () => {
    setTimeout(() => {
      setIsReady(true);
    }, 5000);
    clearTimeout();
  };
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play(); // Start playing the video
      } else {
        videoRef.current.pause(); // Pause the video
      }
      setIsPlaying(!videoRef.current.paused); // Update the isPlaying state
    }
  };

  useEffect(() => {
    makeReady();
  }, []);

  return (
    <div className="flex- p-2 rounded-[20px] bg-whiteTrans30">
      <div className="top w-full">
        <motion.button
          variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
          className="w-full aspect-[1.77] border border-whiteTrans30 rounded-[8px] md:rounded-[16px] z-0 overflow-hidden relative flex items-end foliocard"
          onClick={() => {
            handlePortfolio(item, index);
            setParam(item.name);
            setIsPlaying(false);
            setIsMuted(true);
          }}
        >
          <img
            className="z-[-20] h-auto w-full object-cover"
            src={item.image}
          />
        </motion.button>
        <div className="w-full h-full z-20 py-1 md:py-3 px-1 md:px-2 flex items-center md:items-end justify-between">
          <h3 className="md:text-sm grad-text font-[500] bg-clip-text text-white">
            {item.name}
          </h3>
          <div className="flex items-center gap-3 ">
            <a href={item.live_link} target="blank">
              <ArrowRight
                color="#fff"
                className="transform -rotate-45 bg-[#ffffff30] h-[30px] w-[30px] p-[6px] rounded-[40px] hover:scale-[1.04] active:scale-[1.04] "
              />
            </a>
            {item.source_code_link !== "" && (
              <a
                href={item.source_code_link}
                target="blank"
                className="bg-[#ffffff30] h-[30px] px-[10px] rounded-[40px] flex items-center justify-center text-sm font-[300] hover:scale-[1.04]"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="bottom"></div>
    </div>
  );
};

const Portfolio = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null); // Reference to the video element

  // const offSet = window.pageYOffset

  const [detailsOpen, setDetailsOpen] = useState(true);
  const [newDetails, setNewDetails] = useState({});
  const [indx, setIndx] = useState("");
  const [param, setParam] = useState("");
  const [descOpen, setDescOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Mute state
  const [isPlaying, setIsPlaying] = useState(false); // playing state

  const handlePortfolio = (tag, index) => {
    setDetailsOpen(true);
    window.scrollTo(0, 180);
    setNewDetails(tag);
    setIndx(index);

    console.log(param + ":" + newDetails);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play(); // Start playing the video
      } else {
        videoRef.current.pause(); // Pause the video
      }
      setIsPlaying(!videoRef.current.paused); // Update the isPlaying state
    }
  };

  useEffect(() => {
    if (!projects) {
      return;
    }
    setNewDetails(projects[0]);
  }, []);

  return (
    <>
      {projects ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          exit={{ opacity: 0 }}
          className="h-1/2 w-full"
        >
          <div className="w-full h-full pointer-events-none">
            <StarsCanvas />
          </div>
          <motion.div variants={textVariant()} className="w-full ">
            <p className={`${styles.sectionSubText}`}>
              SEE WHAT I'VE BEEN UP TO
            </p>
            <h2 className={styles.sectionHeadText}>My Projects.</h2>
          </motion.div>
          <div
            className={
              detailsOpen === true ? "detailsWrapOpen" : "detailsWrapClose"
            }
          >
            <ProjectDetails
              param={param}
              indx={indx}
              newDetails={newDetails}
              descOpen={descOpen}
              setDescOpen={setDescOpen}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              isMuted={isMuted}
              setIsMuted={setIsMuted}
              cta={togglePlay}
            />
          </div>

          {/* <div className="w-[160px] bottom-4 left-4 show mt-4 flex items-center gap-2 overflow-hidden px-2 py-2">
            <div className="w-10 h-10 rounded-full shadow-md shadow-gray-600">
              <ArrowDown
                color="#212121"
                onClick={() => setDescOpen(!descOpen)}
                size={62}
                className={`transform ${
                  descOpen ? "-rotate-180" : ""
                }  transition duration-300 bg-[#ffffff] h-10 w-10 p-[6px] rounded-[40px] hover:scale-[1.04] active:scale-[1.04]`}
              />
            </div>
            <p className="font-[300] text-sm text-[#aaa]">
              {descOpen ? "Hide Details" : "Show Details"}
            </p>
          </div> */}

          {/* <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ">
          Walk with me as I take you through 
        </p> */}

          {/* <div className="w-full mb-20">
            <div
              className={`w-full ${
                descOpen ? "h-fit" : "h-0"
              } transition duration-300 overflow-hidden bg-[#ffffff14] mt-8 rounded-xl`}
            >
              <div className="py-8 px-6">
                <h2 className="text-5xl font-[500]">Project Details.</h2>
                <p className="font-[300] text-lg py-8">
                  Lorem ipsum dolor sit amet, doloremque. Perspiciatis natus
                  magni autem exercitationem perferendis unde? Ab numquam ipsam
                  vitae iure nemo eum, animi porro ex recusandae architecto
                  reiciendis commodi cupiditate nulla deserunt natus? Distinctio
                  nemo neque ea obcaecati, accusamus sapiente deleniti, et
                  dolorem, magni tenetur quia aspernatur ut possimus officiis.
                  Odit iure tenetur quas eos sit, mollitia quaerat aut
                  aspernatur modi maiores, quo nesciunt veniam.
                </p>
              </div>
            </div>
          </div> */}

          <motion.div className="w-full mt-12">
            <p className={`${styles.sectionSubText}`}></p>
            <h2 className={styles.sectionHeadText}>More Projects.</h2>
          </motion.div>

          <div className="w-full py-[1rem] mt-[3rem] md:mt-[1rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-0 !mb-8">
            {projects?.map((item, index) => (
              <PortfolioCard
                handlePortfolio={handlePortfolio}
                key={index}
                index={index}
                item={item}
                param={param}
                setParam={setParam}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                isMuted={isMuted}
                setIsMuted={setIsMuted}
              />
            ))}
          </div>
          <p className="text-[#66ffe7] fatface text-[300px] z-[0] fixed leading-[240px] bottom-0 left-1/2 transform -translate-x-1/2 opacity-[0.03] whitespace-nowrap pointer-events-none">
            Projects.
          </p>
        </motion.div>
      ) : (
        <motion.div variants={textVariant()} className="w-full ">
          <p className={`${styles.sectionSubText}`}>SEE WHAT I'VE BEEN UP TO</p>
          <h2 className={styles.sectionHeadText}>My Projects.</h2>
        </motion.div>
      )}
    </>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
