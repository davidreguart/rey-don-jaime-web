import React, { useState } from 'react';
import { Product } from '../types'; 
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface RedesignedProductCardProps {
  product: Product;
  onCardClick: (product: Product) => void; // Simplified onClick for the whole card/button
}

const ProductCard: React.FC<RedesignedProductCardProps> = ({ product, onCardClick }) => {
  const { t, language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  
  // Función para obtener el nombre según el idioma
  const getProductName = () => {
    if (language === 'en' && product.nombre_en) {
      return product.nombre_en;
    }
    return product.nombre;
  };
  
  // Función para obtener la descripción según el idioma
  const getProductDescription = () => {
    if (language === 'en' && product.descripcion_en) {
      return product.descripcion_en;
    }
    return product.descripcion;
  };
  
  const productName = getProductName();
  const buttonTextKey = product.isParentProduct ? 'products.viewRangeButton' : 'products.viewDetailsButton';
  const ariaLabel = product.isParentProduct 
    ? t('products.aria.exploreCategory', { categoryName: productName })
    : t('products.aria.viewDetails', { productName: productName });

  return (
    <div
      className="bg-white rounded-lg shadow-sm overflow-hidden group text-left w-full flex flex-col h-full border border-gray-100 cursor-pointer relative transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:border-gray-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-48 sm:h-52">
        <img 
          src={product.imageUrl || product.imagen} 
          alt={productName}
          loading="lazy" 
          decoding='async'
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = '/images/placeholders/placeholder-product.jpg';
          }}
        />

        {product.categoryKey && !product.isParentProduct && (
          <span className="absolute top-3 left-3 bg-brand-gold/90 text-white text-xs font-medium px-2 py-0.5 rounded-full shadow-sm">
            {t(product.categoryKey)}
          </span>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow relative">
        <h3 className="font-playfair text-base font-medium text-brand-dark-text mb-2 transition-colors duration-300 group-hover:text-brand-gold lowercase first-letter:uppercase">
          {productName}
        </h3>
        
        {/* Optional: Short description or tagline if available and space allows */}
        {/* <p className="font-montserrat text-sm text-brand-brown mb-4 line-clamp-2">
          {product.shortDescriptionKey ? t(product.shortDescriptionKey) : ''}
        </p> */}
        
        <div className="mt-auto pt-3"> 
          <button
             onClick={() => onCardClick(product)}
             aria-label={ariaLabel}
             className="w-full bg-brand-gold text-white font-montserrat font-medium py-2.5 px-4 rounded-md inline-flex items-center justify-center text-sm transition-all duration-300 hover:bg-yellow-600 hover:shadow-md transform hover:-translate-y-0.5"
           >
             <span>
               {t(buttonTextKey)}
             </span>
             <ArrowRightIcon className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
           </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;