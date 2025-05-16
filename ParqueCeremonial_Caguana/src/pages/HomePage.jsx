// src/pages/HomePage.jsx
import HeroSection from '../components/HeroSection.jsx';
import FeaturedSection from '../components/FeaturedSection.jsx';
import VisitSection from '../components/VisitSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import QrCodeSection from '../components/QRCodeSection.jsx';

export default function HomePage({ language, translations }) {
  return (
    <>
      <HeroSection language={language} translations={translations} />
      <FeaturedSection language={language} translations={translations} />
      <VisitSection language={language} translations={translations} />
      <AboutSection language={language} translations={translations} />
      <QrCodeSection language={language} translations={translations} />
    </>
  );
}