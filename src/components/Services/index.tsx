import Card from "../Card";
import { Swiper, SwiperSlide } from 'swiper/react';

import MechanicalGears from '@/assets/images/webp/hero-08.webp'

// Import Swiper styles
import 'swiper/css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { FreeMode, Autoplay } from 'swiper/modules';

import { ServiceData } from "@/data/serviceData";
import { Crown } from 'lucide-react';




export default function Services() {

  const serviceData = ServiceData;

  return (
    <div id="services"
      className="w-full py-16  bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.90), rgba(255,255,255,0.90)), url(${MechanicalGears})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}

    >
      <div className="container mx-auto px-8  space-y-10 ">
        <div className="text-center">
          <div className='inline-flex items-center gap-2 ' >
            <Crown className='text-regal-red' />
            <h2 className="text-regal-red font-semibold font-sans">Hizmetlerimiz</h2>
          </div>
          <h1 className='font-semibold font-sans text-4xl text-regal-navy  text-center'>Neler Yapıyoruz</h1>
        </div>


        <Swiper
          spaceBetween={2}
          freeMode={true}
          loop={true}
          centeredSlides={true}

          autoplay={{
            delay: 2500,   // 2.5 saniye
            disableOnInteraction: false
          }}
          breakpoints={{
            0: { slidesPerView: 1 },      // sm ve altı
            640: { slidesPerView: 2 },    // sm
            1024: { slidesPerView: 4 }    // lg ve üstü (eski 4 değerin)
          }}
          modules={[FreeMode, Autoplay]}
        >
          {serviceData.map((service) => (
            <SwiperSlide >
              <div className="w-full flex justify-center items-center">
                <Card cardItem={service} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


    </div>
  )
}

