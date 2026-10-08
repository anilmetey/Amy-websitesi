import { useState } from 'react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactModal from './components/ContactModal';
import SplashScreen from './components/SplashScreen';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

export function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 0. BAŞLANGIÇ SİBER 3D SPLASH SCREEN */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <div className="relative min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] font-kanit selection:bg-[#B600A8]/40 selection:text-white overflow-x-clip">
        {/* 1. HERO BÖLÜMÜ (3D Three.js ve Hareketli Etkileşimli Avatar) */}
        <HeroSection onOpenContact={() => setIsContactOpen(true)} />

        {/* 2. KAYAN VİTRİN BÖLÜMÜ (Kasmayan, 100% Akıcı GPU Marquee) */}
        <MarqueeSection />

        {/* 3. HAKKIMDA BÖLÜMÜ (4 Köşe 3D Objeler ve Kelime Bazlı Akıcı Animasyon) */}
        <AboutSection onOpenContact={() => setIsContactOpen(true)} />

        {/* 4. HİZMETLER BÖLÜMÜ (Lüks İnteraktif Kartlar, Teknoloji Çipleri, 3D İkonlar) */}
        <ServicesSection />

        {/* 5. PROJELER BÖLÜMÜ (BirEmek, Klinik Karar Destek, SemptomAI) */}
        <ProjectsSection />

        {/* 6. DENEYİM & EĞİTİM BÖLÜMÜ (BirEmek, BlueSense, Sca Social, Mersin Üniv.) */}
        <ExperienceSection />

        {/* ALT BİLGİ (FOOTER) */}
        <footer className="relative w-full bg-[#0C0C0C] border-t border-white/10 px-6 md:px-12 py-16 text-[#D7E2EA] z-20">
          <div className="max-w-6xl mx-auto flex flex-col gap-10">
            {/* Hızlı İletişim Çağrısı */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/5">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  Bir sonraki projenizi birlikte hayata geçirelim mi?
                </h3>
                <p className="text-sm text-[#D7E2EA]/60 mt-1">
                  Mobil uygulama, yapay zeka entegrasyonu veya full-stack mimariler için bana dilediğiniz zaman ulaşabilirsiniz.
                </p>
              </div>
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-3.5 rounded-full font-medium uppercase tracking-widest text-xs sm:text-sm text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg flex-shrink-0"
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  outline: '2px solid rgba(255, 255, 255, 0.95)',
                  outlineOffset: '-3px',
                }}
              >
                Hemen İletişime Geç
              </button>
            </div>

            {/* Alt Çubuk */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
              <div>
                <div className="font-semibold text-white uppercase tracking-wider text-base">
                  Anıl Mete Yıldız
                </div>
                <div className="text-xs text-[#D7E2EA]/60 mt-0.5">
                  Bilgisayar Mühendisi &bull; Mobil &amp; Full-Stack Geliştirici &bull; Mersin, Türkiye
                </div>
              </div>

              {/* Sosyal Medya İkonları */}
              <div className="flex items-center gap-4 text-[#D7E2EA]/70">
                <a
                  href="https://github.com/anilmetey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/anıl-mete-yıldız-b76129234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:anilmetey@gmail.com"
                  className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
                  title="E-posta Gönder"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="tel:+905071437410"
                  className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
                  title="Telefon"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <button
                  onClick={scrollToTop}
                  className="ml-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                  title="Yukarı Çık"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </footer>

        {/* Etkileşimli İletişim Modalı */}
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>
    </>
  );
}

export default App;
