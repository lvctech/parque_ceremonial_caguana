// src/components/PlazaCard.jsx
import React from 'react';

export default function PlazaCard({ title, description, imageUrl, altText, language, translations, imagePosition }) {
  const t = translations[language];
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className={`h-48 overflow-hidden ${imagePosition === "bottom" ? "flex items-end" : imagePosition === "top" ? "flex items-start" : ""}`}>
        <img 
          src={imageUrl || 'https://via.placeholder.com/400x300?text=Plaza+Indígena'} 
          alt={altText || title} 
          className="w-full h-full object-cover transition-all hover:scale-105"
          style={
            imagePosition === "top"
              ? { objectPosition: "top" }
              : imagePosition === "top"
                ? { objectPosition: "top" }
                : {}
          }
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
        {/* Mostrar descripción si existe */}
        {description && (
          <div className="mb-3 text-gray-700">{description}</div>
        )}
        <button className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-bold py-2 px-4 rounded-lg text-sm">
          {t.hero.learnMore}
        </button>
      </div>
    </div>
  );
}
