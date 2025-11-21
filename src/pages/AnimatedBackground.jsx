import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse for parallax
  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const xParallax = (mousePos.x - window.innerWidth / 2) / 120;
  const yParallax = (mousePos.y - window.innerHeight / 2) / 120;

  // Create 300 star/particle elements
  const stars = Array.from({ length: 300 }).map(() => ({
    x: Math.random() * window.innerWidth * 2 - window.innerWidth,
    y: Math.random() * window.innerHeight * 2 - window.innerHeight,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.4 + 0.05,
    speed: 100 + Math.random() * 200,
    delay: Math.random() * 50,
  }));

  // Glowing blobs/nebulae
  const blobs = [
    { color: "#FF4C4C", size: 400, top: "20%", left: "15%", speed: 160 },
    { color: "#6B5BFF", size: 350, top: "60%", left: "70%", speed: 140 },
    { color: "#00FFE0", size: 450, top: "50%", left: "30%", speed: 180 },
    { color: "#FFB400", size: 300, top: "75%", left: "50%", speed: 200 },
  ];

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
      {/* Long diagonal gradient layer for space depth */}
      <motion.div
        className="absolute w-[300%] h-[300%] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-40"
        animate={{ x: ["0%", "-100%", "0%"], y: ["0%", "0%", "0%"] }}
        transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
      />

      {/* Glowing nebula blobs */}
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: b.size,
            height: b.size,
            backgroundColor: b.color,
            top: b.top,
            left: b.left,
            opacity: 0.25,
            x: xParallax * (i % 2 === 0 ? -2 : 2),
            y: yParallax * (i % 2 === 0 ? -2 : 2),
          }}
          animate={{ rotate: [0, 360, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: b.speed, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Dense star/particle field */}
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: s.size,
            height: s.size,
            x: s.x + xParallax * 0.5,
            y: s.y + yParallax * 0.5,
            opacity: s.opacity,
          }}
          animate={{
            x: [s.x, s.x + 150, s.x],
            y: [s.y, s.y, s.y],
          }}
          transition={{
            duration: s.speed,
            repeat: Infinity,
            delay: s.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Optional subtle moving gradient overlay for extra color depth */}
      <motion.div
        className="absolute w-[250%] h-[250%] bg-gradient-to-tr from-purple-900 via-pink-900 to-blue-800 opacity-20 blur-2xl"
        animate={{ x: ["0%", "-50%", "0%"], y: ["0%", "0%", "0%"] }}
        transition={{ duration: 400, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
