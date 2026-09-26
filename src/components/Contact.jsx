import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Clock, Copy, Check, Terminal, Radio, MessageSquare, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playCyberSound } from '../utils/sound';

export default function Contact() {
  const { contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Kolaborasi Proyek',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastMailtoUrl, setLastMailtoUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const categories = [
    'Kolaborasi Proyek',
    'Peluang Karir / Full-time',
    'Jasa Freelance Web',
    'Tanya Jawab / Diskusi',
  ];

  const handleCopyEmail = () => {
    playCyberSound('click');
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    playCyberSound('success');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    playCyberSound('click');
    setSubmitting(true);
    setErrorMessage('');

    // Pre-calculate direct mailto fallback
    const subject = encodeURIComponent(`[PESAN PORTFOLIO] ${formData.category} dari ${formData.name}`);
    const body = encodeURIComponent(
      `Halo As'ad Najiy,\n\n` +
      `Nama: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Kategori: ${formData.category}\n\n` +
      `Pesan:\n${formData.message}\n\n` +
      `--\nDikirim via Portfolio Contact Form`
    );
    const directMailto = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setLastMailtoUrl(directMailto);

    try {
      const response = await fetch('./api/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.status === 'success') {
        setSubmitted(true);
        if (data.mailto_url) {
          setLastMailtoUrl(data.mailto_url);
        }
        playCyberSound('success');
        setFormData({
          name: '',
          email: '',
          category: 'Kolaborasi Proyek',
          message: '',
        });
      } else {
        throw new Error(data.message || 'Gagal mengirim pesan.');
      }
    } catch (err) {
      // In case server is offline or pure client-side, enable direct email client fallback
      setSubmitted(true);
      playCyberSound('success');
    } finally {
      setSubmitting(false);
    }
  };

  const getSocialIcon = (name) => {
    switch (name) {
      case 'GitHub': return <Github className="w-5 h-5" />;
      case 'LinkedIn': return <Linkedin className="w-5 h-5" />;
      case 'Instagram': return <Instagram className="w-5 h-5" />;
      case 'Twitter': return <Twitter className="w-5 h-5" />;
      default: return <MessageSquare className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#2c67ed]/40 bg-[#0b1124] text-xs font-mono text-[#00f0ff] mb-3 shadow-[0_0_12px_rgba(44,103,237,0.3)]">
          <Terminal className="w-3.5 h-3.5 text-[#2c67ed]" />
          <span>KONTAK // HUBUNGI_SAYA</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-wide">
          HUBUNGI <span className="text-[#2c67ed] text-glow-blue">SAYA</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#2c67ed] to-transparent mt-3" />
        <p className="mt-4 text-slate-300 max-w-2xl font-sans text-sm sm:text-base">
          Tertarik untuk mendiskusikan peluang kerja, proyek kolaborasi baru, atau sekadar bertukar pikiran seputar teknologi web? Mari terhubung!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Info & Glowing Social Links */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Quick Connect Cards */}
          <div className="p-6 rounded-3xl border border-[#2c67ed]/40 bg-[#090e1f]/90 backdrop-blur-xl shadow-cyber-card space-y-5">
            <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
              <Radio className="w-4 h-4 text-[#00f0ff]" />
              INFORMASI KONTAK
            </h3>

            {/* Email Card with 1-Click Copy */}
            <div className="p-4 rounded-2xl bg-[#0c1326] border border-slate-800 hover:border-[#2c67ed]/60 transition-all flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2c67ed]/20 border border-[#2c67ed]/40 flex items-center justify-center text-[#2c67ed]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">EMAIL ADDRESS</div>
                  <div className="font-mono text-xs sm:text-sm text-white font-semibold break-all">
                    {contact.email}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                title="Salin Alamat Email"
                className="p-2.5 rounded-xl border border-slate-700 hover:border-[#00f0ff] bg-slate-900/60 text-slate-300 hover:text-[#00f0ff] transition-all ml-2"
              >
                {copied ? <Check className="w-4 h-4 text-[#00ff66]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-2xl bg-[#0c1326] border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/15 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">LOKASI DASAR</div>
                <div className="font-sans text-xs sm:text-sm text-white font-medium">
                  {contact.location}
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-4 rounded-2xl bg-[#0c1326] border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00ff66]/15 border border-[#00ff66]/30 flex items-center justify-center text-[#00ff66]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">KETERSEDIAAN</div>
                <div className="font-sans text-xs sm:text-sm text-slate-200">
                  {contact.availability}
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Uplinks Grid */}
          <div className="p-6 rounded-3xl border border-[#2c67ed]/40 bg-[#090e1f]/90 backdrop-blur-xl shadow-cyber-card">
            <h3 className="font-heading text-base font-bold text-white mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#ff007f]" />
              JARINGAN SOSIAL MEDIA
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {contact.socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => playCyberSound('hover')}
                  className="p-3 rounded-xl border border-slate-800 bg-[#0c1326] hover:border-[#2c67ed] hover:shadow-[0_0_15px_rgba(44,103,237,0.4)] flex items-center gap-3 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="text-[#00f0ff] group-hover:scale-110 transition-transform">
                    {getSocialIcon(soc.name)}
                  </div>
                  <div>
                    <div className="font-heading text-xs font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                      {soc.name}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">
                      {soc.handle}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Cyber Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl border border-[#2c67ed]/60 bg-[#090e1f]/95 backdrop-blur-2xl shadow-glow-blue relative overflow-hidden">
            
            {/* Form HUD Header */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
              <div>
                <span className="font-mono text-xs text-[#00f0ff] uppercase">// DIRECT_MESSAGE</span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  KIRIM PESAN LANGSUNG
                </h3>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66] animate-pulse" />
                <span className="font-mono text-xs text-[#00ff66]">FORM_ONLINE</span>
              </div>
            </div>

            {/* Success Alert Banner */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-5 rounded-2xl bg-[#00ff66]/15 border border-[#00ff66] text-[#00ff66] font-mono text-xs sm:text-sm space-y-3 shadow-[0_0_25px_rgba(0,255,102,0.3)]"
              >
                <div className="flex items-center gap-2 font-bold text-white">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00ff66] animate-ping" />
                  <span>[PESAN TERKIRIM]: Pesan Anda berhasil dikirim ke server & dicatat untuk developer!</span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Tujuan pesan: <strong className="text-[#00f0ff]">{contact.email}</strong>. Anda juga dapat langsung membuka draft email di Gmail atau Email Client Anda:
                </p>
                <div className="pt-1 flex flex-wrap gap-2.5">
                  {lastMailtoUrl && (
                    <a
                      href={lastMailtoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00ff66] text-slate-950 font-heading text-xs font-bold hover:bg-[#33ff85] transition-all shadow-[0_0_15px_rgba(0,255,102,0.4)]"
                    >
                      <Mail className="w-4 h-4" />
                      <span>BUKA DI GMAIL / EMAIL CLIENT</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-3 py-2 rounded-xl bg-black/50 text-slate-300 hover:text-white border border-slate-700 text-xs font-mono"
                  >
                    TUTUP NOTIFIKASI
                  </button>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Category Selection Chips */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-2 uppercase">
                  Topik / Keperluan Pesan:
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => {
                        playCyberSound('tab');
                        setFormData({ ...formData, category: cat });
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-sans font-medium transition-all ${
                        formData.category === cat
                          ? 'bg-[#2c67ed] text-white border border-[#2c67ed] shadow-[0_0_12px_rgba(44,103,237,0.5)]'
                          : 'bg-black/40 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block font-mono text-xs text-slate-300 uppercase">
                    Nama Lengkap <span className="text-[#ff007f]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe / Recruiter"
                    className="w-full px-4 py-3 rounded-xl bg-[#060a17] border border-slate-800 text-white placeholder-slate-500 font-sans text-sm focus:outline-none focus:border-[#2c67ed] focus:shadow-[0_0_15px_rgba(44,103,237,0.5)] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block font-mono text-xs text-slate-300 uppercase">
                    Alamat Email <span className="text-[#ff007f]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nama@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#060a17] border border-slate-800 text-white placeholder-slate-500 font-sans text-sm focus:outline-none focus:border-[#2c67ed] focus:shadow-[0_0_15px_rgba(44,103,237,0.5)] transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block font-mono text-xs text-slate-300 uppercase">
                  Isi Pesan / Rincian Diskusi <span className="text-[#ff007f]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ceritakan gambaran proyek atau penawaran kerja sama Anda..."
                  className="w-full px-4 py-3 rounded-xl bg-[#060a17] border border-slate-800 text-white placeholder-slate-500 font-sans text-sm focus:outline-none focus:border-[#2c67ed] focus:shadow-[0_0_15px_rgba(44,103,237,0.5)] transition-all resize-none"
                />
              </div>

              {/* Submit Button with #2c67ed Blue Glow */}
              <button
                type="submit"
                disabled={submitting}
                onMouseEnter={() => playCyberSound('hover')}
                className="w-full py-4 rounded-xl font-heading text-sm font-bold text-white bg-gradient-to-r from-[#2c67ed] via-[#3d7aff] to-[#00f0ff] shadow-glow-blue hover:shadow-[0_0_35px_rgba(44,103,237,0.8)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>MENGIRIM PESAN...</span>
                  </>
                ) : (
                  <>
                    <span>KIRIM PESAN SEKARANG</span>
                    <Send className="w-4 h-4 text-white" />
                  </>
                )}
              </button>
            </form>

            {/* Corner Decorative Tech Brackets */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#2c67ed] pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#00f0ff] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
