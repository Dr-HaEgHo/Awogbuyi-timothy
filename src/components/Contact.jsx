import React from 'react';
import { SectionWrapper } from '../hoc';
import { motion as m } from 'framer-motion';
import { styles } from '../style';
import { fadeIn, slideIn, textVariant } from '../utils/motion';
import { experiences } from '../constants';
import { Contacts } from './Hero';
import Earth from './canvas/Earth';
import { StarsCanvas } from './canvas';


const Contact = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      exit={{ opacity: 0 }}
      className="mt-[3rem]"
    >
      <StarsCanvas/>
      <m.div variants={textVariant()}>
        <p className={styles.sectionSubText}>WANT TO WORK WITH ME?</p>
        <h2 className={styles.sectionHeadText}>Contact Me.</h2>
      </m.div>
      <m.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] w-full xl:w-[40%] max-w-3xl leading-[30px] "
      >
        I create stunning digital experiences tailored to ensuring that your
        brand stands out.
      </m.p>
      <div className="w-full mt-[3rem] z-[2234567898765432] flex items-stretch justify-between p-8">
        {/* designs */}
        <div className="w-[40%] flex flex-col items-center gap-4 justify-between ">
          <m.div variants={slideIn("left", "tween", 0.2, 1)} className="h-full w-full">
            <Earth />
          </m.div>
          <Contacts style={{zIndex: 8765432}} />
        </div>

        {/* Form */}
        <m.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="w-[50%] maxw-[400px]"
        >
          <form action="" className="w-full flex flex-col gap-4 ct-form">
            <div className="w-full flex items-center justify-between gap-4 ">
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-[6px] text-[#ffffff90] bg-[#ffffff20] focus:outline-none focus:bg-[#ffffff30] text-sm font-[300] px-[10px] py-[12px] placeholder:text-[#ffffff60]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-[6px]  text-[#ffffff90] bg-[#ffffff20] focus:outline-none focus:bg-[#ffffff30] text-sm font-[300] px-[10px] py-[12px] placeholder:text-[#ffffff60]"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-[6px] text-[#ffffff90] bg-[#ffffff20] focus:outline-none focus:bg-[#ffffff30] text-sm font-[300] px-[10px] py-[12px] placeholder:text-[#ffffff60]"
            />
            <textarea
              name=""
              placeholder="How can I be of help?"
              id=""
              cols="30"
              rows="7"
              className="bg-[#ffffff20] backdrop:blur-lg text-[#ffffff90] font-sm font-[300] focus:bg-[#ffffff30] focus:outline-none rounded-[6px] p-[10px] placeholder:text-[#ffffff60]"
            ></textarea>
            <button>Send</button>
          </form>
        </m.div>
      </div>

      <p className="text-[#66ffe7] pointer-events-none fatface text-[250px] 2xl:text-[300px] z-0 fixed leading-[240px] bottom-0 left-1/2 transform -translate-x-1/2 opacity-[0.03] whitespace-nowrap">
        Contact Me.
      </p>
    </m.div>
  );
}

export default SectionWrapper(Contact, 'contact')