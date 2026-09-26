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
    status: "TERSEDIA UNTUK KERJA & KOLABORASI",
    location: "Wonosobo, Jawa Tengah (UTC+7)",
    bio: "Junior Developer dan Tech Enthusiast yang berdedikasi membangun aplikasi web modern, cepat, dan berestetika tinggi. Senang mengeksplorasi ekosistem React, PHP, MySQL, serta arsitektur antarmuka yang intuitif.",
    avatar: profile1Img,
    cvLink: "#contact",
  },

  // Statistik faktual & terverifikasi (tanpa angka palsu / fake claims sesuai R-17 & R-36)
  stats: [
    { label: "Proyek Web", value: "4", detail: "Aplikasi Web & Sistem Riil", color: "cyber-blue" },
    { label: "Pendidikan", value: "S1", detail: "Teknik Informatika UNSIQ", color: "cyber-cyan" },
    { label: "Pengalaman", value: "2+ Thn", detail: "Admin & Dev Toko Retail", color: "cyber-pink" },
    { label: "Fokus Utama", value: "Fullstack", detail: "React, PHP & Database", color: "cyber-yellow" },
  ],

  education: [
    {
      degree: "S1 Teknik Informatika / Computer Science",
      institution: "Universitas Sains Al Qur'an Wonosobo (UNSIQ)",
      period: "2019 - 2025",
      description: "Menyelesaikan studi dengan pendalaman pada rekayasa perangkat lunak, algoritma sistem pakar Certainty Factor, dan perancangan database relasional.",
      skills: ["Rekayasa Web", "Sistem Pakar", "MySQL", "Analisis Sistem"]
    },
    {
      degree: "Rekayasa Perangkat Lunak (RPL)",
      institution: "SMK Andalusia 1 Wonosobo",
      period: "2016 - 2019",
      description: "Membangun fondasi logika pemrograman komputer, struktur algoritma dasar, dasar web HTML/CSS/PHP, dan administrasi database.",
      skills: ["HTML5 & CSS3", "Dasar PHP", "MySQL", "Logika Pemrograman"]
    }
  ],

  experience: [
    {
      role: "Admin & Developer Toko",
      company: "Retail Store / Toko",
      period: "2024 - 2026",
      type: "In-House",
      location: "Wonosobo, Indonesia",
      description: "Bertanggung jawab atas administrasi operasional dan merancang aplikasi web internal toko guna mempermudah pencatatan stok dan efisiensi operasional.",
      skills: ["PHP", "MySQL", "Web Development", "Admin Operasional", "Manajemen Stok", "HTML & CSS"],
      highlights: [
        "Bertanggung jawab atas administrasi operasional harian dan manajemen inventaris toko",
        "Merancang dan membangun aplikasi web internal untuk pencatatan stok dan transaksi toko",
        "Meningkatkan efisiensi kerja dan keakuratan data barang melalui digitalisasi sistem toko"
      ]
    }
  ],

  // Tingkat keahlian realistis & jujur untuk Junior Developer (tidak overclaim 90-95%)
  skills: {
    frontend: [
      { name: "React.js", level: 72, icon: "Atom" },
      { name: "Tailwind CSS", level: 78, icon: "Palette" },
      { name: "JavaScript (ES6+)", level: 74, icon: "Code2" },
      { name: "HTML5 & CSS3", level: 80, icon: "Layout" },
      { name: "Framer Motion", level: 65, icon: "Activity" },
      { name: "Next.js", level: 58, icon: "Layers" },
    ],
    backend: [
      { name: "PHP", level: 74, icon: "Server" },
      { name: "MySQL", level: 72, icon: "Database" },
      { name: "RESTful APIs", level: 66, icon: "Network" },
      { name: "Node.js & Express", level: 60, icon: "Cpu" },
      { name: "PostgreSQL", level: 55, icon: "HardDrive" },
    ],
    tools: [
      { name: "Git & GitHub", level: 74, icon: "GitBranch" },
      { name: "VS Code", level: 80, icon: "Terminal" },
      { name: "Vite", level: 72, icon: "Zap" },
      { name: "Postman API", level: 66, icon: "Send" },
      { name: "Figma to Code", level: 64, icon: "Layout" },
    ]
  },

  projects: [
    {
      id: "lil-tees",
      title: "Lil Tees: Clothing Brand Website",
      category: "Web Apps",
      image: projectLilteesImg,
      description: "Website modern dan responsif untuk Lil Tees, brand pakaian casual. Dirancang untuk menampilkan katalog koleksi, brand story, dan identitas visual dengan antarmuka yang bersih dan interaktif.",
      accent: "#2c67ed",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
      demoUrl: "",
      githubUrl: "https://github.com/najiehyuga",
      features: [
        "Desain responsif di semua perangkat",
        "Hero landing page interaktif",
        "Showcase koleksi produk pakaian",
        "Bagian narasi perjalanan brand"
      ]
    },
    {
      id: "sistem-pakar",
      title: "Sistem Pakar Diagnosis Penyakit Jamur Tiram",
      category: "Web Apps",
      image: projectSistempakarImg,
      description: "Sistem pakar berbasis web yang dirancang untuk membantu pengguna mengidentifikasi penyakit pada tanaman jamur tiram berdasarkan gejala yang dipilih. Sistem menggunakan metode Certainty Factor (CF) untuk menghitung tingkat keyakinan terhadap hasil diagnosis.",
      accent: "#00f0ff",
      tags: ["PHP", "CSS", "JavaScript", "Sistem Pakar", "Certainty Factor", "MySQL"],
      demoUrl: "",
      githubUrl: "https://github.com/najiehyuga",
      features: [
        "Diagnosis penyakit berdasarkan gejala",
        "Menampilkan hasil diagnosis dan tingkat keyakinan",
        "Perhitungan menggunakan metode Certainty Factor",
        "Pengelolaan basis pengetahuan dan gejala"
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
      githubUrl: "https://github.com/najiehyuga",
      features: [
        "Dashboard informasi stok real-time",
        "Manajemen master data barang",
        "Pencatatan transaksi barang masuk",
        "Pencatatan transaksi barang keluar"
      ]
    },
    {
      id: "simple-absensi",
      title: "Simple Absensi: Sistem Absensi Berbasis Web",
      category: "Web Apps",
      image: simpleAbsensiImg,
      description: "Sistem absensi berbasis web yang digunakan untuk mencatat dan mengelola kehadiran secara sederhana, cepat, dan terstruktur.",
      accent: "#a855f7",
      tags: ["PHP", "MySQL", "HTML", "CSS"],
      demoUrl: "",
      githubUrl: "https://github.com/najiehyuga",
      features: [
        "Pencatatan kehadiran harian",
        "Manajemen data anggota/karyawan",
        "Riwayat log absensi",
        "Filter status kehadiran"
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
      { name: "GitHub", url: "https://github.com/najiehyuga", icon: "Github", handle: "@najiehyuga", color: "#2c67ed" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/asad-najiy", icon: "Linkedin", handle: "As'ad Najiy", color: "#00f0ff" },
      { name: "Instagram", url: "https://instagram.com/njasd__", icon: "Instagram", handle: "@njasd__", color: "#ff007f" },
      { name: "Discord", url: "https://discord.com", icon: "MessageSquare", handle: "p4blo.76", color: "#00ff66" }
    ]
  }
};
