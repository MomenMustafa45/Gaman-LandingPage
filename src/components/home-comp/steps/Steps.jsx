import React from "react";
import imageStepOne from "../../../images/Home screen.png";
import imageStepTwo from "../../../images/step 2.png";
import imageStepThree from "../../../images/step 3.png";
import imageStepFour from "../../../images/step 4.png";
import Swiper from "react-id-swiper";
import "./steps.css";
import "swiper/css/pagination";
import "swiper/css";
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);

const Steps = () => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      currentClass: "active",
      renderBullet: (index, className) => {
        return (
          '<span  class="' +
          className +
          '">' +
          ` <a href="#" class="cards-container">
                <i class="${
                  index === 0
                    ? "bi bi-person-add"
                    : index === 1
                    ? "bi bi-joystick"
                    : index === 2
                    ? "bi bi-trophy-fill"
                    : "bi bi-share"
                }"></i>
                 <h4>${
                   index === 0
                     ? "Create your account"
                     : index === 1
                     ? "Select a game"
                     : index === 2
                     ? "Create your first contests or tournament."
                     : "Share the link with your audience and start earning"
                 }</h4>
                 <span ${index === 1 && "autofocus"}>${index + 1}</span>
            </a> ` +
          "</span>"
        );
      },
    },
  };

  return (
    <section className="steps-parent">
      <div className="steps-header">
        <h2>
          Four Simple <span>Steps</span>
        </h2>
      </div>
      <Swiper {...params} className="mySwiper">
        <img src={imageStepOne} alt="this is img" />
        <img src={imageStepTwo} alt="this is img" />
        <img src={imageStepThree} alt="this is img" />
        <img src={imageStepFour} alt="this is img" />
      </Swiper>
    </section>
  );
};

export default Steps;
