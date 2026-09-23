import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles, Terminal, Code2 } from 'lucide-react';
import { playCyberSound, toggleSound, isSoundEnabled } from '../utils/sound';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [soundOn, setSoundOn] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setSoundOn(isSoundEnabled());

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'timeline', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'timeline', label: 'Pendidikan & Exp' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Kontak' },
  ];

  const handleNavClick = (id) => {
    playCyberSound('click');
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  return (
    <>
      {/* Floating Centered Navbar with Blue Glow Effect */}
      <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl transition-all duration-300">
        <nav
          className={`relative flex items-center justify-between px-4 sm:px-6 py-2.5 md:py-3 rounded-full border border-[#2c67ed]/50 bg-[#090d1c]/90 backdrop-blur-xl shadow-glow-blue transition-all duration-300 ${scrolled ? 'border-[#2c67ed]/80 shadow-[0_0_30px_rgba(44,103,237,0.6)]' : ''
            }`}
        >
          {/* Subtle Cyber Corner Indicator */}
          <div className="absolute -top-1 left-6 w-3 h-0.5 bg-[#00f0ff] rounded-full shadow-[0_0_6px_#00f0ff]" />
          <div className="absolute -bottom-1 right-6 w-3 h-0.5 bg-[#ff007f] rounded-full shadow-[0_0_6px_#ff007f]" />

          {/* Logo / Brand Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            onMouseEnter={() => playCyberSound('hover')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2c67ed] to-[#00f0ff] p-[1.5px] transition-transform group-hover:scale-105 shadow-[0_0_12px_rgba(44,103,237,0.7)]">
              <div className="w-full h-full bg-[#070a14] rounded-[7px] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-[#00f0ff] group-hover:text-[#ff007f] transition-colors" />
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-heading text-xs font-bold tracking-widest text-white group-hover:text-[#00f0ff] transition-colors">
                NJ<span className="text-[#2c67ed]">.DEV</span>
              </span>
              <span className="text-[9px] font-mono text-[#00f0ff]/70 tracking-tighter">
                v2.0 // ONLINE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  onMouseEnter={() => playCyberSound('hover')}
                  className={`relative px-3.5 py-1.5 rounded-full font-subheading text-sm font-semibold tracking-wider transition-all duration-200 ${isActive
                    ? 'text-white bg-[#2c67ed]/25 border border-[#2c67ed] shadow-[0_0_15px_rgba(44,103,237,0.5)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_6px_#00f0ff]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action: Sound Toggle + Hire Me CTA Button */}
          <div className="flex items-center gap-2">
            {/* Audio Synth Sound Toggle */}
            <button
              onClick={handleSoundToggle}
              title={soundOn ? 'Matikan Efek Suara Cyber' : 'Aktifkan Efek Suara Cyber'}
              className="p-2 rounded-full border border-slate-700 hover:border-[#00f0ff] bg-slate-900/60 text-slate-300 hover:text-[#00f0ff] transition-all shadow-[0_0_10px_transparent] hover:shadow-[0_0_12px_rgba(0,240,255,0.4)]"
            >
              {soundOn ? (
                <Volume2 className="w-4 h-4 text-[#00f0ff]" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-500" />
              )}
            </button>

            {/* Quick Contact CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              onMouseEnter={() => playCyberSound('hover')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-heading text-xs font-bold text-white bg-gradient-to-r from-[#2c67ed] to-[#5487ff] hover:from-[#3573fa] hover:to-[#6ba0ff] shadow-[0_0_15px_rgba(44,103,237,0.6)] hover:shadow-[0_0_20px_rgba(44,103,237,0.9)] transition-all transform hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>HIRE ME</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                playCyberSound('click');
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-lg border border-[#2c67ed]/40 text-slate-200 hover:text-white bg-slate-900/80"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff007f]" /> : <Menu className="w-5 h-5 text-[#00f0ff]" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu with Cyber styling */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl border border-[#2c67ed]/60 bg-[#090d1c]/95 backdrop-blur-2xl shadow-[0_10px_35px_rgba(44,103,237,0.4)] animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl font-subheading text-base font-semibold text-left transition-all ${isActive
                      ? 'text-white bg-[#2c67ed]/20 border border-[#2c67ed] shadow-[0_0_12px_rgba(44,103,237,0.4)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]" />}
                  </button>
                );
              })}
              <button
                onClick={() => handleNavClick('contact')}
                className="mt-2 w-full py-2.5 rounded-xl font-heading text-xs font-bold text-center text-white bg-gradient-to-r from-[#2c67ed] to-[#00f0ff] shadow-[0_0_15px_rgba(44,103,237,0.5)]"
              >
                HUBUNGI SAYA / HIRE ME
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
