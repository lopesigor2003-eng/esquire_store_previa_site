import { useState } from 'react';
import {
  MessageCircle,
  Instagram,
  Copy,
  Check,
  ExternalLink,
  Clock,
  ShieldCheck,
  Building2,
  FileText
} from 'lucide-react';
import { STORE_CONTACT } from '../data/storeData';

export default function ContactSection() {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(STORE_CONTACT.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section
      id="contato"
      aria-label="Canais de Atendimento e Informações Oficiais"
      className="py-16 lg:py-24 bg-[#070D1E] text-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Quiet Unboxed Kicker */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
            Atendimento Consultivo · Santa Maria, RS
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Fale Conosco e Garanta Seu Próximo Dispositivo
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Estamos à disposição para esclarecer dúvidas sobre modelos, cores e formas de pagamento, ou para agendar sua visita na Sala 214 da Torre Caridade.
          </p>
        </div>

        {/* Direct Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: WhatsApp Corporativo */}
          <div className="p-7 rounded-xl bg-[#0B1428] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Canal Principal
                </span>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  aria-label="Copiar telefone do WhatsApp"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                WhatsApp Oficial
              </h3>
              <p className="text-xl font-bold font-mono text-white mb-2">
                {STORE_CONTACT.phone}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
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
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white hover:bg-slate-100 text-[#070D1E] text-xs font-bold transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              <MessageCircle className="w-4 h-4 text-[#070D1E]" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

          {/* Card 2: Instagram */}
          <div className="p-7 rounded-xl bg-[#0B1428] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Mídia & Novidades
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                Instagram Institucional
              </h3>
              <p className="text-xl font-bold text-white mb-2">
                {STORE_CONTACT.instagram}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Acompanhe o recebimento diário de novos modelos, unboxings e comunicados oficiais.
              </p>
            </div>

            <a
              href={STORE_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguir no Instagram"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#070D1E] hover:bg-white/10 text-white border border-white/15 text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              <Instagram className="w-4 h-4 text-white" />
              <span>Acessar Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Card 3: Unidade Presencial */}
          <div className="p-7 rounded-xl bg-[#0B1428] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Atendimento Físico
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                Torre Caridade
              </h3>
              <p className="text-sm font-semibold text-white mb-1">
                Rua Venâncio Aires, 1434 · Sala 214
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Centro, Santa Maria - RS. Segunda a Sábado: 09:00 às 19:00.
              </p>
            </div>

            <a
              href={STORE_CONTACT.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir Google Maps"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#070D1E] hover:bg-white/10 text-white border border-white/15 text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              <Building2 className="w-4 h-4 text-white" />
              <span>Ver Localização</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

        </div>

        {/* Corporate Legal & Compliance Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <span className="text-white font-semibold">Registro Empresarial:</span> CNPJ {STORE_CONTACT.cnpj} · {STORE_CONTACT.legalName}
          </div>
          <div>
            Garantia Mundial Apple de 12 Meses com Nota Fiscal
          </div>
        </div>

      </div>
    </section>
  );
}
