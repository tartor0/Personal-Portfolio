import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaWhatsapp,
  FaGraduationCap,
  FaCode,
  FaRocket,
  FaLightbulb,
  FaMapMarkerAlt,
  FaTools,
  FaUsers,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About({ id, className = "" }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const [copied, setCopied] = useState(false);
  const [copiedWhatsapp, setCopiedWhatsapp] = useState(false);
  const timelineRef = useRef(null);
  const lineRef = useRef(null);

  const email = "gaaditartor160@gmail.com";
  const whatsapp = "+2349160572315";

  // Handle scroll for line animation
  useEffect(() => {
    let rafId;
    
    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        if (!timelineRef.current || !lineRef.current) return;
        
        const timelineTop = timelineRef.current.getBoundingClientRect().top;
        const timelineHeight = timelineRef.current.offsetHeight;
        const viewportCenter = window.innerHeight / 2;
        
        const scrolled = viewportCenter - timelineTop;
        const height = Math.max(0, Math.min(scrolled, timelineHeight));
        
        lineRef.current.style.height = `${height}px`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

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

  const timeline = [
    {
      year: "2023-Present",
      title: "Fullstack Developer",
      subtitle: "Freelance & Personal Projects",
      icon: FaRocket,
      description: "Building modern web applications with React, Node.js, and various technologies. Specializing in creating scalable, user-friendly solutions for clients across different industries."
    },
    {
      year: "2022-2023",
      title: "Advanced Learning",
      subtitle: "Backend & Databases",
      icon: FaTools,
      description: "Expanded skills into backend development, learning Node.js, Express, MongoDB, and PostgreSQL. Built full-stack applications and RESTful APIs, understanding the complete development cycle."
    },
    {
      year: "2022",
      title: "Frontend Developer",
      subtitle: "React & Modern Frameworks",
      icon: FaCode,
      description: "Focused on mastering React, JavaScript, and modern frontend frameworks. Created multiple projects including e-commerce platforms, portfolio sites, and interactive web applications with smooth animations."
    },
    {
      year: "2021",
      title: "First Projects",
      subtitle: "Building & Experimenting",
      icon: FaUsers,
      description: "Created my first real projects and started taking on small freelance work. Learned about responsive design, accessibility, and user experience. Each project taught me something new."
    },
    {
      year: "2021",
      title: "The Beginning",
      subtitle: "Self-Taught Journey",
      icon: FaGraduationCap,
      description: "Started my coding journey with HTML, CSS, and JavaScript. Spent countless hours learning through online resources, YouTube tutorials, and documentation. Fell in love with the power of creating with code."
    },
  ];

  return (
    <section
      id={id}
      className={`${className} min-h-screen py-20 text-black px-6 md:px-10`}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-5xl font-medium mb-3">About</h2>
          <div className="w-16 h-1 bg-black"></div>
        </motion.div>

        {/* Improved Intro Section */}
        <motion.div
          className="mb-20 grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h3 className="text-2xl md:text-2xl font-semibold text-black mb-4">
              Crafting Digital Excellence
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Hi, I'm <span className="font-semibold text-black">Tartor Gaadi</span>, a full-stack developer passionate about building innovative web solutions that make a difference.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Based in Port Harcourt, Nigeria, I transform complex problems into elegant, user-centric applications. From concept to deployment, I ensure every detail contributes to an outstanding experience.
            </p>
          </div>
          <div className="bg-black/5 border border-black/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaLightbulb className="w-6 h-6 text-gray-600" />
              <h4 className="text-xl font-semibold">My Approach</h4>
            </div>
            <ul className="space-y-2 text-gray-700 text-base">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                Clean, scalable code
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                User-focused design
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                Continuous innovation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                Problem-solving mindset
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative mb-20" ref={timelineRef}>
          {/* Background Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-black/10"></div>
          
          {/* Animated Line */}
          <div 
            ref={lineRef}
            className="absolute left-0 md:left-8 top-0 w-0.5 bg-black"
            style={{ height: '0px' }}
          ></div>

          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative mb-16 md:mb-20 pl-12 md:pl-24"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-8 top-2 w-4 h-4 -ml-[7px] rounded-full bg-black border-4 border-white shadow-lg"></div>

              {/* Content */}
              <div className="bg-white/50 border border-black/10 rounded-2xl p-6 md:p-8 hover:border-black/30 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-black/5 rounded-xl">
                    <item.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">{item.year}</p>
                    <h3 className="text-2xl font-semibold text-black mb-1">{item.title}</h3>
                    <p className="text-base text-gray-600 font-medium">{item.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <motion.div
          className="mb-20 bg-black/5 border border-black/10 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaLightbulb className="w-8 h-8 text-gray-600" />
            <h3 className="text-2xl md:text-3xl font-semibold">My Philosophy</h3>
          </div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            I believe in writing clean, maintainable code that scales. Each project is an opportunity 
            to push boundaries and create something meaningful. I'm constantly learning, adapting, 
            and refining my craft.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Beyond just functionality, I focus on creating digital experiences that feel intuitive 
            and delightful. The details matter—from smooth animations to thoughtful interactions.
          </p>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-600" />
            Get in Touch
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email Card */}
            <motion.div
              className="p-6 border border-black/10 rounded-2xl hover:border-black/30 transition-all bg-white/50"
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-black/5">
                  <FaEnvelope className="text-gray-600 w-5 h-5" />
                </div>
                <span className="text-base font-medium text-gray-700">Email</span>
              </div>
              <p className="text-sm text-gray-500 font-normal mb-4">
                Let's discuss your next project
              </p>
              <button
                onClick={handleCopyEmail}
                className={`w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {copied ? "✓ Email Copied!" : "Copy Email"}
              </button>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              className="p-6 border border-black/10 rounded-2xl hover:border-black/30 transition-all bg-white/50"
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-black/5">
                  <FaWhatsapp className="text-gray-600 w-5 h-5" />
                </div>
                <span className="text-base font-medium text-gray-700">WhatsApp</span>
              </div>
              <p className="text-sm text-gray-500 font-normal mb-4">
                Quick chat? Message me directly
              </p>
              <button
                onClick={handleCopyWhatsapp}
                className={`w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  copiedWhatsapp
                    ? "bg-green-500 text-white"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {copiedWhatsapp ? "✓ Number Copied!" : "Copy Number"}
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Location Badge */}
        <motion.div
          className="mt-12 inline-flex items-center gap-2 bg-black/5 border border-black/10 px-5 py-3 rounded-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <FaMapMarkerAlt className="text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Port Harcourt, Nigeria</span>
        </motion.div>
      </div>
    </section>
  );
}