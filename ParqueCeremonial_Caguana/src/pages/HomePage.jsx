// src/pages/HomePage.jsx
import HeroSection from '../components/HeroSection.jsx';
import FeaturedSection from '../components/FeaturedSection.jsx';
import VisitSection from '../components/VisitSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import QrCodeSection from '../components/QRCodeSection.jsx';

export default function HomePage({ language, setLanguage, translations }) {
  return (
    <>
      <HeroSection language={language} setLanguage={setLanguage} translations={translations} />
      <FeaturedSection language={language} setLanguage={setLanguage} translations={translations} />
      <VisitSection language={language} setLanguage={setLanguage} translations={translations} />
      <AboutSection language={language} setLanguage={setLanguage} translations={translations} />
      <QrCodeSection language={language} setLanguage={setLanguage} translations={translations} />
    </>
  );
}