// src/pages/FaunaPage.jsx
import React from 'react';
import PlazaCard from '../components/PlazaCard.jsx';
import HeroSection from '../components/HeroSection.jsx';

export default function FaunaPage({ language, translations }) {
  const t = translations[language];
  
  // Get all fauna data from translations
  const fauna = t.fauna.items;
  
  return (
    <>
      <HeroSection 
        language={language} 
        translations={translations} 
        pageName="fauna"
        showButtons={false}
      />
      <div id="fauna" className="py-12 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {fauna.map((animal, index) => {
              // Detectar el tipo de animal (ave, reptil, anfibio)
              let typeLabel = '';
              if (language === 'es') {
                if (animal.description.toLowerCase().includes('ave')) {
                  typeLabel = 'Ave';
                } else if (animal.description.toLowerCase().includes('reptil')) {
                  typeLabel = 'Reptil';
                } else if (animal.description.toLowerCase().includes('anfibio')) {
                  typeLabel = 'Anfibio';
                }
              } else {
                if (animal.description.toLowerCase().includes('bird')) {
                  typeLabel = 'Bird';
                } else if (animal.description.toLowerCase().includes('reptile')) {
                  typeLabel = 'Reptile';
                } else if (animal.description.toLowerCase().includes('amphibian')) {
                  typeLabel = 'Amphibian';
                }
              }
              
              return (
                <PlazaCard
                  key={index}
                  title={animal.title}
                  description={
                    <>
                      <span className="block font-bold mb-2">{typeLabel}</span>
                      {animal.description}
                    </>
                  }
                  imageUrl={animal.imageUrl}
                  altText={animal.altText}
                  language={language}
                  translations={translations}
                  imagePosition="bottom" // <--- Añade esta línea
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
