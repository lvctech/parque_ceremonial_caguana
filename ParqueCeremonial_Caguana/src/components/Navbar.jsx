// src/components/Navbar.jsx
import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';

export default function Navbar({ language, setLanguage, translations }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-green-800">Parque Indígena Caguanas</h1>
          </div>
          
          {/* Menú escritorio */}
          <nav className="hidden md:flex space-x-6">
            <a href="#plazas" className="text-gray-700 hover:text-green-600">{t.nav.plazas}</a>
            <a href="#petroglifos" className="text-gray-700 hover:text-green-600">{t.nav.petroglifos}</a>
            <a href="#flora" className="text-gray-700 hover:text-green-600">{t.nav.flora}</a>
            <a href="#fauna" className="text-gray-700 hover:text-green-600">{t.nav.fauna}</a>
            <a href="#visita" className="text-gray-700 hover:text-green-600">{t.nav.visitanos}</a>
          </nav>
          
          <div className="flex items-center">
            {/* Botón de cambio de idioma */}
            <button 
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
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
            <a href="#plazas" className="text-gray-700 hover:text-green-600 py-2">{t.nav.plazas}</a>
            <a href="#petroglifos" className="text-gray-700 hover:text-green-600 py-2">{t.nav.petroglifos}</a>
            <a href="#flora" className="text-gray-700 hover:text-green-600 py-2">{t.nav.flora}</a>
            <a href="#fauna" className="text-gray-700 hover:text-green-600 py-2">{t.nav.fauna}</a>
            <a href="#visita" className="text-gray-700 hover:text-green-600 py-2">{t.nav.visitanos}</a>
          </nav>
        </div>
      )}
    </header>
  );
}