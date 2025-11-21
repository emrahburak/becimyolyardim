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
    <>
      <Swiper pagination={true} modules={[Pagination, Autoplay]} loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false
        }} className="mySwiperHorizontal h-full max-h-[260px]">

        {slideItems?.map((item) => (
          <SwiperSlide
            key={item.id}
            className=" bg-transparent "
          >
            <div className="px-8 sm:px-10 mt-12 lg:mt-8">
              <h2 className="font-bold font-sans mb-2 text-center text-2xl sm:text-3xl md:text-4xl text-gray-700 ">{item.title}</h2>
              <p className="text-justify font-sans text-base sm:text-lg md:text-lg text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

