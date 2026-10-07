import { useState, useMemo } from 'react';
import {
  Smartphone,
  MessageCircle,
  Search,
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  X
} from 'lucide-react';
import { PRODUCTS, ProductItem, STORE_CONTACT } from '../data/storeData';
import { useInView } from '../hooks/useInView';

export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [previewImage, setPreviewImage] = useState<{ url: string; title: string; price: string } | null>(null);

  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.05 });

  const filterTabs = [
    { id: 'todos', label: 'Todos', count: PRODUCTS.length },
    {
      id: '1-ano',
      label: '1 Ano de Garantia',
      count: PRODUCTS.filter((p) => p.warranty.includes('1 Ano')).length
    },
    {
      id: '6-meses',
      label: '6 Meses de Garantia',
      count: PRODUCTS.filter((p) => p.warranty.includes('6 Meses')).length
    },
    {
      id: 'linha-16',
      label: 'iPhone 16',
      count: PRODUCTS.filter((p) => p.name.includes('16')).length
    },
    {
      id: 'outros',
      label: 'iPhone 15 ao 11',
      count: PRODUCTS.filter((p) => !p.name.includes('16')).length
    }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      let matchesFilter = true;
      if (activeFilter === '1-ano') {
        matchesFilter = product.warranty.includes('1 Ano');
      } else if (activeFilter === '6-meses') {
        matchesFilter = product.warranty.includes('6 Meses');
      } else if (activeFilter === 'linha-16') {
        matchesFilter = product.name.includes('16');
      } else if (activeFilter === 'outros') {
        matchesFilter = !product.name.includes('16');
      }

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        product.name.toLowerCase().includes(query) ||
        product.price.toLowerCase().includes(query) ||
        product.storage.toLowerCase().includes(query) ||
        product.technicalSpecs.chip.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const generateWhatsAppMessage = (product: ProductItem) => {
    return `${STORE_CONTACT.whatsappUrl}?text=${encodeURIComponent(
      `Olá, Esquire's Store! Gostaria de consultar a disponibilidade do *${product.name}* no valor de *${product.price}* (${product.warranty}, Todo Original) para retirada na loja física da Torre Caridade.`
    )}`;
  };

  return (
    <section
      ref={sectionRef}
      id="produtos"
      aria-label="Catálogo Oficial de iPhones da Esquire's Store"
      className="py-16 lg:py-24 bg-[#0A0F2F] text-[#F7F8F7] border-b border-[#F7F8F7]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-8 border-b border-[#F7F8F7]/10 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#F6A70D] mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F6A70D]" />
              <span>Aparelhos 100% Originais · Pronta Entrega na Torre Caridade</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F7F8F7] tracking-tight">
              Catálogo Oficial com Fotos Reais
            </h2>

            <p className="text-sm sm:text-base text-[#F7F8F7]/80 mt-2 max-w-2xl">
              Equipamentos verificados com laudo de procedência. Fotos reais de cada aparelho disponível para retirada imediata na Sala 214.
            </p>
          </div>

          <div className="text-xs text-[#F7F8F7]/70 font-medium bg-[#0F1742] px-4 py-2.5 rounded-lg border border-[#F7F8F7]/10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Valores e estoque atualizados hoje</span>
          </div>
        </div>

        {/* Official Warranty Rule Notice Banner */}
        <div
          className={`mb-10 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#0F1742] to-[#141C4F] border border-[#F6A70D]/40 shadow-lg shadow-[#F6A70D]/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all duration-700 delay-75 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-[#F6A70D]/10 text-[#F6A70D] shrink-0 border border-[#F6A70D]/20">
              <ShieldCheck className="w-6 h-6 text-[#F6A70D]" />
            </div>
            <div>
              <h3 className="font-bold text-[#F7F8F7] text-sm sm:text-base">
                Regra de Garantia Oficial da Loja
              </h3>
              <p className="text-xs sm:text-sm text-[#F7F8F7]/80 mt-0.5 leading-relaxed">
                <span className="text-[#F6A70D] font-bold">1 Ano de Garantia:</span> do iPhone 14 para cima (14, 15 Plus, 16 Pro e 16 Pro Max) ·{' '}
                <span className="text-[#F6A70D] font-bold">6 Meses de Garantia:</span> do iPhone 13 para baixo (11 e 13 Pro).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1.5 rounded-md bg-[#F6A70D] text-[#0A0F2F] font-black text-xs uppercase tracking-wider">
              Todo Original
            </span>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div
          className={`mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-700 delay-100 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Segmented Control */}
          <div
            className="flex items-center gap-1 p-1 bg-[#0F1742] border border-[#F7F8F7]/10 rounded-lg overflow-x-auto max-w-full"
            role="tablist"
            aria-label="Filtrar iPhones por garantia ou modelo"
          >
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#F6A70D] focus-visible:outline-none flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#F6A70D] text-[#0A0F2F] font-bold shadow-sm scale-[1.02]'
                      : 'text-[#F7F8F7]/80 hover:text-[#F7F8F7] hover:bg-[#F7F8F7]/5'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-[#0A0F2F]/20 text-[#0A0F2F] font-black'
                        : 'bg-[#0A0F2F] text-[#F7F8F7]/60'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-[#F7F8F7]/50 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar aparelho ou valor..."
              aria-label="Buscar aparelho ou valor"
              className="w-full pl-8 pr-3 py-1.5 bg-[#0F1742] border border-[#F7F8F7]/10 rounded-lg text-xs text-[#F7F8F7] placeholder-[#F7F8F7]/40 focus:outline-none focus:ring-1 focus:ring-[#F6A70D] transition-all"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#0F1742] rounded-xl border border-[#F7F8F7]/10 p-8 animate-fade-in">
            <Smartphone className="w-10 h-10 text-[#F7F8F7]/40 mx-auto mb-3" />
            <p className="text-base font-bold text-[#F7F8F7]">Nenhum aparelho encontrado</p>
            <p className="text-xs text-[#F7F8F7]/60 mt-1 mb-4">
              Não encontramos resultados para "{searchQuery}".
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveFilter('todos');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#F6A70D] text-[#0A0F2F] rounded-md text-xs font-bold hover:bg-[#F6A70D]/90 transition-colors"
            >
              Ver todos os 7 aparelhos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product, pIdx) => {
              const isOneYear = product.warranty.includes('1 Ano');

              return (
                <article
                  key={product.id}
                  style={{ transitionDelay: `${Math.min(pIdx * 80, 400)}ms` }}
                  className={`rounded-2xl bg-[#0F1742] border border-[#F7F8F7]/10 hover:border-[#F6A70D]/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#F6A70D]/10 transition-all duration-300 flex flex-col justify-between p-5 sm:p-6 shadow-md group ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div>
                    {/* Device Real Photo with Click to Enlarge */}
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#0A0F2F] mb-4 border border-[#F7F8F7]/10 group-hover:border-[#F6A70D]/40 transition-colors">
                      <img
                        src={product.image}
                        alt={`Foto real do ${product.name} na Esquire’s Store`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                        onClick={() =>
                          setPreviewImage({
                            url: product.image,
                            title: product.name,
                            price: product.price
                          })
                        }
                      />

                      {/* Enlarge Hint Button */}
                      <button
                        type="button"
                        onClick={() =>
                          setPreviewImage({
                            url: product.image,
                            title: product.name,
                            price: product.price
                          })
                        }
                        aria-label={`Ver foto ampliada do ${product.name}`}
                        className="absolute bottom-2.5 right-2.5 p-2 rounded-lg bg-black/70 hover:bg-[#F6A70D] hover:text-[#0A0F2F] text-white transition-all backdrop-blur-sm opacity-80 hover:opacity-100"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>

                      {/* Badges on Top of Photo */}
                      <div className="absolute top-2.5 left-2.5 flex flex-wrap items-center gap-1.5 pointer-events-none">
                        <span
                          className={`px-2.5 py-1 rounded text-[11px] font-black uppercase tracking-wider shadow-md ${
                            isOneYear
                              ? 'bg-[#F6A70D] text-[#0A0F2F]'
                              : 'bg-amber-600 text-white'
                          }`}
                        >
                          {product.warranty}
                        </span>
                        <span className="px-2 py-1 rounded text-[10px] font-bold bg-[#0A0F2F]/90 text-emerald-400 border border-emerald-500/30 backdrop-blur-sm">
                          Todo Original
                        </span>
                      </div>
                    </div>

                    {/* Top Row: Storage Tag + Delivery */}
                    <div className="flex items-center justify-between text-xs text-[#F7F8F7]/70 mb-2">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#0A0F2F] text-[#F6A70D] border border-[#F6A70D]/30">
                        {product.storage}
                      </span>
                      <span className="text-[11px] text-[#F7F8F7]/60">
                        Torre Caridade · Sala 214
                      </span>
                    </div>

                    {/* Model Name */}
                    <h3 className="text-xl font-bold text-[#F7F8F7] tracking-tight mb-2 group-hover:text-[#F6A70D] transition-colors">
                      {product.name}
                    </h3>

                    {/* Official Price in Gold */}
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-2xl sm:text-3xl font-black text-[#F6A70D] font-mono tracking-tight">
                        {product.price}
                      </span>
                      <span className="text-[11px] text-[#F7F8F7]/60 font-medium">
                        à vista na loja
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#F7F8F7]/80 leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Clean Technical Specs Sheet */}
                    <div className="py-3 px-3.5 mb-5 rounded-lg bg-[#0A0F2F] border border-[#F7F8F7]/5 space-y-1.5 text-xs">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-[#F7F8F7]/60 text-[11px]">Processador:</span>
                        <span className="text-[#F7F8F7] font-medium text-right text-[11px] truncate max-w-[65%]">
                          {product.technicalSpecs.chip}
                        </span>
                      </div>
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-[#F7F8F7]/60 text-[11px]">Tela:</span>
                        <span className="text-[#F7F8F7] font-medium text-right text-[11px] truncate max-w-[65%]">
                          {product.technicalSpecs.screen}
                        </span>
                      </div>
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-[#F7F8F7]/60 text-[11px]">Câmeras:</span>
                        <span className="text-[#F7F8F7] font-medium text-right text-[11px] truncate max-w-[65%]">
                          {product.technicalSpecs.camera}
                        </span>
                      </div>
                      {product.technicalSpecs.ram && (
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-[#F7F8F7]/60 text-[11px]">RAM:</span>
                          <span className="text-[#F7F8F7] font-medium text-right text-[11px]">
                            {product.technicalSpecs.ram}
                          </span>
                        </div>
                      )}
                      {product.technicalSpecs.usb && (
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-[#F7F8F7]/60 text-[11px]">Conector:</span>
                          <span className="text-[#F7F8F7] font-medium text-right text-[11px]">
                            {product.technicalSpecs.usb}
                          </span>
                        </div>
                      )}
                      <div className="flex items-baseline justify-between gap-2 pt-1 border-t border-[#F7F8F7]/5">
                        <span className="text-[#F7F8F7]/60 text-[11px]">Garantia:</span>
                        <span className="text-[#F6A70D] font-bold text-right text-[11px]">
                          {product.warranty}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Consultation Button in #F6A70D */}
                  <div className="mt-auto pt-2">
                    <a
                      href={generateWhatsAppMessage(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Consultar ${product.name} no WhatsApp`}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-bold bg-[#F6A70D] hover:bg-[#F6A70D]/90 text-[#0A0F2F] transition-all duration-200 shadow-md shadow-[#F6A70D]/10 hover:shadow-lg hover:shadow-[#F6A70D]/25 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#F6A70D] focus-visible:outline-none"
                    >
                      <MessageCircle className="w-4 h-4 text-[#0A0F2F]" />
                      <span>Consultar no WhatsApp</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Trade-In Row */}
        <div
          className={`mt-12 p-6 sm:p-8 rounded-xl bg-[#0F1742] border border-[#F7F8F7]/10 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 delay-200 ease-out hover:border-[#F6A70D]/40 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6A70D] block mb-1">
              Trade-In Esquire’s Store
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[#F7F8F7] mb-1">
              Avaliação do seu iPhone antigo na troca
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F8F7]/80 max-w-xl">
              Perícia presencial na Sala 214 da Torre Caridade com valorização justa para você sair de iPhone com nota e garantia no mesmo dia.
            </p>
          </div>

          <a
            href={`${STORE_CONTACT.whatsappUrl}?text=${encodeURIComponent(
              'Olá! Gostaria de uma avaliação do meu iPhone atual para entrar como parte de pagamento na Esquire\'s Store.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F6A70D] hover:bg-[#F6A70D]/90 text-[#0A0F2F] font-bold text-xs px-5 py-3 rounded-lg shadow-md transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#0A0F2F]" />
            <span>Solicitar Avaliação na Troca</span>
          </a>
        </div>

      </div>

      {/* High-Resolution Photo Preview Modal */}
      {previewImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#0F1742] rounded-2xl overflow-hidden border border-[#F6A70D]/30 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-[#F7F8F7]/10 bg-[#0A0F2F]">
              <div>
                <h3 className="text-base font-bold text-[#F7F8F7]">
                  {previewImage.title}
                </h3>
                <span className="text-xs font-mono font-bold text-[#F6A70D]">
                  {previewImage.price} · Foto Real na Loja
                </span>
              </div>
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="p-2 text-[#F7F8F7]/70 hover:text-[#F6A70D] hover:bg-[#F7F8F7]/10 rounded-lg transition-colors"
                aria-label="Fechar visualização da foto"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-[#0A0F2F] flex items-center justify-center max-h-[75vh] overflow-hidden">
              <img
                src={previewImage.url}
                alt={previewImage.title}
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
