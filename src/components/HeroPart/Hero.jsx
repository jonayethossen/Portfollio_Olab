import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export default function Hero() {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2000",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000",
    },
  ];

  return (
    <section className="hero-container w-full h-[500px] md:h-[600px] relative">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img src={slide.image} alt={slide.title} loading="lazy" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
