// 
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import styles from "./Carousel.module.css";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";

export default function Carousel({ data, Component, type }) {
  return (
    <div className={styles.Carousel}>
      <Swiper
        className={styles.swiper}
        initialSlide={0}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={"auto"}
        allowTouchMove
        navigation={true}
        onSlideChange={() => console.log("slide change")}
      >
        <CarouselLeftNavigation />
        {data.map((item) => (
          <SwiperSlide key={item.id}>{Component(item)}</SwiperSlide>
        ))}
        <CarouselRightNavigation />
      </Swiper>
    </div>
  );
}
