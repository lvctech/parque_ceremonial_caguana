import React, { useState } from 'react';
import MainLayout from '../MainLayout.jsx';

export default function SplitViewLayout({
  language,
  setLanguage,
  translations,
  title,
  description,
  mainImage,
  altText,
  thumbnails = [],
  children
}) {
  const [selectedImage, setSelectedImage] = useState(mainImage);

  return (
    <MainLayout language={language} setLanguage={setLanguage} translations={translations}>
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Columna izquierda: texto */}
          <div className="lg:w-1/2 w-full flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{title}</h1>
            <p className="text-gray-700 mb-6">{description}</p>
            {children}
          </div>
          {/* Columna derecha: imagen principal y galería */}
          <div className="lg:w-1/2 w-full flex flex-col items-center">
            <div className="w-full rounded-lg overflow-hidden shadow-md mb-4 bg-white">
              <img
                src={selectedImage}
                alt={altText}
                className="w-full h-80 object-cover"
              />
            </div>
            {thumbnails.length > 0 && (
              <div className="flex gap-3 flex-wrap justify-center">
                {thumbnails.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(thumb.image)}
                    className={`border-2 rounded-md overflow-hidden focus:outline-none transition-all
                      ${selectedImage === thumb.image ? 'border-green-700' : 'border-transparent'}`}
                    aria-label={thumb.alt}
                  >
                    <img
                      src={thumb.image}
                      alt={thumb.alt}
                      className="w-20 h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}