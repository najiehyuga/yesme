import React, { useEffect, useState } from 'react';

export default function CyberBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate static particle coords once to avoid hydration mismatch
    const items = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      color: i % 3 === 0 ? '#2c67ed' : i % 3 === 1 ? '#00f0ff' : '#ff007f'
    }));
    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050609]">
      {/* Dynamic Cyber Glow Radial Orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#2c67ed]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-[#00f0ff]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-[600px] h-[600px] bg-[#ff007f]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[400px] h-[400px] bg-[#a855f7]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-70" />
      <div className="absolute inset-0 cyber-grid-dense opacity-40" />

      {/* Futuristic Floating Data Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full opacity-60 animate-pulse"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 10px ${p.color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Subtle Scanline Overlay */}
      <div className="scanline" />

      {/* Cyberpunk Vignette Edge Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-[#050608]/80 pointer-events-none" />
    </div>
  );
}
