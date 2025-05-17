// src/pages/PetroglifosPage.jsx
import React from 'react';
import PlazaCard from '../components/PlazaCard.jsx';
import HeroSection from '../components/HeroSection.jsx';

export default function PetroglifosPage({ language, translations }) {
  const t = translations[language];
  
  // Get all petroglifos data from translations
  const petroglifos = t.petroglifos.items;
  
  return (
    <>
      <HeroSection 
        language={language} 
        translations={translations} 
        pageName="petroglifos"
        showButtons={false}
      />
      <div id="petroglifos" className="py-12 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {petroglifos.map((petroglifo, index) => (
              <PlazaCard
                key={index}
                title={petroglifo.title}
                description={petroglifo.description}
                imageUrl={petroglifo.imageUrl}
                altText={petroglifo.altText}
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
