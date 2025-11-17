import MechanicalGears from '@/assets/images/webp/hero-08.webp'
import BusinessPhoto from '@/assets/images/webp/becim-03.webp'
import VerticalSlide from '../VerticalSlide';
import type { BannerData } from '@/types/type';


interface HeroProps {
  slideItems: BannerData[]
}

export default function Hero({ slideItems }: HeroProps) {
  return (
    <div
      id="hero"
      className="relative w-full min-h-[720px] flex flex-col lg:flex-row pt-[80px] lg:pt-0 "
    >
      {/* Sol taraf */}
      <div
        className="w-full lg:w-1/2 h-[360px] lg:h-[720px] bg-cover bg-center flex items-center justify-center"

        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${MechanicalGears})`,
        }}
      >
        <div className='px-4'>
          <VerticalSlide slideItems={slideItems} />
        </div>
      </div>

      {/* Sağ taraf */}
      <div className="relative w-full lg:w-1/2 h-[360px] lg:h-[720px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center hero-image"
          style={{
            backgroundImage: `url(${BusinessPhoto})`,
          }}
        >
          {/* Overlay */}
          <div className="hidden lg:block absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-600 opacity-40 hero-overlay" />
        </div>

        {/* Kenar efekti */}
        <div className="hidden lg:block absolute top-0 left-0 h-full w-1/4 pointer-events-none hero-edge" />
      </div>

      {/* CSS */}
      <style>{`
        /* Desktop clip-path */
        @media (min-width: 1024px) {
          .hero-image {
            clip-path: polygon(25% 0, 100% 0%, 100% 100%, 0 100%);
          }

          .hero-overlay {
            clip-path: polygon(0 26%, 18% 0, 75% 100%, 36% 100%);
          }

          .hero-edge {
            background: linear-gradient(
              to bottom right,
              transparent 49%,
              #ff0000 50%,
              transparent 51%
            );
          }
        }
      `}</style>
    </div>
  );
}




