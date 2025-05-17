// src/components/HeroSection.jsx
import { useRef } from 'react';
import parqueCaguanaVideo from '../assets/videos/parque_caguana.mp4';

export default function HeroSection({ 
  language, 
  translations, 
  customTitle, 
  customSubtitle, 
  showButtons = true,
  pageName
}) {
  const t = translations[language];
  let title, subtitle;

  if (pageName && t[pageName]) {
    title = t[pageName].title;
    subtitle = t[pageName].description;
  } else {
    title = customTitle || t.hero.title;
    subtitle = customSubtitle || t.hero.subtitle;
  }

  const exploreBtnRef = useRef(null);
  const learnMoreBtnRef = useRef(null);

  const handleExploreClick = (e) => {
    const btn = exploreBtnRef.current;
    if (btn) {
      btn.classList.remove('pulse-on-click');
      void btn.offsetWidth;
      btn.classList.add('pulse-on-click');
    }
    const featured = document.getElementById('featured');
    if (featured) {
      e.preventDefault();
      featured.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMoreClick = (e) => {
    const btn = learnMoreBtnRef.current;
    if (btn) {
      btn.classList.remove('pulse-on-click');
      void btn.offsetWidth;
      btn.classList.add('pulse-on-click');
    }
    const about = document.getElementById('about');
    if (about) {
      e.preventDefault();
      about.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-96 bg-cover bg-center overflow-hidden" style={{ backgroundColor: '#2A7E43' }}>
      {/* Imagen de fondo dinámica según la página */}
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={
          pageName === "petroglifos"
            ? "/src/assets/images/img_hero_petroglifos.jpg"
            : pageName === "flora"
              ? "/src/assets/images/arbol_acasia_rosada.jpg"
              : "/src/assets/images/img_hero_caguana.jpg"
        }
        alt={
          pageName === "petroglifos"
            ? "Hero Petroglifos"
            : pageName === "flora"
              ? "Hero Flora"
              : "Hero Caguana"
        }
        style={{ opacity: 0.45 }}
      />
      {/* Capa de oscurecimiento extra */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 opacity-0 animate-fade-in-down"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          {title}
        </h1>
        <p
          className="text-xl text-white mb-8 opacity-0 animate-fade-in-down"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          {subtitle}
        </p>
        {showButtons && (
          <div
            className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <a
              ref={exploreBtnRef}
              href="#featured"
              onClick={handleExploreClick}
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105"
              style={{ display: 'inline-block' }}
            >
              {t.hero.explore}
            </a>
            <a
              ref={learnMoreBtnRef}
              href="#about"
              onClick={handleLearnMoreClick}
              className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-green-800 transition-transform duration-300 hover:scale-105"
              style={{ display: 'inline-block' }}
            >
              {t.hero.learnMore}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
