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
      gradient: "from-red-500/20 to-orange-500/20",
      icon: FaCode,
    },
    {
      title: "Task Management System",
      subtitle: "Backend API",
      description: "A complete task management REST API built with Spring Boot + PostgreSQL, featuring authentication and CRUD operations.",
      category: "backend",
      link: "https://github.com/tartor0/task_management_system",
      tags: ["Spring Boot", "PostgreSQL", "REST API"],
      gradient: "from-green-500/20 to-emerald-500/20",
      icon: FaServer,
    },
    {
      title: "Property Management System",
      subtitle: "Frontend",
      description: "A modern React web app for managing properties with clean UI, smooth UX, and responsive design across all devices.",
      category: "frontend",
      link: "https://github.com/tartor0/Property_management_system-FrontEnd",
      tags: ["React", "Tailwind", "UI/UX"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      icon: FaCode,
    },
    {
      title: "Property Management System",
      subtitle: "Backend API",
      description: "Spring Boot backend API powering the property management platform with secure authentication and data management.",
      category: "backend",
      link: "https://github.com/tartor0/Property_management_system-BackEnd",
      tags: ["Spring Boot", "MySQL", "Security"],
      gradient: "from-purple-500/20 to-pink-500/20",
      icon: FaServer,
    },
    {
      title: "Tartor's Goodies",
      subtitle: "E-commerce Store",
      description: "A fullstack e-commerce project handling orders, products, and cart logic with seamless payment integration.",
      category: "fullstack",
      link: "https://github.com/tartor0/Tartors-Goodies",
      tags: ["React", "Spring Boot", "E-commerce"],
      gradient: "from-yellow-500/20 to-orange-500/20",
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
      className="w-full py-20 px-4 md:px-10 font-poppins-med text-white relative"
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
            Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore some of the works I've built — from games to fullstack apps
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {filterButtons.map((btn, idx) => (
            <motion.button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`relative flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 overflow-hidden group ${
                filter === btn.value
                  ? "bg-white/20 text-white shadow-2xl scale-105"
                  : "bg-white/5 text-gray-300 backdrop-blur-md hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              {filter === btn.value && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent"
                  layoutId="activeFilter"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <btn.icon className="w-5 h-5 relative z-10" />
              <span className="relative z-10">{btn.label}</span>
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 rounded-3xl`} />

              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl group-hover:border-white/30 transition-all duration-300 flex flex-col">
                
                {/* Icon Badge */}
                <div className={`inline-flex w-fit p-3 rounded-2xl bg-gradient-to-br ${project.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="text-white w-6 h-6" />
                </div>

                {/* Title & Subtitle */}
                <h2 className="text-2xl font-bold mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm mb-3">{project.subtitle}</p>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-sm font-semibold hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-4 h-4" /> GitHub
                  </motion.a>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl text-sm font-semibold hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="w-4 h-4" /> View
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
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 text-lg mb-4">
            Want to see more? Check out my GitHub!
          </p>
          <motion.a
            href="https://github.com/tartor0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300"
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