// src/components/FeaturedSection.jsx
export default function FeaturedSection({ language, translations }) {
  const t = translations[language];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t.featured.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plazas Indígenas */}
          <div className="bg-stone-100 rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-gray-300"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{t.featured.plazaTitle}</h3>
              <p className="text-gray-600">{t.featured.plazaDesc}</p>
              <a href="#plazas" className="inline-block mt-4 text-green-700 hover:text-green-900 font-medium">→ {t.hero.learnMore}</a>
            </div>
          </div>
          
          {/* Petroglifos */}
          <div className="bg-stone-100 rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-gray-300"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{t.featured.petroTitle}</h3>
              <p className="text-gray-600">{t.featured.petroDesc}</p>
              <a href="#petroglifos" className="inline-block mt-4 text-green-700 hover:text-green-900 font-medium">→ {t.hero.learnMore}</a>
            </div>
          </div>
          
          {/* Flora */}
          <div className="bg-stone-100 rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-gray-300"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{t.featured.floraTitle}</h3>
              <p className="text-gray-600">{t.featured.floraDesc}</p>
              <a href="#flora" className="inline-block mt-4 text-green-700 hover:text-green-900 font-medium">→ {t.hero.learnMore}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}