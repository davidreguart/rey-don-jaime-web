import React, { useState, useEffect, useCallback } from 'react';
import { TestimonialBase } from '../types'; // Use TestimonialBase for data
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const testimonialsBaseData: TestimonialBase[] = [
  {
    id: '1',
    quoteKey: "testimonials.customer1.quote",
    authorKey: "testimonials.customer1.author",
    roleKey: "testimonials.customer1.role",
    avatarUrl: "https://picsum.photos/seed/javier/100/100"
  },
  {
    id: '2',
    quoteKey: "testimonials.customer2.quote",
    authorKey: "testimonials.customer2.author",
    roleKey: "testimonials.customer2.role",
    avatarUrl: "https://picsum.photos/seed/sofia/100/100"
  },
  {
    id: '3',
    quoteKey: "testimonials.customer3.quote",
    authorKey: "testimonials.customer3.author",
    roleKey: "testimonials.customer3.role",
    avatarUrl: "https://picsum.photos/seed/carlos/100/100"
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const testimonialContentVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0
  })
};


const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();
  const [[page, direction], setPage] = useState([0, 0]); 

  const testimonialsData = testimonialsBaseData.map(item => ({
      ...item,
      quote: t(item.quoteKey),
      author: t(item.authorKey),
      role: t(item.roleKey),
  }));

  const paginate = useCallback((newDirection: number) => {
    setPage(prev => {
        const newPage = (prev[0] + newDirection + testimonialsData.length) % testimonialsData.length;
        return [newPage, newDirection];
    });
  }, [testimonialsData.length]);


  useEffect(() => {
    const timer = setTimeout(() => {
      paginate(1); 
    }, 7000); 
    return () => clearTimeout(timer);
  }, [page, paginate]);

  const currentTestimonial = testimonialsData[page];

  return (
    <motion.section 
      className="py-16 sm:py-24 bg-brand-light-green-bg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto"> 
            <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-brand-dark-text mb-3">
                {t('testimonials.title')}
            </h2>
            <p className="font-montserrat text-base sm:text-lg text-brand-brown max-w-2xl mx-auto">
                {t('testimonials.subtitle')}
            </p>
            </div>

            <div className="relative max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-xl overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={page} 
                    custom={direction}
                    variants={testimonialContentVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.3 }
                    }}
                    className="relative z-10 text-center"
                >
                    <p className="font-montserrat text-lg sm:text-xl text-brand-dark-text mb-6 italic leading-relaxed min-h-[100px] sm:min-h-[120px]">
                        "{currentTestimonial.quote}"
                    </p>
                    {currentTestimonial.avatarUrl && (
                    <img 
                        src={currentTestimonial.avatarUrl} 
                        alt={t('testimonials.avatarAlt', { authorName: currentTestimonial.author })} 
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-4 shadow-md object-cover"
                    />
                    )}
                    <h4 className="font-playfair text-xl font-bold text-brand-dark-text">{currentTestimonial.author}</h4>
                    <p className="font-montserrat text-sm text-brand-brown">{currentTestimonial.role}</p>
                </motion.div>
            </AnimatePresence>


            {/* Navigation Arrows: Positioned absolutely within the relative parent */}
            <motion.button
                onClick={() => paginate(-1)}
                className="absolute top-1/2 left-1 sm:left-3 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md text-brand-dark-text z-20"
                aria-label={t('testimonials.prevAriaLabel')}
            >
                <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
            <motion.button
                onClick={() => paginate(1)}
                className="absolute top-1/2 right-1 sm:right-3 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md text-brand-dark-text z-20"
                aria-label={t('testimonials.nextAriaLabel')}
            >
                <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
            </div>
            
            {/* Dots Navigation */}
            <div className="flex justify-center mt-8 space-x-2.5">
            {testimonialsData.map((_, index) => (
                <motion.button
                key={index}
                onClick={() => setPage([index, index > page ? 1 : -1])}
                className={`w-3 h-3 rounded-full transition-colors
                    ${page === index ? 'bg-brand-gold' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={t('testimonials.goToAriaLabel', { testimonialNumber: index + 1 })}
                whileHover={{ scale: 1.2 }}
                />
            ))}
            </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;