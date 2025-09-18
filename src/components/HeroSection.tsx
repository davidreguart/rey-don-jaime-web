import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 120, 
        damping: 15,
        duration: 0.6
      }
    },
  };

  const buttonVariants = {
    rest: { scale: 1, boxShadow: "0px 4px 15px rgba(0,0,0,0.1)" },
    hover: { 
      scale: 1.05, 
      boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.98 }
  };

  return (
    <section className="relative bg-hero-pattern bg-cover bg-center text-white py-32 sm:py-40 lg:py-56 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      <motion.div 
        className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight"
          variants={itemVariants}
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p 
          className="font-montserrat text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          {t('hero.subtitle')}
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          variants={itemVariants}
        >
          <motion.button 
            className="bg-brand-gold text-white font-montserrat font-semibold py-4 px-10 rounded-lg text-lg inline-flex items-center group relative overflow-hidden"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">{t('hero.ctaDiscoverOils')}</span>
            <ArrowRightIcon className="w-5 h-5 ml-2 relative z-10 transform transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </motion.button>
          <motion.button 
            className="bg-transparent border-2 border-white/80 text-white font-montserrat font-semibold py-4 px-10 rounded-lg text-lg hover:bg-white hover:text-brand-dark-text transition-all duration-300 backdrop-blur-sm"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.ctaOurProcess')}
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;