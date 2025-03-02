import React, { useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {


    return (
      <div id="mywindow" className="w-full h-full bg-3grd">
        <motion.section
          variants={staggerContainer(1, 2)}
          initial="hidden"
          whileInView="show"
          viewPort={{ once: false, amount: 0.25 }}
          className={`sm:py-16 md:py-20 py-10 max-w-7xl mx-auto relative`}
        >
          <span className="hash-span" id={idName}>
            &nbsp; 
          </span>
          <Component />
        </motion.section>
      </div>
    ); 
  };

export default SectionWrapper;
