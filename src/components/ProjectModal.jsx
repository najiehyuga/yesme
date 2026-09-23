import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Terminal, Sparkles } from 'lucide-react';
import { playCyberSound } from '../utils/sound';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop Blur Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playCyberSound('click');
            onClose();
          }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window with Cyberpunk Borders and Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl rounded-3xl border border-[#2c67ed] bg-[#090d1c] p-6 sm:p-8 shadow-[0_0_50px_rgba(44,103,237,0.5)] z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Top Cyber HUD Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66] animate-pulse" />
              <span className="font-mono text-xs text-[#00f0ff] uppercase tracking-wider">
                PROJECT_SPEC // {project.category}
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={() => {
                playCyberSound('click');
                onClose();
              }}
              className="p-1.5 rounded-lg border border-slate-700 hover:border-[#ff007f] text-slate-400 hover:text-[#ff007f] bg-slate-900/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Project Image Banner */}
          <div className="relative mt-6 rounded-2xl overflow-hidden border border-[#2c67ed]/40 h-52 sm:h-72">
            <img
              src={project.image}
              alt={project.title}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = './assets/project-cyberdeck.jpg';
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d1c] via-transparent to-transparent" />
            <div className="scanline" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#070b18]/90 text-[#00f0ff] border border-[#00f0ff]/50">
                {project.category}
              </span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="mt-6 space-y-3">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && (
            <div className="mt-6 pt-5 border-t border-slate-800 space-y-3">
              <h4 className="font-heading text-sm font-bold text-[#00f0ff] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#ff007f]" />
                FITUR UTAMA & ARSITEKTUR:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-3 rounded-xl bg-[#0e1424] border border-slate-800/80 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stacks */}
          <div className="mt-6 pt-5 border-t border-slate-800">
            <h4 className="font-mono text-xs text-slate-400 mb-3 uppercase tracking-wider">
              TEKNOLOGI YANG DIGUNAKAN:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono text-[#00f0ff] bg-[#00f0ff]/10 border border-[#00f0ff]/30"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-4 justify-end">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => playCyberSound('hover')}
              className="px-5 py-2.5 rounded-xl font-heading text-xs font-bold text-slate-300 hover:text-white border border-slate-700 hover:border-[#00f0ff] bg-slate-900/60 flex items-center gap-2 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>SOURCE CODE</span>
            </a>

            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => playCyberSound('hover')}
              className="px-6 py-2.5 rounded-xl font-heading text-xs font-bold text-white bg-gradient-to-r from-[#2c67ed] to-[#00f0ff] shadow-glow-blue hover:shadow-[0_0_30px_rgba(44,103,237,0.7)] flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95"
            >
              <span>BUKA LIVE DEMO</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Corner Cyber Brackets */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#2c67ed] pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#00f0ff] pointer-events-none" />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
