import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { STORE_CONTACT } from '../data/storeData';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show polite notification popup after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Polite Conversion Bubble */}
      {showTooltip && (
        <div className="pointer-events-auto mb-3 max-w-xs bg-[#0C1630] text-white p-4 rounded-xl shadow-2xl border border-white/20 text-xs relative flex items-start gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 mt-1 shrink-0" />
          <div className="flex-1 pr-3">
            <strong className="block text-white font-bold mb-0.5 text-sm">
              Esquire's Store
            </strong>
            <p className="text-slate-300 leading-snug">
              Deseja consultar a disponibilidade de algum modelo? Fale conosco no WhatsApp.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-1 -mr-1 -mt-1 rounded"
            aria-label="Fechar mensagem de atendimento rápido"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating Action Button - Crisp White */}
      <a
        href={`${STORE_CONTACT.whatsappUrl}?text=${encodeURIComponent(
          'Olá! Estou navegando na loja e gostaria de tirar uma dúvida.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp com a Esquire's Store"
        className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 rounded-full bg-white hover:bg-slate-100 text-[#070D1E] shadow-2xl transition-transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-white focus-visible:outline-none"
      >
        <span className="sr-only">Chamar no WhatsApp</span>
        <MessageCircle className="w-7 h-7 text-[#070D1E]" />
      </a>
    </div>
  );
}
