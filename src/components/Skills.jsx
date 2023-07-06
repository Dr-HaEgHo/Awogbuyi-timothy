import React, { useState } from 'react'
import { SectionWrapper } from '../hoc'
import  {motion as m } from 'framer-motion'
import { textVariant } from '../utils/motion';
import { styles } from '../style';
import { mobile } from '../assets';
import { services } from '../constants';
import { ServiceCard } from './About';

const SkillItem = () => {
  return (
    <div className="flex w-[48%] flex-col items-start gap-3">
      <img
        src={mobile}
        alt="mobile.png"
        className="w-10 h-10 object-contain bg-pink-200"
      />
      <h4>HTML 5</h4>
      <p className="text-sm font-[300] leading-[22px] tracking-wider ">
        As a highly skilled React frontend web developer, I bring a wealth of
        experience and expertise in building dynamic and visually
      </p>
    </div>
  );
}

const Skills = () => {

  const [skillsTab, setSkillsTab] = useState("skills")

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      exit={{ opacity: 0 }}
      className="relative w-full"
    >
      {/* FIXED DIV */}
      <div className="p-[1rem] fixed top-1/2 z-10 transform w-[30%] max-w-[380px] -translate-y-1/2">
        <m.div variants={textVariant()} className="flex flex-col gap-[2rem]">
          <div className="w-full flex flex-col gap-[1.4rem]">
            <p className={styles.sectionSubText}>SERVICES</p>
            <h2 className="text-5xl font-black">MY SKILLSET?</h2>
            <hr className="w-[40%] h-[2px] border-none grad-line" />
          </div>
          <div className="w-full ">
            <p className="text-left text-sm font-[300] leading-6 tracking-wider">
              As a highly skilled React frontend web developer, I bring a wealth
              of experience and expertise in building dynamic and visually
            </p>
            <button className="">VIEW ALL SERVICES</button>
          </div>
        </m.div>
      </div>

      {/* MAIN DIV */}~
      <div className="w-[64%] h-[200vh] ml-auto py-[1rem] z-10 flex flex-col items-start">
        
        {/* TOP PART WHERE I MAPPED THE SERVICE CARDS */}
        <div className="w-full flex gap-[20px] mb-[4rem] z-50">
          {services.map((item, idx) => (
            <ServiceCard key={item.title} index={idx} {...item} />
          ))}
        </div>

        {/* BOTTOM PART FOR SERVICE ITEM */}
        <div className="w-full flex items-start justify-between" >
          <SkillItem />
          <SkillItem />
        </div>
      </div>

      <p className="text-[#66ffe7] fatface text-[300px] z-0 fixed leading-[240px] bottom-0 left-1/2 transform -translate-x-1/2 opacity-[0.03] whitespace-nowrap">
        My Skills.
      </p>
    </m.div>
  );
}

export default SectionWrapper(Skills, "skills");