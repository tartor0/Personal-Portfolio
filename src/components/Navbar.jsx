import { useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -96; // adjust for navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false); // close mobile menu on click
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md text-white py-4 px-5 md:px-10 font-poppins-med shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-[30px] cursor-pointer" onClick={() => scrollToSection("home")}>
          Tartor
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-9 lg:gap-40">
          <div className="flex gap-5 md:gap-8 items-center border-2 border-gray-400 py-3 px-5 rounded-full text-gray-300">
            <button onClick={() => scrollToSection("home")} className="hover:text-orange-500">Home</button>
            <button onClick={() => scrollToSection("about")} className="hover:text-orange-500">About</button>
            <button onClick={() => scrollToSection("skills")} className="hover:text-orange-500">Skills</button>
            <button onClick={() => scrollToSection("experience")} className="hover:text-orange-500">Projects</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-orange-500">Connect</button>
          </div>

          <button className="flex items-center bg-gray-500 rounded-full px-5 py-2 hover:cursor-pointer">
            <div className="flex items-center justify-center pr-3 border-r-2 border-gray-400">
              <FiDownload size={24} />
            </div>
            <div className="flex flex-col pl-3">
              <span className="font-semibold">Download</span>
              <span className="text-sm text-gray-300 font-semibold">Resume</span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden mt-3 flex flex-col gap-3 bg-black/70 backdrop-blur-md p-5 rounded-xl border border-gray-400 absolute w-[calc(100%-2rem)] left-5 z-50">
          <button onClick={() => scrollToSection("home")} className="hover:text-orange-500">Home</button>
          <button onClick={() => scrollToSection("about")} className="hover:text-orange-500">About</button>
          <button onClick={() => scrollToSection("skills")} className="hover:text-orange-500">Skills</button>
          <button onClick={() => scrollToSection("experience")} className="hover:text-orange-500">Projects</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-orange-500">Connect</button>

          <button className="mt-3 flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 w-fit">
            <FiDownload /> Download Resume
          </button>
        </div>
      )}
    </nav>
  );
}
