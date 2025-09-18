import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const imageVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};


const HistorySection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <motion.section 
      id="history" 
      className="py-16 sm:py-24 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto"> {/* Constrain content width */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <motion.div className="lg:w-1/2 text-center lg:text-left" variants={itemVariants}>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-brand-dark-text mb-6">
                {t('history.title')}
              </h2>
              <div className="space-y-4 font-montserrat text-brand-brown text-base sm:text-lg leading-relaxed">
                <p>
                  {t('history.paragraph1')}
                </p>
                <p>
                  {t('history.paragraph2')}
                </p>
              </div>
              <motion.a
                href="#contact" 
                className="mt-8 bg-brand-brown text-white font-montserrat font-semibold py-3 px-8 rounded-md text-lg inline-flex items-center group"
                whileHover={{ scale: 1.05, filter: "brightness(1.2)" }} // Slightly lighten dark brown
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {t('history.ctaKnowMore')}
                <ArrowRightIcon className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
            <motion.div className="lg:w-1/2" variants={imageVariants}>
              <img 
                src="https://www.aceitesreydonjaime.com/rs/pic_02.jpg" 
                alt={t('history.imageAlt')}
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HistorySection;