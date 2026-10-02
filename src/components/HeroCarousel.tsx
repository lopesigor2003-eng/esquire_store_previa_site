import { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { HERO_SLIDES, STORE_CONTACT } from '../data/storeData';
import { useInView } from '../hooks/useInView';

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const { ref: heroRef, isInView } = useInView<HTMLElement>({ threshold: 0.05 });

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
      ref={heroRef}
      id="inicio"
      aria-label="Apresentação do iPhone 18 Pro Max"
      className="relative bg-[#0A0F2F] text-[#F7F8F7] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#F7F8F7]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Human Editorial Hierarchy with Entrance Animation */}
          <div
            className={`lg:col-span-7 flex flex-col justify-center transition-all duration-700 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Quiet Unboxed Metadata Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F7F8F7]/70 mb-4">
              <span>Santa Maria, RS</span>
              <span aria-hidden="true" className="text-[#F6A70D]">·</span>
              <span>Torre Caridade Sala 214</span>
              <span aria-hidden="true" className="text-[#F6A70D]">·</span>
              <span>Garantia Apple 12 Meses</span>
            </div>

            {/* THE ONLY H1 ON THE ENTIRE PAGE */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F7F8F7] leading-[1.08] mb-3 text-balance">
              O FUTURO CHEGOU NA ESQUIRE’S.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-2xl font-bold tracking-tight text-[#F7F8F7]/90 mb-5">
              iPhone 18 Pro Max. <span className="text-[#F6A70D]">Disponível para pronta entrega.</span>
            </p>

            {/* Human Editorial Description */}
            <p className="text-sm sm:text-base text-[#F7F8F7]/80 leading-relaxed mb-6 font-normal max-w-xl">
              Ele não é só um celular. É o mais potente, mais desejado e mais lindo já criado pela Apple. 
              Disponível em todas as cores icônicas com ativação e conferência presencial de serial.
            </p>

            {/* Clean Color Selection Segmented Control */}
            <div className="mb-7">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F7F8F7]/70 block mb-2">
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
                      className={`p-3 rounded-lg border text-left transition-all duration-200 flex flex-col gap-1 focus-visible:ring-2 focus-visible:ring-[#F6A70D] focus-visible:outline-none hover:-translate-y-0.5 ${
                        isActive
                          ? 'bg-[#131D52] border-[#F6A70D] shadow-md shadow-[#F6A70D]/10 ring-1 ring-[#F6A70D]/40'
                          : 'bg-[#0F1742] border-[#F7F8F7]/10 hover:border-[#F6A70D]/40 hover:bg-[#131D52]/60'
                      }`}
                      aria-label={`Ver foto do modelo ${color.title}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold tracking-wide transition-colors ${isActive ? 'text-[#F6A70D]' : 'text-[#F7F8F7]'}`}>
                          {color.title}
                        </span>
                        <span
                          className={`w-3 h-3 rounded-full border transition-transform ${
                            isActive ? 'scale-110 border-white ring-2 ring-[#F6A70D]' : 'border-white/40'
                          } shrink-0`}
                          style={{ backgroundColor: color.hex }}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-[11px] text-[#F7F8F7]/70 leading-tight">
                        {color.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA Buttons in #F6A70D and #F7F8F7 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
              <a
                href={`${STORE_CONTACT.whatsappUrl}?text=${encodeURIComponent(
                  `Olá! Gostaria de consultar a disponibilidade do iPhone 18 Pro Max (${currentSlide.title}) na loja física.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Consultar iPhone 18 Pro Max no WhatsApp"
                className="inline-flex items-center justify-center gap-2 bg-[#F6A70D] hover:bg-[#F6A70D]/90 text-[#0A0F2F] font-bold text-sm px-7 py-3.5 rounded-lg shadow-lg shadow-[#F6A70D]/20 transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#F6A70D] focus-visible:outline-none"
              >
                <MessageCircle className="w-4 h-4 text-[#0A0F2F]" />
                <span>Consultar no WhatsApp</span>
              </a>

              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#F7F8F7]/5 text-[#F7F8F7] font-medium text-sm px-5 py-3.5 rounded-lg border border-[#F7F8F7]/20 hover:border-[#F7F8F7]/40 transition-all hover:scale-[1.01] active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-[#F6A70D] focus-visible:outline-none"
              >
                <span>Explorar Catálogo</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F6A70D]" />
              </a>
            </div>

            {/* Subtle Editorial Proof Line */}
            <p className="text-xs text-[#F7F8F7]/60">
              Atendimento exclusivo na Sala 214 da Torre Caridade com estacionamento e segurança.
            </p>
          </div>

          {/* Right Column: Carousel Frame with Scale Entrance Animation */}
          <div
            className={`lg:col-span-5 relative transition-all duration-700 delay-150 ease-out ${
              isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <div
              className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#060A20] border border-[#F7F8F7]/15 shadow-2xl transition-all duration-300 hover:border-[#F6A70D]/30"
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
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />

                    {/* Subtle bottom shadow vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060A20]/95 via-transparent to-black/30 pointer-events-none" />

                    {/* Top slide counter */}
                    <div className="absolute top-4 right-4 text-xs font-mono text-[#F7F8F7] bg-[#0A0F2F]/80 px-2 py-0.5 rounded border border-[#F7F8F7]/10 pointer-events-none">
                      0{idx + 1} / 0{totalSlides}
                    </div>

                    {/* Bottom Caption */}
                    <div className="absolute bottom-5 left-5 right-5 text-[#F7F8F7] pointer-events-none transition-transform duration-300">
                      <p className="text-base font-bold text-[#F7F8F7] drop-shadow-sm">
                        {slide.title}
                      </p>
                      <p className="text-xs text-[#F7F8F7]/80 mt-0.5">
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
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#0A0F2F]/80 hover:bg-[#F6A70D] hover:text-[#0A0F2F] text-[#F7F8F7] flex items-center justify-center transition-all duration-200 hover:scale-110 border border-[#F7F8F7]/20 focus-visible:ring-2 focus-visible:ring-[#F6A70D] focus-visible:outline-none"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Próxima foto"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#0A0F2F]/80 hover:bg-[#F6A70D] hover:text-[#0A0F2F] text-[#F7F8F7] flex items-center justify-center transition-all duration-200 hover:scale-110 border border-[#F7F8F7]/20 focus-visible:ring-2 focus-visible:ring-[#F6A70D] focus-visible:outline-none"
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
                    className={`h-1.5 transition-all duration-300 rounded-full focus-visible:ring-2 focus-visible:ring-[#F6A70D] focus-visible:outline-none ${
                      dotIdx === currentIndex
                        ? 'w-6 bg-[#F6A70D]'
                        : 'w-2 bg-[#F7F8F7]/40 hover:bg-[#F7F8F7]/70 hover:w-3'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Bottom status line */}
            <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#F7F8F7]/60 px-1">
              <span>Showroom Oficial Esquire’s Store</span>
              <span>Transição a cada 6s</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
