import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <div className="w-full h-full scroll bg-3grd">
        <motion.section
          variants={staggerContainer(1, 2)}
          initial="hidden"
          whileInView="show"
          viewPort={{ once: false, amount: 0.25 }}
          className={`${styles.padding} max-w-7xl mx-auto relative`}
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
