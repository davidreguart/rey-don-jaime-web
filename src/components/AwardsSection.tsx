import React, { useState } from 'react';
import { AwardBase } from '../types'; // Use AwardBase for data, Award for rendered
import AwardCard from './AwardCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const awardsBaseData: AwardBase[] = [
  { 
    id: '1', 
    titleKey: 'awards.goldMedal.title', 
    competitionKey: 'awards.goldMedal.competition', 
    year: '2023', 
    descriptionKey: 'awards.goldMedal.description',
    iconUrl: 'https://picsum.photos/seed/goldmedal/64/64' 
  },
  { 
    id: '2', 
    titleKey: 'awards.bestEcological.title', 
    competitionKey: 'awards.bestEcological.competition', 
    year: '2022', 
    descriptionKey: 'awards.bestEcological.description',
    iconUrl: 'https://picsum.photos/seed/ecoproduct/64/64'
  },
  { 
    id: '3', 
    titleKey: 'awards.silverMedal.title', 
    competitionKey: 'awards.silverMedal.competition', 
    year: '2023', 
    descriptionKey: 'awards.silverMedal.description',
    iconUrl: 'https://picsum.photos/seed/silvermedal/64/64'
  },
];

const certificationsBaseData: AwardBase[] = [
    { 
    id: 'cert1', 
    titleKey: 'awards.certIFS.title', 
    competitionKey: 'awards.certIFS.competition', 
    year: 'Vigente', // Consider if 'Vigente' needs translation: 'Current' / 'Active' etc.
    descriptionKey: 'awards.certIFS.description',
    iconUrl: 'https://picsum.photos/seed/ifs/64/64'
  },
   { 
    id: 'cert2', 
    titleKey: 'awards.certCAECV.title', 
    competitionKey: 'awards.certCAECV.competition', 
    year: 'Vigente',
    descriptionKey: 'awards.certCAECV.description',
    iconUrl: 'https://picsum.photos/seed/caecv/64/64'
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const cardListVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const AwardsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'premios' | 'certificaciones'>('premios');

  const currentDataBase = activeTab === 'premios' ? awardsBaseData : certificationsBaseData;
  // currentData will be an array of AwardBase objects, as AwardCard handles its own translation.
  const currentData: AwardBase[] = currentDataBase.map(item => ({
      ...item,
  }));


  return (
    <motion.section 
      id="awards" 
      className="py-16 sm:py-24 bg-brand-light-green-bg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto"> {/* Constrain content width */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-brand-dark-text mb-3">
              {t('awards.title')}
            </h2>
            <p className="font-montserrat text-base sm:text-lg text-brand-brown max-w-2xl mx-auto">
              {t('awards.subtitle')}
            </p>
          </div>
          
          <div className="flex justify-center mb-8 sm:mb-12 space-x-2 sm:space-x-4">
            <motion.button
              onClick={() => setActiveTab('premios')}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-md font-montserrat font-semibold text-sm sm:text-base
                ${activeTab === 'premios' ? 'bg-brand-green text-white shadow-md' : 'bg-white text-brand-green hover:bg-gray-100'}`}
              whileHover={{ scale: activeTab === 'premios' ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {t('awards.tabAwards')}
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('certificaciones')}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-md font-montserrat font-semibold text-sm sm:text-base
                ${activeTab === 'certificaciones' ? 'bg-brand-green text-white shadow-md' : 'bg-white text-brand-green hover:bg-gray-100'}`}
              whileHover={{ scale: activeTab === 'certificaciones' ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {t('awards.tabCertifications')}
            </motion.button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={cardListVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              {currentData.map((item) => (
                // Corrected: Pass item directly. AwardCard now expects AwardBase, and item is AwardBase.
                <AwardCard key={item.id} award={item} /> 
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default AwardsSection;