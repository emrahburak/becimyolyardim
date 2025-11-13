import Image1 from '@/assets/images/webp/becim-01.webp'
import Image2 from '@/assets/images/webp/becim-05.webp'
import Image3 from '@/assets/images/webp/becim-02.webp'
import MechanicalGears from '@/assets/images/webp/hero-04.webp'

export default function AboutUs() {
  return (
    <section
      className="w-full py-24 flex flex-col lg:flex-row items-center justify-between gap-12 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.90), rgba(255,255,255,0.90)), url(${MechanicalGears})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Sol taraf: görseller */}
      <div className="relative flex-1 flex justify-center items-center px-6 lg:px-12">
        {/* Dikey dizilim (1 ve 3. görseller) */}
        <div className="flex flex-col gap-3">
          <div
            className="w-64 h-64 bg-cover bg-center  shadow-md"
            style={{ backgroundImage: `url(${Image1})` }}
          ></div>
          <div
            className="w-64 h-64 bg-cover bg-center  shadow-md"
            style={{ backgroundImage: `url(${Image3})` }}
          ></div>
        </div>

        {/* Ortadaki bindirilen (2. görsel) */}
        <div
          className="absolute z-10 w-64 h-64 bg-cover bg-center shadow-lg top-1/2 -translate-y-1/2"
          style={{
            backgroundImage: `url(${Image2})`,
            left: '60%',
            position: 'absolute',
          }}
        >
          {/* Kalın beyaz kenarlık efekti */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderLeft: '6px solid white',
              borderTop: '6px solid white',
              borderBottom: '6px solid white',
              boxSizing: 'border-box',
            }}>
          </div>
        </div>
      </div>

      {/* Sağ taraf: metin */}
      <div className="flex-1 space-y-6 px-6 lg:px-12 z-10">
        <h2 className="text-4xl font-semibold text-gray-900">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec justo sit amet lorem gravida tincidunt. Sed in mauris at purus aliquet gravida.
        </p>
        <button className="px-6 py-3 bg-regal-red text-white rounded-lg shadow hover:bg-red-700 transition">
          Learn More
        </button>
      </div>
    </section>
  )
}

