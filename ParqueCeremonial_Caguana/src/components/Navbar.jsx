// src/components/Navbar.jsx
import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';

export default function Navbar({ language, setLanguage, translations }) {
  const t = translations[language].nav;

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo/Título */}
          <div className="flex items-center flex-shrink-0 mr-8">
            <a href="#" onClick={() => window.location.hash = ''} className="flex items-center group">
              <img
                src="/icons/mujer_caguana_logo.png"
                alt="Logo Mujer Caguana"
                className="h-10 w-10 mr-3 transition-transform group-hover:scale-105"
                style={{ objectFit: 'contain' }}
              />
              <span className="text-xl font-bold text-green-800">{t.titulo}</span>
            </a>
          </div>
          
          {/* Menú escritorio centrado */}
          <nav className="hidden md:flex flex-1 justify-center space-x-6">
            <a href="#plazas" className="text-gray-700 hover:text-green-600">{t.plazas}</a>
            <a href="#petroglifos" className="text-gray-700 hover:text-green-600">{t.petroglifos}</a>
            <a href="#flora" className="text-gray-700 hover:text-green-600">{t.flora}</a>
            <a href="#fauna" className="text-gray-700 hover:text-green-600">{t.fauna}</a>
          </nav>
          
          {/* Botones a la derecha */}
          <div className="flex items-center flex-shrink-0 ml-8">
            {/* Botón de cambio de idioma */}
            <button 
              onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center px-3 py-2 mr-4 border rounded text-green-800 border-green-800 hover:bg-green-800 hover:text-white"
            >
              <Globe size={18} className="mr-1" />
              <span>{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
            
            {/* Botón menú móvil */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-lg">
          <nav className="flex flex-col space-y-3">
            <a href="#plazas" className="text-gray-700 hover:text-green-600 py-2">{t.plazas}</a>
            <a href="#petroglifos" className="text-gray-700 hover:text-green-600 py-2">{t.petroglifos}</a>
            <a href="#flora" className="text-gray-700 hover:text-green-600 py-2">{t.flora}</a>
            <a href="#fauna" className="text-gray-700 hover:text-green-600 py-2">{t.fauna}</a>
            {/* <a href="#visita" className="text-gray-700 hover:text-green-600 py-2">{t.visitanos}</a> */}
          </nav>
        </div>
      )}
    </header>
  );
}