import React from "react";
import "swiper/swiper-bundle.css";
import "./top-creators.css";
import { Swiper, SwiperSlide } from "swiper/react";

const TopCreators = () => {
  return (
    <section className="creators-parent">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{
          clickable: true,
          el: `swiper-container swiper-container-testClass`,
          bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
        }}
        wrapperTag="ul"
      >
        <SwiperSlide tag="li" key={1}>
          {<div>My Data</div>}
        </SwiperSlide>
        <SwiperSlide tag="li" key={1}>
          {<div>My Data</div>}
        </SwiperSlide>
        <SwiperSlide tag="li" key={1}>
          {<div>My Data</div>}
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TopCreators;
