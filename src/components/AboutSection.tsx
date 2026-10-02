import { STORE_CONTACT } from '../data/storeData';
import { useInView } from '../hooks/useInView';

export default function AboutSection() {
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const pillars = [
    {
      step: '01. Atendimento Privativo',
      title: 'Sede na Torre Caridade',
      desc: 'Optamos por uma sala comercial no 2º andar da Torre Caridade (Sala 214) para proporcionar discrição, segurança e atendimento individualizado, sem a pressa ou o tumulto de lojas de shopping.'
    },
    {
      step: '02. Rigor de Procedência',
      title: 'Conferência de IMEI & Serial',
      desc: 'Todos os aparelhos novos são entregues com lacres inviolados e garantia mundial de 1 ano validada no portal oficial da Apple antes de você sair da sala. Seminovos passam por perícia técnica rigorosa.'
    },
    {
      step: '03. Pós-Venda Completo',
      title: 'Migração & Configuração Gratuita',
      desc: 'Apoiamos você em todo o processo de transferência de dados, WhatsApp, contatos e fotos do aparelho antigo para o novo com total confidencialidade e paciência.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="sobre"
      aria-label="Sobre a Esquire's Store"
      className="py-16 lg:py-24 bg-[#0A0F2F] text-[#F7F8F7] border-b border-[#F7F8F7]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Reveal Animation */}
        <div
          className={`max-w-3xl mb-12 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-xs font-semibold uppercase tracking-widest text-[#F7F8F7]/70 mb-3">
            Trajetória & Estrutura · Desde 2018 em Santa Maria
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F7F8F7] tracking-tight mb-4 text-balance">
            Uma Experiência Exclusiva em Atendimento Apple
          </h2>

          <p className="text-base sm:text-lg text-[#F7F8F7]/80 leading-relaxed font-normal">
            A Esquire's Store nasceu para oferecer em Santa Maria o mesmo nível de atendimento, transparência e segurança encontrado nas melhores boutiques de tecnologia do mundo.
          </p>
        </div>

        {/* Editorial Narrative Split with Staggered Entrance & Hover Lift */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.step}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className={`space-y-3 p-6 rounded-xl bg-[#0F1742]/50 border border-[#F7F8F7]/10 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#F6A70D]/40 hover:bg-[#0F1742] hover:shadow-lg hover:shadow-[#F6A70D]/5 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#F6A70D] block">
                {pillar.step}
              </span>
              <h3 className="text-lg font-bold text-[#F7F8F7]">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#F7F8F7]/80 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
