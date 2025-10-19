import React from 'react';
// Corrected: AwardCard expects AwardBase as it performs translation internally.
import { AwardBase } from '../types';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface AwardCardProps {
  // Corrected: Changed type from Award to AwardBase
  award: AwardBase; 
}

const AwardCard: React.FC<AwardCardProps> = ({ award }) => {
  const { t } = useLanguage();
  const title = t(award.titleKey);
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-lg text-center h-full flex flex-col items-center"
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <img src={award.iconUrl} alt={t('awards.iconAlt', { awardTitle: title })} className="w-16 h-16 mb-4 text-brand-gold object-contain" />
      <h3 className="font-playfair text-xl font-bold text-brand-dark-text mb-2">{title}</h3>
      <p className="font-montserrat text-sm text-brand-brown font-semibold mb-1">{t(award.competitionKey)}</p>
      <p className="font-montserrat text-sm text-brand-dark-text flex-grow">{t(award.descriptionKey)}</p>
    </motion.div>
  );
};

export default AwardCard;