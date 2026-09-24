import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Layers, Sparkles, Terminal, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playCyberSound } from '../utils/sound';
import ProjectModal from './ProjectModal';

export default function Portfolio() {
  const { projects } = portfolioData;
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web Apps', 'Fullstack', 'UI/UX & Mobile'];

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter((p) => p.category === activeTab);

  const handleTabChange = (tab) => {
    playCyberSound('tab');
    setActiveTab(tab);
  };

  const openProjectDetail = (proj) => {
    playCyberSound('click');
    setSelectedProject(proj);
  };

  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#2c67ed]/40 bg-[#0b1124] text-xs font-mono text-[#00f0ff] mb-3 shadow-[0_0_12px_rgba(44,103,237,0.3)]">
          <Terminal className="w-3.5 h-3.5 text-[#2c67ed]" />
          <span>CYBER_VAULT // SHOWCASE</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-wide">
          PORTFOLIO <span className="text-[#2c67ed] text-glow-blue">PROYEK</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#2c67ed] to-transparent mt-3" />
        <p className="mt-4 text-slate-400 max-w-2xl font-sans text-sm sm:text-base">
          Kumpulan aplikasi web dan antarmuka interaktif yang dibangun dengan fokus pada performa cepat, estetika visual cyberpunk, dan pengalaman pengguna yang memikat.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
        {categories.map((cat) => {
          const isActive = activeTab === cat;
          return (
            <button
              key={cat}
              onClick={() => handleTabChange(cat)}
              onMouseEnter={() => playCyberSound('hover')}
              className={`px-5 py-2.5 rounded-full font-heading text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 relative ${isActive
                ? 'bg-gradient-to-r from-[#2c67ed] to-[#00f0ff] text-white shadow-glow-blue border border-[#2c67ed]'
                : 'bg-[#090e1f] text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800'
                }`}
            >
              {cat === 'All' ? 'Semua Proyek' : cat}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_6px_#00f0ff]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onMouseEnter={() => playCyberSound('hover')}
              className="group relative rounded-2xl border border-[#2c67ed]/40 bg-[#090e1f]/90 backdrop-blur-xl overflow-hidden shadow-cyber-card hover:border-[#2c67ed] hover:shadow-glow-blue transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image Banner */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Crect width='100%25' height='100%25' fill='%23090e1f'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%232c67ed' font-family='monospace' font-size='18'%3E[IMAGE PREVIEW]%3C/text%3E%3C/svg%3E";
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090e1f] via-[#090e1f]/40 to-transparent" />
                <div className="scanline" />

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#070b18]/90 text-[#00f0ff] border border-[#00f0ff]/40 shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                    {project.category}
                  </span>
                </div>

                {/* Quick View Button overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-[2px]">
                  <button
                    onClick={() => openProjectDetail(project)}
                    className="px-4 py-2 rounded-xl bg-[#2c67ed] text-white font-heading text-xs font-bold flex items-center gap-2 shadow-glow-blue hover:bg-[#3d7aff] transition-all transform hover:scale-105"
                  >
                    <Eye className="w-4 h-4" />
                    <span>LIHAT DETAIL</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 font-sans leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-slate-300 bg-slate-900/90 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons Row */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                    <button
                      onClick={() => openProjectDetail(project)}
                      className="text-xs font-heading font-semibold text-[#00f0ff] hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>DETAIL</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && project.githubUrl.trim() !== '' && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub Repository"
                          className="p-2 rounded-lg border border-slate-800 hover:border-[#00f0ff] text-slate-400 hover:text-white bg-black/40 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demoUrl && project.demoUrl.trim() !== '' && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live Demo"
                          className="p-2 rounded-lg border border-[#2c67ed]/50 hover:border-[#2c67ed] text-[#2c67ed] hover:text-white hover:bg-[#2c67ed] transition-all shadow-[0_0_10px_rgba(44,103,237,0.3)]"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Tech Corners */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#00f0ff] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#2c67ed] pointer-events-none" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
