import React from "react";
import "./faq-main-card.css";

const FaqMainCard = () => {
  return (
    <div className="faq-main-card-container">
      <div className="main-card-header">
        <p>How is this different from other apps?</p>
        <i className="bi bi-x-circle"></i>
      </div>
      <p className="card-text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </p>
    </div>
  );
};

export default FaqMainCard;
