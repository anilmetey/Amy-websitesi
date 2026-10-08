import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from './ContactButton';
import { ThreeCanvas } from './ThreeCanvas';
import { Interactive3DAvatar, AvatarModelKey } from './Interactive3DAvatar';
import { MapPin } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const [currentModel, setCurrentModel] = useState<AvatarModelKey>('waving');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Three.js 3D Interactive Background Canvas */}
      <ThreeCanvas />

      {/* 1. NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-30 relative"
      >
        <button
          onClick={() => scrollTo('about')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
        >
          Hakkımda
        </button>

        <button
          onClick={() => scrollTo('services')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
        >
          Hizmetler
        </button>

        <button
          onClick={() => scrollTo('projects')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
        >
          Projeler
        </button>

        <button
          onClick={() => scrollTo('experience')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer hidden sm:block"
        >
          Deneyim
        </button>

        <button
          onClick={onOpenContact}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
        >
          İletişim
        </button>
      </motion.nav>

      {/* 2. HERO HEADING: YUKARIYA TAŞINMIŞ, EMOJİ VE AVATARLA ÇAKIŞMAYAN DEV BAŞLIK */}
      <div className="w-full overflow-hidden text-center z-0 pointer-events-none px-4 mt-2 sm:mt-4 md:mt-6 mb-auto pt-1 sm:pt-3">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-tight leading-tight w-full max-w-7xl mx-auto select-none drop-shadow-xl text-[7.5vw] sm:text-[8.5vw] md:text-[9vw] lg:text-[9.5vw]"
        >
          SELAM, BEN ANIL
        </motion.h1>
      </div>

      {/* 3. HERO PORTRAIT: 3D HAREKETLİ & EL SALLAYAN ETKİLEŞİMLİ AVATAR */}
      <div className="absolute left-1/2 -translate-x-1/2 z-30 bottom-2 sm:bottom-4 md:bottom-5 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Interactive3DAvatar
            currentModel={currentModel}
            onSelectModel={(model) => setCurrentModel(model)}
          />
        </motion.div>
      </div>

      {/* 4. BOTTOM BAR: POINTER-EVENTS-NONE ANA SARMALAYICI */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20 relative pointer-events-none">
        {/* Sol Alan: Kompakt & Asla Çakışmayan Siber Durum Kartı (pointer-events-auto) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-auto max-w-[210px] sm:max-w-[240px] md:max-w-[260px] p-3 sm:p-3.5 rounded-2xl bg-[#121316]/90 border border-white/10 backdrop-blur-xl shadow-2xl space-y-2 pointer-events-auto"
        >
          {/* Durum Rozeti */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-400 whitespace-nowrap">
              Yeni Projelere Açık
            </span>
          </div>

          {/* Açıklama / Rol */}
          <p className="text-[11px] sm:text-xs text-[#D7E2EA] font-light leading-snug">
            Yüksek performanslı <strong className="font-semibold text-white">mobil</strong>, <strong className="font-semibold text-white">AI</strong> ve <strong className="font-semibold text-white">full-stack</strong> sistemler.
          </p>

          {/* Konum & Teknoloji */}
          <div className="flex items-center justify-between text-[10px] text-[#D7E2EA]/60 pt-1.5 border-t border-white/5 font-mono">
            <span className="flex items-center gap-1 text-[#D7E2EA]/70">
              <MapPin className="w-3 h-3 text-[#B600A8]" /> Mersin, TR
            </span>
            <span className="text-cyan-400 font-semibold">Flutter &bull; AI</span>
          </div>
        </motion.div>

        {/* Sağ Alan: İletişim Butonu (pointer-events-auto) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="self-end pointer-events-auto"
        >
          <ContactButton label="İletişime Geç" onClick={onOpenContact} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
