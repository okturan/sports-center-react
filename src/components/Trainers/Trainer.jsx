import React from "react";

const Trainer = ({ name, specialty, image, alt }) => {
  return (
    <picture>
      <img src={image} alt={alt} className="trainer-image" />
      <div className="trainer__info">
        <h3 className="trainer__name">{name}</h3>
        <p className="trainer__specialty">{specialty}</p>
      </div>
      <div className="trainer__decoration"></div>
    </picture>
  );
};

export default Trainer;
