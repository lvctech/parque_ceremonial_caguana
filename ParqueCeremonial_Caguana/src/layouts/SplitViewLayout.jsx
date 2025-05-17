// src/layouts/SplitViewLayout.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function SplitViewLayout({ 
  children, 
  language, 
  setLanguage, 
  translations, 
  title,
  description,
  mainImage,
  altText,
  thumbnails = [] 
}) {
  const [currentImage, setCurrentImage] = useState(mainImage);
  const [currentAltText, setCurrentAltText] = useState(altText);

  const handleThumbnailClick = (image, alt) => {
    setCurrentImage(image);
    setCurrentAltText(alt);
  };

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <Navbar language={language} setLanguage={setLanguage} translations={translations} />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-green-800 mb-6">{title}</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Columna izquierda - Texto descriptivo */}
            <div className="md:w-1/2">
              <div className="prose max-w-none">
                {description}
              </div>
              {children}
            </div>
            
            {/* Columna derecha - Imagen principal y galería de miniaturas */}
            <div className="md:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-md">
                {/* Imagen principal */}
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={currentImage} 
                    alt={currentAltText} 
                    className="w-full h-auto object-cover transition-all hover:scale-105"
                    style={{ maxHeight: '400px' }}
                  />
                </div>
                
                {/* Galería de miniaturas */}
                {thumbnails.length > 0 && (
                  <div className="grid grid-cols-4 gap-2">
                    {thumbnails.map((thumb, index) => (
                      <div 
                        key={index} 
                        className={`cursor-pointer overflow-hidden rounded-md border-2 ${currentImage === thumb.image ? 'border-green-700' : 'border-gray-200'}`}
                        onClick={() => handleThumbnailClick(thumb.image, thumb.alt)}
                      >
                        <img 
                          src={thumb.image} 
                          alt={thumb.alt} 
                          className="w-full h-16 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Botón para volver */}
          <div className="mt-8">
            <a 
              href="#plazas" 
              className="inline-block border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-bold py-2 px-4 rounded-lg text-sm"
            >
              {language === 'es' ? 'Volver a Plazas' : 'Back to Plazas'}
            </a>
          </div>
        </div>
      </main>
      <Footer language={language} translations={translations} />
    </div>
  );
}
