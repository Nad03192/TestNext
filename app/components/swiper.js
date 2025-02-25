"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperComponent = ({ slides }) => {
  return (
    <div>
    <style jsx>{`
      @media (max-width: 767px) {
        .swiper-button-prev,
        .swiper-button-next {
          display: none !important;
        }
          
      }
    `}</style>
    <div className="container mx-auto text-center px-4 pt-20 pb-20">
      <div className="relative flex items-center w-full ">
      
        <div className="swiper-button-prev absolute left-[-50px] z-20  md-hidden  text-white  rounded-full cursor-pointer">
          
        </div>
        <div className="w-full px-0  lg:px-20 ">
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
    style={{ paddingBottom: '50px',}}
    className="w-full "
  >

          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[500px] md:h-[400px] lg:h-[500px] bg-gray-200 shadow-lg">
                <Image 
                  src={slide.image}
                  alt={slide.title}
                  fill
                  style={{ objectFit: "cover" }}
                    className="w-full "
                  
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4">
                  <h3 className="text-lg font-bold">{slide.title}</h3>
                  <p className="text-sm">{slide.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>

        <div className="swiper-button-next absolute right-[-50px] z-20  bg-opacity-50 text-white p-3 rounded-full cursor-pointer">
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default SwiperComponent;
