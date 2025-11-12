import MechanicalGears from '@/assets/images/webp/hero-06.webp'
import BusinessPhoto from '@/assets/images/webp/becim-03.webp'

export default function Hero() {
  return (
    <div className="relative w-full h-[720px] flex">
      {/* Sol taraf: mekanik çarklar */}
      <div
        className="w-1/2 h-full relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${MechanicalGears})`,
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute top-0 left-0 bottom-0 w-full h-full bg-transparent z-10 flex items-center justify-center">
          <div className="text-regal-black font-semibold">
            Ac, eu vestibulum penatibus arcu tempor ipsum id nunc ligula.
          </div>
        </div>
      </div>


      {/* Sağ taraf: işletme fotoğrafı, clip-path ile yamuk */}
      <div className="relative hidden lg:block w-1/2 h-full overflow-hidden">
        {/* Fotoğraf */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BusinessPhoto})`,
            clipPath: 'polygon(25% 0, 100% 0%, 100% 100%, 0 100%)',
          }}
        >
          {/* Kırmızı eğik overlay */}
          <div
            className="absolute bottom-0 left-0  w-1/2 h-1/2 bg-regal-red opacity-40"
            style={{
              clipPath: 'polygon(0 26%, 18% 0, 75% 100%, 36% 100%)',

            }}
          ></div>

        </div>

        {/* Kırmızı kenar efekti */}
        <div
          className="absolute top-0 left-0 h-full pointer-events-none"
          style={{
            width: '25%',
            background:
              'linear-gradient(to bottom right, transparent 49%, #ff0000 50%, transparent 51%)',
          }}
        ></div>
      </div>
    </div>
  )
}




