import React, { useState, useEffect } from "react";
import { FiMail, FiSend, FiGithub, FiLinkedin, FiTwitter, FiClock, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Contact({ id }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { label: "Github", href: "https://github.com/tartor0", icon: FiGithub },
    { label: "LinkedIn", href: "#", icon: FiLinkedin },
    { label: "Twitter", href: "#", icon: FiTwitter },
  ];

  return (
    <section id={id} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-accent-blue font-clash font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            LET'S COLLABORATE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-clash font-bold tracking-tighter leading-tight"
          >
            Let's build <br />
            <span className="text-accent-blue">something bold.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 bento-card border-border-strong bg-white/50 backdrop-blur-md"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-dim">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b-2 border-border focus:border-accent-blue py-3 outline-none transition-colors font-clash font-medium"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-dim">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b-2 border-border focus:border-accent-blue py-3 outline-none transition-colors font-clash font-medium"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-dim">Project Details</label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows="4"
                  className="w-full bg-transparent border-b-2 border-border focus:border-accent-blue py-3 outline-none transition-colors font-clash font-medium resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <div className="flex items-center gap-6 pt-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="magnetic-button"
                >
                  <FiSend />
                  {status === "sending" ? "Sending..." : status === "success" ? "Message Sent" : "Send Mission"}
                </button>
                {status === "success" && (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-clash font-bold">
                    Mission accepted.
                  </motion.span>
                )}
              </div>
            </form>
          </motion.div>

          {/* Sidebar Widgets */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Availability Widget */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bento-card bg-accent-blue text-white border-none group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span className="text-xs font-bold tracking-widest uppercase opacity-80">Availability</span>
              </div>
              <p className="text-3xl font-clash font-bold mb-4">I'm currently open <br />to new projects.</p>
              <p className="text-white/70 text-sm">Focusing on modern web architecture and creative UI design.</p>
            </motion.div>

            {/* Location & Time Widget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bento-card border-border-strong"
              >
                <FiMapPin className="text-accent-blue mb-4" size={24} />
                <span className="text-xs font-bold uppercase tracking-widest text-text-dim block mb-1">Location</span>
                <p className="font-clash font-bold">Nigeria</p>
                <p className="text-xs text-text-dim">Remote Friendly</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bento-card border-border-strong"
              >
                <FiClock className="text-accent-blue mb-4" size={24} />
                <span className="text-xs font-bold uppercase tracking-widest text-text-dim block mb-1">Local Time</span>
                <p className="font-clash font-bold">{time}</p>
                <p className="text-xs text-text-dim">GMT +1</p>
              </motion.div>
            </div>

            {/* Social Links Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bento-card border-border-strong flex flex-col justify-between"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-text-dim mb-4 block">Let's Connect</span>
              <div className="flex items-center gap-4">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="p-4 rounded-xl border border-border hover:border-accent-blue hover:text-accent-blue transition-all"
                  >
                    <link.icon size={20} />
                  </a>
                ))}
                <a
                  href="mailto:gaaditartor160@gmail.com"
                  className="flex-1 p-4 rounded-xl border border-border hover:border-accent-blue hover:text-accent-blue transition-all text-center font-clash font-bold text-sm"
                >
                  Email Me
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
