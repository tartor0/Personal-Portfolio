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

  const stats = [
    { number: "2+", label: "Years Experience", icon: FaCode },
    { number: "15+", label: "Projects Built", icon: FaRocket },
    { number: "100%", label: "Client Satisfaction", icon: FaHeart },
  ];

  return (
    <section
      id={id}
      className={`${className} min-h-screen py-20 text-black px-6 md:px-60`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-medium mb-2">About</h2>
          <div className="w-20 h-1 bg-black"></div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left - Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            data-aos="fade-right"
          >
            <div className="relative">
              <img
                src={PersonalImage}
                alt="Tartor"
                className="rounded-2xl w-80 h-80 object-cover border border-black/10"
              />
              <div className="absolute -bottom-4 -right-4 bg-black text-white px-6 py-3 rounded-full">
                <p className="text-sm font-medium flex items-center gap-2">
                  <FaMapMarkerAlt />
                  Port Harcourt, NG
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Info */}
          <motion.div
            className="space-y-8"
            data-aos="fade-left"
          >
            <div>
              <h3 className="text-3xl font-semibold mb-4">Tartor Gaadi</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-normal">
                A passionate fullstack developer who loves building clean, modern, and scalable web applications. 
                I turn ideas into reality through code.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <FaLightbulb className="text-gray-400" />
                My Approach
              </h4>
              <p className="text-gray-600 leading-relaxed font-normal">
                Focused on intuitive UI, smooth UX, and writing maintainable code that scales. 
                Every pixel matters, every interaction counts.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center p-6 border border-black/10 rounded-2xl hover:border-black/30 transition-all"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              whileHover={{ y: -5 }}
            >
              <stat.icon className="text-gray-400 w-8 h-8 mb-3 mx-auto" />
              <h4 className="text-4xl font-semibold mb-2">{stat.number}</h4>
              <p className="text-gray-500 font-normal">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <motion.div
            className="p-8 border border-black/10 rounded-2xl hover:border-black/30 transition-all"
            data-aos="fade-up"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-gray-400 w-6 h-6" />
                <span className="text-sm text-gray-500 font-normal">Email</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  copied
                    ? "bg-green-100 text-green-700"
                    : "bg-black/5 hover:bg-black/10"
                }`}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="text-black font-normal break-all">{email}</p>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            className="p-8 border border-black/10 rounded-2xl hover:border-black/30 transition-all"
            data-aos="fade-up"
            data-aos-delay="100"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-gray-400 w-6 h-6" />
                <span className="text-sm text-gray-500 font-normal">WhatsApp</span>
              </div>
              <button
                onClick={handleCopyWhatsapp}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  copiedWhatsapp
                    ? "bg-green-100 text-green-700"
                    : "bg-black/5 hover:bg-black/10"
                }`}
              >
                {copiedWhatsapp ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="text-black font-normal">{whatsapp}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}