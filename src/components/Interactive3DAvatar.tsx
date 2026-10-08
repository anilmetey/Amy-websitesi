import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Smartphone, Check } from 'lucide-react';

export type AvatarModelKey = 'waving' | 'studio';

interface Interactive3DAvatarProps {
  currentModel: AvatarModelKey;
  onSelectModel: (model: AvatarModelKey) => void;
}

const AVATARS: Record<
  AvatarModelKey,
  {
    src: string;
    title: string;
    label: string;
    bubble: string;
    badgeIcon: string;
  }
> = {
  waving: {
    src: `${import.meta.env.BASE_URL}anil_waving.jpg`,
    title: 'El Sallayan 3D Anıl',
    label: '👋 El Sallayan 3D',
    bubble: 'Selam! Hoş geldin, Ben Anıl',
    badgeIcon: '👋',
  },
  studio: {
    src: `${import.meta.env.BASE_URL}anil_avatar.jpg`,
    title: 'Siber Stüdyo Portresi',
    label: '⚡ Siber Stüdyo 3D',
    bubble: 'Anıl Mete • Full-Stack & 3D',
    badgeIcon: '⚡',
  },
};

export const Interactive3DAvatar: React.FC<Interactive3DAvatarProps> = ({
  currentModel,
  onSelectModel,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);

  // Smooth lerp 3D rotation
  const rotRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const animFrameRef = useRef<number | null>(null);

  const updateCardTransform = useCallback(() => {
    const { x, y, targetX, targetY } = rotRef.current;
    const newX = x + (targetX - x) * 0.12;
    const newY = y + (targetY - y) * 0.12;
    rotRef.current.x = newX;
    rotRef.current.y = newY;

    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1000px) rotateX(${newX}deg) rotateY(${newY}deg) scale3d(1.02, 1.02, 1.02)`;
    }

    if (glareRef.current) {
      const glareX = 50 + newY * 3;
      const glareY = 50 - newX * 3;
      glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.3) 0%, rgba(182,0,168,0.2) 30%, transparent 70%)`;
    }

    animFrameRef.current = requestAnimationFrame(updateCardTransform);
  }, []);

  useEffect(() => {
    animFrameRef.current = requestAnimationFrame(updateCardTransform);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [updateCardTransform]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateY = (mouseX / (rect.width / 2)) * 14;
    const rotateX = -(mouseY / (rect.height / 2)) * 14;

    rotRef.current.targetX = rotateX;
    rotRef.current.targetY = rotateY;
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    rotRef.current.targetX = 0;
    rotRef.current.targetY = 0;
  };

  const currentData = AVATARS[currentModel];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center select-none z-30"
      style={{ perspective: 1200 }}
    >
      {/* 1. Üst Konuşma & Selam Baloncuğu */}
      <motion.div
        key={`bubble-${currentModel}`}
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-2 z-40 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16181D]/90 border border-[#B600A8]/60 text-xs sm:text-sm font-bold text-white shadow-2xl backdrop-blur-md"
      >
        <span className="text-base animate-bounce">{currentData.badgeIcon}</span>
        <span className="bg-gradient-to-r from-white via-[#D7E2EA] to-[#B600A8] bg-clip-text text-transparent">
          {currentData.bubble}
        </span>
      </motion.div>

      {/* 2. 3D Holografik Kart (Tıklandığında diğer modele geçiş) */}
      <div
        ref={cardRef}
        onClick={() => onSelectModel(currentModel === 'waving' ? 'studio' : 'waving')}
        className="relative rounded-3xl overflow-visible transition-shadow duration-300 cursor-pointer group"
        title="Diğer 3D modele geçmek için tıkla"
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {/* Arka Parıltı Efekti */}
        <div className="absolute -inset-4 bg-gradient-to-r from-[#B600A8]/30 via-[#7621B0]/30 to-[#38bdf8]/20 rounded-full blur-2xl opacity-80 pointer-events-none group-hover:opacity-100 transition-opacity" />

        {/* Dinamik Işık Yansıması */}
        <div
          ref={glareRef}
          className="absolute inset-0 z-20 rounded-3xl pointer-events-none mix-blend-overlay transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0.45,
          }}
        />

        {/* 3D Yüzen Rozetler */}
        <div
          className="absolute top-8 -left-6 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#121316]/95 border border-purple-500/50 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-transform duration-300 pointer-events-none"
          style={{
            transform: isHovered ? 'translateZ(45px) scale(1.05)' : 'translateZ(20px)',
          }}
        >
          <Smartphone className="w-3.5 h-3.5 text-purple-400" />
          <span>Flutter &amp; Mobil</span>
        </div>

        <div
          className="absolute top-12 -right-6 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#121316]/95 border border-cyan-500/50 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-transform duration-300 pointer-events-none"
          style={{
            transform: isHovered ? 'translateZ(50px) scale(1.05)' : 'translateZ(20px)',
          }}
        >
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>PyTorch AI</span>
        </div>

        <div
          className="absolute bottom-8 -right-4 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#121316]/95 border border-[#B600A8]/50 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-transform duration-300 pointer-events-none"
          style={{
            transform: isHovered ? 'translateZ(40px) scale(1.05)' : 'translateZ(15px)',
          }}
        >
          <Terminal className="w-3.5 h-3.5 text-pink-400" />
          <span>ASP.NET Core</span>
        </div>

        {/* Ana 3D Avatar Görseli */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0C0C0C] shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentModel}
              src={currentData.src}
              alt={currentData.title}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3 }}
              className="w-[220px] sm:w-[260px] md:w-[310px] lg:w-[360px] xl:w-[400px] max-h-[50vh] sm:max-h-[54vh] object-cover pointer-events-none drop-shadow-[0_25px_60px_rgba(182,0,168,0.35)]"
            />
          </AnimatePresence>

          {/* Alt degradeli gölge */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/60 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* 3. İKİLİ ETKİLEŞİMLİ SEGMENTED MODEL SEÇİCİ (GARANTİ TIKLANABİLİR Z-50) */}
      <div className="mt-4 p-1.5 rounded-full bg-[#121316]/90 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center gap-1 z-50 pointer-events-auto">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelectModel('waving');
          }}
          type="button"
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
            currentModel === 'waving'
              ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-md scale-105'
              : 'text-[#D7E2EA]/60 hover:text-white hover:bg-white/5'
          }`}
        >
          <span>👋 El Sallayan</span>
          {currentModel === 'waving' && <Check className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelectModel('studio');
          }}
          type="button"
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
            currentModel === 'studio'
              ? 'bg-gradient-to-r from-[#7621B0] to-cyan-600 text-white shadow-md scale-105'
              : 'text-[#D7E2EA]/60 hover:text-white hover:bg-white/5'
          }`}
        >
          <span>⚡ Stüdyo Modu</span>
          {currentModel === 'studio' && <Check className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};

export default Interactive3DAvatar;
