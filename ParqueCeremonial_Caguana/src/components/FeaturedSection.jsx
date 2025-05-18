// src/components/FeaturedSection.jsx
export default function FeaturedSection({ language, translations }) {
  const t = translations[language];

  return (
    <>
      <section id="featured" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t.featured.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plazas Indígenas */}
            <div className="bg-stone-100 rounded-lg overflow-hidden shadow-md">
              {/* Imagen para la carta de plazas ceremoniales */}
              <img
                src="/images/plazas_ceremoniales.jpg"
                alt="Plazas Ceremoniales"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{t.featured.plazaTitle}</h3>
                <p className="text-gray-600">{t.featured.plazaDesc}</p>
                <a
                  href={language === 'es' ? "#plazas" : "#plazas"}
                  className="inline-block mt-4 text-green-700 hover:text-green-900 font-medium"
                >
                  → {t.hero.learnMore}
                </a>
              </div>
            </div>
            
            {/* Petroglifos */}
            <div className="bg-stone-100 rounded-lg overflow-hidden shadow-md">
              {/* Imagen para la carta de petroglifos únicos */}
              <img
                src="/images/petroglifos.jpg"
                alt="Petroglifos Únicos"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{t.featured.petroTitle}</h3>
                <p className="text-gray-600">{t.featured.petroDesc}</p>
                <a
                  href={language === 'es' ? "#petroglifos" : "#petroglifos"}
                  className="inline-block mt-4 text-green-700 hover:text-green-900 font-medium"
                >
                  → {t.hero.learnMore}
                </a>
              </div>
            </div>
            
            {/* Flora */}
            <div className="bg-stone-100 rounded-lg overflow-hidden shadow-md">
              {/* Imagen para la carta de flora nativa y exótica */}
              <img
                src="/images/amapola.jpg"
                alt="Flora Nativa y Exótica"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{t.featured.floraTitle}</h3>
                <p className="text-gray-600">{t.featured.floraDesc}</p>
                <a
                  href={language === 'es' ? "#flora" : "#flora"}
                  className="inline-block mt-4 text-green-700 hover:text-green-900 font-medium"
                >
                  → {t.hero.learnMore}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección: Mapa del Parque Indígena de Caguana */}
      <section id="mapa-caguana" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
            {t.featured.mapTitle} {/* Usa la traducción aquí */}
          </h2>
          <div className="flex justify-center">
            <img
              src="/images/mapa_caguana.png"
              alt={t.featured.mapTitle} // Usa la traducción aquí
              className="rounded-lg shadow-lg max-w-full h-auto"
              style={{ maxHeight: '600px' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}