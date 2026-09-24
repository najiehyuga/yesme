import profile1Img from '../assets/profile1.png';
import projectCyberdeckImg from '../assets/liltees-project.png';
import projectStoreImg from '../assets/sistempakar-project.png';
import projectNeuropromptImg from '../assets/project-neuroprompt.jpg';
import projectChronomagixImg from '../assets/project-chronomatrix.jpg';
import projectQuantumpayImg from '../assets/project-quantumpay.jpg';
import projectSynthpulseImg from '../assets/project-synthpulse.jpg';

export const portfolioData = {
  personal: {
    name: "As'ad Najiy",
    codeName: "NJ_DEV // 01",
    roles: [
      "Junior Developer",
      "Tech Enthusiast",
      "Frontend Explorer",
      "Cyberpunk Crafter"
    ],
    status: "OPEN TO WORK & COLLABORATION",
    location: "Wonosobo, Indonesia (UTC+7)",
    bio: "Saya adalah seorang Junior Developer dan Tech Enthusiast yang berdedikasi membangun aplikasi web modern, cepat, dan berestetika tinggi. Senang mengeksplorasi teknologi baru, visual cyberpunk interaktif, dan performa kode yang optimal.",
    avatar: profile1Img,
    cvLink: "#contact",
  },

  stats: [
    { label: "Proyek Selesai", value: "15+", detail: "Web App & UI Production", color: "cyber-blue" },
    { label: "Code Reliability", value: "86.9%", detail: "Optimized Performance", color: "cyber-cyan" },
    { label: "Teknologi Dikuasai", value: "12+", detail: "Modern Frontend & Backend", color: "cyber-pink" },
    { label: "Tahun Eksplorasi", value: "2+", detail: "Hands-on Code Experience", color: "cyber-yellow" },
  ],

  education: [
    {
      degree: "S1 Teknik Informatika / Computer Science",
      institution: "Universitas Sains Al Qur'an Wonosobo (UNSIQ)",
      period: "2019 - 2025",
    },
    {
      degree: "Rekayasa Perangkat Lunak (RPL)",
      institution: "SMK Andalusia 1 Wonosobo",
      period: "2016 - 2019",
    }
  ],

  experience: [
    {
      role: "Junior Frontend Developer",
      company: "CyberTech Digital Labs",
      period: "2024 - Sekarang",
      type: "Full-time",
      location: "Wonosobo (Hybrid)",
      description: "Mengembangkan aplikasi web berbasis React dan Tailwind CSS untuk klien enterprise. Mengoptimalkan Core Web Vitals dan interaktivitas komponen.",
      skills: ["React.js", "Tailwind CSS", "Framer Motion", "REST API", "Git Flow"],
      highlights: [
        "Meningkatkan skor kecepatan rendering antarmuka hingga 42%",
        "Merancang library komponen reusable berdesain cyberpunk-modern",
        "Berkolaborasi erat bersama tim backend dan UI/UX Designer"
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "NeoNusantara Tech",
      period: "2023 - 2024",
      type: "Magang / Internship",
      location: "Wonosobo (On-site)",
      description: "Membantu pengembangan dashboard analytics dan landing page interaktif dengan transisi animasi halus.",
      skills: ["JavaScript ES6+", "React", "CSS Modules", "Vite", "Figma to Code"],
      highlights: [
        "Mengonversi 12+ mockups Figma ke kode React pixel-perfect",
        "Mengurangi waktu respon filtering data pengguna"
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2022 - 2023",
      type: "Freelance",
      location: "Remote",
      description: "Menyelesaikan 10+ proyek website UMKM dan portofolio kreatif dengan responsivitas tinggi di berbagai perangkat.",
      skills: ["HTML5/CSS3", "JavaScript", "Tailwind CSS", "SEO Basics"],
      highlights: [
        "Tingkat kepuasan klien 100% dan pengiriman tepat waktu",
        "Menerapkan SEO on-page yang menaikkan peringkat pencarian klien"
      ]
    }
  ],

  skills: {
    frontend: [
      { name: "React.js", level: 90, icon: "Atom" },
      { name: "Tailwind CSS", level: 95, icon: "Palette" },
      { name: "JavaScript (ES6+)", level: 90, icon: "Code2" },
      { name: "TypeScript", level: 78, icon: "FileCode" },
      { name: "Framer Motion", level: 85, icon: "Sparkles" },
      { name: "Next.js", level: 75, icon: "Layers" },
    ],
    backend: [
      { name: "Node.js", level: 80, icon: "Server" },
      { name: "Express.js", level: 82, icon: "Cpu" },
      { name: "RESTful APIs", level: 88, icon: "Network" },
      { name: "PostgreSQL / MySQL", level: 76, icon: "Database" },
      { name: "MongoDB", level: 74, icon: "HardDrive" },
    ],
    tools: [
      { name: "Git & GitHub", level: 92, icon: "GitBranch" },
      { name: "Vite / Webpack", level: 88, icon: "Zap" },
      { name: "VS Code & Terminals", level: 95, icon: "Terminal" },
      { name: "Postman API", level: 85, icon: "Send" },
      { name: "Figma to Code", level: 84, icon: "Layout" },
    ]
  },

  projects: [
    {
      id: "cyber-deck",
      title: "Lil Tees — Clothing Brand Website ",
      category: "Web Apps",
      image: projectCyberdeckImg,
      description: "A modern and responsive website for Lil Tees, a casual clothing brand. Designed to showcase the brand's collections, story, and identity through a clean and youthful interface.",
      accent: "#2c67ed",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX", "GitHub"],
      demoUrl: " ",
      githubUrl: " ",
      features: [
        "Modern responsive design",
        "Hero landing page",
        "Clothing collection showcase",
        "Brand journey section"
      ]
    },
    {
      id: "NJ-store",
      title: "Sistem Pakar Diagnosis Penyakit Jamur Tiram",
      category: "Web Apps",
      image: projectStoreImg,
      description: "Sistem pakar berbasis web yang dirancang untuk membantu pengguna mengidentifikasi penyakit pada tanaman jamur tiram berdasarkan gejala yang dipilih. Sistem menggunakan metode Certainty Factor (CF) untuk menghitung tingkat keyakinan terhadap hasil diagnosis.",
      accent: "#00f0ff",
      tags: ["PHP", "CSS", "JavaScript", "Sistem Pakar", "UI/UX", "Certainty Factor"],
      demoUrl: " ",
      githubUrl: " ",
      features: [
        "Diagnosis penyakit berdasarkan gejala",
        "Menampilkan hasil diagnosis dan tingkat keyakinan",
        "Perhitungan menggunakan metode Certainty Factor",
        "Pengelolaan basis pengetahuan"
      ]
    },
    {
      id: "neuro-prompt",
      title: "NeuroPrompt // AI Studio Interface",
      category: "Web Apps",
      image: projectNeuropromptImg,
      description: "Studio generator AI dengan antarmuka chat streaming bernuansa neon gelap, syntax highlighter kode, serta pengatur parameter temperatur AI.",
      accent: "#ff007f",
      tags: ["React", "TypeScript", "Tailwind CSS", "OpenAI API"],
      demoUrl: "https://demo.example.com/neuroprompt",
      githubUrl: "https://github.com/example/neuroprompt-ai",
      features: [
        "Chat streaming teks dengan efek ketikan real-time",
        "Penghitung token & estimasi biaya generasi prompt",
        "Export percakapan ke Markdown & JSON dengan satu klik",
        "Aksen neon magenta dinamis pada respons AI"
      ]
    },
    {
      id: "chrono-matrix",
      title: "ChronoMatrix // Cyber Productivity Suite",
      category: "Web Apps",
      image: projectChronomagixImg,
      description: "Aplikasi produktivitas cyberpunk yang memadukan Kanban board drag-and-drop dengan timer Pomodoro audio synth dan statistik fokus harian.",
      accent: "#a855f7",
      tags: ["React", "Tailwind CSS", "Framer Motion", "LocalStorage"],
      demoUrl: "https://demo.example.com/chronomatrix",
      githubUrl: "https://github.com/example/chronomatrix-pomodoro",
      features: [
        "Board manajemen tugas drag-and-drop berbasis kartu neon",
        "Cyber Pomodoro timer dengan lonceng synth futuristik",
        "Penyimpanan lokal otomatis tanpa perlu login",
        "Grafik produktivitas mingguan interaktif"
      ]
    },
    {
      id: "quantum-pay",
      title: "QuantumPay // Neo-Fintech Mobile App UI",
      category: "UI/UX & Mobile",
      image: projectQuantumpayImg,
      description: "Konsep antarmuka dompet kripto dan pembayaran digital mobile-first dengan animasi geser kartu, virtual debit card holografik, dan riwayat transaksi.",
      accent: "#fcee0a",
      tags: ["React", "Mobile First", "Framer Motion", "Tailwind CSS"],
      demoUrl: "https://demo.example.com/quantumpay",
      githubUrl: "https://github.com/example/quantumpay-mobile-ui",
      features: [
        "Kartu debit virtual holografik dengan efek rotasi gyro",
        "Quick scan QR payment simulasi",
        "Riwayat mutasi transaksi dengan filter instan",
        "Animasi gesture geser ultra-responsif"
      ]
    },
    {
      id: "synth-wave",
      title: "SynthPulse // Web Audio Visualizer",
      category: "UI/UX & Mobile",
      image: projectSynthpulseImg,
      description: "Pemutar audio dan visualizer frekuensi gelombang suara retro-cyberpunk bertenaga HTML5 Canvas dan Web Audio AnalyserNode.",
      accent: "#00ff66",
      tags: ["JavaScript", "HTML5 Canvas", "Web Audio API", "CSS Grid"],
      demoUrl: "https://demo.example.com/synthpulse",
      githubUrl: "https://github.com/example/synthpulse-visualizer",
      features: [
        "Spektrum audio visualizer 60 FPS real-time",
        "Mode preset gelombang: Neon Bars, Circle Pulse, Laser Waves",
        "Playlist musik synthwave bebas hak cipta",
        "Kontrol gain, bass boost, dan stereo balance"
      ]
    }
  ],

  contact: {
    email: "najiexd2020@gmail.com",
    discord: "p4blo.76",
    telegram: "@njxd",
    location: "Wonosobo, Jawa Tengah, Indonesia",
    availability: "Tersedia untuk Pekerjaan Full-time & Proyek Freelance",
    responseTime: "< 24 Jam",
    socials: [
      { name: "GitHub", url: "https://https://github.com/najiehyuga", icon: "Github", handle: "@najiehyuga-NJ", color: "#2c67ed" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin", handle: "As'ad Najiy", color: "#00f0ff" },
      { name: "Instagram", url: "https://instagram.com", icon: "Instagram", handle: "@njasd__", color: "#ff007f" },
      { name: "Twitter/X", url: "https://twitter.com", icon: "Twitter", handle: "@ ", color: "#a855f7" },
      { name: "Discord", url: "https://discord.com", icon: "MessageSquare", handle: "p4blo.76", color: "#00ff66" }
    ]
  }
};
