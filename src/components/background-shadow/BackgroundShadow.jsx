import React from "react";
import "./background-shadow.css";

const BackgroundShadow = ({ top, right, left, bottom }) => {
  return (
    <div
      className="background-shadow-container"
      style={{
        top: top ? `${top}` : "0",
        right: right ? `${right}` : "0",
        left: left ? `${left}` : "0",
        bottom: bottom ? `${bottom}` : "0",
      }}
    ></div>
  );
};

export default BackgroundShadow;
