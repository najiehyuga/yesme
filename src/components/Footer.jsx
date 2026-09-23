import React from 'react';
import { ArrowUp, Terminal, Shield, Heart, Sparkles } from 'lucide-react';
import { playCyberSound } from '../utils/sound';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    playCyberSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-24 border-t border-[#2c67ed]/30 bg-[#04060d]/95 backdrop-blur-xl text-slate-400 font-mono text-xs overflow-hidden">
      {/* Laser Gradient Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2c67ed] to-transparent shadow-[0_0_10px_#2c67ed]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left Brand & Mission */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
              <span className="font-heading text-sm font-bold text-white tracking-widest">
                NJ<span className="text-[#2c67ed]">.PORTFOLIO</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-black/60 border border-slate-800 text-[10px] text-[#00f0ff]">
                CYBERPUNK_BUILD_v2.0
              </span>
            </div>
            <p className="text-slate-500 text-[11px] text-center md:text-left">
              Crafted with React, Tailwind CSS, Framer Motion & Cyberpunk Neon Aesthetics.
            </p>
          </div>

          {/* Center Telemetry Diagnostic */}
          <div className="hidden lg:flex items-center gap-4 text-[11px] text-slate-500">
            <div>NODE: <span className="text-slate-300">WSB-ID-01</span></div>
            <div>•</div>
            <div>STATUS: <span className="text-[#00ff66]">HEALTHY // 99.9%</span></div>
            <div>•</div>
            <div>SECURITY: <span className="text-[#00f0ff]">ENCRYPTED</span></div>
          </div>

          {/* Right: Back to Top Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              onMouseEnter={() => playCyberSound('hover')}
              className="p-3 rounded-2xl border border-[#2c67ed]/50 bg-[#090e1f] text-[#00f0ff] hover:text-white hover:border-[#00f0ff] hover:shadow-glow-blue transition-all flex items-center gap-2 group"
              title="Kembali ke Bagian Atas"
            >
              <span className="font-heading text-xs font-bold hidden sm:inline">TOP</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} {personal.name}. All systems operational.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with passion & neon by</span>
            <span className="text-[#00f0ff] font-semibold">{personal.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
