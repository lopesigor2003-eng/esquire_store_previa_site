import { useState, useMemo } from 'react';
import {
  Smartphone,
  MessageCircle,
  Search,
  CheckCircle2,
  ShieldCheck,
  Truck,
  ArrowRight
} from 'lucide-react';
import { PRODUCTS, ProductItem, STORE_CONTACT } from '../data/storeData';

export default function ProductsSection() {
  const [activeGeneration, setActiveGeneration] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStorageMap, setSelectedStorageMap] = useState<Record<string, string>>({});
  const [selectedColorMap, setSelectedColorMap] = useState<Record<string, string>>({});

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
      id="produtos"
      aria-label="Catálogo de iPhones da Esquire's Store"
      className="py-16 lg:py-24 bg-[#070D1E] text-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Quiet Unboxed Kicker */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-white/10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
              Linha Oficial Apple · Santa Maria, RS
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tecnologia de Ponta ao Seu Alcance
            </h2>

            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl">
              Consulte a cotação do dia e o estoque físico para retirada imediata na Torre Caridade.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-medium">
            Atendimento direto na Sala 214 · Segunda a Sábado
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* iOS-Style Segmented Control */}
          <div
            className="flex items-center gap-1 p-1 bg-[#0B1428] border border-white/10 rounded-lg overflow-x-auto max-w-full"
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
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none ${
                    isActive
                      ? 'bg-white text-[#070D1E] shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {gen.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar modelo..."
              aria-label="Buscar modelo de iPhone"
              className="w-full pl-8 pr-3 py-1.5 bg-[#0B1428] border border-white/10 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-white transition-all"
            />
          </div>
        </div>

        {/* Products Grid (No Photos - Executive Spec Sheet) */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#0B1428] rounded-xl border border-white/10 p-8">
            <Smartphone className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <p className="text-base font-bold text-white">Nenhum modelo encontrado</p>
            <p className="text-xs text-slate-400 mt-1 mb-4">
              Não encontramos resultados para "{searchQuery}".
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveGeneration('todos');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-white text-[#070D1E] rounded-md text-xs font-bold hover:bg-slate-100 transition-colors"
            >
              Ver todos os modelos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const currentStorage = selectedStorageMap[product.id] || product.storageOptions[0];
              const currentColor = selectedColorMap[product.id] || product.colors[0]?.name;

              return (
                <article
                  key={product.id}
                  className="rounded-xl bg-[#0B1428] border border-white/10 hover:border-white/25 transition-all duration-200 flex flex-col justify-between p-6 shadow-sm"
                >
                  <div>
                    {/* Top Row: Generation + Delivery */}
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span className="font-semibold">{product.generation}</span>
                      <span>{product.delivery}</span>
                    </div>

                    {/* Model Name */}
                    <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Clean Technical Specs Sheet (Without line-by-line decorative icons) */}
                    <div className="py-3 px-3.5 mb-4 rounded-lg bg-[#070D1E] border border-white/5 space-y-1.5 text-xs">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-slate-400 text-[11px]">Processador:</span>
                        <span className="text-slate-200 font-medium text-right text-[11px] truncate max-w-[65%]">
                          {product.technicalSpecs.chip}
                        </span>
                      </div>
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-slate-400 text-[11px]">Tela:</span>
                        <span className="text-slate-200 font-medium text-right text-[11px] truncate max-w-[65%]">
                          {product.technicalSpecs.screen}
                        </span>
                      </div>
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-slate-400 text-[11px]">Câmeras:</span>
                        <span className="text-slate-200 font-medium text-right text-[11px] truncate max-w-[65%]">
                          {product.technicalSpecs.camera}
                        </span>
                      </div>
                    </div>

                    {/* Storage Options Chips */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          Armazenamento:
                        </span>
                        <span className="text-xs font-mono font-bold text-white">
                          {currentStorage}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {product.storageOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleStorageSelect(product.id, opt)}
                            className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors focus-visible:ring-1 focus-visible:ring-white focus-visible:outline-none ${
                              currentStorage === opt
                                ? 'bg-white text-[#070D1E]'
                                : 'bg-[#070D1E] text-slate-300 hover:text-white border border-white/10'
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
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          Cor:
                        </span>
                        <span className="text-xs text-slate-300">
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
                              className={`w-4 h-4 rounded-full border transition-transform ${
                                isColorSelected
                                  ? 'ring-2 ring-white scale-110 border-white'
                                  : 'border-white/30 hover:scale-105'
                              }`}
                              style={{ backgroundColor: c.hex }}
                              aria-label={`Selecionar cor ${c.name}`}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* Quiet Trust Points */}
                    <div className="space-y-1 text-xs text-slate-400 mb-5">
                      <p>✓ {product.condition}</p>
                      <p>✓ {product.warranty}</p>
                    </div>
                  </div>

                  {/* Consultation Button */}
                  <div className="mt-auto pt-2">
                    <a
                      href={generateWhatsAppMessage(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Consultar valor do ${product.name} no WhatsApp`}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-bold bg-white hover:bg-slate-100 text-[#070D1E] transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 text-[#070D1E]" />
                      <span>Consultar no WhatsApp</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Trade-In Row */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#0B1428] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Trade-In Esquire’s Store
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
              Avaliação do seu iPhone antigo na troca
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Perícia presencial na Sala 214 da Torre Caridade com valorização justa para você sair de iPhone novo no mesmo dia.
            </p>
          </div>

          <a
            href={`${STORE_CONTACT.whatsappUrl}?text=${encodeURIComponent(
              'Olá! Gostaria de uma avaliação do meu iPhone atual para entrar como parte de pagamento na Esquire\'s Store.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#070D1E] font-bold text-xs px-5 py-3 rounded-lg shadow-sm transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#070D1E]" />
            <span>Solicitar Avaliação</span>
          </a>
        </div>

      </div>
    </section>
  );
}
