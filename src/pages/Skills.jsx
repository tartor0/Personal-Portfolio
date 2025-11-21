import React, { useState, useEffect } from "react";
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
    AOS.init({ duration: 800, once: false });
  }, []);

  const frontendSkills = [
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3Alt, name: "CSS" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaReact, name: "React" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiVite, name: "Vite" },
  ];

  const backendSkills = [
    { icon: FaDatabase, name: "MongoDB" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiSpringboot, name: "SpringBoot / Java" },
  ];

  const otherTools = [
    { icon: FaGithub, name: "GitHub" },
    { icon: SiPostman, name: "Postman" },
    { icon: SiVercel, name: "Vercel" },
  ];

  const renderSkills = (skills) => (
    <div className="grid px-4 sm:px-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-6 mt-6">
      {skills.map((skill, idx) => {
        const IconComponent = skill.icon;
        return (
          <div
            key={idx}
            className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-900/50 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 transition-transform"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <IconComponent className="text-gray-500 w-10 h-10 md:w-14 md:h-14" />
            <span className="text-gray-300 font-medium">{skill.name}</span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div id={id} className={`${className} min-h-screen px-6 md:px-10 py-20 font-poppins text-white`}>
      <h1 className="text-4xl md:text-5xl font-semibold text-center mb-4" data-aos="fade-down">
        Skills
      </h1>
      <p className="text-gray-300 text-center max-w-xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="100">
        Tools and technologies I’ve mastered or currently exploring.
      </p>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <button
          className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium ${
            activeTab === "frontend" ? "bg-orange-800  text-white shadow-lg" : "bg-gray-800/40 text-gray-300 backdrop-blur-md"
          }`}
          onClick={() => setActiveTab("frontend")}
          data-aos="fade-up"
        >
          <FaReact className="w-5 h-5" /> Frontend
        </button>

        <button
          className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium ${
            activeTab === "backend" ? "bg-orange-800 text-white shadow-lg" : "bg-gray-800/40 text-gray-300 backdrop-blur-md"
          }`}
          onClick={() => setActiveTab("backend")}
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <FaServer className="w-5 h-5" /> Backend
        </button>

        <button
          className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium ${
            activeTab === "tools" ? "bg-orange-800 text-white shadow-lg" : "bg-gray-800/40 text-gray-300 backdrop-blur-md"
          }`}
          onClick={() => setActiveTab("tools")}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaGithub className="w-5 h-5" /> Other Tools
        </button>
      </div>

      {activeTab === "frontend" && renderSkills(frontendSkills)}
      {activeTab === "backend" && renderSkills(backendSkills)}
      {activeTab === "tools" && renderSkills(otherTools)}
    </div>
  );
}
