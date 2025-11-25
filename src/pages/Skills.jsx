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
    AOS.init({ duration: 800, once: true });
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
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
      {skills.map((skill, idx) => {
        const IconComponent = skill.icon;
        return (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="flex flex-col items-center justify-center gap-2 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <IconComponent className="text-gray-200 w-12 h-12 md:w-16 md:h-16" />
            <span className="text-white font-medium mt-2">{skill.name}</span>
          </div>
        );
      })}
    </div>
  );

  return (
    <section
      id={id}
      className={`${className} w-full py-16 md:py-20 px-4 md:px-10 font-poppins-med text-white`}
    >
      <h1
        className="text-4xl md:text-5xl font-semibold text-center mb-4"
        data-aos="fade-down"
      >
        Skills
      </h1>
      <p
        className="text-gray-300 text-center max-w-2xl mx-auto mb-10"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Tools and technologies I’ve mastered or currently exploring.
      </p>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {[
          { name: "frontend", label: "Frontend", icon: FaReact },
          { name: "backend", label: "Backend", icon: FaServer },
          { name: "tools", label: "Other Tools", icon: FaGithub },
        ].map((tab, idx) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            data-aos="fade-up"
            data-aos-delay={idx * 50}
            className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === tab.name
                ? "bg-white/20 text-white shadow-lg"
                : "bg-white/10 text-gray-300 backdrop-blur-md"
            }`}
          >
            <tab.icon className="w-5 h-5" /> {tab.label}
          </button>
        ))}
      </div>

      {/* Render Selected Skills */}
      {activeTab === "frontend" && renderSkills(frontendSkills)}
      {activeTab === "backend" && renderSkills(backendSkills)}
      {activeTab === "tools" && renderSkills(otherTools)}
    </section>
  );
}
