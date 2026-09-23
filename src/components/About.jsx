import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Award, Code, CheckCircle2, Zap, Layers, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playCyberSound } from '../utils/sound';

export default function About() {
  const { personal, stats, skills } = portfolioData;
  const [activeSkillCategory, setActiveSkillCategory] = useState('frontend');

  const skillCategories = [
    { id: 'frontend', label: 'Frontend', count: skills.frontend.length },
    { id: 'backend', label: 'Backend & DB', count: skills.backend.length },
    { id: 'tools', label: 'Tools & DevOps', count: skills.tools.length },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#2c67ed]/40 bg-[#0b1124] text-xs font-mono text-[#00f0ff] mb-3 shadow-[0_0_12px_rgba(44,103,237,0.3)]">
          <Terminal className="w-3.5 h-3.5 text-[#2c67ed]" />
          <span>SYS_MODULE: ABOUT_DEVELOPER</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-wide">
          TENTANG <span className="text-[#2c67ed] text-glow-blue">SAYA</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#2c67ed] to-transparent mt-3" />
        <p className="mt-4 text-slate-400 max-w-2xl font-sans text-sm sm:text-base">
          Mengenal lebih dalam identitas pengembang, visi teknologi, keahlian teknis, dan pencapaian performa proyek.
        </p>
      </div>

      {/* Main About Layout: Profile Photo + Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">

        {/* Profile Photo with Cyberpunk Glowing Avatar Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group">
            {/* Holographic Glowing Outer Rings */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#2c67ed] via-[#00f0ff] to-[#ff007f] opacity-40 blur-xl group-hover:opacity-70 transition-opacity duration-500 animate-pulse-slow" />

            {/* Rotating Cyber Ring */}
            <div className="absolute -inset-3 rounded-3xl border-2 border-dashed border-[#00f0ff]/40 animate-spin-slow pointer-events-none" />

            {/* Avatar Frame Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-[#2c67ed] bg-[#0c1224] shadow-[0_0_30px_rgba(44,103,237,0.5)]">
              {/* Photo Image */}
              <img
                src={personal.avatar}
                alt={personal.name}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = './assets/profile1.png';
                }}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
              />

              {/* Cyber Scanline on Avatar */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0ff]/10 to-[#2c67ed]/20 pointer-events-none mix-blend-overlay" />
              <div className="scanline" />

              {/* Cyber HUD Corner Badges */}
              <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-xl bg-[#090e1f]/90 backdrop-blur-md border border-[#2c67ed]/60 flex items-center justify-between">
                <div>
                  <div className="font-heading text-xs font-bold text-white tracking-wider">
                    {personal.name}
                  </div>
                  <div className="font-mono text-[10px] text-[#00f0ff]">
                    {personal.codeName}
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66] shadow-[0_0_8px_#00ff66] animate-pulse" />
              </div>

              {/* Tech Bracket Details */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#00f0ff]" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#ff007f]" />
            </div>
          </div>
        </motion.div>

        {/* Narrative & Philosophy */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2c67ed]/15 border border-[#2c67ed]/40 text-[#2c67ed] font-mono text-xs">
            <User className="w-3.5 h-3.5" />
            <span>DEV_PROFILE // EXECUTIVE SUMMARY</span>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-snug">
            Membangun Pengalaman Digital Masa Depan dengan Semangat <span className="text-[#00f0ff]">Cyberpunk</span> & Ketelitian Kode
          </h3>

          <p className="text-slate-300 text-base leading-relaxed">
            Halo! Saya <strong>{personal.name}</strong>, seorang developer yang bersemangat dalam menjembatani ide kreatif dengan rekayasa web mutakhir. Saya berfokus pada ekosistem JavaScript modern, khususnya <strong>React</strong> dan <strong>Tailwind CSS</strong>, untuk menciptakan website yang tidak hanya berfungsi secara presisi, tetapi juga memanjakan mata pengguna.
          </p>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bagi saya, setiap baris kode adalah fondasi dari sebuah pengalaman interaktif. Ketertarikan mendalam saya pada teknologi masa kini mendorong saya untuk terus belajar secara konsisten, mengeksplorasi arsitektur frontend, optimasi performa, serta prinsip UI/UX yang modern dan intuitif.
          </p>

          {/* Quick Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-slate-800 bg-[#0c1224]/80 hover:border-[#2c67ed]/60 transition-all">
              <div className="flex items-center gap-2.5 text-[#2c67ed] font-subheading font-bold text-base mb-1">
                <Zap className="w-4 h-4" />
                <span>Kecepatan & Responsivitas</span>
              </div>
              <p className="text-xs text-slate-400">
                Memastikan website berjalan ringan, cepat dimuat, dan responsif di semua ukuran layar gadget.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-[#0c1224]/80 hover:border-[#00f0ff]/60 transition-all">
              <div className="flex items-center gap-2.5 text-[#00f0ff] font-subheading font-bold text-base mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Estetika & Interaktivitas</span>
              </div>
              <p className="text-xs text-slate-400">
                Menghadirkan transisi mikro animasi modern dan desain visual cyberpunk yang memukau.
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Project Statistics Grid (Statistik Project) */}
      <div className="mb-20">
        <div className="text-center mb-8">
          <p className="font-mono text-xs text-[#ff007f] uppercase tracking-widest">// METRICS & IMPACT</p>
          <h3 className="font-heading text-2xl font-bold text-white mt-1">STATISTIK PENCAPAIAN PROYEK</h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => {
            const glowStyles = [
              'border-[#2c67ed]/50 text-[#2c67ed] shadow-[0_0_20px_rgba(44,103,237,0.25)]',
              'border-[#00f0ff]/50 text-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.25)]',
              'border-[#ff007f]/50 text-[#ff007f] shadow-[0_0_20px_rgba(255,0,127,0.25)]',
              'border-[#fcee0a]/50 text-[#fcee0a] shadow-[0_0_20px_rgba(252,238,10,0.25)]',
            ][idx % 4];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => playCyberSound('hover')}
                className={`relative p-6 rounded-2xl bg-[#0a0e1c]/80 backdrop-blur-md border ${glowStyles} flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight group-hover:scale-110 transition-transform">
                  {item.value}
                </div>
                <div className="font-subheading text-base font-bold text-white mt-2">
                  {item.label}
                </div>
                <div className="font-mono text-xs text-slate-400 mt-1">
                  {item.detail}
                </div>
                {/* Tech Bracket Corner */}
                <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-current" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Skills Matrix with Cyberpunk Bars */}
      <div className="p-6 sm:p-8 rounded-3xl border border-[#2c67ed]/40 bg-[#080d1e]/80 backdrop-blur-xl shadow-cyber-card">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="font-mono text-xs text-[#00f0ff] uppercase">// TECH ARSENAL</span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              MATRIKS KEAHLIAN TEKNOLOGI
            </h3>
          </div>

          {/* Skill Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  playCyberSound('tab');
                  setActiveSkillCategory(cat.id);
                }}
                className={`px-4 py-2 rounded-xl font-subheading text-sm font-semibold tracking-wider transition-all ${activeSkillCategory === cat.id
                    ? 'bg-[#2c67ed] text-white shadow-glow-blue border border-[#2c67ed]'
                    : 'bg-black/40 text-slate-400 hover:text-white border border-slate-800'
                  }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* Skill Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills[activeSkillCategory].map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center text-sm font-mono">
                <span className="text-white font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00f0ff]" />
                  {skill.name}
                </span>
                <span className="text-[#00f0ff]">{skill.level}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-900 border border-slate-800 overflow-hidden p-0.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  className="h-full rounded-full bg-gradient-to-r from-[#2c67ed] to-[#00f0ff] shadow-[0_0_10px_#2c67ed]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
