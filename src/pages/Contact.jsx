import React, { useState, useEffect } from "react";
import { FiMail, FiHeart } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact({ id, className = "" }) {
  const [activeTab, setActiveTab] = useState("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div
      id={id}
      className={`${className} min-h-screen px-6 md:px-30 text-black py-20`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20" data-aos="fade-down">
          <h2 className="text-5xl md:text-5xl font-medium mb-2">Get in Touch</h2>
          <div className="w-20 h-1 bg-black"></div>
        </div>

        {/* Tabs */}
        <div className="flex justify-start gap-3 mb-16 flex-wrap" data-aos="fade-up">
          <button
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition ${
              activeTab === "contact"
                ? "bg-black text-white"
                : "bg-black/5 text-black hover:bg-black/10"
            }`}
            onClick={() => setActiveTab("contact")}
          >
            <FiMail className="w-4 h-4" /> Contact
          </button>
          <button
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition ${
              activeTab === "support"
                ? "bg-black text-white"
                : "bg-black/5 text-black hover:bg-black/10"
            }`}
            onClick={() => setActiveTab("support")}
          >
            <FiHeart className="w-4 h-4" /> Support
          </button>
        </div>

        {/* Content */}
        {activeTab === "contact" && (
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-6">Connect</h3>
              <div className="flex flex-col gap-3">
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
                      className="flex items-center gap-3 px-4 py-3 border border-black/10 rounded-xl hover:border-black/30 hover:bg-black/5 transition-all font-medium"
                    >
                      <Icon className="w-5 h-5" /> {social.name}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-4 rounded-xl border border-black/10 bg-white focus:outline-none focus:border-black/30 transition-all font-normal"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="p-4 rounded-xl border border-black/10 bg-white focus:outline-none focus:border-black/30 transition-all font-normal"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="p-4 rounded-xl border border-black/10 bg-white focus:outline-none focus:border-black/30 transition-all resize-none font-normal"
              />
              <button
                onClick={handleSubmit}
                className="bg-black text-white px-6 py-4 rounded-full font-medium hover:bg-gray-800 transition-all w-full md:w-auto"
              >
                Send Message
              </button>
            </div>
          </div>
        )}

        {activeTab === "support" && (
          <div
            className="flex flex-col items-center gap-8 max-w-md mx-auto text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-3">Support My Work</h3>
              <p className="text-gray-600 font-normal">
                Scan the QR code to support me on Patreon
              </p>
            </div>
            <div className="border border-black/10 rounded-2xl p-6">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.patreon.com/"
                alt="Support QR"
                className="w-48 h-48 rounded-xl"
              />
            </div>
            <a
              href="https://www.patreon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-black/20 rounded-full font-medium hover:bg-black/5 transition-all"
            >
              <FiHeart className="w-4 h-4" />
              Visit Patreon
            </a>
          </div>
        )}
      </div>
    </div>
  );
}