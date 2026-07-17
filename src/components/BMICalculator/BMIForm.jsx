import React from "react";

const BMIForm = ({ weight, height, setWeight, setHeight, calculateBMI }) => {
  return (
    <form id="bmiForm" onSubmit={(event) => event.preventDefault()}>
      <div className="weight">
        <label htmlFor="weight__input">Weight (kg):&nbsp;</label>
        <input
          type="number"
          id="weight__input"
          name="weight"
          min="1"
          step="0.1"
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
            calculateBMI(e.target.value, height);
          }}
          required
        />
      </div>
      <div className="height">
        <label htmlFor="height__input">Height (cm):&nbsp;</label>
        <input
          type="number"
          id="height__input"
          name="height"
          min="1"
          step="0.1"
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
