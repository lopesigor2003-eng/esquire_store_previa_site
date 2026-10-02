import { useState } from 'react';
import {
  MessageCircle,
  Instagram,
  Copy,
  Check,
  ExternalLink,
  Building2
} from 'lucide-react';
import { STORE_CONTACT } from '../data/storeData';
import { useInView } from '../hooks/useInView';

export default function ContactSection() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(STORE_CONTACT.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section
      ref={sectionRef}
      id="contato"
      aria-label="Canais de Atendimento e Informações Oficiais"
      className="py-16 lg:py-24 bg-[#0A0F2F] text-[#F7F8F7] border-b border-[#F7F8F7]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Reveal Animation */}
        <div
          className={`max-w-3xl mb-12 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-xs font-semibold uppercase tracking-widest text-[#F6A70D] mb-2">
            Atendimento Consultivo · Santa Maria, RS
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F7F8F7] tracking-tight mb-3">
            Fale Conosco e Garanta Seu Próximo Dispositivo
          </h2>

          <p className="text-sm sm:text-base text-[#F7F8F7]/80 leading-relaxed font-normal">
            Estamos à disposição para esclarecer dúvidas sobre modelos, cores e formas de pagamento, ou para agendar sua visita na Sala 214 da Torre Caridade.
          </p>
        </div>

        {/* Direct Channels Grid with Staggered Entrance & Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: WhatsApp Corporativo */}
          <div
            style={{ transitionDelay: '100ms' }}
            className={`p-7 rounded-xl bg-[#0F1742] border border-[#F7F8F7]/10 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#F6A70D]/50 hover:shadow-xl hover:shadow-[#F6A70D]/10 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F6A70D]">
                  Canal Principal
                </span>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="text-xs text-[#F7F8F7]/60 hover:text-[#F6A70D] flex items-center gap-1 transition-colors"
                  aria-label="Copiar telefone do WhatsApp"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#F6A70D]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>

              <h3 className="text-lg font-bold text-[#F7F8F7] mb-1">
                WhatsApp Oficial
              </h3>
              <p className="text-xl font-bold font-mono text-[#F6A70D] mb-2">
                {STORE_CONTACT.phone}
              </p>
              <p className="text-xs text-[#F7F8F7]/80 leading-relaxed mb-6">
                Cotações imediatas, envio de fotos de lotes lacrados e confirmação de estoque em tempo real.
              </p>
            </div>

            <a
              href={`${STORE_CONTACT.whatsappUrl}?text=${encodeURIComponent(
                'Olá! Gostaria de consultar valores e disponibilidade na Esquire\'s Store.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar no WhatsApp"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#F6A70D] hover:bg-[#F6A70D]/90 text-[#0A0F2F] text-xs font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-[#F6A70D]/10 focus-visible:ring-2 focus-visible:ring-[#F6A70D] focus-visible:outline-none"
            >
              <MessageCircle className="w-4 h-4 text-[#0A0F2F]" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

          {/* Card 2: Instagram */}
          <div
            style={{ transitionDelay: '200ms' }}
            className={`p-7 rounded-xl bg-[#0F1742] border border-[#F7F8F7]/10 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#F6A70D]/50 hover:shadow-xl hover:shadow-[#F6A70D]/10 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F7F8F7]/70">
                  Mídia & Novidades
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#F7F8F7] mb-1">
                Instagram Institucional
              </h3>
              <p className="text-xl font-bold text-[#F7F8F7] mb-2">
                {STORE_CONTACT.instagram}
              </p>
              <p className="text-xs text-[#F7F8F7]/80 leading-relaxed mb-6">
                Acompanhe o recebimento diário de novos modelos, unboxings e comunicados oficiais.
              </p>
            </div>

            <a
              href={STORE_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguir no Instagram"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#0A0F2F] hover:bg-[#F7F8F7]/10 text-[#F7F8F7] border border-[#F7F8F7]/15 hover:border-[#F6A70D]/40 text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#F6A70D] focus-visible:outline-none"
            >
              <Instagram className="w-4 h-4 text-[#F6A70D]" />
              <span>Acessar Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#F7F8F7]/60" />
            </a>
          </div>

          {/* Card 3: Unidade Presencial */}
          <div
            style={{ transitionDelay: '300ms' }}
            className={`p-7 rounded-xl bg-[#0F1742] border border-[#F7F8F7]/10 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#F6A70D]/50 hover:shadow-xl hover:shadow-[#F6A70D]/10 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F7F8F7]/70">
                  Atendimento Físico
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#F7F8F7] mb-1">
                Torre Caridade
              </h3>
              <p className="text-sm font-semibold text-[#F7F8F7] mb-1">
                Rua Venâncio Aires, 1434 · Sala 214
              </p>
              <p className="text-xs text-[#F7F8F7]/80 leading-relaxed mb-6">
                Centro, Santa Maria - RS. Segunda a Sábado: 09:00 às 19:00.
              </p>
            </div>

            <a
              href={STORE_CONTACT.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir Google Maps"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#0A0F2F] hover:bg-[#F7F8F7]/10 text-[#F7F8F7] border border-[#F7F8F7]/15 hover:border-[#F6A70D]/40 text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#F6A70D] focus-visible:outline-none"
            >
              <Building2 className="w-4 h-4 text-[#F6A70D]" />
              <span>Ver Localização</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#F7F8F7]/60" />
            </a>
          </div>

        </div>

        {/* Corporate Legal & Compliance Bar with Fade Animation */}
        <div
          className={`pt-8 border-t border-[#F7F8F7]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#F7F8F7]/60 transition-all duration-700 delay-300 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div>
            <span className="text-[#F7F8F7] font-semibold">Registro Empresarial:</span> CNPJ {STORE_CONTACT.cnpj} · {STORE_CONTACT.legalName}
          </div>
          <div>
            Garantia Mundial Apple de 12 Meses com Nota Fiscal
          </div>
        </div>

      </div>
    </section>
  );
}
