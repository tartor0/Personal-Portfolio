import React, { useState, useEffect } from "react";
import { FiMail, FiHeart } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact({ id, className = "" }) {
  const [activeTab, setActiveTab] = useState("contact");

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <div
      id={id}
      className={`${className} min-h-screen px-6 md:px-10 font-poppins-med text-white py-20 relative z-10`}
    >
      {/* Header */}
      <h1 className="text-4xl md:text-5xl text-center mb-4" data-aos="fade-down">
        Contact Me
      </h1>
      <p
        className="text-gray-300 text-center mb-10 md:text-lg"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Reach out via form, social media, or support platforms
      </p>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap" data-aos="fade-up">
        <button
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-[18px] transition ${
            activeTab === "contact"
              ? "bg-white/20 text-white shadow-lg"
              : "bg-white/10 text-gray-300 backdrop-blur-md"
          }`}
          onClick={() => setActiveTab("contact")}
        >
          <FiMail /> Contact Me
        </button>
        <button
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-[18px] transition ${
            activeTab === "support"
              ? "bg-white/20 text-white shadow-lg"
              : "bg-white/10 text-gray-300 backdrop-blur-md"
          }`}
          onClick={() => setActiveTab("support")}
        >
          <FiHeart /> Support Me
        </button>
      </div>

      {/* Content */}
      {activeTab === "contact" && (
        <div
          className="flex flex-col md:flex-row gap-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start gap-4 md:w-1/4 px-10">
            <h2 className="text-xl font-semibold mb-2">Social Links</h2>
            <div className="flex flex-col gap-3 text-xl">
              {[{
                icon: FaGithub,
                name: "GitHub",
                link: "https://github.com/"
              },{
                icon: FaLinkedin,
                name: "LinkedIn",
                link: "https://linkedin.com/"
              },{
                icon: FaInstagram,
                name: "Instagram",
                link: "https://instagram.com/"
              },{
                icon: FaTwitter,
                name: "Twitter",
                link: "https://twitter.com/"
              }].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                  >
                    <Icon /> {social.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <form
            className="flex-1 flex flex-col gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-[550px] mx-auto w-full"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md bg-white/10 text-white backdrop-blur-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md bg-white/10 text-white backdrop-blur-md focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 rounded-md bg-white/10 text-white backdrop-blur-md focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-white/20 px-4 py-3 rounded-full font-semibold hover:bg-white/30 hover:cursor-pointer transition"
            >
              Send Message
            </button>
          </form>
        </div>
      )}

      {activeTab === "support" && (
        <div
          className="flex flex-col md:flex-row items-center gap-10 justify-center mt-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-xl font-semibold">Support Me</h2>
            <p className="text-gray-300 text-center md:text-left">
              Scan the QR code to patronize me.
            </p>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.patreon.com/"
              alt="Support QR"
              className="w-36 h-36 md:w-48 md:h-48 rounded-xl shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
