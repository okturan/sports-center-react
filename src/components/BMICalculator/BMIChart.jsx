import React from "react";
import { BMI_SEGMENTS } from "../../bmi";

const BMIChart = ({ arrowPosition }) => {
  return (
    <div
      className="bmi-chart"
      aria-label="Adult BMI category ranges"
      style={{ "--arrow-position": arrowPosition === null ? undefined : `${arrowPosition}%` }}>
      {BMI_SEGMENTS.map(({ label, min, max }) => (
        <div className="bmi-segment" key={label}>
          <strong>{label}</strong>
          <span>{min === 13.5 ? `< ${max}` : max === 45.5 ? `≥ ${min}` : `${min}–<${max}`}</span>
        </div>
      ))}
    </div>
  );
};

export default BMIChart;
