import {
  MapPin,
  Clock,
  Instagram,
  MessageCircle,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Star,
  Building2
} from 'lucide-react';
import { STORE_CONTACT } from '../data/storeData';

export default function Footer() {
  const currentYear = 2026;

  const quickLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre a Loja' },
    { href: '#produtos', label: 'Dispositivos Homologados' },
    { href: '#depoimentos', label: 'Avaliações Google' },
    { href: '#localizacao', label: 'Sede na Torre Caridade' },
    { href: '#contato', label: 'Canais de Contato' },
  ];

  const categories = [
    { label: 'iPhone 18 Pro Max', href: '#produtos' },
    { label: 'iPhone 18 Pro & iPhone 18', href: '#produtos' },
    { label: 'iPhone 17 Pro Max & 17 Pro', href: '#produtos' },
    { label: 'iPhone 16 Pro Max & 16 Pro', href: '#produtos' },
    { label: 'iPhone 15 Series', href: '#produtos' },
    { label: 'iPhone 14 & iPhone 13', href: '#produtos' },
  ];

  return (
    <footer className="bg-[#040712] text-white border-t border-white/10">
      
      {/* Upper Footer: Brand, Navigation & Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#0C1630] border border-white/20 overflow-hidden flex items-center justify-center shrink-0 shadow-sm">
                <img
                  src={STORE_CONTACT.logoUrl}
                  alt="Esquire's Store"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight leading-none block">
                  ESQUIRE’S STORE
                </span>
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-widest mt-1 block">
                  Loja de iPhone & Eletrônicos Premium
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Referência em comércio de tecnologia premium em Santa Maria e região central do Rio Grande do Sul. Atendimento corporativo e presencial com produtos homologados e garantia oficial.
            </p>

            <div className="p-3.5 rounded-lg bg-[#070D1E] border border-white/10 text-xs space-y-1">
              <div className="flex items-center gap-2">
                <div className="flex text-white">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                  ))}
                </div>
                <span className="font-bold text-white">5.0 / 5.0</span>
                <span className="text-slate-400">· 28 avaliações auditadas no Google</span>
              </div>
              <p className="text-slate-400 text-[11px]">
                Ficha oficial pública no Google Maps de Santa Maria - RS
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={STORE_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil da Esquire's Store no Instagram"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/15 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={STORE_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar com a Esquire's Store no WhatsApp"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/15 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href={STORE_CONTACT.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Localização no Google Maps"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/15 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navegação Institucional
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Linhas Disponíveis
            </h4>
            <ul className="space-y-2.5 text-sm">
              {categories.map((cat, i) => (
                <li key={i}>
                  <a
                    href={cat.href}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    <span>{cat.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal Identity */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Unidade Física & Dados Legais
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>
                  {STORE_CONTACT.address}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-semibold">WhatsApp Oficial: {STORE_CONTACT.phone}</span>
                  <a
                    href={STORE_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline inline-flex items-center gap-1 mt-0.5 font-medium"
                  >
                    <span>Iniciar conversa no WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">{STORE_CONTACT.hours}</span>
                  <span className="text-[11px] text-slate-400">Atendimento presencial com agendamento opcional</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400 space-y-0.5">
                <p><strong className="text-slate-300">Razão Social:</strong> {STORE_CONTACT.legalName}</p>
                <p className="font-mono"><strong className="text-slate-300">CNPJ:</strong> {STORE_CONTACT.cnpj}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mandatory Copyright & Compliance Bar */}
      <div className="bg-[#02040B] border-t border-white/10 py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left text-slate-300">
            © {currentYear} Esquire's Store. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 text-white">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Equipamentos 100% Homologados com 12 Meses de Garantia
            </span>
            <span aria-hidden="true" className="text-white/20">|</span>
            <span className="text-white font-medium">Santa Maria - Rio Grande do Sul</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
