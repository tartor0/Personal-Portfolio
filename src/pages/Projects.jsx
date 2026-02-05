import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaLayerGroup } from "react-icons/fa";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Dungeon Crawler",
      description: "2D adventure game built using JavaFX with advanced OOP principles.",
      category: "backend",
      link: "https://github.com/tartor0/Dungeon-Crawler",
      tags: ["JavaFX", "OOP"],
      icon: FaCode,
    },
    {
      title: "Task Management",
      description: "Full-feature REST API built with Spring Boot and PostgreSQL.",
      category: "backend",
      link: "https://github.com/tartor0/task_management_system",
      tags: ["Spring Boot", "PostgreSQL"],
      icon: FaServer,
    },
    {
      title: "Property Manager",
      description: "Modern real estate platform with seamless frontend-to-backend integration.",
      category: "fullstack",
      link: "https://github.com/tartor0/Property_management_system-FrontEnd",
      tags: ["React", "Spring Boot"],
      icon: FaLayerGroup,
    },
    {
      title: "Tartor's Goodies",
      description: "High-performance E-commerce engine handling real-time transactions.",
      category: "fullstack",
      link: "https://github.com/tartor0/Tartors-Goodies",
      tags: ["React", "Spring Boot"],
      icon: FaLayerGroup,
    },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent-blue font-bold tracking-[0.3em] uppercase text-sm mb-4 block">PORTFOLIO</span>
          <h2 className="text-5xl md:text-7xl font-clash font-bold tracking-tighter mb-8">
            Featured <span className="text-accent-blue">Work.</span>
          </h2>

          <div className="flex flex-wrap gap-3">
            {["all", "frontend", "backend", "fullstack"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-xl text-xs font-clash font-bold uppercase tracking-widest transition-all ${filter === f ? "bg-text-main text-white" : "border border-border text-text-dim hover:border-text-main hover:text-text-main"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="bento-card group flex flex-col justify-between border-border-strong bg-white/50 backdrop-blur-sm"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-4 rounded-2xl bg-accent-blue/5 text-accent-blue text-2xl">
                      <project.icon />
                    </div>
                    <div className="flex gap-4">
                      <a href={project.link} className="text-text-dim hover:text-accent-blue transition-colors">
                        <FaGithub size={22} />
                      </a>
                      <a href={project.link} className="text-text-dim hover:text-accent-blue transition-colors">
                        <FaExternalLinkAlt size={20} />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-3xl font-clash font-bold mb-4">{project.title}</h3>
                  <p className="text-text-dim font-medium leading-relaxed mb-8">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-lg bg-white border border-border text-[10px] font-bold text-text-dim uppercase tracking-widest shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}