// src/App.jsx
import { useState } from 'react';
import MainLayout from './layouts/MainLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import { translations } from './i18n/translations.js';

export default function App() {
  const [language, setLanguage] = useState('es'); // 'es' para español, 'en' para inglés

  return (
    <MainLayout 
      language={language} 
      setLanguage={setLanguage} 
      translations={translations}
    >
      <HomePage language={language} translations={translations} />
    </MainLayout>
  );
}