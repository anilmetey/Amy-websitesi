import React from 'react';
import { FadeIn } from './FadeIn';
import { Briefcase, GraduationCap, CheckCircle, Calendar, MapPin } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  tech: string[];
}

const EXPERIENCES: Experience[] = [
  {
    company: 'BirEmek',
    role: 'Mobil Yazılım Mühendisi',
    period: 'Kas 2025 - Tem 2026',
    location: 'Uzaktan',
    type: 'Üretim Seviyesi / Tek Mühendis',
    bullets: [
      'BirEmek mobil uygulamasını backend, frontend ve sunucu altyapısı dahil olmak üzere uçtan uca, projedeki tek mühendis olarak tek başıma tasarladım, geliştirdim ve yayına aldım.',
      'Uygulamayı hem App Store hem de Google Play üzerinde yayınladım; App Store Connect teknik inceleme sürecini tek başıma yönettim ve yayını engelleyen kritik çökme (crash) hatalarını giderdim.',
      'Gerçek zamanlı veri akışını ve kararlı uygulama performansını sağlamak için REST API\'ler ve backend servisleri geliştirdim ve entegre ettim.',
    ],
    tech: ['Flutter', 'REST API', 'App Store Connect', 'Google Play Console', 'Cloud Architecture'],
  },
  {
    company: 'BlueSense',
    role: 'Android Geliştirici Stajyeri',
    period: 'Tem 2025 - Eyl 2025',
    location: 'Staj',
    type: 'Mobil Geliştirme',
    bullets: [
      'Kotlin ve Jetpack Compose kullanarak özel modern Android arayüz (UI) bileşenleri geliştirdim.',
      'Gerçek zamanlı veri yönetimi için uygulamanın frontend\'ini Firebase servisleri ve harici REST API\'lerle entegre ettim.',
      'Uçtan uca test süreçlerini tamamladım ve geliştirilen özellikleri doğrudan mühendislik ekibine sundum.',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Firebase', 'REST API', 'MVVM'],
  },
  {
    company: 'Sca Social',
    role: 'Proje Yönetimi Stajyeri',
    period: 'May 2025 - Haz 2025',
    location: 'Staj',
    type: 'Yönetim & Koordinasyon',
    bullets: [
      'Yazılım projelerinin planlama, iş takibi ve ekipler arası koordinasyon aşamalarına aktif destek verdim.',
      'Gereksinim analizi ve geliştirme döngüsü sprint süreçlerini takip ettim.',
    ],
    tech: ['Agile / Scrum', 'Proje Yönetimi', 'Sprint Koordinasyonu'],
  },
];

const SKILL_CATEGORIES = [
  {
    category: 'Programlama Dilleri',
    skills: ['C#', 'Kotlin', 'Dart', 'Python', 'Java', 'SQL', 'JavaScript', 'C'],
  },
  {
    category: 'Mobil & Arayüz (UI)',
    skills: ['Flutter', 'Android SDK', 'Jetpack Compose', 'MVVM Mimarisi'],
  },
  {
    category: 'Backend & API Mimarisi',
    skills: ['ASP.NET Core', 'Entity Framework Core', 'RESTful Servisler', 'JWT Doğrulama', 'Swagger UI'],
  },
  {
    category: 'Veritabanı & Bulut',
    skills: ['SQL Server', 'MySQL', 'SQLite', 'Firebase Cloud'],
  },
  {
    category: 'Araçlar & Teknolojiler',
    skills: ['PyTorch (AI)', 'Git & GitHub', 'Postman', 'Visual Studio', 'Android Studio'],
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-12 py-24 z-10 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Başlık */}
        <FadeIn delay={0} y={30}>
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold">
              Kariyer &amp; Geçmiş
            </span>
            <h2
              className="hero-heading font-black uppercase tracking-tight select-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
            >
              DENEYİM &amp; EĞİTİM
            </h2>
          </div>
        </FadeIn>

        {/* 1. İŞ DENEYİMLERİ KARTLARI */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-lg sm:text-xl font-bold uppercase text-white tracking-wide border-b border-white/10 pb-4">
            <Briefcase className="w-5 h-5 text-[#B600A8]" />
            <span>İş Deneyimi</span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {EXPERIENCES.map((exp, index) => (
              <FadeIn key={exp.company} delay={index * 0.1} y={20}>
                <div className="p-6 sm:p-8 rounded-3xl bg-[#121316] border border-[#23272E] hover:border-[#B600A8]/40 transition-all duration-300 shadow-xl space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <span className="text-xs px-3 py-1 rounded-full bg-[#B600A8]/20 text-[#B600A8] border border-[#B600A8]/30 font-semibold uppercase">
                          {exp.type}
                        </span>
                      </div>
                      <div className="text-base text-white/80 font-medium mt-1">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#D7E2EA]/60 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#B600A8]" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Madde İmleri */}
                  <ul className="space-y-2.5 pt-2">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#D7E2EA]/75 leading-relaxed font-light">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Teknoloji Etiketleri */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs bg-white/[0.04] border border-white/10 text-white/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* 2. EĞİTİM BÖLÜMÜ */}
        <FadeIn delay={0.1} y={20}>
          <div className="p-6 sm:p-8 rounded-3xl bg-[#121316] border border-[#23272E] hover:border-cyan-500/30 transition-all shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3 text-lg font-bold uppercase text-white tracking-wide">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
                <span>Eğitim Bilgisi</span>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold font-mono">
                2021 - 2026
              </span>
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-black uppercase text-white">
                Bilgisayar Mühendisliği Lisans
              </h4>
              <p className="text-base text-[#D7E2EA]/90 font-medium">
                Mersin Üniversitesi &bull; Mühendislik Fakültesi
              </p>
              <p className="text-sm text-[#D7E2EA]/70 font-light leading-relaxed pt-1">
                Yazılım mimarileri, algoritmalar ve veri yapıları, derin öğrenme temelleri, veritabanı yönetim sistemleri ve modern mobil uygulama geliştirme odaklı kapsamlı lisans eğitimi.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* 3. TEKNİK YETENEKLER MATRİSİ */}
        <FadeIn delay={0.3} y={20}>
          <div className="p-6 sm:p-8 rounded-3xl bg-[#121316] border border-[#23272E] shadow-xl space-y-6">
            <h3 className="text-xl font-black uppercase text-white tracking-tight border-b border-white/10 pb-4">
              Teknik Yetenekler &amp; Araç Seti
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category} className="space-y-2.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#B600A8]">
                    {cat.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-medium text-white hover:border-cyan-400/50 hover:bg-white/[0.08] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ExperienceSection;
