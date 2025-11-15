"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

interface CarouselProps {
  images: { src: string; alt: string }[];
  autoplayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  
  /* Pagination dots styling for dark background */
  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.3) !important;
    opacity: 1 !important;
    width: 10px !important;
    height: 10px !important;
  }
  
  .swiper-pagination-bullet-active {
    background: rgb(253, 185, 19) !important;
    opacity: 1 !important;
  }
  
  /* Navigation arrows styling for dark background */
  .swiper-button-next,
  .swiper-button-prev {
    color: rgb(253, 185, 19) !important;
  }
  
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 24px;
  }
  `;
  return (
    <section className="w-full">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative mx-auto flex w-full flex-col">
          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                spaceBetween={50}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="size-full rounded-3xl overflow-hidden">
                      <Image
                        src={image.src}
                        width={500}
                        height={500}
                        className="size-full rounded-xl object-cover"
                        alt={image.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
