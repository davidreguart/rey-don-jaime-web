import React, { useState } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Modal from './Modal'; // Reused for sub-product selection

interface ProductsSectionProps {
  openProductModal: (product: Product) => void; // This is for the FINAL detail modal
}

const productsData: Product[] = [
  { 
    id: 'olive-oil-parent', 
    nameKey: 'products.oilOliveCategory.name', 
    isParentProduct: true,
    imageUrl: 'https://www.aceitesreydonjaime.com/rs/bg_home_02.jpg', 
    descriptionKey: 'products.oilOliveCategory.description', 
    subProducts: [
      { 
        id: '1', 
        nameKey: 'products.oilOliveExtraVirgin.name', 
        categoryKey: 'products.categories.extraVirgin', 
        imageUrl: 'https://www.aceitesreydonjaime.com/rs/ReyDonJaime-VirgenExtra.jpg',
        descriptionKey: 'products.oilOliveExtraVirgin.description',
        intensity: 'intenso', idealUsage: ['general', 'salads'], attributes: []
      },
      { 
        id: '10',
        nameKey: 'products.oilOliveVirgin.name', 
        categoryKey: 'products.categories.virgin', 
        imageUrl: 'https://www.aceitesreydonjaime.com/rs/ReyDonJaime-VirgenExtra.jpg', 
        descriptionKey: 'products.oilOliveVirgin.description',
        intensity: 'medio', idealUsage: ['salads', 'general'], attributes: []
      },
      { 
        id: '11', 
        nameKey: 'products.oilOliveIntense.name', 
        categoryKey: 'products.categories.oliveOil', 
        imageUrl: 'https://www.aceitesreydonjaime.com/rs/ReyDonJaime-VirgenExtra.jpg', 
        descriptionKey: 'products.oilOliveIntense.description',
        intensity: 'intenso', idealUsage: ['general', 'frying'], attributes: []
      },
      { 
        id: '12', 
        nameKey: 'products.oilOliveMild.name', 
        categoryKey: 'products.categories.oliveOil', 
        imageUrl: 'https://www.aceitesreydonjaime.com/rs/ReyDonJaime-VirgenExtra.jpg', 
        descriptionKey: 'products.oilOliveMild.description',
        intensity: 'suave', idealUsage: ['general', 'baking'], attributes: []
      },
    ]
  },
  { 
    id: '2', 
    nameKey: 'products.oilPomace.name', 
    categoryKey: 'products.categories.refined', 
    imageUrl: 'https://www.aceitesreydonjaime.com/rs/ReyDonJaime-Orujo.jpg',
    descriptionKey: 'products.oilPomace.description',
    intensity: 'medio', idealUsage: ['frying'], attributes: []
  },
  { 
    id: '3', 
    nameKey: 'products.oilSunflowerRefined.name', 
    categoryKey: 'products.categories.refined', 
    imageUrl: 'https://www.aceitesreydonjaime.com/rs/ReyDonJaime-Girasol.jpg',
    descriptionKey: 'products.oilSunflowerRefined.description',
    intensity: 'suave', idealUsage: ['baking', 'salads'], attributes: []
  },
  { 
    id: '4', 
    nameKey: 'products.oilSunflowerHighOleic.name', 
    categoryKey: 'products.categories.refined', 
    imageUrl: 'https://www.aceitesreydonjaime.com/rs/ReyDonJaime-GirasolOleico.jpg',
    descriptionKey: 'products.oilSunflowerHighOleic.description',
    intensity: 'suave', idealUsage: ['frying'], attributes: ['high_oleic']
  },
  { 
    id: '5', 
    nameKey: 'products.oilSeedRefined.name', 
    categoryKey: 'products.categories.refined', 
    imageUrl: 'https://www.aceitesreydonjaime.com/rs/ReyDonJaime-Semillas.jpg',
    descriptionKey: 'products.oilSeedRefined.description',
    intensity: 'suave', idealUsage: ['frying'], attributes: []
  },
  { 
    id: '6', 
    nameKey: 'products.oilSoyRefined.name', 
    categoryKey: 'products.categories.refined', 
    imageUrl: 'https://www.aceitesreydonjaime.com/rs/ReyDonJaime-Soja.jpg',
    descriptionKey: 'products.oilSoyRefined.description',
    intensity: 'suave', idealUsage: ['salads'], attributes: ['omega3_6']
  },
  { 
    id: '7', 
    nameKey: 'products.oilSpecialFrying.name', 
    categoryKey: 'products.categories.special', 
    imageUrl: 'https://www.aceitesreydonjaime.com/rs/ReyDonJaime-EspFreidora.jpg',
    descriptionKey: 'products.oilSpecialFrying.description',
    intensity: 'medio', idealUsage: ['frying'], attributes: []
  },
  { 
    id: '8', 
    nameKey: 'products.oilEcological.name', 
    categoryKey: 'products.categories.ecological', 
    imageUrl: 'https://www.aceitesreydonjaime.com/rs/especial_02.jpg',
    descriptionKey: 'products.oilEcological.description',
    intensity: 'medio', idealUsage: ['general', 'salads'], attributes: ['organic']
  },
  { 
    id: '9', 
    nameKey: 'products.vinegarsWine.name', 
    categoryKey: 'products.categories.vinegar', 
    imageUrl: 'https://www.aceitesreydonjaime.com/rs/especial_01.jpg',
    descriptionKey: 'products.vinegarsWine.description',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ProductsSection: React.FC<ProductsSectionProps> = ({ openProductModal }) => {
  const { t } = useLanguage();
  const [isSubProductModalOpen, setIsSubProductModalOpen] = useState(false);
  const [selectedParentProduct, setSelectedParentProduct] = useState<Product | null>(null);

  const handleCardClick = (product: Product) => {
    if (product.isParentProduct && product.subProducts) {
      setSelectedParentProduct(product);
      setIsSubProductModalOpen(true);
    } else {
      openProductModal(product); // Opens the main detail modal
    }
  };

  const handleSubProductSelect = (subProduct: Product) => {
    setIsSubProductModalOpen(false);
    openProductModal(subProduct); // Opens the main detail modal for the sub-product
  };

  return (
    <>
      <motion.section 
        id="products" 
        className="py-12 sm:py-16 bg-brand-beige"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto"> 
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-brand-dark-text mb-3">
                {t('products.title')}
              </h2>
              <p className="font-montserrat text-base sm:text-lg text-brand-brown max-w-2xl mx-auto">
                {t('products.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
              {productsData.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onCardClick={handleCardClick}
                />
              ))}
            </div>
            <div className="text-center mt-8 lg:mt-12">
              <motion.a
                href="#contact" 
                className="bg-brand-gold text-white font-montserrat font-semibold py-3 px-8 rounded-md text-lg inline-flex items-center group"
                whileHover={{ scale: 1.05, filter: "brightness(0.95)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {t('products.ctaRequestInfo')}
                <ArrowRightIcon className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Sub-Product Selection Modal */}
      {selectedParentProduct && selectedParentProduct.subProducts && (
        <Modal
          isOpen={isSubProductModalOpen}
          onClose={() => setIsSubProductModalOpen(false)}
          title={t('products.subProductModal.title', { parentName: t(selectedParentProduct.nameKey) })}
          size="3xl" 
        >
          <ul className="space-y-4">
            {selectedParentProduct.subProducts.map(subProduct => (
              <li key={subProduct.id} className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <img 
                    src={subProduct.imageUrl} 
                    alt={t(subProduct.nameKey)} 
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-md flex-shrink-0 border border-gray-200"
                  />
                  <div className="flex-grow text-center sm:text-left">
                    <h4 className="font-playfair text-lg font-semibold text-brand-dark-text">{t(subProduct.nameKey)}</h4>
                    {subProduct.categoryKey && (
                      <p className="text-sm text-brand-brown mb-2">{t(subProduct.categoryKey)}</p>
                    )}
                  </div>
                  <motion.button
                    onClick={() => handleSubProductSelect(subProduct)}
                    className="w-full sm:w-auto bg-brand-green text-white font-montserrat font-semibold py-2 px-4 rounded-md text-sm whitespace-nowrap"
                    whileHover={{ scale: 1.05, filter: "brightness(0.9)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('oilFinder.results.viewDetailsButton')} 
                  </motion.button>
                </div>
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </>
  );
};

export default ProductsSection;