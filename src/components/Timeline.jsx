import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin, Award, CheckCircle, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playCyberSound } from '../utils/sound';

export default function Timeline() {
  const [activeTab, setActiveTab] = useState('education');
  const { education, experience } = portfolioData;

  const handleTabChange = (tab) => {
    playCyberSound('tab');
    setActiveTab(tab);
  };

  return (
    <section id="timeline" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#2c67ed]/40 bg-[#0b1124] text-xs font-mono text-[#00f0ff] mb-3 shadow-[0_0_12px_rgba(44,103,237,0.3)]">
          <Terminal className="w-3.5 h-3.5 text-[#2c67ed]" />
          <span>JOURNEY_LOG // CAREER_&_STUDY</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-wide">
          RIWAYAT & <span className="text-[#00f0ff] text-glow-cyan">PENGALAMAN</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent mt-3" />
        <p className="mt-4 text-slate-400 max-w-2xl font-sans text-sm sm:text-base">
          Jejak langkah riwayat pendidikan formal, pelatihan intensif, serta pengalaman kerja dan proyek yang membentuk kompetensi saya saat ini.
        </p>
      </div>

      {/* Tab Controls: Education vs Experience */}
      <div className="flex justify-center mb-14">
        <div className="p-1.5 rounded-2xl bg-[#0a0e1c] border border-[#2c67ed]/40 backdrop-blur-xl flex gap-2 shadow-[0_0_20px_rgba(44,103,237,0.2)]">
          <button
            onClick={() => handleTabChange('education')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-heading text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 ${activeTab === 'education'
                ? 'bg-gradient-to-r from-[#2c67ed] to-[#3f79ff] text-white shadow-glow-blue border border-[#2c67ed]'
                : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
          >
            <GraduationCap className="w-4 h-4 text-[#00f0ff]" />
            <span>RIWAYAT PENDIDIKAN</span>
          </button>

          <button
            onClick={() => handleTabChange('experience')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-heading text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 ${activeTab === 'experience'
                ? 'bg-gradient-to-r from-[#00f0ff] to-[#00bfff] text-slate-950 shadow-glow-cyan border border-[#00f0ff]'
                : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
          >
            <Briefcase className="w-4 h-4 text-[#ff007f]" />
            <span>PENGALAMAN KERJA</span>
          </button>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Glowing Laser Line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#2c67ed] via-[#00f0ff] to-[#ff007f] shadow-[0_0_10px_#2c67ed]" />

        <AnimatePresence mode="wait">
          {activeTab === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-10"
            >
              {education.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`relative flex flex-col sm:flex-row items-start ${isEven ? 'sm:flex-row-reverse' : ''
                      } gap-8 group`}
                  >
                    {/* Glowing Node Dot in Center */}
                    <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-7 h-7 rounded-full bg-[#070b18] border-2 border-[#2c67ed] shadow-[0_0_12px_#2c67ed] flex items-center justify-center z-10 group-hover:scale-125 group-hover:border-[#00f0ff] transition-all">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-pulse" />
                    </div>

                    {/* Timeline Content Card */}
                    <div
                      onMouseEnter={() => playCyberSound('hover')}
                      className={`ml-12 sm:ml-0 sm:w-1/2 ${isEven ? 'sm:pl-10 text-left' : 'sm:pr-10 text-left'
                        }`}
                    >
                      <div className="p-6 rounded-2xl border border-[#2c67ed]/40 bg-[#090e1f]/90 backdrop-blur-xl shadow-cyber-card hover:border-[#2c67ed] hover:shadow-[0_0_25px_rgba(44,103,237,0.4)] transition-all duration-300">
                        {/* Header Period & Institution */}
                        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
                          <span className="font-heading text-xs font-bold text-[#00f0ff] flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.period}
                          </span>
                          {item.gpa && (
                            <span className="px-2.5 py-0.5 rounded-md bg-[#2c67ed]/20 text-[#2c67ed] text-xs font-mono font-bold border border-[#2c67ed]/30">
                              {item.gpa}
                            </span>
                          )}
                        </div>

                        {/* Degree & School */}
                        <div className="mt-3">
                          <h4 className="font-heading text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                            {item.degree}
                          </h4>
                          <p className="font-subheading text-sm font-semibold text-slate-300">
                            {item.institution}
                          </p>
                        </div>

                        {/* Description */}
                        {item.description && (
                          <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                            {item.description}
                          </p>
                        )}

                        {/* Education Skills/Focus */}
                        {item.skills && (
                          <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                            {item.skills.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-black/40 border border-slate-800"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Achievements List */}
                        {item.achievements && (
                          <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5">
                            <span className="text-[11px] font-mono text-[#ff007f] font-semibold flex items-center gap-1">
                              <Award className="w-3 h-3" />
                              PENCAPAIAN UTAMA:
                            </span>
                            {item.achievements.map((ach, aIdx) => (
                              <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                                <span className="text-[#00ff66] mt-0.5">▸</span>
                                <span>{ach}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-10"
            >
              {experience.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`relative flex flex-col sm:flex-row items-start ${isEven ? 'sm:flex-row-reverse' : ''
                      } gap-8 group`}
                  >
                    {/* Glowing Node Dot in Center */}
                    <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-7 h-7 rounded-full bg-[#070b18] border-2 border-[#00f0ff] shadow-[0_0_12px_#00f0ff] flex items-center justify-center z-10 group-hover:scale-125 group-hover:border-[#ff007f] transition-all">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff007f] animate-pulse" />
                    </div>

                    {/* Timeline Content Card */}
                    <div
                      onMouseEnter={() => playCyberSound('hover')}
                      className={`ml-12 sm:ml-0 sm:w-1/2 ${isEven ? 'sm:pl-10 text-left' : 'sm:pr-10 text-left'
                        }`}
                    >
                      <div className="p-6 rounded-2xl border border-[#00f0ff]/40 bg-[#090e1f]/90 backdrop-blur-xl shadow-cyber-card hover:border-[#00f0ff] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-300">
                        {/* Header Period & Type */}
                        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
                          <span className="font-heading text-xs font-bold text-[#00f0ff] flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.period}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-md bg-[#00f0ff]/15 text-[#00f0ff] text-xs font-mono font-bold border border-[#00f0ff]/30">
                            {item.type}
                          </span>
                        </div>

                        {/* Role & Company */}
                        <div className="mt-3">
                          <h4 className="font-heading text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                            {item.role}
                          </h4>
                          <p className="font-subheading text-sm font-semibold text-[#2c67ed]">
                            {item.company} <span className="text-slate-400 font-normal">({item.location})</span>
                          </p>
                        </div>

                        {/* Description */}
                        <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                          {item.description}
                        </p>

                        {/* Highlights */}
                        {item.highlights && (
                          <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5">
                            <span className="text-[11px] font-mono text-[#00ff66] font-semibold flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" />
                              KONTRIBUSI UTAMA:
                            </span>
                            {item.highlights.map((high, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                                <span className="text-[#00f0ff] mt-0.5">▸</span>
                                <span>{high}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tech Stack Chips */}
                        {item.skills && (
                          <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                            {item.skills.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-black/40 border border-slate-800"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
