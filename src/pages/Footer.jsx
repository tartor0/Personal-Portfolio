import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaHome,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Footer() {
  const navigation = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "Skills", href: "#skills", icon: <FaTools /> },
    { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  const socials = [
    { icon: FaGithub, name: "GitHub", url: "https://github.com/" },
    { icon: FaLinkedin, name: "LinkedIn", url: "https://linkedin.com/" },
    { icon: FaInstagram, name: "Instagram", url: "https://instagram.com/" },
    { icon: FaTwitter, name: "Twitter", url: "https://twitter.com/" },
  ];

  return (
    <footer className="w-full bg-gray-900 text-white py-16 px-6 font-poppins-med">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-10">
        {/* ABOUT ME */}
        <div className="md:border-r md:border-gray-700 pr-6">
          <h2 className="text-2xl font-semibold mb-2">Tartor Gaadi</h2>
          <p className="text-gray-400">Full-Stack Developer</p>
        </div>

        {/* NAVIGATION */}
        <div className="md:border-r md:border-gray-700 pr-6">
          <h3 className="text-xl font-semibold mb-3">Navigation</h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-300">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hover:text-gray-500 inline-flex items-center gap-2 w-max"
                >
                  {item.icon} {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIALS + SUBSCRIBE */}
        <div className="flex flex-col md:pl-6">
          {/* SOCIALS */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Find Me Online</h3>
            <ul className="grid grid-cols-2 gap-3 text-gray-300 text-lg">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-500 w-max"
                  >
                    <social.icon /> {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SUBSCRIBE */}
          <div className="w-full max-w-lg">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FiSend /> Subscribe to Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Stay updated with my latest projects and articles.
            </p>

            <div className="flex w-full bg-gray-800 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent text-white outline-none min-w-0"
              />
              <button className="flex-shrink-0 w-12 bg-gray-600 hover:bg-gray-500 flex items-center justify-center">
                <FiSend className="w-5 h-5" />
              </button>
            </div>
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
