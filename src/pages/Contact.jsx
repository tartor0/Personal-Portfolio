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
      className={`${className} min-h-screen px-6 md:px-10 font-poppins-med text-white py-20`}
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
        Reach out to me via form, social media, or support platforms
      </p>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap" data-aos="fade-up">
        <button
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-[18px] transition ${
            activeTab === "contact"
              ? "bg-gray-600"
              : "bg-gray-700/40 backdrop-blur-md"
          }`}
          onClick={() => setActiveTab("contact")}
        >
          <FiMail /> Contact Me
        </button>
        <button
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-[18px] transition ${
            activeTab === "support"
              ? "bg-gray-600"
              : "bg-gray-700/40 backdrop-blur-md"
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
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-500"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-500"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-500"
              >
                <FaInstagram /> Instagram
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-500"
              >
                <FaTwitter /> Twitter
              </a>
            </div>
          </div>

          {/* Form — UPDATED WIDTH */}
          <form
            className="flex-1 flex flex-col gap-4 bg-gray-700/40 backdrop-blur-md p-6 rounded-2xl shadow-lg 
            max-w-[550px] mx-auto w-full"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 rounded-md bg-gray-700 text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-600 px-4 py-3 rounded-full font-semibold hover:bg-gray-500 hover:cursor-pointer transition"
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
              className="w-36 h-36 md:w-48 md:h-48"
            />
          </div>
        </div>
      )}
    </div>
  );
}
