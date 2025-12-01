import { Helmet } from "react-helmet-async"; // veya 'react-helmet'

export default function Privacy() {
  const currentDate = new Date().toLocaleDateString("tr-TR");

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-10">
      {/* 1. SEO Ayarları: Bu sayfa Google'da çıkmayacak */}
      <Helmet>
        <title>Gizlilik Politikası ve Kullanım Koşulları - Becim Oto Kurtarma</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="Becim Oto Kurtarma gizlilik politikası ve yasal uyarılar." />
      </Helmet>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">
          Gizlilik Politikası ve Kullanım Koşulları
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          Son Güncelleme: {currentDate}
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Genel Bilgilendirme</h2>
            <p>
              Becim Oto Kurtarma ("Biz", "Sitemiz") olarak, web sitemizi ziyaret eden kullanıcılarımızın gizliliğine saygı duyuyoruz.
              Bu metin, <strong>becimotokurtarma.com</strong> üzerinden sunulan hizmetlerin kullanım şartlarını ve veri güvenliği politikalarını açıklamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Toplanan Veriler</h2>
            <p>
              Web sitemiz "Broşür/Bilgilendirme" amaçlıdır. Sitemizde kullanıcı kaydı, üyelik sistemi veya doğrudan kişisel veri (Ad, Soyad, TC Kimlik vb.) saklayan bir veritabanı <strong>bulunmamaktadır</strong>.
            </p>
            <p className="mt-2">
              Ancak, tüm web sitelerinde olduğu gibi; sitemizin barındırıldığı sunucular ve performans ölçüm araçları (Google Analytics vb.), ziyaretçilerin IP adreslerini, tarayıcı türlerini ve ziyaret sürelerini anonim olarak kaydedebilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. WhatsApp ve Üçüncü Taraf Bağlantılar</h2>
            <p>
              Sitemizde bulunan "WhatsApp İle İletişime Geç", "Hemen Ara" veya sosyal medya butonları, sizi üçüncü taraf uygulamalara yönlendirir.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-2">
              <p className="text-sm text-blue-700">
                <strong>Önemli:</strong> Butona tıkladığınız andan itibaren, ilgili uygulamanın (WhatsApp / Meta Inc.) gizlilik politikaları geçerli olur. Bu platformlardaki veri güvenliğinden Becim Oto Kurtarma sorumlu tutulamaz.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Hizmet ve Fiyat Politikası</h2>
            <p>
              Sitemizde yer alan görseller ve bilgiler tanıtım amaçlıdır. Oto kurtarma, çekici ve yol yardım hizmetlerinin fiyatları; mesafe, araç tipi ve yol durumuna göre anlık olarak değişiklik gösterebilir.
            </p>
            <p className="mt-2 font-medium">
              Bu nedenle, web sitesindeki bilgiler ile telefon görüşmesindeki teklifler arasında fark olması durumunda, telefonda teyit edilen güncel fiyat geçerlidir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Çerezler (Cookies)</h2>
            <p>
              Sitemiz, kullanıcı deneyimini iyileştirmek için standart çerez teknolojilerini kullanabilir. Tarayıcı ayarlarınızdan çerezleri dilediğiniz zaman engelleyebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. İletişim</h2>
            <p>
              Bu politika hakkında sorularınız veya hizmet talepleriniz için bizimle iletişime geçebilirsiniz.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
