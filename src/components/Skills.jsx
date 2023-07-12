import React, { useState } from 'react'
import { SectionWrapper } from '../hoc'
import  {motion as m } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../style';
import { mobile } from '../assets';
import { services, technologies } from '../constants';
import { ServiceCard } from './About';

const SkillItem = ({item, index}) => {
  return (
    <m.div
      variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
      className="flex w-full flex-col items-start gap-3"
    >
      <img
        src={item.icon}
        alt="mobile.png"
        className="w-10 h-10 object-contain"
      />
      <h4>{item.name}</h4>
      <p className="text-xs font-[200] leading-[20px] tracking-wider ">
        As a highly skilled React frontend web developer, I bring a wealth of
        experience and expertise in building dynamic and visually
      </p>
    </m.div>
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
          </div>
        </m.div>
      </div>
      {/* MAIN DIV */}
      <div className="w-[64%] ml-auto py-[1rem] z-10 flex flex-col items-start">
        {/* TOP PART WHERE I MAPPED THE SERVICE CARDS */}
        <div className="w-full flex gap-[20px] mb-[4rem] z-50">
          {services.map((item, idx) => (
            <ServiceCard key={item.title} index={idx} {...item} />
          ))}
        </div>

        {/* BOTTOM PART FOR SERVICE ITEM */}
        <div className="w-full min-h-fit sk-grid">
          {technologies?.map((item, index) => (
            <SkillItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
      <p className="text-[#66ffe7] fatface text-[300px] z-0 fixed leading-[240px] bottom-0 left-1/2 transform -translate-x-1/2 opacity-[0.03] whitespace-nowrap">
        My Skills.
      </p>
    </m.div>
  );
}

export default SectionWrapper(Skills, "skills");