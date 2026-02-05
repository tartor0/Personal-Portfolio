import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import AnimatedBackground from './pages/AnimatedBackground';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-bg text-text-main selection:bg-accent-blue/20 overflow-x-hidden">
        <AnimatedBackground />
        <div className="grid-background" />
        <div className="noise-texture" />
        <Navbar />
        <main className="relative z-10">
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
