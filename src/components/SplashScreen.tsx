import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Activity } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 2200; // 2.2 seconds cinematic loading
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setIsDone(true);
          setTimeout(() => {
            onComplete();
          }, 450);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    const safetyTimer = setTimeout(() => {
      setIsDone(true);
      onComplete();
    }, 2600);

    return () => {
      clearInterval(timer);
      clearTimeout(safetyTimer);
    };
  }, [onComplete]);

  const getStatusText = (p: number) => {
    if (p < 25) return 'HOLOGRAM PROJEKSİYONU BAŞLATILIYOR...';
    if (p < 55) return '3D AVATAR & PARÇACIKLAR YÜKLENİYOR...';
    if (p < 85) return 'MOBİL & FULL-STACK MİMARİ BAĞLANIYOR...';
    return 'SİSTEM ÇEVRİMİÇİ • HOŞ GELDİNİZ 👋';
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08, filter: 'blur(8px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070708] select-none overflow-hidden"
        >
          {/* 1. SİNEMATİK VİDEO ARKA PLANI & TARAMA ÇİZGİLERİ (SCANLINES) */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(182, 0, 168, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.15) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              perspective: '600px',
            }}
          />

          {/* Sinematik Üst & Alt Film Bantları */}
          <div className="absolute top-0 inset-x-0 h-10 sm:h-14 bg-black flex items-center justify-between px-6 z-20 border-b border-white/10 font-mono text-[10px] sm:text-xs text-[#D7E2EA]/40">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span className="text-red-400 font-bold uppercase tracking-wider">REC // 4K 60FPS</span>
            </div>
            <div className="hidden sm:block">SYSTEM PROTOCOL: ANIL-METE-v2.6</div>
            <div>00:00:0{Math.floor(progress / 10)}:{(Math.floor(progress * 3.7) % 60).toString().padStart(2, '0')}</div>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-10 sm:h-14 bg-black flex items-center justify-between px-6 z-20 border-t border-white/10 font-mono text-[10px] sm:text-xs text-[#D7E2EA]/40">
            <div>RESOLUTION: 3840 x 2160 ULTRA HD</div>
            <div className="flex items-center gap-2 text-cyan-400">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>GPU ENGINE: ACTIVE</span>
            </div>
          </div>

          {/* Ortada Yayılan Sinematik Radial Parlama */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#B600A8]/25 via-[#7621B0]/30 to-cyan-500/20 blur-3xl pointer-events-none" />

          {/* 2. 3D EL SALLAYAN AVATAR HOLOGRAM MERKEZİ */}
          <div className="relative mb-6 flex flex-col items-center justify-center z-10">
            {/* Dönen Dış Siber Halkalar */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              className="absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-dashed border-[#B600A8]/50"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-cyan-400/40"
            />

            {/* Hologram Tarama Çizgisi Animasyonu */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-white/30 shadow-[0_0_40px_rgba(182,0,168,0.6)] bg-[#0C0C0C] group">
              {/* Gerçek 3D El Sallayan Avatar */}
              <img
                src={`${import.meta.env.BASE_URL}anil_waving.jpg`}
                alt="Anıl Mete 3D Avatar Hologram"
                className="w-full h-full object-cover scale-105"
              />

              {/* Yukarıdan Aşağıya Kayan Sinematik Lazer Tarama Çizgisi */}
              <motion.div
                animate={{ y: ['-100%', '200%'] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-cyan-400/35 to-transparent pointer-events-none"
              />

              {/* Holografik Renk Filtresi */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#B600A8]/30 via-transparent to-cyan-500/10 pointer-events-none" />
            </div>

            {/* Hologram Altı Ses Dalgası / Spektrum Barları */}
            <div className="flex items-center gap-1 mt-4">
              {[40, 70, 95, 60, 85, 50, 90, 75, 45, 80, 65].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [`${h * 0.2}px`, `${h * 0.4}px`, `${h * 0.15}px`] }}
                  transition={{ repeat: Infinity, duration: 0.8 + (i % 3) * 0.2, ease: 'easeInOut' }}
                  className="w-1 rounded-full bg-gradient-to-t from-[#B600A8] to-cyan-400 opacity-80"
                  style={{ height: `${h * 0.3}px` }}
                />
              ))}
            </div>
          </div>

          {/* 3. BAŞLIK & TİPOGRAFİ */}
          <div className="text-center space-y-1.5 z-10 px-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono text-cyan-400 uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-[#B600A8]" />
              <span>3D CREATIVE INTRO</span>
            </div>
            <h1 className="hero-heading font-black uppercase tracking-tight text-3xl sm:text-5xl md:text-6xl">
              ANIL METE YILDIZ
            </h1>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/70 font-medium">
              Bilgisayar Mühendisi &bull; Mobil &bull; Full-Stack &bull; 3D Creator
            </p>
          </div>

          {/* 4. SİNEMATİK İLERLEME ÇUBUĞU */}
          <div className="mt-6 w-64 sm:w-80 h-2 bg-white/10 rounded-full overflow-hidden p-0.5 z-10 shadow-inner">
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background:
                  'linear-gradient(90deg, #18011F 0%, #B600A8 35%, #7621B0 70%, #38BDF8 100%)',
                boxShadow: '0 0 16px rgba(56, 189, 248, 0.8)',
              }}
            />
          </div>

          {/* 5. YÜZDE & AŞAMALI SİSTEM METNİ */}
          <div className="mt-3 flex flex-col items-center gap-1 z-10 font-mono">
            <span className="text-sm sm:text-base font-bold text-white tracking-widest">
              [{Math.floor(progress).toString().padStart(3, ' ')}%]
            </span>
            <span className="text-[11px] sm:text-xs text-[#D7E2EA]/60 tracking-wider uppercase">
              {getStatusText(progress)}
            </span>
          </div>

          {/* 6. HIZLI GEÇİŞ BUTONU */}
          <button
            onClick={() => {
              setIsDone(true);
              onComplete();
            }}
            type="button"
            className="absolute bottom-16 sm:bottom-20 z-20 text-[11px] font-mono text-white/40 hover:text-white transition-colors uppercase tracking-widest cursor-pointer px-4 py-1.5 rounded-full border border-white/10 hover:border-white/30 bg-black/40 backdrop-blur-md"
          >
            Girişi Atla [SKIP] &rarr;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
