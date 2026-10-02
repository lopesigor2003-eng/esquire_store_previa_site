import { useState, useMemo } from 'react';
import {
  Smartphone,
  MessageCircle,
  Search
} from 'lucide-react';
import { PRODUCTS, ProductItem, STORE_CONTACT } from '../data/storeData';
import { useInView } from '../hooks/useInView';

export default function ProductsSection() {
  const [activeGeneration, setActiveGeneration] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStorageMap, setSelectedStorageMap] = useState<Record<string, string>>({});
  const [selectedColorMap, setSelectedColorMap] = useState<Record<string, string>>({});

  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.05 });

  const generations = [
    { id: 'todos', label: 'Todos' },
    { id: 'Linha 18', label: 'Linha 18' },
    { id: 'Linha 17', label: 'Linha 17' },
    { id: 'Linha 16', label: 'Linha 16' },
    { id: 'Linha 15', label: 'Linha 15' },
    { id: 'Linha 14 & Anteriores', label: 'Linha 14 & 13' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesGeneration =
        activeGeneration === 'todos' || product.generation === activeGeneration;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGeneration && matchesSearch;
    });
  }, [activeGeneration, searchQuery]);

  const handleStorageSelect = (productId: string, storage: string) => {
    setSelectedStorageMap((prev) => ({ ...prev, [productId]: storage }));
  };

  const handleColorSelect = (productId: string, colorName: string) => {
    setSelectedColorMap((prev) => ({ ...prev, [productId]: colorName }));
  };

  const generateWhatsAppMessage = (product: ProductItem) => {
    const selectedStorage = selectedStorageMap[product.id] || product.storageOptions[0] || '';
    const selectedColor = selectedColorMap[product.id] || product.colors[0]?.name || '';

    return `${STORE_CONTACT.whatsappUrl}?text=${encodeURIComponent(
      `Olá, Esquire's Store! Gostaria de consultar o valor atualizado e a disponibilidade do *${product.name}* (${selectedStorage}, Cor: ${selectedColor}) na loja física.`
    )}`;
  };

  return (
    <section
      ref={sectionRef}
      id="produtos"
      aria-label="Catálogo de iPhones da Esquire's Store"
      className="py-16 lg:py-24 bg-[#0A0F2F] text-[#F7F8F7] border-b border-[#F7F8F7]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Reveal Animation */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-[#F7F8F7]/10 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#F6A70D] mb-2">
              Linha Oficial Apple · Santa Maria, RS
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F7F8F7] tracking-tight">
              Tecnologia de Ponta ao Seu Alcance
            </h2>

            <p className="text-sm sm:text-base text-[#F7F8F7]/80 mt-2 max-w-xl">
              Consulte a cotação do dia e o estoque físico para retirada imediata na Torre Caridade.
            </p>
          </div>

          <div className="text-xs text-[#F7F8F7]/70 font-medium">
            Atendimento direto na Sala 214 · Segunda a Sábado
          </div>
        </div>

        {/* Filter Controls & Search with Smooth Transition */}
        <div
          className={`mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-700 delay-100 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* iOS-Style Segmented Control */}
          <div
            className="flex items-center gap-1 p-1 bg-[#0F1742] border border-[#F7F8F7]/10 rounded-lg overflow-x-auto max-w-full"
            role="tablist"
            aria-label="Filtrar iPhones por geração"
          >
            {generations.map((gen) => {
              const isActive = activeGeneration === gen.id;
              return (
                <button
                  key={gen.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveGeneration(gen.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#F6A70D] focus-visible:outline-none ${
                    isActive
                      ? 'bg-[#F6A70D] text-[#0A0F2F] font-bold shadow-sm scale-[1.02]'
                      : 'text-[#F7F8F7]/80 hover:text-[#F7F8F7] hover:bg-[#F7F8F7]/5'
                  }`}
                >
                  {gen.label}
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
              placeholder="Buscar modelo..."
              aria-label="Buscar modelo de iPhone"
              className="w-full pl-8 pr-3 py-1.5 bg-[#0F1742] border border-[#F7F8F7]/10 rounded-lg text-xs text-[#F7F8F7] placeholder-[#F7F8F7]/40 focus:outline-none focus:ring-1 focus:ring-[#F6A70D] transition-all"
            />
          </div>
        </div>

        {/* Products Grid with Staggered Fade-in & Hover Lift */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#0F1742] rounded-xl border border-[#F7F8F7]/10 p-8 animate-fade-in">
            <Smartphone className="w-10 h-10 text-[#F7F8F7]/40 mx-auto mb-3" />
            <p className="text-base font-bold text-[#F7F8F7]">Nenhum modelo encontrado</p>
            <p className="text-xs text-[#F7F8F7]/60 mt-1 mb-4">
              Não encontramos resultados para "{searchQuery}".
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveGeneration('todos');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#F6A70D] text-[#0A0F2F] rounded-md text-xs font-bold hover:bg-[#F6A70D]/90 transition-colors"
            >
              Ver todos os modelos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, pIdx) => {
              const currentStorage = selectedStorageMap[product.id] || product.storageOptions[0];
              const currentColor = selectedColorMap[product.id] || product.colors[0]?.name;

              return (
                <article
                  key={product.id}
                  style={{ transitionDelay: `${Math.min(pIdx * 80, 400)}ms` }}
                  className={`rounded-xl bg-[#0F1742] border border-[#F7F8F7]/10 hover:border-[#F6A70D]/50 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#F6A70D]/10 transition-all duration-300 flex flex-col justify-between p-6 shadow-sm group ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div>
                    {/* Top Row: Generation + Delivery */}
                    <div className="flex items-center justify-between text-xs text-[#F7F8F7]/70 mb-2">
                      <span className="font-semibold text-[#F6A70D]">{product.generation}</span>
                      <span>{product.delivery}</span>
                    </div>

                    {/* Model Name */}
                    <h3 className="text-xl font-bold text-[#F7F8F7] tracking-tight mb-2 group-hover:text-[#F6A70D] transition-colors">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#F7F8F7]/80 leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Clean Technical Specs Sheet */}
                    <div className="py-3 px-3.5 mb-4 rounded-lg bg-[#0A0F2F] border border-[#F7F8F7]/5 space-y-1.5 text-xs">
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
                    </div>

                    {/* Storage Options Chips */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-semibold text-[#F7F8F7]/70 uppercase tracking-wider">
                          Armazenamento:
                        </span>
                        <span className="text-xs font-mono font-bold text-[#F6A70D]">
                          {currentStorage}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {product.storageOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleStorageSelect(product.id, opt)}
                            className={`px-2.5 py-1 rounded text-xs font-semibold transition-all duration-150 focus-visible:ring-1 focus-visible:ring-[#F6A70D] focus-visible:outline-none hover:scale-105 active:scale-95 ${
                              currentStorage === opt
                                ? 'bg-[#F6A70D] text-[#0A0F2F] font-bold shadow-sm'
                                : 'bg-[#0A0F2F] text-[#F7F8F7]/80 hover:text-[#F7F8F7] border border-[#F7F8F7]/10'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Color Dots */}
                    <div className="mb-5">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-semibold text-[#F7F8F7]/70 uppercase tracking-wider">
                          Cor:
                        </span>
                        <span className="text-xs text-[#F7F8F7]">
                          {currentColor}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {product.colors.map((c) => {
                          const isColorSelected = currentColor === c.name;
                          return (
                            <button
                              key={c.name}
                              type="button"
                              title={c.name}
                              onClick={() => handleColorSelect(product.id, c.name)}
                              className={`w-4 h-4 rounded-full border transition-all duration-200 ${
                                isColorSelected
                                  ? 'ring-2 ring-[#F6A70D] scale-125 border-[#F7F8F7]'
                                  : 'border-[#F7F8F7]/30 hover:scale-110'
                              }`}
                              style={{ backgroundColor: c.hex }}
                              aria-label={`Selecionar cor ${c.name}`}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* Quiet Trust Points */}
                    <div className="space-y-1 text-xs text-[#F7F8F7]/70 mb-5">
                      <p>✓ {product.condition}</p>
                      <p>✓ {product.warranty}</p>
                    </div>
                  </div>

                  {/* Consultation Button in #F6A70D */}
                  <div className="mt-auto pt-2">
                    <a
                      href={generateWhatsAppMessage(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Consultar valor do ${product.name} no WhatsApp`}
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

        {/* Trade-In Row with Entrance Animation */}
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
              Perícia presencial na Sala 214 da Torre Caridade com valorização justa para você sair de iPhone novo no mesmo dia.
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
            <span>Solicitar Avaliação</span>
          </a>
        </div>

      </div>
    </section>
  );
}
