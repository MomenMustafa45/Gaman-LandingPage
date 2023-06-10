import React from "react";
import "./information-text.css";

const InformationText = ({ textHeader, textArray }) => {
  return (
    <section className="information-parent">
      <h2>{textHeader}</h2>
      {textArray?.map((t) => {
        return <p>{t}</p>;
      })}
    </section>
  );
};

export default InformationText;
