import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import ProcessSection from './components/ProcessSection';
import AwardsSection from './components/AwardsSection';
import HistorySection from './components/HistorySection';
import TestimonialsSection from './components/TestimonialsSection';
import OilFinderSection from './components/OilFinderSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useLanguage } from './contexts/LanguageContext';
import { Product } from './types';
import Modal from './components/Modal';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const { t, language } = useLanguage();

  // Lifted state for Product Detail Modal
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleLoad);
    
    // Fallback for loading state
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openProductModal = (product: Product) => {
    setSelectedProductForModal(product);
    setIsProductModalOpen(true);
  };

  const closeProductModal = () => {
    setIsProductModalOpen(false);
    setSelectedProductForModal(null);
  };

  // Funciones para obtener el texto según el idioma
  const getProductName = (product: Product) => {
    if (language === 'en' && product.nombre_en) {
      return product.nombre_en;
    }
    return product.nombre;
  };

  const getProductDescription = (product: Product) => {
    if (language === 'en' && product.descripcion_en) {
      return product.descripcion_en;
    }
    return product.descripcion;
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <motion.div
                className="w-16 h-16 border-4 border-brand-gold border-t-transparent rounded-full mx-auto mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.p 
                className="text-brand-dark-text font-playfair text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Aceites Rey Don Jaime
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="flex flex-col min-h-screen bg-brand-beige">
        <Navbar />
        <main className="flex-grow">
          <section id="home">
            <HeroSection />
          </section>
          <section id="products">
            <ProductsSection 
              openProductModal={openProductModal} 
            />
          </section>
          <section id="process">
            <ProcessSection />
          </section>
          <section id="awards">
            <AwardsSection />
          </section>
          <section id="history">
            <HistorySection />
          </section>
          <section id="testimonials">
            <TestimonialsSection />
          </section>
          <section id="oil-finder">
            <OilFinderSection 
              openProductModal={openProductModal}
            />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
        </main>
        <Footer />
      
      {/* Main Product Detail Modal controlled from App */}
      {selectedProductForModal && (
        <Modal 
            isOpen={isProductModalOpen} 
            onClose={closeProductModal}
            title={getProductName(selectedProductForModal)}
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img 
              src={selectedProductForModal.imageUrl} 
              alt={getProductName(selectedProductForModal)} 
              className="w-full md:w-1/3 h-auto max-h-96 object-contain rounded-lg shadow-md"
            />
            <div className="md:w-2/3">
              {selectedProductForModal.categoryKey && (
                <p className="text-sm font-semibold text-brand-gold mb-2">
                  {t(selectedProductForModal.categoryKey)}
                </p>
              )}
              <p className="font-montserrat text-brand-dark-text leading-relaxed whitespace-pre-line">
                {getProductDescription(selectedProductForModal)}
              </p>
            </div>
          </div>
        </Modal>
      )}

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 bg-brand-gold text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300 z-40"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;