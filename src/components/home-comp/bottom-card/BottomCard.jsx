import React from "react";
import "./bottom-card.css";
import imageArrow from "../../../images/rounded-arrow.png";
import imageArrowResponsive from "../../../images/rounded-arrow-responsive.png";
import imageStars from "../../../images/stars.png";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
const BottomCard = () => {
  return (
    <section className="btm-card-parent">
      <div className="left-side">
        <div className="img-stars-container">
          <img src={imageStars} alt="" />
        </div>
        <h1>
          Monetize & Engage <br /> Your{" "}
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            speed={2000}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            style={{ display: "inline-flex" }}
          >
            <SwiperSlide>FANS</SwiperSlide>
            <SwiperSlide>AUDIENCE</SwiperSlide>
            <SwiperSlide>COMMUNITY</SwiperSlide>
          </Swiper>
          <br />
          with Personalized Games
        </h1>
      </div>

      <div className="img-arrow-container">
        <img src={imageArrow} alt="this is arrow img" />
      </div>

      <div className="right-side">
        <p>#gamanforcreators</p>
        <Link to="/">Get Started with Gaman</Link>
      </div>

      {/* Arrows and stars Position absolute */}

      <div className="img-arrow-container-responsive">
        <img src={imageArrowResponsive} alt="this is arrow img" />
      </div>
      {/* Arrows and stars Position absolute */}
    </section>
  );
};

export default BottomCard;
