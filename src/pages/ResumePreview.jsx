import React, { forwardRef } from "react";

const ResumePreview = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      style={{
        width: "210mm",
        padding: "32px",
        backgroundColor: "#ffffff",
        color: "#111827",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "16px",
        }}
      >
        {/* Left side */}
        <div>
          <p style={{ fontSize: "2.5rem", fontWeight: "700", margin: 0 }}>
            Tartor Gaadi
          </p>
          <p style={{ fontSize: "1.125rem", color: "#4B5563", marginTop: "8px" }}>
            Fullstack Developer
          </p>
          <p style={{ fontSize: "1rem", color: "#4B5563", marginTop: "2px" }}>
            B.Sc. Software Engineering - Aptech
          </p>
        </div>

        {/* Right side */}
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: "1rem", color: "#6B7280", margin: 0 }}>
            gaaditartor160@gmail.com
          </p>
          <p style={{ fontSize: "1rem", color: "#6B7280", marginTop: "4px" }}>
            +234 9160572315
          </p>
        </div>
      </div>

      <hr style={{ borderTop: "2px solid #D1D5DB", marginBottom: "16px" }} />

      {/* Summary */}
      <section style={{ marginBottom: "24px" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "8px",
            display: "inline-block",
          }}
        >
          Summary
        </h2>
        <p style={{ lineHeight: "1.6", marginTop: "8px", color: "#4B5563" }}>
          Fullstack Developer with experience in developing scalable and responsive web applications. Skilled in frontend technologies like React, HTML5, CSS, and Tailwind, and proficient in backend development using Node.js, SpringBoot, and databases such as MongoDB and SQL. Experienced in building interactive, performant web products, integrating APIs, and deploying projects using modern tools such as Vite, GitHub, and Vercel. Passionate about crafting intuitive user experiences and maintaining clean, efficient code.
        </p>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: "24px" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "8px",
            display: "inline-block",
          }}
        >
          Skills
        </h2>

        {/* Frontend */}
        <div style={{ marginTop: "8px" }}>
          <h3 style={{ fontWeight: "600", marginBottom: "4px" }}>Frontend</h3>
          <ul style={{ marginLeft: "24px", lineHeight: "1.5" }}>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>React</li>
            <li>Tailwind</li>
          </ul>
        </div>

        {/* Backend */}
        <div style={{ marginTop: "8px" }}>
          <h3 style={{ fontWeight: "600", marginBottom: "4px" }}>Backend</h3>
          <ul style={{ marginLeft: "24px", lineHeight: "1.5" }}>
            <li>Node.js / Express</li>
            <li>MongoDB, SQL Database</li>
            <li>SpringBoot</li>
          </ul>
        </div>

        {/* Tools / Deployment */}
        <div style={{ marginTop: "8px" }}>
          <h3 style={{ fontWeight: "600", marginBottom: "4px" }}>Other Tools</h3>
          <ul style={{ marginLeft: "24px", lineHeight: "1.5" }}>
            <li>PostMan</li>
            <li>Vite</li>
            <li>GitHub</li>
            <li>Vercel</li>
          </ul>
        </div>
      </section>

      {/* Experience */}
      <section style={{ marginBottom: "24px" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "8px",
            display: "inline-block",
          }}
        >
          Experience
        </h2>

        <div style={{ marginTop: "8px" }}>
          <h3 style={{ fontWeight: "600" }}>Frontend Developer @Aptech</h3>
          <p style={{ color: "#4B5563" }}>Nov 2025 - Present</p>
          <ul style={{ marginLeft: "24px", marginTop: "4px" }}>
            <li>Built responsive web applications with React & Tailwind CSS</li>
            <li>Optimized performance and improved UX flows</li>
            <li>Implemented state management with Redux</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section style={{ marginBottom: "24px" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "8px",
            display: "inline-block",
          }}
        >
          Education
        </h2>
        <p>B.Sc. Software Engineering - Aptech (2025)</p>
      </section>

      {/* Projects */}
      <section style={{ marginBottom: "24px" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "8px",
            display: "inline-block",
          }}
        >
          Projects
        </h2>
        <ul style={{ marginLeft: "24px", marginTop: "8px", lineHeight: "1.5" }}>
          <li>Portfolio SPA with React + Framer Motion</li>
          <li>Property Management System (Fullstack)</li>
          <li>Garden Articles & Videos App with React + Tailwind</li>
        </ul>
      </section>
    </div>
  );
});

export default ResumePreview;
