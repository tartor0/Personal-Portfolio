import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaLayerGroup } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
    {
      title: "Dungeon Crawler",
      subtitle: "JavaFX Game",
      description: "A fully functional 2D dungeon adventure game built using JavaFX with engaging gameplay mechanics and smooth animations.",
      category: "backend",
      link: "https://github.com/tartor0/Dungeon-Crawler",
      tags: ["JavaFX", "Game Dev", "OOP"],
      icon: FaCode,
    },
    {
      title: "Task Management System",
      subtitle: "Backend API",
      description: "A complete task management REST API built with Spring Boot + PostgreSQL, featuring authentication and CRUD operations.",
      category: "backend",
      link: "https://github.com/tartor0/task_management_system",
      tags: ["Spring Boot", "PostgreSQL", "REST API"],
      icon: FaServer,
    },
    {
      title: "Property Management System",
      subtitle: "Frontend",
      description: "A modern React web app for managing properties with clean UI, smooth UX, and responsive design across all devices.",
      category: "frontend",
      link: "https://github.com/tartor0/Property_management_system-FrontEnd",
      tags: ["React", "Tailwind", "UI/UX"],
      icon: FaCode,
    },
    {
      title: "Property Management System",
      subtitle: "Backend API",
      description: "Spring Boot backend API powering the property management platform with secure authentication and data management.",
      category: "backend",
      link: "https://github.com/tartor0/Property_management_system-BackEnd",
      tags: ["Spring Boot", "MySQL", "Security"],
      icon: FaServer,
    },
    {
      title: "Tartor's Goodies",
      subtitle: "E-commerce Store",
      description: "A fullstack e-commerce project handling orders, products, and cart logic with seamless payment integration.",
      category: "fullstack",
      link: "https://github.com/tartor0/Tartors-Goodies",
      tags: ["React", "Spring Boot", "E-commerce"],
      icon: FaLayerGroup,
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const filterButtons = [
    { value: "all", label: "All Projects", icon: FaLayerGroup },
    { value: "frontend", label: "Frontend", icon: FaCode },
    { value: "backend", label: "Backend", icon: FaServer },
    { value: "fullstack", label: "Fullstack", icon: FaLayerGroup },
  ];

  return (
    <section
      id="projects"
      className="w-full py-20 px-4 md:px-10 text-black"
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
          <h2 className="text-5xl md:text-6xl font-medium mb-2">Projects</h2>
          <div className="w-20 h-1 bg-black"></div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-start flex-wrap gap-3 mb-16">
          {filterButtons.map((btn, idx) => (
            <motion.button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all text-sm ${
                filter === btn.value
                  ? "bg-black text-white"
                  : "bg-black/5 text-black hover:bg-black/10"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <btn.icon className="w-4 h-4" />
              <span>{btn.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              {/* Card */}
              <div className="h-full border border-black/10 rounded-2xl p-6 hover:border-black/30 transition-all flex flex-col">
                
                {/* Icon Badge */}
                <div className="inline-flex w-fit p-3 rounded-xl bg-black/5 mb-4 group-hover:bg-black/10 transition-all">
                  <project.icon className="text-black w-5 h-5" />
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3 font-normal">{project.subtitle}</p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow font-normal">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-black/5 text-gray-700 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-black/20 rounded-full text-sm font-medium hover:bg-black/5 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub className="w-4 h-4" /> Code
                  </motion.a>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt className="w-3 h-3" /> View
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500 font-normal">No projects found in this category.</p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 mb-4 font-normal">
            Want to see more? Check out my GitHub!
          </p>
          <motion.a
            href="https://github.com/tartor0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-black/20 rounded-full font-medium hover:bg-black/5 transition-all"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="w-5 h-5" />
            Visit My GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}