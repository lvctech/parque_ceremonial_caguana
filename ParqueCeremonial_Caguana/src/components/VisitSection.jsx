// src/components/VisitSection.jsx
export default function VisitSection({ language, translations }) {
  const t = translations[language];

  return (
    <section id="visita" className="py-16 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">{t.visit.title}</h2>
          
          {/* Basic Information Card */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-4 border-b border-green-200 pb-2">
                  {t.visit.location}
                </h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span>{t.visit.hours}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span>{t.visit.phone}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span>{t.visit.address}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-4 border-b border-green-200 pb-2">
                  {t.visit.admission.title}
                </h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-xs font-bold">$</span>
                    </div>
                    <span>{t.visit.admission.adults}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-xs font-bold">$</span>
                    </div>
                    <span>{t.visit.admission.children}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-xs font-bold">!</span>
                    </div>
                    <span className="font-medium">{t.visit.admission.cashOnly}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Facilities and Important Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-4 border-b border-green-200 pb-2">
                {t.visit.facilities.title}
              </h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span>{t.visit.facilities.museum}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span>{t.visit.facilities.accessibility}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span>{t.visit.facilities.restrooms}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span>{t.visit.facilities.duration}</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-4 border-b border-green-200 pb-2">
                {t.visit.importantNotes.title}
              </h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-xs font-bold">!</span>
                  </div>
                  <span>{t.visit.importantNotes.weatherRestrictions}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-xs font-bold">P</span>
                  </div>
                  <span>{t.visit.importantNotes.parking}</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Directions and Recommended Clothing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-4 border-b border-green-200 pb-2">
                {t.visit.directions.title}
              </h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <span>{t.visit.directions.fromArecibo}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <span>{t.visit.directions.turnRight}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <span>{t.visit.directions.entrance}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-xs font-bold">!</span>
                  </div>
                  <span>{t.visit.directions.roadCondition}</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-4 border-b border-green-200 pb-2">
                {t.visit.recommendedClothing.title}
              </h3>
              <p className="mb-3 text-left">{t.visit.recommendedClothing.intro}</p>
              <ul className="space-y-2 text-left mb-4 pl-4">
                {t.visit.recommendedClothing.items.map((item, index) => (
                  <li key={index} className="list-disc">{item}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 italic text-left">{t.visit.recommendedClothing.note}</p>
            </div>
          </div>
          
          {/* Eliminar el botón de reservar visita guiada */}
          {/* <div className="text-center">
            <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-lg transition-all hover:shadow-lg">
              {t.visit.bookTour}
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
