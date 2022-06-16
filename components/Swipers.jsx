import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Button from "./Button";
import Title from "./Title";

export default function Swipers() {
  return (
    <>
      <section className="lg:px-36 md:px-20 px-5">
        <div className="container mx-auto mt-20  ">
          <div className="flex items-center justify-between mb-10">
            <Title>Interior & Exterior</Title>
            <Button variant="outline-blue" className="font-medium">
              Daftar Mitra
            </Button>
          </div>
          <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
