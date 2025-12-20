import { useState, useEffect } from "react";
import { FiDownload, FiMenu, FiX, FiHome, FiUser, FiCode, FiBriefcase, FiMail } from "react-icons/fi";

export default function Navbar({ onDownload }) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -96;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };

  const handleDownloadResume = () => {
    setOpen(false);
    
    if (onDownload) {
      onDownload();
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
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

  const navItems = [
    { id: "home", icon: FiHome, label: "Home" },
    { id: "about", icon: FiUser, label: "About" },
    { id: "skills", icon: FiCode, label: "Skills" },
    { id: "projects", icon: FiBriefcase, label: "Projects" },
    { id: "contact", icon: FiMail, label: "Contact" },
  ];

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto max-w-4xl">
      <div className="bg-white border border-black/10 rounded-3xl shadow-lg px-3 py-2">
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Home Icon with highlight */}
          <button
            onClick={() => scrollToSection("home")}
            className={`transition-all p-3 rounded-full ${
              activeSection === "home"
                ? "text-black hover:bg-black/5"
                : "text-black hover:bg-black/5"
            }`}
            title="Home"
          >
            <FiHome size={18} />
          </button>

          {/* Separator */}
          <div className="w-px h-6 bg-black/10 mx-1"></div>

          {/* Other nav icons */}
          {navItems.slice(1).map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`transition-all p-3 rounded-full ${
                activeSection === item.id
                  ? "bg-black text-white"
                  : "text-black hover:bg-black/5"
              }`}
              title={item.label}
            >
              <item.icon size={18} />
            </button>
          ))}

          {/* Separator before resume */}
          <div className="w-px h-6 bg-black/10 mx-1"></div>

          {/* Resume Button */}
          <button
            onClick={handleDownloadResume}
            className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all text-sm font-medium"
          >
            Resume
          </button>
        </div>

        {/* Tablet/Mobile Compact Menu */}
        <div className="lg:hidden flex items-center justify-between gap-2">
          {/* Left side - Home + Active Section */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection("home")}
              className={`transition-all p-2.5 rounded-full ${
                activeSection === "home"
                  ? "bg-black text-white"
                  : "text-black hover:bg-black/5"
              }`}
            >
              <FiHome size={18} />
            </button>
            
            {activeSection !== "home" && (
              <>
                <div className="w-px h-5 bg-black/10"></div>
                <button
                  onClick={() => scrollToSection(activeSection)}
                  className="bg-black text-white p-2.5 rounded-full"
                >
                  {navItems.find(item => item.id === activeSection)?.icon && 
                    (() => {
                      const Icon = navItems.find(item => item.id === activeSection).icon;
                      return <Icon size={18} />;
                    })()
                  }
                </button>
              </>
            )}
          </div>

          {/* Right side - Resume + Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadResume}
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-all text-sm font-medium"
            >
              Resume
            </button>
            
            <div className="w-px h-5 bg-black/10"></div>
            
            <button
              onClick={() => setOpen(!open)}
              className={`p-2.5 rounded-full transition-all ${
                open 
                  ? "bg-black text-white" 
                  : "text-black hover:bg-black/5"
              }`}
            >
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          ></div>

          {/* Menu panel */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-11/12 max-w-sm bg-white/95 backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-3 shadow-xl border border-black/10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-3 transition-colors p-3 text-left rounded-xl ${
                  activeSection === item.id
                    ? "bg-black text-white"
                    : "text-black hover:bg-black/5"
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}

            {/* Mobile Resume Button */}
            <button
              onClick={handleDownloadResume}
              className="mt-2 flex items-center justify-center gap-2 bg-black text-white rounded-xl px-5 py-3 font-medium hover:bg-gray-800 transition-all"
            >
              <FiDownload size={18} />
              Download Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}