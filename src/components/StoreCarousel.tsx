import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ExternalLink } from 'lucide-react';
import { STORE_GALLERY, STORE_CONTACT, StoreGalleryItem } from '../data/storeData';

interface StoreCarouselProps {
  onSelectImage: (item: StoreGalleryItem) => void;
}

export default function StoreCarousel({ onSelectImage }: StoreCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalPhotos = STORE_GALLERY.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPhotos);
  }, [totalPhotos]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  }, [totalPhotos]);

  // 6-second automatic rotation
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

  const currentPhoto = STORE_GALLERY[currentIndex] || STORE_GALLERY[0];

  return (
    <div
      className="mt-14 max-w-2xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      role="region"
      aria-label="Carrossel das Fotos da Loja"
    >
      {/* Top minimal bar */}
      <div className="flex items-center justify-between mb-4 px-1 text-xs">
        <span className="text-slate-300 font-semibold uppercase tracking-wider">
          Estrutura Física · Sala 214 Torre Caridade
        </span>
        <div className="flex items-center gap-3">
          <span className="font-mono text-white text-xs bg-[#0C1630] border border-white/15 px-2.5 py-1 rounded">
            0{currentIndex + 1} / 0{totalPhotos}
          </span>
          <a
            href={STORE_CONTACT.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline inline-flex items-center gap-1 font-semibold"
          >
            <span>Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Photo Frame: Authentic Portrait Format (3:4 ratio, 1200x1600) */}
      <div
        className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#050A18] border border-white/20 shadow-2xl group cursor-pointer"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => onSelectImage(currentPhoto)}
        title="Clique para ampliar a foto"
      >
        {STORE_GALLERY.map((photo, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={photo.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              aria-hidden={!isActive}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain bg-[#050A18]"
              />

              {/* Hover Zoom Prompt */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-black/20">
                <span className="bg-[#070D1E]/90 text-white px-4 py-2 rounded-full border border-white/30 flex items-center gap-2 text-xs font-semibold shadow-lg backdrop-blur-sm">
                  <ZoomIn className="w-4 h-4 text-white" />
                  Clique para ampliar
                </span>
              </div>

              {/* Discreet bottom overlay with title */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 text-white pointer-events-none">
                <p className="text-sm sm:text-base font-semibold text-white">
                  {photo.title}
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  {photo.caption}
                </p>
              </div>
            </div>
          );
        })}

        {/* Prev / Next controls */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Foto anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-white hover:text-[#070D1E] text-white flex items-center justify-center transition-colors border border-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Próxima foto"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-white hover:text-[#070D1E] text-white flex items-center justify-center transition-colors border border-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Dots & 6-second Indicator */}
      <div className="mt-4 flex items-center justify-between px-1">
        <div className="flex items-center gap-2" role="tablist" aria-label="Seleção de foto">
          {STORE_GALLERY.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              role="tab"
              aria-selected={dotIdx === currentIndex}
              aria-label={`Ir para a foto ${dotIdx + 1}`}
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-2 transition-all duration-300 rounded-full focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none ${
                dotIdx === currentIndex
                  ? 'w-8 bg-white'
                  : 'w-2.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <span className="text-xs text-slate-400">
          Rotação automática a cada 6s
        </span>
      </div>
    </div>
  );
}
