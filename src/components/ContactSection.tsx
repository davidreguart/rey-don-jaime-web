import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

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
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showErrors, setShowErrors] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    const requiredMessage = language === 'es' ? 'Por favor, completa este campo' : 'Please fill in this field';

    if (!formData.name.trim()) {
      newErrors.name = requiredMessage;
    }
    if (!formData.email.trim()) {
      newErrors.email = requiredMessage;
    }
    if (!formData.message.trim()) {
      newErrors.message = requiredMessage;
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowErrors(true);
    
    if (validateForm()) {
      const subject = `Consulta de ${formData.name} desde la web Rey Don Jaime`;
      const body = formData.message;
      const mailtoLink = `mailto:info@aceitesreydonjaime.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <section id="contact" className="py-20 bg-brand-footer-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="font-montserrat text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl bg-white p-8 sm:p-10 rounded-lg shadow-xl text-brand-dark-text"
          >
            <h3 className="font-playfair text-2xl font-bold mb-6">{t('contact.formTitle')}</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-brand-brown mb-1">
                  {t('contact.formLabelName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:border-brand-green focus:ring-brand-green/20 bg-white text-brand-dark-text ${
                    showErrors && errors.name ? 'border-red-500' : 'border-brand-gray-border'
                  }`}
                  placeholder={t('contact.formPlaceholderName')}
                />
                {showErrors && errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
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
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:border-brand-green focus:ring-brand-green/20 bg-white text-brand-dark-text ${
                    showErrors && errors.email ? 'border-red-500' : 'border-brand-gray-border'
                  }`}
                  placeholder={t('contact.formPlaceholderEmail')}
                />
                {showErrors && errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
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
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:border-brand-green focus:ring-brand-green/20 resize-none bg-white text-brand-dark-text ${
                    showErrors && errors.message ? 'border-red-500' : 'border-brand-gray-border'
                  }`}
                  placeholder={t('contact.formPlaceholderMessage')}
                ></textarea>
                {showErrors && errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 bg-brand-gold hover:bg-brand-gold-dark text-white hover:shadow-lg"
                >
                  Contactar
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;