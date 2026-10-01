import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { STORE_CONTACT } from '../data/storeData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'A Loja' },
    { href: '#produtos', label: 'iPhones' },
    { href: '#depoimentos', label: 'Avaliações' },
    { href: '#localizacao', label: 'Torre Caridade' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#070D1E]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-md shadow-black/20'
          : 'bg-[#070D1E] border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Wordmark Brand */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-md"
            aria-label="Esquire's Store - Página Inicial"
          >
            <div className="w-9 h-9 rounded-md overflow-hidden bg-[#0C1630] border border-white/20 flex items-center justify-center shrink-0">
              <img
                src={STORE_CONTACT.logoUrl}
                alt="Logo Esquire's Store"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="text-white font-bold text-xs tracking-wider font-mono">E’S</span>
            </div>
            <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight">
              ESQUIRE’S STORE
            </span>
          </a>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav
            aria-label="Navegação Principal"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors duration-150 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`${STORE_CONTACT.whatsappUrl}?text=${encodeURIComponent(
                'Olá! Gostaria de consultar valores e modelos de iPhone na Esquire\'s Store.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Atendimento via WhatsApp"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#070D1E] px-4 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shadow-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#070D1E]" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Menu móvel"
            className="md:hidden pt-4 pb-3 border-t border-white/10 mt-3 space-y-1 animate-in fade-in duration-150"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 px-3">
              <a
                href={`${STORE_CONTACT.whatsappUrl}?text=${encodeURIComponent(
                  'Olá! Gostaria de consultar disponibilidade de iPhones na loja física.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-white text-[#070D1E] rounded-lg text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#070D1E]" />
                <span>Atendimento WhatsApp</span>
              </a>
            </div>
          </nav>
        )}

      </div>
    </header>
  );
}
