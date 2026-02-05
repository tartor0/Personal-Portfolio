import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload } from "react-icons/fi";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const roles = ["Software Architect", "UI/UX Specialist", "Fullstack Engineer", "Creative Developer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div ref={heroRef} className="relative min-h-screen overflow-hidden selection:bg-accent-blue/20">
      {/* Background Orbs - Subtle for light mode */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-blue/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-indigo/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-6 pt-32 pb-20 md:pt-48 md:pb-32 min-h-screen flex flex-col justify-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-text-dim uppercase">Available for new opportunities</span>
          </motion.div>

          {/* Main Title Section */}
          <div className="space-y-4 mb-12">
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-9xl font-clash font-bold leading-[0.85] tracking-tighter"
            >
              TARTOR <br />
              <span className="text-accent-blue">GAADI.</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
              <div className="h-0.5 w-12 bg-accent-blue" />
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-2xl font-clash text-text-dim font-bold uppercase tracking-wider"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Bio Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-text-dim max-w-2xl leading-relaxed mb-16 font-medium"
          >
            A multidisciplinary developer focusing on crafting refined digital experiences.
            Bridging the gap between performance and aesthetics.
          </motion.p>

          {/* CTA Group */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
            <button className="magnetic-button">
              Start Project
              <FiArrowRight />
            </button>
            <button className="px-10 py-4 rounded-xl border-2 border-border font-clash font-bold hover:bg-white transition-all flex items-center gap-2 shadow-sm">
              <FiDownload size={18} />
              Resume
            </button>
          </motion.div>

          {/* Social Links Panel */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-8 mt-24"
          >
            {[
              { icon: FiGithub, href: "https://github.com/tartor0", label: "Github" },
              { icon: FiLinkedin, href: "#", label: "LinkedIn" },
              { icon: FiTwitter, href: "#", label: "Twitter" },
              { icon: FiMail, href: "mailto:gaaditartor160@gmail.com", label: "Email" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                whileHover={{ y: -4, color: '#3E5BFF' }}
                className="text-text-dim/60 hover:text-accent-blue transition-all"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}