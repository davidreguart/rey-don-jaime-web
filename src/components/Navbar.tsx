import React, { useState, useRef, useEffect } from 'react';
import { NavItem } from '../types';
import { HamburgerIcon } from './icons/HamburgerIcon';
import { CloseIcon } from './icons/CloseIcon';
import { LanguageIcon } from './icons/LanguageIcon';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { availableLanguages } from '../translations';


const navLinkVariants = {
  hover: {
    color: '#D1A054', // brand-gold
    transition: { duration: 0.2 }
  }
};

const Navbar: React.FC = () => {
  const { t, setLanguage, language: currentLang } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { nameKey: 'navbar.home', href: '#' },
    { nameKey: 'navbar.ourOils', href: '#products' },
    { nameKey: 'navbar.production', href: '#process' },
    { nameKey: 'navbar.awards', href: '#awards' },
    { nameKey: 'navbar.aboutUs', href: '#history' },
    { nameKey: 'navbar.contact', href: '#contact' },
  ];

  const toggleLangDropdown = () => setIsLangDropdownOpen(!isLangDropdownOpen);

  const selectLanguage = (langCode: string) => {
    setLanguage(langCode);
    setIsLangDropdownOpen(false);
    setIsMobileMenuOpen(false); // Close mobile menu if lang selected from there
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
        : 'bg-brand-beige shadow-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <img 
              src="https://www.aceitesreydonjaime.com/rs/icono_reydonjaime.png" 
              alt={t('navbar.logoAlt')}
              className="h-12 w-12"
            />
            <div>
                <span className="font-playfair text-xl font-bold text-brand-dark-text">{t('navbar.logoTop')}</span>
                <p className="text-xs text-brand-brown -mt-1">{t('navbar.logoBottom')}</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navItems.map((item) => (
              <motion.a
                key={item.nameKey}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = item.href.replace('#', '');
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                  } else if (item.href === '#') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="font-montserrat text-sm font-medium text-brand-dark-text cursor-pointer"
                variants={navLinkVariants}
                whileHover="hover"
              >
                {t(item.nameKey)}
              </motion.a>
            ))}
             {/* Language Selector Desktop */}
            <div className="relative ml-10" ref={langDropdownRef}> {/* Increased margin-left here */}
                <motion.button
                onClick={toggleLangDropdown}
                className="flex items-center bg-brand-green text-white px-4 py-2 rounded-md shadow-sm" // Added bg, text, padding, rounded
                whileHover={{ filter: "brightness(0.9)" }} // Adjusted hover
                whileTap={{ scale: 0.95 }}
                aria-label={t('navbar.languageSelectorAriaLabel')}
                aria-haspopup="true"
                aria-expanded={isLangDropdownOpen}
                >
                <LanguageIcon className="w-5 h-5 text-white" /> {/* Ensured icon is white */}
                <span className="ml-2 text-sm font-medium">{availableLanguages.find(l => l.code === currentLang)?.name.substring(0,3).toUpperCase() || currentLang.toUpperCase()}</span>
                <ChevronDownIcon className={`w-4 h-4 ml-1.5 transform transition-transform duration-200 text-white ${isLangDropdownOpen ? 'rotate-180' : ''}`} /> {/* Ensured icon is white */}
                </motion.button>
                <AnimatePresence>
                {isLangDropdownOpen && (
                    <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5"
                    >
                    {availableLanguages.map((lang) => (
                        <button
                        key={lang.code}
                        onClick={() => selectLanguage(lang.code)}
                        className={`block w-full text-left px-4 py-2 text-sm font-montserrat 
                                        ${currentLang === lang.code ? 'bg-brand-light-green-bg text-brand-green font-semibold' : 'text-brand-dark-text hover:bg-gray-100'}`}
                        >
                        {lang.name}
                        </button>
                    ))}
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-dark-text hover:text-brand-gold p-2"
              aria-label={t('navbar.mobileMenuAriaLabel')}
            >
              {isMobileMenuOpen ? <CloseIcon className="h-6 w-6" /> : <HamburgerIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="lg:hidden absolute top-20 left-0 right-0 bg-brand-beige shadow-lg z-30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
              {navItems.map((item) => (
                <a
                  key={item.nameKey}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    const targetId = item.href.replace('#', '');
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: 'smooth' });
                    } else if (item.href === '#') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-brand-dark-text hover:bg-brand-light-gray hover:text-brand-gold transition-colors"
                >
                  {t(item.nameKey)}
                </a>
              ))}
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-gray-500 mb-1">{t('navbar.selectLanguage')}</p>
                {availableLanguages.map((lang) => (
                    <button
                    key={lang.code}
                    onClick={() => selectLanguage(lang.code)}
                    className={`block w-full text-left px-3 py-2 text-sm rounded-md
                                    ${currentLang === lang.code ? 'bg-brand-light-green-bg text-brand-green font-semibold' : 'text-brand-dark-text hover:bg-gray-100'}`}
                    >
                    {lang.name}
                    </button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;