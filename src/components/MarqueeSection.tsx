import React from 'react';

interface ShowcaseItem {
  src: string;
  tag: string;
  title: string;
}

const ROW_1: ShowcaseItem[] = [
  {
    src: 'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
    tag: '3D Web & Uzay',
    title: 'Space Voyage',
  },
  {
    src: 'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
    tag: 'Full-Stack Kodlama',
    title: 'CodeNest Cloud',
  },
  {
    src: 'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
    tag: 'Fintech & Dashboard',
    title: 'Vex Ventures',
  },
  {
    src: 'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
    tag: 'Yapay Zeka & PyTorch',
    title: 'Stellar AI Engine',
  },
  {
    src: 'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
    tag: 'Mobil Arayüz',
    title: 'ASME Platform',
  },
  {
    src: 'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
    tag: 'Veri Analizi',
    title: 'Data Transformer',
  },
  {
    src: 'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
    tag: '3D Etkileşim',
    title: 'Vitara Studio',
  },
  {
    src: 'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
    tag: 'Modern Web',
    title: 'Terra Experience',
  },
];

const ROW_2: ShowcaseItem[] = [
  {
    src: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
    tag: 'Mobil Sağlık',
    title: 'SemptomAI Health',
  },
  {
    src: 'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
    tag: 'Bulut Mimarisi',
    title: 'BirEmek Cloud',
  },
  {
    src: 'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
    tag: 'RESTful API',
    title: 'NotTrack Architecture',
  },
  {
    src: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
    tag: 'Klinik Teşhis',
    title: 'Klinik Karar Destek',
  },
  {
    src: 'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
    tag: '3D Simülasyon',
    title: 'Orbit 3D System',
  },
  {
    src: 'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
    tag: 'Yüksek Performans',
    title: 'Luminex Core',
  },
  {
    src: 'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
    tag: 'Mobil Deneyim',
    title: 'Celestia Mobile',
  },
];

export const MarqueeSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-12">
      {/* Subtle edge fade overlays for infinite smooth transition */}
      <div className="absolute left-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-4">
        {/* ROW 1: Sağa Kayan Akıcı GPU Marquee */}
        <div className="w-full overflow-hidden">
          <div className="flex gap-4 w-max animate-marquee-right hover:[animation-play-state:paused]">
            {[...ROW_1, ...ROW_1, ...ROW_1].map((item, idx) => (
              <div
                key={`row1-${idx}`}
                className="relative group w-[340px] sm:w-[400px] h-[220px] sm:h-[260px] rounded-2xl overflow-hidden bg-[#16181D] flex-shrink-0 border border-white/10 shadow-lg"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B600A8]">
                    {item.tag}
                  </span>
                  <span className="text-sm font-bold text-white uppercase tracking-tight">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Sola Kayan Akıcı GPU Marquee */}
        <div className="w-full overflow-hidden">
          <div className="flex gap-4 w-max animate-marquee-left hover:[animation-play-state:paused]">
            {[...ROW_2, ...ROW_2, ...ROW_2].map((item, idx) => (
              <div
                key={`row2-${idx}`}
                className="relative group w-[340px] sm:w-[400px] h-[220px] sm:h-[260px] rounded-2xl overflow-hidden bg-[#16181D] flex-shrink-0 border border-white/10 shadow-lg"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
                    {item.tag}
                  </span>
                  <span className="text-sm font-bold text-white uppercase tracking-tight">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
