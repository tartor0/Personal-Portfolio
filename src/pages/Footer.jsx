import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Footer() {
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: FaGithub, name: "GitHub", url: "https://github.com/" },
    { icon: FaLinkedin, name: "LinkedIn", url: "https://linkedin.com/" },
    { icon: FaInstagram, name: "Instagram", url: "https://instagram.com/" },
    { icon: FaTwitter, name: "Twitter", url: "https://twitter.com/" },
  ];

  return (
    <footer className="w-full py-16 px-6 bg-white border-t border-black/10">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* ABOUT ME */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Tartor Gaadi</h2>
            <p className="text-gray-600 font-normal">Full-Stack Developer</p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-black transition-colors font-normal"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-600">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-black transition-colors font-normal"
                  >
                    <social.icon className="w-4 h-4" /> {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SUBSCRIBE */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FiSend className="w-4 h-4" /> Newsletter
            </h3>
            <p className="text-gray-600 mb-4 text-sm font-normal">
              Stay updated with my latest projects
            </p>

            <div className="flex rounded-full overflow-hidden border border-black/10">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-white text-black outline-none text-sm font-normal min-w-0"
              />
              <button className="flex-shrink-0 px-4 bg-black text-white hover:bg-gray-800 flex items-center justify-center transition">
                <FiSend className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-gray-500 pt-8 border-t border-black/10 text-sm font-normal">
          © {new Date().getFullYear()} Tartor Gaadi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}