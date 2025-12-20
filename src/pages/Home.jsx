import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiArrowRight } from "react-icons/fi";

import resumePDF from "../assets/Tartor-Resume.pdf";

import Navbar from "../components/Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import AnimatedBackground from "./AnimatedBackground";

export default function Home() {
  const roles = [
    "React Enthusiast",
    "Web Developer",
    "Fullstack Developer",
    "Frontend Developer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleDownloadResume = () => {
    try {
      const link = document.createElement('a');
      link.href = resumePDF;
      link.download = 'Tartor_CV.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      window.open(resumePDF, '_blank');
    }
  };

  return (
    <div id="home" className="relative overflow-hidden text-black">
      <AnimatedBackground />
      <style>
        {`
          @import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap');
          
          * {
            font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, sans-serif;
          }
        `}
      </style>

      <Navbar onDownload={handleDownloadResume} className="z-50 relative" />

      {/* Hero Section - Centered & Minimal */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-12">
        <div className="max-w-3xl w-full space-y-8">

          {/* Available Badge with green background */}
          <motion.div
            className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 px-4 py-1.5 rounded-full text-sm text-green-700 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            Available for collaborations
          </motion.div>

          {/* Name */}
          <motion.h1 
            className="text-5xl md:text-7xl font-medium tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tartor
          </motion.h1>

          {/* Role Animation */}
          <motion.div
            className="text-2xl md:text-4xl text-gray-600 font-normal flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-black font-medium"
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-600 font-normal max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Building modern web applications with clean design and seamless user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex items-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="group flex items-center gap-2 text-black px-6 py-3 rounded-full border border-black/20 hover:border-black/40 hover:bg-black/5 transition-all font-medium">
              <span>Get in touch</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="p-3 text-black border border-black/20 rounded-full hover:border-black/40 hover:bg-black/5 transition-all">
              <FiMail />
            </button>
          </motion.div>

        </div>
      </div>

      {/* Sections */}
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}