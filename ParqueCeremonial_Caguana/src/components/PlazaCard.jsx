// src/components/PlazaCard.jsx
import React from 'react';

export default function PlazaCard({ title, description, imageUrl, altText }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl || 'https://via.placeholder.com/400x300?text=Plaza+Indígena'} 
          alt={altText || title} 
          className="w-full h-full object-cover transition-all hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}
