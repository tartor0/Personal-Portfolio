import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail } from "react-icons/fi";

import Navbar from "../components/Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import AnimatedBackground from "./AnimatedBackground";
import ResumePreview from "./ResumePreview";
import { handleDownloadPDF } from "../utils/pdfGenerator";

export default function Home() {
  const roles = [
    "React Enthusiast",
    "Web Developer",
    "Fullstack Developer",
    "Frontend Developer",
  ];

  const [index, setIndex] = useState(0);
  const resumeRef = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const downloadPDF = () => handleDownloadPDF(resumeRef);

  return (
    <div id="home" className="relative overflow-hidden text-white">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Navbar */}
      <Navbar onDownload={downloadPDF} className="z-50 relative" />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col justify-start h-auto pt-28 md:pt-32 px-6 md:px-16 max-w-4xl pb-12">

        {/* Available Indicator */}
        <motion.div
          className="mb-6 w-fit inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 px-4 py-1 rounded-full backdrop-blur-md shadow-lg font-poppins"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="w-2 h-2 bg-green-400 rounded-full relative">
            <span className="absolute inset-0 w-full h-full rounded-full bg-green-400 animate-ping"></span>
          </span>
          <p className="text-green-300 text-xs sm:text-sm">
            Available for collaborations
          </p>
        </motion.div>

        {/* Heading */}
        <h1 className="text-gray-400 font-poppins text-3xl sm:text-4xl md:text-5xl leading-tight">
          Hey, I am <span className="text-white">Tartor</span>
        </h1>

        {/* Role Animation */}
        <h2 className="text-xl sm:text-3xl md:text-[55px] mt-3 text-gray-300 font-poppins flex flex-wrap items-center gap-2 leading-tight">
          A{" "}
          <span className="h-[45px] sm:h-[55px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-white font-semibold"
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>

        {/* Description */}
        <motion.p
          className="mt-4 text-gray-300 text-base md:text-lg font-poppins leading-relaxed max-w-lg backdrop-blur-md bg-white/10 p-4 md:p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Building modern, responsive web applications with clean design and
          seamless user experiences — turning ideas into intuitive, fast, and
          engaging digital products.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex items-center gap-4 mt-6 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button className="text-white font-poppins px-6 py-2 rounded-2xl text-lg bg-gray-500/50 hover:bg-gray-500 border transition">
            Hire me
          </button>

          <button className="p-3 text-white border border-white text-lg rounded-full hover:bg-white/20 transition">
            <FiMail />
          </button>
        </motion.div>
      </div>

      {/* Sections */}
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />

      {/* Hidden ResumePreview for PDF */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: "-9999px",
          width: "210mm",
          background: "white",
          zIndex: 999,
        }}
      >
        <ResumePreview ref={resumeRef} />
      </div>
    </div>
  );
}
