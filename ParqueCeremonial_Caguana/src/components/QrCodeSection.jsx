// src/components/QrCodeSection.jsx
export default function QrCodeSection({ language, translations }) {
  const t = translations[language];

  return (
    <section className="py-16 bg-stone-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">QR Codes</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <div className="h-48 bg-white p-4 flex items-center justify-center shadow-md rounded-lg">
              {/* Imagen del código QR */}
              <img
                src="/src/assets/images/qr_code.png"
                alt="Código QR del Parque Ceremonial Caguana"
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-left">
            <h3 className="text-xl font-bold mb-4 text-gray-800">{t.qrcode.title}</h3>
            <p className="text-gray-600 mb-4">{t.qrcode.description}</p>
            <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg">
              {t.qrcode.howItWorks}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}