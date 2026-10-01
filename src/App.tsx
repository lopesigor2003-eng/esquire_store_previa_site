import { useState } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import TestimonialsSection from './components/TestimonialsSection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ImageModal from './components/ImageModal';
import { StoreGalleryItem } from './data/storeData';

export default function App() {
  const [selectedImage, setSelectedImage] = useState<StoreGalleryItem | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#070D1E] text-white selection:bg-white selection:text-[#070D1E] font-sans antialiased">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-white text-[#070D1E] px-4 py-2 rounded-md font-bold text-sm shadow-xl ring-2 ring-white"
      >
        Pular para o conteúdo principal
      </a>

      {/* Semantic Header & Navigation */}
      <Header />

      {/* Semantic Main landmark containing all sections */}
      <main id="main-content" className="flex-1">
        {/* Section 1: Hero Carousel with single H1 */}
        <HeroCarousel />

        {/* Section 2: Sobre Nós / Nossa Loja with H2 */}
        <AboutSection onSelectImage={(item) => setSelectedImage(item)} />

        {/* Section 3: Nossos Produtos with H2 */}
        <ProductsSection />

        {/* Section 4: Depoimentos with H2 */}
        <TestimonialsSection />

        {/* Section 5: Localização with H2 */}
        <LocationSection />

        {/* Section 6: Contato with H2 */}
        <ContactSection />
      </main>

      {/* Semantic Footer with 2026 copyright and complete links */}
      <Footer />

      {/* Quick Action Floating WhatsApp Button */}
      <WhatsAppFloat />

      {/* Accessible Gallery Photo Lightbox Modal */}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
