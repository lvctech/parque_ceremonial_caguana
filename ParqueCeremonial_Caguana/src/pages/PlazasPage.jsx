// src/pages/PlazasPage.jsx
import React from 'react';
import PlazaCard from '../components/PlazaCard.jsx';
import HeroSection from '../components/HeroSection.jsx';

export default function PlazasPage({ language, translations }) {
  const t = translations[language];
  
  // Get all plaza data from translations
  const plazas = t.plazas.items;
  
  return (
    <>
      <HeroSection 
        language={language} 
        translations={translations} 
        pageName="plazas"
        showButtons={false}
      />
      <div id="plazas" className="py-12 bg-stone-50">
        <div className="container mx-auto px-4">
          {/* Elimina o comenta las siguientes dos líneas */}
          {/* <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            {t.plazas.title}
          </h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            {t.plazas.description}
          </p> */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plazas.map((plaza, index) => (
              <PlazaCard
                key={index}
                title={plaza.title}
                description={plaza.description}
                imageUrl={plaza.imageUrl}
                altText={plaza.altText}
                language={language}
                translations={translations}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
