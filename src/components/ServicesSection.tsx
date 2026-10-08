import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import {
  Smartphone,
  Server,
  BrainCircuit,
  Box,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  accentColor: string;
  gradientText: string;
  deliverables: string[];
  techStack: string[];
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Mobil Uygulama Mühendisliği',
    tagline: 'Flutter & Kotlin • App Store & Play Store',
    description:
      'Fikir aşamasından market yayın onayına kadar uçtan uca modern mobil mimariler. Özel reaktif arayüz bileşenleri, kararlı veri akışı ve sıfır çökme (crash-free) garantisiyle yüksek performanslı uygulamalar.',
    icon: Smartphone,
    accentColor: '#B600A8',
    gradientText: 'from-[#18011F] via-[#B600A8] to-[#7621B0]',
    deliverables: [
      'App Store Connect & Google Play Console Uçtan Uca Yayın Yönetimi',
      'Flutter & Dart ile Çift Platform (iOS & Android) Tek Kod Tabanı',
      'Kotlin & Jetpack Compose ile Özel Android Arayüz (UI) Mimarisi',
    ],
    techStack: ['Flutter', 'Kotlin', 'Jetpack Compose', 'MVVM', 'Firebase', 'REST API'],
  },
  {
    number: '02',
    title: 'Full-Stack & Backend Mimarisi',
    tagline: 'ASP.NET Core • Katmanlı Mimari • Güvenli API',
    description:
      'Yüksek ölçekli ve kurumsal standartlarda backend servisleri. Katmanlı mimari desenleri, JWT tabanlı sıkı kimlik doğrulama, Swagger UI dokümantasyonu ve optimize edilmiş ilişkisel veritabanları.',
    icon: Server,
    accentColor: '#7621B0',
    gradientText: 'from-[#7621B0] via-[#5B108B] to-[#3B0759]',
    deliverables: [
      'ASP.NET Core & Entity Framework Core ile Katmanlı RESTful Servisler',
      'JWT Kimlik Doğrulama & Rol Tabanlı Güvenlik Protokolleri',
      'SQL Server & Firebase Gerçek Zamanlı Veritabanı Senkronizasyonu',
    ],
    techStack: ['ASP.NET Core', 'EF Core', 'C#', 'SQL Server', 'JWT Auth', 'Swagger UI'],
  },
  {
    number: '03',
    title: 'Yapay Zeka & Sağlık Teknolojileri',
    tagline: 'PyTorch • Derin Öğrenme • Çıkarım Motorları',
    description:
      'Python ve PyTorch kullanarak eğitilmiş derin öğrenme modellerinin backend API altyapılarına kesintisiz entegrasyonu. Gerçek zamanlı semptom analiz algoritmaları ve klinik karar destek sistemleri.',
    icon: BrainCircuit,
    accentColor: '#0284C7',
    gradientText: 'from-[#0369A1] via-[#0284C7] to-[#38BDF8]',
    deliverables: [
      'PyTorch Derin Öğrenme Modelleri ve Yüksek Hızlı Çıkarım Motorları (Inference)',
      'Gerçek Zamanlı Semptom ve Sağlık Verisi Analiz Algoritmaları',
      'Python Yapay Zeka Servislerinin ASP.NET Core Backend ile Kesintisiz İletişimi',
    ],
    techStack: ['Python', 'PyTorch', 'Derin Öğrenme', 'Sağlık Teknolojileri', 'Veri Analizi'],
  },
  {
    number: '04',
    title: '3D & Etkileşimli Arayüz Tasarımı',
    tagline: 'Three.js • WebGL • Mikro Etkileşimler',
    description:
      'Ziyaretçiyi ilk saniyede etkileyen dinamik 3D web sahneleri, parçacık alanları ve fizik tabanlı mikro etkileşimler. Figma tasarımlarını piksel hassasiyetinde, 60–120 FPS akıcılığında koda dökme.',
    icon: Box,
    accentColor: '#9333EA',
    gradientText: 'from-[#9333EA] via-[#A855F7] to-[#C084FC]',
    deliverables: [
      'Three.js ve WebGL ile Donanım Hızlandırmalı 3D Web Deneyimleri',
      'Framer Motion ile Fizik Tabanlı Akıcı Mikro Animasyonlar',
      'Figma Tasarımlarından Dönüşüm Odaklı ve Mobil Uyumlu UI Geliştirme',
    ],
    techStack: ['Three.js', 'WebGL', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
  },
  {
    number: '05',
    title: 'Sistem Optimizasyonu & Temiz Mimari',
    tagline: 'SOLID • Sıfır Çökme • Profiling',
    description:
      'Karmaşık kod tabanlarını basitleştirme, performans darboğazlarını giderme ve çökme analizi. Sürdürülebilir, test edilebilir ve SOLID prensiplerine tam uyumlu mühendislik çözümleri.',
    icon: ShieldCheck,
    accentColor: '#059669',
    gradientText: 'from-[#065F46] via-[#059669] to-[#10B981]',
    deliverables: [
      'SOLID ve Clean Architecture Prensiplerine Dayalı Sürdürülebilir Kod',
      'Kritik Çökme (Crash) Hatalarının Tespiti ve Performans Profiling',
      'Uçtan Uca Test Süreçleri ve Sıfır Hata Odaklı Üretim Dağıtımı',
    ],
    techStack: ['Clean Architecture', 'SOLID', 'Postman', 'Git / GitHub', 'Profiling'],
  },
];

export const ServicesSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-12 py-20 sm:py-28 md:py-36 z-0 shadow-2xl"
    >
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24">
        {/* Üst Başlık & Açıklama */}
        <FadeIn delay={0} y={40}>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.05] border border-black/10 text-xs font-bold uppercase tracking-widest text-[#0C0C0C]">
              <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
              <span>Mühendislik &amp; Tasarım Çözümleri</span>
            </div>

            <h2
              className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight select-none"
              style={{ fontSize: 'clamp(2.8rem, 10vw, 150px)' }}
            >
              HİZMETLER
            </h2>

            <p className="max-w-2xl text-base sm:text-lg text-[#0C0C0C]/70 font-light leading-relaxed">
              Mobil uygulamalardan kurumsal API mimarilerine, yapay zeka modellerinden etkileşimli 3D web deneyimlerine kadar uçtan uca sunduğum uzmanlık alanları.
            </p>
          </div>
        </FadeIn>

        {/* 5 Adet Zenginleştirilmiş İnteraktif Hizmet Kartı */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <FadeIn key={service.number} delay={index * 0.08} y={30}>
                <div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative p-6 sm:p-8 md:p-10 rounded-[28px] sm:rounded-[36px] border transition-all duration-500 cursor-pointer overflow-hidden ${
                    isHovered
                      ? 'bg-gradient-to-br from-white via-[#FAF5FF] to-[#F3F4F6] border-purple-300 shadow-2xl -translate-y-1.5'
                      : 'bg-[#F9FAFB] border-black/10 hover:border-black/20 shadow-sm'
                  }`}
                >
                  {/* Arka Plan Yumuşak Glow Efekti */}
                  <div
                    className={`absolute -right-20 -top-20 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 ${
                      isHovered ? 'opacity-30' : 'opacity-0'
                    }`}
                    style={{ backgroundColor: service.accentColor }}
                  />

                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                    {/* Sol Kısım: Dev Numara & İkon */}
                    <div className="flex items-center lg:flex-col lg:items-start justify-between lg:justify-start gap-4 lg:w-1/4">
                      <div className="flex items-baseline gap-3">
                        <span
                          className={`font-black tracking-tight leading-none transition-all duration-300 select-none ${
                            isHovered
                              ? `bg-gradient-to-r ${service.gradientText} bg-clip-text text-transparent scale-105`
                              : 'text-[#0C0C0C]'
                          }`}
                          style={{ fontSize: 'clamp(3rem, 7vw, 110px)' }}
                        >
                          {service.number}
                        </span>
                      </div>

                      {/* İkon Rozeti */}
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110"
                        style={{
                          backgroundColor: isHovered ? service.accentColor : '#0C0C0C',
                          color: '#FFFFFF',
                        }}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>

                    {/* Orta Kısım: Başlık, Açıklama ve Teslimatlar */}
                    <div className="flex-1 space-y-5">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#B600A8]">
                          {service.tagline}
                        </span>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#0C0C0C] tracking-tight mt-1">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-base md:text-lg text-[#0C0C0C]/75 font-light leading-relaxed max-w-3xl">
                        {service.description}
                      </p>

                      {/* Neler Sunuyorum Madde İmleri */}
                      <div className="space-y-2.5 pt-2 border-t border-black/10">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#0C0C0C]/60">
                          Öne Çıkan Teslimatlar &amp; Standartlar:
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {service.deliverables.map((item, dIdx) => (
                            <div
                              key={dIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#0C0C0C]/85 leading-snug"
                            >
                              <CheckCircle2
                                className="w-4 h-4 mt-0.5 flex-shrink-0"
                                style={{ color: service.accentColor }}
                              />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Teknoloji Çipleri */}
                      <div className="flex flex-wrap items-center gap-2 pt-3">
                        {service.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-xl bg-black/[0.05] border border-black/10 text-xs font-semibold text-[#0C0C0C] transition-colors group-hover:bg-white group-hover:border-black/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Sağ Kısım: İnteraktif Aksiyon Oku */}
                    <div className="hidden lg:flex items-center justify-end pl-4">
                      <div
                        className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isHovered
                            ? 'bg-[#0C0C0C] text-white border-[#0C0C0C] rotate-45 scale-110 shadow-lg'
                            : 'border-black/20 text-[#0C0C0C]'
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
