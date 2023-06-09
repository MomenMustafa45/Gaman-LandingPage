import React from "react";
import "./creator-card.css";
import image1 from "../../images/creator(1).png";

const CreatorCard = () => {
  return (
    <div className="creator-card-parent">
      <div className="img-card-container">
        <img src={image1} alt="card img" />
      </div>

      <h5 className="card-username">Jaweria</h5>

      <div className="card-details">
        <div className="details-right">
          <p>$23,943,422</p>
          <p>Total Earning</p>
        </div>
        <div className="details-left">
          <p>5M</p>
          <p>Followers</p>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
