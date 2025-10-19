import React, { useState } from 'react';
import { ProcessStep } from '../types';
import { PlayIcon } from './icons/PlayIcon';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const processStepsBaseData: Omit<ProcessStep, 'title' | 'description'>[] = [
  { id: 1, titleKey: 'process.step1.title', descriptionKey: 'process.step1.description', image: 'https://www.aceitesreydonjaime.com/rs/bg_home_02.jpg' },
  { id: 2, titleKey: 'process.step2.title', descriptionKey: 'process.step2.description', image: 'https://www.aceitesreydonjaime.com/rs/bg_home_03.jpg' },
  { id: 3, titleKey: 'process.step3.title', descriptionKey: 'process.step3.description', image: 'https://www.aceitesreydonjaime.com/rs/bg_home_04.jpg' },
  { id: 4, titleKey: 'process.step4.title', descriptionKey: 'process.step4.description', image: 'https://www.aceitesreydonjaime.com/rs/galeri_05.jpg' },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const contentVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.3, ease: "easeInOut" } }
};

const ProcessSection: React.FC = () => {
  const { t } = useLanguage();
  
  const processStepsData: ProcessStep[] = processStepsBaseData.map(step => ({
    ...step,
    title: t(step.titleKey),
    description: t(step.descriptionKey)
  }));

  const [activeStep, setActiveStep] = useState<ProcessStep>(processStepsData[0]); // Changed to index 0

  return (
    <motion.section 
      id="process" 
      className="py-16 sm:py-24 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto"> {/* Constrain content width */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-brand-dark-text mb-3">
              {t('process.title')}
            </h2>
            <p className="font-montserrat text-base sm:text-lg text-brand-brown max-w-3xl mx-auto">
              {t('process.subtitle')}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="lg:w-1/2 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id + "-image"}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative rounded-lg overflow-hidden shadow-xl group aspect-video"
                >
                  <img 
                    src={activeStep.image} 
                    alt={activeStep.title} // Title is already translated
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button 
                      className="bg-brand-gold bg-opacity-80 hover:bg-opacity-100 p-4 rounded-full text-white"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={t('process.playVideoAriaLabel', { stepTitle: activeStep.title })}
                    >
                      <PlayIcon className="w-10 h-10" />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeStep.id + "-desc"}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="mt-6 p-6 bg-brand-brown text-white rounded-lg shadow-md"
                >
                  <h3 className="font-playfair text-2xl font-bold mb-2">{activeStep.id}. {activeStep.title}</h3>
                  <p className="font-montserrat text-gray-300">{activeStep.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="lg:w-1/2 w-full space-y-3">
              {processStepsData.map((step) => (
                <motion.button
                  key={step.id}
                  onClick={() => setActiveStep(step)}
                  className={`w-full text-left p-4 sm:p-6 rounded-lg transition-all duration-300 ease-in-out shadow-sm
                    ${activeStep.id === step.id 
                      ? 'bg-brand-green text-white ring-2 ring-brand-dark-green-bg' 
                      : 'bg-brand-light-green-bg text-brand-dark-text hover:bg-gray-200'
                    }`}
                  whileHover={{ scale: activeStep.id === step.id ? 1 : 1.02, y: activeStep.id === step.id ? 0 : -2 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={t('process.selectStepAriaLabel', { stepTitle: step.title })}
                >
                  <div className="flex items-center">
                    <span className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-4 font-bold text-sm sm:text-base transition-colors
                      ${activeStep.id === step.id ? 'bg-white text-brand-green' : 'bg-brand-green text-white'}`}>
                      {step.id}
                    </span>
                    <div>
                      <h4 className="font-playfair text-lg sm:text-xl font-semibold">{step.title}</h4>
                      {activeStep.id === step.id && (
                         <p className="font-montserrat text-xs sm:text-sm mt-1 opacity-90 hidden sm:block">{step.description}</p>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProcessSection;