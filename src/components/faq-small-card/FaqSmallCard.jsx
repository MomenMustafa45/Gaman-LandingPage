import React from "react";
import "./faq-small-card.css";

const FaqSmallCard = ({ text }) => {
  return (
    <div className="faq-small-card">
      <p>{text}</p>
      <i className="bi bi-caret-down-square"></i>
    </div>
  );
};

export default FaqSmallCard;
