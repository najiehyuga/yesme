import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, ShieldCheck, Mail, Code2, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playCyberSound } from '../utils/sound';

export default function Hero() {
  const { personal, stats } = portfolioData;
  const roles = personal.roles;

  // Typewriter effect state
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeed(90);

        if (displayedText === fullText) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting backward
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(45);

        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  const scrollToSection = (id) => {
    playCyberSound('click');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Big Cyberpunk Name & Typewriter */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start space-y-6"
        >
          {/* Cyber HUD Terminal Breadcrumb */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2c67ed]/50 bg-[#0d1428]/80 text-[#00f0ff] font-mono text-xs shadow-[0_0_15px_rgba(44,103,237,0.3)]">
            <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-ping" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] -ml-2.5 mr-1" />
            <span className="text-white/80">STATUS:</span>
            <span className="font-semibold text-[#00ff66] tracking-wider">{personal.status}</span>
          </div>

          {/* Big Name with Cyberpunk Glowing Gradient & Glitch effect */}
          <div className="space-y-2">
            <p className="font-subheading text-sm md:text-base font-semibold tracking-widest text-[#00f0ff] uppercase">
              // HALO, SAYA
            </p>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-none">
              <span className="block text-white hover:text-[#00f0ff] transition-colors glitch-hover cursor-default">
                {personal.name.split(' ')[0]}
              </span>
              <span className="block bg-gradient-to-r from-[#2c67ed] via-[#00f0ff] to-[#ff007f] bg-clip-text text-transparent text-glow-blue mt-1">
                {personal.name.split(' ').slice(1).join(' ')}
              </span>
            </h1>
          </div>

          {/* Self-Typing Typewriter Title */}
          <div className="flex items-center gap-2 font-mono text-xl sm:text-2xl md:text-3xl text-slate-200 min-h-[48px] py-1 px-3 rounded-lg bg-black/40 border border-slate-800/80 shadow-inner">
            <span className="text-[#2c67ed] font-bold">&gt;</span>
            <span className="text-[#ff007f] font-semibold">{displayedText}</span>
            <span className="inline-block w-2.5 h-6 bg-[#00f0ff] animate-pulse shadow-[0_0_8px_#00f0ff]" />
          </div>

          {/* Bio Description */}
          <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-sans font-normal">
            {personal.bio}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#2c67ed]/30 bg-[#0c1224] text-xs font-mono text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-[#2c67ed]" />
              <span>STACK: React, Tailwind, PHP, MySQL</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#00f0ff]/30 bg-[#0c1224] text-xs font-mono text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>LOC: {personal.location}</span>
            </div>
          </div>

          {/* Call to Actions Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* Primary Button: Blue Glow #2c67ed */}
            <button
              onClick={() => scrollToSection('portfolio')}
              onMouseEnter={() => playCyberSound('hover')}
              className="group relative px-6 py-3.5 rounded-xl font-heading text-sm font-bold text-white bg-gradient-to-r from-[#2c67ed] to-[#3a75f8] hover:from-[#3572f8] hover:to-[#508aff] shadow-glow-blue hover:shadow-[0_0_35px_rgba(44,103,237,0.8)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span>JELAJAHI PORTOFOLIO</span>
              <ArrowRight className="w-4 h-4 text-[#00f0ff] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Button: Cyber Cyan Outline */}
            <button
              onClick={() => scrollToSection('contact')}
              onMouseEnter={() => playCyberSound('hover')}
              className="px-6 py-3.5 rounded-xl font-heading text-sm font-bold text-[#00f0ff] border border-[#00f0ff]/60 hover:border-[#00f0ff] bg-[#00f0ff]/5 hover:bg-[#00f0ff]/15 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>HUBUNGI SAYA</span>
              <Mail className="w-4 h-4 text-[#00f0ff]" />
            </button>
          </div>
        </motion.div>

        {/* Right Column: Authentic Developer Showcase Card (No fake terminal / no fake telemetry) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#2c67ed] via-[#00f0ff] to-[#ff007f] rounded-3xl blur-xl opacity-30 animate-pulse-slow" />

            {/* Showcase Card Container */}
            <div className="relative rounded-2xl border border-[#2c67ed]/50 bg-[#090e1f]/95 backdrop-blur-2xl p-6 shadow-cyber-card overflow-hidden">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66] animate-pulse" />
                  <span className="font-mono text-xs text-[#00f0ff] font-semibold tracking-wider">DEVELOPER_PROFILE // 01</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 bg-black/40 px-2.5 py-0.5 rounded border border-slate-800">
                  {personal.codeName}
                </div>
              </div>

              {/* Developer Avatar & Quick Info */}
              <div className="mt-5 flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-[#2c67ed] bg-[#0c1224] shrink-0 shadow-[0_0_15px_rgba(44,103,237,0.4)]">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="scanline" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading text-lg font-bold text-white leading-tight">
                    {personal.name}
                  </h3>
                  <p className="font-mono text-xs text-[#00f0ff]">
                    Junior Web Developer
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-[#ff007f]" />
                    <span>Wonosobo, Jawa Tengah</span>
                  </div>
                </div>
              </div>

              {/* Verified Key Highlights */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2.5">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  FOKUS & KREDENSIAL:
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <GraduationCap className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                  <span>S1 Teknik Informatika (UNSIQ Wonosobo)</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                  <span>Pengalaman Dev & Admin Toko Retail (2+ Tahun)</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <Code2 className="w-4 h-4 text-[#2c67ed] shrink-0 mt-0.5" />
                  <span>4 Proyek Web Riil (React, PHP & MySQL)</span>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="mt-5 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {['React.js', 'Tailwind CSS', 'PHP', 'MySQL', 'JavaScript', 'Git'].map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-200 bg-black/50 border border-slate-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner Tech Decorative Accents */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00f0ff] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#ff007f] pointer-events-none" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
