import useFancybox from "@/utils/useFancybox";
// Resim importların gayet doğru
import gal1 from "@/assets/images/webp/becim-galery-01.webp";
import gal2 from "@/assets/images/webp/becim-galery-02.webp";
import gal3 from "@/assets/images/webp/becim-galery-03.webp";
import gal4 from "@/assets/images/webp/becim-galery-04.webp";
import gal5 from "@/assets/images/webp/becim-galery-05.webp";
import gal6 from "@/assets/images/webp/becim-galery-06.webp";
import gal7 from "@/assets/images/webp/becim-galery-07.webp";
import gal8 from "@/assets/images/webp/becim-galery-08.webp";

export default function Galery() {
  const rows = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8];

  // Hook'tan dönen ref'i alıyoruz
  const wrapperRef = useFancybox({});

  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Kurtarma Operasyonlarımız
        </h2>

        {/* CSS GRID YAPISI BURADA BAŞLIYOR */}
        {/* wrapperRef'i buraya veriyoruz ki Fancybox bu div'in içini dinlesin */}
        <div
          ref={wrapperRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {rows.map((item, index) => (
            <a
              key={index}
              href={item}
              data-fancybox="gallery" // Hepsi aynı grup olsun diye aynı isim
              data-caption={`Becim Oto Kurtarma - Çalışma ${index + 1}`}
              className="block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item}
                alt="becimotokurtarma.com"
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                loading="lazy" // Performans için lazy loading
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
