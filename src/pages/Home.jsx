import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import thunderbolt from "../assets/thunderbolt.svg";
import { FiMail } from "react-icons/fi";
import tailwind from "../assets/svg-tailwind.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";

import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";
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

  return (
    <div
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Decorative SVGs */}
      <motion.img
        src={thunderbolt}
        alt="decor top"
        className="absolute top-10 right-5 w-20 h-20 md:w-40 md:h-40 opacity-40 z-0"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <motion.img
        src={thunderbolt}
        alt="decor bottom"
        className="absolute bottom-10 left-5 w-20 h-20 md:w-40 md:h-40 opacity-40 z-0"
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <div className="px-6 md:px-16 pt-36 md:pt-44 z-10 relative max-w-4xl">
        <h2 className="text-gray-400 font-poppins text-3xl sm:text-4xl md:text-5xl">
          Hey, I am <span className="text-white">Tartor</span>
        </h2>

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
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>

        <p className="mt-4 text-gray-300 text-base md:text-lg font-poppins leading-relaxed max-w-lg backdrop-blur-md bg-white/10 p-4 md:p-6 rounded-2xl shadow-lg">
          Building modern, responsive web applications with clean design and
          seamless user experiences, turning ideas into intuitive, fast, and
          engaging digital products.
        </p>

        <div className="flex items-center gap-4 mt-4 flex-wrap">
          <button className="text-white font-poppins px-6 py-2 rounded-full text-lg bg-orange-500">
            Hire me
          </button>

          <button className="p-3 text-white border border-white text-lg rounded-full">
            <FiMail />
          </button>
        </div>
      </div>

      {/* Skill Circles */}
      <div className="relative w-full flex justify-center mt-20 mb-20 md:mb-32">
        <motion.div
          className="relative w-[260px] h-[260px] md:w-[360px] md:h-[360px]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {/* Outer Circle */}
          <div className="absolute inset-0 border border-gray-400 rounded-full flex items-center justify-center">
            <img
              src={tailwind}
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-14 h-14 md:w-20 md:h-20 p-3 rounded-full 
          backdrop-blur-xl bg-white/20 border border-white/30 shadow-lg"
            />

            {/* Middle Circle */}
            <motion.div
              className="w-[180px] h-[180px] md:w-[250px] md:h-[250px] border border-gray-400 rounded-full flex items-center justify-center"
              // animate={{ rotate: -360 }}
              // transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            >
              <img
                src={html}
                className="absolute top-1/2 -translate-y-1/2 -left-8 w-14 h-14 md:w-20 md:h-20 p-3 rounded-full 
            backdrop-blur-xl bg-white/20 border border-white/30 shadow-lg"
              />

              {/* Inner Circle */}
              <motion.div
                className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] border border-gray-400 rounded-full flex items-center justify-center"
                // animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              >
                <img
                  src={css}
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-14 h-14 md:w-20 md:h-20 p-3 rounded-full 
              backdrop-blur-xl bg-white/20 border border-white/30 shadow-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
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
