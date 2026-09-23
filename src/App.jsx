import React from 'react';
import CyberBackground from './components/CyberBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-100 bg-[#050608] selection:bg-[#2c67ed] selection:text-white">
      {/* Cyberpunk Dynamic Ambient Background & Grid */}
      <CyberBackground />

      {/* Floating Centered Navbar with Blue Glow Effect */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Timeline />
        <Portfolio />
        <Contact />
      </main>

      {/* Futuristic Cyber Footer */}
      <Footer />
    </div>
  );
}
