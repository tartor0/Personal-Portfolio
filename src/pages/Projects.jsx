import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
    {
      title: "Dungeon Crawler (JavaFX Game)",
      description: "A fully functional 2D dungeon adventure game built using JavaFX.",
      category: "backend",
      link: "https://github.com/tartor0/Dungeon-Crawler",
    },
    {
      title: "Task Management System (Backend)",
      description: "A complete task management REST API built with Spring Boot + PostgreSQL.",
      category: "backend",
      link: "https://github.com/tartor0/task_management_system",
    },
    {
      title: "Property Management System (Frontend)",
      description: "A modern React web app for managing properties with clean UI and smooth UX.",
      category: "frontend",
      link: "https://github.com/tartor0/Property_management_system-FrontEnd",
    },
    {
      title: "Property Management System (Backend)",
      description: "Spring Boot backend API powering the property management platform.",
      category: "backend",
      link: "https://github.com/tartor0/Property_management_system-BackEnd",
    },
    {
      title: "Tartor's Goodies (Fullstack Store)",
      description: "A fullstack e-commerce project handling orders, products, and cart logic.",
      category: "fullstack",
      link: "https://github.com/tartor0/Tartors-Goodies",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="w-full py-16 md:py-20 px-4 md:px-10 font-poppins-med text-white"
    >
      <h1 className="text-4xl md:text-5xl font-semibold text-center mb-4" data-aos="fade-down">
        Projects
      </h1>
      <p className="text-gray-300 text-center mt-4 text-lg max-w-2xl mx-auto" data-aos="fade-down" data-aos-delay="100">
        Explore some of the works I've built.
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mt-10" data-aos="fade-up" data-aos-delay="200">
        {["all", "frontend", "backend", "fullstack"].map((btn) => (
          <button
            key={btn}
            onClick={() => setFilter(btn)}
            className={`px-5 py-2 rounded-full font-medium capitalize transition-all duration-300 ${
              filter === btn
                ? "bg-white/20 text-white shadow-lg"
                : "bg-white/10 text-gray-300 backdrop-blur-md"
            }`}
          >
            {btn === "all" ? "All Projects" : btn}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.title}
            data-aos="fade-up"
            data-aos-delay={200 + idx * 100}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-xl font-semibold mb-2 text-white">{project.title}</h2>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20">
              {project.category.toUpperCase()}
            </span>
            <div className="flex gap-4 mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg text-sm hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                <FaExternalLinkAlt /> View
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
