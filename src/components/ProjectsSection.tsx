import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';

interface Project {
  number: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  link: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    title: 'BirEmek Mobil Uygulaması',
    category: 'Üretim Seviyesi / Tek Mühendis Olarak Uçtan Uca',
    badge: 'App Store & Google Play • Flutter & Cloud Backend',
    description:
      'Backend, frontend ve sunucu altyapısı dahil olmak üzere tek başıma tasarlayıp geliştirdiğim ve hem App Store hem Google Play mağazalarında başarıyla yayınladığım canlı mobil iş ve istihdam platformu.',
    // Doğrudan BirEmek için üretilmiş ve ilgili mobil UI ekranları:
    col1Img1:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    col1Img2:
      'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80',
    col2Img: `${import.meta.env.BASE_URL}biremek_mockup.jpg`, // Özel üretilmiş BirEmek 3-ekranlı mobil mockup
    link: 'https://github.com/anilmetey',
  },
  {
    number: '02',
    title: 'Klinik Karar Destek Asistanı',
    category: 'TÜBİTAK Teknoloji Yarışması Başarısı',
    badge: 'PyTorch & ASP.NET Core • Health-Tech Yapay Zeka',
    description:
      'Veriye dayalı klinik teşhis öngörüleri sunmak amacıyla ASP.NET Core REST API altyapısı ve Python (PyTorch) derin öğrenme çıkarım motoru ile inşa edilen, TÜBİTAK ön değerlendirmesini başarıyla geçen sağlık platformu.',
    col1Img1:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80', // Sağlık verisi ve teşhis analitiği
    col1Img2:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80', // Medikal analiz ve sinir ağı çıkarımı
    col2Img:
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1280&q=85', // Klinik dashboard ve veri grafikleri
    link: 'https://github.com/anilmetey',
  },
  {
    number: '03',
    title: 'SemptomAI & NotTrack API',
    category: 'Mobil Sağlık & Katmanlı REST Mimarisi',
    badge: 'Gerçek Zamanlı AI & Katmanlı Mimari (JWT/Swagger)',
    description:
      'Kullanıcılara anlık semptom analizi sunan 14 haftalık geliştirme döngüsüne sahip mobil sağlık asistanı SemptomAI ve Entity Framework Core katmanlı mimarisiyle inşa edilen JWT kimlik doğrulamalı NotTrack REST API.',
    col1Img1:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80', // Güvenli API ve backend mimarisi
    col1Img2:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80', // Mobil sağlık arayüz tasarımı
    col2Img:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1280&q=85', // Modern sağlık & analitik çalışma alanı
    link: 'https://github.com/anilmetey',
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  progress,
  range,
  targetScale,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex items-center justify-center sticky top-20 md:top-28"
    >
      <motion.div
        style={{
          scale,
          top: `${index * 24}px`,
        }}
        className="relative w-full max-w-6xl rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-4 sm:gap-6 shadow-2xl overflow-hidden"
      >
        {/* Üst Başlık Satırı */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D7E2EA]/20 pb-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-white leading-none select-none tracking-tight"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
            >
              {project.number}
            </span>

            <div>
              <div className="text-xs uppercase tracking-widest text-[#B600A8] font-semibold">
                {project.category} &bull; {project.badge}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                {project.title}
              </h3>
            </div>
          </div>

          <LiveProjectButton label="Projeyi İncele" href={project.link} />
        </div>

        {/* İki Kolonlu Görsel Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 flex-1 items-stretch">
          {/* Sol Kolon (%40 genişlik) */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4 justify-between">
            <div
              className="w-full rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#16181D] border border-white/10"
              style={{ height: 'clamp(120px, 16vw, 220px)' }}
            >
              <img
                src={project.col1Img1}
                alt={`${project.title} detay 1`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div
              className="w-full rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#16181D] border border-white/10"
              style={{ height: 'clamp(150px, 20vw, 320px)' }}
            >
              <img
                src={project.col1Img2}
                alt={`${project.title} detay 2`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Sağ Kolon (%60 genişlik) */}
          <div className="md:col-span-7 w-full h-full min-h-[220px] rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#16181D] border border-white/10">
            <img
              src={project.col2Img}
              alt={`${project.title} ana sunum`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-28"
    >
      {/* Başlık */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28 select-none"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          PROJELER
        </h2>
      </FadeIn>

      {/* Yapışkan Kart Listesi */}
      <div className="relative flex flex-col gap-12 sm:gap-16">
        {PROJECTS.map((project, index) => {
          const targetScale = 1 - (PROJECTS.length - 1 - index) * 0.03;
          const range: [number, number] = [
            index * (1 / PROJECTS.length),
            1,
          ];

          return (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
