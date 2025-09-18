import React, { useState } from 'react';
import { ContactInfoItemBase } from '../types'; // Use ContactInfoItemBase for data
import { LocationIcon } from './icons/LocationIcon';
import { EmailIcon } from './icons/EmailIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const contactInfoBase: ContactInfoItemBase[] = [
  { icon: <LocationIcon className="w-6 h-6 text-brand-gold" />, labelKey: 'contact.addressLabel', valueKey: 'contact.addressValue' },
  { icon: <EmailIcon className="w-6 h-6 text-brand-gold" />, labelKey: 'contact.emailLabel', valueKey: 'contact.emailValue', hrefKey: 'contact.emailHref' },
  { icon: <PhoneIcon className="w-6 h-6 text-brand-gold" />, labelKey: 'contact.phoneLabel', valueKey: 'contact.phoneValue', hrefKey: 'contact.phoneHref' },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const formVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = contactInfoBase.map(item => ({
      ...item,
      label: t(item.labelKey),
      value: t(item.valueKey),
      href: item.hrefKey ? t(item.hrefKey) : undefined
  }));

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? t('contact.form.errors.nameRequired') : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? t('contact.form.errors.emailInvalid') : '';
      case 'message':
        return value.length < 10 ? t('contact.form.errors.messageRequired') : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    // Real-time validation
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate all fields
    const newErrors: {[key: string]: string} = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-16 sm:py-24 bg-brand-footer-bg text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto"> {/* Constrain content width */}
            <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold mb-3">
                {t('contact.title')}
            </h2>
            <p className="font-montserrat text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                {t('contact.subtitle')}
            </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <motion.div className="lg:w-1/3 space-y-8" variants={itemVariants}>
                {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-brand-gold">{item.icon}</div>
                    <div className="ml-4">
                    <h4 className="font-playfair text-lg font-semibold text-gray-100">{item.label}</h4>
                    {item.href ? (
                        <a href={item.href} className="font-montserrat text-gray-300 hover:text-brand-gold transition-colors">{item.value}</a>
                    ) : (
                        <p className="font-montserrat text-gray-300">{item.value}</p>
                    )}
                    </div>
                </div>
                ))}
            </motion.div>

            <motion.div className="lg:w-2/3 bg-white p-8 sm:p-10 rounded-lg shadow-xl text-brand-dark-text" variants={formVariants}>
                <h3 className="font-playfair text-2xl font-bold mb-6">{t('contact.formTitle')}</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-brand-brown mb-1">
                    {t('contact.formLabelName')}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:ring-2 focus:ring-offset-2 bg-white text-brand-dark-text ${
                        errors.name 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                          : 'border-brand-gray-border focus:border-brand-green focus:ring-brand-green/20'
                      }`}
                      placeholder={t('contact.formPlaceholderName')}
                      required
                    />
                    {errors.name && (
                      <motion.p 
                        className="text-red-500 text-sm mt-1 flex items-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.name}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-brand-brown mb-1">
                    {t('contact.formLabelEmail')}
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:ring-2 focus:ring-offset-2 bg-white text-brand-dark-text ${
                        errors.email 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                          : 'border-brand-gray-border focus:border-brand-green focus:ring-brand-green/20'
                      }`}
                      placeholder={t('contact.formPlaceholderEmail')}
                      required
                    />
                    {errors.email && (
                      <motion.p 
                        className="text-red-500 text-sm mt-1 flex items-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-brand-brown mb-1">
                    {t('contact.formLabelMessage')}
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:ring-2 focus:ring-offset-2 resize-none bg-white text-brand-dark-text ${
                        errors.message 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                          : 'border-brand-gray-border focus:border-brand-green focus:ring-brand-green/20'
                      }`}
                      placeholder={t('contact.formPlaceholderMessage')}
                      required
                    ></textarea>
                    {errors.message && (
                      <motion.p 
                        className="text-red-500 text-sm mt-1 flex items-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.message}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-montserrat font-semibold py-4 px-6 rounded-lg transition-all duration-300 relative overflow-hidden ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-brand-green hover:bg-green-600 text-white'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('contact.formButtonSending')}
                      </div>
                    ) : (
                      t('contact.formButtonSubmit')
                    )}
                  </motion.button>
                  
                  {submitStatus === 'success' && (
                    <motion.div 
                      className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-700"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {t('contact.formSuccess')}
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div 
                      className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-700"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {t('contact.formError')}
                    </motion.div>
                  )}
                </motion.div>
                </form>
            </motion.div>
            </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;