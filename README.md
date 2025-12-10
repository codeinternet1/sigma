# SIGMA - Sistem Informasi Digital Pesantren

Aplikasi web modern untuk mengelola data santri, guru, dan administrasi pesantren dengan fitur-fitur islami yang lengkap.

## 🚀 Fitur Utama

### 📊 Manajemen Data
- **Data Mahasantri**: Kelola biodata santri dengan kategorisasi berdasarkan asal daerah
- **Data Mustahiq**: Manajemen data guru dan pengajar
- **Tim & Pengurus**: Struktur organisasi pesantren

### 🕌 Fitur Islami
- **Digital Falak**: Kompas kiblat, jadwal sholat, dan perhitungan waktu
- **Kalkulator Zakat**: Hitung zakat profesi, emas, perdagangan, pertanian, dan ternak
- **Kalkulator Waris**: Pembagian harta warisan sesuai syariat Islam
- **Kitab Digital**: Koleksi kitab dan doa dalam format PDF

### 🛍️ Fitur Tambahan
- **Koperasi Digital**: Sistem toko online untuk kebutuhan santri
- **Galeri & Video**: Dokumentasi kegiatan pesantren
- **Kalender Kegiatan**: Jadwal acara dan kegiatan pesantren
- **Artikel Edukasi**: Konten edukatif tentang kehidupan pesantren

## 🏗️ Struktur Project

```
src/
├── components/           # Komponen React
│   ├── common/          # Komponen umum (Layout, Footer, dll)
│   ├── forms/           # Komponen form
│   ├── cards/           # Komponen kartu
│   ├── modals/          # Komponen modal
│   └── UI/              # Komponen UI khusus
├── pages/               # Halaman aplikasi
│   ├── auth/            # Halaman autentikasi
│   ├── dashboard/       # Dashboard utama
│   ├── tools/           # Halaman tools (zakat, waris, dll)
│   └── ...
├── context/             # React Context
├── hooks/               # Custom hooks
├── services/            # API services
├── utils/               # Utility functions
│   └── helpers/         # Helper functions
├── data/                # Data statis
└── types/               # TypeScript types
```

## 🛠️ Teknologi

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Framer Motion
- **State Management**: React Context
- **Icons**: Lucide React + FontAwesome
- **Maps**: Google Maps Integration
- **PDF**: React PDF
- **Image Upload**: Cloudinary

## 🚀 Quick Start

1. **Clone repository**
```bash
git clone <repository-url>
cd sigma-pesantren
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env
# Edit .env dengan konfigurasi yang sesuai
```

4. **Run development server**
```bash
npm run dev
```

## 🔐 Demo Login

### Admin Access
- Username: `admin`
- Password: `admin123`
- Akses: Full access (CRUD semua data)

### User Access
- Username: `user`
- Password: `user123`
- Akses: Read-only

## 📱 Fitur Mobile

- Responsive design untuk semua ukuran layar
- Touch-friendly interface
- Offline-capable untuk beberapa fitur
- PWA ready

## 🎨 Design System

- **Colors**: Gradient modern dengan tema islami
- **Typography**: Poppins font family
- **Components**: Glassmorphism design
- **Animations**: Smooth transitions dengan Framer Motion

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # ESLint check
```

### Code Style

- TypeScript strict mode
- ESLint + Prettier
- Conventional commits
- Component-based architecture

## 📄 License

© 2024 Pondok Pesantren Lirboyo. All rights reserved.

---

**Developer**: Rifki Alaziz  
**Contact**: [WhatsApp](https://wa.me/62859269692) | [Instagram](https://instagram.com/rifki_alaziz)