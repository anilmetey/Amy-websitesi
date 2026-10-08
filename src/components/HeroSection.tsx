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
    <section className="relative min-h-svh lg:min-h-screen w-full flex flex-col lg:justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Three.js 3D Interactive Background Canvas */}
      <ThreeCanvas />

      {/* 1. NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex justify-between items-center gap-2 px-4 sm:px-6 md:px-10 pt-3 sm:pt-6 md:pt-8 z-30 relative [&>button]:min-h-11 [&>button]:text-[11px] sm:[&>button]:text-sm md:[&>button]:text-base lg:[&>button]:text-[1.25rem] lg:[&>button]:min-h-0"
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

      {/* 2. Heading stays in flow above the portrait on small screens. */}
      <div className="w-full text-center z-0 pointer-events-none px-4 mt-5 sm:mt-6 mb-6 lg:mb-auto pt-1 sm:pt-3">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-tight leading-[0.95] lg:leading-tight w-full max-w-7xl mx-auto select-none drop-shadow-xl text-[clamp(2.75rem,12vw,5rem)] lg:text-[9.5vw]"
        >
          <span className="block lg:inline">SELAM, </span>
          <span className="block lg:inline">BEN ANIL</span>
        </motion.h1>
      </div>

      {/* 3. HERO PORTRAIT: 3D HAREKETLİ & EL SALLAYAN ETKİLEŞİMLİ AVATAR */}
      <div className="relative w-full px-4 sm:px-8 lg:px-0 lg:w-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2 z-30 lg:bottom-5 pointer-events-auto">
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
      <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 lg:gap-6 px-5 sm:px-6 md:px-10 mt-6 lg:mt-0 pb-7 sm:pb-8 md:pb-10 z-20 relative pointer-events-none">
        {/* Sol Alan: Kompakt & Asla Çakışmayan Siber Durum Kartı (pointer-events-auto) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-sm sm:w-auto sm:max-w-[260px] p-4 lg:p-3.5 rounded-2xl bg-[#121316]/90 border border-white/10 backdrop-blur-xl shadow-2xl space-y-2 pointer-events-auto"
        >
          {/* Durum Rozeti */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs lg:text-[11px] font-bold uppercase tracking-wider text-emerald-400 whitespace-nowrap">
              Yeni Projelere Açık
            </span>
          </div>

          {/* Açıklama / Rol */}
          <p className="text-sm lg:text-xs text-[#D7E2EA] font-light leading-snug">
            Yüksek performanslı <strong className="font-semibold text-white">mobil</strong>, <strong className="font-semibold text-white">AI</strong> ve <strong className="font-semibold text-white">full-stack</strong> sistemler.
          </p>

          {/* Konum & Teknoloji */}
          <div className="flex items-center justify-between gap-3 text-xs lg:text-[10px] text-[#D7E2EA]/60 pt-1.5 border-t border-white/5 font-mono">
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
          className="w-full max-w-sm sm:w-auto sm:self-end pointer-events-auto"
        >
          <ContactButton label="İletişime Geç" onClick={onOpenContact} className="w-full min-h-11 sm:w-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
