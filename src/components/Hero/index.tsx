import MechanicalGears from '@/assets/images/webp/hero-08.webp'
import BusinessPhoto from '@/assets/images/webp/becim-03.webp'
import VerticalSlide from '../VerticalSlide';
import type { BannerData, IContact } from '@/types/type';

import { Phone } from 'lucide-react';

import { formatPhone } from '@/utils/phoneUtil'


interface HeroProps {
  slideItems: BannerData[]
  contactItems: IContact
}

export default function Hero({ slideItems, contactItems }: HeroProps) {

  const { display, tel } = formatPhone(contactItems.phone90)
  return (
    <div
      id="hero"
      className="relative w-full min-h-[720px] flex flex-col lg:flex-row pt-[80px] lg:pt-0 "
    >
      {/* Sol taraf */}
      <div
        className="w-full lg:w-1/2 h-[360px] lg:h-[720px] bg-cover bg-center flex flex-col items-center justify-center"

        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${MechanicalGears})`,
        }}
      >
        <div className='px-4  w-full space-y-16'>
          <VerticalSlide slideItems={slideItems} />

          <div className="hidden lg:flex w-full items-center justify-evenly">
            <a className="bg-regal-red text-white px-4 py-2 font-semibold" href="#services">Daha Fazla Oku</a>
            <div className='inline-flex items-center gap-2 text-right'>
              <span className='bg-black rounded-full p-2  shadow-sm cursor-pointer'>
                <Phone className='text-white' fill="#ffffff" />
              </span>
              <a href={`tel:${tel}`}>{display}</a>
            </div>
          </div>
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
          {/* Mobil CTA — görsel içinde tam ortalanmış */}
          <div className="lg:hidden absolute inset-0 flex  items-center justify-evenly gap-4 px-4 text-center">
            <a className="bg-regal-red text-white px-4 py-2 font-semibold" href="#services">
              Daha Fazla Oku
            </a>

            <div className="inline-flex items-center gap-2">
              <span className="bg-white rounded-full p-2 shadow-sm cursor-pointer">
                <Phone className="text-black" fill="#00000" />
              </span>
              <a className="text-white" href={`tel:${tel}`}>{display}</a>
            </div>
          </div>
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




