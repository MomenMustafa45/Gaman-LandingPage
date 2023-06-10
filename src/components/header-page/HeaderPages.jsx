import React from "react";
import "./header-pages.css";

const HeaderPages = ({ text }) => {
  return (
    <div className="header-pages-parent">
      <h1>{text}</h1>
    </div>
  );
};

export default HeaderPages;
