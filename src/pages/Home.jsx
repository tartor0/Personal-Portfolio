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
    <div id="home" className=" relative bg-linear-to-br from-black from-30% to-orange-500 overflow-hidden">
      {/* SVG Decorations */}
      <motion.img
        src={thunderbolt}
        alt="decor top-right"
        className="fixed top-10 left-265 w-32 h-32 md:w-80 md:h-80 opacity-50 z-0"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.img
        src={thunderbolt}
        alt="decor bottom-left"
        className="fixed top-90 right-260 w-32 h-32 md:w-90 md:h-90 opacity-50 z-0"
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      <Navbar />

      <div className="px-10 pt-40 z-10 relative">
        <h2 className="text-gray-500 font-poppins text-4xl md:text-[40px]">
          Hey, I am <span className="text-orange-500">Tartor</span>
        </h2>

        <h2 className="text-2xl sm:text-3xl md:text-[55px] mt-3 text-gray-500 font-poppins flex flex-wrap items-center gap-3 leading-tight">
          A{" "}
          <span className="h-[50px] sm:h-[60px] flex text-center items-center">
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

        <h2 className="mt-4 text-gray-300 text-lg md:text-xl font-poppins leading-relaxed max-w-sm md:max-w-md backdrop-blur-md bg-white/10 p-4 md:p-6 rounded-2xl shadow-lg">
          Building modern, responsive web applications with clean design and
          seamless user experiences, turning ideas into intuitive, fast, and
          engaging digital products.
        </h2>

        <div className="flex items-center gap-4 mt-3 flex-wrap">
          <button className="text-white font-poppins p-2 px-4 rounded-full text-[18px] bg-orange-500">
            Hire me
          </button>

          <button className="p-3 text-white border-white border text-[18px] rounded-full">
            <FiMail />
          </button>
        </div>
      </div>
      {/* Bottom-right skill circles */}
      <div className="absolute top-60 left-230 flex items-center justify-center">
        <motion.div className="relative w-[300px] h-[300px] md:w-[370px] md:h-[370px]">
          {/* Outer circle */}
          <div className="absolute inset-0 border border-gray-400 rounded-full flex items-center justify-center">
            {/* Tailwind icon (outer circle) */}
            <img
              src={tailwind}
              className="absolute -top-10 right-1/2 translate-x-1/2 
        w-14 h-14 md:w-20 md:h-20 
        p-3 rounded-full backdrop-blur-xl 
        bg-white/20 border border-white/30 shadow-lg"
              alt="tailwind"
            />

            {/* Middle circle */}
            <div className="w-[200px] h-[200px] md:w-[270px] md:h-[270px] border border-gray-400 rounded-full flex items-center justify-center">
              {/* HTML icon */}
              <img
                src={html}
                className="absolute top-1/2 left-0 -translate-x-1/2 
    w-14 h-14 md:w-20 md:h-20 
    p-3 rounded-full backdrop-blur-xl 
    bg-white/20 border border-white/30 shadow-lg"
                alt="html"
              />

              {/* Inner circle */}
              <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] border border-gray-400 rounded-full flex items-center justify-center">
                {/* CSS icon */}
                <img
                  src={css}
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 
            w-14 h-14 md:w-20 md:h-20 
            p-3 rounded-full backdrop-blur-xl 
            bg-white/20 border border-white/30 shadow-lg"
                  alt="css"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
 <About id="about" className="scroll-mt-24" />
 <Skills id="skills" className="scroll-mt-24" />
 <Contact id="contact" className="scroll-mt-24" />

    </div>
  );
}
