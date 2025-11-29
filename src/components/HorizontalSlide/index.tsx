import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


import type { BannerData } from '@/types/type';

interface HorizontalSlideProps {
  slideItems: BannerData[]
}

export default function HorizontalSlide({ slideItems }: HorizontalSlideProps) {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination, Autoplay]}
      loop={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false
      }}
      className="mySwiperHorizontal w-full min-h-[200px] mt-28"
    >
      {slideItems?.map((item) => (
        <SwiperSlide key={item.id} className="bg-transparent py-4">
          <div className="px-4 ">
            <h2 className="font-bold font-sans mb-2 text-center text-2xl text-gray-700">
              {item.title}
            </h2>
            <p className="text-justify font-sans text-base text-gray-700 leading-relaxed">
              {item.description}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

