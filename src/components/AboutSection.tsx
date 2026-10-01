import { Star, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { STORE_CONTACT, StoreGalleryItem } from '../data/storeData';
import StoreCarousel from './StoreCarousel';

interface AboutSectionProps {
  onSelectImage: (item: StoreGalleryItem) => void;
}

export default function AboutSection({ onSelectImage }: AboutSectionProps) {
  return (
    <section
      id="sobre"
      aria-label="Sobre a Esquire's Store"
      className="py-16 lg:py-24 bg-[#070D1E] text-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Quiet Unboxed Kicker */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
            Trajetória & Estrutura · Desde 2018 em Santa Maria
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Uma Experiência Exclusiva em Atendimento Apple
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A Esquire's Store nasceu para oferecer em Santa Maria o mesmo nível de atendimento, transparência e segurança encontrado nas melhores boutiques de tecnologia do mundo.
          </p>
        </div>

        {/* Editorial Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 pb-14 border-b border-white/10">
          
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              01. Atendimento Privativo
            </span>
            <h3 className="text-lg font-bold text-white">
              Sede na Torre Caridade
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Optamos por uma sala comercial no 2º andar da Torre Caridade (Sala 214) para proporcionar discrição, segurança e atendimento individualizado, sem a pressa ou o tumulto de lojas de shopping.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              02. Rigor de Procedência
            </span>
            <h3 className="text-lg font-bold text-white">
              Conferência de IMEI & Serial
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Todos os aparelhos novos são entregues com lacres inviolados e garantia mundial de 1 ano validada no portal oficial da Apple antes de você sair da sala. Seminovos passam por perícia técnica rigorosa.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              03. Pós-Venda Completo
            </span>
            <h3 className="text-lg font-bold text-white">
              Migração & Configuração Gratuita
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Apoiamos você em todo o processo de transferência de dados, WhatsApp, contatos e fotos do aparelho antigo para o novo com total confidencialidade e paciência.
            </p>
          </div>

        </div>

        {/* Physical Store Photography Carousel */}
        <div className="pt-10">
          <div className="text-center max-w-2xl mx-auto mb-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 block mb-1">
              Registro Real do Nosso Espaço
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Conheça Nossa Estrutura Física
            </h3>
          </div>
          <StoreCarousel onSelectImage={onSelectImage} />
        </div>

      </div>
    </section>
  );
}
