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
    { icon: FaHtml5, name: "HTML", color: "from-orange-500 to-red-500", level: 95 },
    { icon: FaCss3Alt, name: "CSS", color: "from-blue-500 to-cyan-500", level: 90 },
    { icon: FaJs, name: "JavaScript", color: "from-yellow-400 to-yellow-600", level: 85 },
    { icon: FaReact, name: "React", color: "from-cyan-400 to-blue-500", level: 90 },
    { icon: SiTailwindcss, name: "Tailwind", color: "from-teal-400 to-cyan-500", level: 95 },
    { icon: SiVite, name: "Vite", color: "from-purple-500 to-pink-500", level: 80 },
  ];

  const backendSkills = [
    { icon: FaDatabase, name: "MongoDB", color: "from-green-500 to-emerald-600", level: 80 },
    { icon: SiPostgresql, name: "PostgreSQL", color: "from-blue-600 to-indigo-600", level: 75 },
    { icon: SiSpringboot, name: "SpringBoot", color: "from-green-400 to-emerald-500", level: 70 },
  ];

  const otherTools = [
    { icon: FaGithub, name: "GitHub", color: "from-gray-700 to-gray-900", level: 90 },
    { icon: SiPostman, name: "Postman", color: "from-orange-500 to-red-500", level: 85 },
    { icon: SiVercel, name: "Vercel", color: "from-black to-gray-800", level: 88 },
  ];

  const getSkills = () => {
    if (activeTab === "frontend") return frontendSkills;
    if (activeTab === "backend") return backendSkills;
    return otherTools;
  };

  return (
    <section
      id={id}
      className={`${className} w-full py-20 px-4 md:px-10 font-poppins-med text-white relative`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Skills
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {[
            { name: "frontend", label: "Frontend", icon: FaReact, color: "cyan" },
            { name: "backend", label: "Backend", icon: FaServer, color: "green" },
            { name: "tools", label: "Tools", icon: FaGithub, color: "purple" },
          ].map((tab) => (
            <motion.button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 overflow-hidden group ${
                activeTab === tab.name
                  ? "bg-white/20 text-white shadow-2xl scale-105"
                  : "bg-white/5 text-gray-300 backdrop-blur-md hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glow effect on active */}
              {activeTab === tab.name && (
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r from-${tab.color}-500/20 to-transparent`}
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <tab.icon className="w-6 h-6 relative z-10" />
              <span className="relative z-10">{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {getSkills().map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-3xl`} />
              
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl group-hover:border-white/30 transition-all duration-300">
                {/* Icon with gradient background */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="text-white w-10 h-10" />
                </div>
                
                {/* Skill name */}
                <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                
                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 text-lg">
            Always learning, always growing 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}