import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { QuizQuestion, ProductAnswers, Product } from '../types';
import Modal from './Modal';
// ProductCard is no longer directly used in the recommendation modal's main list.

interface OilFinderSectionProps {
  openProductModal: (product: Product) => void;
}

// Updated product data to match ProductsSection.tsx (sub-products are individual items for finder logic)
const allProductsForFinder: Product[] = [
  { 
    id: '1', nameKey: 'products.oilOliveExtraVirgin.name', categoryKey: 'products.categories.extraVirgin', 
    imageUrl: 'https://www.aceitesreydonjaime.com/rs/ReyDonJaime-VirgenExtra.jpg',
    descriptionKey: 'products.oilOliveExtraVirgin.description',
    intensity: 'intenso', idealUsage: ['general', 'salads'], attributes: []
  },
  { 
    id: '10', nameKey: 'products.oilOliveVirgin.name', categoryKey: 'products.categories.virgin', 
    imageUrl: 'https://www.aceitesreydonjaime.com/rs/ReyDonJaime-VirgenExtra.jpg',
    descriptionKey: 'products.oilOliveVirgin.description',
    intensity: 'medio', idealUsage: ['salads', 'general'], attributes: []
  },
  { 
    id: '11', nameKey: 'products.oilOliveIntense.name', categoryKey: 'products.categories.oliveOil', 
    imageUrl: 'https://www.aceitesreydonjaime.com/rs/ReyDonJaime-VirgenExtra.jpg',
    descriptionKey: 'products.oilOliveIntense.description',
    intensity: 'intenso', idealUsage: ['general', 'frying'], attributes: []
  },
  { 
    id: '12', nameKey: 'products.oilOliveMild.name', categoryKey: 'products.categories.oliveOil', 
    imageUrl: 'https://www.aceitesreydonjaime.com/rs/ReyDonJaime-VirgenExtra.jpg',
    descriptionKey: 'products.oilOliveMild.description',
    intensity: 'suave', idealUsage: ['general', 'baking'], attributes: []
  },
  { 
    id: '2', nameKey: 'products.oilPomace.name', categoryKey: 'products.categories.refined', 
    imageUrl: 'https://www.aceitesreydonjaime.com/rs/ReyDonJaime-Orujo.jpg',
    descriptionKey: 'products.oilPomace.description',
    intensity: 'medio', idealUsage: ['frying'], attributes: []
  },
  { 
    id: '3', nameKey: 'products.oilSunflowerRefined.name', categoryKey: 'products.categories.refined', 
    imageUrl: 'https://www.aceitesreydonjaime.com/rs/ReyDonJaime-Girasol.jpg',
    descriptionKey: 'products.oilSunflowerRefined.description',
    intensity: 'suave', idealUsage: ['baking', 'salads'], attributes: []
  },
  { 
    id: '4', nameKey: 'products.oilSunflowerHighOleic.name', categoryKey: 'products.categories.refined', 
    imageUrl: 'https://www.aceitesreydonjaime.com/rs/ReyDonJaime-GirasolOleico.jpg',
    descriptionKey: 'products.oilSunflowerHighOleic.description',
    intensity: 'suave', idealUsage: ['frying'], attributes: ['high_oleic']
  },
  { 
    id: '6', nameKey: 'products.oilSoyRefined.name', categoryKey: 'products.categories.refined', 
    imageUrl: 'https://www.aceitesreydonjaime.com/rs/ReyDonJaime-Soja.jpg',
    descriptionKey: 'products.oilSoyRefined.description',
    intensity: 'suave', idealUsage: ['salads'], attributes: ['omega3_6']
  },
  { 
    id: '8', nameKey: 'products.oilEcological.name', categoryKey: 'products.categories.ecological', 
    imageUrl: 'https://www.aceitesreydonjaime.com/rs/especial_02.jpg',
    descriptionKey: 'products.oilEcological.description',
    intensity: 'medio', idealUsage: ['general', 'salads'], attributes: ['organic']
  },
];


const quizQuestions: QuizQuestion[] = [
    {
        id: 'q1',
        questionKey: 'oilFinder.questionIntensity.title',
        answerProperty: 'intensity',
        options: [
            { value: 'suave', labelKey: 'oilFinder.intensity.suave' },
            { value: 'medio', labelKey: 'oilFinder.intensity.medio' },
            { value: 'intenso', labelKey: 'oilFinder.intensity.intenso' },
        ],
    },
    {
        id: 'q2',
        questionKey: 'oilFinder.questionUsage.title',
        answerProperty: 'usage',
        options: [
            { value: 'frying', labelKey: 'oilFinder.usage.frying' },
            { value: 'salads', labelKey: 'oilFinder.usage.salads' },
            { value: 'baking', labelKey: 'oilFinder.usage.baking' },
            { value: 'general', labelKey: 'oilFinder.usage.general' },
        ],
    },
    {
        id: 'q3',
        questionKey: 'oilFinder.questionAttribute.title',
        answerProperty: 'attribute',
        options: [
            { value: 'organic', labelKey: 'oilFinder.attribute.organic' },
            { value: 'high_oleic', labelKey: 'oilFinder.attribute.highOleic' },
            { value: 'omega3_6', labelKey: 'oilFinder.attribute.omega36' },
            { value: 'none', labelKey: 'oilFinder.attribute.none' },
        ],
    },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.15 }
  },
};

const formVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
};



const questionTransitionVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? '100%' : '-100%', opacity: 0 }),
};

const OilFinderSection: React.FC<OilFinderSectionProps> = ({ openProductModal }) => {
  const { t } = useLanguage();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<ProductAnswers>({});
  const [recommendedOils, setRecommendedOils] = useState<Product[]>([]);
  const [isRecommendationModalOpen, setIsRecommendationModalOpen] = useState(false);
  const [animationDirection, setAnimationDirection] = useState(1);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleOptionSelect = (answerProperty: keyof ProductAnswers, value: string) => {
    setAnswers(prev => ({ ...prev, [answerProperty]: value }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setAnimationDirection(1);
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const matches = allProductsForFinder.filter(product => {
        let score = 0;
        let criteriaCount = 0;

        if (answers.intensity && product.intensity) {
            criteriaCount++;
            if (product.intensity === answers.intensity) score++;
        }
        if (answers.usage && product.idealUsage) {
            criteriaCount++;
            if (product.idealUsage.includes(answers.usage)) score++;
        }
        if (answers.attribute && answers.attribute !== 'none' && product.attributes) {
            criteriaCount++;
            if (product.attributes.includes(answers.attribute)) score++;
        } else if (answers.attribute === 'none') {
            criteriaCount++; 
            score++; 
        }
        
        if (criteriaCount === 0 && !product.intensity && !product.idealUsage && !product.attributes) return true;
        if (criteriaCount === 0) return false; 
        return score >= Math.max(1, criteriaCount -1); 
      });
      setRecommendedOils(matches.length > 0 ? matches.slice(0, 3) : []); // Show top 3 matches
      setIsRecommendationModalOpen(true);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
        setAnimationDirection(-1);
        setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleViewRecommendedDetails = (product: Product) => {
    setIsRecommendationModalOpen(false); // Close recommendation modal
    openProductModal(product); // Open main product detail modal
  };

  const progress = ((currentQuestionIndex +1) / quizQuestions.length) * 100;

  return (
    <>
      <motion.section 
        id="oil-finder"
        className="py-16 sm:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-brand-dark-text mb-3">
                  {t('oilFinder.title')}
              </h2>
              <p className="font-montserrat text-base sm:text-lg text-brand-brown max-w-2xl mx-auto">
                  {t('oilFinder.subtitle')}
              </p>
            </div>

            <motion.div 
              className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-2xl overflow-hidden border border-gray-100 backdrop-blur-sm"
              variants={formVariants}
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)"
              }}
            >
              <div className="mb-8">
                <p className="text-sm text-brand-brown mb-1 text-right">
                    {t('oilFinder.progressText', { current: String(currentQuestionIndex + 1), total: String(quizQuestions.length) })}
                </p>
                <div className="bg-brand-light-gray h-2.5 rounded-full">
                    <motion.div 
                        className="bg-brand-green h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    ></motion.div> 
                </div>
              </div>
              
              <AnimatePresence mode="popLayout" custom={animationDirection}>
                <motion.fieldset
                    key={currentQuestion.id}
                    custom={animationDirection}
                    variants={questionTransitionVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
                >
                    <div className="mb-6">
                      <motion.legend 
                        className="font-playfair text-xl sm:text-2xl font-semibold text-brand-dark-text"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {t(currentQuestion.questionKey)}
                      </motion.legend>
                    </div>
                    <div className="space-y-4">
                        {currentQuestion.options.map((option, index) => (
                        <motion.label
                            key={option.value}
                            htmlFor={`${currentQuestion.id}-${option.value}`}
                            className={`flex items-center p-4 border-2 rounded-lg cursor-pointer group relative overflow-hidden
                            ${answers[currentQuestion.answerProperty] === option.value 
                                ? 'bg-brand-light-green-bg border-brand-green shadow-md ring-2 ring-brand-green' 
                                : 'bg-white border-brand-gray-border hover:border-brand-gold hover:bg-gradient-to-r hover:from-brand-beige hover:to-yellow-50'
                            }`}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.2, duration: 0.2 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 to-yellow-100/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            <input
                            type="radio"
                            id={`${currentQuestion.id}-${option.value}`}
                            name={currentQuestion.id}
                            value={option.value}
                            checked={answers[currentQuestion.answerProperty] === option.value}
                            onChange={() => handleOptionSelect(currentQuestion.answerProperty, option.value)}
                            className="form-radio h-5 w-5 text-brand-green focus:ring-brand-green mr-3 relative z-10"
                            />
                            <span className="font-montserrat text-brand-dark-text font-medium relative z-10">{t(option.labelKey)}</span>
                            <svg className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.label>
                        ))}
                    </div>
                </motion.fieldset>
              </AnimatePresence>

              {/* Progress Indicators */}
              <div className="flex justify-center mt-6 mb-6 space-x-2">
                {quizQuestions.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentQuestionIndex 
                        ? 'bg-brand-gold scale-125' 
                        : index < currentQuestionIndex 
                        ? 'bg-green-500' 
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <div className="flex justify-between items-center">
                {currentQuestionIndex > 0 && (
                  <motion.button
                      type="button"
                      onClick={handlePrevious}
                      className="bg-gray-200 text-brand-dark-text font-montserrat font-semibold py-3 px-8 rounded-lg text-lg flex items-center border-2 border-gray-200 hover:border-gray-400"
                      whileHover={{ scale: 1.05, backgroundColor: '#D1D5DB' }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.2 }}
                  >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      {t('oilFinder.buttonPrevious')}
                  </motion.button>
                )}
                <motion.button
                    type="button"
                    onClick={handleNext}
                    disabled={!answers[currentQuestion.answerProperty]}
                    className="bg-brand-green text-white font-montserrat font-semibold py-3 px-8 rounded-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed ml-auto flex items-center"
                    whileHover={{ scale: answers[currentQuestion.answerProperty] ? 1.05 : 1, filter: answers[currentQuestion.answerProperty] ? "brightness(0.9)" : "none" }}
                    whileTap={{ scale: answers[currentQuestion.answerProperty] ? 0.95 : 1 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.2 }}
                >
                    {currentQuestionIndex < quizQuestions.length - 1 ? t('oilFinder.buttonNext') : t('oilFinder.buttonFindOil')}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Modal
        isOpen={isRecommendationModalOpen}
        onClose={() => setIsRecommendationModalOpen(false)}
        title={t('oilFinder.results.title')}
        size="3xl" // Potentially wider modal for recommendations
      >
        {recommendedOils.length > 0 ? (
          <div className="space-y-6">
            <p className="text-brand-dark-text text-lg">{t('oilFinder.results.youMightLike')}</p>
            <ul className="space-y-4">
              {recommendedOils.map(oil => (
                <li key={oil.id} className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <img 
                      src={oil.imageUrl} 
                      alt={t(oil.nameKey)} 
                      className="w-20 h-20 object-contain rounded-md mr-4 flex-shrink-0"
                  />
                  <div className="flex-grow">
                    <h4 className="font-playfair text-lg font-semibold text-brand-dark-text">{t(oil.nameKey)}</h4>
                    {oil.categoryKey && (
                      <p className="text-sm text-brand-brown">{t(oil.categoryKey)}</p>
                    )}
                  </div>
                  <motion.button
                    onClick={() => handleViewRecommendedDetails(oil)}
                    className="ml-4 bg-brand-gold text-white font-montserrat font-semibold py-2 px-4 rounded-md text-sm whitespace-nowrap"
                    whileHover={{ scale: 1.05, filter: "brightness(0.9)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('oilFinder.results.viewDetailsButton')}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-brand-dark-text text-lg">{t('oilFinder.results.noMatch')}</p>
        )}
      </Modal>
    </>
  );
};

export default OilFinderSection;