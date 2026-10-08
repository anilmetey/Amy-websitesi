import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const bioText =
    "Mersin Üniversitesi Bilgisayar Mühendisliği öğrencisi ve üretime hazır sistemler kuran full-stack & mobil geliştiriciyim. BirEmek uygulamasını tek mühendis olarak sıfırdan mimarilendirip App Store ve Google Play yayın süreçlerini başarıyla tamamlamaktan, TÜBİTAK onaylı klinik karar destek yapay zeka sistemlerine ve yüksek performanslı ASP.NET Core API'lerine kadar uçtan uca mimariler kuruyorum. Kotlin, Flutter, PyTorch ve temiz kod prensipleriyle kullanıcı odaklı sistemler tasarlıyorum. Birlikte sıra dışı projeler inşa edelim!";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-24 bg-[#0C0C0C] overflow-hidden"
    >
      {/* 4 ADET DEKORATİF 3D KÖŞE OBJESİ */}
      {/* 1. Sol Üst: Moon Icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-0">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Ay İkonu"
            className="w-[120px] sm:w-[160px] md:w-[210px] select-none drop-shadow-2xl opacity-90 animate-float-3d"
          />
        </FadeIn>
      </div>

      {/* 2. Sol Alt: 3D Obje */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-0">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Dekoratif Obje"
            className="w-[100px] sm:w-[140px] md:w-[180px] select-none drop-shadow-2xl opacity-90 animate-float-3d"
            style={{ animationDelay: '1.5s' }}
          />
        </FadeIn>
      </div>

      {/* 3. Sağ Üst: Lego Icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-0">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego İkonu"
            className="w-[120px] sm:w-[160px] md:w-[210px] select-none drop-shadow-2xl opacity-90 animate-float-3d"
            style={{ animationDelay: '2.5s' }}
          />
        </FadeIn>
      </div>

      {/* 4. Sağ Alt: 3D Grup */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-0">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Grup İkonu"
            className="w-[130px] sm:w-[170px] md:w-[220px] select-none drop-shadow-2xl opacity-90 animate-float-3d"
            style={{ animationDelay: '3.5s' }}
          />
        </FadeIn>
      </div>

      {/* MERKEZ İÇERİK */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl text-center">
        {/* Başlık */}
        <FadeIn delay={0} y={40} duration={0.7}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            HAKKIMDA
          </h2>
        </FadeIn>

        {/* Başlık ile Metin Arası Boşluk */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Akıcı Kaydırma Animasyonlu Paragraf */}
        <div className="max-w-[700px] px-3 sm:px-6">
          <AnimatedText
            text={bioText}
            className="font-medium text-center leading-relaxed text-[#D7E2EA] text-base sm:text-lg md:text-xl"
          />
        </div>

        {/* Metin ile Buton Arası Boşluk */}
        <div className="h-14 sm:h-18 md:h-20" />

        {/* İletişim Butonu */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton label="İletişime Geç" onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
