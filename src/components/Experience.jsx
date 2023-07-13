import { motion } from 'framer-motion';
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../style';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';


const ExperienceCard = ({exp}) => {
  return (
    <VerticalTimelineElement
      style={{
        border: "none",
      }}
      className="no-after-before"
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        position: "relative",
        border: "none",
        borderRadius: 12,
        padding: [14, 20],
        height: "fit-content",
        borderBottomWidth: 0,
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={exp.date}
      iconStyle={{ background: exp.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full bg overflow-hidden ">
          <img
            src={exp.icon}
            alt={exp.company_name}
            className="w-[100%] h-[100%] rounded-[300px]"
            object-contain
          />
        </div>
      }
    >
      <div className="w-full h-full relative overflow-hidden z-0 rounded-[12px]">
        <div className="w-full bg-[#1d1836]  h-full z-[2] rounded-[11px]">
          <h3 className="text-white text-[18px] md:text-[24px] font-bold">{exp.title}</h3>
          <p
            className="text-secondary text-[16px] font-semibold "
            style={{ margin: 0 }}
          >
            {" "}
            {exp.company_name}{" "}
          </p>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2 ">
          {exp.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[12px] md:text-{14px} pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>

        {/* <div className='absolute w-[600px] h-[600px] bg-3grad -z-[1] roll' ></div> */}
      </div>
    </VerticalTimelineElement>
  );
}

const Experience = () => {
  return (
    <div className='mt-[5rem] md:mt-[7rem]' >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so Far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className='mt-[3rem] md:mt-20 flex flex-col' >
        <VerticalTimeline>
          {experiences.map((item, idx) => (
            <ExperienceCard exp={item} key={idx} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;