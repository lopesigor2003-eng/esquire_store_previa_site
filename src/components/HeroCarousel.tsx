import { useState, useEffect, useRef, useCallback } from 'react';
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw
} from 'lucide-react';
import { HERO_MEDIA_ITEMS, STORE_CONTACT } from '../data/storeData';
import { useInView } from '../hooks/useInView';

export default function HeroCarousel() {
  const { ref: heroRef, isInView } = useInView<HTMLElement>({ threshold: 0.05 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalItems = HERO_MEDIA_ITEMS.length;
  const currentItem = HERO_MEDIA_ITEMS[currentIndex] || HERO_MEDIA_ITEMS[0];

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Handle slide timer and video playback
  useEffect(() => {
    // Clear any pending timers
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    const item = HERO_MEDIA_ITEMS[currentIndex];

    // If it's an image, set a 6-second timer to advance
    if (item.type === 'image') {
      // Pause video if coming from video
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
      }

      timerRef.current = setTimeout(() => {
        goToNext();
      }, item.duration || 6000);
    } else if (item.type === 'video') {
      // If it's a video, initialize playback with 10% volume
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        video.volume = 0.10; // Volume pre-set to 10% as requested

        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {
              // If browser blocks unmuted autoplay, mute initially and play
              video.muted = true;
              setIsMuted(true);
              video.play().then(() => setIsPlaying(true)).catch(() => {});
            });
        }
      }
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, goToNext]);

  // Toggle Video Play/Pause
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Toggle Mute / Set 10% volume
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      video.volume = 0.10;
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  // When video ends, automatically advance to Photo 1 -> Photo 2 -> Video -> ...
  const handleVideoEnded = () => {
    goToNext();
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      setVideoProgress((video.currentTime / video.duration) * 100);
    }
  };

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
              Disponível para pronta entrega na nossa sede na Torre Caridade com ativação e conferência presencial de serial.
            </p>

            {/* Exclusive Guarantee Strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#F7F8F7]/80 mb-8">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F6A70D]" />
                100% Lacrado de Fábrica
              </span>
              <span aria-hidden="true" className="text-[#F7F8F7]/20">·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#F6A70D]" />
                1 Ano de Garantia Mundial Apple
              </span>
              <span aria-hidden="true" className="text-[#F7F8F7]/20">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F6A70D]" />
                Conferência de IMEI Presencial
              </span>
            </div>

            {/* Media Selector Tabs (Foto 1, Foto 2, Vídeo) */}
            <div className="mb-6 flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F7F8F7]/60 mr-1">
                Visualização:
              </span>
              <div className="inline-flex items-center p-1 bg-[#0F1742] border border-[#F7F8F7]/10 rounded-lg">
                {HERO_MEDIA_ITEMS.map((item, idx) => {
                  const isActive = currentIndex === idx;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-[#F6A70D] text-[#0A0F2F] shadow-sm font-bold scale-[1.02]'
                          : 'text-[#F7F8F7]/80 hover:text-[#F7F8F7] hover:bg-[#F7F8F7]/5'
                      }`}
                      aria-label={`Ver ${item.title}`}
                    >
                      {item.type === 'video' ? (
                        <Play className="w-3 h-3 fill-current" />
                      ) : null}
                      <span>{item.badge}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA Buttons in #F6A70D and #F7F8F7 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
              <a
                href={`${STORE_CONTACT.whatsappUrl}?text=${encodeURIComponent(
                  'Olá! Gostaria de consultar a disponibilidade e valores do iPhone 18 Pro Max na loja física.'
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

          {/* Right Column: Media Frame (Foto 1 (6s) -> Foto 2 (6s) -> Vídeo Original 10% Vol) */}
          <div
            className={`lg:col-span-5 relative transition-all duration-700 delay-150 ease-out ${
              isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            {/* The Unified Media Frame */}
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#060A20] border border-[#F7F8F7]/15 shadow-2xl transition-all duration-300 hover:border-[#F6A70D]/40 group flex items-center justify-center">
              
              {/* Photo 1 */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  currentIndex === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
                aria-hidden={currentIndex !== 0}
              >
                <img
                  src={HERO_MEDIA_ITEMS[0].url}
                  alt={HERO_MEDIA_ITEMS[0].alt}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Photo 2 in Formato Original (object-contain) */}
              <div
                className={`absolute inset-0 bg-[#060A20] flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                  currentIndex === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
                aria-hidden={currentIndex !== 1}
              >
                <img
                  src={HERO_MEDIA_ITEMS[1].url}
                  alt={HERO_MEDIA_ITEMS[1].alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain object-center"
                />
              </div>

              {/* Video in Original Format */}
              <div
                className={`absolute inset-0 bg-[#060A20] flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                  currentIndex === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
                aria-hidden={currentIndex !== 2}
              >
                <video
                  ref={videoRef}
                  playsInline
                  preload="auto"
                  onEnded={handleVideoEnded}
                  onTimeUpdate={handleTimeUpdate}
                  onClick={togglePlayPause}
                  className="w-full h-full object-contain cursor-pointer"
                >
                  <source src="/videos/hero-video.mp4" type="video/mp4" />
                  <source src="/videos/hero-video.mov" type="video/quicktime" />
                  <source src="https://res.cloudinary.com/fqy51qul/video/upload/v1791045616/IMG_5018.mov" type="video/quicktime" />
                </video>

                {/* Video Play/Pause Overlay Button */}
                {currentIndex === 2 && (
                  <button
                    type="button"
                    onClick={togglePlayPause}
                    aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                    className={`absolute z-20 w-14 h-14 rounded-full bg-black/60 hover:bg-[#F6A70D] hover:text-[#0A0F2F] text-white flex items-center justify-center border border-white/20 transition-all duration-200 shadow-xl ${
                      isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100 scale-105'
                    }`}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    )}
                  </button>
                )}

                {/* Video Bottom Control Bar */}
                {currentIndex === 2 && (
                  <div className="absolute bottom-16 inset-x-4 z-20 flex items-center justify-between p-2.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={togglePlayPause}
                        className="text-white hover:text-[#F6A70D] transition-colors p-1"
                        aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>

                      <button
                        type="button"
                        onClick={toggleMute}
                        className="text-white hover:text-[#F6A70D] transition-colors flex items-center gap-1.5 p-1"
                        aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 text-slate-400" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-[#F6A70D]" />
                        )}
                        <span className="text-[11px] font-mono">
                          {isMuted ? 'Mudo' : 'Vol 10%'}
                        </span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-slate-300">
                        Clique para {isPlaying ? 'pausar' : 'reproduzir'}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom shadow vignette for Photo 1 only, preserving Photo 2 and Video in 100% original format */}
              {currentIndex === 0 && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#060A20]/95 via-transparent to-black/20 pointer-events-none" />
              )}

              {/* Top availability badge */}
              <div className="absolute top-4 right-4 z-20 text-xs font-semibold text-[#0A0F2F] bg-[#F6A70D] px-3 py-1 rounded-md shadow-md pointer-events-none">
                {currentItem.badge}
              </div>

              {/* Left / Right Navigation Buttons */}
              <button
                type="button"
                onClick={goToPrev}
                aria-label="Mídia anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-[#0A0F2F]/80 hover:bg-[#F6A70D] hover:text-[#0A0F2F] text-[#F7F8F7] flex items-center justify-center transition-all duration-200 hover:scale-110 border border-[#F7F8F7]/20 focus-visible:ring-2 focus-visible:ring-[#F6A70D] focus-visible:outline-none"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Próxima mídia"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-[#0A0F2F]/80 hover:bg-[#F6A70D] hover:text-[#0A0F2F] text-[#F7F8F7] flex items-center justify-center transition-all duration-200 hover:scale-110 border border-[#F7F8F7]/20 focus-visible:ring-2 focus-visible:ring-[#F6A70D] focus-visible:outline-none"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Bottom Caption and Progress Indicators */}
              <div className="absolute bottom-0 inset-x-0 z-20 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none">
                <p className="text-base font-bold text-[#F7F8F7] drop-shadow-sm">
                  {currentItem.title}
                </p>
                <p className="text-xs text-[#F7F8F7]/80 mt-0.5">
                  {currentItem.spec}
                </p>

                {/* Progress Indicators for 1st Photo (6s), 2nd Photo (6s), Video */}
                <div className="flex items-center gap-1.5 mt-3 pointer-events-auto">
                  {HERO_MEDIA_ITEMS.map((item, idx) => {
                    const isSelected = currentIndex === idx;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#F6A70D] focus-visible:outline-none ${
                          isSelected
                            ? 'w-7 bg-[#F6A70D]'
                            : 'w-2.5 bg-[#F7F8F7]/30 hover:bg-[#F7F8F7]/60'
                        }`}
                        aria-label={`Ir para ${item.badge}`}
                      />
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Bottom status line */}
            <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#F7F8F7]/60 px-1">
              <span>Showroom Oficial Esquire’s Store</span>
              <span className="text-[#F6A70D] font-medium">
                {currentIndex === 0
                  ? 'Foto 1 · 6 segundos'
                  : currentIndex === 1
                  ? 'Foto 2 · 6 segundos'
                  : 'Vídeo · Volume a 10%'}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
