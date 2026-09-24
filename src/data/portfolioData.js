import profile1Img from '../assets/profile1.png';
import projectLilteesImg from '../assets/liltees-project.png';
import projectSistempakarImg from '../assets/sistempakar-project.png';
import simplestokOpnameImg from '../assets/simplestok-opname.png';
import simpleAbsensiImg from '../assets/simpleabsensi.png';

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
      role: "Admin & Developer Toko",
      company: "Retail Store / Toko",
      period: "2024 - 2026",
      type: "In-House",
      location: "Wonosobo, Indonesia",
      description: "Pernah menjadi admin dan developer sebuah toko dan membuatkan aplikasi di toko tersebut untuk mempermudah pencatatan stok dan efisiensi operasional.",
      skills: ["PHP", "MySQL", "Web Development", "Admin Operasional", "Manajemen Stok", "HTML & CSS"],
      highlights: [
        "Bertanggung jawab atas administrasi operasional harian dan manajemen inventaris toko",
        "Merancang dan membangun aplikasi web internal untuk pencatatan stok dan transaksi toko",
        "Meningkatkan efisiensi kerja dan keakuratan data barang melalui digitalisasi sistem toko"
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
      id: "lil-tees",
      title: "Lil Tees — Clothing Brand Website",
      category: "Web Apps",
      image: projectLilteesImg,
      description: "A modern and responsive website for Lil Tees, a casual clothing brand. Designed to showcase the brand's collections, story, and identity through a clean and youthful interface.",
      accent: "#2c67ed",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX", "GitHub"],
      demoUrl: "",
      githubUrl: "",
      features: [
        "Modern responsive design",
        "Hero landing page",
        "Clothing collection showcase",
        "Brand journey section"
      ]
    },
    {
      id: "sistem-pakar",
      title: "Sistem Pakar Diagnosis Penyakit Jamur Tiram",
      category: "Web Apps",
      image: projectSistempakarImg,
      description: "Sistem pakar berbasis web yang dirancang untuk membantu pengguna mengidentifikasi penyakit pada tanaman jamur tiram berdasarkan gejala yang dipilih. Sistem menggunakan metode Certainty Factor (CF) untuk menghitung tingkat keyakinan terhadap hasil diagnosis.",
      accent: "#00f0ff",
      tags: ["PHP", "CSS", "JavaScript", "Sistem Pakar", "UI/UX", "Certainty Factor"],
      demoUrl: "",
      githubUrl: "",
      features: [
        "Diagnosis penyakit berdasarkan gejala",
        "Menampilkan hasil diagnosis dan tingkat keyakinan",
        "Perhitungan menggunakan metode Certainty Factor",
        "Pengelolaan basis pengetahuan"
      ]
    },
    {
      id: "simplestok-opname",
      title: "Simplestok Opname",
      category: "Web Apps",
      image: simplestokOpnameImg,
      description: "Sistem berbasis web yang digunakan untuk mengelola dan memantau data stok barang secara lebih terstruktur. Sistem membantu pengguna dalam mencatat data barang, memantau jumlah stok, serta mengelola transaksi barang masuk dan keluar.",
      accent: "#ff007f",
      tags: ["PHP", "MySQL", "CSS", "HTML"],
      demoUrl: "",
      githubUrl: "",
      features: [
        "Dashboard informasi stok",
        "Manajemen data barang",
        "Pencatatan barang masuk",
        "Pencatatan barang keluar"
      ]
    },
    {
      id: "simple-absensi",
      title: "Simple Absensi — Sistem Absensi Berbasis Web",
      category: "Web Apps",
      image: simpleAbsensiImg,
      description: "Sistem absensi berbasis web yang digunakan untuk mencatat dan mengelola kehadiran pengguna secara sederhana dan terstruktur.",
      accent: "#a855f7",
      tags: ["PHP", "MySQL", "HTML", "CSS"],
      demoUrl: "",
      githubUrl: "",
      features: [
        "Pencatatan kehadiran",
        "Data pengguna",
        "Riwayat absensi",
        "Status kehadiran"
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
      { name: "GitHub", url: "https://github.com/najiehyuga", icon: "Github", handle: "@najiehyuga-NJ", color: "#2c67ed" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin", handle: "As'ad Najiy", color: "#00f0ff" },
      { name: "Instagram", url: "https://instagram.com", icon: "Instagram", handle: "@njasd__", color: "#ff007f" },
      { name: "Twitter/X", url: "https://twitter.com", icon: "Twitter", handle: "@ ", color: "#a855f7" },
      { name: "Discord", url: "https://discord.com", icon: "MessageSquare", handle: "p4blo.76", color: "#00ff66" }
    ]
  }
};
