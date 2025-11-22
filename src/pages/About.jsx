import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaLightbulb,
  FaIdBadge,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";
import PersonalImage from "../assets/personal-image.avif"; // replace with your image
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
      setTimeout(() => setCopied(false), 2000); // reset after 2 seconds
    });
  };

  const personalInfo = [
    { icon: FaUser, label: "Name", value: "Tartor Gaadi" },
    { icon: FaMapMarkerAlt, label: "Location", value: "Lagos, Nigeria" },
    { icon: FaGraduationCap, label: "Education", value: "B.Sc Computer Science" },
    {
      icon: FaEnvelope,
      label: "Email",
      isEmail: true, // flag to render button only
    },
  ];

  return (
    <div id={id} className={`${className} font-poppins-med min-h-screen mt-28 md:px-10 text-white`}>
      <h2 className="text-center text-4xl pb-20">ABOUT ME</h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left - Personal Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center" data-aos="fade-right">
          <img
            src={PersonalImage}
            alt="Tartor"
            className="rounded-2xl w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl"
          />
        </div>

        {/* Right - Info */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Who Am I / Approach */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 p-4 bg-gray-800/40 backdrop-blur-md rounded-xl shadow-lg" data-aos="fade-up">
              <FaUser className="text-gray-600 w-8 h-8" />
              <div>
                <h3 className="font-semibold text-lg md:text-xl">Who Am I</h3>
                <p className="text-gray-300 text-sm md:text-base">
                  A passionate developer with a love for building modern web apps.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-800/40 backdrop-blur-md rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <FaLightbulb className="text-gray-600 w-8 h-8" />
              <div>
                <h3 className="font-semibold text-lg md:text-xl">My Approach</h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Clean UI, smooth UX, and scalable code architecture.
                </p>
              </div>
            </div>
          </div>

          {/* Personal Information Grid */}
          <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-10 shadow-xl" data-aos="fade-up" data-aos-delay="200">
            <h1 className="flex items-center gap-3 text-2xl md:text-3xl font-semibold mb-6">
              <FaIdBadge className="text-gray-600 w-8 h-8" /> Personal Information
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {personalInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-3 p-3 bg-gray-800/40 rounded-xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <item.icon className="text-gray-600 w-6 h-6" />
                  
                  {item.isEmail ? (
                    <button
                      onClick={handleCopyEmail}
                      className="px-4 py-2 bg-gray-600 hover:bg-gray-500 hover:cursor-pointer rounded-md text-white font-semibold transition text-sm md:text-base"
                    >
                      {copied ? "Email Address Copied!" : "Copy Email Address"}
                    </button>
                  ) : (
                    <span>{item.label}: {item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
