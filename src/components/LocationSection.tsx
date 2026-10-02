import { Navigation, ExternalLink } from 'lucide-react';
import { STORE_CONTACT } from '../data/storeData';
import { useInView } from '../hooks/useInView';

export default function LocationSection() {
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="localizacao"
      aria-label="Localização da Loja Física na Torre Caridade"
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
            Sede Física · Santa Maria, RS
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F7F8F7] tracking-tight mb-3">
            Visite Nossa Sala na Torre Caridade
          </h2>

          <p className="text-sm sm:text-base text-[#F7F8F7]/80 leading-relaxed font-normal">
            Atendimento presencial com privacidade, estacionamento nas proximidades e portaria de identificação no Centro de Santa Maria.
          </p>
        </div>

        {/* Location Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Architectural Address Card with Slide Animation */}
          <div
            className={`lg:col-span-5 p-7 rounded-xl bg-[#0F1742] border border-[#F7F8F7]/10 space-y-6 transition-all duration-700 delay-100 ease-out hover:border-[#F6A70D]/40 hover:shadow-xl hover:shadow-[#F6A70D]/5 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F6A70D] block mb-1">
                Endereço Oficial
              </span>
              <h3 className="text-xl font-bold text-[#F7F8F7] mb-2">
                Edifício Torre Caridade
              </h3>
              <p className="text-sm text-[#F7F8F7] leading-relaxed font-medium">
                Rua Venâncio Aires, 1434 · Sala 214 (2º Andar)
              </p>
              <p className="text-xs text-[#F7F8F7]/60 mt-1">
                Centro, Santa Maria - RS · CEP 97010-005
              </p>
            </div>

            <div className="pt-4 border-t border-[#F7F8F7]/10 space-y-3 text-xs text-[#F7F8F7]/80">
              <div className="flex items-start gap-2.5">
                <span className="text-[#F6A70D] font-bold shrink-0">Portaria:</span>
                <span>Identificação de segurança na recepção central e elevadores sociais modernos.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#F6A70D] font-bold shrink-0">Privacidade:</span>
                <span>Ambiente climatizado e reservado para conferência de serial e ativação com calma.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#F6A70D] font-bold shrink-0">Horários:</span>
                <span>{STORE_CONTACT.hours} (Segunda a Sábado)</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={STORE_CONTACT.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F6A70D] hover:bg-[#F6A70D]/90 text-[#0A0F2F] py-3 px-4 rounded-lg text-xs font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-[#F6A70D]/10 focus-visible:ring-2 focus-visible:ring-[#F6A70D] focus-visible:outline-none"
              >
                <Navigation className="w-4 h-4 text-[#0A0F2F]" />
                <span>Como Chegar (Google Maps)</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#0A0F2F]" />
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed with Slide Animation */}
          <div
            className={`lg:col-span-7 rounded-xl overflow-hidden bg-[#0F1742] border border-[#F7F8F7]/10 shadow-lg relative aspect-[16/10] min-h-[340px] transition-all duration-700 delay-200 ease-out hover:border-[#F6A70D]/30 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <iframe
              title="Mapa de Localização da Esquire's Store na Torre Caridade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.756317208404!2d-53.814178224536695!3d-29.68646603507304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503cb751fe46021%3A0x2fc0691f53e5942d!2sEsquire&#39;s%20Store!5e0!3m2!1spt-BR!2sbr!4v1711200000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
