import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaDatabase, FaServer } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiSpringboot, SiVercel, SiPostgresql, SiPostman } from "react-icons/si";

const SKILL_TABS = {
  frontend: [
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3Alt, name: "CSS" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaReact, name: "React" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiVite, name: "Vite" },
  ],
  backend: [
    { icon: FaDatabase, name: "MongoDB" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiSpringboot, name: "SpringBoot / Java" },
  ],
  tools: [
    { icon: FaGithub, name: "GitHub" },
    { icon: SiPostman, name: "Postman" },
    { icon: SiVercel, name: "Vercel" },
  ],
};

export default function Skills({ id, className = "" }) {
  const [activeTab, setActiveTab] = useState("frontend");

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  // Scroll + lift effect
  useEffect(() => {
    if (!id) return;
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -100; // adjust for navbar
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });

    element.style.transition = "transform 0.4s ease-out, opacity 0.4s ease-out";
    element.style.transform = "translateY(-10px)";
    element.style.opacity = "0.7";

    setTimeout(() => {
      element.style.transform = "translateY(0)";
      element.style.opacity = "1";
    }, 400);
  }, [id]);

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
        {Object.keys(SKILL_TABS).map((tab, idx) => {
          const isActive = activeTab === tab;
          const icons = { frontend: FaReact, backend: FaServer, tools: FaGithub };
          return (
            <button
              key={tab}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium ${
                isActive ? "bg-orange-500 text-white shadow-lg" : "bg-gray-800/40 text-gray-300 backdrop-blur-md"
              }`}
              onClick={() => setActiveTab(tab)}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              {React.createElement(icons[tab], { className: "w-5 h-5" })}{" "}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          );
        })}
      </div>

      {/* Skill Cards */}
      <div className="grid px-4 sm:px-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-6 mt-6">
        {SKILL_TABS[activeTab].map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-900/50 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 transition-transform"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <Icon className="text-orange-500 w-10 h-10 md:w-14 md:h-14" />
              <span className="text-gray-300 font-medium">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
