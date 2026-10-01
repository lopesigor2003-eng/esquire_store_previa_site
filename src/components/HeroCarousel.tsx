import { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { HERO_SLIDES, STORE_CONTACT } from '../data/storeData';

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // 6 second timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const colorsList = [
    {
      name: 'Burgundy',
      title: 'Burgundy',
      tag: 'O vermelho mais luxuoso',
      hex: '#6B1124',
      slideIndex: 1
    },
    {
      name: 'Glacier',
      title: 'Glacier',
      tag: 'O novo queridinho',
      hex: '#8CB9CE',
      slideIndex: 2
    },
    {
      name: 'Black',
      title: 'Black',
      tag: 'O clássico que nunca falha',
      hex: '#1C1C1E',
      slideIndex: 3
    },
    {
      name: 'Silver',
      title: 'Silver',
      tag: 'Elegância minimalista',
      hex: '#E5E7EB',
      slideIndex: 4
    }
  ];

  const currentSlide = HERO_SLIDES[currentIndex] || HERO_SLIDES[0];

  return (
    <section
      id="inicio"
      aria-label="Apresentação do iPhone 18 Pro Max"
      className="relative bg-[#070D1E] text-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Human Editorial Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Quiet Unboxed Metadata Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              <span>Santa Maria, RS</span>
              <span aria-hidden="true">·</span>
              <span>Torre Caridade Sala 214</span>
              <span aria-hidden="true">·</span>
              <span>Garantia Apple 12 Meses</span>
            </div>

            {/* THE ONLY H1 ON THE ENTIRE PAGE */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-3 text-balance">
              O FUTURO CHEGOU NA ESQUIRE’S.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-2xl font-bold tracking-tight text-slate-200 mb-5">
              iPhone 18 Pro Max. Disponível para pronta entrega.
            </p>

            {/* Human Editorial Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal max-w-xl">
              Ele não é só um celular. É o mais potente, mais desejado e mais lindo já criado pela Apple. 
              Disponível em todas as cores icônicas com ativação e conferência presencial de serial.
            </p>

            {/* Clean Color Selection Segmented Control */}
            <div className="mb-7">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Selecione para ver a cor:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {colorsList.map((color) => {
                  const isActive = currentIndex === color.slideIndex;
                  return (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setCurrentIndex(color.slideIndex)}
                      className={`p-3 rounded-lg border text-left transition-all duration-150 flex flex-col gap-1 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none ${
                        isActive
                          ? 'bg-[#121E40] border-white shadow-sm ring-1 ring-white/40'
                          : 'bg-[#0B1428] border-white/10 hover:border-white/30'
                      }`}
                      aria-label={`Ver foto do modelo ${color.title}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white tracking-wide">
                          {color.title}
                        </span>
                        <span
                          className="w-3 h-3 rounded-full border border-white/40 shrink-0"
                          style={{ backgroundColor: color.hex }}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-[11px] text-slate-300 leading-tight">
                        {color.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
              <a
                href={`${STORE_CONTACT.whatsappUrl}?text=${encodeURIComponent(
                  `Olá! Gostaria de consultar a disponibilidade do iPhone 18 Pro Max (${currentSlide.title}) na loja física.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Consultar iPhone 18 Pro Max no WhatsApp"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#070D1E] font-bold text-sm px-7 py-3.5 rounded-lg shadow-md transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <MessageCircle className="w-4 h-4 text-[#070D1E]" />
                <span>Consultar no WhatsApp</span>
              </a>

              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-medium text-sm px-5 py-3.5 rounded-lg border border-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <span>Explorar Catálogo</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Subtle Editorial Proof Line */}
            <p className="text-xs text-slate-400">
              Atendimento exclusivo na Sala 214 da Torre Caridade com estacionamento e segurança.
            </p>
          </div>

          {/* Right Column: Carousel Frame */}
          <div
            className="lg:col-span-5 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <div
              className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#040712] border border-white/15 shadow-2xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              role="region"
              aria-label="Fotos do iPhone 18 Pro Max"
            >
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                      isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                    aria-hidden={!isActive}
                  >
                    <img
                      src={slide.url}
                      alt={slide.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center"
                    />

                    {/* Subtle bottom shadow vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040712]/90 via-transparent to-black/30 pointer-events-none" />

                    {/* Top slide counter */}
                    <div className="absolute top-4 right-4 text-xs font-mono text-white bg-black/60 px-2 py-0.5 rounded border border-white/10 pointer-events-none">
                      0{idx + 1} / 0{totalSlides}
                    </div>

                    {/* Bottom Caption */}
                    <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                      <p className="text-base font-bold text-white drop-shadow-sm">
                        {slide.title}
                      </p>
                      <p className="text-xs text-slate-300 mt-0.5">
                        {slide.spec}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Prev / Next controls */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-white hover:text-[#070D1E] text-white flex items-center justify-center transition-colors border border-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Próxima foto"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-white hover:text-[#070D1E] text-white flex items-center justify-center transition-colors border border-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Minimal dots */}
              <div
                className="absolute bottom-2 left-0 right-0 z-20 flex items-center justify-center gap-1.5 p-2"
                role="tablist"
                aria-label="Indicador de foto"
              >
                {HERO_SLIDES.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    role="tab"
                    aria-selected={dotIdx === currentIndex}
                    aria-label={`Ir para a foto ${dotIdx + 1}`}
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`h-1.5 transition-all duration-200 rounded-full focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none ${
                      dotIdx === currentIndex
                        ? 'w-6 bg-white'
                        : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Bottom status line */}
            <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400 px-1">
              <span>Showroom Oficial Esquire’s Store</span>
              <span>Transição a cada 6s</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
