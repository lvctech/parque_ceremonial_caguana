// src/App.jsx
import { useState, useEffect } from 'react';
import MainLayout from './layouts/MainLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import PlazasPage from './pages/PlazasPage.jsx';
import PetroglifosPage from './pages/PetroglifosPage.jsx';
import { translations } from './i18n/translations.js';

export default function App() {
  const [language, setLanguage] = useState('es'); // 'es' para español, 'en' para inglés
  const [currentPage, setCurrentPage] = useState('home');

  // Función para manejar cambios en el hash de la URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#plazas') {
        setCurrentPage('plazas');
      } else if (hash === '#petroglifos') {
        setCurrentPage('petroglifos');
      } else {
        setCurrentPage('home');
      }
    };

    // Verificar el hash inicial
    handleHashChange();

    // Agregar listener para cambios en el hash
    window.addEventListener('hashchange', handleHashChange);

    // Limpiar listener al desmontar
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Renderizar la página correspondiente
  const renderPage = () => {
    switch (currentPage) {
      case 'plazas':
        return <PlazasPage language={language} translations={translations} />;
      case 'petroglifos':
        return <PetroglifosPage language={language} translations={translations} />;
      default:
        return <HomePage language={language} translations={translations} />;
    }
  };

  return (
    <MainLayout 
      language={language} 
      setLanguage={setLanguage} 
      translations={translations}
    >
      {renderPage()}
    </MainLayout>
  );
}
