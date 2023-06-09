import React from "react";
import image from "../../../images/faq-photo.png";
import FaqMainCard from "../../faq-main-card/FaqMainCard";
import FaqSmallCard from "../../faq-small-card/FaqSmallCard";
import "./faq.css";

const Faq = () => {
  return (
    <section className="faq-parent">
      <div className="img-fag-container">
        <img src={image} alt="this is img" />
      </div>

      <div className="text-fag-container">
        <h2>Faq Section</h2>

        <FaqMainCard />

        <div className="faq-cards-container">
          <FaqSmallCard text="Why should I trust Gaman" />
          <FaqSmallCard text="When will I get the money earned in my account" />
          <FaqSmallCard text="What is the Main Reson for using this platform" />
          <FaqSmallCard text="What makes this different from other platforms? " />
        </div>
      </div>
    </section>
  );
};

export default Faq;
