import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Tech from "./Tech";
import Works from "./Works";
import Feedbacks from "./Feedbacks";
import MyLocation from "./MyLocation";
import Contact from "./Contact";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="technology" element={<Tech />} />
          <Route path="work" element={<Works />} />
          <Route path="feedbacks" element={<Feedbacks />} />
          <Route path="mylocation" element={<MyLocation />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Layout;
