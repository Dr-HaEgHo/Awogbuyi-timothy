import { motion as m } from "framer-motion";
import React from "react";

import { styles } from "../style";
import { ComputersCanvas, StarsCanvas } from "./canvas";
import { ArrowRight } from "@iconsans/react/bold";
import { useNavigate } from "react-router-dom";
import { Instagram } from "iconsax-react";
import { Icon } from "@iconify/react";

export const Contacts = () => {
  return (
    <div className="w-full flex items-center justify-center gap-[1rem] xl:gap-[2rem]">
      <a
        href="https://instagram.com/teem.dev?igshid=OGQ5ZDc2ODk2ZA=="
        target="blank"
        className="text-white icon"
      >
        <Instagram size="30" />
      </a>
      <a
        href="https://www.linkedin.com/in/timothyawogbuyi/"
        target="blank"
        className="text-white icon"
      >
        <Icon className="text-[30px]" icon="ant-design:linkedin-outlined" />
      </a>
      <a
        href="https://github.com/Dr-HaEgHo"
        target="blank"
        className="text-white icon"
      >
        <Icon className="text-[30px] text-white" icon="codicon:github" />
      </a>
      <a
        href="https://twitter.com/TarterCim"
        target="blank"
        className="text-white icon"
      >
        <Icon className="text-[30px] text-white" icon="mingcute:twitter-line" />
      </a>
      {/* <a href="" target="blank" className="text-white icon">
        <Icon className="text-[30px] text-white" icon="ri:discord-line" />
      </a> */}
    </div>
  );
}

const Hero = () => {

  const navigate = useNavigate()

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay:0.5 }}
      exit={{ opacity: 0 }}
      className="relative w-full h-screen mx-auto"
    >
      <StarsCanvas/>
      <p className="text-[#66ffe7] fatface text-[300px] absolute leading-[240px] bottom-0 left-1/2 transform -translate-x-1/2 opacity-[0.03]" >Portfolio.</p>
      <div className="w-full font-poppins h-full absolute top-0 left-0 flex items-center justify-center grad-pic-bg ">
        <div className="w-full max-w-7xl mx-auto">
          <h1 className="text-[70px] font-medium fatface text-center">
            Hi, I'm Tim
          </h1>
          <hr className="w-1/3 h-[1px] grad-line border-none mx-auto" />
          <h3 className="text-lg mt-[2rem] font-[300] text-center">
            I Unleash creative brilliance with stunning designs and seamless
            functionality.
          </h3>
          <p className="text-base text-center font-[200] mt-[10px] w-1/2 mx-auto">
            I bring websites to life, seamlessly blending visual enchantment and
            intuitive usability. Let's embark on a journey where we redefine
            website experiences, crafting a digital realm where ingenuity reigns
            supreme.
          </p>

          <hr className="w-1/3 h-[1px] grad-line border-none mx-auto mt-[2rem]" />
          {/* INVITATION TO SEE PORTFOLIO */}
          <div onClick={() => navigate('/portfolio')} className="mx-auto mt-[3rem] w-fit flex items-center justify-center" >
            <a className="underline font-[200]" >See portfolio</a>
            <m.div
              animate={{
                x:[0, 14, 0]
              }}
              transition={{
                duration: 1.2,
                repeat:"Infinity",
                repeatType:"loop"
              }}
              className="w-[60px]"
            >
              <ArrowRight  className="w-[30px] h-[30px]" size="52"/>
            </m.div>
          </div>

          {/* SOCIAL MEDIA ICONS */}
          <div className="w-full xl:w-1/2 mx-auto mt-[4rem] p-2 ">
              <Contacts/>
          </div>
        </div>
      </div>
    </m.section>
  );
};

export default Hero;
