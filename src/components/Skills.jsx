import React from 'react'
import { SectionWrapper } from '../hoc'
import  {motion as m } from 'framer-motion'

const Skills = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      exit={{ opacity: 0 }}
      className="relative h-full"
    >
      Skills
      <p className="text-[#66ffe7] fatface text-[300px] z-[0] fixed leading-[240px] bottom-0 left-1/2 transform -translate-x-1/2 opacity-[0.03] whitespace-nowrap">
        My Skills.
      </p>
    </m.div>
  );
}

export default SectionWrapper(Skills, "skills");