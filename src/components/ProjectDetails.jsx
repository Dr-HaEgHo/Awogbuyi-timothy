import { ArrowDown, Play, VolumeHigh, VolumeSlash } from "iconsax-react";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

const ProjectDetails = ({
  indx,
  param,
  newDetails,
  descOpen,
  setDescOpen,
  isPlaying,
  setIsPlaying,
  isMuted,
  setIsMuted,
  cta,
}) => {
  const videoRef = useRef(null); // Reference to the video element
  const [currentDetail, setCurrentDetail] = useState(newDetails[0]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted; // Toggle the muted property
      setIsMuted(!isMuted); // Update state
    }
  };

  // const togglePla = () => {
  //   if (videoRef.current) {
  //     if (videoRef.current.paused) {
  //       videoRef.current.play(); // Start playing the video
  //     } else {
  //       videoRef.current.pause(); // Pause the video
  //     }
  //     setIsPlaying(!videoRef.current.paused); // Update the isPlaying state
  //   }
  // };

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play(); // Start playing the video
      } else {
        videoRef.current.pause(); // Pause the video
      }
    } 
  
    // setIsPlaying(!videoRef.current.paused); // Update the isPlaying state
  }, [isPlaying]);

  return (
    <div className="w-full h-fit flex items-center gap-5 flex-col md:flex-row justify-between">
      {/* CONTENT IMAGE DIV */}
      <div className="w-full md:w-[60%] !aspect-[1.77] bg-[#ffffff30] flex items-center rounded-[12px] overflow-hidden relative">
        {/* TOGGLE MUTED BUTTON */}
        {newDetails && newDetails.image && newDetails.video && (
          <div
            onClick={toggleMute}
            className="w-10 h-10 bg-white z-[10] hoverActiveScale flex items-center justify-center rounded-full shadow-lg  absolute top-2 right-2"
          >
            {isMuted ? (
              <VolumeHigh size="32" color="#000" />
            ) : (
              <VolumeSlash size="32" color="#000" />
            )}
          </div>
        )}

        {/* TOGGLE FULLSCREEN BUTTON */}
        {/* {
        newDetails && newDetails.image && newDetails.video && (<div onClick={toggleMute} className="w-10 h-10 bg-white z-[10] hoverActiveScale flex items-center justify-center rounded-full shadow-lg  absolute top-2 right-14">
          {isMuted ? (
              <VolumeHigh size="32" color="#000" />
            ) : (
              <VolumeSlash size="32" color="#000" />
            )}
        </div>)
       } */}

        {/* TOGGLE PLAY */}
        {newDetails && newDetails.image && newDetails.video ? (
          <div
            onClick={() => setIsPlaying(!isPlaying)}
            className={`w-full h-full ${
              isPlaying === false && "bg-blackTrans40"
            } z-[9] hoverActiveScale flex items-center justify-center  absolute top-0 right-0`}
          >
            {isPlaying === false && (
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hoverActiveScale">
                <Play size="32" color="#000" />
              </div>
            )}
          </div>
        ) : null}

        {newDetails && newDetails.image && newDetails.video ? (
          <video
            key={newDetails.name}
            ref={videoRef}
            // autoPlay
            muted
            poster={
              newDetails && newDetails.image ? `./${newDetails.image}` : ""
            }
            className="w-full  object-cover"
          >
            <source
              src={
                newDetails && newDetails.video ? `./${newDetails.video}` : ""
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={newDetails ? newDetails.image : ""} alt="" />
        )}

        {/* <div className="absolute z-[-20] w-full top-0 left-0 h-[100%] flex">
          <ReactPlayer
            url={newDetails ? newDetails.video : ""}
            playIcon={true}
            autoplay
            playing
            width="100%"
            height="auto"
            // light={isReady === true ? false : item.image}
            loop
          />
        </div> */}
        {/* <img
          src={newDetails ? newDetails.image : ""}
          alt={newDetails ? newDetails.name : ""}
          className="w-full object-cover"
        /> */}
      </div>

      {/* CONTENT DIV */}
      <div className="w-full flex-[1] mt-6 md:mt-0 max-h-[440px] scroll flex flex-col items-start font-poppins bg-[#ffffff14] rounded-xl backdrop:blur-[50px] px-6 py-8">
        <h2 className="text-[46px] md:text-[52px] text-[#5bffe7]">
          {indx + 1 > 9 ? "" : 0}
          {indx + 1}
        </h2>
        <h4 className="text-[24px] md:text-[34px] text-white font-[400]">
          {newDetails.name}
        </h4>
        <p className="text-xs md:text-sm leading-5 md:leading-7 tracking-wide mt-2">
          {newDetails.description}
        </p>

        {/* BUTTONS  */}
        <div className="w-full flex items-center gap-2 mt-8">
          {newDetails.source_code_link !== "" && (
            <a
              href={newDetails.source_code_link}
              target="blank"
              className="px-5 border border-[#5bffe770] text-sm 2xl:text-base py-[6px] bg-[#5bffe720] hover:bg-[#5bffe730] transition duration-200 rounded-[100px]"
            >
              GitHub
            </a>
          )}
          {newDetails.live_link !== "" && (
            <a
              href={newDetails.live_link}
              target="blank"
              className="px-8 border border-[#ff25be70] text-sm 2xl:text-base py-[6px] bg-[#ff25be20] hover:bg-[#ff25be30] transition duration-200 rounded-[100px]"
            >
              Site
            </a>
          )}
        </div>

        <p className="w-full flex items-center gap-2 mt-14 text-sm font-[300] tracking-wide">
          Tech used:
        </p>
        <hr className="mb-[6px] border-none h-[1px] w-[80px] grad-line " />
        {/* TAGS  */}
        <div className="w-full flex items-center flex-wrap gap-2 ">
          {newDetails.tags ? (
            newDetails.tags.map((item, index) => (
              <button
                key={index}
                className="px-5 text-[10px] font-[300] tracking-wide py-[6px] bg-[#5bffe720] hover:bg-[#5bffe730] transition duration-200 rounded-[100px]"
              >
                {item.name}
              </button>
            ))
          ) : (
            <p>There are no tags yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
