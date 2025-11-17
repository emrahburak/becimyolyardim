// VerticalSlide.tsx
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper base CSS
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css'

import { Pagination, Autoplay } from 'swiper/modules';
import type { BannerData } from '@/types/type';

interface VerticalSlideProps {
  slideItems: BannerData[]
}

export default function VerticalSlide({ slideItems }: VerticalSlideProps) {
  return (
    <Swiper
      direction="vertical"
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 8000,            // Her slide başında 8 saniye bekleme
        disableOnInteraction: false // Kullanıcı manuel kaydırsa bile autoplay devam eder
      }}
      speed={1800}
      modules={[Pagination, Autoplay]}
      className="mySwiper h-auto max-h-[200px]  flex items-center justify-center "
    >
      {slideItems?.map((item) => (
        <SwiperSlide
          key={item.id}
          className=" bg-transparent "
        >
          <div className="px-8 sm:px-10 py-4 sm:py-6">
            <h2 className="font-semibold font-sans mb-2 text-center text-2xl sm:text-3xl md:text-4xl text-gray-700">{item.title}</h2>
            <p className="text-justify font-sans text-base sm:text-lg md:text-lg text-gray-700 leading-relaxed">{item.description}</p>
          </div>

        </SwiperSlide>
      ))}
    </Swiper>
  );
}




