import React from "react";
import "./creator-card.css";
import image1 from "../../images/creator(1).png";

const CreatorCard = ({ creator, earned, followers }) => {
  return (
    <div className="creator-card-parent">
      <div className="img-card-container">
        <img src={image1} alt="card img" />
      </div>

      <h5 className="card-username">{creator}</h5>

      <div className="card-details">
        <div className="details-right">
          <p>${earned}</p>
          <p>Total Earning</p>
        </div>
        <div className="details-left">
          <p>{followers}M</p>
          <p>Followers</p>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
