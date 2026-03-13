export const translations = {
  en: {
    common: {
      readyToDeploy: "100% Ready-to-Deploy",
      exploreEcosystem: "Explore The Ecosystem",
      scroll: "Scroll",
      partnerWithUs: "Partner With Us",
      liveDemo: "Live Demo",
      productionReady: "Production Ready",
      compliant: "Compliant"
    },
    nav: {
      problem: "Problem",
      solution: "Solution",
      arsenal: "Arsenal",
      pricing: "Pricing",
      financials: "Financials",
      invest: "Invest"
    },
    hero: {
      headlinePart1: "Architecting",
      headlinePart2: "Digital Transformation",
      headlinePart3: "for Heavy Industries.",
      subheadline: "End-to-End Compliance, Digital Ecosystem, & B2B Media.",
      industries: ["Oil & Gas", "Mining", "Shipping", "Construction", "Fabrication"]
    },
    arsenal: {
      badge: "Unfair Advantage",
      title: "The Arsenal",
      subtitle: "Your investment funds market penetration — not R&D. All products are 100% complete and battle-tested.",
      devBadge: "100% Development Completed",
      riskTitle: "Zero R&D Risk. Instant Time-to-Market.",
      syncDesc: "Designed for Offline-First Data Sync in remote mining and offshore sites. Input data without internet, automatic synchronisation when connectivity returns.",
      stats: {
        activeSites: "Active Sites",
        compliance: "Compliance",
        incidents: "Incidents"
      },
      sites: ["Site Alpha - Balikpapan", "Site Bravo - Morowali", "Site Charlie - Dumai"],
      techBadges: [
        "Next.js", "Cloud Native", "Offline-First", "Real-time Sync",
        "Mobile Ready", "REST API", "Role-Based Access", "Encrypted"
      ]
    },
    problem: {
      badge: "The Problem",
      titleRed: "Critical Pain Points",
      subtitle: "Heavy industry in Indonesia loses resources from three critical failure points that generic solutions fail to address.",
      problems: [
        {
          title: "Tender Rejection (CSMS Failure)",
          desc: "Tier-2 & Tier-3 contractors consistently lose in BUMN/Multinational project bidding due to low CSMS scores caused by unorganized documentation and manual compliance tracking.",
          stat: "70%",
          statLabel: "Tender loss due to poor CSMS"
        },
        {
          title: "Compliance Fines (PROPER/ESG)",
          desc: "Companies face billions in fines and the risk of a \"Red/Black PROPER\" rating from KLHK. Manual data collection for emissions, waste, and incidents is prone to manipulation and human error.",
          stat: "Rp 5B+",
          statLabel: "Average annual fines"
        },
        {
          title: "Bloated IT CapEx & Blank Spots",
          desc: "Tier-1 ERPs like SAP require billions in CapEx, are too rigid for field conditions, and fail completely in mining/offshore sites with limited internet connectivity.",
          stat: "Rp 2B+",
          statLabel: "Average ERP CapEx waste"
        },
        {
          title: "Sync Latency (Remote Lag)",
          desc: "Offshore and remote sites experience 30s+ data sync delays, leading to operational 'blind spots' and critical decision lag.",
          stat: "30s+",
          statLabel: "Avg. synchronization delay"
        },
        {
          title: "Data Vulnerability",
          desc: "Manual records and legacy unencrypted systems are vulnerable to catastrophic data leaks, cyber threats, and industrial espionage.",
          stat: "90%",
          statLabel: "Unencrypted legacy data"
        }
      ]
    },
    solution: {
      badge: "Our Solution",
      titleBlue: "Full-Stack",
      titleEnd: "Ecosystem",
      subtitle: "A hybrid \"Consult & Lock\" strategy that fixes human SOPs first, then locks compliance into our digital ecosystem.",
      pillars: [
        {
          title: "The Brains",
          subtitle: "Consultation",
          desc: "3 In-House SMEs (ISO, CSMS, ESG). Expert guidance to fix SOPs before digitalisation."
        },
        {
          title: "The Muscle",
          subtitle: "Technology ERP",
          desc: "4 Ready-to-Deploy Industry ERPs. Audit-Ready 24/7 with offline-first architecture."
        },
        {
          title: "The Megaphone",
          subtitle: "B2B Podcast",
          desc: "B2B Lead Generation Channel. Organic client acquisition through thought-leadership content."
        },
        {
          title: "The Speed",
          subtitle: "Edge-Sync Engine",
          desc: "Real-time edge computing sync optimized for 2G/Satellite. Instant data flow regardless of how remote your operations are."
        },
        {
          title: "The Armor",
          subtitle: "E2E Encryption",
          desc: "AES-256 military-grade encryption and automated security audits. Your industrial IP is locked behind Fort Knox security."
        }
      ],
      moat: {
        title: "Competitive Moat",
        desc: "The \"Consult & Lock\" strategy creates extreme switching costs. Clients won't cancel — our ERP is their audit certification lifeline. Audit-Ready 24/7 or face regulatory failure."
      }
    },
    pricing: {
      badge: "Pricing Strategy",
      title: "Pricing Architecture",
      subtitle: "Psychologically engineered pricing tiers that guide procurement decisions toward optimal cash flow for the business.",
      psychologyNode: "Tier 3 acts as a price anchor — making Tier 1 feel like an absolute bargain for procurement teams.",
      tiers: [
        {
          name: "Tier 1: SaaS OpEx",
          badge: "Most Popular",
          price: "Rp 8M – 15M",
          period: "/ month",
          desc: "Cloud-based subscription. The smart choice for modern enterprises.",
          features: [
            "Full ERP Access (All Modules)",
            "Cloud Hosting & Security",
            "Automatic Updates & Patches",
            "24/7 Technical Support",
            "Offline-First Data Sync",
            "Unlimited Users",
            "Quarterly Compliance Reports",
            "Training & Onboarding"
          ],
          cta: "Start Free Trial"
        },
        {
          name: "Tier 2: Managed License",
          price: "Rp 100M",
          period: "setup + Rp 5M/mo",
          desc: "Perpetual license with managed hosting. Compiled version without source code.",
          features: [
            "Compiled Application License",
            "Dedicated Server Setup",
            "Monthly Maintenance & Hosting",
            "Priority Support Channel",
            "Custom Branding Available",
            "Data Ownership Guarantee"
          ],
          cta: "Contact Sales"
        },
        {
          name: "Tier 3: Enterprise IP",
          badge: "Full Code Transfer",
          price: "Rp 1.5B – 2.5B",
          period: "one-time",
          desc: "Complete source code and intellectual property handover.",
          features: [
            "Full Source Code Transfer",
            "Complete IP Ownership",
            "Architecture Documentation",
            "6 Months Dev Support",
            "Internal Team Training"
          ],
          cta: "Request Proposal"
        }
      ]
    },
    financials: {
      badge: "Unit Economics",
      title: "The Holy Grail",
      subtitle: "Investor-grade financial metrics that prove this isn't a bet — it's a calculated, low-risk wealth multiplier.",
      metrics: [
        { label: "The Ask (Seed Phase)", sublabel: "Zero R&D cost — 100% market penetration fund" },
        { label: "Break-Even Point", sublabel: "Just 4 SaaS clients to cover all operations", progress: "Break-Even Progress" },
        { label: "Projected ROI (Year 1)", sublabel: "Net return on Rp 300M seed investment" },
        { label: "Payback Period", sublabel: "Full capital recovery in under 6 months" }
      ],
      ltv: {
        title: "LTV : CAC Ratio",
        ltvLabel: "LTV per Client",
        ltvSub: "5-year retention",
        cacLabel: "CAC per Client",
        cacSub: "Blended cost",
        gold: "Gold standard: 3:1"
      }
    },
    investment: {
      badge: "The Ask",
      title: "Partner With Us",
      subtitle: "Three flexible investment structures designed to match your risk appetite, capital capacity, and strategic network.",
      recommended: "Recommended",
      options: [
        {
          title: "The Lean Start",
          subtitle: "15% Equity (Milestone-based)",
          desc: "Classic equity model with milestone vesting. Investor gains equity proportional to capital injection, unlocked at quarterly performance milestones.",
          highlights: ["15% equity stake", "Quarterly milestone vesting", "Board observer seat", "Priority on future rounds"]
        },
        {
          title: "Revenue Share",
          subtitle: "25% Gross Rev until 150% ROI",
          desc: "Zero equity dilution. Investor receives 25% of gross monthly revenue until total returns reach 150% of initial investment (Rp 450M on Rp 300M).",
          highlights: ["0% equity — you keep full ownership", "25% gross revenue monthly", "Capped at 150% total return", "Transparent revenue dashboard"]
        },
        {
          title: "Smart Money",
          subtitle: "20% Equity with Active Network KPI",
          desc: "For investors with C-level connections to Pertamina, PLN, or Mind ID. Reduced cash (Rp 200-300M), equity earned through active client introductions.",
          highlights: ["20% equity with strict KPI vesting", "Must deliver 3 enterprise clients in 6 months", "Reduced capital requirement", "Active board participation"]
        }
      ],
      ctaTitle: "Let's Build The Future of Heavy Industry Compliance",
      ctaDesc: "Schedule a confidential presentation to see our live ERP systems, full financial model, and discuss the partnership structure that works for you.",
      ctaButton: "Schedule Presentation",
      rights: "All rights reserved.",
      confidential: "Confidential — For Qualified Investors Only."
    },
    podcast: {
      badge: "Growth Engine",
      title: "Why We Don't Do Cold Calls",
      subtitle: "Our lean marketing engine attracts decision-makers organically through B2B thought-leadership content.",
      visualTitle: "Industry Insider Podcast",
      visualSub: "Live conversations with industry leaders",
      costStudio: "Studio Rental",
      costOur: "Our Setup",
      capexSaved: "CapEx Saved",
      strategies: [
        { title: "Triangular Dialogue", desc: "SME Expert + Tech Lead + Female Co-Host (Audience Proxy). Three perspectives, one compelling narrative." },
        { title: "Thought Leadership", desc: "Position our SMEs as industry authorities. Every episode is a trust-building asset that attracts decision-makers." },
        { title: "Micro-Content Ads", desc: "Repurpose long-form into bite-sized LinkedIn, Instagram, and TikTok content. Maximum reach, minimal spend." }
      ]
    }
  },
  id: {
    common: {
      readyToDeploy: "100% Siap Digunakan",
      exploreEcosystem: "Jelajahi Ekosistem",
      scroll: "Gulir",
      partnerWithUs: "Bermitra Dengan Kami",
      liveDemo: "Demo Langsung",
      productionReady: "Siap Produksi",
      compliant: "Patuh"
    },
    nav: {
      problem: "Masalah",
      solution: "Solusi",
      arsenal: "Arsenal",
      pricing: "Harga",
      financials: "Keuangan",
      invest: "Investasi"
    },
    hero: {
      headlinePart1: "Membangun",
      headlinePart2: "Transformasi Digital",
      headlinePart3: "untuk Industri Berat.",
      subheadline: "Kepatuhan End-to-End, Ekosistem Digital, & Media B2B.",
      industries: ["Minyak & Gas", "Pertambangan", "Pengiriman", "Konstruksi", "Fabrikasi"]
    },
    arsenal: {
      badge: "Keunggulan Kompetitif",
      title: "Arsenal Kami",
      subtitle: "Investasi Anda mendanai penetrasi pasar — bukan R&D. Semua produk 100% selesai dan teruji.",
      devBadge: "100% Pengembangan Selesai",
      riskTitle: "Nol Risiko R&D. Waktu Masuk Pasar Instan.",
      syncDesc: "Dirancang untuk Sinkronisasi Data Offline-First di lokasi tambang terpencil dan lepas pantai. Input data tanpa internet, sinkronisasi otomatis saat koneksi kembali.",
      stats: {
        activeSites: "Situs Aktif",
        compliance: "Kepatuhan",
        incidents: "Insiden"
      },
      sites: ["Situs Alpha - Balikpapan", "Situs Bravo - Morowali", "Situs Charlie - Dumai"],
      techBadges: [
        "Next.js", "Cloud Native", "Offline-First", "Sinkronisasi Real-time",
        "Siap Mobile", "REST API", "Akses Berbasis Peran", "Terenkripsi"
      ]
    },
    problem: {
      badge: "Masalah",
      titleRed: "Titik Kritis",
      subtitle: "Industri berat di Indonesia kehilangan sumber daya dari tiga titik kegagalan kritis yang tidak dapat diatasi oleh solusi umum.",
      problems: [
        {
          title: "Tender Gagal (Kegagalan CSMS)",
          desc: "Kontraktor Tier-2 & Tier-3 secara konsisten kalah dalam lelang proyek BUMN/Multinasional karena skor CSMS yang rendah akibat dokumentasi yang tidak teratur dan pelacakan kepatuhan manual.",
          stat: "70%",
          statLabel: "Kekalahan tender akibat CSMS buruk"
        },
        {
          title: "Denda Kepatuhan (PROPER/ESG)",
          desc: "Perusahaan menghadapi denda miliaran dan risiko peringkat \"PROPER Merah/Hitam\" dari KLHK. Pengumpulan data manual untuk emisi, limbah, dan insiden rentan terhadap manipulasi dan kesalahan manusia.",
          stat: "Rp 5M+",
          statLabel: "Rata-rata denda tahunan"
        },
        {
          title: "IT CapEx Bengkak & Blank Spots",
          desc: "ERP Tier-1 seperti SAP membutuhkan miliaran CapEx, terlalu kaku untuk kondisi lapangan, dan gagal total di area tambang/lepas pantai dengan konektivitas internet terbatas.",
          stat: "Rp 2M+",
          statLabel: "Rata-rata pemborosan CapEx ERP"
        },
        {
          title: "Latensi Sinkronisasi",
          desc: "Lokasi tambang terpencil dan lepas pantai menghadapi penundaan sinkronisasi data 30 detik+, menyebabkan 'blind spots' operasional.",
          stat: "30dtk+",
          statLabel: "Rata-rata delay sinkronisasi"
        },
        {
          title: "Kerentanan Data",
          desc: "Catatan manual dan sistem lama yang tidak terenkripsi rentan terhadap kebocoran data katastropik, ancaman siber, dan spionase industri.",
          stat: "90%",
          statLabel: "Data lama tidak terenkripsi"
        }
      ]
    },
    solution: {
      badge: "Solusi Kami",
      titleBlue: "Ekosistem",
      titleEnd: "Full-Stack",
      subtitle: "Strategi hibrida \"Konsultasi & Kunci\" yang memperbaiki SOP manusia terlebih dahulu, lalu mengunci kepatuhan ke dalam ekosistem digital kami.",
      pillars: [
        {
          title: "Otak",
          subtitle: "Konsultasi",
          desc: "3 SME Internal (ISO, CSMS, ESG). Panduan ahli untuk memperbaiki SOP sebelum digitalisasi."
        },
        {
          title: "Otot",
          subtitle: "ERP Teknologi",
          desc: "4 ERP Industri yang Siap Digunakan. Siap Audit 24/7 dengan arsitektur offline-first."
        },
        {
          title: "Megafon",
          subtitle: "Podcast B2B",
          desc: "Saluran Pembangkit Prospek B2B. Akuisisi klien organik melalui konten kepemimpinan pemikiran."
        },
        {
          title: "Kecepatan",
          subtitle: "Edge-Sync Engine",
          desc: "Sinkronisasi edge computing yang dioptimalkan untuk 2G/Satelit. Aliran data instan tidak peduli seberapa terpencil lokasi Anda."
        },
        {
          title: "Perisai",
          subtitle: "Enkripsi E2E",
          desc: "Enkripsi tingkat militer AES-256 dan audit keamanan otomatis. Kekayaan intelektual industri Anda terkunci dengan keamanan Fort Knox."
        }
      ],
      moat: {
        title: "Benteng Kompetitif",
        desc: "Strategi \"Konsultasi & Kunci\" menciptakan biaya peralihan yang ekstrem. Klien tidak akan membatalkan — ERP kami adalah jalur penyelamat sertifikasi audit mereka. Siap Audit 24/7 atau hadapi kegagalan regulasi."
      }
    },
    pricing: {
      badge: "Strategi Harga",
      title: "Arsitektur Harga",
      subtitle: "Tingkatan harga yang dirancang secara psikologis untuk memandu keputusan pengadaan menuju arus kas yang optimal bagi bisnis.",
      psychologyNode: "Tier 3 bertindak sebagai jangkar harga — membuat Tier 1 terasa seperti penawaran yang sangat menguntungkan bagi tim pengadaan.",
      tiers: [
        {
          name: "Tier 1: SaaS OpEx",
          badge: "Terpopuler",
          price: "Rp 8jt – 15jt",
          period: "/ bulan",
          desc: "Langganan berbasis cloud. Pilihan cerdas untuk perusahaan modern.",
          features: [
            "Akses ERP Penuh (Semua Modul)",
            "Cloud Hosting & Keamanan",
            "Pembaruan & Patch Otomatis",
            "Dukungan Teknis 24/7",
            "Sinkronisasi Data Offline-First",
            "Pengguna Tanpa Batas",
            "Laporan Kepatuhan Kuartalan",
            "Pelatihan & Onboarding"
          ],
          cta: "Mulai Uji Coba Gratis"
        },
        {
          name: "Tier 2: Lisensi Terkelola",
          price: "Rp 100jt",
          period: "setup + Rp 5jt/bln",
          desc: "Lisensi permanen dengan hosting terkelola. Versi terkompilasi tanpa kode sumber.",
          features: [
            "Lisensi Aplikasi Terkompilasi",
            "Pengaturan Server Khusus",
            "Pemeliharaan & Hosting Bulanan",
            "Saluran Dukungan Prioritas",
            "Tersedia Branding Kustom",
            "Jaminan Kepemilikan Data"
          ],
          cta: "Hubungi Penjualan"
        },
        {
          name: "Tier 3: IP Perusahaan",
          badge: "Transfer Kode Penuh",
          price: "Rp 1.5M – 2.5M",
          period: "sekali bayar",
          desc: "Handover kode sumber lengkap dan kekayaan intelektual.",
          features: [
            "Transfer Kode Sumber Penuh",
            "Kepemilikan IP Lengkap",
            "Dokumentasi Arsitektur",
            "Dukungan Pengembangan 6 Bulan",
            "Pelatihan Tim Internal"
          ],
          cta: "Minta Proposal"
        }
      ]
    },
    financials: {
      badge: "Ekonomi Unit",
      title: "The Holy Grail",
      subtitle: "Metrik keuangan kelas investor yang membuktikan ini bukan pertaruhan — ini adalah pengganda kekayaan berisiko rendah yang diperhitungkan.",
      metrics: [
        { label: "Permintaan (Fase Seed)", sublabel: "Biaya R&D nol — 100% dana penetrasi pasar" },
        { label: "Titik Impas", sublabel: "Hanya 4 klien SaaS untuk menutupi semua operasional", progress: "Progres Titik Impas" },
        { label: "Proyeksi ROI (Tahun 1)", sublabel: "Pengembalian bersih atas investasi seed Rp 300jt" },
        { label: "Periode Pengembalian", sublabel: "Pemulihan modal penuh dalam waktu kurang dari 6 bulan" }
      ],
      ltv: {
        title: "Rasio LTV : CAC",
        ltvLabel: "LTV per Klien",
        ltvSub: "Retensi 5 tahun",
        cacLabel: "CAC per Klien",
        cacSub: "Biaya gabungan",
        gold: "Standar emas: 3:1"
      }
    },
    investment: {
      badge: "Permintaan",
      title: "Bermitra Dengan Kami",
      subtitle: "Tiga struktur investasi fleksibel yang dirancang untuk menyesuaikan selera risiko, kapasitas modal, dan jaringan strategis Anda.",
      recommended: "Direkomendasikan",
      options: [
        {
          title: "Awal yang Ramping",
          subtitle: "Ekuitas 15% (Berdasarkan Milestone)",
          desc: "Model ekuitas klasik dengan vesting berbasis milestone. Investor mendapatkan ekuitas proporsional dengan injeksi modal, dibuka pada pencapaian performa kuartalan.",
          highlights: ["Pangsa ekuitas 15%", "Vesting milestone kuartalan", "Kursi pengamat dewan", "Prioritas pada putaran masa depan"]
        },
        {
          title: "Bagi Hasil Pendapatan",
          subtitle: "25% Pendapatan Kotor hingga ROI 150%",
          desc: "Nol dilusi ekuitas. Investor menerima 25% dari pendapatan kotor bulanan hingga total pengembalian mencapai 150% dari investasi awal (Rp 450jt dari Rp 300jt).",
          highlights: ["Ekuitas 0% — Anda tetap memegang kepemilikan penuh", "25% pendapatan kotor bulanan", "Dibatasi pada total pengembalian 150%", "Dasbor pendapatan transparan"]
        },
        {
          title: "Smart Money",
          subtitle: "20% Ekuitas dengan KPI Jaringan Aktif",
          desc: "Untuk investor dengan koneksi tingkat C ke Pertamina, PLN, atau Mind ID. Pengurangan tunai (Rp 200-300jt), ekuitas diperoleh melalui perkenalan klien aktif.",
          highlights: ["Ekuitas 20% dengan vesting KPI ketat", "Wajib mendatangkan 3 klien korporat dalam 6 bulan", "Kebutuhan modal berkurang", "Partisipasi dewan aktif"]
        }
      ],
      ctaTitle: "Mari Bangun Masa Depan Kepatuhan Industri Berat",
      ctaDesc: "Jadwalkan presentasi rahasia untuk melihat sistem ERP langsung kami, model keuangan lengkap, dan diskusikan struktur kemitraan yang sesuai untuk Anda.",
      ctaButton: "Jadwalkan Presentasi",
      rights: "Seluruh hak cipta dilindungi.",
      confidential: "Rahasia — Hanya Untuk Investor yang Memenuhi Syarat."
    },
    podcast: {
      badge: "Mesin Pertumbuhan",
      title: "Mengapa Kami Tidak Melakukan Panggilan Dingin",
      subtitle: "Mesin pemasaran ramping kami menarik pengambil keputusan secara organik melalui konten kepemimpinan pemikiran B2B.",
      visualTitle: "Podcast Industry Insider",
      visualSub: "Percakapan langsung dengan para pemimpin industri",
      costStudio: "Sewa Studio",
      costOur: "Setup Kami",
      capexSaved: "CapEx Terhemat",
      strategies: [
        { title: "Dialog Segitiga", desc: "Ahli SME + Pimpinan Teknologi + Co-Host Wanita (Proxy Penonton). Tiga perspektif, satu narasi yang menarik." },
        { title: "Kepemimpinan Pemikiran", desc: "Posisikan SME kami sebagai otoritas industri. Setiap episode adalah aset pembangun kepercayaan yang menarik pengambil keputusan." },
        { title: "Iklan Konten Mikro", desc: "Ubah konten format panjang menjadi konten seukuran gigitan untuk LinkedIn, Instagram, dan TikTok. Jangkauan maksimal, pengeluaran minimal." }
      ]
    }
  }
};

export type Language = "en" | "id";
export type TranslationKeys = typeof translations.en;
