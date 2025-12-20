import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaDatabase,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiSpringboot,
  SiVercel,
  SiPostgresql,
  SiPostman,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills({ id, className = "" }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const allSkills = [
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3Alt, name: "CSS" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaReact, name: "React" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiVite, name: "Vite" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: SiExpress, name: "Express" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiSpringboot, name: "SpringBoot" },
    { icon: FaGithub, name: "GitHub" },
    { icon: SiPostman, name: "Postman" },
    { icon: SiVercel, name: "Vercel" },
  ];

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...allSkills, ...allSkills];

  const [hoverCount, setHoverCount] = useState(0);
  const [halfWidth, setHalfWidth] = useState(0);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const scrollerRef = useRef(null);
  const originalDuration = 30;

  useEffect(() => {
    if (scrollerRef.current) {
      setHalfWidth(scrollerRef.current.scrollWidth / 2);
    }
  }, []);

  const resumeAnimation = () => {
    if (!halfWidth) return;

    const currentX = x.get();
    const remainingDistance = halfWidth + currentX; // Positive value
    const remainingDuration = (remainingDistance / halfWidth) * originalDuration;

    controls.start({
      x: -halfWidth,
      transition: {
        duration: remainingDuration,
        ease: "linear",
        onComplete: () => {
          x.set(0);
          resumeAnimation(); // Recurse for infinite loop
        },
      },
    });
  };

  useEffect(() => {
    if (halfWidth > 0) {
      resumeAnimation();
    }
  }, [halfWidth]);

  useEffect(() => {
    if (hoverCount > 0) {
      controls.stop();
    } else {
      resumeAnimation();
    }
  }, [hoverCount]);

  return (
    <section
      id={id}
      className={`${className} w-full px-6 md:px-20 text-black overflow-hidden`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        {/* <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-5xl font-bold mb-6">Skills</h2>
          <div className="w-16 h-1 bg-black"></div>
        </motion.div> */}

        {/* Infinite Scrolling Skills */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-hidden py-8">
            <motion.div
              ref={scrollerRef}
              style={{ x }}
              animate={controls}
              className="flex gap-8"
            >
              {duplicatedSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center gap-4 min-w-[80px] group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  onMouseEnter={() => setHoverCount((prev) => prev + 1)}
                  onMouseLeave={() => setHoverCount((prev) => prev - 1)}
                >
                  <div className="relative">
                    {/* Adjust icon size here */}
                    <skill.icon className="w-10 h-10 text-gray-400 group-hover:text-black transition-all duration-300" />
                  </div>
                  <span className="text-sm font-medium text-gray-500 group-hover:text-black transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Optional: Description */}
        <motion.p
          className="text-center text-black mt-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Technologies I work with to bring ideas to life
        </motion.p>
      </div>
    </section>
  );
}