import { useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ onDownload }) {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -96; // Adjust for navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/50 backdrop-blur-md text-white py-4 px-5 md:px-10 font-poppins-med shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-[30px] font-bold cursor-pointer hover:text-cyan-400 transition-colors"
          onClick={() => scrollToSection("home")}
        >
          Tartor
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-32">
          <div className="flex gap-5 md:gap-8 items-center border-2 border-gray-400 py-3 px-5 rounded-full">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:text-cyan-400 transition-colors font-medium text-gray-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Download Resume Button */}
          <button
            onClick={onDownload}
            className="flex items-center bg-gray-500/70 hover:bg-gray-500 hover:cursor-pointer rounded-2xl px-5 py-2 transition-all duration-300"
          >
            <FiDownload size={20} className="mr-2" />
            <span className="font-semibold text-sm md:text-base">Resume</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl hover:text-cyan-400 transition-colors"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
            onClick={() => setOpen(false)}
          ></div>

          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-11/12 max-w-sm bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 flex flex-col gap-5 z-50 shadow-lg">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-white text-lg hover:text-cyan-400 font-medium transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}

            <button
              onClick={onDownload}
              className="mt-4 flex items-center justify-center gap-2 bg-gray-500/70 hover:bg-gray-500 rounded-full px-4 py-2 font-semibold transition-all duration-300"
            >
              <FiDownload /> Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
