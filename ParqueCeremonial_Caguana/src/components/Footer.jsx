// src/components/Footer.jsx
export default function Footer({ language, translations }) {
  const t = translations[language];
  
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Parque Indígena Caguanas</h3>
            <p className="text-gray-300">{t.footer.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li><a href="#plazas" className="text-gray-300 hover:text-white">{t.nav.plazas}</a></li>
              <li><a href="#petroglifos" className="text-gray-300 hover:text-white">{t.nav.petroglifos}</a></li>
              <li><a href="#flora" className="text-gray-300 hover:text-white">{t.nav.flora}</a></li>
              <li><a href="#fauna" className="text-gray-300 hover:text-white">{t.nav.fauna}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.contact}</h3>
            <address className="not-italic text-gray-300">
              {t.visit.address}<br />
              {t.visit.phone}<br />
              <a href={`mailto:${t.footer.email}`} className="hover:text-white">{t.footer.email}</a>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-800 text-center text-gray-300">
          <p>© 2025 Parque Indígena Caguanas. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}