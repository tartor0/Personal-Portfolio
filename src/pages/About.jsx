import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaLightbulb,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaCode,
  FaRocket,
  FaHeart,
} from "react-icons/fa";
import PersonalImage from "../assets/personal-image.avif";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About({ id, className = "" }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const [copied, setCopied] = useState(false);
  const [copiedWhatsapp, setCopiedWhatsapp] = useState(false);

  const email = "gaaditartor160@gmail.com";
  const whatsapp = "+2349160572315";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleCopyWhatsapp = () => {
    navigator.clipboard.writeText(whatsapp).then(() => {
      setCopiedWhatsapp(true);
      setTimeout(() => setCopiedWhatsapp(false), 2000);
    });
  };

  // Stats with animation
  const stats = [
    { number: "2+", label: "Years Experience", icon: FaCode },
    { number: "15+", label: "Projects Built", icon: FaRocket },
    { number: "100%", label: "Client Satisfaction", icon: FaHeart },
  ];

  return (
    <section
      id={id}
      className={`${className} font-poppins-med min-h-screen mt-28 text-white relative z-10 px-4 sm:px-6 md:px-10 lg:px-16`}
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
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About me
          </h2>
        </motion.div>

        {/* Main Content - Bento Grid Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Profile Image Card - Large */}
          <motion.div
            className="lg:col-span-5 relative group"
            data-aos="fade-right"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl overflow-hidden h-full">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse" />
                  <img
                    src={PersonalImage}
                    alt="Tartor"
                    className="relative rounded-full w-64 h-64 object-cover shadow-2xl border-4 border-white/20"
                  />
                </motion.div>
                
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-2">Tartor Gaadi</h3>
                  <p className="text-gray-300 flex items-center justify-center gap-2">
                    <FaMapMarkerAlt className="text-pink-400" />
                    Port Harcourt, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats & Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  whileHover={{ y: -5 }}
                >
                  <stat.icon className="text-gray-300 w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-3xl font-bold mb-1">{stat.number}</h4>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Who Am I Card */}
            <motion.div
              className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl"
              data-aos="fade-up"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <FaUser className="text-gray-300 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-3">Who Am I</h3>
                  <p className="text-gray-300 leading-relaxed">
                    A passionate fullstack developer who loves building clean, modern, and scalable web applications. 
                    I turn caffeine into code and ideas into reality! ☕️✨
                  </p>
                </div>
              </div>
            </motion.div>

            {/* My Approach Card */}
            <motion.div
              className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-transparent backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="100"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <FaLightbulb className="text-gray-300 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-3">My Approach</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Focused on intuitive UI, smooth UX, and writing maintainable code that scales. 
                    Every pixel matters, every interaction counts.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Cards - Full Width */}
          <motion.div
            className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Email Card */}
            <motion.div
              className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl group hover:border-pink-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-pink-500/20 rounded-2xl group-hover:bg-pink-500/30 transition-colors">
                    <FaEnvelope className="text-pink-400 w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email Address</p>
                    <p className="font-medium text-gray-200 text-sm break-all">{email}</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    copied
                      ? "bg-green-500/20 text-green-300 border border-green-500/30"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                  }`}
                >
                  {copied ? "✓ Copied!" : "Copy"}
                </button>
              </div>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl group hover:border-green-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-green-500/20 rounded-2xl group-hover:bg-green-500/30 transition-colors">
                    <FaWhatsapp className="text-green-400 w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">WhatsApp</p>
                    <p className="font-medium text-gray-200">{whatsapp}</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyWhatsapp}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    copiedWhatsapp
                      ? "bg-green-500/20 text-green-300 border border-green-500/30"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                  }`}
                >
                  {copiedWhatsapp ? "✓ Copied!" : "Copy"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

