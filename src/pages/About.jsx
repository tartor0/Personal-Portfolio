import React, { useEffect } from "react";
import {
  FaUser,
  FaLightbulb,
  FaIdBadge,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaStar,
} from "react-icons/fa";
import PersonalImage from "../assets/personal-image.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const personalInfo = [
  { icon: FaUser, label: "Name", value: "Tartor Gaadi" },
  { icon: FaBirthdayCake, label: "Date of Birth", value: "09/02/2010" },
  { icon: FaMapMarkerAlt, label: "Location", value: "Lagos, Nigeria" },
  { icon: FaEnvelope, label: "Email", value: "tartor@example.com" },
  { icon: FaPhone, label: "Phone", value: "+234 123 456 789" },
  { icon: FaGraduationCap, label: "Education", value: "B.Sc Computer Science" },
  { icon: FaStar, label: "GPA", value: "Pending" },
];

export default function About({ id, className = "" }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  // Scroll + lift effect
  useEffect(() => {
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });

    el.style.transition = "transform 0.4s ease-out, opacity 0.4s ease-out";
    el.style.transform = "translateY(-10px)";
    el.style.opacity = "0.7";

    setTimeout(() => {
      el.style.transform = "translateY(0)";
      el.style.opacity = "1";
    }, 400);
  }, [id]);

  return (
    <div id={id} className={`${className} font-poppins-med min-h-screen mt-28 md:px-10`}>
      <h2 className="text-white text-center pb-20 text-4xl">ABOUT ME</h2>

      <div className="flex flex-col md:flex-row text-white gap-10">
        {/* Left - Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center items-start" data-aos="fade-right">
          <img
            src={PersonalImage}
            alt="Tartor"
            className="rounded-2xl w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl"
          />
        </div>

        {/* Right - Info */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Who Am I / My Approach */}
          {[
            { icon: FaUser, title: "Who Am I", text: "A passionate developer with a love for building modern web apps." },
            { icon: FaLightbulb, title: "My Approach", text: "Clean UI, smooth UX, and scalable code architecture." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-4 bg-gray-800/40 backdrop-blur-md rounded-xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <item.icon className="text-orange-500 w-8 h-8" />
              <div>
                <h3 className="font-semibold text-lg md:text-xl">{item.title}</h3>
                <p className="text-gray-300 text-sm md:text-base">{item.text}</p>
              </div>
            </div>
          ))}

          {/* Personal Information */}
          <div className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-6 shadow-lg" data-aos="fade-up" data-aos-delay={200}>
            <h1 className="flex items-center gap-3 text-2xl md:text-3xl font-semibold mb-6">
              <FaIdBadge className="text-orange-500 w-8 h-8" /> Personal Information
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-gray-800/40 rounded-xl"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <item.icon className="text-orange-500 w-6 h-6" />
                  <span>
                    {item.label}: {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
