import { useEffect } from 'react';
import { X, ExternalLink, MapPin } from 'lucide-react';
import { StoreGalleryItem } from '../data/storeData';

interface ImageModalProps {
  image: StoreGalleryItem | null;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (image) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-image-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#0C1630] rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#070D1E]">
          <div>
            <span className="text-xs uppercase font-bold text-slate-300 tracking-wider">
              {image.category}
            </span>
            <h3 id="modal-image-title" className="text-base font-bold text-white">
              {image.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            aria-label="Fechar visualização da imagem"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image Area */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 bg-[#070D1E] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-white/10">
          <span className="text-slate-300 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-white" />
            Rua Venâncio Aires, 1434 – Torre Caridade, Sala 214, Santa Maria - RS
          </span>

          <a
            href={image.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white hover:underline font-bold"
          >
            <span>Ver no perfil oficial do Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
