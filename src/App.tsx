import WhatsupField from "./components/watsup";
import { ContactData } from "./data/contact";

export default function App() {
  const contactData = ContactData;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-4 py-8 space-y-8">
      <img
        src="/logo.png"
        alt="Becim Yol Yardım"
        className="w-32 sm:w-40 md:w-48 h-auto"
      />

      <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight">
        Yeni Sitemiz Yapım Aşamasındadır
      </h1>

      <div className="space-y-3">
        <h3 className="text-lg sm:text-2xl md:text-3xl font-medium">
          <a href={`tel:${contactData.phone}`} className="hover:text-yellow-400 transition-colors">
            +90 531 932 64 23
          </a>
        </h3>
        <h3 className="text-lg sm:text-2xl md:text-3xl font-medium">
          <a href="mailto:info@becimyolyardim.com.tr" className="hover:text-yellow-400 transition-colors">
            info@becimyolyardim.com.tr
          </a>
        </h3>
      </div>

      <div className="mt-6">
        <WhatsupField />
      </div>
    </div>
  );
}

