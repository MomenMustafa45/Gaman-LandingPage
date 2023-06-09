import React from "react";
import "swiper/swiper-bundle.css";
import "./top-creators.css";
import { Swiper, SwiperSlide } from "swiper/react";
import BackgroundShadow from "../../background-shadow/BackgroundShadow";
import CreatorCard from "../../creator-card/CreatorCard";

const TopCreators = () => {
  return (
    <section className="creators-parent">
      {/* background color */}
      <BackgroundShadow top={"5%"} left={"80%"} />
      {/* background color */}
      <div className="creators-header">
        <h2>Get iNSPIRE WITH OUR TOP CREATORS ON THE PLATFORM</h2>
      </div>
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
          {<CreatorCard />}
        </SwiperSlide>
        <SwiperSlide tag="li" key={1}>
          {<CreatorCard />}
        </SwiperSlide>
        <SwiperSlide tag="li" key={1}>
          {<CreatorCard />}
        </SwiperSlide>
        <SwiperSlide tag="li" key={1}>
          {<CreatorCard />}
        </SwiperSlide>
        <SwiperSlide tag="li" key={1}>
          {<CreatorCard />}
        </SwiperSlide>
        <SwiperSlide tag="li" key={1}>
          {<CreatorCard />}
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TopCreators;
