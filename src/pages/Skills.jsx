import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiSpringboot,
  SiVercel,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills({ id, className = "" }) {
  const [activeTab, setActiveTab] = useState("frontend");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const frontendSkills = [
    { icon: FaHtml5, name: "HTML", color: "text-orange-500" },
    { icon: FaCss3Alt, name: "CSS", color: "text-blue-500" },
    { icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
    { icon: FaReact, name: "React", color: "text-cyan-500" },
    { icon: SiTailwindcss, name: "Tailwind", color: "text-teal-500" },
    { icon: SiVite, name: "Vite", color: "text-purple-500" },
  ];

  const backendSkills = [
    { icon: FaDatabase, name: "MongoDB", color: "text-green-500" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-600" },
    { icon: SiSpringboot, name: "SpringBoot", color: "text-green-500" },
  ];

  const otherTools = [
    { icon: FaGithub, name: "GitHub", color: "text-gray-800" },
    { icon: SiPostman, name: "Postman", color: "text-orange-500" },
    { icon: SiVercel, name: "Vercel", color: "text-black" },
  ];

  const getSkills = () => {
    if (activeTab === "frontend") return frontendSkills;
    if (activeTab === "backend") return backendSkills;
    return otherTools;
  };

  return (
    <section
      id={id}
      className={`${className} w-full py-20 px-4 md:px-60  text-black`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-medium mb-2">Skills</h2>
          <div className="w-20 h-1 bg-black"></div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-start gap-3 mb-16 flex-wrap">
          {[
            { name: "frontend", label: "Frontend", icon: FaReact },
            { name: "backend", label: "Backend", icon: FaServer },
            { name: "tools", label: "Tools", icon: FaGithub },
          ].map((tab) => (
            <motion.button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                activeTab === tab.name
                  ? "bg-black text-white"
                  : "bg-black/5 text-black hover:bg-black/10"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <tab.icon className="w-4 h-4" />
              <span className="text-sm">{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Grid - Just Icons Moving */}
        <motion.div
          className="grid grid-cols-3 md:grid-cols-6 gap-8"
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {getSkills().map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center gap-3 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.2,
                  }}
                >
                  <skill.icon className={`w-16 h-16 ${skill.color} transition-all`} />
                </motion.div>
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-black transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}