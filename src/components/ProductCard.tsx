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
      onClick={() => onCardClick(product)}
    >
      {/* Imagen más grande que ocupa la mayor parte de la tarjeta */}
      <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60">
        <img 
          src={product.imageUrl || product.imagen} 
          alt={productName}
          loading="lazy" 
          decoding='async'
          className="w-full h-full object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = '/images/placeholders/placeholder-product.jpg';
          }}
        />


      </div>
      
      {/* Contenido más compacto */}
      <div className="p-3 flex flex-col flex-grow justify-between">
        {/* Nombre del producto centrado */}
        <h3 className="font-playfair text-sm sm:text-base font-semibold text-brand-dark-text mb-3 transition-colors duration-300 group-hover:text-brand-gold line-clamp-2 leading-tight text-center">
          {productName}
        </h3>
        
        {/* Botón en la parte inferior */}
        <button
           onClick={(e) => {
             e.stopPropagation();
             onCardClick(product);
           }}
           aria-label={ariaLabel}
           className="w-full bg-brand-green text-white font-montserrat font-medium py-2 px-3 rounded text-sm transition-all duration-300 hover:bg-green-700 hover:shadow-md transform hover:-translate-y-0.5"
         >
           <span className="block">
             Ver detalles
           </span>
         </button>
      </div>
    </div>
  );
};

export default ProductCard;