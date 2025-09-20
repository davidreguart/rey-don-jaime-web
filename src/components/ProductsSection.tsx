import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Modal from './Modal';
import { productApi, ApiProduct } from '../api';

interface ProductsSectionProps {
  openProductModal: (product: Product) => void;
}

// Función para transformar datos de la API al formato del frontend
const transformApiProductToProduct = (apiProduct: ApiProduct): Product => {
  //Manejamos primero imagen null o undefined
  const getImageUrl = (image: string | null): string => {
    if (!image) {
      return '/images/placeholders/placeholder-product.jpg';
    }
    return image;
  };

  return {
    id: apiProduct.id,
    nombre: apiProduct.nombre,
    descripcion: apiProduct.descripcion,
    imagen: apiProduct.imagen || '/images/placeholders/placeholder-product.jpg',
    activo: apiProduct.activo,
    fecha_creacion: apiProduct.fecha_creacion,
    fecha_actualizacion: apiProduct.fecha_actualizacion,
    
    // Campos de traducción
    nombre_en: apiProduct.nombre_en,
    descripcion_en: apiProduct.descripcion_en,
    
    // Campos de compatibilidad
    nameKey: apiProduct.nombre,
    imageUrl: getImageUrl(apiProduct.imagen),
    descriptionKey: apiProduct.descripcion,
    categoryKey: 'products.categories.general',
    intensity: 'medio',
    idealUsage: ['general'],
    attributes: [],
    isParentProduct: false, // Los productos de la API no son productos padre por ahora
  };
};

// Datos mock como fallback (mantenemos algunos para compatibilidad)
const fallbackProductsData: Product[] = [
  { 
    id: 999, // Cambiado a number
    nombre: 'Aceites de Oliva',
    descripcion: 'Categoría de aceites de oliva',
    imagen: 'https://www.aceitesreydonjaime.com/rs/bg_home_02.jpg',
    activo: true,
    fecha_creacion: new Date().toISOString(),
    fecha_actualizacion: new Date().toISOString(),
    nameKey: 'products.oilOliveCategory.name', 
    isParentProduct: true,
    imageUrl: 'https://www.aceitesreydonjaime.com/rs/bg_home_02.jpg', 
    descriptionKey: 'products.oilOliveCategory.description',
    categoryKey: 'products.categories.olive',
    subProducts: [
      { 
        id: 1001, // Cambiado a number
        nombre: 'Aceite de Oliva Virgen Extra',
        descripcion: 'Aceite de oliva virgen extra de primera calidad',
        imagen: 'https://www.aceitesreydonjaime.com/rs/ReyDonJaime-VirgenExtra.jpg',
        activo: true,
        fecha_creacion: new Date().toISOString(),
        fecha_actualizacion: new Date().toISOString(),
        nameKey: 'products.oilOliveExtraVirgin.name', 
        categoryKey: 'products.categories.extraVirgin', 
        imageUrl: 'https://www.aceitesreydonjaime.com/rs/ReyDonJaime-VirgenExtra.jpg',
        descriptionKey: 'products.oilOliveExtraVirgin.description',
        intensity: 'intenso', idealUsage: ['general', 'salads'], attributes: []
      },
      // ... otros subproductos se mantienen igual con IDs numéricos
    ]
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
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar productos de la API
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
                const apiProducts = await productApi.getProducts();
        const transformedProducts = apiProducts.map(transformApiProductToProduct);
        
        // Por ahora, usar solo productos de la API (sin datos mock)
        // TODO: En el futuro, implementar productos padre/pack desde la API
        setProducts(transformedProducts);

      } catch (err) {
        console.error('Error al cargar productos:', err);
        setError('Error al cargar productos');
        // En caso de error, usar solo datos mock
        setProducts(fallbackProductsData);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleCardClick = (product: Product) => {
    if (product.isParentProduct && product.subProducts) {
      setSelectedParentProduct(product);
      setIsSubProductModalOpen(true);
    } else {
      openProductModal(product);
    }
  };

  const handleSubProductSelect = (subProduct: Product) => {
    setIsSubProductModalOpen(false);
    openProductModal(subProduct);
  };

  // Mostrar loading con skeleton loading mejorado
  if (loading) {
    return (
      <motion.section className="py-12 sm:py-16 bg-brand-beige">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 lg:mb-12">
              <div className="h-10 bg-gray-200 rounded-md animate-pulse mb-4"></div>
              <div className="h-6 bg-gray-200 rounded-md animate-pulse max-w-2xl mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="h-48 bg-gray-200 animate-pulse"></div>
                  <div className="p-4">
                    <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    );
  }

  // Mostrar error
  if (error) {
    return (
      <motion.section 
        id="products" 
        className="py-12 sm:py-16 bg-brand-beige"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-brand-dark-text mb-8">
              {t('products.title')}
            </h2>
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          </div>
        </div>
      </motion.section>
    );
  }

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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {products.map((product) => (
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
          title={t('products.subProductModal.title', { parentName: t(selectedParentProduct.nameKey || selectedParentProduct.nombre) })}
          size="3xl" 
        >
          <ul className="space-y-4">
            {selectedParentProduct.subProducts.map(subProduct => (
              <li key={subProduct.id} className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <img 
                    src={subProduct.imageUrl || subProduct.imagen} 
                    alt={t(subProduct.nameKey || subProduct.nombre)} 
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-md flex-shrink-0 border border-gray-200"
                  />
                  <div className="flex-grow text-center sm:text-left">
                    <h4 className="font-playfair text-lg font-semibold text-brand-dark-text">
                      {t(subProduct.nameKey || subProduct.nombre)}
                    </h4>
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