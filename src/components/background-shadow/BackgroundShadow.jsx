import React from "react";
import "./background-shadow.css";

const BackgroundShadow = ({ top, right, left, bottom }) => {
  return (
    <div
      className="background-shadow-container"
      style={{
        top: top ? `${top}px` : "0",
        right: right ? `${right}px` : "0",
        left: left ? `${left}px` : "0",
        bottom: bottom ? `${bottom}px` : "0",
      }}
    ></div>
  );
};

export default BackgroundShadow;
