import React, { createContext, useState, useContext, useCallback, ReactNode } from 'react';
import { translations, defaultLanguage } from '../translations'; // Adjust path as needed

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, replacements?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setCurrentLanguage] = useState<string>(() => {
    // You could add logic here to get language from localStorage or browser settings
    return defaultLanguage;
  });

  const setLanguage = (lang: string) => {
    if (translations[lang]) {
      setCurrentLanguage(lang);
      document.documentElement.lang = lang; // Update HTML lang attribute for SEO/Accessibility
    } else {
      console.warn(`Language '${lang}' not found. Defaulting to '${defaultLanguage}'.`);
      setCurrentLanguage(defaultLanguage);
      document.documentElement.lang = defaultLanguage;
    }
  };

  const t = useCallback((key: string, replacements: Record<string, string | number> = {}): string => {
    const langTranslations = translations[language] || translations[defaultLanguage];
    let text = langTranslations[key] || key; // Fallback to key if not found

    // Basic replacement logic (e.g., t('greeting', { name: 'User' }))
    Object.keys(replacements).forEach(rKey => {
      const regex = new RegExp(`{{${rKey}}}`, 'g');
      text = text.replace(regex, String(replacements[rKey]));
    });
    
    if (text === key && langTranslations !== translations[defaultLanguage] && translations[defaultLanguage][key]) {
        // Fallback to default language if key not in current language but in default
        text = translations[defaultLanguage][key];
        Object.keys(replacements).forEach(rKey => {
            const regex = new RegExp(`{{${rKey}}}`, 'g');
            text = text.replace(regex, String(replacements[rKey]));
        });
    }


    return text;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
