import React from 'react';

const BMIResult = ({ bmi, category }) => {
  return (
    <div id="bmiResult" aria-live="polite">
      <br />
      {bmi ? (
        <p>Your BMI is <strong>{bmi}</strong>, which is classified as <strong>{category}</strong>.</p>
      ) : (
        <p>Enter weight and height to see a result.</p>
      )}
    </div>
  );
};

export default BMIResult;
