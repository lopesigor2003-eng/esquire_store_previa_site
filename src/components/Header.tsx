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
    { href: '#produtos', label: 'iPhones' },
    { href: '#depoimentos', label: 'Avaliações' },
    { href: '#localizacao', label: 'Torre Caridade' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0A0F2F]/95 backdrop-blur-md border-b border-[#F7F8F7]/10 py-3.5 shadow-md shadow-black/30'
          : 'bg-[#0A0F2F] border-b border-[#F7F8F7]/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Wordmark Brand with Transparent Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#F6A70D] focus-visible:outline-none rounded-md"
            aria-label="Esquire's Store - Página Inicial"
          >
            {/* Logo image strictly without background (sem fundo) */}
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <img
                src={STORE_CONTACT.logoUrl}
                alt="Logo Esquire's Store"
                loading="eager"
                decoding="async"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform drop-shadow"
              />
            </div>
            <span className="font-extrabold text-lg sm:text-xl text-[#F7F8F7] tracking-tight group-hover:text-[#F6A70D] transition-colors">
              ESQUIRE’S STORE
            </span>
          </a>

          {/* Zone 2: Clean Text Navigation Links */}
          <nav
            aria-label="Navegação Principal"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#F7F8F7]/80"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#F6A70D] transition-colors duration-150 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action in #F6A70D */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`${STORE_CONTACT.whatsappUrl}?text=${encodeURIComponent(
                'Olá! Gostaria de consultar valores e modelos de iPhone na Esquire\'s Store.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Atendimento via WhatsApp"
              className="inline-flex items-center gap-2 bg-[#F6A70D] hover:bg-[#F6A70D]/90 text-[#0A0F2F] px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap shadow-sm hover:shadow-md hover:shadow-[#F6A70D]/20 focus-visible:ring-2 focus-visible:ring-[#F6A70D] focus-visible:outline-none"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#0A0F2F]" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#F7F8F7] hover:text-[#F6A70D] hover:bg-[#F7F8F7]/5 transition-colors focus-visible:ring-2 focus-visible:ring-[#F6A70D] focus-visible:outline-none"
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
            className="md:hidden pt-4 pb-3 border-t border-[#F7F8F7]/10 mt-3 space-y-1 animate-in fade-in duration-150"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[#F7F8F7]/80 hover:text-[#F6A70D] hover:bg-[#F7F8F7]/5 rounded-md transition-colors"
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
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#F6A70D] text-[#0A0F2F] rounded-lg text-xs font-bold transition-colors shadow"
              >
                <MessageCircle className="w-4 h-4 text-[#0A0F2F]" />
                <span>Atendimento WhatsApp</span>
              </a>
            </div>
          </nav>
        )}

      </div>
    </header>
  );
}
