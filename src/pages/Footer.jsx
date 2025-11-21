import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-16 px-6 font-poppins-med">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4">
        {/* ABOUT ME */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Tartor Gaadi</h2>
          <p className="text-gray-400">Full-Stack Developer</p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Navigation</h3>
          <ul className="flex flex-col gap-2 text-gray-300">
            <a href="#home" className="hover:text-gray-500">
              Home
            </a>
            <a href="#skills" className="hover:text-gray-500">
              Skills
            </a>
            <a href="#projects" className="hover:text-gray-500">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-500">
              Contact
            </a>
          </ul>
        </div>

        {/* SOCIALS */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Find Me Online</h3>
          <ul className="flex flex-col gap-3 text-gray-300 text-lg">
            <a
              href="https://github.com/"
              target="_blank"
              className="flex items-center gap-2 hover:text-gray-500"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="flex items-center gap-2 hover:text-gray-500"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              className="flex items-center gap-2 hover:text-gray-500"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="flex items-center gap-2 hover:text-gray-500"
            >
              <FaTwitter /> Twitter
            </a>
          </ul>
        </div>

        {/* SUBSCRIBE */}
        <div className="w-full max-w-lg mx-auto">
          <h3 className="text-xl font-semibold mb-3">
            Subscribe to Newsletter
          </h3>
          <p className="text-gray-400 mb-4">
            Stay updated with my latest projects and articles.
          </p>

          {/* FLEXIBLE WRAPPER */}
          <div className="flex w-full bg-gray-800 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-transparent text-white outline-none"
            />

            {/* ARROW BUTTON */}
            <button className="bg-gray-600 hover:bg-gray-500 px-4 py-3 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-6-6l6 6-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-500 mt-16 text-sm">
        © {new Date().getFullYear()} Tartor Gaadi. All rights reserved.
      </div>
    </footer>
  );
}
