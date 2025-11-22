import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail } from "react-icons/fi";

import Navbar from "../components/Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import AnimatedBackground from "./AnimatedBackground";
import ResumePreview from "./ResumePreview";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Multi-page PDF generator, with padding for smooth page breaks
const handleDownloadPDF = async (resumeRef) => {
  if (!resumeRef.current) return;
  await new Promise(res => setTimeout(res, 100));

  const canvas = await html2canvas(resumeRef.current, { scale: 3, useCORS: true });
  const imgWidthPx = canvas.width;
  const imgHeightPx = canvas.height;

  const pdf = new jsPDF('p', 'mm', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  const mmPerPx = pdfWidth / imgWidthPx;
  const pageHeightPx = pdfHeight / mmPerPx;

  let position = 0;
  const cropPaddingPx = 60; // overlap padding for cleaner splits

  while (position < imgHeightPx) {
    const remainingHeightPx = imgHeightPx - position;
    let captureHeightPx = Math.min(pageHeightPx, remainingHeightPx);

    let cropTop = position;
    let cropBottom = position + captureHeightPx;

    if (position > 0) cropTop = Math.max(0, cropTop - cropPaddingPx);
    if (remainingHeightPx > pageHeightPx) cropBottom = Math.min(imgHeightPx, cropBottom + cropPaddingPx);

    const actualHeightPx = cropBottom - cropTop;

    const pageCanvas = document.createElement('canvas');
    pageCanvas.width = imgWidthPx;
    pageCanvas.height = actualHeightPx;
    pageCanvas.getContext('2d').drawImage(
      canvas,
      0, cropTop, imgWidthPx, actualHeightPx,
      0, 0, imgWidthPx, actualHeightPx
    );
    const pageImgData = pageCanvas.toDataURL('image/png');

    if (position === 0) {
      pdf.addImage(pageImgData, "PNG", 0, 0, pdfWidth, actualHeightPx * mmPerPx);
    } else {
      pdf.addPage();
      pdf.addImage(pageImgData, "PNG", 0, 0, pdfWidth, actualHeightPx * mmPerPx);
    }

    position += captureHeightPx;
  }

  pdf.save("Tartor_Gaadi_Resume.pdf");
};

export default function Home() {
  const roles = [
    "React Enthusiast",
    "Web Developer",
    "Fullstack Developer",
    "Frontend Developer",
  ];
  const [index, setIndex] = useState(0);
  const resumeRef = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const downloadPDF = () => handleDownloadPDF(resumeRef);

  return (
    <div id="home" className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Navbar onDownload={downloadPDF} />

      {/* Hero Section */}
      <div className="px-6 md:px-16 pt-36 md:pt-44 z-10 relative max-w-4xl">
        <h2 className="text-gray-400 font-poppins text-3xl sm:text-4xl md:text-5xl">
          Hey, I am <span className="text-white">Tartor</span>
        </h2>

        <h2 className="text-xl sm:text-3xl md:text-[55px] mt-3 text-gray-300 font-poppins flex flex-wrap items-center gap-2 leading-tight">
          A{" "}
          <span className="h-[45px] sm:h-[55px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>

        <p className="mt-4 text-gray-300 text-base md:text-lg font-poppins leading-relaxed max-w-lg backdrop-blur-md bg-white/10 p-4 md:p-6 rounded-2xl shadow-lg">
          Building modern, responsive web applications with clean design and seamless user experiences, turning ideas into intuitive, fast, and engaging digital products.
        </p>

        <div className="flex items-center gap-4 mt-4 flex-wrap">
          <button className="text-white font-poppins px-6 py-2 rounded-full text-lg bg-orange-500">
            Hire me
          </button>
          <button className="p-3 text-white border border-white text-lg rounded-full">
            <FiMail />
          </button>
        </div>
      </div>

      {/* Sections */}
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />

      {/* Hidden ResumePreview for PDF, positioned off-screen, never display:none */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: "-9999px",
          width: "210mm",
          background: "white",
          zIndex: 999,
        }}
      >
        <ResumePreview ref={resumeRef} />
      </div>
    </div>
  );
}