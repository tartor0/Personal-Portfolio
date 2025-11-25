import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const getStars = (count, winW, winH) =>
  Array.from({ length: count }, () => ({
    x: Math.random() * winW * 1.1 - winW * 0.05,
    y: Math.random() * winH * 1.1 - winH * 0.05,
    size: Math.random() * 1.2 + 0.3,
    opacity: Math.random() * 0.6 + 0.2,
    twinkleDelay: Math.random() * 2,
  }));

export default function AnimatedBackground() {
  const [win, setWin] = useState({ w: window.innerWidth, h: window.innerHeight });
  const [mouse, setMouse] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const starsRef = useRef([]);
  const [cometY, setCometY] = useState(Math.random() * (window.innerHeight * 0.85));

  useEffect(() => {
    const makeStars = () => (starsRef.current = getStars(400, window.innerWidth, window.innerHeight));
    makeStars();

    const onResize = () => {
      setWin({ w: window.innerWidth, h: window.innerHeight });
      makeStars();
      setCometY(Math.random() * (window.innerHeight * 0.85));
    };
    const onMouse = (e) => setMouse({ x: e.clientX, y: e.clientY });

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  const parallaxX = (mouse.x - win.w / 2) / 40;
  const parallaxY = (mouse.y - win.h / 2) / 40;

  const blobs = [
    { color: "#7c27ff", size: 320, top: "18%", left: "6%", speed: 60 },
    { color: "#7bfdfc", size: 250, top: "65%", left: "82%", speed: 45 },
    { color: "#f95757", size: 280, top: "53%", left: "33%", speed: 30 },
    { color: "#ffe680", size: 180, top: "81%", left: "48%", speed: 38 },
  ];

  const movingBlobs = [
    { color: "#4a90e2", size: 130, top: "14%", left: "67%", speed: 50 },
    { color: "#ffe680", size: 110, top: "74%", left: "15%", speed: 45 },
  ];

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden pointer-events-none select-none">
      {/* Nebula blobs */}
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute blur-[120px]"
          style={{
            width: b.size,
            height: b.size,
            background: b.color,
            top: b.top,
            left: b.left,
            opacity: 0.22,
          }}
          animate={{
            x: [
              parallaxX * (i % 2 ? 12 : -12),
              parallaxX * (i % 2 ? 24 : -24),
              parallaxX * (i % 2 ? 12 : -12),
            ],
            y: [
              parallaxY * (i % 2 ? 8 : -8),
              parallaxY * (i % 2 ? 20 : -20),
              parallaxY * (i % 2 ? 8 : -8),
            ],
            scale: [1, 1.08, 1],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: b.speed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Small moving blobs */}
      {movingBlobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute blur-[120px]"
          style={{
            width: blob.size,
            height: blob.size,
            background: blob.color,
            top: blob.top,
            left: blob.left,
            opacity: 0.15,
          }}
          animate={{
            x: [0, 18 * (i === 0 ? 1 : -1), 0],
            y: [0, 13 * (i === 0 ? 1 : -1), 0],
            scale: [1, 1.11, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: blob.speed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Stars */}
      {starsRef.current.map((s, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            boxShadow: `0 0 8px 0 #fff8`,
          }}
          animate={{
            opacity: [s.opacity, s.opacity * 1.3, s.opacity],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 1.5 + (i % 5) * 0.3,
            repeat: Infinity,
            delay: s.twinkleDelay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Random Slim Comet with Fading Trail */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: cometY,
          left: -win.w * 0.1,
          width: win.w * 0.4,      // shorter comet
          height: 1.5,             // slim comet
          background: "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, #61dafb 40%, rgba(255,255,255,0) 100%)",
          boxShadow: "0 0 60px 6px #61dafb77",
          borderRadius: 999,
        }}
        initial={{ x: 0, opacity: 0 }}
        animate={{
          x: [0, win.w + win.w * 0.15],
          opacity: [0, 1, 0.7, 0],
          rotate: [-1.5, 0, 1.5],
        }}
        transition={{
          duration: 6, // faster
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 1,
        }}
        onUpdate={(latest) => {
          if (latest.x >= win.w + win.w * 0.15) {
            // pick a new random vertical position for next pass
            setCometY(Math.random() * (win.h * 0.85));
          }
        }}
      />
    </div>
  );
}
