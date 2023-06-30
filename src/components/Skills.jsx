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
      className="relative w-full bg-yellow-300"
    >

      {/* FIXED DIV */}
      <div className=' bg-primary p-[5rem] fixed top-1/2 transform -translate-y-1/2' >

      </div>

      {/* MAIN DIV */}
      <div className='w-[64%] h-[200vh] ml-auto py-[1rem] bg-secondary' >
        Timothy Awogbuyi Ibukunoluwa is a wonderful developer
      </div>


      <p className="text-[#66ffe7] fatface text-[300px] z-[0] fixed leading-[240px] bottom-0 left-1/2 transform -translate-x-1/2 opacity-[0.03] whitespace-nowrap">
        My Skills.
      </p>
    </m.div>
  );
}

export default SectionWrapper(Skills, "skills");