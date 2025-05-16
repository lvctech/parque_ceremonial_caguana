// src/components/HeroSection.jsx
export default function HeroSection({ language, translations }) {
  const t = translations[language];

  return (
    <section className="relative h-96 bg-cover bg-center" style={{ backgroundColor: '#2A7E43' }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{t.hero.title}</h1>
        <p className="text-xl text-white mb-8">{t.hero.subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg">
            {t.hero.explore}
          </button>
          <button className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-green-800">
            {t.hero.learnMore}
          </button>
        </div>
      </div>
    </section>
  );
}