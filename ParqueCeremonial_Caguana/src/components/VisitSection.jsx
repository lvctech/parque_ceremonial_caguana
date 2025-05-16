// src/components/VisitSection.jsx
export default function VisitSection({ language, translations }) {
  const t = translations[language];

  return (
    <section id="visita" className="py-16 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">{t.visit.title}</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <ul className="space-y-4 text-left">
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center mr-3">
                  <span className="text-xs font-bold">1</span>
                </div>
                <span>{t.visit.hours}</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center mr-3">
                  <span className="text-xs font-bold">2</span>
                </div>
                <span>{t.visit.price}</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center mr-3">
                  <span className="text-xs font-bold">3</span>
                </div>
                <span>{t.visit.address}</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center mr-3">
                  <span className="text-xs font-bold">4</span>
                </div>
                <span>{t.visit.phone}</span>
              </li>
            </ul>
          </div>
          
          <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-lg">
            {t.visit.bookTour}
          </button>
        </div>
      </div>
    </section>
  );
}