// src/pages/PlazaCentralAPage.jsx
import React from 'react';
import SplitViewLayout from '../components/layouts/SplitViewLayout.jsx';

export default function PlazaCentralAPage({ language, setLanguage, translations }) {
  const t = translations[language].plazaCentralA;
  
  // Thumbnails for the gallery
  const thumbnails = [
    {
      image: '/src/assets/images/plaza_a.jpg',
      alt: t.imageAlt
    },
    {
      image: '/src/assets/images/batey_b.jpg',
      alt: language === 'es' ? 'Monolitos de piedra en la Plaza Central' : 'Stone monoliths in the Central Plaza'
    },
    {
      image: '/src/assets/images/batey_c.jpg',
      alt: language === 'es' ? 'Área ceremonial de la Plaza Central' : 'Ceremonial area of the Central Plaza'
    },
    {
      image: '/src/assets/images/batey_e.jpg',
      alt: language === 'es' ? 'Petroglifos en la Plaza Central' : 'Petroglyphs in the Central Plaza'
    }
  ];
  
  return (
    <SplitViewLayout
      language={language}
      setLanguage={setLanguage}
      translations={translations}
      title={t.title}
      description={t.description}
      mainImage={'/src/assets/images/plaza_a.jpg'}
      altText={t.imageAlt}
      thumbnails={thumbnails}
    >
      {/* Contenido adicional si es necesario */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          {language === 'es' ? 'Características principales' : 'Main features'}
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {t.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          {language === 'es' ? 'Importancia cultural' : 'Cultural importance'}
        </h3>
        <p className="text-gray-700">
          {t.culturalImportance}
        </p>
      </div>
    </SplitViewLayout>
  );
}
