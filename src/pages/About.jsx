import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaRocket,
  FaLightbulb,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function About({ id }) {
  const portraitPath = "C:/Users/USER/.gemini/antigravity/brain/3c43f1bd-13ef-42a0-acfb-ebe526f6900d/about_me_abstract_portrait_1770290605309.png";

  return (
    <section id={id} className="py-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-accent-blue/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-accent-indigo/5 blur-[120px] rounded-full animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Creative Imagery Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-square"
            >
              {/* Main Image Container */}
              <div className="absolute inset-0 z-10 border border-border-strong rounded-[3rem] overflow-hidden group shadow-2xl">
                <img
                  src={portraitPath}
                  alt="Visionary Developer Abstract Portrait"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-60" />
              </div>

              {/* Decorative Glass Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bento-card border-border-strong z-20 flex items-center justify-center animate-float">
                <FaLightbulb className="text-4xl text-accent-blue" />
              </div>

              {/* Animated Rings */}
              <div className="absolute inset-[-20px] border border-accent-blue/10 rounded-[4rem] animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-[-40px] border border-accent-indigo/5 rounded-[5rem] animate-[spin_30s_linear_infinite_reverse]" />
            </motion.div>
          </div>

          {/* Storytelling Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent-blue font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Manifesto</span>
              <h2 className="text-5xl md:text-7xl font-clash font-bold tracking-wider mb-8 leading-tight">
                Architecting <br />
                <span className="text-accent-blue">Digital Evolution.</span>
              </h2>

              <div className="space-y-6 text-xl text-text-dim leading-relaxed max-w-2xl">
                <p>
                  I'm <span className="text-text-main font-bold">Tartor Gaadi</span>, a full-stack architect based in the heart of Port Harcourt. I don't just write code; I weave digital tapestries that bridge the gap between human intuition and machine precision.
                </p>
                <p>
                  My journey is fueled by a relentless pursuit of excellence. From scalable cloud infrastructures to interactive experiences, I build solutions that inspire.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <h4 className="text-text-main font-bold text-2xl mb-2 font-clash">Vision</h4>
                  <p className="text-text-dim text-sm">Empowering humans through seamless tech integration.</p>
                </div>
                <div>
                  <h4 className="text-text-main font-bold text-2xl mb-2 font-clash">Mission</h4>
                  <p className="text-text-dim text-sm">Transforming complex chaos into elegant digital order.</p>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-white shadow-sm flex items-center justify-center text-xs font-bold text-accent-blue">
                      {i}+
                    </div>
                  ))}
                </div>
                <div className="text-sm text-text-dim font-medium">
                  Years of crafting <br />
                  <span className="text-text-main font-bold uppercase tracking-widest text-[10px]">Premium Digital Assets</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}