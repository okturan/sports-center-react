import React from "react";

const BMIForm = ({ weight, height, setWeight, setHeight, calculateBMI }) => {
  return (
    <form id="bmiForm">
      <div className="weight">
        <label htmlFor="weight">Weight (kg):&nbsp;</label>
        <input
          type="number"
          id="weight__input"
          name="weight"
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
            calculateBMI(e.target.value, height);
          }}
          required
        />
      </div>
      <div className="height">
        <label htmlFor="height">Height (cm):&nbsp;</label>
        <input
          type="number"
          id="height__input"
          name="height"
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
            calculateBMI(weight, e.target.value);
          }}
          required
        />
      </div>
    </form>
  );
};

export default BMIForm;
