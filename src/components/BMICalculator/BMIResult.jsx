import React from 'react';

const BMIResult = ({ bmi, category }) => {
  return (
    <div id="bmiResult">
      <br />
      {bmi ? (
        <p>Your BMI is <strong>{bmi}</strong>, which is classified as <strong>{category}</strong>.</p>
      ) : (
        <p>Please enter valid weight and height.</p>
      )}
    </div>
  );
};

export default BMIResult;
