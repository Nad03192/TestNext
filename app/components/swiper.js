"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperComponent = ({ slides }) => {
  return (
    <div className="container mx-auto text-center px-4 pt-40 pb-40">
      <div className="relative flex items-center">
      
        <div className="swiper-button-prev absolute left-[-50px] z-20   text-white  rounded-full cursor-pointer">
          
        </div>
        <Swiper
  modules={[Pagination, Navigation]}
  spaceBetween={50}
  slidesPerView={3}
  pagination={{ clickable: true }}
  navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
  loop
  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  style={{ paddingBottom: '50px', margin: '50px', width: '100%' }}
 
>

          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[500px] md:h-[400px] lg:h-[500px] bg-gray-200 shadow-lg">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  style={{ objectFit: "cover" }}
                  
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4">
                  <h3 className="text-lg font-bold">{slide.title}</h3>
                  <p className="text-sm">{slide.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-next absolute right-[-50px] z-20  bg-opacity-50 text-white p-3 rounded-full cursor-pointer">
          
        </div>
      </div>
    </div>
  );
};

export default SwiperComponent;
