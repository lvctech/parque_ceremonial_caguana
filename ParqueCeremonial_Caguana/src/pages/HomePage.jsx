// src/pages/HomePage.jsx
import HeroSection from '../components/HeroSection.jsx';
import FeaturedSection from '../components/FeaturedSection.jsx';
import VisitSection from '../components/VisitSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import QrCodeSection from '../components/QrCodeSection.jsx';

export default function HomePage({ language, setLanguage, translations }) {
  return (
    <>
      <HeroSection key={language} language={language} setLanguage={setLanguage} translations={translations} />
      <FeaturedSection key={language} language={language} setLanguage={setLanguage} translations={translations} />
      <VisitSection key={language} language={language} setLanguage={setLanguage} translations={translations} />
      <AboutSection key={language} language={language} setLanguage={setLanguage} translations={translations} />
      <QrCodeSection key={language} language={language} setLanguage={setLanguage} translations={translations} />
    </>
  );
}