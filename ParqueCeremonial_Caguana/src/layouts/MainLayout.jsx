// src/layout/MainLayout.jsx
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function MainLayout({ language, setLanguage, translations, children }) {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <Navbar language={language} setLanguage={setLanguage} translations={translations} />
      <main>
        {children}
      </main>
      <Footer language={language} translations={translations} />
    </div>
  );
}