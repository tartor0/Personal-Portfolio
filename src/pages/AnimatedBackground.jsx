import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";

// Static configuration to prevent unnecessary recalculations
const BLOBS_CONFIG = [
  { color: "#7c27ff", size: 320, top: "18%", left: "6%", speed: 60 },
  { color: "#7bfdfc", size: 250, top: "65%", left: "82%", speed: 45 },
  { color: "#f95757", size: 280, top: "53%", left: "33%", speed: 30 },
  { color: "#ffe680", size: 180, top: "81%", left: "48%", speed: 38 },
];

const MOVING_BLOBS_CONFIG = [
  { color: "#4a90e2", size: 130, top: "14%", left: "67%", speed: 50 },
  { color: "#ffe680", size: 110, top: "74%", left: "15%", speed: 45 },
];

// Generate stars once and memoize
const generateStars = (count, width, height) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.2 + 0.3,
      opacity: Math.random() * 0.6 + 0.2,
      twinkleDelay: Math.random() * 2,
      duration: 1.5 + (i % 5) * 0.3,
    });
  }
  return stars;
};

export default function OptimizedAnimatedBackground() {
  const [windowSize, setWindowSize] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 1200, 
    height: typeof window !== 'undefined' ? window.innerHeight : 800 
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cometY, setCometY] = useState(0);

  // Memoize stars generation
  const stars = useMemo(() => 
    generateStars(200, windowSize.width, windowSize.height), // Reduced from 100 to 80
    [windowSize.width, windowSize.height]
  );

  // Throttled mouse move handler
  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  // Handle resize with debouncing
  const handleResize = useCallback(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    setCometY(Math.random() * (window.innerHeight * 0.85));
  }, []);

  useEffect(() => {
    // Initialize comet position
    setCometY(Math.random() * (windowSize.height * 0.85));

    // Use passive events for better performance
    const options = { passive: true };

    window.addEventListener("mousemove", handleMouseMove, options);
    window.addEventListener("resize", handleResize, options);

    // Simple debounce for resize
    let resizeTimer;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 100);
    };
    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimer);
    };
  }, [handleMouseMove, handleResize, windowSize.height]);

  // Calculate parallax with reduced intensity for better performance
  const parallaxX = (mousePosition.x - windowSize.width / 2) / 60;
  const parallaxY = (mousePosition.y - windowSize.height / 2) / 60;

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden pointer-events-none select-none">
      {/* Optimized Nebula Blobs - Reduced blur and opacity */}
      {BLOBS_CONFIG.map((blob, i) => (
        <motion.div
          key={`blob-${i}`}
          className="absolute"
          style={{
            width: blob.size,
            height: blob.size,
            background: blob.color,
            top: blob.top,
            left: blob.left,
            opacity: 0.18, // Reduced opacity
            filter: "blur(80px)", // Reduced blur
            willChange: "transform", // Hint for GPU acceleration
          }}
          animate={{
            x: parallaxX * (i % 2 ? 0.8 : -0.8),
            y: parallaxY * (i % 2 ? 0.6 : -0.6),
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: blob.speed,
            repeat: Infinity,
            ease: "easeInOut",
            type: "tween",
          }}
        />
      ))}

      {/* Optimized Moving Blobs - Simplified animation */}
      {MOVING_BLOBS_CONFIG.map((blob, i) => (
        <motion.div
          key={`moving-${i}`}
          className="absolute"
          style={{
            width: blob.size,
            height: blob.size,
            background: blob.color,
            top: blob.top,
            left: blob.left,
            opacity: 0.12,
            filter: "blur(80px)",
            willChange: "transform",
          }}
          animate={{
            x: [0, 12 * (i === 0 ? 1 : -1)],
            y: [0, 8 * (i === 0 ? 1 : -1)],
            scale: [1, 1.06],
          }}
          transition={{
            duration: blob.speed,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Optimized Stars - Using CSS transforms for better performance */}
      {stars.map((star, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute bg-white rounded-full"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            boxShadow: "0 0 4px #fff",
            willChange: "transform, opacity",
            transform: "translateZ(0)", // GPU acceleration hint
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 1.2, star.opacity],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.twinkleDelay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Optimized Comet - Using simpler trail and reduced effects */}
      <motion.div
        className="absolute"
        style={{
          top: cometY,
          left: 0,
          width: "40vw",
          height: 1,
          background: "linear-gradient(90deg, transparent, #61dafb, transparent)",
          filter: "blur(0.5px)",
          willChange: "transform",
        }}
        initial={{ x: "-40vw", opacity: 0 }}
        animate={{
          x: ["-40vw", "140vw"],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 2,
        }}
        onAnimationComplete={() => {
          setCometY(Math.random() * (windowSize.height * 0.85));
        }}
      />
      
      {/* Subtle gradient overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 20% 30%, transparent 0%, rgba(0, 0, 0, 0.7) 70%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}