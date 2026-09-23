import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, ShieldCheck, Sparkles, Download, ExternalLink, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playCyberSound } from '../utils/sound';

export default function Hero() {
  const { personal } = portfolioData;
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
            <span className="text-white/80">SYS_STATUS:</span>
            <span className="font-semibold text-[#00ff66] tracking-wider">{personal.status}</span>
          </div>

          {/* Big Name with Cyberpunk Glowing Gradient & Glitch effect */}
          <div className="space-y-2">
            <p className="font-subheading text-sm md:text-base font-semibold tracking-widest text-[#00f0ff] uppercase">
              // HELLO WORLD, INTRODUCING
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
          <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed font-sans font-normal">
            {personal.bio}
          </p>

          {/* Cyber Badges */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#2c67ed]/30 bg-[#0c1224] text-xs font-mono text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-[#2c67ed]" />
              <span>STACK: React + Tailwind + Vite</span>
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
              <Sparkles className="w-4 h-4 text-[#ff007f]" />
            </button>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3D Cyber HUD Terminal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#2c67ed] via-[#00f0ff] to-[#ff007f] rounded-3xl blur-xl opacity-40 animate-pulse-slow" />

            {/* HUD Card Container */}
            <div className="relative rounded-2xl border border-[#2c67ed]/50 bg-[#090e1f]/90 backdrop-blur-2xl p-6 shadow-cyber-card overflow-hidden">
              
              {/* Top Card Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff007f] shadow-[0_0_8px_#ff007f]" />
                  <div className="w-3 h-3 rounded-full bg-[#fcee0a] shadow-[0_0_8px_#fcee0a]" />
                  <div className="w-3 h-3 rounded-full bg-[#00ff66] shadow-[0_0_8px_#00ff66]" />
                  <span className="ml-2 font-mono text-xs text-slate-400">CYBER_TERMINAL.sh</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#00f0ff]">
                  <Activity className="w-3.5 h-3.5 text-[#00f0ff] animate-spin-slow" />
                  <span>PING: 14ms</span>
                </div>
              </div>

              {/* Terminal Code Snippet Body */}
              <div className="mt-4 font-mono text-xs sm:text-sm space-y-2 text-slate-300">
                <div className="text-slate-500">// System diagnostics & developer telemetry</div>
                <div>
                  <span className="text-[#ff007f]">const</span>{' '}
                  <span className="text-[#00f0ff]">developer</span> = &#123;
                </div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-[#fcee0a]">"{personal.name}"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">role:</span>{' '}
                    <span className="text-[#00ff66]">"Junior Developer"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">focus:</span>{' '}
                    <span className="text-[#2c67ed]">["React", "Tailwind", "Next.js"]</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">coffee:</span>{' '}
                    <span className="text-[#ff007f]">true</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">passion:</span>{' '}
                    <span className="text-[#00f0ff]">"Infinity // 100%"</span>
                  </div>
                </div>
                <div>&#125;;</div>
                <div className="pt-2 text-[#00ff66] flex items-center gap-2">
                  <span>&gt; execute(createSuperbWebsites());</span>
                </div>
              </div>

              {/* Telemetry Meter Gauges */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-3 text-center">
                <div className="p-2 rounded-lg bg-black/40 border border-[#2c67ed]/30">
                  <div className="font-heading text-lg font-bold text-[#2c67ed]">100%</div>
                  <div className="text-[10px] font-mono text-slate-400">COMMITMENT</div>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-[#00f0ff]/30">
                  <div className="font-heading text-lg font-bold text-[#00f0ff]">60 FPS</div>
                  <div className="text-[10px] font-mono text-slate-400">SMOOTH UI</div>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-[#ff007f]/30">
                  <div className="font-heading text-lg font-bold text-[#ff007f]">A+</div>
                  <div className="text-[10px] font-mono text-slate-400">CODE CLEAN</div>
                </div>
              </div>

              {/* Corner Tech Decorative Accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00f0ff] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#ff007f] pointer-events-none" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
