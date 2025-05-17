// src/components/AboutSection.jsx
export default function AboutSection({ language, translations }) {
  const t = translations[language];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            {/* Imagen del parque */}
            <img
              src="/src/assets/images/parque_indigena_caguana.jpg"
              alt="Parque Indígena Caguana"
              className="h-64 md:h-96 w-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">{t.about.title}</h2>
            <p className="text-gray-600 mb-6">{t.about.description}</p>
            <button className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-bold py-3 px-6 rounded-lg">
              {t.hero.learnMore}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}