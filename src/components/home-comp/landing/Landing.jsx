import "./landing.css";
import "swiper/css";
import BackgroundShadow from "../../background-shadow/BackgroundShadow";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import image from "../../../images/landing-main-photo.png";
import imageIcon from "../../../images/landing-small-photo.png";

const Landing = () => {
  return (
    <section className="landing-parent">
      <BackgroundShadow top={0} left={"-24px"} />
      <BackgroundShadow top={"400px"} left={"712px"} />

      <div className="landing-text-container">
        <h1>
          Monetize & Engage Your{" "}
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
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
          </Swiper>{" "}
          with Personalized Games
        </h1>

        <p className="main-text">
          Unlock the Power of play and turn your passion into profits
          effortlessly.
        </p>

        <div className="btn-img-container">
          <Link to="/">
            <i class="bi bi-arrow-up-right"></i> Get Started
          </Link>
          <img src={imageIcon} alt="small img here" />
        </div>
      </div>

      {/* right side of the landing page(IMAGE) */}
      {/* right side of the landing page(IMAGE) */}

      <div className="landing-img-container">
        <img src={image} alt="here's landing img" />
      </div>
    </section>
  );
};

export default Landing;
