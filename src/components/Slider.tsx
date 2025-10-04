"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

import monugorasbhandar4 from "../../public/gorasBhandarcarousel4.png";
import monugorasbhandar5 from "../../public/gorasBhandarcarousel5.png";
import monugorasbhandar6 from "../../public/gorasBhandarcarousel6.png";
import monugorasbhandar7 from "../../public/gorasBhandarcarousel7.png";
import ContacuUsBanner from "../../public/contactUsBanner.png";

export default function Slider() {
  const carouselImages = [
    { image: monugorasbhandar5 },
    { image: monugorasbhandar4 },
    { image: monugorasbhandar6 },
    { image: monugorasbhandar7 },
    { image: ContacuUsBanner },
  ];

  return (
    <div className="md:mt-6 w-full max-w-6xl mx-auto px-2">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        loop
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-xl overflow-hidden"
      >
        {carouselImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[350px] md:h-[500px]">
              <Image
                src={item.image}
                alt={`Slide ${index}`}
                fill
                className="object-contain md:object-cover"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
