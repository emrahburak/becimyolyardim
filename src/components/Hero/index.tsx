import MechanicalGears from '@/assets/images/webp/hero-06.webp'
import BusinessPhoto from '@/assets/images/webp/becim-03.webp'

export default function Hero() {
  return (
    <div className="relative w-full h-[720px] flex">
      {/* Sol taraf: mekanik çarklar */}
      <div
        className="w-1/2 h-full relative bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `url(${MechanicalGears})`,
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200 opacity-10 "></div>
      </div>

      {/* Sağ taraf: işletme fotoğrafı, clip-path ile yamuk */}
      <div
        className="hidden lg:block w-1/2 h-full bg-cover bg-center "
        style={{
          backgroundImage: `url(${BusinessPhoto})`,
          clipPath: 'polygon(25% 0, 100% 0%, 100% 100%, 0 100%)'
        }}
      >
        {/* İstersen overlay ekleyebilirsin */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200 opacity-10  "></div>
      </div>
    </div>
  )
}
