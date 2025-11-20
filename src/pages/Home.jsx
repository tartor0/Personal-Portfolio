import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import thunderbolt from "../assets/thunderbolt.svg"; // your SVG

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

  return (
    <div className="h-[200vh] relative bg-linear-to-br from-black from-30% to-orange-500 overflow-hidden">
      {/* SVG Decorations */}
      <motion.img
        src={thunderbolt}
        alt="decor top-right"
        className="absolute top-10 left-265 w-32 h-32 md:w-80 md:h-80 opacity-50 z-0"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.img
        src={thunderbolt}
        alt="decor bottom-left"
        className="absolute top-90 right-260 w-32 h-32 md:w-90 md:h-90 opacity-50 z-0"
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      <Navbar />

      <div className="px-10 pt-15 z-10 relative">
        <h2 className="text-gray-600 font-poppins-med text-4xl md:text-[40px]">
          Hey, I am <span className="text-orange-500">Tartor</span>
        </h2>

        <h2 className="text-3xl md:text-[55px] mt-3 text-white font-poppins-med flex flex-wrap items-center gap-2">
          I am a{" "}
          <span className="h-[60px] flex text-center items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 90 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>

        <h2 className="mt-4 text-gray-400 text-lg md:text-2xl lg:text-xl max-w-xl md:max-w-2xl leading-relaxed">
          Lorem
        </h2>
      </div>

      {/* Bottom-right skill circles */}
      <div className="absolute top-60 left-190 flex items-center justify-center">
        <motion.div
          className="relative w-[300px] h-[300px] md:w-[570px] md:h-[570px]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          {/* Outer circle */}
          <div className="absolute inset-0 border border-gray-400 rounded-full flex items-center justify-center">
            {/* Middle circle */}
            <div className="w-[200px] h-[200px] md:w-[450px] md:h-[450px] border border-gray-400 rounded-full flex items-center justify-center">
              {/* Inner circle */}
              <div className="w-[100px] h-[100px] md:w-[350px] md:h-[350px] border border-gray-400 rounded-full flex items-center justify-center">
                {/* Placeholder for inner image */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
