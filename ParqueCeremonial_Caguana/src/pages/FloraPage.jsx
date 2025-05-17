// src/pages/FloraPage.jsx
import React from 'react';
import PlazaCard from '../components/PlazaCard.jsx';
import HeroSection from '../components/HeroSection.jsx';

export default function FloraPage({ language, translations }) {
  const t = translations[language];
  
  // Get all flora data from translations
  const flora = t.flora.items;
  
  return (
    <>
      <HeroSection 
        language={language} 
        translations={translations} 
        pageName="flora"
        showButtons={false}
      />
      <div id="flora" className="py-12 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flora.map((plant, index) => {
              // Detectar si es nativa o exótica
              let typeLabel = '';
              if (language === 'es') {
                typeLabel = plant.description.toLowerCase().includes('nativa')
                  ? 'Planta nativa'
                  : 'Planta exótica';
              } else {
                typeLabel = plant.description.toLowerCase().includes('native')
                  ? 'Native plant'
                  : 'Exotic plant';
              }
              return (
                <PlazaCard
                  key={index}
                  title={plant.title}
                  description={
                    <>
                      <span className="block font-bold mb-2">{typeLabel}</span>
                      {plant.description}
                    </>
                  }
                  imageUrl={plant.imageUrl}
                  altText={plant.altText}
                  language={language}
                  translations={translations}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
