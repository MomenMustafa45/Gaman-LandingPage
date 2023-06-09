import React from "react";
import "swiper/swiper-bundle.css";
import "./top-creators.css";
import { Swiper, SwiperSlide } from "swiper/react";
import BackgroundShadow from "../../background-shadow/BackgroundShadow";
import CreatorCard from "../../creator-card/CreatorCard";

const TopCreators = () => {
  const { innerWidth: width } = window;

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
        slidesPerView={width > 990 ? 3 : 1}
        navigation
        pagination={{
          clickable: true,
          el: `swiper-container swiper-container-testClass`,
          bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
        }}
        wrapperTag="ul"
      >
        {/* HERE I'm gonna use arr.map() function for data array */}
        {/* HERE I'm gonna use arr.map() function for data array */}
        <SwiperSlide tag="li" key={1}>
          {
            <CreatorCard
              followers={5}
              earned={"$23,943,422"}
              creator="Jaweria"
            />
          }
        </SwiperSlide>
        <SwiperSlide tag="li" key={2}>
          {
            <CreatorCard
              followers={5}
              earned={"$23,943,422"}
              creator="Jaweria"
            />
          }
        </SwiperSlide>
        <SwiperSlide tag="li" key={3}>
          {
            <CreatorCard
              followers={5}
              earned={"$23,943,422"}
              creator="Jaweria"
            />
          }
        </SwiperSlide>
        <SwiperSlide tag="li" key={4}>
          {
            <CreatorCard
              followers={5}
              earned={"$23,943,422"}
              creator="Jaweria"
            />
          }
        </SwiperSlide>
        <SwiperSlide tag="li" key={5}>
          {
            <CreatorCard
              followers={5}
              earned={"$23,943,422"}
              creator="Jaweria"
            />
          }
        </SwiperSlide>
        <SwiperSlide tag="li" key={6}>
          {
            <CreatorCard
              followers={5}
              earned={"$23,943,422"}
              creator="Jaweria"
            />
          }
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TopCreators;
