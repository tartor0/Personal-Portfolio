import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaLightbulb,
  FaIdBadge,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";
import PersonalImage from "../assets/personal-image.avif"; 
import AOS from "aos";
import "aos/dist/aos.css";

export default function About({ id, className = "" }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const [copied, setCopied] = useState(false);
  const email = "gaaditartor160@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const personalInfo = [
    { icon: FaUser, label: "Name", value: "Tartor Gaadi" },
    { icon: FaMapMarkerAlt, label: "Location", value: "Lagos, Nigeria" },
    { icon: FaGraduationCap, label: "Education", value: "B.Sc Computer Science" },
    { icon: FaEnvelope, label: "Email", isEmail: true },
  ];

  return (
    <section
      id={id}
      className={`${className} font-poppins-med min-h-screen mt-28 text-white relative z-10 px-4 sm:px-6 md:px-10 lg:px-16`}
    >
      {/* Centered max width container */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold pb-16">
          ABOUT ME
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          {/* Left - Personal Image */}
          <div
            className="flex-shrink-0 w-full md:w-1/3 flex justify-center"
            data-aos="fade-right"
          >
            <motion.img
              src={PersonalImage}
              alt="Tartor"
              className="rounded-3xl w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl transition-transform duration-500"
              whileHover={{ scale: 1.08, rotate: 2 }}
            />
          </div>

          {/* Right - Info */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Who Am I / Approach */}
            <div className="flex flex-col gap-6">
              <motion.div
                className="flex items-start gap-4 p-5 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                whileHover={{ scale: 1.02 }}
              >
                <FaUser className="text-gray-300 w-8 h-8 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg md:text-xl mb-1">Who Am I</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    A passionate fullstack developer who loves building clean,
                    modern, and scalable web applications.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-5 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="100"
                whileHover={{ scale: 1.02 }}
              >
                <FaLightbulb className="text-gray-300 w-8 h-8 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg md:text-xl mb-1">My Approach</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    Focused on intuitive UI, smooth UX, and writing maintainable
                    code that scales.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Personal Information Grid */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
              whileHover={{ scale: 1.01 }}
            >
              <h1 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mb-8">
                <FaIdBadge className="text-gray-300 w-8 h-8" /> Personal Information
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {personalInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 shadow-md"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    whileHover={{ scale: 1.02 }}
                  >
                    <item.icon className="text-gray-300 w-6 h-6 flex-shrink-0" />
                    {item.isEmail ? (
                      <button
                        onClick={handleCopyEmail}
                        className={`px-4 py-2 rounded-lg font-semibold text-sm md:text-base transition ${
                          copied
                            ? "bg-white/20 hover:bg-white/30 text-gray-100"
                            : "bg-white/10 hover:bg-white/20 text-gray-200"
                        }`}
                      >
                        {copied ? "Email Copied!" : "Copy Email"}
                      </button>
                    ) : (
                      <span className="text-gray-200 font-medium">
                        {item.label}: <span className="text-gray-400">{item.value}</span>
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
