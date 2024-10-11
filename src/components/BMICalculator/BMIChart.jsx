import React from "react";
import bmiImage from "/src/assets/bmi-index.jpg";

const BMIChart = ({ arrowPosition }) => {
  return (
    <div className="bmi-chart" style={{ "--arrow-position": arrowPosition ? `${arrowPosition}%` : undefined }}>
      <img src={bmiImage} alt="BMI chart" />
    </div>
  );
};

export default BMIChart;
