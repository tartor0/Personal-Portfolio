import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiUser, FiCode, FiBriefcase, FiMail, FiDownload } from "react-icons/fi";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", icon: FiHome, label: "Home" },
    { id: "about", icon: FiUser, label: "About" },
    { id: "skills", icon: FiCode, label: "Skills" },
    { id: "projects", icon: FiBriefcase, label: "Projects" },
    { id: "contact", icon: FiMail, label: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`
          pointer-events-auto flex items-center gap-2 px-4 py-2 glass-island
          transition-all duration-500
          ${scrolled ? "scale-95 shadow-xl" : "scale-100"}
        `}
      >
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                relative px-4 py-2 rounded-full text-sm font-clash font-semibold transition-all duration-300
                flex items-center gap-2 group
                ${activeSection === item.id
                  ? "text-accent-blue"
                  : "text-text-dim hover:text-text-main"}
              `}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="navGlow"
                  className="absolute inset-0 bg-accent-blue/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <item.icon size={16} className={`transition-transform duration-300 ${activeSection === item.id ? "scale-110" : "group-hover:scale-110"}`} />
              <span className="hidden md:block">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="w-px h-6 bg-border mx-2" />

        <button className="flex items-center gap-2 px-4 py-2 bg-text-main text-white rounded-full text-sm font-clash font-bold hover:bg-accent-blue transition-colors group">
          <FiDownload className="group-hover:-translate-y-0.5 transition-transform" />
          <span className="hidden sm:block">Resume</span>
        </button>
      </motion.nav>
    </div>
  );
}
