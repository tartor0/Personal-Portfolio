import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaDatabase, FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss, SiVite, SiPostgresql, SiVercel, SiMongodb, SiExpress,
} from "react-icons/si";

export default function Skills({ id }) {
  const allSkills = [
    { icon: FaReact, name: "React", color: "text-[#61DAFB]" },
    { icon: FaNodeJs, name: "Node.js", color: "text-[#339933]" },
    { icon: FaJs, name: "JavaScript", color: "text-[#F7DF1E]" },
    { icon: SiTailwindcss, name: "Tailwind", color: "text-[#06B6D4]" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-[#4169E1]" },
    { icon: SiMongodb, name: "MongoDB", color: "text-[#47A248]" },
    { icon: FaHtml5, name: "HTML", color: "text-[#E34F26]" },
    { icon: FaCss3Alt, name: "CSS", color: "text-[#1572B6]" },
    { icon: SiExpress, name: "Express", color: "text-text-main" },
    { icon: FaGithub, name: "GitHub", color: "text-text-main" },
    { icon: SiVite, name: "Vite", color: "text-[#646CFF]" },
    { icon: SiVercel, name: "Vercel", color: "text-text-main" },
  ];

  return (
    <section id={id} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center max-w-3xl mx-auto"
        >
          <span className="text-accent-blue font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Knowledge Base</span>
          <h2 className="text-4xl md:text-6xl font-clash font-bold tracking-wider mb-6">
            The <span className="text-accent-blue">Engine</span> Room.
          </h2>
          <p className="text-text-dim text-lg font-medium">
            A curated selection of technologies I use to build scalable, high-performance digital products.
          </p>
        </motion.div>

        {/* Experimental Orbital/Cloud Layout */}
        <div className="relative min-h-[600px] flex items-center justify-center">

          {/* Central Hub */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="w-48 h-48 rounded-full bg-accent-blue/5 border border-accent-blue/20 backdrop-blur-3xl flex items-center justify-center z-20 relative"
          >
            <div className="absolute inset-0 rounded-full animate-pulse bg-accent-blue/10" />
            <div className="text-center">
              <span className="block text-3xl font-clash font-bold text-text-main uppercase tracking-tighter">Stack</span>
              <span className="text-[10px] text-accent-blue font-bold tracking-widest uppercase">Full Core</span>
            </div>
          </motion.div>

          {/* Orbiting Icons */}
          {allSkills.map((skill, idx) => {
            const angle = (idx / allSkills.length) * (2 * Math.PI);
            const radius = 250 + (idx % 2 === 0 ? 40 : -40);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 0, y: 0 }}
                whileInView={{
                  opacity: 1,
                  x,
                  y,
                  transition: { delay: idx * 0.05, duration: 0.8, type: "spring" }
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, zIndex: 30 }}
                className="absolute w-20 h-20 group cursor-pointer"
              >
                <div className="w-full h-full bento-card flex flex-col items-center justify-center gap-2 border-border-strong group-hover:border-accent-blue group-hover:bg-accent-blue/5 transition-all duration-300 shadow-sm p-4">
                  <skill.icon className={`text-2xl ${skill.color} transition-transform group-hover:rotate-12`} />
                  <span className="text-[8px] font-bold text-text-dim group-hover:text-text-main uppercase tracking-tighter text-center">
                    {skill.name}
                  </span>
                </div>

                {/* Connector lines (Subtle) */}
                <div
                  className="absolute top-1/2 left-1/2 w-px bg-linear-to-r from-accent-blue/10 to-transparent origin-left pointer-events-none"
                  style={{
                    width: `${radius}px`,
                    transform: `rotate(${angle + Math.PI}rad)`,
                    zIndex: -1
                  }}
                />
              </motion.div>
            );
          })}

          {/* Background Decorative Rings */}
          <div className="absolute w-[500px] h-[500px] border border-border rounded-full pointer-events-none opacity-50" />
          <div className="absolute w-[300px] h-[300px] border border-border rounded-full pointer-events-none opacity-50" />
          <div className="absolute w-[700px] h-[700px] border border-border rounded-full pointer-events-none opacity-20" />
        </div>
      </div>
    </section>
  );
}