import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion as m } from "framer-motion";
import { About, Contact, Hero, Skills} from ".";
import Portfolio from "./Portfolio";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
