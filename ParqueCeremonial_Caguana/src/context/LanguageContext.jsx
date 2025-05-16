import { createContext, useState, useContext } from 'react';
import esTranslations from '../i18n/es.json';
import enTranslations from '../i18n/en.json';

const translations = {
  es: esTranslations,
  en: enTranslations
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Español por defecto
  
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'es' ? 'en' : 'es');
  };
  
  const t = (key) => {
    const keys = key.split('.');
    let translation = translations[language];
    
    for (const k of keys) {
      if (!translation[k]) return key; // Si no existe la traducción, devolver la clave
      translation = translation[k];
    }
    
    return translation;
  };
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;